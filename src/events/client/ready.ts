import { EventBuilder } from 'structures';

export default new EventBuilder('ready', true).setCallback(async client => {

	const keepAlive = require('../../server');
	// const Monitor = require('ping-monitor');
	 
	keepAlive();
	// const monitor = new Monitor({
	// 	website: 'https://AlmibarHelper.xenox116.repl.co',
	// 	title: 'Nombre',
	// 	interval: 15 // minutes
	// });
	 
	// monitor.on('up', (res: { website: any; }) => console.log(`${res.website} está encedido.`));
	// monitor.on('down', (res: { website: any; statusMessage: any; }) => console.log(`${res.website} se ha caído - ${res.statusMessage}`));
	// monitor.on('stop', (website: any) => console.log(`${website} se ha parado.`) );
	// monitor.on('error', (error: any) => console.log(error));

	console.log(`Logged in as ${client.user!.tag}`);
});
