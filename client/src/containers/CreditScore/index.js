import React from 'react'

const CreditScore = (props) => {
  return (
    <div className="creditScore col-md-4 col-sm-6 card shadow-sm">
      <div className="containerInner text-center">
        <div className="mt-0 mb-2">
          <h6 className="d-inline font-weight-normal">
            Your score: <span className="text-green">Good</span>*
          </h6>
        </div>

        <hr className="transaction-hr" />

        <div className="mt-3">
          <h6 className="d-inline font-weight-light">
            *credit score graph*
          </h6>
          <p className="mt-3 font-weight-light">
            Your credit score hasn't changed since <br />the last report.
          </p>
          <small className="credit-score-updated-text text-muted mb-2 d-block">
            Updated January 30
          </small>
          <small className="disclaimer-alt">
            *VantageScore 3.0&reg; powered by Experian&reg;
            <a href="#">Learn More</a>
          </small>
        </div>
      </div>
    </div>
  )
}

export default CreditScore