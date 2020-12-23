
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./apex-wrapped.cjs.production.min.js')
} else {
  module.exports = require('./apex-wrapped.cjs.development.js')
}
