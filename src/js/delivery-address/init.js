import '../common/polyfill';
import render from './render';

window.delivery = (opts = {}) => {
    var defaultOpts = {

    };

    var options = Object.assign(defaultOpts, opts)
    render(options);
}
