const Subscription = {
  feedSubscription: {
    subscribe: (parent, args, ctx, info) => {
      return ctx.db.subscription.level({}, info)
    },
  },
}

// This is the same subscription as above but only fires for 
// levels that have been published.
// This feature is not yet live due to a gub in Prisma:
// https://github.com/graphcool/prisma/issues/1734
// const Subscription = {
//   feedSubscription: {
//     subscribe: (parent, args, ctx, info) => {
//       return ctx.db.subscription.level(
//         {
//           where: {
//             node: {
//               isPublished: true,
//             },
//           },
//         },
//         info,
//       )
//     },
//   },
// }

module.exports = { Subscription }
