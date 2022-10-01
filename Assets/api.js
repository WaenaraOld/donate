

const options = {
	method: 'POST',
	headers: {
	},
};

fetch('https://api.scpslgame.com/serverinfo.php?id=21611&key=ENeppKLJhYlqjjGllyxPaDNa&players=true', { mode: 'no-cors' })
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
