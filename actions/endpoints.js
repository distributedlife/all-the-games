export const getPlayerSummaryUrl = (key, steamId) => `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${key}&steamids=${steamId}`;

export const getGamesListUrl = (key, steamId) => `https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${key}&steamid=${steamId}&include_played_free_games=1&include_appinfo=1`;

export const getRecentGamesUrl = (key, steamId) => `https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${key}&steamid=${steamId}`;

export const getFriendsUrl = (key, steamId, relationship = 'all') => `https://api.steampowered.com/ISteamUser/GetFriendList/v0001/?key=${key}&steamid=${steamId}&relationship=${relationship}`

export const getCompletedAchievementsForPlayerForGameUrl = (key, steamId, appId) => `https://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=${appId}&key=${key}&steamid=${steamId}`;

export const getAllAchievementsForPlayerForGameUrl = (key, steamId, appId) => `https://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=${appId}&key=${key}&steamid=${steamId}`;

export const getGlobalAchievementProgressUrl = (gameId) => `https://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/?gameid=${gameid}`

export const getGameInfoUrl = (key, appId) => `https://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/?key=${key}&appid=${appId}`;

export const getGameNewsUrl = (key, appId, count = 3) => `https://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=${appId}&count=${count}&maxlength=300`;