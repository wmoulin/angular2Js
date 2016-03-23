"use strict";

System.register([], function (_export, _context) {
    var Album;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _export("Album", Album = function Album(id, name, year) {
                _classCallCheck(this, Album);

                this.id = id;
                this.name = name;
                this.year = year;
            });

            _export("Album", Album);
        }
    };
});