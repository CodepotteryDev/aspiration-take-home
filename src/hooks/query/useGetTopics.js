import { useLazyQuery } from '@apollo/react-hooks';
import { gql } from '@apollo/client';
import {useEffect, useMemo} from "react";
import {toast} from "react-hot-toast";

const GET_TOPICS = gql`
    query($name: String!, $last: Int!) {
        topic(name: $name) {
            repositories(last: $last) {
                nodes {
                    name
                    stargazerCount
                }
            }
        }
    }
`;

const topicMapper = (rawData) => {
    return rawData?.topic?.repositories?.nodes.map((topic) => ({
        name: topic.name,
        stars: topic.stargazerCount,
    })).sort((a, b) => a.name.localeCompare(b.name)) || [];
}

export const useGetTopics = () => {
    const [getTopics, { loading, error, data: rawData }] = useLazyQuery(GET_TOPICS);

    const mappedData = useMemo(() => topicMapper(rawData), [rawData]);

    useEffect(() => {
        if (error) {
            toast.error(`${error.message}. Please try again.`);
        }
    }, [error]);

    return { getTopics, loading, error, data: mappedData };
};
