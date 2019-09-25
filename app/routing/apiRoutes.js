var friends = require("../data/friends.js")

// Routing

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);


    });
    app.post("/api/friends", function (req, res) {

      
        var userCurrentdata = 
        {
            friendName: req.body.name,
            friendPhoto: req.body.photo,
            friendScores: req.body.scores
        }
         

         var tableData = friends;
        // // tableData for all people
        var storeTotaldifference = [];
          var results =0;
console.log(tableData.length)
        for (var i=0; i < tableData.length; i++) {
               console.log(tableData[i].friendScores.length)
            for (var j = 0; j < tableData[i].friendScores.length; j++) {
                results += parseInt(userCurrentdata.friendScores[j]) - parseInt( tableData[i].friendScores[j]);
            }
           
            storeTotaldifference.push({
                name: tableData[i].friendName,
                urlImage: tableData[i].friendPhoto,
                totalDifference: Math.abs(results)
            });
        } //end forloop
         
        storeTotaldifference.sort(function(a, b){return b - a})

        // tableData.push(userCurrentdata)​

       console.log(storeTotaldifference)
       res.json(storeTotaldifference[0])
  
 
        //  res.json(storeTotaldifference[0]);​
    });
  
}