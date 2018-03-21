const { getUserId } = require('../../utils')

const level = {
  async createDraft(parent, { name, description }, ctx, info) {
    const userId = getUserId(ctx)
    return ctx.db.mutation.createLevel(
      {
        data: {
          name,
          description,
          isPublished: false,
          creator: {
            connect: { id: userId },
          },
        },
      },
      info
    )
  },

  async publish(parent, { id }, ctx, info) {
    const userId = getUserId(ctx)
    const levelExists = await ctx.db.exists.Level({
      id,
      creator: { id: userId },
    })
    if (!levelExists) {
      throw new Error(`Level not found or you're not the creator`)
    }

    return ctx.db.mutation.updateLevel(
      {
        where: { id },
        data: { isPublished: true },
      },
      info,
    )
  },

  async deleteLevel(parent, { id }, ctx, info) {
    const userId = getUserId(ctx)
    const levelExists = await ctx.db.exists.Level({
      id,
      creator: { id: userId },
    })
    if (!levelExists) {
      throw new Error(`Level not found or you're not the creator`)
    }

    return ctx.db.mutation.deleteLevel({ where: { id } })
  },
}

module.exports = { level }
