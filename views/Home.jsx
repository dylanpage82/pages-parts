const React = require('react')
const Default = require('./layouts/Default')

class Home extends React.Component {
  render () {
    return (
      <Default >
        <a href='/user/logout'>logout</a>
      </Default>
    )
  }
}

module.exports = Home
