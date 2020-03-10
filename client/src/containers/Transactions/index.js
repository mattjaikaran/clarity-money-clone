import React from 'react'

const Transactions = (props) => {
  return (
    <div className="transactions col-md-4 col-sm-6 card shadow-sm">
      <div className="row mt-0">
        <div className="col-6">
          <button
            className="btn d-inline font-weight-light"
            type="button"
            data-toggle="collapse"
            data-target="#transactionsCollapse"
            aria-expanded="false"
            aria-controls="transactionsCollapse">
            All Transactions
              <img 
                src={require('../../img/caret-down.png')} 
                className="caret-down" 
                alt="caret-down" />
            </button>
          </div>
          <div className="col-6 text-right">
            <button
              className="btn d-inline font-weight-light"
              type="button"
              data-toggle="collapse"
              data-target="#transactionsCollapse"
              aria-expanded="false"
              aria-controls="transactionsCollapse">
              Most Recent
              <img 
                src={require('../../img/caret-down.png')} 
                className="caret-down" 
                alt="caret-down" />
            </button>
          </div>
          </div>

          <hr className="transaction-hr" />

          <div className="collapse show" id="transactionsCollapse">
            <div className="transactions-content card-body">
              <div className="row">
                <div className="col-6">
                  <p className="card-title mb-0">
                    <img
                      className="img-responsive transaction-img text-center"
                      src={require('../../img/coin.png')}
                      alt="coin img" />
                      Ticketmaster (pending)
                  </p>
                </div>
                  <div className="col-6 text-right">
                    <p>$580.<span className="decimal">00</span></p>
                  </div>
                </div>

          <hr className="transaction-hr" />

          <div className="row">
            <div className="col-6">
              <p className="card-title mb-0">
                <img
                  className="img-responsive transaction-img text-center"
                  src={require('../../img/coin.png')}
                  alt="coin img" />
                  C-Town Grocery
              </p>
            </div>
            <div className="col-6 text-right">
              <p>$76.<span className="decimal">80</span></p>
            </div>
          </div>

          <hr className="transaction-hr" />

          <div className="row">
            <div className="col-6">
              <p className="card-title mb-0">
                <img
                  className="img-responsive transaction-img text-center"
                  src={require('../../img/coin.png')}
                  alt="coin-img" />
                  Direct Deposit
              </p>
            </div>
            <div className="col-6 text-right">
              <p>$4076.<span className="decimal">80</span></p>
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
                  src={require('../../img/paypal.png')}
                  alt="paypal-img" />
                  PayPal Deposit
              </p>
            </div>
            <div className="col-6 text-right">
              <p>$455.<span className="decimal">80</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Transactions