import store from '../store/store'

export default function (to, from, next) {
    if (store.getters.isUserLogined) {
        next()
    } else {
        next('/login?loginError=true')
    }
}