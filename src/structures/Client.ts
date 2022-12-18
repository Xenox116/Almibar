import { eventHandler } from 'handlers';
import Discord from 'discord.js';
import { DisTube } from 'distube';
import { YtDlpPlugin } from '@distube/yt-dlp';
import { SpotifyPlugin } from '@distube/spotify';

export class ExtendedClient extends Discord.Client<true> {
	public distube: DisTube;

	public constructor() {
		super({ intents: 131071 });
		this.distube = new DisTube(this, {
			leaveOnStop: false,
			emitNewSongOnly: true,
			emitAddSongWhenCreatingQueue: false,
			emitAddListWhenCreatingQueue: false,
			plugins: [
				new SpotifyPlugin({
					emitEventsAfterFetching: true
				}),
				new YtDlpPlugin()
			]
		});
	}

	public async start() {
		await eventHandler(this);

		let json = require('../../config.json');

		await this.login(json.token);
	}
}
