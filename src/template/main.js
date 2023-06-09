const {metadata} = require ('./metadata.js');

const React = require( 'react');
const ReactDOMServer = require( 'react-dom/server');
const {Helmet} = require( 'react-helmet');
const {StaticRouter} = require( 'react-router-dom/server');
const App = require('../router/router.js').default;

module.exports = function(app){

  app.get('*', (req, res)=>{
    const helmet = Helmet.renderStatic();
    
    const content = ReactDOMServer.renderToString(
      <StaticRouter location={req.url}>
        <App/>
      </StaticRouter>
      
    );

    const html = `<html lang='en-US'>
    <head>
      ${helmet.meta.toString()}
      ${helmet.title.toString()}
      
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="author" content="${metadata.author}"/>
      <meta name="publisher" content="${metadata.publisher}"/>
      <meta name="keywords" content="${metadata.keywords}"/>

      <meta property="og:url" content="${metadata.og_url}"/>
      <meta property="og:title" content="${metadata.og_title}" />
      <meta property="og:locale" content="${metadata.og_locale}" />
      <meta property="og:description" content="${metadata.og_description}" />
      <meta property="og:site_name" content="Alex Bruner" />
      <meta property="og:image" content="/ab.png" />

      <link rel="manifest" href="/manifest.json">
      <link rel="icon" type="image/png" href="/ab.png"/>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet">  
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
      <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
      <link rel="stylesheet" href="/css/main.css"/>
    </head>
    <body>
      ${process.env.NODE_ENV === 'production' ? tagManager.body : ''}
      <div id="react-root">
        ${content}
      </div>
      <script src="/app/app_bundle.js"></script>
    </body>
  </html>`
  
    res.send(html)
  })
}