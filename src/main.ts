import { createApp } from 'vue'
import App from './App.vue'
import { setupAssets, setupScrollbarStyle } from './plugins'
import { setupRouter } from './router'
import { setupI18n } from './locales/'
import { setupStore } from './store'

// createApp(App).mount('#app')

async function bootstrap() {
  const app = createApp(App)

  setupAssets()

  setupScrollbarStyle()

  setupStore(app)

  setupI18n(app)

  await setupRouter(app)

  app.mount('#app')
}
bootstrap()
