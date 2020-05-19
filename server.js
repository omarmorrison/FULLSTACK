if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config() //https://stackoverflow.com/questions/55271926/dotenv-load-is-not-a-function-while-trying-to-run-a-node-script
}

const users = []

const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')

/*
const initializePassport = require('./passport-config')
initializePassport(
    passport, 
    email => users.find(user => user.email === email),
    id => users.find(user => user.id === id) 
)
*/

const indexRouter = require('./routes/index')
const authorRouter = require('./routes/authors')
const bookRouter = require('./routes/books')
const registerRouter = require('./routes/register')
const loginRouter = require('./routes/login')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

app.use(bodyParser.urlencoded({ limit: '10mb', extended:  false}))
app.use(express.urlencoded({ extended: false}))
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
    res.send('Hey There')
})

app.get('/login', (req, res) => {
    res.send('Omar')
})

app.post('/login', (req, res) => {
    res.send('Login')
});

app.get('/register', (req, res) => {
    res.send('Registerd')
});


app.post('/register', (req, res) => {
    res.send('Hey Omar')
})

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true
})
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))


app.use('/', indexRouter)

app.use('/register', registerRouter)
app.use('/login', loginRouter)

app.delete('/logout', (req, res) => {
    req.logOut()
    res.redirect('/login')
})

app.listen(process.env.PORT || 3000);

