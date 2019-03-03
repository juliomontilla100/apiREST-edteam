process.env.NODE_ENV = process.env.NODE_ENV || 'dev'
process.env.PORT = process.env.PORT || 3000

if(process.env.NODE_ENV === 'dev'){
    process.env.URL_DB = 'mongodb://localhost:27017/maratones'
}else {
    process.env.URL_DB = 'mongodb+srv://juliomontilla100:04186131441@marathons-apirest-urtk0.mongodb.net/test?retryWrites=true'
}