const React = require('react')
const Default = require('../layouts/Default.jsx')
class Show extends React.Component {
  render () {
    const { name, manufacture, description, price, image, quantity, _id } = this.props.part
    return (
      <Default username={this.props.loggedIn.username}>
        <div className='image'>{image ? <img src={image} /> : ''}</div>
        <p>{name}<br /> {manufacture}<br /> $ {price} <br /> {description}</p>
        <p>{quantity} in stock</p>
        
        <form method='POST' action={`/parts/${_id}/buy?_method=PUT`}>
          {quantity > 0 ? <input type='submit' value='BUY' /> : 'OUT OF STOCK'}
        </form>
        <form method='POST' action={`/parts/${_id}?_method=DELETE`}>
        <input type='submit' value={`Delete ${name}`}/>
        </form>

      </Default>
    )
  }
}

module.exports = Show
