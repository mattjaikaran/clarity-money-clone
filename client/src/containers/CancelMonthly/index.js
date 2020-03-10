import React from 'react'

const CancelMonthly = (props) => {
  return (
    <div className="cancelMonthlyMemberships col-md-4 col-sm-6 card shadow-sm">
      <div className="transactions containerInner">
        <div className="mt-1 mb-3 text-center">
          <h6 className="d-inline font-weight-light">
            Anything you'd like to cancel?
          </h6>
        </div>

        <hr className="transaction-hr" />

        <div className="collapse show" id="transactionsCollapse">
          <div className="transactions-content">
            <div className="row">
              <div className="col-6">
                <p className="card-title mb-0">
                  <img
                    className="img-responsive verizon-img text-center"
                    src={require('../../img/verizon.png')}
                    alt="coin img" />
                  Verizon Wireless
                </p>
              </div>
              <div className="col-6 text-right">
                <p>$90.<span className="decimal">00</span></p>
              </div>
            </div>

            <hr className="transaction-hr" />

            <div className="row">
              <div className="col-6">
                <p className="card-title mb-0">
                  <img
                    className="img-responsive transaction-img text-center"
                    src={require('../../img/coned.png')}
                    alt="coin-img" />
                  ConEdison
                </p>
              </div>
              <div className="col-6 text-right">
                <p>$85.<span className="decimal">21</span></p>
              </div>
            </div>

            <hr className="transaction-hr" />

            <div className="row">
              <div className="col-6">
                <p className="card-title mb-0">
                  <img
                    className="img-responsive spotify-img text-center"
                    src={require('../../img/spotify.png')}
                    alt="spotify-img" />
                  Spotify
                </p>
              </div>
              <div className="col-6 text-right">
                <p>$10.<span className="decimal">91</span></p>
              </div>
            </div>

            <hr className="transaction-hr" />

            <div className="row">
              <div className="col-6">
                <p className="card-title mb-0">
                  <img
                    className="img-responsive transaction-img text-center"
                    src={require('../../img/national-grid.png')}
                    alt="paypal-img" />
                  NationalGrid
                </p>
              </div>
              <div className="col-6 text-right">
                <p>$25.<span className="decimal">80</span></p>
              </div>
            </div>
          </div>
        </div>
        <button className="mt-2 btn btn-block btn-link-accounts">
          Let's Take A Look
        </button>
      </div>
    </div>
  )
}

export default CancelMonthly