import { request } from 'umi';

export function query() {
  return request('/api/users');
}
