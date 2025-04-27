import { createRouter, createWebHistory } from 'vue-router';
import folderList from './folderList.vue'; 
import photoManagement from './photoManagement.vue'; 
const routes = [
  { path: '/photo-management', component: photoManagement }, 
  { path: '/folder-list', component: folderList },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;