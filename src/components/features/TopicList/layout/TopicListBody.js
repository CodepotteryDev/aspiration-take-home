import '../topic.list.css';

const TopicListBody = (props) => {
  const { topics, isTopicListLoading, onTopicSelection, defaultTopic } = props;

  return (
    <table className="topic-list">
      <thead>
        <tr>
          <th className="topic-col-repo">TOPIC</th>
          <th className="topic-col-stars">STARS</th>
          <th className="topic-col-action">ACTION</th>
        </tr>
      </thead>
      <tbody>
        {!isTopicListLoading && topics.length
          ? topics.map((item, index) => (
              <tr
                key={index}
                className="topic-row"
                data-test-id={`topic-repo-item-${index}`}
              >
                <td className="topic-col-repo">{item.name}</td>
                <td className="topic-col-stars">{item.stars}</td>
                <td className="topic-col-action">
                  {
                    <button
                      aria-label={`Show topics related to ${item.name} topic`}
                      data-test-id={`topic-repo-button-${index + 1}`}
                      onClick={() => {
                        onTopicSelection(item.name, 50);
                      }}
                    >
                      SHOW RELATED TOPICS
                    </button>
                  }
                </td>
              </tr>
            ))
          : null}
        {isTopicListLoading ? (
          <tr data-test-id="loading-message-container">
            <td className="topic-list-message" colSpan={3}>
              Loading...
            </td>
          </tr>
        ) : null}
        {!isTopicListLoading && !topics.length ? (
          <tr data-test-id="empty-topic-message-container">
            <td className="topic-list-message" colSpan={3}>
              <div>
                This topic doesn't contain related repos.
                <button
                  aria-label="Return to home"
                  className="return-home-button"
                  data-test-id="return-home-button"
                  onClick={() => onTopicSelection(defaultTopic)}
                >
                  RETURN TO HOME
                </button>
              </div>
            </td>
          </tr>
        ) : null}
      </tbody>
    </table>
  );
};

export default TopicListBody;
