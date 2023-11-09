/** @format */

import { CSSProperties } from 'react';

export enum IconsEnum {
  logo = '/icons/stroke/logo.svg',
  exit = '/icons/stroke/exit.svg',
  loader = '/icons/stroke/loader.svg',
  cart = '/icons/stroke/cart.svg',
  search = '/icons/stroke/search.svg',
  info = '/icons/stroke/info.svg',
  moon = '/icons/stroke/moon.svg',
  sun = '/icons/stroke/sun.svg',
  cross = '/icons/stroke/cross.svg',
}

export type SvgIconProps = {
  src: IconsEnum;
  onClick?: () => void;
  size?: number;
  rotate?: '0' | '90' | '180' | '270';
  className?: string;
  style?: CSSProperties;
};
