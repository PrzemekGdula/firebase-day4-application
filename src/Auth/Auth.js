import React from 'react'

class Auth extends React.Component {
  state = {
    isUserLoggedIn: false,
  }
  render() {
    return (
      <div>
        {
          this.state.isUserLoggedIn ?
            this.props.children
            :
            'Forms'
        }
      </div>
    )
  }
}

export default Auth