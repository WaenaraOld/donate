use scpsl_api::server_info::{get, RequestParameters, Response};
use std::env::var;
use url::Url;

#[tokio::main]
async fn main() {
    let account_id = var("21611")
        .expect("Expected an account id in the environment")
        .parse::<u64>()
        .unwrap();
    let api_key = var("ENeppKLJhYlqjjGllyxPaDNa").expect("Expected an account id in the environment");

    let parameters = RequestParameters::builder()
        .url(Url::parse("https://api.scpslgame.com/serverinfo.php").unwrap())
        .id(account_id)
        .key(api_key)
        .players(true)
        .build();

    if let Response::Success(response) = get(&parameters).await.unwrap() {
        println!(
            "Total players on your servers: {}",
            response
                .servers()
                .iter()
                .map(|server| server.players_count().unwrap().current_players())
                .sum::<u32>()
        )
    }
}
