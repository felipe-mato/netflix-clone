/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { homeData, recommended } from "../../dummyData"
import { useParams } from "react-router-dom"
import Upcomming from "../Upcomming/Upcomming"
import './SinglePage.css'

export default function SinglePage() {
  const {id} = useParams()
  const [item, setItem] = useState(null)
  const [rec, setRec] = useState(recommended)

  useEffect(() => {
    let item = homeData.find((item) => item.id === parseInt(id))
    if (item) {
      setItem(item)
    }
  }, [id])
  return (
    <>
    {item? (
      <>
        <section className="singlePage" >
          <div className="singleHeading">
            <h1>{item.name}</h1>
            <span> | {item.time} | </span> <span>HD</span>
          </div>
          <div className="container">
            <div className="video">
              <iframe
                width="960"
                height="515"
                src={item.video}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              ></iframe>
            </div>
          <div className='social'>
                <h3>Share : </h3>
                <img src='https://img.icons8.com/color/48/000000/facebook-new.png' />
                <img src='https://img.icons8.com/fluency/48/000000/twitter-circled.png' />
                <img src='https://img.icons8.com/fluency/48/000000/linkedin-circled.png' />
              </div>
          </div>
        </section>
        <Upcomming items={rec} title="Recommended Movies" />      
      </>
    ):null}
    </>
  )
}
