/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from 'react'; // Import useEffect
import { useDispatch, useSelector } from 'react-redux';
import type { TableColumnsType, TableProps } from 'antd';
import { Space, Table } from 'antd';
import { AppDispatch } from 'redux/store/store';
import { CategoryType } from 'types/categoryTypes';

import { ReactComponent as DeleteIcon } from 'assets/deleteIcon.svg';
import { ReactComponent as EditIcon } from 'assets/editIcon.svg';

import { selectAllCategories } from '../../redux/selectors/categorySelector';
import { deleteCategory, fetchCategories } from '../../redux/slices/categorySlice';

// import CreateCategory from './CreateUpdateCategoey/CreateUpdateCategoey';
import styles from './Category.module.scss';

const Categories = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const categories = useSelector(selectAllCategories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleDelete = (id: number): void => {
    dispatch(deleteCategory(id));
  };
  const columns: TableColumnsType<CategoryType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      // sorter: (a, b) => a.name - b.name,
      width: '80%',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <div className={styles.actions}>
            <button>
              <DeleteIcon className={styles.icon} onClick={() => console.log(record)} />
            </button>
            <button>
              <EditIcon className={styles.icon} />
            </button>
          </div>
        </Space>
      ),
    },
  ];
  // eslint-disable-next-line max-params
  const onChange: TableProps<CategoryType>['onChange'] = (pagination, filters, sorter, extra): void => {
    console.log('params', pagination, filters, sorter, extra);
  };

  return (
    <div>
      <h1>Categories</h1>
      <div>
        <Table columns={columns} dataSource={categories} onChange={onChange} />;
      </div>
    </div>
  );
};

export default Categories;
