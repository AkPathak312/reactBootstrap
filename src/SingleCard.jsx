import React from 'react'
import Image from './download.svg'
export default function SingleCard({data}) {
  return (
    <div className="card" style={{width:300}}>
    <img className="card-img-top" src={Image} alt="Card image cap"></img>
    <div className="card-body">
      <h5 className="card-title">{data.Category}</h5>
      <p className="card-text">{data.Description}</p>
      <a href="#" className="btn btn-primary">View Details</a>
    </div>
  </div>
  )
}
