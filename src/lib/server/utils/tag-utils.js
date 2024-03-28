const exoticAnimals = [
    'Aardvark', 'Albatross', 'Axolotl', 'Binturong', 'Capybara', 
    'Dugong', 'Echidna', 'Fossa', 'Gharial', 'Hippopotamus', 
    'Iguana', 'Jaguar', 'Kinkajou', 'Lemur', 'Mongoose', 
    'Numbat', 'Okapi', 'Pangolin', 'Quokka', 'Raccoon', 
    'Serval', 'Tapir', 'Uakari', 'Vicuna', 'Wombat', 
    'Xerus', 'Yak', 'Zebra'
];

function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * exoticAnimals.length);
    return exoticAnimals[randomIndex];
}


export async function isTagUnique(tag, supabase) {
    const { data, error } = await supabase
        .from('projects') // Make sure to replace with your actual table name
        .select('tag')
        .eq('tag', tag)
        .single();

    return !data; // If data is null, tag is unique
}

export function convertToTag(input) {
    return input.replace(/([a-z0-9])([A-Z])| /g, '$1-$2').toLowerCase();
}

export async function fetchRandomWord() {
    const response = await fetch('https://random-word-api.herokuapp.com/word'); // Example API
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const words = await response.json();
    return words[0]; // Assuming the API returns an array with one word
}

export async function generateUniqueTag(baseInput, supabase) {
    let tag = convertToTag(baseInput);
    let isUnique = await isTagUnique(tag, supabase);

    while (!isUnique) {
        const randomWord = getRandomWord();
        tag = `${tag}-${convertToTag(randomWord)}`;
        isUnique = await isTagUnique(tag, supabase);
    }

    return tag;
}