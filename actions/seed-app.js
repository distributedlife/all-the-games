export const SEED_APP = 'SPIKEY/SEED_APP';

export const seedApp = (key, steamId) => ({
  type: SEED_APP,
  key,
  steamId
});
