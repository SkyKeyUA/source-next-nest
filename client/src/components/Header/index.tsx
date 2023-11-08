/** @format */

import React from 'react';
import styles from './Header.module.scss';
import { SwitchThemeButton } from '@components/UI/Button';

export const Header: React.FC = () => {
  return (
    <header className={styles.root}>
      Header
      <SwitchThemeButton />
    </header>
  );
};
