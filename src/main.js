import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBurger, faCartPlus, faHeadphones, faMugSaucer, faUserTie, faUtensils } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
/* add icons to the library */
library.add(faUtensils, faUserTie, faCartPlus, faHeadphones, faFacebookF, faTwitter, faInstagram, faMugSaucer, faBurger)

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
app.component('font-awesome-icon', FontAwesomeIcon)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
