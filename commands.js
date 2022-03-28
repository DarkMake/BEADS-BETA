"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const discord_js_1 = require("discord.js");
const config_1 = tslib_1.__importDefault(require("./config"));
const { prefix } = config_1.default;
const commands = {
    'help': {
        description: 'Shows the list of commands and their details.',
        format: 'help'
    },
    'ping': {
        description: 'Checks connectivity with discord\'s servers.',
        format: 'ping'
    },
    'say': {
        aliases: ['repeat'],
        description: 'Repeats whatever is said.',
        format: 'say <message>'
    }
};
function helpCommand(message) {
    const footerText = message.author.tag;
    const footerIcon = message.author.displayAvatarURL();
    const embed = new discord_js_1.MessageEmbed()
        .setTitle('HELP MENU')
        .setColor('GREEN')
        .setFooter({ text: footerText, iconURL: footerIcon });
    for (const commandName of Object.keys(commands)) {
        const command = commands[commandName];
        let desc = command.description + '\n\n';
        if (command.aliases)
            desc += `**Aliases :** ${command.aliases.join(', ')}\n\n`;
        desc += '**Format**\n```\n' + prefix + command.format + '```';
        embed.addField(commandName, desc, false);
    }
    return embed;
}
exports.default = helpCommand;
//# sourceMappingURL=commands.js.map