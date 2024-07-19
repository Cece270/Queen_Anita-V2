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
global.devs = "2349051769752";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2349051769752";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0s0cncvbUhpbmdVVDArOFEzUkRMY0NuK01Yc0dxTUlTNXI0Rkk3d1ZWdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWjdLRFMwaHBUZXhpU0dwdGdNU0dsMnRSRTVEdXlseExaMFRxcUFyT1dFQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3Q1dGYkJtTUtlMDlOK3VlWGYxQ0RyaWVXZitlYldMVTRWVGZmSmw4czBJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJdTM3aWpnZm9FdnVhNnZXMkYrQ3k0KzdSQmR6MmtGODNWaUFVSTZGeTAwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdNUzNha1plOVMvMlU2N1NhbXNWUkp3Z3VOZmgwNllkbWVGcDR2a29pVjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlVMDBaZ0dDRlZLU2J5dnkreDY3MlF2Zi9iRFhPMFBKUnpnOUdOci91Qjg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU01RTmtYTk5WYTBnUjFIeWo5MTFyckNyZlZYU25CSm96SXFxY216UmFXaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQm9pUGppMmxLVCsyN2xHZVB3enJNWGJRcTR5MmEyOUs1YVVNM3lhQnZHVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNZTTMzOHpaV0ZKQ0lmcEVoR1dGWWVFZ0xIWXNrY2FTMDg3dHlObTgvYnozbk1VcHptNnROVVFuNk80VlFrOEE0WFlsazlaYWdxMDVscmErNjBxcWp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjgsImFkdlNlY3JldEtleSI6IjhxVEIxdlN2d0lYQ2NEWWZ1QUhwdDZkRUp2RjVjcnd1SEZ3R2VwZnNGRGs9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTA1MTc2OTc1MkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzQTY3RTg1MDVCOEZBRTY4RTNDMSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIxNDMwMTc2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ5MDUxNzY5NzUyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNBRjUwM0FDRTBGRDk5Qjk1RjlDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjE0MzAxODB9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlMzXzQwaXlFU3hxSTZYUVhfTGdNVHciLCJwaG9uZUlkIjoiNjlhYjNmYmQtNjZlZS00YWZhLWJjNmItYjc5NGNlNTcxNzcyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im10c2lEU3V2MmRka0hUYkRuSENGdDRtUzNtWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhM0hxcVNwTGcvTGd1SzlHaTZvd3hBUjVqa009In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSDJTRUZSUzMiLCJtZSI6eyJpZCI6IjIzNDkwNTE3Njk3NTI6MTFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2atPCdkJQg8J2QgvCdmrXwnZCL8J2atfCdkJLwnZq78J2asPCdmqvwnZCLIEVFIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKeUdpTGtDRUpMaDY3UUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJEdk1YZVdOaTUxS084MXFhcE1ycU9NV1RLZzJuaHZmc0RaQW1kUTVTZ1M0PSIsImFjY291bnRTaWduYXR1cmUiOiJST0lTVFJ6QkRxci9mZU1NKzkrOFZBc0pHRlhiMUU5ZG5kOFpmUmJpWGpxMXRMdG9xUGQ4WTE5Yzl1VjZIZzQvbmJQenJUODFaOGZTUytRRXZnbWFBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiN2JMc0NvVEhXMjg4SUNvRXpMWHB0ZmN0VzNnanZ3NGRwQXkrSU1HTGVhbTBDZXVYSmtVdTNjLzlsQ0pIM3Z2eTY1TDIwZFAyRHVkT0xDWHduU3FnZ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDUxNzY5NzUyOjExQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlE3ekYzbGpZdWRTanZOYW1xVEs2ampGa3lvTnA0YjM3QTJRSm5VT1VvRXUifX1dLCJwbGF0Zm9ybSI6InNtYmkiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjE0MzAxNzUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTWQzIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
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
