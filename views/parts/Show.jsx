const React = require('react')
const Default = require('../layouts/Default.jsx')
class Show extends React.Component {
  render () {
    const { name, manufacture, description, price } = this.props.part
    return (
      <Default>
        <p>{name} {manufacture}<br /> {price} <br /> {description}</p>
        {/* <form method='POST' action={`/parts/${part._id}?_method=DELETE`}>
        <input type='submit' value={`Delete ${name} ${manufacture} ${price} ${description}`} />
        </form> */}
      </Default>
    )
  }
}

module.exports = Show
