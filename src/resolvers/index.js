const { Query } = require('./Query')
const { Subscription } = require('./Subscription')
const { auth } = require('./Mutation/auth')
const { level } = require('./Mutation/level')
const { AuthPayload } = require('./AuthPayload')

module.exports = {
  Query,
  Mutation: {
    ...auth,
    ...level,
  },
  Subscription,
  AuthPayload,
}
