import { useState } from 'react'
import Homes from '../components/Homes/Homes'
import Upcomming from '../components/Upcomming/Upcomming'
import { latest, recommended, upcome } from '../dummyData'
import Trending from '../components/Trending/Trending'

export default function HomePages() {
  const [items, setItems] = useState(upcome)
  const [item, setItem] = useState(latest)
  const [rec, setRec] = useState(recommended)
  return (
    <>
  <Homes />
  <Upcomming items={items} title='Upcomming Movies' />
  <Upcomming items={item} title='Latest Movies' />
  <Trending />
  <Upcomming items={rec} title='Recommended' />

    </>
  )
}
