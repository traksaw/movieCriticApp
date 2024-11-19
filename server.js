console.log('Server is on')
const express = require('express') //requires express
const app = express() //app will be holding express function
const bodyParser = require('body-parser')

const MongoClient = require('mongodb').MongoClient
const connectionString = 'mongodb+srv://waskarpaulino:Hello@cluster0.wabar.mongodb.net/movies?retryWrites=true&w=majority&appName=Cluster0'

app.listen(5555, function () {
  console.log('listening on 5555')
}) // allows us to listen for the port

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('public'))

//CRUD operations

MongoClient.connect(connectionString).then(client => {
  const db = client.db('movie-db')
  const movieTitles = db.collection('movies')
  console.log('connected to DB')

  app.get('/', (req, res) => {
    movieTitles.find().sort({ count: -1 }).toArray().then(results => {
      // console.log('get request works')
      res.render('index.ejs', { movies: results })

    }).catch(error => console.error(error))

  })

  app.get('/movies', (req, res) => {
    movieTitles.find().sort({ count: -1 }).toArray().then(results => {
      // console.log('get request works')
      res.render('index.ejs', { movies: results })

    }).catch(error => console.error(error))

  })

  app.post('/movies', (req, res) => {
    movieTitles
      .insertOne({ title: req.body.title, genres: req.body.genres, count: 0 })
      .then(result => {
        // console.log('post request works')
        res.redirect('/')
      }).catch(error => console.error(error))
  })
  app.put('/movies', (req, res) => {
    movieTitles.findOneAndUpdate({ title: req.body.title, genres: req.body.genres }, {
      $set: {
        count: req.body.count + 1
      },
    }, {
      sort: { _id: -1 }, //sort it by ascending or decending
      upsert: true // if doc does exist, add it.
    }, (err, result) => {
      if (err) return res.send(err)
      res.send(result)
    }).catch(error => console.error(error))
    res.redirect('/')

  })
  app.put('/moviesDown', (req, res) => {
    movieTitles.findOneAndUpdate({ title: req.body.title, genres: req.body.genres }, {
      $set: {
        count: req.body.count - 1
      },
    }, {
      sort: { _id: -1 }, //sort it by ascending or decending
      upsert: true // if doc does exist, add it.
    }, (err, result) => {
      if (err) return res.send(err)
      res.send(result)
    }).catch(error => console.error(error))
    res.redirect('/')

  })

  app.put('/edit-movie', (req, res) => {
    // console.log(req.body)
    movieTitles.findOneAndUpdate(
      { title: req.body.originalTitle, genres: req.body.originalGenre},
      {
        $set: {
          title: req.body.newTitle,
          genres: req.body.newGenre
        }
      }, {
      sort: { _id: -1 },
      upsert: false
    },
      (err, result) => {
        if (err) return res.send(err)
        res.send(result)
      }
    ).catch(error => console.error(error))
    res.redirect('/')
  })


  app.delete('/movies', (req, res) => {
    movieTitles.findOneAndDelete({ title: req.body.title, genres: req.body.genres }, (err, result) => {
      if (err) return res.send(500, err)
      res.send('Message deleted!')
    }).catch(error => console.error(error))
    res.redirect('/')
  })

})



// app.post('/movies', (req, res) => {
//     console.log(req.body)
// })

