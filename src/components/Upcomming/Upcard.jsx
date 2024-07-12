/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

export default function Upcard({item: { id, cover, name, time } }) {
  return (
    <div className="MovieBox">
      <Link className="link" to={`/singlepage/${id}`}>
        <div className="img">
          <img src={ cover } alt={ name } />
        </div>
        <div className="text">
          <h3>{name}</h3>
          <span>{time}</span> <br />
          <button>
            <i className="fa fa-play"> PLAY NOW</i>
          </button>
        </div>
      </Link>
    </div>
  )
}
