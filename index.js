// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');

//dotenv
const dotenv = require('dotenv');
dotenv.config();
const {TOKEN} = process.env;

// import commands
const fs = require("node:fs");
const path = require("node:path");
const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith("js"));

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection();

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath)
    if ("data" in command && "execute" in command) {
        client.commands.set(command.data.name, command);

} else {
    console.log(`This command at ${filePath} has no "data" or "execute"`);
}
}
console.log(client.commands)


// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

// Log in to Discord with your client's token
client.login(TOKEN);

// Listener interact with bot via chat;
client.on(Events.InteractionCreate, async interaction => {
    if (interaction.isStringSelectMenu()) {
        const selected = interaction.values[0]
        if (selected == "javascript") {}
        await interaction.reply("Javascript Document at:")
    }
    if (!interaction.isChatInputCommand())
    return
    console.log(interaction);
    const command = interaction.client.commands.get(interaction.commandName)

    if (!command) {
        console.error("Command not found");
        return;
    }
    try {
        await command.execute(interaction)
    }
    catch (err) {
        console.error(err)
        await interaction.reply("There was an error executing this command");
    }
}
)
