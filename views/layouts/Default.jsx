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
          <div className='left'></div>

          <div className='middle'>
            <h1>Pages Part Store</h1>
            <nav>
              <a href='/parts'>Home</a><br />
              <a href='/parts/new'>Add a new part</a>
            </nav>

            {this.props.children}
            <nav>
              {part ? <a href={`/parts/${part._id}`}>{part.name} Update Part</a> : ''}
            </nav>
          </div>
          <div className='right'></div>
        </body>
      </html>
    )
  }
}

module.exports = Default
