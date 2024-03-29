import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'
// import Usuario from './components/usuario/Usuario'
// import UsuarioLista from './components/usuario/UsuarioLista'
// import UsuarioDetalhe from './components/usuario/UsuarioDetalhe'
// import UsuarioEditar from './components/usuario/UsuarioEditar'
import Menu from './components/template/Menu'
import MenuEn from './components/template/Menu.en'

Vue.use(Router)

const Usuario = () => import(/* webpackChunkName: "usuario" */'./components/usuario/Usuario')
const UsuarioLista = () => import(/* webpackChunkName: "usuario" */'./components/usuario/UsuarioLista')
const UsuarioDetalhe = () => import('./components/usuario/UsuarioDetalhe')
const UsuarioEditar = () => import('./components/usuario/UsuarioEditar')

const router = new Router({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else if (to.hash) {
            return { selector: to.hash }
        }
        return { x: 0, y: 0 }
    },
    routes: [
        {
            name: 'inicio',
            path: '/',
            // component: Inicio,
            components: {
                default: Inicio,
                menu: Menu
            }
        },
        {
            path: '/usuario',
            // component: Usuario,
            components: {
                default: Usuario,
                menu: MenuEn,
                menuInferior: MenuEn
            },
            props: true,
            children: [
                { path: '', component: UsuarioLista },
                {
                    path: ':id', component: UsuarioDetalhe, props: true,
                    beforeEnter: (to, from, next) => {
                        console.log('antes da rota -> usuário detalhe')
                        next()
                    }
                },
                { path: ':id/editar', component: UsuarioEditar, props: true, name: 'editarUsuario' }
            ]
        }, {
            path: '/redirecionar',
            redirect: '/usuario'
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})

router.beforeEach((to, from, next) => {
    console.log('antes das rotas -> global')
    // if (to.path !== '/usuario')
    //     next('/usuario')
    // else
    next()
})

export default router;