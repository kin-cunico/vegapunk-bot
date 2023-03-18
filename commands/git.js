const {SlashCommandBuilder} = require("discord.js");
const { EmbedBuilder } = require('discord.js');

const exampleEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Short reminders of Git command lines')
	.setAuthor({ name: 'Kin Cunico'})
	.setDescription('use this command to quickly access a short reminder of Git commands')
	.addFields(
        {name: '\u200B', value: '\u200B' },
		{ name: '$ git init [project-name]', value: 'New local repo with specified project name', inline: true },
		{ name: '$ git clone [url]', value: 'download a project and its full history', inline: true },
		{ name: '$ git stash', value: 'Temporarly uploads saved and changed files', inline: true },
		{ name: '\u200B', value: '\u200B' },
		{ name: '$ git status', value: 'Revise editions and create a commit', inline: true },
		{ name: '$ git add [file]', value: 'snapshots a file', inline: true },
		{ name: '$ git commit -m "[message]"', value: 'auto records the snapshot in the current version', inline: true },
		{ name: '\u200B', value: '\u200B' },
		{ name: '$ git branch', value: 'List local branches', inline: true },
		{ name: '$ git branch [name-branch]', value: 'Create new branch', inline: true },
		{ name: '$ git switch -c [name-branch]', value: 'change to selected branch', inline: true },
		{ name: '\u200B', value: '\u200B' },
		{ name: '$ git merge [name-branch]', value: 'merge historical branch and current branch', inline: true },
		{ name: '$ git push [alias] [branch]', value: 'Send all branch local commits to GitHub', inline: true },
		{ name: '$ git pull', value: 'donwload history and incorporate changes', inline: true },
	)
	.setTimestamp()

module.exports = {
    data: new SlashCommandBuilder()
        .setName("git")
        .setDescription("Remember git commands"),

async execute(interaction) {
    await interaction.reply({embeds: [exampleEmbed] });
}
}