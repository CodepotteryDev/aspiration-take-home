import { OFFSET_INCREMENT } from '../../../../constants';

const TopicListActions = (props) => {
  const { showListActions, onShowMoreItems } = props;

  return showListActions ? (
    <div
      className="list-actions-container"
      data-test-id="list-actions-container"
    >
      <button
        aria-label={`Show ${OFFSET_INCREMENT} more items`}
        className="show-more-button"
        data-test-id="show-more-button"
        onClick={() => onShowMoreItems()}
      >
        {`SHOW ${OFFSET_INCREMENT} MORE`}
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
