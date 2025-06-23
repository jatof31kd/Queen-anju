ههه//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "session id",ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUkrZnc4VURyM1VJZWxTUTEvUXB1OVFQcHo3cjBnUjEvK0pQTTFGU1hsMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVjhmdVVmeE1CWmZ4OUNoc1VGTHEzVHlaWjRPdVREdlpuanpKYXVZS3ZWZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZUGRGQ0RCdFE4L3BzVDhKT0V2YzNGdVlmOThDWTZ1Y1dEK1d4SDR6TW1jPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrb0pZUmxYWWFzZ3pRbTVNNEY2S2s3cnFmd3JuRE13V3AwY1BMOVJDU3k0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdGTHBiNi9DVUxVdU0wNFhvRWpDQ0xzYitWbll5WGwwUzZJVERnbGZvRkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRxUWI1aDdzd1hncjZ6N2E3V2RSdUpxM1NlVFEzeXN3S2ZDY3o2SnBkVU09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0tZR1dSN0lmM1UveGZIL1BjVW1LRTFqSXdldVBWNzYvZmZMaFhRMExYND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmF4TFNCZFFpZHVnWXZGMyt4OStrc05DNnlRRnlLYTduYnQzdlR1VkV4RT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlM4d2JpcGFGaUQ5VnNUUkhhcnVFRCtHM3lySC9laTlkcG1RcnJVZTA3NndRQndwMjQveVhhS2NJVVZzdEU2RUxJWXhld3NsZkdyZ0c0bVUzVHp6QWdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzEsImFkdlNlY3JldEtleSI6InVtMUVmS0JjZXQxMXNoWmxVZmxmcDdEM1hhaW42NzlRUllNc2lzVlJ6TzQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InJySkQtM3FEVE1lVlJWNzYtbVQ2OVEiLCJwaG9uZUlkIjoiNWJjOGQ2ODctZWI1Ny00OGRlLWI0MWItNTlhNmMzNzkzYTg2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRRc0x2YU5hVUowZEJadWY3dmpTZ1dSazdrRT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiaThRNHViWkVGTlMzOG5ETjBpTlFUdHBzaWs9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTUg0MU4zUEgiLCJtZSI6eyJpZCI6IjIxMjY4MDgyMTk4MTo2OUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjEyMTIyMTY2MDMwMzU4ODo2OUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tTMHhlWUhFUHpKNU1JR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InlZcURyTDJTTVZvcGFJTTVXQU0rMVZkZ2FzakZBUUR5d3Q1dVN2VjY3d2M9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ii9Idm50VmRtSUpkR2RsS3F0aitrMUh0Ylh1U0NjVGpMZStkU0NQTUJrSXBsaC9GNXlOQTA5VS9uZ3hiQ1FqYlVYT29JbXJtUkZReURlQnFSbnpnUUJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ2cG9SN0xwK0phVVJGV2RVRUlObHdWbDI0TkVVSE9DbFpYYmNxQUE3cGJ6WFJHSE5IOG4vR3F1S0podUl0UjhXMEdqL0ZURGpvbGQ4RUxlNnNVVExqQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIxMjY4MDgyMTk4MTo2OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjbUtnNnk5a2pGYUtXaURPVmdEUHRWWFlHckl4UUVBOHNMZWJrcjFldThIIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQU1JQ1E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTA2NzI2NTAsImxhc3RQcm9wSGFzaCI6IjNSOVozOSJ9
  BOT_NUMBER:
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
