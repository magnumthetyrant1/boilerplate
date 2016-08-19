const
  express = require('express'),
  path    = require('path'),
  favicon = require('serve-favicon'),
  port    = process.env.PORT || 3000,
  app     = express()
;

// Enable the application to access static files.
// =============================================================================
app.use(express.static(__dirname + '/public'));

// fake posts to simulate a database




// Set the view engine of the application
// =============================================================================
require('./config/ejs')(app);
const posts = [
  {
    id: 1,
    author: 'John',
    title: 'Templating with EJS',
    body: 'Blog post number 1'
  },
  {
    id: 2,
    author: 'Drake',
    title: 'Express: Starting from the Bottom',
    body: 'Blog post number 2'
  },
  {
    id: 3,
    author: 'Emma',
    title: 'Streams',
    body: 'Blog post number 3'
  },
  {
    id: 4,
    author: 'Cody',
    title: 'Events',
    body: 'Blog post number 4'
  }
];
// blog home page
app.get('/', (req, res) => {
  // render `home.ejs` with the list of posts
  res.render('home', { posts: posts })
})

// blog post
app.get('/post/:id', (req, res) => {
  // find the post in the `posts` array
  const post = posts.filter((post) => {
    return post.id == req.params.id
  })[0]

  // render the `post.ejs` template with the post content
  res.render('post', {
    author: post.author,
    title: post.title,
    body: post.body
  })
})

// Set the routes for the application
// =============================================================================
//require('./config/routes')(app);

// Set the default port for the application.
// =============================================================================
app.listen(port, (err) => {
  console.log('Running on port: ' + port + '.');
});

/*----------------------------END OF FILE-------------------------------------*/
