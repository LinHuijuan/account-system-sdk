import '../common/polyfill';
import render from './render';
import bindEvent from './event';



window.forget = (opts = {}) => {
    var defaultOpts = {

    };

    var options = Object.assign(defaultOpts, opts)

    render(options);
    bindEvent(options);
}