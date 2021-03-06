import {useLazyQuery} from '@apollo/react-hooks';
import {gql} from '@apollo/client';
import {useEffect, useMemo} from "react";
import {toast} from "react-hot-toast";

const GET_TOPICS = gql`
    query($name: String!, $first: Int!) {
        topic(name:$name) {
            id
            name
            stargazerCount
            relatedTopics(first: $first) {
                id
                name
                stargazerCount
            }
        }
    }
`;

const topicMapper = (rawData) => {
    return rawData?.topic?.relatedTopics?.map((topic) => ({
        name: topic.name,
        stars: topic.stargazerCount,
    })).sort((a, b) => a.name.localeCompare(b.name)) || [];
}

export const useGetTopics = () => {
    const [getTopics, {loading, error, data: rawData}] = useLazyQuery(GET_TOPICS, {fetchPolicy: 'cache-first'});

    const mappedData = useMemo(() => topicMapper(rawData), [rawData]);

    useEffect(() => {
        if (error) {
            toast.error(`${error.message}. Please try again.`);
        }
    }, [error]);

    return {getTopics, loading, error, data: mappedData};
};
