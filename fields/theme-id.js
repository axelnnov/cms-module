define(function(require, exports, module) {

    var $ = require("jquery");
    var Alpaca = $.alpaca;

    const themeIdRegexp = /^t-[0-9]+$/;

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
                            if (!themeIdRegexp.test(value)) {
                                callback({
                                    "status": false,
                                    "message": "The theme id must match the following pattern: t-[0-9]"
                                });
                            } else {
                                callback({
                                    "status": true
                                });
                            }
                        };
            
        }
    });

    Alpaca.registerFieldClass("theme-id", Alpaca.Fields.CustomSoccerField);

});