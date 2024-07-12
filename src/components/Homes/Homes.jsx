import { useState } from 'react'
import { homeData } from '../../dummyData'
import Home from './Home'
import './homes.css'

export default function Homes() {
const [items, setItem] = useState(homeData)
  return (
    <>
    <section className='home'>
      <Home items={items} />
    </section>
    <div className="margin"></div>
    </>
  )
}
