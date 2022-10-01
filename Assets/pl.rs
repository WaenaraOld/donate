async function getpl() {
    const response = await fetch('https://api.codetabs.com/v1/proxy/?quest=https://api.scpslgame.com/serverinfo.php?id=21611&key=ENeppKLJhYlqjjGllyxPaDNa&players=true')}')
    const data = await response.json();
    console.log(data.Servers[0].Players);
    document.getElementById('players').textContent = players;
}


getpl();
