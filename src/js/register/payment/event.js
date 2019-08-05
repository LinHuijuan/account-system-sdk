import { fetchPost } from '../../common/fetch';
import utils from '../../common/utils';
import FormCheck from '../../common/form-check';

const { domSelector: $, removeClass, addClass } = utils;

export default (opts) => {
  const $btn = $('#register-payment-btn');
  $btn.onclick = () => {
    opts.success && opts.success();
  }

}