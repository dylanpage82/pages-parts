const React = require('react')

class Default extends React.Component {
  render () {
    const { part } = this.props
    return (
      <html>
        <head>
          <link rel='stylesheet' href='/css/app.css' />
        </head>
        <body>
          <div className='top'>
            <h1>Pages Part Store</h1>
          </div>

          <div className='nav'>
            <a href='/parts'> Home</a>
          </div>

          <div className='middle'>
            {this.props.children}
            <nav>
              {part ? <a href={`/parts/${part._id}/edit`}> Update Part</a> : ''}
            </nav>

          </div>

          <div className='left'>
            <a href='/parts/new'>Add to Inventory</a>
          </div>
          <div className='right'>
            <a href='/user/logout'>Logout</a>
          </div>
        </body>
      </html>
    )
  }
}

module.exports = Default
