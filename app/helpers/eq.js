import { helper } from '@ember/component/helper';

export default helper(function eq([a, b]) {
  // loose compare but normalize to string so numbers and strings match
  return String(a) === String(b);
});
