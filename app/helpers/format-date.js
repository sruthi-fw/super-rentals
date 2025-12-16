// app/helpers/format-date.js
import { helper } from '@ember/component/helper';

export default helper(function formatDate([date]) {
  if (!date) return '';

  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  }).format(new Date(date));
});
