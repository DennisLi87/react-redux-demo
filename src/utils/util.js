/**
 * @class Util
 * @singleton
 *
 * Util 定义常用全局工具方法；
 *
 */



void function ( global, factory ) {
    if ( typeof module === 'object' && typeof module.exports === 'object' ) {
        module.exports = factory(global, true);
    } else {
        global.Util = factory(global);
    }
}(
    typeof window !== 'undefined' ? window : this, function ( Global, noGlobal ) {
        const Util = {
            __idStart: 0,
            isArray ( target ) {
                return Object.prototype.toString.call(target) === '[object Array]';
            },
            get uniqueId () {
                return 'Uid_' + (+new Date).toString(36) + this.__idStart++;
            },
            extend ( target = {}, ...sources ) {
                let deep = false,
                    copy = {}, clone,
                    length = sources.length,
                    i = 0;

                if ( typeof target === 'boolean' ) {
                    deep = target;

                    target = sources[i++] || {};
                }

                if ( typeof target !== 'object' ) {
                    target = {};
                }

                while ( i < length ) {
                    // TODO: ....
                }
            },
            Fetch ( input, init ) {
                function $http(url){

                    // A small example of object
                    var core = {

                        // Method that performs the ajax request
                        ajax : function (method, url, args) {

                            // Creating a promise
                            var promise = new Promise( function (resolve, reject) {

                                // Instantiates the XMLHttpRequest
                                var client = new XMLHttpRequest();
                                var uri = url;

                                if (args && (method === 'POST' || method === 'PUT')) {
                                    uri += '?';
                                    var argcount = 0;
                                    for (var key in args) {
                                        if (args.hasOwnProperty(key)) {
                                            if (argcount++) {
                                                uri += '&';
                                            }
                                            uri += encodeURIComponent(key) + '=' + encodeURIComponent(args[key]);
                                        }
                                    }
                                }

                                client.open(method, uri);
                                client.send();

                                client.onload = function () {
                                    if (this.status >= 200 && this.status < 300) {
                                        // Performs the function "resolve" when this.status is equal to 2xx
                                        resolve(this.response);
                                    } else {
                                        // Performs the function "reject" when this.status is different than 2xx
                                        reject(this.statusText);
                                    }
                                };
                                client.onerror = function () {
                                    reject(this.statusText);
                                };
                            });

                            // Return the promise
                            return promise;
                        }
                    };

                    // Adapter pattern
                    return {
                        'get' : function(args) {
                            return core.ajax('GET', url, args);
                        },
                        'post' : function(args) {
                            return core.ajax('POST', url, args);
                        },
                        'put' : function(args) {
                            return core.ajax('PUT', url, args);
                        },
                        'delete' : function(args) {
                            return core.ajax('DELETE', url, args);
                        }
                    };
                };
                // End A

                // B-> Here you define its functions and its payload
                var mdnAPI = 'https://developer.mozilla.org/en-US/search.json';
                var payload = {
                    'topic' : 'js',
                    'q'     : 'Promise'
                };

                var callback = {
                    success : function(data){
                        console.log(1, 'success', JSON.parse(data));
                    },
                    error : function(data){
                        console.log(2, 'error', JSON.parse(data));
                    }
                };
                // End B

                return fetch(input, init);
            },
            serialize ( obj ) {
                let param = [];
                const
                    eCode = ( k, v ) => encodeURIComponent(k) + "=" + encodeURIComponent(v),
                    sArr = ( key, vs ) => vs.map(n => eCode(key, n)).join("&");

                for ( let p in obj ) {
                    if ( obj.hasOwnProperty(p) ) {
                        Util.isArray(obj[p]) ? param.push(sArr(p, obj[p]))
                            : param.push(eCode(p, obj[p]));
                    }
                }

                return param.join("&").replace(/%20/g, "+");
            }
        };


        return Util;
    }
);

