const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.on('ready', () => {
  console.log(`Patou en ligne ! ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  if (message.content.toLowerCase() === '!ping') {
    return message.reply('Pong! 🏓 Patou est là 24h/24 !');
  }

  if (message.content.toLowerCase().startsWith('!patou')) {
    return message.reply('Salut ! C\'est Patou 😎 Je suis enfin hébergé gratuitement !');
  }
});

// TOKEN via variable d'environnement Render
client.login(process.env.TOKEN);
