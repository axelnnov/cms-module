define(function(require, exports, module) {
    // var UI = require("ui");
    // var Alpaca = require("alpaca");

    // var $ = require("jquery");

    // return UI.registerField("theme-id", Alpaca.Fields.TextField.extend({
    //     setup: function () {

    //         this.base();

    //         // set data source to cities.json
    //         this.options.validator = function(callback) {
    //             var value = this.getValue();
    //             if (value == "test") {
    //                 callback({
    //                     "status": false,
    //                     "message": "The value of 'test' is invalid"
    //                 });
    //             } else {
    //                 callback({
    //                     "status": true
    //                 });
    //             }
    //         };
    //     }
    // }));


    var $ = require("jquery");
    var Alpaca = $.alpaca;

    Alpaca.Fields.CustomSoccerField = Alpaca.Fields.TextField.extend({

        getFieldType: function() {
            return "theme-id";
        },

        setup: function()
        {
            // set up base select field
            this.base();

            this.options.validator = function(callback) {
                            var value = this.getValue();
                            if (value == "test") {
                                callback({
                                    "status": false,
                                    "message": "The value of 'test' is invalid"
                                });
                            } else {
                                callback({
                                    "status": true
                                });
                            }
                        };
            
            // // load sample "soccer-games-2017.json" from data source
            // this.options["dataSource"] = function(callback) {

            //     $.ajax({
            //         "type": "GET",
            //         "url": "https://samples.cloudcms.com/soccer-games-2017.json",
            //         "contentType": "application/json",
            //         "cache": false,
            //         "success": function(json) {
            //             var values = [];
            //             for (var i = 0; i < json.rounds.length; i++) {
            //                 for (var j = 0; j < json.rounds[i].matches.length; j++)
            //                 {
            //                     var match = json.rounds[i].matches[j];
                                
            //                     var text = match.date + " - " + match.team1.name + " vs. " + match.team2.name;
            //                     var value = match.date + "-" + match.team1.code + "-" + match.team2.code;
                                
            //                     values.push({
            //                         "text": text,
            //                         "value": value
            //                     });                                
            //                 }
            //             }
            //             callback(values);
            //         }
            //     });
            // };
        }
    });

    Alpaca.registerFieldClass("theme-id", Alpaca.Fields.CustomSoccerField);

});