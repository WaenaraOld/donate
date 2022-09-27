fetch('https://cors-demo.glitch.me/allow-cors', {mode:'cors'})

const options = {
	method: 'POST',
	headers: {
	},
};

fetch('https://cors-anywhere.herokuapp.com/corsdemo/https://api.scpslgame.com/serverinfo.php?id=21611&key=ENeppKLJhYlqjjGllyxPaDNa&players=true', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
