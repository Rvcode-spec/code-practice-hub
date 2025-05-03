// To run this code you need to install the following dependencies:
// npm install @google/genai mime

import { GoogleGenAI } from "@google/genai"


  const ai = new GoogleGenAI({
    apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY
  })
  const config = {
    responseMimeType: "application/json"
  }
  const model = "gemini-2.5-pro-exp-03-25";
  const contents = [
    {
      role: "user",
      parts: [
        {
          text: `Write a script to generate 30 seconds video on topic: Interesting historical story along with Al image prompt in Realistic format for each scene and give me result in JSON format with imagePrompt and ContentText as field`
        }
      ]
    },
    {
      role: "model",
      parts: [
        {
          text: `Here's a thinking process that could lead to the JSON script for the historical video:

1.  **Understand the Goal:** The user wants a script for a 30-second video about an *interesting historical story*. It needs to be in JSON format, with each scene having an \`imagePrompt\` (for an AI image generator, specifically in a "Realistic" style) and \`ContentText\` (the narration/script for that scene). The total duration should be roughly 30 seconds.

2.  **Choose a Story:** What's an *interesting* historical story that can be told visually and concisely within 30 seconds?
    *   *Option 1: The Great Emu War.* Quirky, visual (emus vs. soldiers), relatively unknown. Good potential.
    *   *Option 2: The Dancing Plague of 1518.* Visually striking (people dancing uncontrollably), mysterious. Also good.
    *   *Option 3: Wojtek the Soldier Bear.* Heartwarming, unusual (a bear in the army). Very visual.
    *   *Option 4: The Tunguska Event.* Mysterious, dramatic explosion. Visual, but maybe harder to depict the *story* part quickly.
    *   *Option 5: The War of the Bucket.* Silly premise, visual potential (medieval battle over a bucket).

    Let's go with **Wojtek the Soldier Bear**. It's engaging, has clear visual elements (bear, soldiers, artillery), and a distinct beginning, middle, and end that can fit into 30 seconds.

3.  **Outline the Story Arc (for 30 seconds):**
    *   **Scene 1: Introduction (5s):** Introduce Wojtek - a bear cub found, adopted by Polish soldiers in WWII.
    *   **Scene 2: Life with Soldiers (7s):** Show Wojtek growing up, bonding with the soldiers, maybe mimicking them (drinking beer, wrestling).
    *   **Scene 3: The "Enlistment" (6s):** Explain how he needed to be officially enlisted to travel with them. Show him getting a rank/paybook.
    *   **Scene 4: The Heroic Act (7s):** Depict the Battle of Monte Cassino, Wojtek helping carry heavy artillery shells. This is the core visual.
    *   **Scene 5: Post-War/Legacy (5s):** Show Wojtek retired in a zoo, mention his fame. End on a reflective note.

4.  **Calculate Scene Durations:**
    *   Scene 1: 5s
    *   Scene 2: 7s
    *   Scene 3: 6s
    *   Scene 4: 7s
    *   Scene 5: 5s
    *   **Total: 30s.** This pacing seems reasonable.

5.  **Draft ContentText for Each Scene:** Write concise narration for each part of the story arc. Keep the language engaging and simple.

    *   *Scene 1:* "Meet Wojtek. Found as an orphaned cub in Iran during World War II, he was adopted by soldiers of the Polish II Corps."
    *   *Scene 2:* "He quickly became more than a mascot, sharing rations, wrestling playfully, and even learning to salute. He was one of the lads."
    *   *Scene 3:* "To join them on transport ships to Italy, Wojtek was officially enlisted as a Private in the Polish Army, even getting a paybook!"
    *   *Scene 4:* "During the fierce Battle of Monte Cassino, Wojtek famously helped carry heavy crates of artillery ammunition, never dropping one."
    *   *Scene 5:* "After the war, Wojtek lived out his days peacefully in Edinburgh Zoo, a beloved hero remembered for his courage and companionship."

6.  **Develop AI Image Prompts (Realistic Style) for Each Scene:** Translate the scene descriptions and narration into detailed prompts suitable for an AI image generator. Emphasize the "Realistic" style.

    *   *Scene 1 Prompt:* Needs a small bear cub, soldiers, WWII setting (Iran).
        > \`Realistic photograph, WWII era. Polish soldiers in dusty uniforms gently holding a small, orphaned Syrian brown bear cub. Middle Eastern landscape background (Iran). Warm, slightly desaturated colors. Soft natural lighting.\`
    *   *Scene 2 Prompt:* Needs a larger bear interacting with soldiers, camp setting.
        > \`Realistic photograph, WWII Polish army camp. A medium-sized brown bear playfully wrestling with smiling soldiers in uniform. Tents and military vehicles in the background. Candid, slightly gritty feel. Daytime.\`
    *   *Scene 3 Prompt:* Needs the bear looking "official," maybe near paperwork or an officer.
        > \`Realistic photograph, close-up. A large brown bear (Wojtek) sitting patiently next to a Polish army officer holding an official-looking document resembling a paybook. Focus on the bear's calm expression. WWII field office setting. Natural light.\`
    *   *Scene 4 Prompt:* The key action scene - bear carrying ammo. Needs battle context.
        > \`Realistic photograph, dramatic lighting. A large brown bear carefully carrying a heavy artillery shell crate alongside Polish soldiers during the Battle of Monte Cassino. Dusty, war-torn environment, smoke in the distance. Intense, focused expressions. Gritty realism.\`
    *   *Scene 5 Prompt:* Bear in a zoo enclosure, looking peaceful.
        > \`Realistic photograph, post-war era (late 1940s/1950s). An adult brown bear resting peacefully inside a zoo enclosure (Edinburgh Zoo style). Looking towards the viewer with a calm, perhaps wise expression. Soft, late afternoon light. Muted colors.\`

7.  **Format as JSON:** Assemble the \`imagePrompt\` and \`ContentText\` for each scene into the specified JSON structure. Double-check field names (\`imagePrompt\`, \`ContentText\`) and the overall JSON syntax (curly braces, square brackets, commas, quotes).

    \`\`\`json
    [
      {
        "imagePrompt": "...",
        "ContentText": "..."
      },
      {
        "imagePrompt": "...",
        "ContentText": "..."
      },
      // ... repeat for all scenes ...
      {
        "imagePrompt": "...",
        "ContentText": "..."
      }
    ]
    \`\`\`

8.  **Review and Refine:** Read through the JSON structure.
    *   Does the story flow logically? Yes.
    *   Is the total time roughly 30 seconds? (Read the \`ContentText\` aloud at a moderate pace). Yes, seems about right.
    *   Are the image prompts specific and realistic? Yes.
    *   Is the JSON valid? Yes.
    *   Is the story interesting? Wojtek the bear is generally considered interesting.

This structured approach helps ensure all requirements are met, the story is coherent, the visuals are well-defined, and the output format is correct.`
        },
        {
          text: `\`\`\`json
[
  {
    "imagePrompt": "Realistic photograph, WWII era. Polish soldiers in dusty uniforms gently holding a small, orphaned Syrian brown bear cub. Middle Eastern landscape background (Iran). Warm, slightly desaturated colors. Soft natural lighting.",
    "ContentText": "(Approx 5 seconds) Meet Wojtek. Found as an orphaned cub in Iran during World War II, he wasn't just a pet, he was adopted by soldiers of the Polish II Corps."
  },
  {
    "imagePrompt": "Realistic photograph, WWII Polish army camp. A medium-sized brown bear playfully wrestling with smiling soldiers in uniform. Tents and military vehicles in the background. Candid, slightly gritty feel. Daytime.",
    "ContentText": "(Approx 7 seconds) He grew up amongst the troops, sharing their rations, drinking beer, smoking (or eating) cigarettes, and becoming an unofficial mascot and morale booster."
  },
  {
    "imagePrompt": "Realistic photograph, close-up. A large brown bear (Wojtek) sitting patiently next to a Polish army officer holding an official-looking document resembling a paybook. Focus on the bear's calm expression. WWII field office setting. Natural light.",
    "ContentText": "(Approx 6 seconds) But to travel with them to Italy, regulations required him to be enlisted. So, Wojtek became an official Private in the Polish Army!"
  },
  {
    "imagePrompt": "Realistic photograph, dramatic lighting. A large brown bear carefully carrying a heavy artillery shell crate alongside Polish soldiers during the Battle of Monte Cassino. Dusty, war-torn environment, smoke in the distance. Intense, focused expressions. Gritty realism.",
    "ContentText": "(Approx 7 seconds) During the fierce Battle of Monte Cassino, Wojtek famously helped carry heavy crates of artillery ammunition, never dropping one, aiding the war effort."
  },
  {
    "imagePrompt": "Realistic photograph, post-war era (late 1940s/1950s). An adult brown bear resting peacefully inside a zoo enclosure (Edinburgh Zoo style). Looking towards the viewer with a calm, perhaps wise expression. Soft, late afternoon light. Muted colors.",
    "ContentText": "(Approx 5 seconds) After the war, Wojtek lived out his days in Edinburgh Zoo, a beloved hero remembered for his unique service and wartime companionship."
  }
]
\`\`\``
        }
      ]
    },
    {
      role: "user",
      parts: [
        {
          text: `INSERT_INPUT_HERE`
        }
      ]
    }
  ]

  export default async function generateContent() {
   try {
    const response = await ai.models.generateContentStream({
      model,
      config,
      contents,
    });

    if (!response || typeof response[Symbol.asyncIterator] !== 'function') {
      throw new Error("Invalid response from generateContentStream");
    }

    for await (const chunk of response) {
      console.log(chunk.text);
    }

  } catch (err) {
    console.error("Caught error:", err?.message || err || "Unknown error");
  }
}

console.log("model:", model);
console.log("config:", config);
console.log("contents:", contents);
generateContent(); // Call the async function



  
  
