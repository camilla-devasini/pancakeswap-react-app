import React from 'react'
import "./style/farmsNav.scss"
import iconHam from "../../assets/images/iconHam.svg"

const FarmsNav = () => {
  return (
    
       <div className="farms_caption">
  <div className="farms_caption_order">
  <button><img src={iconHam} alt=""/></button>
  <button></button>
  </div>
  <div className="farms_caption_staked">
    <label className="switch">
      <input type="checkbox" className="button-staked" defaultChecked />
      <span className="slider round" />
    </label>
    <p>Staked only</p>
  </div>
  <div className="farms_caption_staked">
    <label className="switch">
      <input type="checkbox" className="button-staked" defaultChecked />  
      <span className="slider round" />
    </label>
    <p>Booster available</p>
  </div>
  <div className="farms_caption_live">
    <a href="!#">Live</a>
    <a href="!#">Finished</a>
  </div>
  <div className="farms_caption_sort">
    <label htmlFor="sort">Sort by</label>
    <select name="sort" id="sort">
      <option value selected>Hot</option>
      <option value>APR</option>
      <option value>Multiplier</option>
      <option value>Liquidity</option>
      <option value>Latest</option>
    </select>
  </div>
  <div className="farms_caption_search">
    <label htmlFor="search">Search</label>
    <input id="search" name="search" type="search" placeholder="  Search Farms" />
  </div>
</div>

  )
}

export default FarmsNav
