import { Promise } from '../PromiseV2';

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
 
register("Chat", (event) => {
	var formattedMessage = ChatLib.getChatMessage(event, true);
	if (formattedMessage.includes("&6&lPLAYTIME! &eYou gained &b+1 Raffle Ticket&e!&r")) {
		wait(1200000).then(() => ChatLib.chat(new TextComponent('&b[RAFFLE] &e20 Minute timer up for: &aPlaytime&e!')))
	} 
	if (formattedMessage.includes("&6&lACTIVE PLAYER! &eYou gained &b+1 Raffle Ticket&e!&r")) {
		wait(1170000).then(() => ChatLib.chat(new TextComponent('&b[RAFFLE] &e30 Second Warning for: &aActive&e!')))
		wait(1200000).then(() => ChatLib.chat(new TextComponent('&b[RAFFLE] &e20 Minute timer up for: &aActive&e!')))
	}
})