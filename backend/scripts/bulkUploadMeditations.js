const axios = require('axios');

// Base URLs for the two categories
const meditationBaseURL = 'https://6890a66a93218e268f2db269--skyeasee.netlify.app/';
const educationalBaseURL = 'https://6890a66a93218e268f2db269--skyeasee.netlify.app/educational/';

const meditationFiles = [
  {
    title: "Fear of Flying Hypnosis",
    filename: "fear-of-flying-hypnosis.mp3",
    description: "A hypnosis session to calm your fear of flying.",
    duration: 600,
    tags: ["hypnosis", "anxiety", "flight"],
    category: "meditation"
  },
  {
    title: "Flying Guided Meditation",
    filename: "flying-guided-meditation.mp3",
    description: "A guided meditation to ease anxiety during flights.",
    duration: 480,
    tags: ["guided", "anxiety", "travel"],
    category: "meditation"
  },
  {
    title: "Guided Meditation for Travel Anxiety",
    filename: "guided-meditation-for-travel-anxiety.mp3",
    description: "Relieve travel-related anxiety with this calming session.",
    duration: 420,
    tags: ["guided", "anxiety", "relaxation"],
    category: "meditation"
  },
  {
    title: "Meditation for Flight Anxiety",
    filename: "meditation-for-flight-anxiety.mp3",
    description: "A mindfulness meditation to ease flight anxiety.",
    duration: 450,
    tags: ["mindfulness", "anxiety", "flight"],
    category: "meditation"
  },
  {
    title: "Mini Meditation",
    filename: "mini-meditation.mp3",
    description: "A quick 2-minute meditation to calm nerves.",
    duration: 120,
    tags: ["quick", "calm", "relax"],
    category: "meditation"
  },
  // Educational Content
  {
    title: "Captain Debunks Flying Fears",
    filename: "captain-debunks-flying-fears.mp3",
    description: "A pilot explains and debunks common flying myths.",
    duration: 300,
    tags: ["educational", "pilot", "flight-myths"],
    category: "educational"
  },
  {
    title: "Planes Are Actually Safest",
    filename: "planes-are-actually-safest.mp3",
    description: "An explanation of why airplanes are the safest transport.",
    duration: 240,
    tags: ["educational", "safety", "flight"],
    category: "educational"
  },
  {
    title: "Turbulence Explained",
    filename: "turbulence.mp3",
    description: "Understand what turbulence is and why it's not dangerous.",
    duration: 180,
    tags: ["educational", "turbulence", "safety"],
    category: "educational"
  }
];

async function uploadMeditations() {
  for (const meditation of meditationFiles) {
    const audioUrl = (meditation.category === "meditation")
      ? `${meditationBaseURL}${meditation.filename}`
      : `${educationalBaseURL}${meditation.filename}`;

    const payload = {
      title: meditation.title,
      description: meditation.description,
      audioUrl,
      duration: meditation.duration,
      tags: meditation.tags
    };

    try {
      const res = await axios.post('http://localhost:5000/api/meditation', payload); // Update to deployed URL later
      console.log(`Uploaded: ${meditation.title}`);
    } catch (err) {
      console.error(`Failed to upload ${meditation.title}:`, err.response ? err.response.data : err.message);
    }
  }
}

uploadMeditations();
