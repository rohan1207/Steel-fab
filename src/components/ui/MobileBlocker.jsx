import { useEffect, useState } from 'react'
import { Monitor } from 'lucide-react'

const MOBILE_QUERY = '(max-width: 767px)'

export default function MobileBlocker({ children }) {
  const [isPhone, setIsPhone] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY)
    const update = () => setIsPhone(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  if (isPhone) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-navy-950 to-indigo-900 text-white px-6 text-center">
        <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-5">
          <Monitor size={28} className="text-indigo-200" />
        </div>
        <img src="/logo.png" alt="Steelfab Engineering" className="h-10 object-contain mb-6" />
        <h1 className="font-display font-700 text-xl sm:text-2xl mb-3">Please view on desktop</h1>
        <p className="text-indigo-100 text-sm leading-relaxed max-w-sm">
          Our website is best experienced on a larger screen. Mobile version is coming soon.
        </p>
      </div>
    )
  }

  return children
}
