const { InteractionCommand, Discord: { EmbedBuilder } } = require('xernerx');

class PingCommand extends InteractionCommand {
    constructor() {
        super('ping', {
            name: 'ping',
            description: 'Pong!',
        })
    }

    async exec(interaction) {
        let embed = new EmbedBuilder()
            .setTitle(this.data.name)
            .setDescription(this.data.description)
            .setURL(`${this.client.config.links.github}/blob/main/commands/interaction/${this.data.name}.js`)
            .setColor(this.client.color.embed)
            .setTimestamp()
            .setFooter({ text: interaction.user.username, iconURL: interaction.user.avatarURL({ dynamic: true }) })
            .addFields({ name: this.data.name, value: `${this.client.ws.ping}ms.` })

        interaction.reply({ embeds: [embed] })
    }
}

module.exports = PingCommand;