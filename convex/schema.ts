import { defineSchema, defineTable } from "convex/server";

import { v } from "convex/values";

export default defineSchema({
  todos: defineTable({
    Text: v.string(),
    isCompleted: v.boolean(),
  }),
});
