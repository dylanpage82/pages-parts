const React = require('react')
const Default = require('../layouts/Default.jsx')

class New extends React.Component {
  render () {
    return (
      <Default>
        <form method='POST' action='/parts'>
          Name: <input type='text' name='name' placeholder='Name of Part' /><br />
          Manufacture: <input type='text' name='manufacture' placeholder='manufacutre of part' /> <br />
          Description: <input type='text area' name='description' placeholder='part info' /><br />
          Price: <input type='number' name='price' placeholder='price' /><br />
          Quantity: <input type='number' name='quantity' placeholder='quantity' /><br />
          Image: <input type='text' name='image' placeholder='insert img url' /><br />
          <input type='submit' value='Submit New Part' />
        </form>
      </Default>
    )
  }
}
module.exports = New
