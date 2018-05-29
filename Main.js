import React, { Component } from 'react';

class Main extends Component {
  render() {
    return (
      <div className="home">
        <div className="container-fluid nomargin main">
          <div className="container">
            <div className="row">

              <div className="wrap_for_login col-lg-6 col-md-8 col-sm-8 col-10 offset-1 offset-lg-3 offset-md-3 offset-sm-2 mt-5">

                <form className="form-signin">
                  <img src={require ("./images/fly-header-logo.svg")} alt="Logo" className="logo mx-auto d-block mt-4 mb-0" />
                  <p className="text-center"><small>Dashboard Login</small></p>

                  <input id="" className="form-control mb-2" placeholder="Username" required="" autofocus type="text" />
                  <input id="" className="form-control mb-3" placeholder="Password" required="" type="password" />
                  <div className="checkbox">
                    <label>
                    <input value="remember-me" type="checkbox" /> Remember me
                    </label>
                  </div>
                  <button className="btn btn-lg btn-primary btn-block mb-4" onclick="window.location.href='dashboard.html'" type="submit">Sign in</button>
                  </form>

              </div>
            </div>
          </div>


        </div>
      </div>
    );
  }
}
export default Main;
