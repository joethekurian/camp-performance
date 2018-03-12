const express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  mysql = require('mysql');
const key = require('./config/keys');

// key.productionDB For Production DB
//key.localDB  for Local DB
const database = key.localDB
const changetable = database.changetable
const metrictable = database.metrictable

var sql = mysql.createPool({
  host: database.host,
  user: database.user,
  password: database.password,
  database: database.database
});

var app = express();

app.use(bodyParser.urlencoded({
  extended: true
})); //use bodyparser

app.use(cors());

app.get("/", function(req, res) {

  sql.query(`SELECT COUNT(id) AS changeCount, campaignName,CampaignId FROM ${changetable} WHERE date  BETWEEN '2018-02-13' AND '2018-02-14'GROUP BY campaignName,CampaignId`, function(error, results, fields) {
    if (error) {
      console.log(error)
    } else {

      console.log("Data Sent")
      res.json(results);
      //console.log(results)
    }
  })

});

app.get("/changehistory/:campaign", function(req, res) {
  console.log("Request to /changehistory/" + req.params.campaign)
  let reqData = {}

  let changeQuery = `SELECT date,campaignName,adGroup,category,keyword,changeData FROM ${changetable} WHERE date  BETWEEN '2018-02-13' AND '2018-02-14' AND campaignName=${mysql.escape(req.params.campaign)}`
  let metricQuery = `SELECT Date,CampaignName,AdGroupName,Criteria,Impressions,Clicks,Conversions FROM ${metrictable} WHERE date  BETWEEN '2018-02-07' AND '2018-02-21' AND campaignName=${mysql.escape(req.params.campaign)}`
  sql.query(changeQuery, function(error, results, fields) {
    if (error) {
      console.log(error)
    } else {
      reqData.change = results
      sql.query(metricQuery, function(error, results2, fields) {
        if (error) {
          console.log(error)
        } else {
          reqData.metric = results2
          console.log("Data Sent")
          res.json(reqData);
          //console.log(results)
        }
        //res.json(reqData);
        //console.log(results)
      })
    }
  });
});

app.listen(3000, function() {
  console.log("Server Started on port 3000");
});