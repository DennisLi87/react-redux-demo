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
                // TODO: init default options;

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

