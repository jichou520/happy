var body = $response.body;
var objc = JSON.parse(body);

objc = {
  "_id": {
    "$oid": "5f22137c506d343c282972ba"
  },
  "watchList": [{
    "app": [],
    "title": null,
    "info": null,
    "up": 0,
    "down": 0,
    "comment": 0,
    "watch": 0,
    "user": null
  }],
  "username": "freeapp",
  "premium": true,
  "mod": true,
  "private": false,
  "region": "CN",
  "wish": ["https://is2-ssl.mzstatic.com/image/thumb/Purple116/v4/3b/b6/a8/3bb6a81e-b6cf-0e49-2640-938eba3d75aa/AppIcon-1x_U007emarketing-0-9-0-85-220.png/{w}x{h}{c}.{f}", "https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/ed/b0/01/edb001dd-bf10-2a23-3031-e6630923e3f5/AppIcon-1x_U007emarketing-0-7-0-85-220.png/{w}x{h}{c}.{f}", "https://is2-ssl.mzstatic.com/image/thumb/Purple112/v4/7b/6d/ce/7b6dce79-c953-aee2-d705-8b3eee0e7dc3/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/{w}x{h}{c}.{f}"],
  "own": ["https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/2a/7b/62/2a7b627f-b041-7d47-3945-de65ad31f065/AppIcon-0-0-1x_U007emarketing-0-0-0-7-85-220.png/{w}x{h}{c}.{f}", "https://is4-ssl.mzstatic.com/image/thumb/Purple71/v4/6a/ab/eb/6aabeb33-b304-714d-f812-b825d1584e1a/pr_source.png/{w}x{h}{c}.{f}", "https://is2-ssl.mzstatic.com/image/thumb/Purple116/v4/99/7c/22/997c22a8-0568-205b-26cc-72bc76350a02/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/{w}x{h}{c}.{f}"],
  "up": ["https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/f3/5b/f8/f35bf8e1-c629-e7a0-12b2-7848b0f63fa9/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/{w}x{h}{c}.{f}", "https://is2-ssl.mzstatic.com/image/thumb/Purple114/v4/18/c2/c5/18c2c536-36a1-664a-23d9-370dfb40f574/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/{w}x{h}{c}.{f}", "https://is3-ssl.mzstatic.com/image/thumb/Purple122/v4/90/ad/60/90ad602d-ba18-2af9-3be8-0b62b4f353a1/logo_voice_2020q4_color-0-1x_U007emarketing-0-0-0-6-0-0-85-220.png/{w}x{h}{c}.{f}"],
  "down": [],
  "follows": [{
    "$oid": "602d8956c8adc7444a4cf6d6"
  }],
  "follower": [{
    "$oid": "62923a1f86e4c23d442ed533"
  }, {
    "$oid": "5e5b5a844eacc33eb4d64982"
  }, {
    "$oid": "5f047288d7e51331c576fb67"
  }],
  "image": {
    "$oid": "000000000000000000000005"
  },
  "wishCount": 75,
  "ownCount": 1455,
  "upCount": 8,
  "downCount": 0,
  "followsCount": 1,
  "followerCount": 6,
  "listCount": 0,
  "list": [{
    "app": [],
    "title": null,
    "info": null,
    "up": 0,
    "down": 0,
    "comment": 0,
    "watch": 0,
    "user": null
  }],
  "watchListCount": 0,
  "commentApp": [],
  "commentAppCount": 0,
  "totalCommentAppCount": 0,
  "upArtistCount": 0,
  "downArtistCount": 0,
  "watchArtistCount": 0,
  "youfollow": 0,
  "yourfollower": 0
}

body = JSON.stringify(objc);
$done({ 
    body 
});