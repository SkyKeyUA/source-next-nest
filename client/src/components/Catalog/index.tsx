/** @format */

import React from 'react';
import styles from './Catalog.module.scss';

import { useAppDispatch } from '@hooks/redux';
import { useFilterSelector } from '@redux/reducers/filter/selectors';
import { setCategoryId } from '@redux/reducers/filter/reducer';

type CatalogProps = {
  categoryId: number;
  onClickCatalog: (i: number) => void;
};

const categories = [
  {
    id: 0,
    menuCatalog: 'Unit 1',
  },
  {
    id: 1,
    menuCatalog: 'Unit 2',
  },
  {
    id: 2,
    menuCatalog: 'Unit 3',
  },
  {
    id: 3,
    menuCatalog: 'Unit 4',
  },
  {
    id: 4,
    menuCatalog: 'Unit 5',
  },
];

export const Catalog: React.FC = () => {
  const dispatch = useAppDispatch();
  const onClickCatalog = React.useCallback((idx: number) => {
    dispatch(setCategoryId(idx));
  }, []);
  const { categoryId } = useFilterSelector();
  return (
    <div className={styles.inner}>
      <div className={styles.container}>
        <nav className={styles.menu}>
          <ul className={styles.list}>
            {categories.map(({ id, menuCatalog }) => (
              <li
                onClick={() => onClickCatalog(id)}
                key={id}
                className={`${styles.item} ${categoryId === id ? `${styles.item_open}` : ''}`}>
                {menuCatalog}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
