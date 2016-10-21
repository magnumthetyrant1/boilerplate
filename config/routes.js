module.exports = (app) => {
  const jsdefaults = [
    {
      id: 1,
      title: '../'
    }
    ];
  const posts = [
    {
      id: 1,
      author: 'Max-Andre',
      title: 'Instructions for use',
      body: 'Run npm install'
    },
    {
      id: 2,
      author: 'Max',
      title: 'Express: Starting from the Bottom',
      body: 'Blog post number 2'
    },
    {
      id: 3,
      author: 'Max',
      title: 'Streams',
      body: 'Blog post number 3'
    },
    {
      id: 4,
      author: 'Max',
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
    });
  });
};// End of routes.js
