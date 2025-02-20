import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router';
import HomeView from './pages/HomeView.vue';
import SpotifyAuthRedirect from './pages/SpotifyAuthRedirect.vue';


const routes = [
    { path: '/', component: HomeView },
    { path: '/auth/callback', component: SpotifyAuthRedirect}
  ]
  
  const router = createRouter({
    history: createWebHistory(),
    routes,  
    scrollBehavior(to, from, savedPosition) {
      if (to.hash) {
        console.log("Scrolling to ", to.hash, " from " , from.hash);
        return {
          el: to.hash,
          behavior: 'smooth',
        };
      }
      return { top: 0 };
    },
  });

createApp(App)
    .use(router)
    .mount('#app')