const React = require("react")

class Default extends React.Component{
    render(){
        const {part, title} = this.props
        return(
            <html>
                <head>
                    <link rel="stylesheet" href="/css/app.css"/>
                    <title>{title}</title>
                </head>
                <body>
                    <div className="left">
                    </div>

                    <div className="middle">
                        <title>Pages Part Store
                        <nav>
                            <a href="/parts">Home</a><br/>
                            <a href="/parts/new">Add a new part</a>
                        </nav>
                        </title>
                        <h1>
                            {title}
                        </h1>
                        {this.props.children}
                        <nav>
                            {part ? <a href={`/parts/${part._id}`}>{part.name} Update Part</a> : ""}
                        </nav>
                    </div>
                    <div class name = "right"></div>
                </body>
            </html>
        )
    }
}