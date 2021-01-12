define(function(require, exports, module) {
    var UI = require("ui");
    var Alpaca = require("alpaca");

    var $ = require("jquery");

    return UI.registerField("theme-id", Alpaca.Fields.TextField.extend({
        setup: function () {

            this.base();

            // set data source to cities.json
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
        }
    }));
});