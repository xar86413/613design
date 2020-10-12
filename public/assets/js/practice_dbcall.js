$(document).ready(function () {
		var req_url = "get_dbstuff?id=10";
		$.ajax({
			type: "POST",
			url: req_url,
			dataType: "jsonp",
			data: formData,
			success: function (response) {
			 //do stuff with response from db queryr

				//BELOW IS ON SERVER
			// //on Express (node) server:
			// router.get("get_dbstuff", server_response){
			// 	//received request for dbstuff
			// 	var id = request.parm("id")
			// 	//form dbquery based on arguments
			// 	var dbq = "SELECT * FROM testtable WHERE id = "+id;
			// 	dbquery.s=dbquery syntax(err, result{
			// 		server_response.send(result);
			// 	})

			

				console.log("RSPONSE FROM DB: ", JSON.stringify(response));
				response.sendfile(stats.html);




				var express = require('express');
				app.listen(3000);

					var app = express();
					var path = require('path');





					
					app.get('/', function(req, res) {
						res.sendFile(path.join(__dirname + '/public/index.html'));
					});

					app.get('/stuff', function(req, res) {
						res.sendFile(path.join(__dirname + '/public/stuff.html'));
					});

					app.get('/get_dbstuff', function(req, res) {
						//res.sendFile(path.join(__dirname + '/public/stuff.html'));
						//do some shit, make a "result" JSON object
						res.send(result);


					});






			}







			},
			error: function (xhr, status, error) {
				console.log(xhr);
				console.log("Error has occured.");
			},
		});
	});

