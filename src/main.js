import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import VueGeolocation from 'vue-browser-geolocation'
import * as VueGoogleMaps from 'vue2-google-maps'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueGeolocation)
Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyBEcBA9573dKArtfoZKjIlnVeOyiwYGQk4',
        libraries: "places"
    }
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
