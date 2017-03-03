/* eslint-disable */
import 'element-ui/lib/theme-default/index.css';
import ElementUI from 'element-ui';
import Vue from 'vue/dist/vue';
import VueRouter from 'vue-router/dist/vue-router';
import App from './app';
import Home from './components/home';
import Demo from './components/demo';
import About from './components/about';
Vue.use(ElementUI);
Vue.use(VueRouter);



new Vue({
    el: '#app',
    render: h => h(App),
    router: new VueRouter({
        mode: 'hash',
        routes: [
            { path: '/', component: Home },
            { path: '/demo', component: Demo },
            { path: '/about', component: About }
        ]
    })
});