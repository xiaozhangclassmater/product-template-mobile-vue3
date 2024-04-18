import { request } from '@/service'
export function sendTestData () {
  return request({
    url: '/',
    parasm: {
      a : '1'
    }
  })
}
