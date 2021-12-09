const TopicListActions = (props) => {
  const { showListActions, onShowMoreItems } = props;

  return showListActions ? (
    <div
      className="list-actions-container"
      data-test-id="list-actions-container"
    >
      <button
        aria-label={`Show more items`}
        className="show-more-button"
        data-test-id="show-more-button"
        onClick={() => onShowMoreItems()}
      >
        {`SHOW MORE`}
      </button>
      <button
        aria-label="Reset number of topics"
        className="show-more-button"
        data-test-id="reset-button"
        onClick={() => onShowMoreItems(true)}
      >
        RESET
      </button>
    </div>
  ) : null;
};

export default TopicListActions;
