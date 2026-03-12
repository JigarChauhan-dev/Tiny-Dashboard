import React from 'react'
import { Link } from 'react-router-dom'

function AuthConfirm() {
  return (
    <>
    <div class="wrapper vh-100">
      <div class="row align-items-center h-100">
        <form class="col-lg-3 col-md-4 col-10 mx-auto text-center">
          <div class="mx-auto text-center my-4">
            <Link class="navbar-brand mx-auto mt-2 flex-fill text-center" to={"/"}>
              <svg version="1.1" id="logo" class="navbar-brand-img brand-md" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 120 120" xml:space="preserve">
                <g>
                  <polygon class="st0" points="78,105 15,105 24,87 87,87 	" />
                  <polygon class="st0" points="96,69 33,69 42,51 105,51 	" />
                  <polygon class="st0" points="78,33 15,33 24,15 87,15 	" />
                </g>
              </svg>
            </Link>
            <h4 class="my-3">Password reset successfully!</h4>
          </div>
          <div class="alert alert-success" role="alert"> An email has been sent to your email <strong>email@example.com</strong>. Please check your email to get reset link </div>
          <Link to={"/"} class="btn btn-lg btn-primary btn-block">Back to home</Link>
          <p class="mt-5 mb-3 text-muted">© 2026</p>
        </form>
      </div>
    </div>
    </>
  )
}

export default AuthConfirm