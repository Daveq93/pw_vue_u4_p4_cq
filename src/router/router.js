import {createRouter,createWebHashHistory} from 'vue-router'

const routes =[
    {
        path:"/",
        component:()=> import('../modules/estudiante/pages/Bienvenida')
    },
    {
        path:"/busca",
        component:()=> import('../modules/estudiante/pages/ConsultaEstudiante')
    },
    {
        path:"/guarda",
        component:()=> import('../modules/estudiante/pages/GuardaEstudiante')
    },
    {
        path :"/actualiza",
        component:()=> import('../modules/estudiante/pages/ActualizarEstudiante')
    },
    {
        path:"/elimina",
        component:()=> import('../modules/estudiante/pages/EliminarEstudiante')
    }

]

const router = createRouter({
    history:createWebHashHistory(),
    routes,
})

export default router