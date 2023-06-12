import VueMatomo from 'vue-matomo'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(VueMatomo, {
    
    router: nuxtApp.$router,
    host: process.env.MATOMO_HOST,
    siteId: process.env.MATOMO_SITEID,
    enableLinkTracking: true,
    requireConsent: false,
    trackInitialView: true,
    disableCookies: false,
    requireCookieConsent: false,
    enableHeartBeatTimer: true,
    heartBeatTimerInterval: 5,
    trackerFileName: 'piwik',
    trackerUrl: process.env.MATOMO_HOST + 'matomo.php',
    trackerScriptUrl: process.env.MATOMO_HOST + '/matomo.js',
    userId: '',
    preInitActions: [
      ['setCustomVariable', '1', 'VisitorType', 'Member'],
      ['appendToTrackingUrl', 'new_visit=1']
    ]
  })
})
