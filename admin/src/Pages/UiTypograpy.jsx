import React from 'react'
import Header from '../Common/Header'
import Aside from '../Common/Aside'

function UiTypograpy() {
  return (
    <>
   <div className="wrapper">
<Header/>
<Aside/>
  <main role="main" className="main-content">
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-12 mb-4">
          <h2 className="h5 page-title">Typography</h2>
          <p className="text-muted">This primitive is meant to make it easy to display both user-centric or activity-centric actions in your app. Sometimes it makes sense to even blend both in a single timeline, which works perfectly.</p>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card shadow">
                <div className="card-header">
                  <strong className="card-title">Heading</strong>
                </div>
                <div className="card-body">
                  <p className="h1 mb-4">h1. Bootstrap heading</p>
                  <p className="h2 mb-3">h2. Bootstrap heading</p>
                  <p className="h3 mb-3">h3. Bootstrap heading</p>
                  <p className="h4 mb-3">h4. Bootstrap heading</p>
                  <p className="h5 mb-3">h5. Bootstrap heading</p>
                  <p className="h6 mb-3">h6. Bootstrap heading</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card shadow">
                <div className="card-header">
                  <strong className="card-title">Inline text elements</strong>
                </div>
                <div className="card-body">
                  <p>You can use the mark tag to <mark>highlight</mark> text.</p>
                  <p><del>This line of text is meant to be treated as deleted text.</del></p>
                  <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
                  <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
                  <p><u>This line of text will render as underlined</u></p>
                  <p><small>This line of text is meant to be treated as fine print.</small></p>
                  <p><strong>This line rendered as bold text.</strong></p>
                  <p><em>This line rendered as italicized text.</em></p>
                </div>
              </div>
            </div>
            <div className="col-12 mb-4">
              <div className="card shadow">
                <div className="card-header">
                  <strong className="card-title">Paragraph</strong>
                </div>
                <div className="card-body">
                  <p>Lorem ipsum dolor sit amet, te dolores sapientem eos, nonumy civibus volutpat an vis. Vis vide definitiones mediocritatem te. Ad erant aperiri sit, eu eum alii tempor, stet evertitur assentior ei est. Omnis fuisset antiopam eu eum.</p>
                  <p>Ex tale mutat duo, nostro propriae ei cum, modo fabellas nominati in eos. Bonorum deleniti percipitur sit ad, in pri prima meliore euripidis. Ne ancillae apeirian eam. Tollit virtute conceptam in eos. Qui quaeque delectus maluisset no, id nulla partem erroribus sed.</p>
                  <p>Sea ut stet maluisset, an denique adolescens eam, vim ancillae mediocrem ad. Te quot virtute sea, vero blandit usu no. Dico utinam vituperata nam ad, ne est autem similique dissentias. Eum ne natum tempor cetero. Sit vero vocent interesset ea.</p>
                </div>
              </div>
            </div>
          </div> {/* end section */}
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="mb-3"><strong>Blockquote</strong></div>
              <blockquote className="blockquote">
                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
              </blockquote>
            </div>
            <div className="col-md-6 mb-4">
              <div className="mb-3"><strong>Lead text</strong></div>
              <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            </div>
          </div> {/* end section */}
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card shadow">
                <div className="card-header">
                  <strong className="card-title">Unordered List</strong>
                </div>
                <div className="card-body">
                  <ul>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Consectetur adipiscing elit</li>
                    <li>Integer molestie lorem at massa</li>
                    <li>Facilisis in pretium nisl aliquet</li>
                    <li>Nulla volutpat aliquam velit <ul>
                        <li>Phasellus iaculis neque</li>
                        <li>Purus sodales ultricies</li>
                        <li>Vestibulum laoreet porttitor sem</li>
                        <li>Ac tristique libero volutpat at</li>
                      </ul>
                    </li>
                    <li>Faucibus porta lacus fringilla vel</li>
                    <li>Aenean sit amet erat nunc</li>
                    <li>Eget porttitor lorem</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card shadow">
                <div className="card-header">
                  <strong className="card-title">Ordered List</strong>
                </div>
                <div className="card-body">
                  <ol>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Consectetur adipiscing elit</li>
                    <li>Integer molestie lorem at massa</li>
                    <li>Facilisis in pretium nisl aliquet</li>
                    <li>Nulla volutpat aliquam velit <ol>
                        <li>Phasellus iaculis neque</li>
                        <li>Purus sodales ultricies</li>
                        <li>Vestibulum laoreet porttitor sem</li>
                        <li>Ac tristique libero volutpat at</li>
                      </ol>
                    </li>
                    <li>Faucibus porta lacus fringilla vel</li>
                    <li>Aenean sit amet erat nunc</li>
                    <li>Eget porttitor lorem</li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card shadow">
                <div className="card-header">
                  <strong className="card-title">Unstyled Lists</strong>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled">
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Consectetur adipiscing elit</li>
                    <li>Integer molestie lorem at massa</li>
                    <li>Facilisis in pretium nisl aliquet</li>
                    <li>Nulla volutpat aliquam velit <ul>
                        <li>Phasellus iaculis neque</li>
                        <li>Purus sodales ultricies</li>
                        <li>Vestibulum laoreet porttitor sem</li>
                        <li>Ac tristique libero volutpat at</li>
                      </ul>
                    </li>
                    <li>Faucibus porta lacus fringilla vel</li>
                    <li>Aenean sit amet erat nunc</li>
                    <li>Eget porttitor lorem</li>
                    <li>Eget porttitor lorem</li>
                  </ul>
                </div>
              </div>
            </div>
          </div> {/* end section */}
        </div> {/* .col-12 */}
      </div> {/* .row */}
    </div> {/* .container-fluid */}
    <div className="modal fade modal-notif modal-slide" tabIndex={-1} role="dialog" aria-labelledby="defaultModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-sm" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="defaultModalLabel">Notifications</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
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
                    <small><strong>Package has uploaded successfull</strong></small>
                    <div className="my-0 text-muted small">Package is zipped and uploaded</div>
                    <small className="badge badge-pill badge-light text-muted">1m ago</small>
                  </div>
                </div>
              </div>
              <div className="list-group-item bg-transparent">
                <div className="row align-items-center">
                  <div className="col-auto">
                    <span className="fe fe-download fe-24" />
                  </div>
                  <div className="col">
                    <small><strong>Widgets are updated successfull</strong></small>
                    <div className="my-0 text-muted small">Just create new layout Index, form, table</div>
                    <small className="badge badge-pill badge-light text-muted">2m ago</small>
                  </div>
                </div>
              </div>
              <div className="list-group-item bg-transparent">
                <div className="row align-items-center">
                  <div className="col-auto">
                    <span className="fe fe-inbox fe-24" />
                  </div>
                  <div className="col">
                    <small><strong>Notifications have been sent</strong></small>
                    <div className="my-0 text-muted small">Fusce dapibus, tellus ac cursus commodo</div>
                    <small className="badge badge-pill badge-light text-muted">30m ago</small>
                  </div>
                </div> {/* / .row */}
              </div>
              <div className="list-group-item bg-transparent">
                <div className="row align-items-center">
                  <div className="col-auto">
                    <span className="fe fe-link fe-24" />
                  </div>
                  <div className="col">
                    <small><strong>Link was attached to menu</strong></small>
                    <div className="my-0 text-muted small">New layout has been attached to the menu</div>
                    <small className="badge badge-pill badge-light text-muted">1h ago</small>
                  </div>
                </div>
              </div> {/* / .row */}
            </div> {/* / .list-group */}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary btn-block" data-dismiss="modal">Clear All</button>
          </div>
        </div>
      </div>
    </div>
    <div className="modal fade modal-shortcut modal-slide" tabIndex={-1} role="dialog" aria-labelledby="defaultModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="defaultModalLabel">Shortcuts</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
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
  </main> {/* main */}
</div>
    </>
  )
}

export default UiTypograpy