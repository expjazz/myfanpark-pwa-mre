import axios from 'axios'
import Script from 'next/script'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [apiData, setApiData] = useState<string>('')
  const fetchData = async () => {
    try {
      const res = await axios.get('https://app.staging.starsona.com/api/v2/partner/partner_config/', {
        headers: {
          device: 'web',
          'Content-Type': 'application/json',
        }
      })
      if (res && res.data) {
        setApiData('Api call loaded')
      }
    } catch {
      setApiData("Api call failed")
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className={styles.container}>
      <Script
        type="text/javascript"
				src="https://appx/web-view.min.js"
				strategy='lazyOnload'
				onLoad={() => { alert('script loaded') }}
        onError={() => { alert('script error') }}
				// onError={() => {alert('vodapay script error');}}
      />
      <main className={styles.main}>
        <h1>
          A popup will be shown if the script was loaded successfully or if it had an error.
        </h1>

        <p>
          {apiData}
        </p>
      </main>
    </div>
  )
}
