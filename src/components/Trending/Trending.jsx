import { useState } from 'react'
import "./Trending.css"
import Home from '../Homes/Home'
import { trending } from '../../dummyData'

export default function Trending() {
  const [items, setItem] = useState(trending)
  return (
    <>
    <div className="trending">
      <Home items = {items} />
    </div>
    </>
  )
}
