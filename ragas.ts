export interface Raga {
  name: string;
  description: string;
  mood: string;
  timeOfDay: string;
  notes: string;
  characteristics: string[];
  famousSongs: string[];
}

export interface FamousSong {
  name: string;
  composer: string;
  raga: string;
  remarks?: string;
}

export const famousSongsDatabase: FamousSong[] = [
  {
    name: "Vatapi Ganapatim",
    composer: "Muthuswami Dikshitar",
    raga: "Hamsadhwani",
    remarks: "Very popular invocatory piece"
  },
  {
    name: "Endaro Mahanubhavulu",
    composer: "Tyagaraja",
    raga: "Sri",
    remarks: "One of Pancharatna Kritis"
  },
  {
    name: "Nagumomu Ganaleni",
    composer: "Tyagaraja",
    raga: "Abheri",
    remarks: "Beautiful bhakti composition"
  },
  {
    name: "Chakkani Raja",
    composer: "Tyagaraja",
    raga: "Kalyani",
    remarks: "Classic kriti, bright & soothing"
  },
  {
    name: "Bantureethi Koluvu",
    composer: "Tyagaraja",
    raga: "Kharaharapriya",
    remarks: "Deep raga with emotional appeal"
  },
  {
    name: "Krishna Nee Begane",
    composer: "Vyasatirtha",
    raga: "Yamuna Kalyani",
    remarks: "Devotional and calming"
  },
  {
    name: "Samaja Vara Gamana",
    composer: "Tyagaraja",
    raga: "Hindolam",
    remarks: "Graceful and soothing melody"
  },
  {
    name: "Sri Venkatesa Girisham",
    composer: "Muthuswami Dikshitar",
    raga: "Kamboji",
    remarks: "Majestic raga with classical tone"
  },
  {
    name: "Sogasuga Mridanga Talamu",
    composer: "Tyagaraja",
    raga: "Arabhi",
    remarks: "Festive and bright"
  },
  {
    name: "Nagumomu",
    composer: "Tyagaraja",
    raga: "Abheri",
    remarks: "Another famous kriti in Abheri"
  },
  {
    name: "Brochevarevarura",
    composer: "Kshetrayya",
    raga: "Khamas",
    remarks: "Light classical, popular in concerts"
  },
  {
    name: "Sri Ganapathim",
    composer: "Muthuswami Dikshitar",
    raga: "Nattai",
    remarks: "Energetic and rhythmic"
  },
  {
    name: "Rama Ni Samanamevaru",
    composer: "Tyagaraja",
    raga: "Kharaharapriya",
    remarks: "Bhakti raga, emotional depth"
  },
  {
    name: "Manavyalakinchara",
    composer: "Tyagaraja",
    raga: "Kalyani",
    remarks: "Melodious and expressive"
  },
  {
    name: "Mokshamu Galada",
    composer: "Tyagaraja",
    raga: "Kalyani",
    remarks: "Deep devotion and raga elaboration"
  }
];

export const ragasDatabase: Raga[] = [
  {
    name: "Raga Yaman",
    description: "A beautiful evening raga that evokes serenity and devotion. Its melodic curves paint the tranquil moments of dusk, creating an atmosphere of peaceful contemplation.",
    mood: "Peaceful, Devotional",
    timeOfDay: "Evening (6-9 PM)",
    notes: "Sa Re Ga Ma# Pa Dha Ni Sa",
    characteristics: ["Teevra Madhyam", "Audav-Sampurna", "Kalyan Thaat"],
    famousSongs: ["Piya Bin Nahi Aavat Chain", "Man Rang Bairagi"]
  },
  {
    name: "Raga Bhairav",
    description: "The king of morning ragas, Bhairav awakens the soul with its majestic and solemn character. It embodies the first rays of dawn and spiritual awakening.",
    mood: "Solemn, Majestic",
    timeOfDay: "Early Morning (6-9 AM)",
    notes: "Sa re Ga Ma Pa dha Ni Sa",
    characteristics: ["Komal Re and Dha", "Sampurna-Sampurna", "Bhairav Thaat"],
    famousSongs: ["Jago Mohan Pyare", "Suprabhatam"]
  },
  {
    name: "Raga Bhimpalasi",
    description: "An afternoon raga filled with longing and romance. Its gentle curves express the tender emotions of separated lovers and nostalgic memories.",
    mood: "Romantic, Longing",
    timeOfDay: "Late Afternoon (3-6 PM)",
    notes: "Sa ga Ma Pa dha Ni Sa",
    characteristics: ["Komal Ga and Dha", "Audav-Sampurna", "Kafi Thaat"],
    famousSongs: ["Thumri in Bhimpalasi", "Bansuri compositions"]
  },
  {
    name: "Raga Malkauns",
    description: "A pentatonic raga of profound depth and mystery. Its ancient character evokes the primordial sounds of creation and deep meditation.",
    mood: "Mysterious, Deep",
    timeOfDay: "Late Night (12-3 AM)",
    notes: "Sa ga Ma dha ni Sa",
    characteristics: ["Pentatonic", "Komal Ga, Dha, Ni", "Bhairavi Thaat"],
    famousSongs: ["Deepak Raag", "Meditation pieces"]
  },
  {
    name: "Raga Darbari",
    description: "The raga of royal courts, Darbari commands respect with its slow, dignified movements. It speaks of grandeur, wisdom, and the weight of responsibility.",
    mood: "Dignified, Royal",
    timeOfDay: "Late Night (9 PM-12 AM)",
    notes: "Sa Re ga Ma Pa Dha ni Sa",
    characteristics: ["Komal Ga and Ni", "Kampita on Re", "Asavari Thaat"],
    famousSongs: ["Court compositions", "Dhrupad pieces"]
  },
  {
    name: "Raga Hamsadhwani",
    description: "A joyful pentatonic raga that sparkles with happiness and celebration. Like the graceful swan it's named after, it flows with elegance and purity.",
    mood: "Joyful, Celebratory",
    timeOfDay: "Evening",
    notes: "Sa Re Ga Pa Ni Sa",
    characteristics: ["Pentatonic", "No Ma or Dha", "Bilaval Thaat"],
    famousSongs: ["Vatapi Ganapatim", "Devotional songs"]
  },
  {
    name: "Raga Kalyani",
    description: "The South Indian equivalent of Yaman, Kalyani radiates divine beauty and spiritual elevation. It's the raga of celebration and auspicious occasions.",
    mood: "Divine, Uplifting",
    timeOfDay: "Evening",
    notes: "Sa Ri Ga Ma# Pa Dha Ni Sa",
    characteristics: ["Prati Madhyam", "Sampurna", "Mechakalyani"],
    famousSongs: ["Chakkani Raja", "Manavyalakinchara", "Mokshamu Galada"]
  },
  {
    name: "Raga Shankarabharanam",
    description: "The fundamental raga equivalent to the Western major scale. Pure and pristine, it forms the foundation of Carnatic music with its perfect symmetry.",
    mood: "Pure, Foundational",
    timeOfDay: "All times",
    notes: "Sa Ri Ga Ma Pa Dha Ni Sa",
    characteristics: ["All Shuddha swaras", "Parent scale", "29th Melakarta"],
    famousSongs: ["Jagadananda Karaka", "Basic exercises"]
  },
  {
    name: "Raga Sri",
    description: "A majestic and devotional raga that embodies grace and divinity. Sri raga is known for its ability to evoke deep spiritual emotions and reverence.",
    mood: "Majestic, Devotional",
    timeOfDay: "Evening",
    notes: "Sa Ri Ma Pa Ni Sa",
    characteristics: ["Audav-Audav", "No Ga or Dha", "Unique structure"],
    famousSongs: ["Endaro Mahanubhavulu"]
  },
  {
    name: "Raga Abheri",
    description: "A deeply emotional and devotional raga that touches the heart with its plaintive beauty. Abheri expresses longing, devotion, and spiritual yearning.",
    mood: "Emotional, Devotional",
    timeOfDay: "Evening",
    notes: "Sa Ri ga Ma Pa Dha ni Sa",
    characteristics: ["Komal Ga and Ni", "Natural Dha", "20th Melakarta"],
    famousSongs: ["Nagumomu Ganaleni", "Nagumomu"]
  },
  {
    name: "Raga Kharaharapriya",
    description: "One of the most important ragas in Carnatic music, equivalent to the natural minor scale. It evokes deep emotions and is perfect for expressing bhakti.",
    mood: "Serious, Devotional",
    timeOfDay: "Evening",
    notes: "Sa Ri ga Ma Pa Dha ni Sa",
    characteristics: ["Komal Ga and Ni", "22nd Melakarta", "Janya ragas parent"],
    famousSongs: ["Bantureethi Koluvu", "Rama Ni Samanamevaru"]
  },
  {
    name: "Raga Yamuna Kalyani",
    description: "A serene and devotional raga that flows like the sacred river Yamuna. It brings peace and spiritual upliftment to both performer and listener.",
    mood: "Serene, Devotional",
    timeOfDay: "Evening",
    notes: "Sa Ri Ga Ma# Pa Dha Ni Sa",
    characteristics: ["Prati Madhyam", "Peaceful nature", "Derived from Kalyani"],
    famousSongs: ["Krishna Nee Begane"]
  },
  {
    name: "Raga Hindolam",
    description: "A pentatonic raga that sways like a gentle swing (hindola). It creates a soothing, rocking motion that is both graceful and meditative.",
    mood: "Graceful, Soothing",
    timeOfDay: "Evening",
    notes: "Sa ga Ma Dha ni Sa",
    characteristics: ["Pentatonic", "No Ri or Pa", "Swinging quality"],
    famousSongs: ["Samaja Vara Gamana"]
  },
  {
    name: "Raga Kamboji",
    description: "A raga of great antiquity with a majestic and classical character. Kamboji has a serious, devotional quality that commands respect and reverence.",
    mood: "Majestic, Classical",
    timeOfDay: "Evening",
    notes: "Sa Ri ga Ma Pa Dha ni Sa",
    characteristics: ["Komal Ga and Ni", "28th Melakarta", "Ancient raga"],
    famousSongs: ["Sri Venkatesa Girisham"]
  },
  {
    name: "Raga Arabhi",
    description: "A bright and festive raga that brings joy and celebration. Arabhi has an uplifting quality that makes it perfect for auspicious occasions.",
    mood: "Festive, Bright",
    timeOfDay: "Morning",
    notes: "Sa Ri Ga Ma Pa Dha Ni Sa",
    characteristics: ["Sampurna", "Bright character", "Festive nature"],
    famousSongs: ["Sogasuga Mridanga Talamu"]
  },
  {
    name: "Raga Khamas",
    description: "A light and popular raga often used in light classical music. Khamas has a pleasing, accessible quality that appeals to both classical and popular tastes.",
    mood: "Light, Popular",
    timeOfDay: "Evening",
    notes: "Sa ga Ma Pa ni Dha Sa",
    characteristics: ["Mixed scale", "Popular appeal", "Light classical"],
    famousSongs: ["Brochevarevarura"]
  },
  {
    name: "Raga Nattai",
    description: "An energetic and rhythmic raga that pulses with vitality. Nattai has a strong, assertive character that makes it excellent for dynamic compositions.",
    mood: "Energetic, Rhythmic",
    timeOfDay: "Morning",
    notes: "Sa Ri ga Ma Pa Dha ni Sa",
    characteristics: ["Strong rhythm", "Energetic nature", "36th Melakarta"],
    famousSongs: ["Sri Ganapathim"]
  }
];

export const getRandomRaga = (): Raga => {
  const randomIndex = Math.floor(Math.random() * ragasDatabase.length);
  return ragasDatabase[randomIndex];
};

export const searchRagaBySong = (songName: string): Raga => {
  const searchTerms = songName.toLowerCase().trim();
  
  // First, try to find exact song match in the famous songs database
  const foundSong = famousSongsDatabase.find(song => 
    song.name.toLowerCase().includes(searchTerms) ||
    searchTerms.includes(song.name.toLowerCase())
  );
  
  if (foundSong) {
    // Find the corresponding raga in our database
    const raga = ragasDatabase.find(r => 
      r.name.toLowerCase().includes(foundSong.raga.toLowerCase()) ||
      foundSong.raga.toLowerCase().includes(r.name.toLowerCase())
    );
    if (raga) return raga;
  }
  
  // Fallback to existing keyword-based search
  if (searchTerms.includes('evening') || searchTerms.includes('sunset')) {
    return ragasDatabase.find(r => r.name.includes('Yaman')) || ragasDatabase[0];
  }
  if (searchTerms.includes('morning') || searchTerms.includes('dawn')) {
    return ragasDatabase.find(r => r.name.includes('Bhairav')) || ragasDatabase[1];
  }
  if (searchTerms.includes('love') || searchTerms.includes('romantic')) {
    return ragasDatabase.find(r => r.name.includes('Bhimpalasi')) || ragasDatabase[2];
  }
  
  return getRandomRaga();
};

export const getSongDetails = (songName: string): FamousSong | null => {
  const searchTerms = songName.toLowerCase().trim();
  return famousSongsDatabase.find(song => 
    song.name.toLowerCase().includes(searchTerms) ||
    searchTerms.includes(song.name.toLowerCase())
  ) || null;
};
