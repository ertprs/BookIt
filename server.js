const express = require('express');
const port = 4000;
const app = express();
require('./config/view-helper')(app);
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const env = require('./config/environment');
const path = require('path');
const logger = require('morgan');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const passportGoogle = require('./config/google_passport_auth2');
const passportFacebook = require('./config/passport-facebook-oauth-strategy');
const MongoStore = require('connect-mongo')(session);
const flash = require('connect-flash');
const customMiddleware = require('./config/noty');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');

// const trackServer = require('http').Server(app);
// const trackSockets = require('./config/track_socket').trackSockets(trackServer);
// trackServer.listen(5000);

const fs = require('fs');
const https = require('https');
var secureServer = https.createServer({ key: fs.readFileSync('/etc/letsencrypt/live/aarogyahub.com/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/aarogyahub.com/cert.pem'),
    ca: fs.readFileSync('/etc/letsencrypt/live/aarogyahub.com/chain.pem'),
    requestCert: false,     
    rejectUnauthorized: false },app);
const trackSockets = require('./config/track_socket').trackSockets(secureServer);
secureServer.listen(5000);   


const sassMiddleware = require('node-sass-middleware');
console.log(env.name);
console.log(env.asset_path);

if(env.name == 'development'){

app.use(sassMiddleware({
    src:path.join(__dirname,env.asset_path,'scss'),
    dest:path.join(__dirname,env.asset_path,'css'),
    debug: true,
    outputStyle:'extended',
    prefix:'/css'
}));
}
console.log('Patient Tracking server is running on port 5000');


app.use(expressLayouts);
app.set("layout invoice-view", false);
app.set("layout doctor_prescription_pad", false);
// app.set("layout doctor-profile-settings", false);
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(env.asset_path));
app.use('/uploads', express.static(__dirname + '/uploads'));
app.use(logger(env.morgan.mode, env.morgan.options));
app.set('view engine', 'ejs');
app.set('views', './views');


// app.use((req, res, next)=>{
//     res.locals.message = req.session.message
//     delete req.session.message
//     next()
//   });

app.use(session({
    name: 'Bookit',
    // To be changed at deployment
    secret: env.session_cookie_key,
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (20000 * 60 * 100)
    },
    store: new MongoStore({
        mongooseConnection: db,
        autoRemove: 'disabled'

    }, function(err) {
        if (err) {
            console.log('Error in MongoStore');
        }
    })

}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
app.use(flash());
app.use(customMiddleware.setFlash);
app.use('/', require('./routes/index'));

app.listen(port, function(err) {
    if (err) {
        console.log('Error', err);
        return;
    }

    console.log('Server is running on port ', port);
})