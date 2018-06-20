import {
  FETCH_POSTS_FRONT_PAGE,
  FETCH_POSTS_FASHION,
  FETCH_POSTS_PORTRAITS,
  FETCH_POSTS_ADVERTISING
} from '../actions/ActionTumblr';

export function getTag(pathname) {
  if (pathname === '/gallery/fashion') {
    return 'portfolio-fashion';
  } else if (pathname === '/gallery/portraits') {
    return 'portfolio-portrait';
  } else if (pathname === '/gallery/still-life') {
    return 'portfolio-still-life';
  } else {
    return 'front-page';
  }
}


export function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
