/* Copyright (C) 2024 DX-MODS.
Licensed under the MIT License;
you may not use this file except in compliance with the License.
WhatsBixby - Ziyan
*/

const { Bixby, isPublic } = require("../lib");
const { BASE_URL, API_KEY, CAPTION } = require("../config");
const {bixbybuffer} = require('bixby-md');

Bixby({
 pattern: "yt-thumb ?(.*)",
 fromMe: isPublic,  
 desc: "downloader"
},

async(message , match)=>{
match = match || message.reply_message.text;
    if (!match.includes("youtu.be")) return await message.reply("*enter yt url to download");

(function(_0x2a93d0,_0x2a6b9e){var _0x16ed30=_0x2a93d0();function _0x4f9464(_0x1044cb,_0x5f0689,_0xe06f3a,_0x4870f0,_0x371b68){return Ziyan_0x32da(_0xe06f3a- -0x2a5,_0x4870f0);}function _0x2ef4e3(_0x40c9f8,_0xa1e2c1,_0x1ea1da,_0x2d2704,_0x46bd5a){return Ziyan_0x32da(_0x1ea1da- -0x43,_0xa1e2c1);}function _0x224529(_0x35053c,_0x38466a,_0x5ab3a2,_0x3f54fe,_0x1e488d){return Ziyan_0x32da(_0x38466a- -0xf7,_0x5ab3a2);}function _0x532f00(_0x355927,_0x58e875,_0x417557,_0x168928,_0x31515a){return Ziyan_0x32da(_0x31515a- -0x24e,_0x58e875);}function _0x70344e(_0x795a1a,_0x357cb0,_0x5b6f01,_0x150570,_0x4e969a){return Ziyan_0x32da(_0x795a1a-0x224,_0x5b6f01);}while(!![]){try{var _0x55b890=parseInt(_0x2ef4e3(0xac,0xa1,0xa4,0xa3,0xa3))/(0x81*-0x1a+0x1*0x232b+-0x1610)+parseInt(_0x4f9464(-0x1bc,-0x1b7,-0x1b8,-0x1b1,-0x1b6))/(-0x67e+0x1*-0x6e6+-0x2*-0x6b3)*(-parseInt(_0x4f9464(-0x1c2,-0x1b5,-0x1bd,-0x1b8,-0x1b5))/(-0xd04+-0x1aa5+-0x1*-0x27ac))+-parseInt(_0x4f9464(-0x1c2,-0x1c2,-0x1bb,-0x1b6,-0x1b3))/(-0xcc2+0x1fe3+-0x131d*0x1)*(-parseInt(_0x224529(-0x9,-0x8,-0xd,-0x5,-0x7))/(-0x161f+-0x43*0xc+0x1948))+-parseInt(_0x70344e(0x30d,0x314,0x30f,0x305,0x308))/(-0x1*0x14b3+0x1d9+0x12e0)+parseInt(_0x532f00(-0x154,-0x15a,-0x15d,-0x15a,-0x15b))/(-0x1*-0x1507+-0x1*-0x269b+0x3b9b*-0x1)*(parseInt(_0x70344e(0x316,0x30e,0x30e,0x317,0x310))/(0xf4f+0xd*0x1de+-0x278d))+parseInt(_0x2ef4e3(0xa4,0xa7,0xa1,0xa0,0xa8))/(-0x1e71+-0x1b44+0x185*0x26)*(parseInt(_0x224529(-0x13,-0xc,-0x6,-0x9,-0x12))/(-0x58*-0x68+-0x7*0x157+-0x1a55))+-parseInt(_0x70344e(0x314,0x310,0x30c,0x31b,0x30d))/(0x374*-0x4+-0x26e7*0x1+-0x1*-0x34c2);if(_0x55b890===_0x2a6b9e)break;else _0x16ed30['push'](_0x16ed30['shift']());}catch(_0x25d96f){_0x16ed30['push'](_0x16ed30['shift']());}}}(Ziyan_0x2921,0x3c3b4+0xe1873+-0x3*0x32c89));var parts=match[Ziyan_0x4b177a(0x159,0x15a,0x158,0x157,0x158)](Ziyan_0x4b177a(0x151,0x14d,0x14a,0x155,0x150));function Ziyan_0x433d6c(_0x34b1a8,_0x40d819,_0x107885,_0xd39a5,_0x298898){return Ziyan_0x32da(_0x40d819-0xed,_0x298898);}function Ziyan_0x305155(_0x4ce5f0,_0x5090d5,_0x58796d,_0x5a7447,_0x7d60a6){return Ziyan_0x32da(_0x5090d5- -0x7e,_0x4ce5f0);}var id=parts[0x2475+-0x1de*-0x8+0x2e*-0x11e],ampersandPosition=id[Ziyan_0x4b177a(0x163,0x161,0x15c,0x158,0x15b)+'Of']('?');function Ziyan_0x3dc706(_0x4168de,_0x5c7b44,_0x9726e8,_0x1f6ffe,_0x3b2dde){return Ziyan_0x32da(_0x1f6ffe- -0x3a3,_0x3b2dde);}function Ziyan_0x32da(_0x4a5ba8,_0x1c9e4b){var _0x2d5e44=Ziyan_0x2921();return Ziyan_0x32da=function(_0x320090,_0x1a4d2e){_0x320090=_0x320090-(0x1bf0+-0x1*-0x2412+0x6*-0xa85);var _0x25b804=_0x2d5e44[_0x320090];return _0x25b804;},Ziyan_0x32da(_0x4a5ba8,_0x1c9e4b);}function Ziyan_0x577014(_0x15f5ad,_0x15fd1b,_0x1fc288,_0x19f5bc,_0x3c6c39){return Ziyan_0x32da(_0x3c6c39- -0x1c8,_0x19f5bc);}function Ziyan_0x4b177a(_0x5c146f,_0x3775b7,_0x2651f3,_0x2a7437,_0x410a0e){return Ziyan_0x32da(_0x410a0e-0x6a,_0x2a7437);}ampersandPosition!=-(0x2*-0x890+-0x1*0x1e9e+0x2fbf*0x1)&&(id=id[Ziyan_0x577014(-0xd7,-0xd9,-0xd5,-0xdd,-0xdc)+Ziyan_0x305155(0x66,0x67,0x6f,0x63,0x6d)](0x1cea*-0x1+0xed*0xf+0xf07,ampersandPosition));function Ziyan_0x2921(){var _0x47241b=['.be/','302063qQNggU','9BeybQb','1043988zfGhYa','12580pQuVah','70eUrEWV','subst','342642eQuHrF','split','1570PcOLId','16605314jQIOSv','index','3234360rQdmZT','7VbiodL','1350117PJcPQY','ring'];Ziyan_0x2921=function(){return _0x47241b;};return Ziyan_0x2921();}

var api_url = `${BASE_URL}api/yt-thumb?text=${id}&apikey=${API_KEY}`
var image = await bixbybuffer(api_url);
const buttonMessage = {
    image: image,
    caption: CAPTION,
}

message.client.sendMessage(message.jid, buttonMessage, { quoted: message })

})
