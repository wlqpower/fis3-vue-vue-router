/* eslint-disable */
import 'whatwg-fetch/fetch';
import { addToken } from '/static/js/util';
/**
 * @parameter url:          接口名称
 * @parameter body:         接口参数
 * @parameter method:       接口请求方式，默认.GET
 * @parameter headers:      接口 Conent-Type，默认.{ 'Content-Type': 'application/json' }
 * @parameter responseType: 接口返回数据格式，默认.JSON
 */
export function Fetch(options = {}) {
    if (!options.url) {
        return alert('interface url not found .');
    }

    options.url = addToken(window.location.origin + options.url);
    options.body = JSON.stringify(options.body || {});
    options.headers = options.headers || { 'Content-Type': 'application/json' };
    options.responseType = options.responseType || 'json';
    options.isMock = options.isMock || false;

    // 本地模拟
    if (options.isMock) {
        options.url = addToken(`${window.location.origin}/src/api/mock/${options.url.split('?')[0].split('/')[options.url.split('?')[0].split('/').length - 1]}.json`);
    }

    return new Promise((resolve, reject) => {
        if (options.method && options.method.toUpperCase() === 'POST' && (options.param = { method: 'POST', headers: options.headers, body: options.body })) {
            fetch(options.url, options.param)
                .then(res => (options.responseType === 'json' ? res.json() : res.text()))
                .then(res => resolve(res))
                .catch(ex => reject(ex));
        } else {
            fetch(options.url)
                .then(res => (options.responseType === 'json' ? res.json() : res.text()))
                .then(res => resolve(res))
                .catch(ex => reject(ex));
        }
    });
}


/**
 * interface api map 
 */
export default {
    INTERFACE_FMIS_HOME: '/api/fmis/home',
    INTERFACE_FMIS_DEMO: '/api/fmis/demo'
};