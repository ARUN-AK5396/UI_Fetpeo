import React from 'react'
import { BsSearch } from 'react-icons/bs'
import './ProductScreenStyle.css'

import product1 from '../img/product1.jpg'
import product2 from '../img/product2.jpg'
function ProductsellScreen() {
  return (
    <div className='product_screen_container'>
      <div className="top_nav_container">
        <h3 className='top_nav_product_header'>Product Sell</h3>
        <span></span>
        <span></span>
        <div className="search_top_container">
          <div className="search_container">
              <div className="search_input_container">
                  <input type='text' placeholder='Search over here'/>
                  <BsSearch className='search_icon' size={22}/>
              </div>
          </div>
        </div>
        <div className="select_field_container">
            <select className="select_field">
              <option value="">Last 1 month</option>
              <option value="">Last 2 month</option>
              <option value="">Last 3 month</option>
            </select>
          </div>
          <span></span>
      </div>
      <div className="scroll_view_product">
        <div className="row_header_product">
          <span className='row_header_product_header1'>Product Name</span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className='row_header_product_header2'>Stock</span>
          <span className='row_header_product_header2'>Price</span>
          <span className='row_header_product_header2'>Total Sales</span>
        </div>
        <hr style={{width:'90%',marginTop:'15px',color:'#c8c5c5'}} />
        <div className="row_header_product">
          <img className='product_img' src={product1} alt='Products' />
          <div className="product_description">
              <div className="product_img_text_header">
                <h3 style={{color:'black'}}>Abstract 3D</h3>
              </div>
              <div className="product_img_text_subheader">
                <span> It was an product it sales is going on</span>
              </div>
          </div>
          <span></span>
          <span></span>
          <span className='row_header_product_content'>32 in Stocks</span>
          <span className='row_header_product_content'>$45.99</span>
          <span className='row_header_product_content1'>20</span>
        </div> <br/>

        <div className="row_header_product">
          <img className='product_img' src={product2} alt='Products' />
          <div className="product_description">
              <div className="product_img_text_header">
                <h3 style={{color:'black'}}>Abstract 3D</h3>
              </div>
              <div className="product_img_text_subheader">
                <span> It was an product it sales is going on</span>
              </div>
          </div>
          <span></span>
          <span></span>
          <span className='row_header_product_content'>32 in Stocks</span>
          <span className='row_header_product_content'>$45.99</span>
          <span className='row_header_product_content1'>20</span>
        </div>
      </div>
      
    </div>
  )
}

export default ProductsellScreen