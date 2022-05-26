import { createApp } from 'vue'
import App from './App.vue'

import VCalendar from 'v-calendar';

// Use v-calendar & v-date-picker components
App.use(VCalendar, {
  componentPrefix: 'vc',  // Use <vc-calendar /> instead of <v-calendar />
             // ...other defaults
});

createApp(App).mount('#app')
