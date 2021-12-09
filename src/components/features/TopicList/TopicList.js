import TopicListBody from './layout/TopicListBody';
import TopicListActions from './layout/TopicListActions';
import ListBreadcrumbs from './layout/ListBreadcrumbs';

import { useGetTopics } from '../../../hooks/query';
import { useEffect, useState } from 'react';

import { HOME_TOPIC, OFFSET_INCREMENT } from '../../../constants';

import './topic.list.css';

const TopicList = () => {
  const [items, setItems] = useState([]);
  const [activeTopic, setActiveTopic] = useState('');
  const [breadCrumbs, setBreadCrumbs] = useState([]);
  const [, setCurrListOffset] = useState(OFFSET_INCREMENT);

  const { getTopics, data, loading } = useGetTopics();

  const fetchTopic = (name, offset = OFFSET_INCREMENT) => {
    setActiveTopic(name);
    getTopics({
      variables: {
        name: name,
        last: offset,
      },
    });
  };

  const handleTopicSelection = (name) => {
    setBreadCrumbs(name !== HOME_TOPIC ? [...breadCrumbs, name] : [HOME_TOPIC]);
    fetchTopic(name);
  };

  const handleBreadcrumbSelection = (name, index) => {
    setBreadCrumbs(index ? breadCrumbs.slice(0, index + 1) : [HOME_TOPIC]);
    fetchTopic(name);
  };

  const handleShowMoreItems = (reset) => {
    setCurrListOffset((prevState) => {
      const offset = reset ? OFFSET_INCREMENT : prevState + OFFSET_INCREMENT;
      fetchTopic(activeTopic, offset);
      return offset;
    });
  };

  useEffect(() => {
    if (data && !loading) {
      setItems(data);
    }
  }, [data, loading]);

  useEffect(() => {
    if (!items.length) {
      handleTopicSelection(HOME_TOPIC);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="main-container">
      <h1 className={'topic-title'}>{`Topic ${activeTopic}`}</h1>
      <ListBreadcrumbs
        breadcrumbs={breadCrumbs}
        onBreadcrumbSelection={handleBreadcrumbSelection}
      />
      <TopicListBody
        topics={items}
        isTopicListLoading={loading}
        defaultTopic={HOME_TOPIC}
        onTopicSelection={handleTopicSelection}
      />
      <TopicListActions
        showListActions={items.length && !loading}
        onShowMoreItems={handleShowMoreItems}
      />
    </div>
  );
};

export default TopicList;
