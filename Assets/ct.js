async function getpl() {
    const response = await fetch(api_url);
    const data = await response.json();
    const pl = (data.Servers[0].Players);
    console.log(pl)
    document.getElementById("div").innerText = pl;
}



const api_url = 'https://api.codetabs.com/v1/proxy/?quest=https://api.scpslgame.com/serverinfo.php?id=21611&key=ENeppKLJhYlqjjGllyxPaDNa&players=true'
getpl();
setTimeout(function () { location.reload(1); }, 20000);
