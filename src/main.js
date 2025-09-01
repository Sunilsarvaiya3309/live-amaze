import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import './assets/tailwind.css';
import { MotionPlugin } from '@vueuse/motion'

if (process.env.NODE_ENV === 'development') {
  const observerErrorHandler = window.onerror;
  window.onerror = function (message, ...args) {
    if (
      typeof message === "string" &&
      message.includes("ResizeObserver loop completed")
    ) {
      return true; // Suppress it
    }
    return observerErrorHandler?.(message, ...args);
  };

  window.addEventListener("error", (e) => {
    if (e.message.includes("ResizeObserver loop completed")) {
      e.stopImmediatePropagation();
    }
  });
}

const app = createApp(App);

app.use(router).use(MotionPlugin).mount('#app');
