import { First, Last, Next, Prev } from 'react-bootstrap/esm/PageItem';
import Pagination from 'react-bootstrap/Pagination';

import styles from './Pagination.module.scss';

type CustomPaginationProps = {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
};

const CustomPagination = ({ currentPage, setCurrentPage, totalPages }: CustomPaginationProps): JSX.Element => {
  const maxPagesToShow = 5;
  const items = [];
  let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

  if (totalPages <= maxPagesToShow) {
    startPage = 1;
    endPage = totalPages;
  } else {
    const maxPagesBeforeCurrent = Math.floor(maxPagesToShow / 2);
    const maxPagesAfterCurrent = Math.ceil(maxPagesToShow / 2) - 1;

    if (currentPage <= maxPagesBeforeCurrent) {
      endPage = maxPagesToShow;
    } else if (currentPage + maxPagesAfterCurrent >= totalPages) {
      startPage = totalPages - maxPagesToShow + 1;
    }
  }

  if (startPage > 1) {
    items.push(<Pagination.Ellipsis key="startEllipsis" />);
  }

  for (let number = startPage; number <= endPage; number++) {
    items.push(
      <Pagination.Item key={number} active={number === currentPage} onClick={() => setCurrentPage(number)}>
        {number}
      </Pagination.Item>
    );
  }

  if (endPage < totalPages) {
    items.push(<Pagination.Ellipsis key="endEllipsis" />);
  }

  return (
    <div className={styles.container}>
      <Pagination>
        <First onClick={() => setCurrentPage(1)} />
        <Prev onClick={() => setCurrentPage(currentPage - 1)} />
        {items}
        <Next onClick={() => setCurrentPage(currentPage + 1)} />
        <Last onClick={() => setCurrentPage(totalPages)} />
      </Pagination>
    </div>
  );
};

export default CustomPagination;
