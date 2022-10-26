const Default = require('../layouts/Default.jsx')

React = require('react')
Default = require('../layouts/Default.jsx')
class New extends React.Component {
  render () {
    return (
      <Default>
        <form method='POST' action='/parts'>
          Name: <input type='text' name='name' placeholder='Name of Part' /><br />
          Manufacture: <input type='text' name='manufacture' placeholder="manufacutre of part" /> <br />
          Description: <input type='text area' name='description' placeholder='part info' /><br />
          Price: <input type='number' name='price' placeholder='price' />
          Image: <input type='text' name='image' placeholder='insert img url' /><br />
          <input type="submit" value="Submit New Part"></input>
        </form>
      </Default>
    )
  }
}
module.exports = New
