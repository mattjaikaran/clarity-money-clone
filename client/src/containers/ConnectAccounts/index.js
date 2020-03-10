import React from 'react'

const ConnectAccounts = (props) => {
  return (
    <div class="connectAccounts col-md-4 col-sm-6 card shadow-sm">
      <div class="text-center containerInner mt-1 mb-1">
        <h6 class="font-weight-light">Connect More Accounts</h6>
        <hr class="transactions-hr" />
        {/* <img src="" alt="" /> */}
        <p class="insights-text">
          The more accounts you connect, the better our insights are.
        </p>
        <button class="mt-2 btn btn-block btn-link-accounts">
          Link Other Accounts
        </button>
      </div>
    </div>
  )
}

export default ConnectAccounts