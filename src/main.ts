import { createApp } from 'vue'
import 'normalize.css'
import './style.css'
import App from './App.vue'
import { setupRouter } from './router'

function bootstrap() {
  const app = createApp(App);
  setupRouter(app)
  app.mount('#app')
}

bootstrap()
