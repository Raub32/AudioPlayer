const express = require('express')
const fs = require('fs')
const app = express()
const path = require('path')
// const cors = require('cors')
const multer = require('multer')
const storage = multer.diskStorage({
  destination: (req,file, cb) => {
    cb(null, './public/audio')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})
const upload = multer({storage: storage})
app.use(express.static('public'))
app.set('port', process.env.PORT || 8080)
// app.use(cors())

app.get('/', (req,res) => {
  res.sendFile(path.join( __dirname + '/index.html'))
})

app.post('/audio', upload.single('audioFile'), (req,res) => {
  console.log(res)
  res.redirect('/')
})

app.get('/audio', (req,res) => {
  // res.sendFile(path.join(__dirname + '/public/audio/slide.mp3'))

  fs.readdir(path.join(__dirname + '/public/audio'), (err, files) => {
    res.json(files)
  })
})

app.listen(app.get('port'), () => {
  console.log(`Server started on port ${app.get('port')}`)
})
