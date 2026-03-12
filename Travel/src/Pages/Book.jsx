import React from 'react'
import { Link } from 'react-router-dom'

function Book() {
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
          <li className="active">Book</li>
        </ul>
      </div>
    </div>
  </section>
  {/* //covers */}
  <div className="w3l-book-9">
    <div className="main-top">
      <h3 className="title-main">Booking Form</h3>
      <p className="sub-title">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
        ea commodo consequat.</p>
      <div className="wrapper padding-bord">
        <input id="tab1" type="radio" name="tabs" defaultChecked />
        <label className="tabtle" htmlFor="tab1">Flights</label>
        <input id="tab2" type="radio" name="tabs" />
        <label className="tabtle" htmlFor="tab2">Trains</label>
        <input id="tab3" type="radio" name="tabs" />
        <label className="tabtle" htmlFor="tab3">Buses</label>
        <input id="tab4" type="radio" name="tabs" />
        <label className="tabtle" htmlFor="tab4">Hotels</label>
        <input id="tab5" type="radio" name="tabs" />
        <label className="tabtle" htmlFor="tab5">Cabs</label>
        <section id="content1" className="tab-content text-left">
          <div className="tab-1">
            <h3>Search for flights</h3>
            <form action="#" method="post">
              <div className="d-grid grid-col-2">
                <div className="ele-9its_grid">
                  <h5>Name </h5>
                  <input type="text" name="First name" placeholder="Your Name" required />
                </div>
                <div className="ele-9its_grid">
                  <h5>E-mail </h5>
                  <input type="email" name="Email" placeholder="Ex: hello@mail.com" required />
                </div>
              </div>
              <div className="d-grid grid-col-2">
                <div className="ele-9its_grid">
                  <h5>From</h5>
                  <select id="category1" name="category1" required>
                    <option value="category1">Australia</option>
                    <option value="category2">Singapore</option>
                    <option value="category3">America</option>
                    <option value="category3">London</option>
                    <option value="category3">Goa</option>
                    <option value="category3">Canada</option>
                    <option value="category3">Srilanka</option>
                  </select>
                </div>
                <div className="ele-9its_grid">
                  <h5>To</h5>
                  <select id="category1" name="category1" required>
                    <option value="category2">Singapore</option>
                    <option value="category1">Australia</option>
                    <option value="category3">America</option>
                    <option value="category3">London</option>
                    <option value="category3">Goa</option>
                    <option value="category3">Canada</option>
                    <option value="category3">Srilanka</option>
                  </select>
                </div>
              </div>
              <div className="d-grid grid-col-2">
                <div className="ele-9its_grid">
                  <h5>Adults</h5>
                  <select id="category1" name="category1" required>
                    <option value="category1">01</option>
                    <option value="category2">02</option>
                    <option value="category3">03</option>
                    <option value="category4">04</option>
                    <option value="category2">05</option>
                    <option value="category3">06</option>
                  </select>
                </div>
                <div className="ele-9its_grid">
                  <h5>Children</h5>
                  <select id="category1" name="category1" required>
                    <option value="category1">01</option>
                    <option value="category2">02</option>
                    <option value="category3">03</option>
                    <option value="category4">04</option>
                    <option value="category2">05</option>
                    <option value="category3">06</option>
                  </select>
                </div>
              </div>
              <div className="d-grid grid-col-2">
                <div className="ele-9its_grid">
                  <h5>Travel Class</h5>
                  <select id="category2" name="category1" required>
                    <option value="category1">Economy class</option>
                    <option value="category2">Premium Economy</option>
                    <option value="category3">Business class</option>
                    <option value="category3">First Class</option>
                  </select>
                </div>
                <div className="ele-9its_grid">
                  <h5>Departure On</h5>
                  <input className="date" name="Text" type="date" placeholder="Date" required />
                </div>
              </div>
              <div className="ele-9its_grid">
                <h5>Journey type</h5>
                <select className="last-sec-hny" id="category1" name="category1" required>
                  <option value="category1">One Way</option>
                  <option value="category2">Round trip</option>
                </select>
              </div>
              <button type="submit" className="buttonbg">Search Now</button>
            </form>
          </div>
        </section>
        <section id="content2" className="tab-content text-left">
          <div className="tab-2">
            <h3>Search for Trains</h3>
            <form action="#" method="post">
              <div className="d-grid grid-col-2">
                <div className="ele-9its_grid">
                  <h5>Name </h5>
                  <input type="text" name="First name" placeholder="Your Name" required />
                </div>
                <div className="ele-9its_grid">
                  <h5>E-mail </h5>
                  <input type="email" name="Email" placeholder="Ex: hello@mail.com" required />
                </div>
              </div>
              <div className="d-grid grid-col-2">
                <div className="ele-9its_grid">
                  <h5>Route</h5>
                  <select id="category1" name="category1" required>
                    <option value="category1">None</option>
                    <option value="category2">Local</option>
                    <option value="category3">Non-local</option>
                  </select>
                </div>
                <div className="ele-9its_grid">
                  <h5>Number of Passengers</h5>
                  <select id="category1" name="category1" required>
                    <option value="category1">01</option>
                    <option value="category2">02</option>
                    <option value="category3">03</option>
                    <option value="category4">04</option>
                    <option value="category2">05</option>
                    <option value="category3">06</option>
                  </select>
                </div>
              </div>
              <div className="d-grid grid-col-2">
                <div className="ele-9its_grid">
                  <h5>Date of Journey</h5>
                  <input className="date" name="Text" type="date" placeholder="Date" required />
                </div>
                <div className="ele-9its_grid">
                  <h5>Time of Journey</h5>
                  <input className="time" name="Text" type="time" placeholder="Time" required />
                </div>
              </div>
              <div className="d-grid grid-col-2">
                <div className="ele-9its_grid">
                  <h5>From</h5>
                  <select id="category1" name="category1" required>
                    <option value="category1">Australia</option>
                    <option value="category2">Singapore</option>
                    <option value="category3">America</option>
                    <option value="category3">London</option>
                    <option value="category3">Goa</option>
                    <option value="category3">Canada</option>
                    <option value="category3">Srilanka</option>
                  </select>
                </div>
                <div className="ele-9its_grid">
                  <h5>To</h5>
                  <select id="category1" name="category1" required>
                    <option value="category2">Singapore</option>
                    <option value="category1">Australia</option>
                    <option value="category3">America</option>
                    <option value="category3">London</option>
                    <option value="category3">Goa</option>
                    <option value="category3">Canada</option>
                    <option value="category3">Srilanka</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="buttonbg">Search Now</button>
            </form>
          </div>
        </section>
        <section id="content3" className="tab-content text-left">
          <div className="tab-3">
            <h3>Search for Buses</h3>
            <form action="#" method="post">
              <div className="d-grid grid-col-2">
                <div className="ele-9its_grid">
                  <h5>Name </h5>
                  <input type="text" name="First name" placeholder="Your Name" required />
                </div>
                <div className="ele-9its_grid">
                  <h5>E-mail </h5>
                  <input type="email" name="Email" placeholder="Ex: hello@mail.com" required />
                </div>
              </div>
              <div className="d-grid grid-col-2">
                <div className="ele-9its_grid">
                  <h5>From</h5>
                  <select id="category1" name="category1" required>
                    <option value="category1">Australia</option>
                    <option value="category2">Singapore</option>
                    <option value="category3">America</option>
                    <option value="category3">London</option>
                    <option value="category3">Goa</option>
                    <option value="category3">Canada</option>
                    <option value="category3">Srilanka</option>
                  </select>
                </div>
                <div className="ele-9its_grid">
                  <h5>To</h5>
                  <select id="category1" name="category1" required>
                    <option value="category2">Singapore</option>
                    <option value="category1">Australia</option>
                    <option value="category3">America</option>
                    <option value="category3">London</option>
                    <option value="category3">Goa</option>
                    <option value="category3">Canada</option>
                    <option value="category3">Srilanka</option>
                  </select>
                </div>
              </div>
              <div className="d-grid grid-col-2">
                <div className="ele-9its_grid">
                  <h5>Date of Journey </h5>
                  <input className="date" name="Text" type="date" placeholder="Date" required />
                </div>
                <div className="ele-9its_grid">
                  <h5>Time of Journey </h5>
                  <input className="time" name="Text" type="time" placeholder="Time" required />
                </div>
              </div>
              <div className="d-grid grid-col-2">
                <div className="ele-9its_grid">
                  <h5>Date of Return (Optional) </h5>
                  <input className="date" name="Text" type="date" placeholder="Date" required />
                </div>
                <div className="ele-9its_grid">
                  <h5>Time of Return (Optional) </h5>
                  <input className="time" name="Text" type="time" placeholder="Time" required />
                </div>
              </div>
              <button type="submit" className="buttonbg">Search Now</button>
            </form>
          </div>
        </section>
        <section id="content4" className="tab-content text-left">
          <div className="tab-4">
            <h3>Search for Hotels</h3>
            <form action="#" method="post">
              <div className="d-grid grid-col-2">
                <div className="ele-9its_grid">
                  <h5>Name </h5>
                  <input type="text" name="First name" placeholder="Your Name" required />
                </div>
                <div className="ele-9its_grid">
                  <input type="text" name="Last name" placeholder="Your Name" required />
                </div>
              </div>
              <div className="ele-9its_grid">
                <h5>E-mail </h5>
                <input type="email" name="Email" placeholder="Ex: hello@mail.com" required />
              </div>
              <div className="d-grid grid-col-2">
                <div className="ele-9its_grid">
                  <h5>Room Type</h5>
                  <select id="category1" name="category1" required>
                    <option value="none">None</option>
                    <option value="category1">Single Room</option>
                    <option value="category2">Double Room</option>
                    <option value="category3">Suit Room</option>
                  </select>
                </div>
                <div className="ele-9its_grid">
                  <h5>Number of Guests</h5>
                  <select id="category1" name="category1" required>
                    <option value="category1">01</option>
                    <option value="category2">02</option>
                    <option value="category3">03</option>
                    <option value="category4">04</option>
                    <option value="category2">05</option>
                    <option value="category3">06</option>
                  </select>
                </div>
              </div>
              <div className="d-grid grid-col-2">
                <div className="ele-9its_grid">
                  <h5>Check In &amp; Time </h5>
                  <input className="date" name="Text" type="date" placeholder="Date" required />
                </div>
                <div className="ele-9its_grid">
                  <input className="time" name="Text" type="time" placeholder="Time" required />
                </div>
              </div>
              <div className="d-grid grid-col-2">
                <div className="ele-9its_grid">
                  <h5>Check Out &amp; Time </h5>
                  <input className="date" name="Text" type="date" placeholder="Date" required />
                </div>
                <div className="ele-9its_grid">
                  <input className="time" name="Text" type="time" placeholder="Time" required />
                </div>
              </div>
              <button type="submit" className="buttonbg">Search Now</button>
            </form>
          </div>
        </section>
        <section id="content5" className="tab-content text-left">
          <div className="tab-5">
            <h3>Search for Cabs</h3>
            <form action="#" method="post">
              <div className="d-grid grid-col-2">
                <div className="ele-9its_grid">
                  <h5>Name </h5>
                  <input type="text" name="First name" placeholder="Your Name" required />
                </div>
                <div className="ele-9its_grid">
                  <h5>E-mail </h5>
                  <input type="email" name="Email" placeholder="Ex: hello@mail.com" required />
                </div>
              </div>
              <div className="d-grid grid-col-2">
                <div className="ele-9its_grid">
                  <h5>Area Code</h5>
                  <input type="text" name="Area Code" placeholder="Code" required />
                </div>
                <div className="ele-9its_grid">
                  <h5>Phone Number</h5>
                  <input type="text" name="number" placeholder="Number" required />
                </div>
              </div>
              <div className="d-grid grid-col-2">
                <div className="ele-9its_grid">
                  <h5>Departure date &amp; Time </h5>
                  <input className="date" name="Text" type="date" placeholder="Date" required />
                </div>
                <div className="ele-9its_grid">
                  <input className="time" name="Text" type="time" placeholder="Time" required />
                </div>
              </div>
              <div className="d-grid grid-col-2">
                <div className="ele-9its_grid">
                  <h5>Return date &amp; Time </h5>
                  <input className="date" name="Text" type="date" placeholder="Date" required />
                </div>
                <div className="ele-9its_grid">
                  <input className="time" name="Text" type="time" placeholder="Time" required />
                </div>
              </div>
              <div className="ele-9its_grid">
                <h5>Pickup Address :</h5>
                <textarea name="Pickup Address" placeholder="Pickup Address" required defaultValue={""} />
              </div>
              <div className="ele-9its_grid">
                <h5>Destination Address :</h5>
                <textarea name="Pickup Address" placeholder="Pickup Address" required defaultValue={""} />
              </div>
              <div className="ele-9its_grid">
                <h5>Journey type</h5>
                <select id="category1" name="category1" required>
                  <option value="category1">One Way</option>
                  <option value="category2">Round trip</option>
                </select>
              </div>
              <button type="submit" className="buttonbg">Search Now</button>
            </form>
          </div>
        </section>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Book