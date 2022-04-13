import request from '../utils/request';

const proxy = 'https://www.fastmock.site/mock/0124bc2300d6801e49d9dcebae8b2107/testapi/'
export function query() {
  return request('/api/users');
}

export function querylist() {
  return request(proxy + 'testapi');
}

