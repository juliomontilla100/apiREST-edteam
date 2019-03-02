const express = require('express'),
	  multer = require('multer'),
	  upload = multer(),
	  app = express(),
	  config = require('./config.js'),
	  router = require('./router.js')

app
	.set('port',process.env.PORT)
	.use(express.json())
	.use(express.urlencoded({ extended: false }))
	//para parsear multipart/form-data
	.use(upload.array())
	.use((req, res, next) => {
		//https://enable-cors.org/
		res.header('Access-Control-Allow-Origin', '*')
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
		res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
		next()
	})
	.use('/api',router)


module.exports = app