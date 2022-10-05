import { createRouter, createWebHistory } from "vue-router";
import App from './App.vue';
import LogIn from './components/LogIn.vue'
import SignUp from './components/SignUp.vue'
import RegSalud from './components/RegSalud.vue'
import ConPerSalud from './components/ConPerSalud.vue'
import RegPaciente from './components/RegPaciente.vue'
import ConPaciente from './components/ConPaciente.vue'
import RegFamiliar from './components/RegFamiliar.vue'
import ConFamiliar from './components/ConFamiliar.vue'
import Home from './components/Home.vue'


const routes = [{
        path: '/',
        name: 'root',
        component: App
    },
    {
        path: '/user/LogIn',
        name: "LogIn",
        component: LogIn
    },
    {
        path: '/user/SignUp',
        name: "SignUp",
        component: SignUp
    },
    {
        path: '/user/RegSalud',
        name: "RegSalud",
        component: RegSalud
    },
    {
        path: '/user/ConPerSalud',
        name: "ConPerSalud",
        component: ConPerSalud
    },
    {
        path: '/user/RegPaciente',
        name: "RegPaciente",
        component: RegPaciente
    },
    {
        path: '/user/ConPaciente',
        name: "ConPaciente",
        component: ConPaciente
    },
    {
        path: '/user/RegFamiliar',
        name: "RegFamiliar",
        component: RegFamiliar
    },
    {
        path: '/user/ConFamiliar',
        name: "ConFamiliar",
        component: ConFamiliar
    },
    {
        path: '/user/Home',
        name: "Home",
        component: Home
    }
    ];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;