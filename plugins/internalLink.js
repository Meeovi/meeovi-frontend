// plugins/internalLink.js

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('internal-link', {
      mounted(el) {
        el.addEventListener('click', (e) => {
          const links = el.getElementsByTagName('a')
          for (let i = 0; i < links.length; i++) {
            links[i].addEventListener('click', (e) => {
              const href = e.target.getAttribute('href')
              if (href && !href.startsWith('http') && !href.startsWith('//')) {
                e.preventDefault()
                navigateTo(href)
              }
            })
          }
        })
      }
    })
  })
  