import type { GuildMember, Message } from 'discord.js';
import { EventBuilder } from 'structures';
import type { ExtendedClient } from '../../structures/Client';
import { Commands } from '../../util/commands';

export default new EventBuilder('messageCreate').setCallback(
    async (client: ExtendedClient, interaction: Message) => {

        let message: String;
        let command: String[] = [];
        let member: GuildMember;

        if (interaction.author.bot || interaction.author.system) return;
        message = interaction.content;
        
        if (!message.startsWith('¡')) return;

        console.log(message);

        command = message.substring(1).split(' ')!;
        member = interaction.member!;

        if (command[0] === 'test') {
            if (command.length !== 1) return;

            return;
        }

        if (command[0] === 'ping') {
            if (command.length !== 1) return;

            return interaction.reply(client.ws.ping+"");
        }

        if (command[0] === 'horario') {
            if (command.length !== 1) return;

            return interaction.reply({
                files: [
                    'https://cdn.discordapp.com/attachments/885147788915118114/1019282999419883520/h0rAriO.png'
                ]
            });
        }

        if (command[0] === 'orario') {
            if (command.length !== 1) return;

            return interaction.reply({
                files: [
                    'https://cdn.discordapp.com/attachments/973990088629420112/1019976904683569182/unknown.png'
                ]
            });
        }

        if (command[0] === 'p') {
            if (command.length !< 2) return;
            return Commands.play(client, interaction, command, member);
        }

        if (command[0] === 'dis') {
            if (command.length !== 1) return;
            return Commands.leave(client, interaction);
        }

        if (command[0] === 'skip') {
            if (command.length !== 1) return;
            return Commands.skip(client, interaction);
        }

        if(command[0] === 'shuffle'){
            if (command.length !== 1) return;
            return Commands.shuffle(client, interaction);
        }
    }
);