import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setCookie = (value) => {
  return cookies.set('token', value);
};

// 반환 값이 필요하기 때문에 return이 필요합니다.
export const getTokenFromCookie = () => {
  return cookies.get('token');
};

export const removeTokenFromCookie = () => {
  cookies.remove('token');
};
