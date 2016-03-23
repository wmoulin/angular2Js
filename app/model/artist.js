"use strict";

System.register([], function (_export, _context) {
    var Artist;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _export("Artist", Artist = function Artist(id, name) {
                _classCallCheck(this, Artist);

                this.id = id;
                this.name = name;
                this.albums = [];
            });

            _export("Artist", Artist);
        }
    };
});