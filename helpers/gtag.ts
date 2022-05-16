export const trackingID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

interface GtagEvent {
  action: string
  category?: string
  label?: string
  value?: number
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (window.gtag == null || trackingID == null) {
    return
  }

  window.gtag('config', trackingID, {
    page_path: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = (event: GtagEvent) => {
  if (window.gtag == null) {
    return
  }

  window.gtag('event', event.action, {
    event_category: event.category,
    event_label: event.label,
    value: event.value,
  })
}
