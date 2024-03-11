import React from 'react'
import './SearchStyles.css'

import Gold from '../../assets/gold.png'
import Golds from '../../assets/gold-22.png'
import Golding from '../../assets/gold-23.png'

function Search() {
    return (
        <div name='book' className='search'>
            <div className="container">
                <div className="left">
                    <h2>SEARCH FOR YOUR NEXT HOLIDAY ADVENTURE</h2>
                    <p>Embark on an unforgettable journey with us across all five continents. These are not just luxurious vacations, but immersive experiences designed to explore and embrace the diverse cultures of each country. Our all-inclusive packages cater to solo travelers, families, and groups alike. Explore the vibrant streets of Asia, uncover the rich history of Europe, venture into the wild landscapes of Africa, discover the natural wonders of the Americas, and relax on the serene shores of Oceania. With everything taken care of, including accommodation, meals, and activities, you can focus on creating lifelong memories and forging connections with people from around the globe. Start your adventure today!</p>
                    <div className="search-col-2">
                        <div className="box">
                            <div>
                                <img src={Gold} alt="/" style={{ marginRight: '1rem' }} />
                                <img src={Golds} alt="/" style={{ marginRight: '1rem' }} />
                                <img src={Golding} alt="/" style={{ marginRight: '1rem' }} />
                            </div>
                            <div>
                                <h3>GLOBAL LEADER</h3>
                                <p>THE WORLD´S LEADING TRAVEL AGENCY FOR THREE CONSECUTIVE YEARS</p>
                            </div>
                        </div>
                        <div className="box">
                            <div>
                                <h3>CONSISTENTLY PROVIDING THE BEST OFFERS</h3>
                                <p>THE TOP-RATED TRAVEL AGENCY FOR FIVE CONSECUTIVE YEARS</p>
                                <button className='button'>View Packages</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="promo">
                        <h4 className="save">ENJOY AN EXTRA 10% DISCOUNT</h4>
                        <p className="timer">24 HOURS LEFT!</p>
                        <p className="offers">VIEW ALL OFFERS</p>
                    </div>
                    <form>
                        <div className="input-wrap">
                            <label>Destination</label>
                            <select>
                                <option value="1">Europe</option>
                                <option value="1">Asia</option>
                                <option value="1">America</option>
                                <option value="1">Africa</option>
                                <option value="1">Oceania</option>
                            </select>
                        </div>
                        <div className="date">
                            <div className="input-wrap">
                                <label>Check-In</label>
                                <input type="date" />
                            </div>
                            <div className="input-wrap">
                                <label>Check-Out</label>
                                <input type="date" />
                            </div>
                        </div>
                        <button className='button'>Rates & Availability</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Search;