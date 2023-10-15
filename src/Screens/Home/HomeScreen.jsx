import React from 'react'
import './HomeScreenStyles.css'
import Hi from '../img/hi.png'
import {FcSettings} from 'react-icons/fc'
import {BsSearch} from 'react-icons/bs'
import Money from '../img/money.png'
import Notes from '../img/note.png'
import Balance from '../img/wallet.png'
import Store from '../img/bag.png'

import ProductsellScreen from './ProductsellScreen'
import CustomerScreen from './CustomerScreen'
import OverviewScreen from './OverviewScreen'
function HomeScreen() {
  return (
    <div className='main_container'>
        <div className="left_container">
            <div className='left_top_container'>
                <span>
                    <FcSettings className="setting_icon" size={24}/>
                    <h2 className='header_left'>DashBoard</h2>
                </span>

            </div>
        </div>
        <div className="right_container">
            <div className='header_text_right'>
                <h3 className='welcome_text'>Hello Arun </h3>
                <img className='hi_img' src={Hi} alt='hii'/>
                <div className="search_container">
                    <div className="search_input_container">
                        <input type='text' placeholder='Search over here'/>
                        <BsSearch className='search_icon' size={22}/>
                    </div>
                </div>  
            </div>
            <div className="top_row_container">

                <div className="row1">
                    <div className="icon_circle" style={{backgroundColor:"#aaf6cb"}}>
                        <div className="icon_img">
                            <img className='img_icon' src={Money} alt='Earning' />
                        </div>
                    </div>
                    <div className="text_right">
                        <span className='text1'>Earning</span>
                        <h2>$198K</h2>
                        <div className="text_bottom">
                          <h5 className='perc'>37.8%</h5>
                          <h5>this month</h5>
                        </div>
                    </div>
                </div>

                <div className="row1">
                    <div className="icon_circle" style={{backgroundColor:"#f9d9ef"}}>
                        <div className="icon_img">
                            <img className='img_icon' src={Notes} alt='Orders' />
                        </div>
                    </div>
                    <div className="text_right">
                        <span className='text1'>Orders</span>
                        <h2>$2.4K</h2>
                        <div className="text_bottom">
                          <h5 className='perc' style={{color:"#f11212"}}>2%</h5>
                          <h5>this month</h5>
                        </div>
                    </div>
                </div>
                <div className="row1">
                    <div className="icon_circle" style={{backgroundColor:"#ecef85"}}>
                        <div className="icon_img">
                            <img className='img_icon' src={Balance} alt='Balance' />
                        </div>
                    </div>
                    <div className="text_right">
                        <span className='text1'>Balance</span>
                        <h2>$198K</h2>
                        <div className="text_bottom">
                          <h5 className='perc' style={{color:"#f11212"}}>2%</h5>
                          <h5>this month</h5>
                        </div>
                    </div>
                </div>
                <div className="row1">
                    <div className="icon_circle" style={{backgroundColor:"#f28282"}}>
                        <div className="icon_img">
                            <img className='img_icon' src={Store} alt='Store' />
                        </div>
                    </div>
                    <div className="text_right">
                        <span className='text1'>Store</span>
                        <h2>$89K</h2>
                        <div className="text_bottom">
                          <h5 className='perc'>11%</h5>
                          <h5>this month</h5>
                        </div>
                    </div>
                </div>

            </div>
           { /*OverviewScreen*/ }
           <div className="middle_container">
                <div className="overview_container">
                    <OverviewScreen/>
                </div> 
                <div className="customer_container">
                   <CustomerScreen/>
                </div>
           </div>
           <div className="bottom_container">
                <ProductsellScreen/>
           </div>
           
        </div>
    </div>
  )
}

export default HomeScreen