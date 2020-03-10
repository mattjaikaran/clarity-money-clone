import React from 'react'

const CreditCardDebt = (props) => {
  return (
    <div className="creditCardDebt col-md-4 col-sm-6 card shadow-sm">
      <div className="containerInner">
        <h6 className="font-weight-light text-center">
          <span className="text-muted">Credit Cards:</span> $1632.13
        </h6>
        <hr />
        <div className="chaseCreditCard card containerInner shadow-lg">
          <div className="row mt-2">
            <div className="col-2 text-center">
              <img src={require('../../img/chase.png')} className="transaction-img" alt="cc-logo" />
            </div>
            <div className="col-6 text-center">
              <small className="font-weight-light">Chase Sapphire Card</small>
            </div>
            <div className="col-1">
              <a href="#">
                <img src={require('../../img/edit.png')} className="edit-img" alt="" />
              </a>
            </div>
            <div className="col-3 text-center">
              <span className="font-weight-light">3609</span>
            </div>
          </div>
          <div className="mt-3 containerInner">
            <small className="font-weight-light">Balance</small>
            <h6 className="font-weight-normal">$205.32</h6>
            <div className="row mt-5 mb-2 text-black">
              <div className="col-5">
                <small className="font-weight-light">
                  Available Credit
                </small>
                <p className="font-weight-normal">
                  $8320.32
                </p>
              </div>
              <div className="col-4">
                <small className="font-weight-light">
                  Minimum Due
                </small>
                <p className="font-weight-normal">
                  $0.00
                </p>
              </div>
              <div className="col-3">
                <small className="font-weight-light">
                  APR
                </small>
                <p className="font-weight-normal">
                  10.25%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreditCardDebt