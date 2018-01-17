const Users = () => import('./views/Users/index.vue');
const UsersList = () => import('./views/Users/List/index.vue');
const UsersDetail = () => import('./views/Users/Detail/index.vue');

const NotFound = () => import('./views/NotFound/index.vue');

export default [
  {
    path: '/error404',
    component: NotFound,
  },
  {
    path: '/',
    component: Users,
    children: [
      {
        path: '',
        component: UsersList,
      },
      {
        path: ':id',
        component: UsersDetail,
      },
    ],
  },
  {
    path: '*',
    component: NotFound,
  }
];
