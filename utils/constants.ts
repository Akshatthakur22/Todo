export const APP_CONFIG = {
  name: "L8r",
  version: "1.0.0",
  description: "Your chill productivity companion",
} as const;

export const TASK_LIMITS = {
  maxLength: 200,
  maxTasks: 100,
} as const;

export const NOTIFICATION_MESSAGES = {
  gentle: [
    "hey bestie, maybe check your tasks? 🌸",
    "no pressure, but your tasks are waiting 😌",
    "gentle reminder: you got this! ✨",
    "your future self will thank you 💫",
    "small progress is still progress 🌱",
  ],
  motivational: [
    "let's get one thing done! 🎯",
    "you're closer than you think! 💪",
    "time to shine! ⭐",
    "ready to conquer? 🏆",
    "let's make it happen! 🔥",
  ],
  lazy: [
    "eventually... maybe? 🐼",
    "when you're ready... no rush 😴",
    "tasks will wait for you 🦥",
    "chill vibes only 🌊",
    "later is fine too 💤",
  ],
} as const;

export const VIBE_DESCRIPTIONS = {
  chill: "Relaxed and steady progress",
  focus: "Concentrated and goal-oriented",
  later: "No pressure, when you're ready",
} as const;
