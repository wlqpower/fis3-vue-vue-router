/* eslint-disable */

// 获取url参数
export function getUrlParam(name) {
    if (window.location.href.indexOf('?') >= 0) {
        var a = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        var t;
        var i = 0;
        var l = a.length;
        for (; i < l; i++) {
            if ((t = a[i].split('='))[0] === name) return t[1];
        }
    }
    return null;
}


// 获取值得类型
export function getType(value) {
    return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
}


// 添加token
export function addToken(path) {
    var token = window.token;
    var paths = path.split('?');
    if (token == null) return path;
    if (paths.length === 1) return path + '?token=' + token;
    return paths[0] + '?token=' + token + '&' + paths[1];
}