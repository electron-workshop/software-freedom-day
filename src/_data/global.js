const site = require("./site.json");

// Netlify tells each build which address it is being served from.
// DEPLOY_PRIME_URL is the branch preview when this is a branch, and the live
// site when it is production, so share links always point at the build you are
// actually looking at. There is no such variable when running locally.
const shareUrl = process.env.DEPLOY_PRIME_URL || site.url;

module.exports = {
  currentYear: new Date().getFullYear(),
  shareUrl: shareUrl.replace(/\/$/, ""),
};
