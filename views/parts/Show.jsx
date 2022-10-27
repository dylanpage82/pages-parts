const React = require('react')
const Default = require('../layouts/Default.jsx')
class Show extends React.Component {
  render () {
    const{name, manufacture, description, price,} = this.props.part
    return(
      <Default>
        <p>{ name } { manufacture}<br /> {price} <br /> {description}</p>
      </Default>
    )
  }
}

module.exports = Show
