
let express  = require('express');
let app      = express();				
let port  	 = process.env.PORT || 8080; 			
let morgan = require('morgan'); 
let bodyParser = require('body-parser'); 	

app.use(express.static(__dirname + '/public')); 				
app.use(bodyParser.urlencoded({'extended':'true'})); 			
app.use(bodyParser.json()); 									
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(morgan('dev')); 

require('./config/routes.js')(app)

app.listen(port,()=>{
    console.log(`Web Server Run on Port ${port}`);
});

