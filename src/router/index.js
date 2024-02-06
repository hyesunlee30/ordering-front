import {createRouter, createWebHistory} from 'vue-router';
import HomeComponent from '@/components/HomeComponent'
import MemberList from '@/views/MemberList'
import LoginComponent from '@/views/LoginComponent'

const routes = [
    {
        path: '/',
        name: 'HOME',
        component: HomeComponent,
    },
    {
        path: '/members',
        name: 'MemberList',
        component: MemberList,
    },{
        path: '/login',
        name: 'Login',
        component: LoginComponent,
    },
]

const router = createRouter({
    //veu router는 내부적으로 히스토리 관리를 제공
    //1) 전에 있던 히스토리
    history: createWebHistory(),
    routes
});

export default router;