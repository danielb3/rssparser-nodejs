// function loadDoc() {
//     $("#demo").empty();
//     $.get("/scrape", function(err, data) { 
//         $("#demo").append(data);
//     });
// };

$(document).on("click", "#scrape", function() {
    $("#demo").empty();
    console.log('scraping')
    $.get("/scrape", function(response) {
        // For each one
        for (var i = 0; i < 3; i++) {
          // Display the apropos information on the page
        $("#demo").append("<p>Got Articles, see them by clicking the 'All Articles' button.");
        $("#demo").append(response);
      }
    })
  });

// $( document ).ready(function() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.responseType = 'document';
//     xhttp.overrideMimeType('text/xml');
//     xhttp.onreadystatechange = function() {
//     if (this.status == 200) {
//         myFunction(this);
//     }
// };
// xhttp.open("GET", "/", true);
// xhttp.send();
// });

// function myFunction(xml) {
//     var i;
//     var xmlDoc = xml.responseXML;
//     var title = xmlDoc.getElementsByTagName("channel");
//     for (i=0; i<5; i++) {
//         document.getElementById("demo").innerHTML = title;
//     }
// }

// $( document ).ready(function() {
//     loadDoc('https://www.entrepreneur.com/latest.rss');
// });
    
// function loadDoc(url) {
//     var xhr = new XMLHttpRequest();
//     xhr.responseType = 'document';
//     xhr.overrideMimeType('text/xml');
//     xhr.onload = function() {
//       if (this.readyState == 4 && this.status == 200) {
//         var xmlDoc = xhr.responseXML;
//         var title = xmlDoc.getElementsByTagName("title");
//         document.getElementById('demo').innerHTML = title;
//       }
//     };
//     xhr.open("GET", url, true);
//     xhr.send();
//   }

// $( document ).ready(function() {
//     var request = new XMLHttpRequest();
//     request.open("GET", "https://www.entrepreneur.com/latest.rss", true);
//     request.send();
//     var xml = request.responseXML;
//     var users = xml.getElementsByTagName("channel");
//     for(var i = 0; i < users.length; i++) {
//         var user = users[i];
//         var names = user.getElementsByTagName("title");
//         for(var j = 0; j < names.length; j++) {
//             document.getElementById("demo").innerHTML = names[j].childNodes[0].nodeValue;
//         }
//     }
// });

// $( document ).ready(function() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {
//         document.getElementById("demo").innerHTML =
//         this.responseText;
//       }
//     };
//     xhttp.open("GET", "test.txt", true);
//     xhttp.send();
//   })

// $( document ).ready(function() {
//     var resultElement = document.getElementById('demo');
//     resultElement.innerHTML = '';
    
//     axios.get('https://www.entrepreneur.com/latest.rss')
//       .then(function (response) {
//         resultElement.innerHTML = generateSuccessHTMLOutput(response);
//       })
//       .catch(function (error) {
//         resultElement.innerHTML = generateErrorHTMLOutput(error);
//       });   
//   });

// function loadDoc() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//       if (this.status == 200) {
//         document.getElementById("demo").innerHTML = this.responseText;
//       }
//     };
//     xhttp.open("GET", "https://www.entrepreneur.com/latest.rss", true);
//     xhttp.send();
//   }