const React = require("react")

class Default extends React.Component{
    render(){
        const {part, name} = this.props
        return(
            <html>
                <head>
                    <link rel="stylesheet" href="/css/app.css"/>
                </head>
                <body>
                    <title>Pages Part Store</title>
                    <nav>
                        <a href="/parts/new">Add a new part</a>
                    </nav>
                </body>
            </html>
        )
    }
}