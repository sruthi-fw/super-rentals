import { helper } from '@ember/component/helper';

export default helper(function arrIncludes([arr, item]) {
  if (Array.isArray(arr)) {
    return arr.includes(item);
  }
  return false;
});
