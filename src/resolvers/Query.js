const { getUserId } = require('../utils')

const Query = {
  feed(parent, args, ctx, info) {
    return ctx.db.query.levels({ where: { isPublished: true } }, info)
  },

  drafts(parent, args, ctx, info) {
    const id = getUserId(ctx)

    const where = {
      isPublished: false,
      creator: {
        id
      }
    }

    return ctx.db.query.levels({ where }, info)
  },

  level(parent, { id }, ctx, info) {
    return ctx.db.query.level({ where: { id } }, info)
  },

  me(parent, args, ctx, info) {
    const id = getUserId(ctx)
    return ctx.db.query.user({ where: { id } }, info)
  },
}

module.exports = { Query }
