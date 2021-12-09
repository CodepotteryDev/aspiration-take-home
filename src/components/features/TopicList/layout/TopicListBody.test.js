import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import TopicListBody from './TopicListBody';

configure({ adapter: new Adapter() });

function between(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

describe('TopicListActions Tests', () => {
  const topicItems = [
    { name: 'Item 1', starts: 0 },
    { name: 'Item 2', starts: 1 },
    { name: 'Item 3', starts: 2 },
  ];

  it('should show no repo message', () => {
    const wrapper = mount(
      <TopicListBody
        topics={[]}
        isTopicListLoading={false}
        onTopicSelection={() => {}}
        defaultTopic="TEST"
      />,
    );

    expect(
      wrapper.find('[data-test-id="empty-topic-message-container"]').exists(),
    ).toBe(true);
  });

  it('should show loading message', () => {
    const wrapper = mount(
      <TopicListBody
        topics={[]}
        isTopicListLoading={true}
        onTopicSelection={() => {}}
        defaultTopic="TEST"
      />,
    );

    expect(
      wrapper.find('[data-test-id="loading-message-container"]').exists(),
    ).toBe(true);
  });

  it('should show repo list', () => {
    const wrapper = mount(
      <TopicListBody
        topics={topicItems}
        isTopicListLoading={false}
        onTopicSelection={() => {}}
        defaultTopic="TEST"
      />,
    );

    expect(wrapper.find('[data-test-id^="topic-repo-item"]').length).toBe(3);
  });

  it('should show fire list item action', () => {
    const randomItemNumber = between(0, topicItems.length);
    const props = { onTopicSelection: jest.fn() };
    const wrapper = mount(
      <TopicListBody
        {...props}
        topics={topicItems}
        isTopicListLoading={false}
        defaultTopic="TEST"
      />,
    );

    wrapper
      .find(`[data-test-id^="topic-repo-button-${randomItemNumber}"]`)
      .simulate('click');

    expect(props.onTopicSelection).toBeCalled();
  });
});
