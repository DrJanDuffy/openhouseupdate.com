/*
 * WHAT IS THIS FILE?
 *
 * The service-worker.ts file is used to have state of the art prefetching.
 * https://qwik.builder.io/qwikcity/prefetching/overview/
 *
 * Qwik uses a service worker to speed up your site and reduce latency, ie, not used in the traditional way of offline.
 * You can also use this file to add more functionality that runs in the service worker.
 */
import { setupServiceWorker } from '@builder.io/qwik-city/service-worker'

setupServiceWorker()

// Enhanced service worker for real estate website
addEventListener('install', () => {
  console.log('Service Worker installing...')
  self.skipWaiting()
})

addEventListener('activate', () => {
  console.log('Service Worker activating...')
  self.clients.claim()
})

// Cache RealScout widgets for better performance
addEventListener('fetch', (event) => {
  const fetchEvent = event as FetchEvent
  const request = fetchEvent.request
  const url = new URL(request.url)

  // Cache RealScout widget scripts
  if (url.hostname === 'em.realscout.com' && url.pathname.includes('realscout-web-components')) {
    fetchEvent.respondWith(
      caches.open('realscout-cache').then((cache) => {
        return cache.match(request).then((response) => {
          if (response) {
            return response
          }
          return fetch(request).then((fetchResponse) => {
            cache.put(request, fetchResponse.clone())
            return fetchResponse
          })
        })
      })
    )
  }
})

declare const self: ServiceWorkerGlobalScope
