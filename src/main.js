import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Parse from 'parse'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.config.productionTip = false

Parse.initialize(
  "eT3D8Upwj7LGbh1uMvRIuYjsEPSNlDRcNCHRiKRG",
  "f8bIRpa7VOEmkiManHeRlmyNBTSRDIqlRNcGsiNC"
);
Parse.serverURL = 'https://pg-app-uucg02h8mav1zq7cd70hiez6vsfcya.scalabl.cloud/1/';

Vue.use(Buefy)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
