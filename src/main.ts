import { createApp } from 'vue'
import 'normalize.css'
import 'leaflet/dist/leaflet.css'
import 'leaflet.markercluster/dist/MarkerCluster.Default.css'
import './style.css'
import App from './App.vue'
import { setupRouter } from './router'

function bootstrap() {
  const app = createApp(App);
  setupRouter(app)
  app.mount('#app')
}

bootstrap()
