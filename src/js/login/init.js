import '../common/polyfill';

import render from './render';
import bindEvent from './event';

window.login = (opts = {}) => {
    var defaultOpts = {
        loginBtnText: '登 录',
        accountPlaceHolder: '手机号/邮箱/账号',
        accountLabel: '用 户',
        passwordPlaceHolder: '请填写密码',
        passwordLabel: '密 码',
        verifyPlaceHolder: '验证码',
        accountMax: '30',
        passwordMax: '30',
        showRemember: true,
        autocomplete: true,
    };

    var options = Object.assign(defaultOpts, opts)

    render(options);
    // bindEvent(options);
}

// export { login }

// new FormCheck({});