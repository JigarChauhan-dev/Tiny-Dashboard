import React from 'react'
import { Link } from 'react-router-dom'

function Timeline() {
  return (
    <div>
<div>
  {/* inner banner */}
  <section className="w3l-inner-banner-main">
    <div className="banner-9 sec-img">
      <div className="wrapper">
        <ul className="breadcrumbs-custom-path">
          <li><Link to={"/"}>Home <span className="fa fa-angle-right" aria-hidden="true" /></Link></li>
          <li><a href="#pages">Pages <span className="fa fa-angle-right" aria-hidden="true" /></a></li>
          <li className="active">Timeline</li>
        </ul>
      </div>
    </div>
  </section>
  {/* //covers */}
  <section className="w3l-timeline-9">
    {/* timeline */}
    <div className="quest-wthree py-5">
      <div className="wrapper py-xl-5 py-lg-3">
        <h3 className="title-main">Timeline</h3>
        <p className="sub-title">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex
          ea commodo consequat.</p>
        <div className="comments">
          <div className="time-grids">
            <h5>Our first steps on the market</h5>
            <p>
              <span>On 06th Jan, 2008</span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. esse distinctio laborum saepe
              perferendis dicta perspiciatis repellendus tempore praesentium,
              quaerat inventore quas, eaque nisi!
            </p>
          </div>
          <div className="time-grids">
            <h5>Company acquisition</h5>
            <p>
              <span>On 15th May, 2010</span>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
              voluptatum
              deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate
            </p>
          </div>
          <div className="time-grids">
            <h5>Continuous innovation and transformation</h5>
            <p>
              <span>On 13th June, 2014</span>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </div>
          <div className="time-grids">
            <h5>Further development</h5>
            <p>
              <span>On 07 Jan, 2020</span>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto
              beatae vitae dicta sunt explicabo.
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* //timeline */}
  </section>
</div>

    </div>
  )
}

export default Timeline