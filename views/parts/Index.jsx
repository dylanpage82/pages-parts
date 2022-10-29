const React = require('react')
const Default = require('../layouts/Default.jsx')
class Index extends React.Component {
  render () {
    const { parts } = this.props
    return (
      <Default>

        <ul>
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
        </ul>
      </Default>
    )
  }
}

module.exports = Index
