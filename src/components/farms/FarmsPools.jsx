import React from 'react'
import "./style/farmsPools.scss"
import { Link } from 'react-router-dom'

const FarmsPools = () => {
  return (
    <div className='cont'>
  <div className="farms_nav">

    <Link className='farms-link' to={"/farms"}>
      Farms
      </Link>
  
      <Link className='farms-pools' to={"/Pools"}>
      Pools
      </Link>
 
    </div>
    </div>
  )
}

export default FarmsPools
