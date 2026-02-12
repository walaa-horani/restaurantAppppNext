import { createClient } from 'next-sanity'

// Run with: npx sanity exec scripts/seedSanity.ts --with-user-token

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2024-01-01',
    useCdn: false,
    token: process.env.SANITY_API_TOKEN, // OR handled by 'sanity exec' context
})

const data = [
    {
        _type: 'menuItem',
        name: 'Void Burger',
        price: 18,
        description: 'Black garlic aioli, caramelized onions, smoked gouda, truffle glaze.',
        isFavorite: true,
    },
    {
        _type: 'menuItem',
        name: 'Circuit Fries',
        price: 12,
        description: 'Loaded fries with wasabi mayo, nori flakes, sesame seeds, and scallions.',
        isFavorite: true,
    },
    {
        _type: 'menuItem',
        name: 'Neon Elixir',
        price: 10,
        description: 'Dragon fruit syrup, butterfly pea tea, lemon fizz, electric dust rim.',
        isFavorite: true,
    },
    {
        _type: 'menuItem',
        name: 'Rebel Chicken',
        price: 22,
        description: 'Crispy thigh, kimchi slaw, gochujang mayo, pickled radish.',
        isFavorite: true,
    },
    {
        _type: 'menuItem',
        name: 'Avocado Glitch',
        price: 15,
        description: 'Smashed avocado, pepper jack, chipotle ranch, tortilla strips.',
        isFavorite: true,
    },
    {
        _type: 'menuItem',
        name: 'Data Tacos',
        price: 16,
        description: 'Slow cooked pork shoulder, pineapple salsa, cilantro, lime crema.',
        isFavorite: true,
    },
]

async function seed() {
    console.log('Seeding data...')
    try {
        for (const item of data) {
            // Create a slug separately or let Sanity do it in Studio? 
            // API creation doesn't auto-generate slugs unless we define it.
            // We'll create a simple slug from name.
            const slug = { current: item.name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '') };

            await client.create({ ...item, slug });
            console.log(`Created ${item.name}`);
        }
        console.log('Done!');
    } catch (err) {
        console.error('Seeding failed:', err);
        console.log('Make sure you are logged in using `npx sanity login` and your project ID is set in .env.local');
    }
}

seed();
