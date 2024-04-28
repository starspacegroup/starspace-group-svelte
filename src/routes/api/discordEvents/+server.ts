// import { Client, GuildChannel, TextChannel } from 'discord.js';
// import { error } from '@sveltejs/kit';
// import { DISCORD_API_TOKEN } from "$env/static/private"

// /** @type {import('./$types').RequestHandler} */ export async function GET({
//     url,
// }) {
//     try {
//         const guildId =
//         const { guildId, token } = req.query;

//         if (!guildId || !token) {
//             throw new Error('Missing guildId or token');
//         }

//         // Initialize Discord client
//         const client = new Client();

//         // Log in to Discord with the provided token
//         await client.login(token);

//         // Find the guild by its ID
//         const guild = client.guilds.cache.get(guildId);

//         if (!guild) {
//             throw new Error('Guild not found');
//         }

//         // Find all text channels in the guild
//         const textChannels = guild.channels.cache.filter(
//             (channel) => channel.type === 'text'
//         ) as GuildChannel[];

//         // Array to store events found
//         const events: string[] = [];

//         // Iterate through text channels to find events
//         for (const channel of textChannels) {
//             const textChannel = channel as TextChannel;

//             // Fetch messages from the channel
//             const messages = await textChannel.messages.fetch({ limit: 100 });

//             // Check each message for event keywords (you can customize this)
//             messages.forEach((msg) => {
//                 if (msg.content.toLowerCase().includes('event')) {
//                     events.push(msg.content);
//                 }
//             });
//         }

//         // Close Discord client
//         await client.destroy();

//         // Respond with the list of events
//         res.json(events);
//     } catch (error) {
//         console.error('Error:', error);
//         res.status(500).json({ error: 'Failed to fetch events' });
//     }
// };

// export default handler;
