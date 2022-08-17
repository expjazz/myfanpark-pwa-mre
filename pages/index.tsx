import axios from 'axios'
import Script from 'next/script'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [apiData, setApiData] = useState<string>('')
  const getData = async (endpoint = 'https://app.starsona.com/api/v2/partner/partner_config/') => {
    try {
      const res = await axios.get(endpoint, {
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
    getData()
    getData('https://app.starsona.com/api/v1/config/')
    getData('https://app.starsona.com/api/v2/user/user_details/expeditoandrade67/get_details/?entity=MYFANPARK-US-1')
    getData('https://app.starsona.com/api/v2/request/featured_videos/?user_id=expeditoandrade67&limit=20&offset=0')
    getData('https://app.starsona.com/api/v2/fun_stuff/celebrity_fun_stuff/expeditoandrade67')
    getData('https://app.starsona.com/api/v2/request/reactions_full_listing/expeditoandrade67?limit=10&offset=0')
    getData('https://app.starsona.com/api/v2/user/similar_stars/expeditoandrade67?limit=10&offset=0')
    getData('https://app.starsona.com/api/v2/promotions/celeb_promo_templates/?vanity=expeditoandrade67')
    getData('https://app.starsona.com/api/v2/social_media/social_media_list/expeditoandrade67')
    getData('https://app.starsona.com/api/v2/products/celebrity_product/expeditoandrade67')
    getData('https://app.starsona.com/api/v2/user/top_products/expeditoandrade67')
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
