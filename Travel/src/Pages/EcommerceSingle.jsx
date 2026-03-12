import React from 'react'
import { Link } from 'react-router-dom'

function EcommerceSingle() {
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
          <li className="active">Ecommerce Single</li>
        </ul>
      </div>
    </div>
  </section>
  {/* //covers */}
  {/* w3l-features-photo-7 */}
  <section className="w3l-features-photo-7">
    <div className="w3l-features-photo-7_sur">
      <div className="wrapper">
        <div className="w3l-features-photo-7_top">
          <div className="w3l-features-photo-7_top-right">
            <div className="galleryContainer">
              <div className="gallery">
                <input type="radio" name="controls" id="c1" defaultChecked /><img className="galleryImage" id="i1" src="assets/images/esingle1.jpg" alt />
                <input type="radio" name="controls" id="c2" /><img className="galleryImage" id="i2" src="assets/images/esingle2.jpg" alt />
                <input type="radio" name="controls" id="c3" /><img className="galleryImage" id="i3" src="assets/images/esingle3.jpg" alt />
                <input type="radio" name="controls" id="c4" /><img className="galleryImage" id="i4" src="assets/images/esingle4.jpg" alt />
                <input type="radio" name="controls" id="c5" /><img className="galleryImage" id="i5" src="assets/images/esingle5.jpg" alt />
              </div>
              <div className="thumbnails">
                <label className="thumbnailImage" htmlFor="c1"><img src="assets/images/esingle1.jpg" className="img img-responsive" alt /></label>
                <label className="thumbnailImage" htmlFor="c2"><img src="assets/images/esingle2.jpg" className="img img-responsive" alt /></label>
                <label className="thumbnailImage" htmlFor="c3"><img src="assets/images/esingle3.jpg" className="img img-responsive" alt /></label>
                <label className="thumbnailImage" htmlFor="c4"><img src="assets/images/esingle4.jpg" className="img img-responsive" alt /></label>
                <label className="thumbnailImage" htmlFor="c5"><img src="assets/images/esingle5.jpg" className="img img-responsive" alt /></label>
              </div>
            </div>
          </div>
          <div className="w3l-features-photo-7_top-left">
            <h4>Mosaic Check-in Luggage - 26 inch (Blue)</h4>
            <ul className="star">
              <li><span className="fa fa-star" aria-hidden="true" /></li>
              <li><span className="fa fa-star" aria-hidden="true" /></li>
              <li><span className="fa fa-star" aria-hidden="true" /></li>
              <li><span className="fa fa-star" aria-hidden="true" /></li>
              <li><span className="fa fa-star-o" aria-hidden="true" /></li>
            </ul>
            <p className="coasts">
              <span className="item_price">₹6,999</span>
              <del className="mx-2 font-weight-light">₹8,999</del>
              <label>Free delivery</label>
            </p>
            <p className="para">Designed for travellers, the Mosaic trolley offers durability, smooth 360° wheels, and spacious storage, making every journey comfortable and hassle-free.</p>
            <div className="sec-grid-1">
              <label>Size:</label>
              <select name="carlist" form="carform">
                <option value="volvo">22</option>
                <option value="saab">26</option>
                <option value="opel">30</option>
              </select>
            </div>
            <div className="sec-grid-1">
              <label>Color:</label>
              <select name="carlist" form="carform">
                <option value="volvo">Black</option>
                <option value="saab">Blue</option>
                <option value="opel">Red</option>
                <option value="opel">Silver</option>
              </select>
            </div>
            <div className="sec-grid-1">
              <label>Quantity:</label>
              <div className="disply-cont">
                <input type="number" defaultValue={1} min={1} />
              </div>
            </div>
            <div className="inline-cont">
              <a href="#cart" className="buttonbg">Add to Cart</a>
              <div className="buttons-teams">
                <ul>
                  <li>
                    <p>Share:</p>
                  </li>
                  <li>
                    <a href="#team"><span className="fa fa-facebook-square" aria-hidden="true" /></a>
                  </li>
                  <li>
                    <a href="#team"><span className="fa fa-twitter-square" aria-hidden="true" /></a>
                  </li>
                  <li>
                    <a href="#team"><span className="fa fa-google-plus-square" aria-hidden="true" /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* //w3l-features-photo-7 */}
  <div className="w3l-contect-12">
    <div className="main-top">
      <div className="wrapper padding-bord">
        <input id="tab1" type="radio" name="tabs" defaultChecked />
        <label className="tabtle" htmlFor="tab1">Description</label>
        <input id="tab2" type="radio" name="tabs" />
        <label className="tabtle" htmlFor="tab2">Reviews</label>
        <input id="tab3" type="radio" name="tabs" />
        <label className="tabtle" htmlFor="tab3">Questions &amp; Answers</label>
        <input id="tab4" type="radio" name="tabs" />
        <label className="tabtle" htmlFor="tab4">Information</label>
        <section id="content1" className="tab-content">
          <div className="content12-1">
            <p className="content-para">Designed for travellers, the BharatShield Check-In Trolley offers a strong outer
shell, smooth 360° wheels, and spacious interiors for stress-free travel. Perfect for flights, train journeys, and road trips, it balances durability, comfort,
and smart design for everyday and long-distance travel.</p>
            <p className="content-para">Perfect for flights, train journeys, and road trips, it balances durability, comfort,
and smart design for everyday and long-distance travel.</p>
            <p className="content-para">Whether for family vacations, weekend getaways, or important business trips, the BharatShield Check-In Travel Trolley ensures reliable performance, effortless handling, and smooth mobility on every journey. Its thoughtfully designed compartments, sturdy construction, and lightweight frame make packing and navigating through airports, railway stations, or busy city streets completely hassle-free, giving travellers peace of mind and convenience wherever they go</p>
          </div>
        </section>
        <section id="content2" className="tab-content">
          <div className="comment-top">
            <div className="media">
              <img src="assets/images/testi4.jpg" alt className="img-responsive" />
              <div className="media-body ml-3">
                <h6 className="content-heading">Joseph Goh</h6>
                <p>Very sturdy trolley with smooth wheels. Ideal for airport travel and long trips.
Worth the price.
                </p>
                <a href="#follow" className="btn button mt-3">Follow</a>
              </div>
            </div>
            <div className="media mt-5">
              <img src="assets/images/testi5.jpg" alt className="img-responsive" />
              <div className="media-body ml-3">
                <h6 className="content-heading">Goh James</h6>
                <p>Spacious, lightweight, and easy to move. Used it for a family vacation and loved it.
                </p>
                <a href="#follow" className="btn button">Follow</a>
              </div>
            </div>
            <div className="add-review content12-1">
              <h6 className="content-heading">Add a Review</h6>
              <form action="#" method="post">
                <div className="media">
                  <input type="text" name="Name" required="Name" placeholder="Your Name" />
                  <input type="email" name="Email" required="Email" placeholder="Your Email" />
                </div>
                <textarea name="Message" required placeholder="Write your comments here" defaultValue={""} />
                <button className="buttonbg" type="submit">Send Review</button>
              </form>
            </div>
          </div>
        </section>
        <section id="content3" className="tab-content">
          <div className="content12">
            <div className="column">
              <h6 className="content-heading">Q:is it waterproof?</h6>
              <p className="content-para">A:of course it is waterproof. Best buy for money invested.</p>
            </div>
            <div className="column">
              <h6 className="content-heading">Q:Is it of 26 inch ? Please say me in cms?</h6>
              <p className="content-para">A:Yes it is . In cms it is 66 cms and very good item and good
                service by
                our company</p>
            </div>
            <div className="column">
              <h6 className="content-heading">Q:Are the dimensions of this bag within the specified airport
                checkin baggage allowance limit?</h6>
              <p className="content-para">A:no it's bigger than the check-in baggage dimension</p>
            </div>
            <div className="column">
              <h6 className="content-heading">Q:what is the actual capacity of this trolly bag?? is it 5L
                only??
              </h6>
              <p className="content-para">A:not it is more than that. it is a very good cabin trolley. totally
                satisfied with it. cabin baggage limit is 7 kg</p>
            </div>
            <div className="column">
              <h6 className="content-heading">Q:can i change a bigger size if this size is small ?</h6>
              <p className="content-para">A:yes return the small size to our company and again buy a new one
              </p>
            </div>
            <div className="column">
              <h6 className="content-heading">Q:is it anti scratch ??</h6>
              <p className="content-para">A:Yes</p>
            </div>
          </div>
        </section>
        <section id="content4" className="tab-content">
          <div className="content12-1">
            <h6 className="content-heading">Mosaic Check-in Luggage - 26 inch</h6>
            <p className="content-para">Crafted with a durable hard-shell exterior, smooth 360-degree spinner wheels, and secure compartments, this trolley is thoughtfully designed for frequent Indian travellers. It combines style, strength, and convenience to handle the rigours of airports, railway stations, and busy city streets with ease.</p>
            <p className="content-para">Perfect for both domestic and international journeys, the trolley offers generous storage space for clothes, gadgets, and essentials, while its lightweight design ensures effortless mobility. With reinforced handles and a sturdy frame, it guarantees long-lasting performance, making every trip comfortable, organized, and stress-free.</p>
          </div>
        </section>
      </div>
    </div>
  </div>
</div>


    </div>
  )
}

export default EcommerceSingle