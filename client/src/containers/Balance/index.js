import React from 'react'

const Balance = (props) => {
  return (
    <div className="balance col-md-4 col-sm-6 bg-white first-card">
      <div className="containerInner">
        <div className="panel cash align-items-center">
          <div className="first-card-row mt-3">
            <div className="col-6">
              <p>Cash</p>
            </div>
            <div className="col-6 text-right">
              <p className="text-green d-inline">$4,470.<span className="decimal">39</span></p>
            </div>
          </div>
        </div>
        <hr className="transaction-hr" />
          <div className="panel credit align-items-center">
            <div className="first-card-row">
              <div className="col-6">
                <p className="card-title mb-0">Credit Debt</p>
              </div>
              <div className="col-6 text-right">
                <p>$1,089.<span className="decimal">72</span></p>
              </div>
            </div>
          </div>
      </div>
      </div>
  )
}

export default Balance