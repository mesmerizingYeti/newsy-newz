const React = require('react')

module.exports = props => {
  return (
    <html lang="en">
    <head>
      <meta charSet="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Newsy Newz</title>
    </head>
    <body>
      
      {props.children}

    </body>
    </html>
  )
}