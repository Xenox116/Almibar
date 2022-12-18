import type { GuildMember, PartialGuildMember, User } from 'discord.js';
import { EventBuilder } from 'structures';
import type { ExtendedClient } from '../../structures/Client';

export default new EventBuilder('guildMemberUpdate').setCallback(
    async (client: ExtendedClient, interaction: GuildMember | PartialGuildMember, newMember: GuildMember) => {
        client;
        interaction;        

        const user: User = newMember.user;

        const lukenNick: String = 'testikul0';        

        if (user.username + '#' + user.discriminator === 'nekul#1261' && newMember.nickname !== lukenNick) {

            newMember.setNickname(String(lukenNick))
        }
    }
)