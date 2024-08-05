//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "2349166401537";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2349166401537";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUlDbGFRdkE4UGNUUU9kNkQ2ekdxUU5Qb3RBaVBVYllVVEdFclYzTTNHdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZzhobkpiNjg3SGxKL1JrQW42V05DV0VRSTdTZkJwMHdVZjcwQkhtWlZsUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwSmpGMzBqQ0ZWOHVMM1VIRGtmamJEVk52YkcrZTdoYmxSM0I2anZwTkhJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFbkQzRUZOSkppVVA5OTkzVE5Ec1o0WHZPUzdBQXorZ1U0L2tuRy9ZN0JNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitIbEgyWkN0UnpqcHhtQmZmaFFEdXI4L1dLbHBqTS82NDZKNUt3RERQMWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikc2UmNkVFFCUVZFcTg3VDRZYjdEWTlKWW9uUmpSWnB4Wm9nM3FNcjVTRDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0VkZkgzNXh2OWpqeDd5azVRdFYyMUdtTm9WbFZmNWo1VzRsNjFiOUxYZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicWM4VEZxZWVRQlV4TWRsbTBLMWxFTVVIZFhjK1NLS2Z4Tk9mb2d4N1h3Zz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InMxQ1Y1dUFqVlJMcmJtVjJXR2Q4T3RlK3hZRFIzd1YraUFTSzVWOGs1dXIxdmFLbmcvVFJjcWZmQllUNlZtUFRxeFV6L1ZDeFFXeSsrdXpKVCtIM2lBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIxLCJhZHZTZWNyZXRLZXkiOiJnei8vdkhlOXZyaUExNTF2MUFVRWo0OHpnVHBhSTE5SFZrYmFBb29LUDFrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkxNjY0MDE1MzdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0EwQzBENTVCRjlFNDRGOEIyRDcifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjg0ODk5MH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiZkItdU5feW1TS3FJX2VMTnNTNnliZyIsInBob25lSWQiOiJiYTgzY2U5NC0wMDkxLTRlN2QtOWEyNy1kMDQwOGU4YTI3MjYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNFFiTGltY0k1SmpWTy9WK05IVVA4WDJQZnVFPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9FdHk5Y3FlSk9OWkNNckxJUTByZUc0cFFLZz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiIyUzZaUlZHMSIsIm1lIjp7ImlkIjoiMjM0OTE2NjQwMTUzNzo1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkpuciBHZW50dXUifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ08vWHo4SUxFTSt0d3JVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Imwvb0dlWXFZaGwvVERWRnRrTkZvV0pTeDBrQ3dxNlVYYTdmbE95WEpFeWs9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ijg1dGw0RFFLVHZ1M3Vpc2h0Qm1sNjE1azNjd1VsQnVBNURHK3FESG5wenMxajVGdGNVdU9adnA2TnJIREU3cHZ5T0Rkdy9oNklWSWJQdjZ0WTRZVURBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJjVUQzOEt6OGZ6MmJPS2UvbkJ0cHlSNTVVcUVYRThnVFlwa3QzVUtZcFhpS1lkZHA4Qk5rY2lmSUl6TVVXa0NtektLSW53cHZMTnFlNDVJTURWNGxodz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkxNjY0MDE1Mzc6NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaZjZCbm1LbUlaZjB3MVJiWkRSYUZpVXNkSkFzS3VsRjJ1MzVUc2x5Uk1wIn19XSwicGxhdGZvcm0iOiJpcGhvbmUiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjI4NDg5ODYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSmJkIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "𝐉𝐧𝐫 𝐆𝐞𝐧𝐭𝐮𝐮",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "𝐰𝐫𝐞𝐜𝐤𝐞𝐫",
  ownername: process.env.OWNER_NAME || "𝐉𝐧𝐫 𝐆𝐞𝐧𝐭𝐮𝐮",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || ".rembug",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
