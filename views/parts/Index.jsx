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

                              <br />
                            
                              { price }
                            
                              <br />
                              <form method='POST' action={`/parts/${part._id}?_method=DELETE`}>
                                <input type='submit' value={`Delete ${name} ${price}`} />
                              </form>
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
