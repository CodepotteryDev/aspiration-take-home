import '../topic.list.css';

const ListBreadcrumbs = (props) => {
  const { breadcrumbs, onBreadcrumbSelection } = props;

  return (
    <ul className="breadcrumb-tracker" data-test-id="breadcrumb-tracker">
      {breadcrumbs.map((breadCrumb, index) => (
        <li key={index}>
          <button
            data-test-id={`breadcrumb-tracker-button-${index + 1}`}
            onClick={() => onBreadcrumbSelection(breadCrumb, index)}
          >
            {breadCrumb}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ListBreadcrumbs;