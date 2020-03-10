import React from 'react'

const Loan = (props) => {
  return (
    <div className="loan col-md-4 col-sm-6 card shadow-sm">
      <div className="text-center containerInner mt-3 mb-1">
        <h6 className="d-inline font-weight-normal">
          I want to save <br /><br />for
        </h6>
        <button
          className="btn btn-outline-secondary d-inline"
          type="button"
          data-toggle="collapse"
          data-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample">
          long egg
          <img src={require('../../img/caret-down.png')} className="caret-down" alt="caret-down" />
        </button>
        <div className="text-center my-4">
          <img
            className="img-responsive piggy-bank-img text-center"
            src={require('../../img/piggy-bank.png')}
            alt="coin img" />
        </div>
        <div className="mt-4">
          <h5 className="font-weight-normal">Earn 1.70%</h5>
          <small className="disclaimer">
            Annual Percentage Yield
            <a href="#">Learn More</a>
          </small>
          <button className="mt-2 btn btn-block btn-learn-more">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}

export default Loan