const React = require('react')
const Default = require('../layouts/Default.jsx')
class Index extends React.Component {
  render () {
    const { parts } = this.props
    return (
      <Default username={this.props.loggedIn.username}>
        {
                         parts.map((part) => {
                           const { name, price } = part
                           return (
                             <li key={part._id}>
                               <a href={`/parts/${part._id}`}>
                                 {name}
                               </a>
                               --$ {price}

                               <br />

                             </li>
                           )
                         })
                    }
      </Default>
    )
  }
}

module.exports = Index
