/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import StarRating from "./StarRating"

const HomeCard = ({ item: { id, cover, name, rating, time, desc, starring, genres, tags } }) => {
  return (
    <>
      <div className='box'>
        <div className='coverImage'>
          <img src={cover} alt='' />
        </div>
        <div className='content flex'>
          <div className='details row'>
            <h1>{name}</h1>
            <div className='rating flex'>
              <div className='rate'>
                <StarRating rating={rating} />
              </div>
              <label>{rating}</label>
              <i className="fa fa-clock-o clock" aria-hidden="true"></i>
              <label>{time}</label>
            </div>
            <p>{desc}</p>
            <div className='cast'>
              <h4>
                <span>Starring </span>
                {starring}
              </h4>
              <h4>
                <span>Genres </span>
                {genres}
              </h4>
              <h4>
                <span>Tags </span>
                {tags}
              </h4>
            </div>
              <Link to={`/singlepage/${id}`}> 
              <button className='primary-btn'>
              <i className='fa fa-play'></i>
              <button className="playBtn">
                PLAY NOW
              </button>
            </button>
            </Link> 
          </div>
          <div className='playButton row'>
            <Link to={`/singlepage/${id}`}>
              <button>
                <div className='img'>
                  <img src='./img/play-button.png' alt='' />
                  <img src='./img/play.png' className='change' />
                </div>
                WATCH TRAILER
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeCard