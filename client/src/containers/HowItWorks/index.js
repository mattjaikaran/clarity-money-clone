import React from 'react'

const HowItWorks = (props) => {
  return (
    <div className="howItWorks col-md-4 col-sm-6 card bg-darkblue mb-3 shadow-sm">
      <div className="containerInner p-3 text-center">
        <h6 className="font-weight-normal">
          How it works
        </h6>
        <img src={require('../../img/phone.png')} className="my-5 coin-img" alt="" />
        <p className="copy font-weight-light">
          We are always working on new ways to help you, so over time you'll see new tiles appear in your feed.
        </p>
      </div>
    </div>
  )
}

export default HowItWorks