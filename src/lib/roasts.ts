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
  "Your food delivery history is longer than your resume.",
  "Aapka Swiggy account aapke bank account se zyada active hai.",
  "Tumhare ghar mein gas cylinder sirf decoration ke liye hai.",
  "Tumhara cooking skill itna non-existent hai ki Maggi bhi aadha pakka, aadha kachcha banta hai.",
  "Restaurant wale tumhe dekh kar 'regular customer' discount dete hain.",
  "Tumhare kitchen ki lights ko pata bhi nahi ki switch on kaise hota hai.",
  "Ghar pe khaana banane ke baare mein tum sirf Instagram reels mein hi dekhte ho.",
  "Tumhare kitchen mein cockroach bhi bhookhe mar jaate hain kyunki khaana kabhi banta hi nahi.",
  "Tumhare haath mein cooking spoon se zyada phone accha lagta hai.",
  "Tumhare refrigerator mein sirf pani ki bottle aur Coca-Cola hai.",
  "Delivery apps pe itna kharcha karte ho ki Zomato CEO tumhe personally thank you card bhejta hai."
];

export const getRandomRoast = (): string => {
  // Keep track of recently used roasts to avoid repetition
  const recentRoasts: number[] = [];
  const maxRecentRoasts = 10; // Don't repeat the last 10 roasts
  
  // Get a random index that's not in the recent roasts
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * roasts.length);
  } while (recentRoasts.includes(randomIndex));
  
  // Add this index to recent roasts and remove oldest if necessary
  recentRoasts.push(randomIndex);
  if (recentRoasts.length > maxRecentRoasts) {
    recentRoasts.shift();
  }
  
  return roasts[randomIndex];
};
