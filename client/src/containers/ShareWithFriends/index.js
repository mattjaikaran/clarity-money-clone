import React from 'react'

const ShareWithFriends = (props) => {
  return (
    <div className="shareWithFriends col-md-4 col-sm-6 card bg-green mb-3 shadow-sm">
      <div className="containerInner p-3 text-center">
        <img src={require('../../img/phone.png')} className="my-5 coin-img" alt="" />
        <h5 className="text-white font-weight-nomral">
          Love Clarity Money?
            <br />
            Share it with your friends!
        </h5>
        <button className="btn btn-block btn-blue">Invite Friends</button>
      </div>
    </div>
  )
}

export default ShareWithFriends