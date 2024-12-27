function getRandomWords(){
    const randomWords = [
        "planet", "stream", "dolphin", "sunrise", "jungle", "castle", "harmony", "orchard", 
        "glacier", "tundra", "vintage", "beacon", "falcon", "canyon", "wander", "marvel", 
        "garden", "island", "fusion", "pebble", "shadow", "tricky", "blossom", "rubber", 
        "cactus", "puzzle", "mantle", "ignite", "forest", "rocket", "safari", "copper", 
        "timber", "sponge", "frozen", "magnet", "legend", "ripple", "cosmic", "gentle", 
        "mystic", "broken", "cherry", "ranger", "guitar", "native", "silent", "sprout", 
        "quartz", "fabric", "dandelion", "sphere", "meteor", "tropic", "trivia", "oasis", 
        "summit", "bright", "whisper", "plasma", "fringe", "butter", "poetry", "canvas", 
        "jigsaw", "turkey", "oyster", "galaxy", "static", "knight", "stream", "anchor", 
        "cannon", "beetle", "ribbon", "scarce", "fusion", "winter", "nugget", "travel", 
        "danger", "modern", "gravel", "python", "velvet", "helmet", "prince", "glider", 
        "mirror", "summon", "atomic", "famous", "bronze", "wisdom", "empire", "vector", 
        "silent", "motion", "cobalt", "legend", "domain", "sphere", "dreamy", "wander", 
        "blazer", "secret", "mellow", "cosmos", "bubble", "lantern", "parrot", "exotic", 
        "amber", "forest", "rocket", "island", "orchid", "plunge", "marble", "timber", 
        "cobalt", "atomic", "ember", "ripple", "crystal", "cherry", "valley", "beacon", 
        "savage", "hazard", "tundra", "dragon", "spider", "quasar", "vortex", "python", 
        "floral", "polish", "violet", "tunnel", "summit", "swampy", "comedy", "ranger", 
        "parrot", "clover", "violet", "secret", "medley", "cosmos", "blazer", "garden", 
        "wander", "fusion", "scarce", "fabric", "static", "native", "sunset", "frozen", 
        "tricky", "impact", "gentle", "exotic", "jigsaw", "puzzle", "bubble", "bright", 
        "knight", "floral", "plasma", "poetry", "turkey", "mantle", "silent", "whisper", 
        "turkey", "rubber", "summit", "forest", "ranger", "planet", "vortex", "scarce", 
        "modern", "travel", "vintage", "quartz", "sunset", "anchor", "scarce", "cosmos", 
        "mellow", "gentle", "beetle", "galaxy", "plasma", "timber", "broken", "static", 
        "tropic", "sponge", "garden", "bright", "fabric", "sphere", "legend", "ignite", 
        "danger", "orchid", "exotic", "knight", "bubble", "fusion", "turkey", "beacon", 
        "ripple", "atomic", "scarce", "rocket", "travel", "wisdom", "modern", "tundra", 
        "mirror", "cosmic", "frozen", "cherry", "python", "floral", "prince", "ribbon", 
        "violet", "motion", "summon", "parrot", "velvet", "domain", "broken", "summit", 
        "static", "crystal", "blazer", "mantle", "pebble", "fusion", "canyon", "secret", 
        "sphere", "shadow", "dandelion", "stream", "mystic", "lantern", "tricky", "plunge", 
        "jungle", "cactus", "medley", "anchor", "spider", "forest", "scarce", "sunrise", 
        "floral", "stream", "fusion", "ribbon", "wisdom", "wander", "cherry", "velvet", 
        "summon", "ranger", "tropic", "violet", "travel", "pebble", "vortex", "rocket", 
        "garden", "puzzle", "crystal", "modern", "knight", "floral", "legend", "domain", 
        "gentle", "bright", "tundra", "fabric", "timber", "motion", "beetle", "cosmos", 
        "marble", "tricky", "native", "mantle", "lantern", "fusion", "forest", "cosmic", 
        "parrot", "secret", "orchid", "summon", "bright", "stream", "plasma", "gentle", 
        "floral", "static", "parrot", "blazer", "static", "motion", "travel", "sponge", 
        "native", "prince", "parrot", "cosmic", "canyon", "forest", "wisdom", "fusion", 
        "rocket", "mystic", "cosmos", "anchor", "summit", "modern", "wander", "bright", 
        "cactus", "ranger", "python", "cherry", "cosmos", "sunset", "turkey", "modern", 
        "travel", "scarce", "dandelion", "cosmic", "fusion", "summon", "canyon", "wisdom", 
        "garden", "summit", "floral", "ranger", "orchid", "prince", "medley", "fusion", 
        "rocket", "static", "bright", "fusion", "tundra", "mirror", "tricky", "vintage", 
        "beacon", "summit", "vortex", "fabric", "stream", "parrot", "wander", "legend"
      ];

      
      const randomIndex = Math.floor(Math.random()*randomWords.length);

      

      return randomWords[randomIndex]

}

export default getRandomWords