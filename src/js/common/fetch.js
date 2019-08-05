/*
 * Fetch 请求默认是不带 cookie 的，需要设置 fetch(url, {credentials: 'include'})
服务器返回 400，500 错误码时并不会 reject，只有网络错误这些导致请求不能完成时，fetch 才会被 reject。
 */

const fetchPost = (url, params) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        credentials: 'include',
        params: params
    }).then((res) => {
        if (!res.ok) {
            throw Error(res.statusText);
        }
        return res.json();
    });
};

const fetchJson = (url, params) => {
    return fetch(url, {
        method: 'GET',
        headers: {},
        credentials: 'include',
        params: params
    }).then((res) => {
        if (!res.ok) {
            throw Error(res.statusText);
        }
        return res.json();
    });
};

export {fetchPost, fetchJson};