const React = require('react')
const Default = require('./layouts/Default')

class Home extends React.Component {
  render () {
    return (
      <Default username={this.props.data.loggedIn.username}>
      </Default>
    )
  }
}

module.exports = Home