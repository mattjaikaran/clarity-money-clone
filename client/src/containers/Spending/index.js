import React from 'react'

const Spending = (props) => {
  return (
    <div className="spending col-md-4 col-sm-6 card py-4 shadow bg-green">
      <h4 className="text-left">spending</h4>
      <p className="text-center p-bigger mb-0">
        You spent <span className="text-white">$80.96</span>
        <br /> the last few days
      </p>
      <div className="text-center my-3">
        <img
          className="img-responsive coin-img text-center"
          src={require('../../img/coin.png')}
          alt="coin img" />
      </div>
      <p className="text-center">You are on track.</p>
    </div>
  )
}

export default Spending