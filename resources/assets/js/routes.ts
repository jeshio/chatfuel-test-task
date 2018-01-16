const Users = () => import('./views/Users/index.vue');
const UsersList = () => import('./views/Users/List/index.vue');

export default [
  {
    path: '/',
    component: Users,
    children: [
      {
        path: '',
        component: UsersList,
      }
    ],
  }
];
