import { useSyncExternalStore } from 'react'
import { Monitor } from 'lucide-react'

/** Block phones & small tablets — matches index.html #mobile-block-screen */
export const MOBILE_MQ = '(max-width: 1023px)'

function subscribeMobile(onChange) {
  const mq = window.matchMedia(MOBILE_MQ)
  mq.addEventListener('change', onChange)
  return () => mq.removeEventListener('change', onChange)
}

function getMobileSnapshot() {
  return window.matchMedia(MOBILE_MQ).matches
}

function getMobileServerSnapshot() {
  return false
}

function MobileBlockScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-navy-950 via-navy-900 to-indigo-900 p-6 text-center text-white">
      <div className="max-w-sm">
        <img src="/logo.png" alt="Steelfab Engineering" className="h-12 w-auto mx-auto mb-6 object-contain" />
        <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-5">
          <Monitor size={28} className="text-indigo-300" aria-hidden />
        </div>
        <h1 className="font-display font-700 text-xl mb-2">Please view on desktop</h1>
        <p className="text-sm text-indigo-200 leading-relaxed">
          The Steelfab Engineering website is best experienced on a desktop or laptop. Mobile support is coming soon.
        </p>
      </div>
    </div>
  )
}

export default function MobileBlocker({ children }) {
  const isMobile = useSyncExternalStore(subscribeMobile, getMobileSnapshot, getMobileServerSnapshot)

  if (isMobile) {
    return <MobileBlockScreen />
  }

  return children
}
