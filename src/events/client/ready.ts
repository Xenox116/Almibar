import { EventBuilder } from 'structures';
import { pingHelper } from '../../util/pingHelper';

export default new EventBuilder('ready', true).setCallback(async client => {

	console.log(`Logged in as ${client.user!.tag}`);
	pingHelper();
});