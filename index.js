import { Promise } from '../PromiseV2';

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
 
register("Chat", (event) => {
	var formattedMessage = ChatLib.getChatMessage(event, true);
	if (formattedMessage.includes("&6&lACTIVE PLAYER! &eYou gained &b+1 Raffle Ticket&e!&r")) {
		InitiateCountdown();
	}
})

function InitiateCountdown() {
	wait(1170000).then(() => {
		World.playSound("note.harp", 100, 2);
		ChatLib.chat(new TextComponent('&b[RAFFLE] &e30 Second Warning forfor: &aActive&e!'))
	})
	wait(1200000).then(() => {
		World.playSound("note.pling", 100, 2);
		ChatLib.chat(new TextComponent('&b[RAFFLE] &e20 Minute timer up for: &aActive&e!'))
	})
}
