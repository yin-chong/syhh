import index from '@/pages/index'

export default [
  {
    path: '*',
    redirect: 'index'
  },
  {
    path: '/index',
    component: index
  }
]
