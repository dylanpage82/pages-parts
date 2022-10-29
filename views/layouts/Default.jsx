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
            <h1>Pages <br/>Parts</h1>
            </div>

        <nav>  
          <div className='navbar'>
            <div className='container nav-container'>
              <input className='checkbox' type="checkbox" />
              <div className='hamburger-lines'>
                <span className='line line1'></span>
                <span className='line line2'></span>
                <span className='line line3'></span>
              </div>
              <div className='menu-items'>
                <li><a href="/">Home</a></li>
                <li><a href="/parts">Inventory</a></li>
                {/* <li>{req.session.loggedIn ? <a href='/parts/new'>Add to Inventory</a> : ""}</li>
                <li>{req.session.loggedIn ? <a href='/user/logout'>Logout</a> : <a href='/user/login'>Login</a>}</li> */}
              </div>
            </div>
          </div>
        </nav>
          <div className='middle'>
            {this.props.children}
            <nav>
              {part ? <a href={`/parts/${part._id}/edit`}> Update Part</a> : ''}
            </nav>

          </div>
        </body>
      </html>
    )
  }
}

module.exports = Default
