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
  "Delivery apps pe itna kharcha karte ho ki Zomato CEO tumhe personally thank you card bhejta hai.",

  "Your cooking skills are like your love life - non-existent.",
  "The only thing you're cooking up is excuses not to cook.",
  "Your kitchen is so unused, it qualifies as brand new for resale.",
  "The most exercise you get is scrolling through food delivery apps.",
  "Your idea of 'homemade' is opening the delivery package at home.",
  "You've spent more time reading reviews than actually cooking.",
  "Your kitchen is a food desert with a working refrigerator.",
  "The only flame in your kitchen is the one in your food delivery app reviews.",
  "You know the delivery guy's life story but not how to boil an egg.",
  "Your cooking attempt would make Gordon Ramsay retire.",
  "The only recipe you've mastered is dialing for delivery.",
  "Your kitchen has the same energy as an abandoned theme park.",
  "Your kitchen utensils are wondering if they'll ever be used.",
  "When people ask if you cook, even your microwave laughs.",
  "The only heat your stove knows is from your coffee mug resting on it.",
  "Your cuisine specialty is 'reheated takeout surprise'.",
  "You consider stirring a drink to be your cooking for the day.",
  "The only thing you can cook is instant coffee, and you still mess that up.",
  "Archaeologists will one day discover your unused cooking pans in mint condition.",
  "Your signature dish is whatever was on discount in the delivery app.",
  "The smoke detector in your kitchen has never been tested.",
  "Your oven is so clean it looks like it came from the showroom yesterday.",
  "Your recipe book is just a collection of delivery app screenshots.",
  "The only spice in your cabinet is the dust collecting on the shelves.",
  "You've spent more on delivery apps than some people spend on rent.",
  
  "Tumhara cooking skill dekhkar Masterchef ke judges retire ho jayenge.",
  "Tumhare kitchen mein jaane se achha Antarctica mein swimming karna hai.",
  "Tum itne lazy ho ki ready-to-eat food ko bhi ready karna bahut mehnat lagti hai.",
  "Tumhari cooking recipes WhatsApp par food delivery coupons se bhare pade hain.",
  "Tumhare ghar ki gas cylinder ne khud resign kar diya hai - berozgari ke karan.",
  "Tumhare liye 'ghar ka khana' matlab 'ghar baithe order kiya hua khana'.",
  "Cooking ke naam pe sirf 'Add to Cart' button dabana aata hai tumhe.",
  "Tumhare cooking skills itne extinct hain ki dinosaurs inhe miss karte hain.",
  "Tumhare liye 'meal planning' matlab konsa restaurant, konsa din.",
  "Sabse bada achievement tumhara - ek hafte mein 7 alag restaurants se khana mangwana.",
  "Tumhare kitchen mein choohe bhi bhookhe rehte hain kyunki kuch milta hi nahi.",
  "Tumhara relationship status: 'It's complicated' with Zomato and Swiggy.",
  "Tumhari cooking ka naam sunkar aalu bhi chips banne se mana kar dete hain.",
  "Jab tum kitchen mein jate ho, bartano ko dar lagta hai ki kahin galti se use na kardo.",
  "Tumhari cooking dekhkar Maggi bhi 2 minute se 20 minute mein ban jati hai.",
  "Tumhari cooking mein aag lagne ka khatra nahi, kyunki tum kabhi chulha jalaate hi nahi.",
  "Tumhare haathon mein recipe book ke bajay sirf phone accha lagta hai menu scroll karne ke liye.",
  "Jab log puchte hain 'kya banaya hai?', tumhara jawab hota hai 'abhi order kiya hai'.",
  "Tumhare ghar mein fridge sirf drinks cool karne ke liye hai, baaki khaali rehta hai.",
  "Tumhare kitchen ka condition dekhkar Swiggy aur Zomato ka share price badh jata hai.",
  "Ghar mein khana banana tumhare liye itna alien concept hai ki NASA tumpe research kar rahi hai.",
  "Tumhe dekhkar pressure cooker bhi pressure feel karta hai.",
  "Delivery apps tumhe VIP customer kehte hain, kyuki tum unke business ka 50% handle karte ho.",
  "Cooking and you have the same relationship status: 'strangers'.",
  "Tumhare kitchen mein jaane se fridge bhi darta hai."
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
