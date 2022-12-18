import type { ExtendedClient } from '../structures/Client';
import type { GuildMember, GuildTextBasedChannel, Message, VoiceBasedChannel } from 'discord.js';

export class Commands {
    static play(client: ExtendedClient, interaction: Message, command: String[], member: GuildMember) {
        const channel: VoiceBasedChannel = member.voice.channel!;
        client.distube.play(channel,String(command[1]),{
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
        queue?.skip()
    }

    static shuffle(client: ExtendedClient, interaction: Message) {
        const queue = client.distube.getQueue(interaction);
        queue?.shuffle();
    }
}