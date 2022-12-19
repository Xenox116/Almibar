import type { ExtendedClient } from '../structures/Client';
import type { GuildMember, GuildTextBasedChannel, Message, VoiceBasedChannel } from 'discord.js';

export class Commands {
    static play(client: ExtendedClient, interaction: Message, command: String[], member: GuildMember) {
        const channel: VoiceBasedChannel = member.voice.channel!;

        let query: String = "";

        for (let i = 1; i < command.length; i++) {
            query = query.concat(' '+String(command[i]!));
        }
        client.distube.play(channel, String(query), {
            member: member,
            textChannel: interaction.channel as GuildTextBasedChannel,
            message: interaction
        })
    }

    static leave(client: ExtendedClient, interaction: Message) {
        const botMember = interaction.guild?.members.cache.get(client.user.id)!
        return botMember.voice.disconnect();
    }

    static skip(client: ExtendedClient, interaction: Message) {
        const queue = client.distube.getQueue(interaction);
        if(!queue?._next){
            return interaction.reply('No hay mas canciones');
        }
        return queue?.skip();
    }

    static shuffle(client: ExtendedClient, interaction: Message) {
        const queue = client.distube.getQueue(interaction);
        queue?.shuffle();
    }
}