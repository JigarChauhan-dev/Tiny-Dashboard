import React from "react";
import Header from "../Common/Header";
import Aside from "../Common/Aside";

function UiAccordian() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Aside />
        <main role="main" className="main-content">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-12">
                <h2 className="page-title">Tabs</h2>
                <p className="lead text-muted">
                  Adds the .nav-tabs class to generate a tabbed interface.
                </p>
                <div className="row">
                  <div className="col-md-4 mb-4">
                    <div className="card shadow">
                      <div className="card-body">
                        <ul
                          className="nav nav-tabs mb-3"
                          id="myTab"
                          role="tablist"
                        >
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              id="home-tab"
                              data-toggle="tab"
                              href="#home"
                              role="tab"
                              aria-controls="home"
                              aria-selected="true"
                            >
                              Home
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="profile-tab"
                              data-toggle="tab"
                              href="#profile"
                              role="tab"
                              aria-controls="profile"
                              aria-selected="false"
                            >
                              Profile
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="contact-tab"
                              data-toggle="tab"
                              href="#contact"
                              role="tab"
                              aria-controls="contact"
                              aria-selected="false"
                            >
                              Contact
                            </a>
                          </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                          <div
                            className="tab-pane fade show active"
                            id="home"
                            role="tabpanel"
                            aria-labelledby="home-tab"
                          >
                            {" "}
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et.{" "}
                          </div>
                          <div
                            className="tab-pane fade"
                            id="profile"
                            role="tabpanel"
                            aria-labelledby="profile-tab"
                          >
                            {" "}
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et.{" "}
                          </div>
                          <div
                            className="tab-pane fade"
                            id="contact"
                            role="tabpanel"
                            aria-labelledby="contact-tab"
                          >
                            {" "}
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et.{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div className="card shadow">
                      <div className="card-body">
                        <ul
                          className="nav nav-pills nav-fill mb-3"
                          id="pills-tab"
                          role="tablist"
                        >
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              id="pills-home-tab"
                              data-toggle="pill"
                              href="#pills-home"
                              role="tab"
                              aria-controls="pills-home"
                              aria-selected="true"
                            >
                              Pill Home
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="pills-profile-tab"
                              data-toggle="pill"
                              href="#pills-profile"
                              role="tab"
                              aria-controls="pills-profile"
                              aria-selected="false"
                            >
                              Profile
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="pills-contact-tab"
                              data-toggle="pill"
                              href="#pills-contact"
                              role="tab"
                              aria-controls="pills-contact"
                              aria-selected="false"
                            >
                              Contact
                            </a>
                          </li>
                        </ul>
                        <div className="tab-content mb-1" id="pills-tabContent">
                          <div
                            className="tab-pane fade show active"
                            id="pills-home"
                            role="tabpanel"
                            aria-labelledby="pills-home-tab"
                          >
                            {" "}
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et.{" "}
                          </div>
                          <div
                            className="tab-pane fade"
                            id="pills-profile"
                            role="tabpanel"
                            aria-labelledby="pills-profile-tab"
                          >
                            {" "}
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et.{" "}
                          </div>
                          <div
                            className="tab-pane fade"
                            id="pills-contact"
                            role="tabpanel"
                            aria-labelledby="pills-contact-tab"
                          >
                            {" "}
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et.{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div className="card shadow">
                      <div className="card-body py-4 mb-1">
                        <div className="row">
                          <div className="col-4">
                            <div
                              className="nav flex-column nav-pills"
                              id="v-pills-tab"
                              role="tablist"
                              aria-orientation="vertical"
                            >
                              <a
                                className="nav-link active"
                                id="v-pills-home-tab"
                                data-toggle="pill"
                                href="#v-pills-home"
                                role="tab"
                                aria-controls="v-pills-home"
                                aria-selected="true"
                              >
                                Home
                              </a>
                              <a
                                className="nav-link"
                                id="v-pills-profile-tab"
                                data-toggle="pill"
                                href="#v-pills-profile"
                                role="tab"
                                aria-controls="v-pills-profile"
                                aria-selected="false"
                              >
                                Profile
                              </a>
                              <a
                                className="nav-link"
                                id="v-pills-messages-tab"
                                data-toggle="pill"
                                href="#v-pills-messages"
                                role="tab"
                                aria-controls="v-pills-messages"
                                aria-selected="false"
                              >
                                Messages
                              </a>
                              <a
                                className="nav-link"
                                id="v-pills-settings-tab"
                                data-toggle="pill"
                                href="#v-pills-settings"
                                role="tab"
                                aria-controls="v-pills-settings"
                                aria-selected="false"
                              >
                                Settings
                              </a>
                            </div>
                          </div>
                          <div className="col-8">
                            <div
                              className="tab-content mb-4"
                              id="v-pills-tabContent"
                            >
                              <div
                                className="tab-pane fade show active"
                                id="v-pills-home"
                                role="tabpanel"
                                aria-labelledby="v-pills-home-tab"
                              >
                                {" "}
                                Anim pariatur cliche reprehenderit, enim eiusmod
                                high life accusamus terry richardson ad squid. 3
                                wolf moon officia aute, non cupidatat skateboard
                                dolor brunch. Food truck quinoa nesciunt laborum
                                eiusmod.{" "}
                              </div>
                              <div
                                className="tab-pane fade mb-4"
                                id="v-pills-profile"
                                role="tabpanel"
                                aria-labelledby="v-pills-profile-tab"
                              >
                                {" "}
                                Anim pariatur cliche reprehenderit, enim eiusmod
                                high life accusamus terry richardson ad squid. 3
                                wolf moon officia aute, non cupidatat skateboard
                                dolor brunch. Food truck quinoa nesciunt laborum
                                eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                                put a bird on it squid single-origin coffee
                                nulla assumenda shoreditch et.{" "}
                              </div>
                              <div
                                className="tab-pane fade mb-4"
                                id="v-pills-messages"
                                role="tabpanel"
                                aria-labelledby="v-pills-messages-tab"
                              >
                                {" "}
                                Anim pariatur cliche reprehenderit, enim eiusmod
                                high life accusamus terry richardson ad squid. 3
                                wolf moon officia aute, non cupidatat skateboard
                                dolor brunch. Food truck quinoa nesciunt laborum
                                eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                                put a bird on it squid single-origin coffee
                                nulla assumenda shoreditch et.{" "}
                              </div>
                              <div
                                className="tab-pane fade mb-4"
                                id="v-pills-settings"
                                role="tabpanel"
                                aria-labelledby="v-pills-settings-tab"
                              >
                                {" "}
                                Anim pariatur cliche reprehenderit, enim eiusmod
                                high life accusamus terry richardson ad squid. 3
                                wolf moon officia aute, non cupidatat skateboard
                                dolor brunch. Food truck quinoa nesciunt laborum
                                eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                                put a bird on it squid single-origin coffee
                                nulla assumenda shoreditch et.{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* end section */}
                <h5>Icon tabs</h5>
                <p>Take that same HTML with tabs, but use .nav-pills instead</p>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <ul
                      className="nav nav-pills"
                      id="pills-tab2"
                      role="tablist"
                    >
                      <li className="nav-item">
                        <a
                          className="nav-link px-3 active"
                          id="pills-home-tab2"
                          data-toggle="pill"
                          href="#pills-home2"
                          role="tab"
                          aria-controls="pills-home2"
                          aria-selected="true"
                        >
                          <span className="fe fe-16 fe-box" />
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link px-3"
                          id="pills-profile-tab2"
                          data-toggle="pill"
                          href="#pills-profile2"
                          role="tab"
                          aria-controls="pills-profile2"
                          aria-selected="false"
                        >
                          <span className="fe fe-16 fe-archive" />
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link px-3"
                          id="pills-contact-tab2"
                          data-toggle="pill"
                          href="#pills-contact2"
                          role="tab"
                          aria-controls="pills-contact"
                          aria-selected="false"
                        >
                          <span className="fe fe-16 fe-coffee" />
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content mb-2" id="pills-tabContent2">
                      <div
                        className="tab-pane fade show active"
                        id="pills-home2"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab2"
                      >
                        <div className="card mb-0">
                          <div className="card-body">
                            {" "}
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et.{" "}
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-profile2"
                        role="tabpanel"
                        aria-labelledby="pills-profile-tab2"
                      >
                        {" "}
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.{" "}
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-contact2"
                        role="tabpanel"
                        aria-labelledby="pills-contact-tab2"
                      >
                        {" "}
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.{" "}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="d-flex flex-row tab-icon">
                      <div
                        className="nav flex-column nav-pills"
                        id="v-pills-tab3"
                        role="tablist"
                        aria-orientation="vertical"
                      >
                        <a
                          className="nav-link py-3 active"
                          id="v-pills-home-tab3"
                          data-toggle="pill"
                          href="#v-pills-home3"
                          role="tab"
                          aria-controls="v-pills-home3"
                          aria-selected="true"
                        >
                          <span className="fe fe-16 fe-box" />
                        </a>
                        <a
                          className="nav-link py-3"
                          id="v-pills-profile-tab3"
                          data-toggle="pill"
                          href="#v-pills-profile3"
                          role="tab"
                          aria-controls="v-pills-profile3"
                          aria-selected="false"
                        >
                          <span className="fe fe-16 fe-archive" />
                        </a>
                        <a
                          className="nav-link py-3"
                          id="v-pills-messages-tab3"
                          data-toggle="pill"
                          href="#v-pills-messages3"
                          role="tab"
                          aria-controls="v-pills-messages3"
                          aria-selected="false"
                        >
                          <span className="fe fe-16 fe-coffee" />
                        </a>
                      </div>
                      <div
                        className="tab-content w-100"
                        id="v-pills-tabContent3"
                      >
                        <div
                          className="tab-pane fade show active"
                          id="v-pills-home3"
                          role="tabpanel"
                          aria-labelledby="v-pills-home-tab3"
                        >
                          <div className="card mb-0">
                            <div className="card-body">
                              {" "}
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry richardson ad squid. 3
                              wolf moon officia aute, non cupidatat skateboard
                              dolor brunch. Food truck quinoa nesciunt laborum
                              eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                              put a bird on it squid single-origin coffee nulla
                              assumenda shoreditch et. Nihil anim keffiyeh
                              helvetica, craft beer labore wes anderson cred
                              nesciunt sapiente ea proident.{" "}
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="v-pills-profile3"
                          role="tabpanel"
                          aria-labelledby="v-pills-profile-tab3"
                        >
                          <div className="card mb-0">
                            <div className="card-body">
                              {" "}
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry richardson ad squid. 3
                              wolf moon officia aute, non cupidatat skateboard
                              dolor brunch. Food truck quinoa nesciunt laborum
                              eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                              put a bird on it squid single-origin coffee nulla
                              assumenda shoreditch et. Nihil anim keffiyeh
                              helvetica, craft beer labore wes anderson cred
                              nesciunt sapiente ea proident.{" "}
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="v-pills-messages3"
                          role="tabpanel"
                          aria-labelledby="v-pills-messages-tab3"
                        >
                          <div className="card mb-0">
                            <div className="card-body">
                              {" "}
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry richardson ad squid. 3
                              wolf moon officia aute, non cupidatat skateboard
                              dolor brunch. Food truck quinoa nesciunt laborum
                              eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                              put a bird on it squid single-origin coffee nulla
                              assumenda shoreditch et. Nihil anim keffiyeh
                              helvetica, craft beer labore wes anderson cred
                              nesciunt sapiente ea proident.{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* end section */}
                <h5>Accordions</h5>
                <p>
                  Using the card component, you can extend the default collapse
                  behavior to create an accordion.
                </p>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="accordion w-100" id="accordion1">
                      <div className="card shadow">
                        <div className="card-header" id="heading1">
                          <a
                            role="button"
                            href="#collapse1"
                            data-toggle="collapse"
                            data-target="#collapse1"
                            aria-expanded="false"
                            aria-controls="collapse1"
                          >
                            <strong>Collapse one</strong>
                          </a>
                        </div>
                        <div
                          id="collapse1"
                          className="collapse show"
                          aria-labelledby="heading1"
                          data-parent="#accordion1"
                        >
                          <div className="card-body">
                            {" "}
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et.{" "}
                          </div>
                        </div>
                      </div>
                      <div className="card shadow">
                        <div className="card-header" id="heading1">
                          <a
                            role="button"
                            href="#collapse2"
                            data-toggle="collapse"
                            data-target="#collapse2"
                            aria-expanded="false"
                            aria-controls="collapse2"
                          >
                            <strong>Collapse two</strong>
                          </a>
                        </div>
                        <div
                          id="collapse2"
                          className="collapse"
                          aria-labelledby="heading2"
                          data-parent="#accordion1"
                        >
                          <div className="card-body">
                            {" "}
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et.{" "}
                          </div>
                        </div>
                      </div>
                      <div className="card shadow">
                        <div className="card-header" id="heading1">
                          <a
                            role="button"
                            href="#collapse3"
                            data-toggle="collapse"
                            data-target="#collapse3"
                            aria-expanded="false"
                            aria-controls="collapse3"
                          >
                            <strong>Collapse three</strong>
                          </a>
                        </div>
                        <div
                          id="collapse3"
                          className="collapse"
                          aria-labelledby="heading3"
                          data-parent="#accordion1"
                        >
                          <div className="card-body">
                            {" "}
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et.{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="accordion accordion-boxed" id="accordion2">
                      <div className="card shadow">
                        <div className="card-header" id="headingOne">
                          <a
                            role="button"
                            href="#collapseOne"
                            data-toggle="collapse"
                            data-target="#collapseOne"
                            aria-expanded="false"
                            aria-controls="collapseOne"
                          >
                            <strong>Collapse boxed One</strong>
                          </a>
                        </div>
                        <div
                          id="collapseOne"
                          className="collapse show"
                          aria-labelledby="headingOne"
                          data-parent="#accordion2"
                        >
                          <div className="card-body">
                            {" "}
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod.{" "}
                          </div>
                        </div>
                      </div>
                      <div className="card shadow">
                        <div className="card-header" id="headingTwo">
                          <a
                            role="button"
                            href="#collapseTwo"
                            data-toggle="collapse"
                            data-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            <strong>Collapse boxed two</strong>
                          </a>
                        </div>
                        <div
                          id="collapseTwo"
                          className="collapse"
                          aria-labelledby="headingTwo"
                          data-parent="#accordion2"
                        >
                          <div className="card-body">
                            {" "}
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et. Nihil anim keffiyeh
                            helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident. Ad vegan excepteur
                            butcher vice lomo. Leggings occaecat craft beer
                            farm-to-table, raw denim aesthetic synth nesciunt
                            you probably haven't heard of them accusamus labore
                            sustainable VHS.{" "}
                          </div>
                        </div>
                      </div>
                      <div className="card mb-2">
                        <div className="card-header" id="headingThree">
                          <a
                            role="button"
                            href="#collapseThree"
                            data-toggle="collapse"
                            data-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            <strong>Collapse boxed three</strong>
                          </a>
                        </div>
                        <div
                          id="collapseThree"
                          className="collapse"
                          aria-labelledby="headingThree"
                          data-parent="#accordion2"
                        >
                          <div className="card-body">
                            {" "}
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et.{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* end section */}
              </div>{" "}
              {/* .col-12 */}
            </div>{" "}
            {/* .row */}
          </div>{" "}
          {/* .container-fluid */}
          <div
            className="modal fade modal-notif modal-slide"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="defaultModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-sm" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="defaultModalLabel">
                    Notifications
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="list-group list-group-flush my-n3">
                    <div className="list-group-item bg-transparent">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <span className="fe fe-box fe-24" />
                        </div>
                        <div className="col">
                          <small>
                            <strong>Package has uploaded successfull</strong>
                          </small>
                          <div className="my-0 text-muted small">
                            Package is zipped and uploaded
                          </div>
                          <small className="badge badge-pill badge-light text-muted">
                            1m ago
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="list-group-item bg-transparent">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <span className="fe fe-download fe-24" />
                        </div>
                        <div className="col">
                          <small>
                            <strong>Widgets are updated successfull</strong>
                          </small>
                          <div className="my-0 text-muted small">
                            Just create new layout Index, form, table
                          </div>
                          <small className="badge badge-pill badge-light text-muted">
                            2m ago
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="list-group-item bg-transparent">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <span className="fe fe-inbox fe-24" />
                        </div>
                        <div className="col">
                          <small>
                            <strong>Notifications have been sent</strong>
                          </small>
                          <div className="my-0 text-muted small">
                            Fusce dapibus, tellus ac cursus commodo
                          </div>
                          <small className="badge badge-pill badge-light text-muted">
                            30m ago
                          </small>
                        </div>
                      </div>{" "}
                      {/* / .row */}
                    </div>
                    <div className="list-group-item bg-transparent">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <span className="fe fe-link fe-24" />
                        </div>
                        <div className="col">
                          <small>
                            <strong>Link was attached to menu</strong>
                          </small>
                          <div className="my-0 text-muted small">
                            New layout has been attached to the menu
                          </div>
                          <small className="badge badge-pill badge-light text-muted">
                            1h ago
                          </small>
                        </div>
                      </div>
                    </div>{" "}
                    {/* / .row */}
                  </div>{" "}
                  {/* / .list-group */}
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary btn-block"
                    data-dismiss="modal"
                  >
                    Clear All
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade modal-shortcut modal-slide"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="defaultModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="defaultModalLabel">
                    Shortcuts
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body px-5">
                  <div className="row align-items-center">
                    <div className="col-6 text-center">
                      <div className="squircle bg-success justify-content-center">
                        <i className="fe fe-cpu fe-32 align-self-center text-white" />
                      </div>
                      <p>Control area</p>
                    </div>
                    <div className="col-6 text-center">
                      <div className="squircle bg-primary justify-content-center">
                        <i className="fe fe-activity fe-32 align-self-center text-white" />
                      </div>
                      <p>Activity</p>
                    </div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-6 text-center">
                      <div className="squircle bg-primary justify-content-center">
                        <i className="fe fe-droplet fe-32 align-self-center text-white" />
                      </div>
                      <p>Droplet</p>
                    </div>
                    <div className="col-6 text-center">
                      <div className="squircle bg-primary justify-content-center">
                        <i className="fe fe-upload-cloud fe-32 align-self-center text-white" />
                      </div>
                      <p>Upload</p>
                    </div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-6 text-center">
                      <div className="squircle bg-primary justify-content-center">
                        <i className="fe fe-users fe-32 align-self-center text-white" />
                      </div>
                      <p>Users</p>
                    </div>
                    <div className="col-6 text-center">
                      <div className="squircle bg-primary justify-content-center">
                        <i className="fe fe-settings fe-32 align-self-center text-white" />
                      </div>
                      <p>Settings</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>{" "}
        {/* main */}
      </div>
    </>
  );
}

export default UiAccordian;
