// directives/vCursor.js
import { trailingCursor } from 'cursor-effects';

export default {
  mounted(el) {
    new trailingCursor({
      element: el, // container element (can be document.body)
      trailingSpeed: 0.1,
      particleCount: 10,
      particleColor: 'rgba(0, 0, 0, 0.5)',
      particleSize: 5,
    });
  },
};
