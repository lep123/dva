import dynamic from 'dva/dynamic'
const app = window.app
const Home = dynamic({
  app,
  models: () => [
    import('@/models/home'),
  ],
  component: () => import('@/pages/home'),
})
const List = dynamic({
  app,
  // models: () => [
  //   import('./models/users'),
  // ],
  component: () => import('@/pages/list'),
})
export default {
  Home,
  List,
}