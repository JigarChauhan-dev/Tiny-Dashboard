import React from 'react'
import { Link } from 'react-router-dom'

function EcommerceCart() {
  return (
    <div>

<div>
  {/* inner banner */}
  <section className="w3l-inner-banner-main">
    <div className="banner-9">
      <div className="wrapper">
        <ul className="breadcrumbs-custom-path">
          <li><Link to={"/"}>Home <span className="fa fa-angle-right" aria-hidden="true" /></Link></li>
          <li><a href="#pages">Pages <span className="fa fa-angle-right" aria-hidden="true" /></a></li>
          <li className="active">Ecommerce Cart</li>
        </ul>
      </div>
    </div>
  </section>
  {/* //covers */}
  <section className="w3l-ecom-cart">
    <div className="covers-main">
      <div className="wrapper">
        <h1>Shopping Cart</h1>
        <div className="shopping-cart">
          <div className="column-labels">
            <label className="product-image">Items</label>
            <label className="product-details">Product</label>
            <label className="product-price">Price</label>
            <label className="product-quantity">Quantity</label>
            <label className="product-removal">Remove</label>
            <label className="product-line-price">Total</label>
          </div>
          <div className="product">
            <div className="product-image">
              <a href="ecommerce-single.html"><img src="assets/images/cart1.jpg" alt className="img-responsive" /></a>
            </div>
            <div className="product-details">
              <div className="product-title"><a href="ecommerce-single.html">Mosaic Luggage</a></div>
              <p className="product-description"><b>Color:</b> Blue</p>
            </div>
            <div className="product-price">6,999</div>
            <div className="product-quantity">
              <input type="number" defaultValue={2} min={1} />
            </div>
            <div className="product-removal close">
              <button className="remove-product">
                Remove
              </button>
            </div>
            <div className="product-line-price">25.98</div>
          </div>
          <div className="product">
            <div className="product-image">
              <a href="ecommerce-single.html"><img src="assets/images/cart2.jpg" alt className="img-responsive" /></a>
            </div>
            <div className="product-details">
              <div className="product-title"><a href="ecommerce-single.html">Travel Pillow Pack</a></div>
              <p className="product-description"><b>Color:</b> Brown</p>
            </div>
            <div className="product-price">45.99</div>
            <div className="product-quantity">
              <input type="number" defaultValue={1} min={1} />
            </div>
            <div className="product-removal close">
              <button className="remove-product">
                Remove
              </button>
            </div>
            <div className="product-line-price">45.99</div>
          </div>
          <div className="product">
            <div className="product-image">
              <a href="ecommerce-single.html"><img src="assets/images/cart3.jpg" alt className="img-responsive" /></a>
            </div>
            <div className="product-details">
              <div className="product-title"><a href="ecommerce-single.html">Outdoor Sport Trekking Bag</a>
              </div>
              <p className="product-description"><b>Color:</b> Blue</p>
            </div>
            <div className="product-price">69.99</div>
            <div className="product-quantity">
              <input type="number" defaultValue={1} min={1} />
            </div>
            <div className="product-removal close">
              <button className="remove-product">
                Remove
              </button>
            </div>
            <div className="product-line-price">69.99</div>
          </div>
          <div className="totals">
            <div className="totals-item">
              <label>Subtotal</label>
              <div className="totals-value" id="cart-subtotal">141.96</div>
            </div>
            <div className="totals-item">
              <label>Tax (5%)</label>
              <div className="totals-value" id="cart-tax">3.60</div>
            </div>
            <div className="totals-item">
              <label>Shipping</label>
              <div className="totals-value" id="cart-shipping">15.00</div>
            </div>
            <div className="totals-item totals-item-total">
              <label>Grand Total</label>
              <div className="totals-value" id="cart-total">160.56</div>
            </div>
          </div>
          <a href="login.html" className="checkout">Checkout</a>
        </div>
      </div>
    </div>
    {/* close script */}
    {/* //close script */}
  </section>
</div>

    </div>
  )
}

export default EcommerceCart