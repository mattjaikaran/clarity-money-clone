import React from 'react'

const MonthlyBreakdown = (props) => {
  return (
    <div className="monthBreakdown col-md-4 col-sm-6 card shadow-sm">
      <div className="text-center my-1">
        <h6 className="text-white font-weight-normal mb-2">February</h6>
        <p className="text-green mb-1">Income</p>
        <h5 className="text-green font-weight-normal">$10,000</h5>
        <span className="text-white">*graph*</span>
        <div className="budget-spent-left row mt-4">
          <div className="col-6 text-white">
            <p className="mb-1">Spent</p>
            <h5 className="font-weight-normal">$2000</h5>
          </div>
          <div className="col-6 text-green">
            <p className="mb-1">Left</p>
            <h5 className="font-weight-normal">$8000</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MonthlyBreakdown