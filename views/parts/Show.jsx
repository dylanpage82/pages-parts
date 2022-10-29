const React = require('react')
const Default = require('../layouts/Default.jsx')
class Show extends React.Component {
  render () {
    const { name, manufacture, description, price, image, quantity, _id} = this.props.part
    const part = this.props
    return (
      <Default part={this.props.part}>
        <div className='image'>{image ? <img src={image} /> : ''}</div>
        <p>{name}<br /> {manufacture}<br /> $ {price} <br /> {description}</p>
        <p>{quantity } in stock</p>
        {/* <form method='POST' action={`/parts/${part._id}?_method=DELETE`}>
        <input type='submit' value={`Delete ${name}`} />
        </form> */}
        <form method='POST' action={`/parts/${_id}/buy?_method=PUT`}>
        {quantity >0 ? <input type='submit' value={`BUY`} /> : "OUT OF STOCK"}
        </form>
        
      </Default>
    )
  }
}

module.exports = Show
