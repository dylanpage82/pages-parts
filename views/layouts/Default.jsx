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
          <div className='left'>
            <a href='/parts'>Home </a><br />
            <a href='/parts/new'> Add a new part</a>
          </div>

          <div className='middle'>

            {this.props.children}
          </div>
          <div className='right'>
            <nav>
              {part ? <a href={`/parts/${part._id}`}>{part.name} Update Part</a> : ''}
            </nav>
          </div>
          <div className='bottom' />
        </body>
      </html>
    )
  }
}

module.exports = Default
