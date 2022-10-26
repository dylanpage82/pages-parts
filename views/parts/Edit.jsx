const React = require('react')
const Default = require('../layouts/Default.jsx')

class Edit extends React.Component {
  render () {
    const { name, manufacture, description, _id, price } = this.props.part
    return (
      <Default>
        <form method='POST' action={`/parts/${_id}?_method=PUT`}>
          Name: <input type='text' name='name' defaultValue={name} /><br />
          Manufacure: <input type='text' name='manufacture' defaultValue={manufacture} /><br />
          Description: <input type='text' name='description' defaultValue={description} /><br />
          Price: <input type='number' name='price' defaultValue={price} />
          <input type='submit' value='Submit Part' />
        </form>
      </Default>
    )
  }
}

module.exports = Edit
