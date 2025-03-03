
export const roasts = [
  "You don't cook, you just keep Zomato & Swiggy in business.",
  "Your stove is just decoration, isn't it?",
  "Even instant noodles take too much effort for you.",
  "Your kitchen has cobwebs because you never use it.",
  "The delivery guy knows your address better than your family does.",
  "Your cooking skills are so non-existent, water burns when you boil it.",
  "Your idea of meal prep is downloading food delivery apps.",
  "The only thing you make in your kitchen is reservations.",
  "Your fridge is just a beverage cooler at this point.",
  "You've spent more on delivery fees than your rent this month.",
  "The delivery apps send you birthday cards now.",
  "Your cooking playlist is just notification sounds from food apps.",
  "If ordering food was an Olympic sport, you'd have gold medals.",
  "You're not lazy, you're just keeping the gig economy alive. One pizza at a time.",
  "Your kitchen utensils are still in mint condition from the day you bought them.",
  "Your microwave feels neglected because even that's too much cooking for you.",
  "The restaurant knows your order before you even call.",
  "Your pots and pans are pristine museum pieces at this point.",
  "You've memorized every delivery discount code in existence.",
  "Your food delivery history is longer than your resume."
];

export const getRandomRoast = (): string => {
  return roasts[Math.floor(Math.random() * roasts.length)];
};
