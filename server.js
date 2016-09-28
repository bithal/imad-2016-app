var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
	'article-one' :{
		  title:'Article One | bithal',
		heading:'Article One',
		date:'5th Sept 2016',
		content:`
		  
		        <p>
		            This is the content of my file.This is the content of my file.
		            This is the content of my file.
		            This is the content of my file.This is the content of my file.
		            This is the content of my file.
		        </p>
		    
		        <p>
		            This is the content of my file.This is the content of my file.
		            This is the content of my file.
		            This is the content of my file.This is the content of my file.
		            This is the content of my file.
		        </p> 
		        <p>
		            This is the content of my file.This is the content of my file.
		            This is the content of my file.
		            This is the content of my file.This is the content of my file.
		            This is the content of my file.
		        </p>`    
			},
	'article-two' :{
		title:'Article Two | bithal',
		heading:'Article Two',
		date:'10th Sept 2016',
		content:`
		  
		        <p>
		            This is the content of my file.This is the content of my file.
		            This is the content of my file.
		            This is the content of my file.This is the content of my file.
		            This is the content of my file.
		        </p>
		    
		        <p>
		            This is the content of my file.This is the content of my file.
		            This is the content of my file.
		            This is the content of my file.This is the content of my file.
		            This is the content of my file.
		        </p>
		    
		        <p>
		            This is the content of my file.This is the content of my file.
		            This is the content of my file.
		            This is the content of my file.This is the content of my file.
		            This is the content of my file.
		        </p>`    
			},
	'article-three'  : {
		title:'Article Three | bithal',
		heading:'Article three',
		date:'15th Sept 2016',
		content:`
		  
		        <p>
		            This is the content of my file.This is the content of my file.
		            This is the content of my file.
		            This is the content of my file.This is the content of my file.
		            This is the content of my file.
		        </p>
		    
		        <p>
		            This is the content of my file.This is the content of my file.
		            This is the content of my file.
		            This is the content of my file.This is the content of my file.
		            This is the content of my file.
		        </p>
		    
		        <p>
		            This is the content of my file.This is the content of my file.
		            This is the content of my file.
		            This is the content of my file.This is the content of my file.
		            This is the content of my file.
		        </p>`    
			}
	};
	

function createTamplet(data){

	var title=data.title;
	var heading=data.heading;
	var date=data.date;
	var content=data.content;
	var htmlTamplet=`
		<html>
		    
		    <head>
			<title>
			    ${title}  
			</title>
			<meta name="viewport" content="width-device-width, initial-scal-1"/>
			<link href="/ui/style.css" rel="stylesheet" />
		       
		    </head>
		    <body>
			<div class="container">
			    <div>
				<a href="/">Home</a>
			    </div>
			    <hr/>
			    <h3>
				${heading}
			    </h3>
			    <div>
				${date}
			    </div>
			    <div>
				${content}
			    </div>
			</div>
		    </body>
		    
		</html>`; 
	return htmlTamplet;     
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function (req, res){
    var articleName = req.params.articleName; 
    res.send(createTamplet(articles[articleName]));    
       
});
 

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
