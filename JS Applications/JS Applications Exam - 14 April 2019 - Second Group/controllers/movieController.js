const movieController = (function() {
  const createGet = function(context) {
    helper.addHeaderInfo(context);

    context.loadPartials({
        header: "../views/common/header.hbs",
        footer: "../views/common/footer.hbs"
      })
      .then(function() {
        this.partial("../views/movies/create.hbs");
      });
  };

  const createPost = function(context) {
    const payload = {
      title: context.params.title,
      imageUrl: context.params.imageUrl,
      description: context.params.description,
      genres: context.params.genres.split(', '),
      tickets: Number(context.params.tickets)
    };

    requester.post("movies", "appdata", "Kinvey", payload)
      .then(helper.handler)
      .then(() => {
        context.redirect("/");
      });
  };

  const loadCinema = function(context) {
    helper.addHeaderInfo(context);
    const sortCriteria = JSON.stringify({
      tickets: -1
    });
    const endpoint = `movies?query={}&sort=${sortCriteria}`;

    requester.get(endpoint, "appdata", "Kinvey")
      .then(helper.handler)
      .then(movies => {
        context.movies = movies;

        context.loadPartials({
            header: "../views/common/header.hbs",
            footer: "../views/common/footer.hbs",
            "single-movie": "../views/movies/single-movie.hbs"
          })
          .then(function() {
            this.partial("../views/movies/cinema.hbs");
          });
      });
  };

  const myMovies = function(context) {
    helper.addHeaderInfo(context);
    const endpoint = `movies?query={"_acl.creator":"${sessionStorage.getItem('userId')}"}`;
    requester.get(endpoint, "appdata", "Kinvey")
      .then(helper.handler)
      .then((myMovies) => {
        context.movies = myMovies;

        context.loadPartials({
            header: "../views/common/header.hbs",
            footer: "../views/common/footer.hbs",
            "my-movie": "../views/movies/my-movie.hbs"
          })
          .then(function() {
            this.partial("../views/movies/my-movies.hbs");
          });
      });
  };

  const editGet = function (context) {
    helper.addHeaderInfo(context);
    const movieId = context.params.id;

    requester.get(`movies/${movieId}`, 'appdata', 'Kinvey')
      .then(helper.handler)
      .then((singleMovie) => {
        context.movie = singleMovie;

        context.loadPartials({
          header: "../views/common/header.hbs",
          footer: "../views/common/footer.hbs",
        })
        .then(function() {
          this.partial("../views/movies/edit.hbs");
        });
      });
  };

  const editPost = function (context) {
    helper.addHeaderInfo(context);
    const movieId = context.params.id;
    const payload = {
      title: context.params.title,
      imageUrl: context.params.imageUrl,
      description: context.params.description,
      genres: context.params.genres.split(', '),
      tickets: Number(context.params.tickets)
    };

    requester.put(`movies/${movieId}`, 'appdata', 'Kinvey', payload)
      .then(helper.handler)
      .then(() => {
        context.redirect("#/movie/user");
      });
  };

  const deleteGet = (context) => {
    helper.addHeaderInfo(context);
    const movieId = context.params.id;

    requester.get(`movies/${movieId}`, 'appdata', 'Kinvey')
      .then(helper.handler)
      .then((singleMovie) => {
        context.movie = singleMovie;

        context.loadPartials({
          header: "../views/common/header.hbs",
          footer: "../views/common/footer.hbs",
        })
        .then(function() {
          this.partial("../views/movies/delete.hbs");
        });
      });
  };

  const deletePost = (context) => {
    helper.addHeaderInfo(context);
    const movieId = context.params.id;

    requester.del(`movies/${movieId}`, 'appdata', 'Kinvey')
      .then(helper.handler)
      .then(() => {
        context.redirect('/');
      });
  };

  const loadDetails = (context) => {
    helper.addHeaderInfo(context);
    const movieId = context.params.id;

    requester.get(`movies/${movieId}`, 'appdata', 'Kinvey')
      .then(helper.handler)
      .then((movieById) => {
        context.movie = movieById;
        context.movie.myGenres = movieById.genres.join(', ');

        helper.loadPartials(context)
          .then(function() {
          this.partial("../views/movies/details.hbs");
        });
      });
  };

  const buyTicket = (context) => {
    helper.addHeaderInfo(context);
    const movieId = context.params.id;

    requester.get(`movies/${movieId}`, 'appdata', 'Kinvey')
      .then(helper.handler)
      .then((movieById) => {
        if (movieById.tickets > 0) {
          movieById.tickets--;
        }
        
        return requester.put(`movies/${movieId}`, 'appdata', 'Kinvey', movieById);
      })
      .then(helper.handler)
      .then(() => {
        context.redirect('#/cinema');
      })
  };

  return {
    createGet,
    createPost,
    loadCinema,
    myMovies,
    editGet,
    editPost,
    deleteGet,
    deletePost,
    loadDetails,
    buyTicket
  };
})();
