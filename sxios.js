/**************************************

作者：Sliverkiss

微信公众号 烟花ios 多账号版本 签到 积分可以兑换AppStore付费应用账号

2023.10.10 由于不可控原因，烟花ios的网站进入，临时改为松鼠ios
2023.10.17 增加延迟，优化代码逻辑，修复多账号运行脚本时出现"非法请求，请重新尝试"的问题

网址入口：ios.xiezhenge.com，复制到微信打开

脚本兼容：Surge、QuantumultX、Loon、Shadowrocket、Node.js
只测试过loon、圈X和青龙，其它环境请自行尝试

*************************
【 签到脚本使用教程 】:
*************************

青龙：
1.登录后抓包 https://ios.xiezhenge.com/user , 找到 Cookie，填写到sxios_data,多账号用 @ 分割
2.可选推送：将bark的key填写到bark_key，不填默认使用青龙自带的推送

Loon: 
1.复制Cookie脚本到本地
2.打开小程序->个人中心->登录后刷新，确保拿到完整的Cookie，若提示获取Cookie成功则可以使用该脚本
3.关闭Cookie脚本
------------------------------------------
loon
------------------------------------------
[Script]
cron "10 8 * * *" script-path=sxios.js, timeout=10, tag=松鼠ios
http-request ^https\:\/\/ios\.xiezhenge\.com\/user script-path=sxios.js,timeout=10, tag=松鼠ios获取token
[MITM]
hostname = ios.xiezhenge.com
------------------------------------------
QuantumultX
------------------------------------------
[rewrite_local]
^https\:\/\/ios\.xiezhenge\.com\/user url script-request-header https://github.com/jichou520/happy/blob/main/sxios.js

[mitm]
hostname =ios.xiezhenge.com
====================================

⚠️【免责声明】
------------------------------------------
1、此脚本仅用于学习研究，不保证其合法性、准确性、有效性，请根据情况自行判断，本人对此不承担任何保证责任。
2、由于此脚本仅用于学习研究，您必须在下载后 24 小时内将所有内容从您的计算机或手机或任何存储设备中完全删除，若违反规定引起任何事件本人对此均不负责。
3、请勿将此脚本用于任何商业或非法目的，若违反规定请自行对此负责。
4、此脚本涉及应用与本人无关，本人对因此引起的任何隐私泄漏或其他后果不承担任何责任。
5、本人对任何脚本引发的问题概不负责，包括但不限于由脚本错误引起的任何损失和损害。
6、如果任何单位或个人认为此脚本可能涉嫌侵犯其权利，应及时通知并提供身份证明，所有权证明，我们将在收到认证文件确认后删除此脚本。
7、所有直接或间接使用、查看此脚本的人均应该仔细阅读此声明。本人保留随时更改或补充此声明的权利。一旦您使用或复制了此脚本，即视为您已接受此免责声明。

******************************************/

// env.js 全局
const _0x285486=_0x18da;(function(_0x1e31da,_0x127f9f){const _0x2e87bf=_0x18da,_0x4a6de4=_0x1e31da();while(!![]){try{const _0x5090ed=parseInt(_0x2e87bf(0x1a2))/0x1+parseInt(_0x2e87bf(0x21a))/0x2+parseInt(_0x2e87bf(0x1b8))/0x3*(-parseInt(_0x2e87bf(0x1bb))/0x4)+-parseInt(_0x2e87bf(0x216))/0x5*(-parseInt(_0x2e87bf(0x226))/0x6)+parseInt(_0x2e87bf(0x1a3))/0x7*(parseInt(_0x2e87bf(0x206))/0x8)+-parseInt(_0x2e87bf(0x1a0))/0x9*(parseInt(_0x2e87bf(0x1aa))/0xa)+parseInt(_0x2e87bf(0x23c))/0xb*(-parseInt(_0x2e87bf(0x1de))/0xc);if(_0x5090ed===_0x127f9f)break;else _0x4a6de4['push'](_0x4a6de4['shift']());}catch(_0x2f8f08){_0x4a6de4['push'](_0x4a6de4['shift']());}}}(_0x131c,0x41d94));const $=new Env(_0x285486(0x1d3)),ckName=_0x285486(0x21e),Notify=0x1,notify=$['isNode']()?require('./sendNotify'):'';let envSplitor=['@'],userCookie=($['isNode']()?process['env'][ckName]:$[_0x285486(0x220)](ckName))||'',userList=[],userIdx=0x0,userCount=0x0,host='ios.xiezhenge.com';function _0x18da(_0x814c01,_0x50e194){const _0x131cce=_0x131c();return _0x18da=function(_0x18da82,_0x5dfa0e){_0x18da82=_0x18da82-0x19b;let _0x4e1065=_0x131cce[_0x18da82];return _0x4e1065;},_0x18da(_0x814c01,_0x50e194);}$[_0x285486(0x255)]=[],$['barkKey']=($[_0x285486(0x1bc)]()?process[_0x285486(0x1e2)]['bark_key']:$[_0x285486(0x220)]('bark_key'))||'';async function main(){const _0x105bca=_0x285486;console['log'](_0x105bca(0x1e3));let _0x2a3c30=[];for(let _0x2ad8ce of userList){_0x2ad8ce[_0x105bca(0x1ca)]==!![]?(DoubleLog(_0x105bca(0x249)+_0x2ad8ce[_0x105bca(0x19e)]+_0x105bca(0x22a)),console[_0x105bca(0x1fa)]('随机延迟'+_0x2ad8ce[_0x105bca(0x1bf)]()+'ms'),_0x2a3c30[_0x105bca(0x222)](await _0x2ad8ce['nonce']()),await $['wait'](_0x2ad8ce['getRandomTime']()),_0x2a3c30[_0x105bca(0x222)](await _0x2ad8ce[_0x105bca(0x1b5)]()),await $[_0x105bca(0x1b2)](_0x2ad8ce['getRandomTime']())):$[_0x105bca(0x255)][_0x105bca(0x222)](_0x105bca(0x208)+_0x2ad8ce[_0x105bca(0x19e)]+'\x20>>\x20Check\x20ck\x20error!');}await Promise[_0x105bca(0x1bd)](_0x2a3c30);}class UserInfo{constructor(_0x967b75){const _0x1d5e99=_0x285486;this[_0x1d5e99(0x19e)]=++userIdx,this['ck']=_0x967b75,this[_0x1d5e99(0x1ca)]=!![],this['headers']={'Content-Type':'application/x-www-form-urlencoded;\x20charset=UTF-8','Cookie':this['ck']};}[_0x285486(0x1bf)](){return randomInt(0x1388,0x1b58);}async[_0x285486(0x1b5)](){const _0xd8c150=_0x285486;try{const _0x5f3255={'url':'https://'+host+_0xd8c150(0x22c),'headers':this['headers'],'body':_0xd8c150(0x23d)+this['nonceVal']};let _0x26cbc7=await httpRequest(_0x5f3255);_0x26cbc7[_0xd8c150(0x212)]==0x1?DoubleLog('✅'+_0x26cbc7?.[_0xd8c150(0x248)]):DoubleLog('🔶'+(_0x26cbc7?.[_0xd8c150(0x248)]||'❌签到失败！'));}catch(_0x18d9e5){console['log'](_0x18d9e5);}}async[_0x285486(0x24b)](){const _0x3c0621=_0x285486;try{let _0x26625d={'url':_0x3c0621(0x1ff)+host+_0x3c0621(0x239),'headers':this['headers']};$[_0x3c0621(0x1af)](_0x26625d,(_0x3fc4c8,_0x31d5d8,_0x29000e)=>{const _0xfd490e=_0x3c0621;var _0x1f6166=/data-nonce=\"(.*)\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"每日签到奖励: 0.3积分\"\>/;_0x31d5d8[_0xfd490e(0x1f6)]?.['search'](_0x1f6166)!=-0x1?(this[_0xfd490e(0x1cb)]=_0x1f6166['exec'](_0x31d5d8[_0xfd490e(0x1f6)])[0x1],$[_0xfd490e(0x1fa)](_0xfd490e(0x1be))):$['log'](_0xfd490e(0x208)+this['index']+'\x20>>\x20Check\x20ck\x20error!');});}catch(_0x42f178){throw new Error('❌运行错误，原因为：'+_0x42f178);}}}async function getCookie(){const _0x47d05e=_0x285486;if($request&&$request[_0x47d05e(0x247)]!='OPTIONS'){const _0x249c5f=$request[_0x47d05e(0x207)]['Cookie']||$request['headers'][_0x47d05e(0x19c)]||$request[_0x47d05e(0x207)][_0x47d05e(0x20e)];_0x249c5f?($['setdata'](_0x249c5f,ckName),$['msg']($['name'],'',_0x47d05e(0x20a))):$['msg']($['name'],'',_0x47d05e(0x1d9));}}!(async()=>{const _0x2b65b3=_0x285486;if(typeof $request!=_0x2b65b3(0x1cc)){await getCookie();return;}if(!await checkEnv())throw new Error(_0x2b65b3(0x1e6));;userList[_0x2b65b3(0x202)]>0x0&&await main();$[_0x2b65b3(0x1d7)]&&await BarkNotify($,$[_0x2b65b3(0x1d7)],$['name'],$[_0x2b65b3(0x255)][_0x2b65b3(0x22d)]('\x0a'));;})()[_0x285486(0x1f0)](_0x1a920c=>$[_0x285486(0x255)][_0x285486(0x222)](_0x1a920c[_0x285486(0x1c4)]||_0x1a920c))[_0x285486(0x1c9)](async()=>{const _0x3e750e=_0x285486;await SendMsg($[_0x3e750e(0x255)][_0x3e750e(0x22d)]('\x0a')),$['done']();});function DoubleLog(_0x1b3a14){const _0x1e7f73=_0x285486;$['isNode']()?_0x1b3a14&&(console[_0x1e7f73(0x1fa)](''+_0x1b3a14),$[_0x1e7f73(0x255)][_0x1e7f73(0x222)](''+_0x1b3a14)):(console[_0x1e7f73(0x1fa)](''+_0x1b3a14),$[_0x1e7f73(0x255)]['push'](''+_0x1b3a14));}function toParams(_0x4463ec){const _0x26dfc0=_0x285486;var _0x2aa79f=Object['keys'](_0x4463ec)[_0x26dfc0(0x213)](function(_0x77236e){return encodeURIComponent(_0x77236e)+'='+encodeURIComponent(_0x4463ec[_0x77236e]);})[_0x26dfc0(0x22d)]('&');return _0x2aa79f;}async function checkEnv(){const _0x437693=_0x285486;if(userCookie){let _0x1ddcd7=envSplitor[0x0];for(let _0xf351a of envSplitor)if(userCookie['indexOf'](_0xf351a)>-0x1){_0x1ddcd7=_0xf351a;break;}for(let _0x26e9da of userCookie['split'](_0x1ddcd7))_0x26e9da&&userList[_0x437693(0x222)](new UserInfo(_0x26e9da));userCount=userList[_0x437693(0x202)];}else{console[_0x437693(0x1fa)](_0x437693(0x1a7));return;}return console[_0x437693(0x1fa)](_0x437693(0x22f)+userCount+_0x437693(0x23a)),!![];}function randomInt(_0x4bde5b,_0xbf7524){const _0x55ebfc=_0x285486;return Math[_0x55ebfc(0x24a)](Math['random']()*(_0xbf7524-_0x4bde5b)+_0x4bde5b);}async function SendMsg(_0x38e41d){const _0x3ce43f=_0x285486;if(!_0x38e41d)return;Notify>0x0?$[_0x3ce43f(0x1bc)]()?await notify[_0x3ce43f(0x1ef)]($[_0x3ce43f(0x24c)],_0x38e41d):$[_0x3ce43f(0x248)]($[_0x3ce43f(0x24c)],'',_0x38e41d):console['log'](_0x38e41d);}function httpRequest(_0x2d231b,_0x27782b){const _0x1fa07f=_0x285486;return typeof _0x27782b===_0x1fa07f(0x1cc)?'body'in _0x2d231b?_0x27782b=_0x1fa07f(0x1af):_0x27782b=_0x1fa07f(0x1cf):_0x27782b=_0x27782b,new Promise(_0x5bcde7=>{$[_0x27782b](_0x2d231b,(_0x44005e,_0x4cb94e,_0x68e1c8)=>{const _0x2e7ed6=_0x18da;try{_0x44005e?(console[_0x2e7ed6(0x1fa)](_0x27782b+_0x2e7ed6(0x234)),$['logErr'](_0x44005e)):_0x68e1c8?(typeof JSON[_0x2e7ed6(0x1a5)](_0x68e1c8)=='object'?_0x68e1c8=JSON[_0x2e7ed6(0x1a5)](_0x68e1c8):_0x68e1c8=_0x68e1c8,_0x5bcde7(_0x68e1c8)):console[_0x2e7ed6(0x1fa)](_0x2e7ed6(0x1b0));}catch(_0x15092d){$[_0x2e7ed6(0x19d)](_0x15092d,_0x4cb94e);}finally{_0x5bcde7();}});});}async function BarkNotify(_0x36480c,_0x47242f,_0x1c9ff1,_0x2850f8){const _0x11dae9=_0x285486;for(let _0x307fcf=0x0;_0x307fcf<0x3;_0x307fcf++){console['log'](_0x11dae9(0x217)+(_0x307fcf+0x1)+')');const _0x33ac85=await new Promise(_0x33b732=>{const _0x4123c6=_0x11dae9;_0x36480c[_0x4123c6(0x1af)]({'url':'https://api.day.app/push','headers':{'Content-Type':_0x4123c6(0x1ae)},'body':JSON[_0x4123c6(0x1e4)]({'title':_0x1c9ff1,'body':_0x2850f8,'device_key':_0x47242f,'ext_params':{'group':_0x1c9ff1}})},(_0x32091e,_0x5b98f5,_0x35d603)=>_0x5b98f5&&_0x5b98f5[_0x4123c6(0x212)]==0xc8?_0x33b732(0x1):_0x33b732(_0x35d603||_0x32091e));});if(_0x33ac85===0x1){console[_0x11dae9(0x1fa)](_0x11dae9(0x200));break;}else console[_0x11dae9(0x1fa)](_0x11dae9(0x21c)+(_0x33ac85[_0x11dae9(0x1c4)]||_0x33ac85));}}function _0x131c(){const _0x286582=['get','toString','getTime','loaddata','松鼠ios','initGotEnv','resolve','readFileSync','barkKey','Stash','错误获取签到Cookie失败','tough-cookie','UndefinedError','lodash_get','logs','12NNgyDT','getFullYear','setdata','getMinutes','env','\x0a==================\x20任务\x20==================\x0a','stringify','application/x-www-form-urlencoded','❌未检测到ck，请添加环境变量','content-length','logSeparator','isLoon','.$1','Node.js','getEnv','getjson','isShadowrocket','sendNotify','catch','content-type','exit','updatePasteboard','setCookieSync','isMuteLog','body','http','done','getHours','log','dataFile','error','abs','path','https://','✅Push\x20success!','Content-Type','length','openUrl','media-url','setval','111392Lrcpav','headers','❌账号','cron','获取签到Cookie成功🎉','opts','*/*','CookieJar','COOKIE','runScript','isStash','set-cookie','status','map','timeout','cookieJar','5NkLCHB','🔷Bark\x20notify\x20>>\x20Start\x20push\x20(','ckjar','encoding','19906ETuZza','time','❌Push\x20failed!\x20>>\x20','@chavy_boxjs_userCfgs.httpapi','sxios_data','getMonth','getdata','floor','push','substr','params','isQuanX','2839098cZVydz','getval','iconv-lite','object','\x20>>\x20Start\x20work','data','/wp-admin/admin-ajax.php','join',',\x20错误!','共找到','existsSync','writedata','url','fetch','请求失败','box.dat','Quantumult\x20X','Surge','isSurge','/user','个账号','utf-8','5879137MaSlzN','action=user_qiandao&nonce=','isMute','got','rawBody','decode','send','string','replace','stack','exports','method','msg','🔷账号','round','nonce','name','update-pasteboard','toLocaleLowerCase','lodash_set','statusCode','Cookie','isArray','isNeedRewrite','getMilliseconds','notifyMsg','write','cookie','logErr','index','open-url','9IwvoAx','mediaUrl','410694NLOUhe','161hGmErZ','assign','parse','getScript','未找到CK','trim','queryStr','3232310voLtug','stash-version','test','cktough','application/json','post','请求api返回数据为空，请检查自身原因','null','wait','Content-Length','read','signin','Loon','Shadowrocket','130002mdUspP','slice','cwd','8XjmtIS','isNode','all','✅验证成功！','getRandomTime','then','toObj','GET','startTime','message','getSeconds','exec','concat','writeFileSync','finally','ckStatus','nonceVal','undefined','call','@chavy_boxjs_userCfgs.httpapi_timeout'];_0x131c=function(){return _0x286582;};return _0x131c();};function Env(_0x2d81b4,_0x65a8b6){const _0x2de72c=_0x285486;class _0x1e2ff0{constructor(_0x2c4b4f){const _0x3a941b=_0x18da;this[_0x3a941b(0x1e2)]=_0x2c4b4f;}[_0x2de72c(0x242)](_0x4db7c3,_0x1e918d=_0x2de72c(0x1c2)){const _0x293140=_0x2de72c;_0x4db7c3='string'==typeof _0x4db7c3?{'url':_0x4db7c3}:_0x4db7c3;let _0x2a4258=this['get'];return'POST'===_0x1e918d&&(_0x2a4258=this[_0x293140(0x1af)]),new Promise((_0x338412,_0x24c72f)=>{const _0x28f6db=_0x293140;_0x2a4258[_0x28f6db(0x1cd)](this,_0x4db7c3,(_0x2f3cc1,_0x387a4c,_0x47a2cd)=>{_0x2f3cc1?_0x24c72f(_0x2f3cc1):_0x338412(_0x387a4c);});});}[_0x2de72c(0x1cf)](_0x2cde76){const _0x25bd87=_0x2de72c;return this[_0x25bd87(0x242)]['call'](this[_0x25bd87(0x1e2)],_0x2cde76);}[_0x2de72c(0x1af)](_0x59b35a){const _0x17cb69=_0x2de72c;return this[_0x17cb69(0x242)][_0x17cb69(0x1cd)](this[_0x17cb69(0x1e2)],_0x59b35a,'POST');}}return new class{constructor(_0xa7bcb0,_0x32fa09){const _0x470aa9=_0x2de72c;this['name']=_0xa7bcb0,this[_0x470aa9(0x1f7)]=new _0x1e2ff0(this),this[_0x470aa9(0x22b)]=null,this[_0x470aa9(0x1fb)]=_0x470aa9(0x235),this[_0x470aa9(0x1dd)]=[],this['isMute']=!0x1,this['isNeedRewrite']=!0x1,this[_0x470aa9(0x1e8)]='\x0a',this[_0x470aa9(0x219)]=_0x470aa9(0x23b),this['startTime']=new Date()['getTime'](),Object['assign'](this,_0x32fa09),this['log']('','🔔'+this[_0x470aa9(0x24c)]+',\x20开始!');}[_0x2de72c(0x1ec)](){const _0x40a701=_0x2de72c;return _0x40a701(0x1cc)!=typeof $environment&&$environment['surge-version']?_0x40a701(0x237):_0x40a701(0x1cc)!=typeof $environment&&$environment[_0x40a701(0x1ab)]?_0x40a701(0x1d8):_0x40a701(0x1cc)!=typeof module&&module[_0x40a701(0x246)]?'Node.js':_0x40a701(0x1cc)!=typeof $task?_0x40a701(0x236):'undefined'!=typeof $loon?_0x40a701(0x1b6):_0x40a701(0x1cc)!=typeof $rocket?'Shadowrocket':void 0x0;}[_0x2de72c(0x1bc)](){const _0x4cc03b=_0x2de72c;return _0x4cc03b(0x1eb)===this['getEnv']();}[_0x2de72c(0x225)](){const _0x2154c0=_0x2de72c;return _0x2154c0(0x236)===this['getEnv']();}['isSurge'](){const _0x3e80c6=_0x2de72c;return _0x3e80c6(0x237)===this['getEnv']();}[_0x2de72c(0x1e9)](){const _0x524be1=_0x2de72c;return _0x524be1(0x1b6)===this[_0x524be1(0x1ec)]();}[_0x2de72c(0x1ee)](){return'Shadowrocket'===this['getEnv']();}[_0x2de72c(0x210)](){const _0x1ac149=_0x2de72c;return _0x1ac149(0x1d8)===this[_0x1ac149(0x1ec)]();}[_0x2de72c(0x1c1)](_0x18a2ab,_0x879e55=null){const _0x28d5a3=_0x2de72c;try{return JSON[_0x28d5a3(0x1a5)](_0x18a2ab);}catch{return _0x879e55;}}['toStr'](_0x384cf6,_0x277ab4=null){const _0x354471=_0x2de72c;try{return JSON[_0x354471(0x1e4)](_0x384cf6);}catch{return _0x277ab4;}}[_0x2de72c(0x1ed)](_0x11ee0f,_0x308e9e){const _0x1401e2=_0x2de72c;let _0x5878b3=_0x308e9e;const _0x5aca0a=this[_0x1401e2(0x220)](_0x11ee0f);if(_0x5aca0a)try{_0x5878b3=JSON[_0x1401e2(0x1a5)](this['getdata'](_0x11ee0f));}catch{}return _0x5878b3;}['setjson'](_0x389d40,_0x4075ae){const _0x279fbb=_0x2de72c;try{return this[_0x279fbb(0x1e0)](JSON[_0x279fbb(0x1e4)](_0x389d40),_0x4075ae);}catch{return!0x1;}}[_0x2de72c(0x1a6)](_0x49bcd2){return new Promise(_0x1bcef0=>{const _0x207b90=_0x18da;this[_0x207b90(0x1cf)]({'url':_0x49bcd2},(_0x426773,_0x1fa1c7,_0x4e8c74)=>_0x1bcef0(_0x4e8c74));});}[_0x2de72c(0x20f)](_0x1f5afd,_0x19777f){const _0x53f2f8=_0x2de72c;return new Promise(_0x23b448=>{const _0x5af15a=_0x18da;let _0x15cf8c=this[_0x5af15a(0x220)](_0x5af15a(0x21d));_0x15cf8c=_0x15cf8c?_0x15cf8c[_0x5af15a(0x244)](/\n/g,'')[_0x5af15a(0x1a8)]():_0x15cf8c;let _0x29ef9c=this[_0x5af15a(0x220)](_0x5af15a(0x1ce));_0x29ef9c=_0x29ef9c?0x1*_0x29ef9c:0x14,_0x29ef9c=_0x19777f&&_0x19777f[_0x5af15a(0x214)]?_0x19777f['timeout']:_0x29ef9c;const [_0x23e05c,_0x45ace9]=_0x15cf8c['split']('@'),_0x1e68e6={'url':'http://'+_0x45ace9+'/v1/scripting/evaluate','body':{'script_text':_0x1f5afd,'mock_type':_0x5af15a(0x209),'timeout':_0x29ef9c},'headers':{'X-Key':_0x23e05c,'Accept':_0x5af15a(0x20c)},'timeout':_0x29ef9c};this['post'](_0x1e68e6,(_0x1ffbab,_0x126d37,_0x2879e6)=>_0x23b448(_0x2879e6));})[_0x53f2f8(0x1f0)](_0x21f783=>this[_0x53f2f8(0x19d)](_0x21f783));}[_0x2de72c(0x1d2)](){const _0x2d1e30=_0x2de72c;if(!this[_0x2d1e30(0x1bc)]())return{};{this['fs']=this['fs']?this['fs']:require('fs'),this[_0x2d1e30(0x1fe)]=this['path']?this['path']:require(_0x2d1e30(0x1fe));const _0x5d0b7c=this[_0x2d1e30(0x1fe)][_0x2d1e30(0x1d5)](this[_0x2d1e30(0x1fb)]),_0x3b3aaa=this[_0x2d1e30(0x1fe)][_0x2d1e30(0x1d5)](process[_0x2d1e30(0x1ba)](),this[_0x2d1e30(0x1fb)]),_0x16da26=this['fs']['existsSync'](_0x5d0b7c),_0x376ab0=!_0x16da26&&this['fs'][_0x2d1e30(0x230)](_0x3b3aaa);if(!_0x16da26&&!_0x376ab0)return{};{const _0xfe17c3=_0x16da26?_0x5d0b7c:_0x3b3aaa;try{return JSON[_0x2d1e30(0x1a5)](this['fs'][_0x2d1e30(0x1d6)](_0xfe17c3));}catch(_0x4fa321){return{};}}}}[_0x2de72c(0x231)](){const _0x4f9122=_0x2de72c;if(this[_0x4f9122(0x1bc)]()){this['fs']=this['fs']?this['fs']:require('fs'),this['path']=this[_0x4f9122(0x1fe)]?this['path']:require(_0x4f9122(0x1fe));const _0x59cde0=this[_0x4f9122(0x1fe)][_0x4f9122(0x1d5)](this['dataFile']),_0x172c22=this[_0x4f9122(0x1fe)][_0x4f9122(0x1d5)](process['cwd'](),this['dataFile']),_0x5d259c=this['fs']['existsSync'](_0x59cde0),_0x3f59b8=!_0x5d259c&&this['fs'][_0x4f9122(0x230)](_0x172c22),_0x4995b7=JSON[_0x4f9122(0x1e4)](this[_0x4f9122(0x22b)]);_0x5d259c?this['fs'][_0x4f9122(0x1c8)](_0x59cde0,_0x4995b7):_0x3f59b8?this['fs']['writeFileSync'](_0x172c22,_0x4995b7):this['fs']['writeFileSync'](_0x59cde0,_0x4995b7);}}[_0x2de72c(0x1dc)](_0x2338b7,_0x58da80,_0x517d0c){const _0x4c5e9d=_0x2de72c,_0x21a235=_0x58da80[_0x4c5e9d(0x244)](/\[(\d+)\]/g,_0x4c5e9d(0x1ea))['split']('.');let _0x481da4=_0x2338b7;for(const _0xdd3e52 of _0x21a235)if(_0x481da4=Object(_0x481da4)[_0xdd3e52],void 0x0===_0x481da4)return _0x517d0c;return _0x481da4;}[_0x2de72c(0x24f)](_0x196384,_0x4a710d,_0x21096d){const _0x2dfc78=_0x2de72c;return Object(_0x196384)!==_0x196384?_0x196384:(Array[_0x2dfc78(0x252)](_0x4a710d)||(_0x4a710d=_0x4a710d[_0x2dfc78(0x1d0)]()['match'](/[^.[\]]+/g)||[]),_0x4a710d[_0x2dfc78(0x1b9)](0x0,-0x1)['reduce']((_0x48d3b1,_0x599e99,_0x1ee1cb)=>Object(_0x48d3b1[_0x599e99])===_0x48d3b1[_0x599e99]?_0x48d3b1[_0x599e99]:_0x48d3b1[_0x599e99]=Math[_0x2dfc78(0x1fd)](_0x4a710d[_0x1ee1cb+0x1])>>0x0==+_0x4a710d[_0x1ee1cb+0x1]?[]:{},_0x196384)[_0x4a710d[_0x4a710d[_0x2dfc78(0x202)]-0x1]]=_0x21096d,_0x196384);}['getdata'](_0x4e6e7d){const _0x21046a=_0x2de72c;let _0x1c64e5=this[_0x21046a(0x227)](_0x4e6e7d);if(/^@/['test'](_0x4e6e7d)){const [,_0x1da37a,_0x38d1c0]=/^@(.*?)\.(.*?)$/['exec'](_0x4e6e7d),_0x2d9b6b=_0x1da37a?this[_0x21046a(0x227)](_0x1da37a):'';if(_0x2d9b6b)try{const _0x361182=JSON[_0x21046a(0x1a5)](_0x2d9b6b);_0x1c64e5=_0x361182?this['lodash_get'](_0x361182,_0x38d1c0,''):_0x1c64e5;}catch(_0x9887ca){_0x1c64e5='';}}return _0x1c64e5;}[_0x2de72c(0x1e0)](_0x52ef5b,_0x4f9bb6){const _0x2ea5e0=_0x2de72c;let _0x88548d=!0x1;if(/^@/[_0x2ea5e0(0x1ac)](_0x4f9bb6)){const [,_0x307dac,_0x22585e]=/^@(.*?)\.(.*?)$/[_0x2ea5e0(0x1c6)](_0x4f9bb6),_0x3e834b=this[_0x2ea5e0(0x227)](_0x307dac),_0x1acf30=_0x307dac?_0x2ea5e0(0x1b1)===_0x3e834b?null:_0x3e834b||'{}':'{}';try{const _0xefe388=JSON['parse'](_0x1acf30);this[_0x2ea5e0(0x24f)](_0xefe388,_0x22585e,_0x52ef5b),_0x88548d=this[_0x2ea5e0(0x205)](JSON['stringify'](_0xefe388),_0x307dac);}catch(_0x5ce9bd){const _0x3e156c={};this[_0x2ea5e0(0x24f)](_0x3e156c,_0x22585e,_0x52ef5b),_0x88548d=this[_0x2ea5e0(0x205)](JSON[_0x2ea5e0(0x1e4)](_0x3e156c),_0x307dac);}}else _0x88548d=this[_0x2ea5e0(0x205)](_0x52ef5b,_0x4f9bb6);return _0x88548d;}['getval'](_0x4e9b2a){const _0x1a056b=_0x2de72c;switch(this[_0x1a056b(0x1ec)]()){case _0x1a056b(0x237):case _0x1a056b(0x1b6):case'Stash':case _0x1a056b(0x1b7):return $persistentStore[_0x1a056b(0x1b4)](_0x4e9b2a);case _0x1a056b(0x236):return $prefs['valueForKey'](_0x4e9b2a);case _0x1a056b(0x1eb):return this['data']=this[_0x1a056b(0x1d2)](),this[_0x1a056b(0x22b)][_0x4e9b2a];default:return this['data']&&this['data'][_0x4e9b2a]||null;}}[_0x2de72c(0x205)](_0x138040,_0x36571a){const _0x30a9fa=_0x2de72c;switch(this[_0x30a9fa(0x1ec)]()){case _0x30a9fa(0x237):case _0x30a9fa(0x1b6):case _0x30a9fa(0x1d8):case _0x30a9fa(0x1b7):return $persistentStore[_0x30a9fa(0x19b)](_0x138040,_0x36571a);case _0x30a9fa(0x236):return $prefs['setValueForKey'](_0x138040,_0x36571a);case _0x30a9fa(0x1eb):return this['data']=this['loaddata'](),this[_0x30a9fa(0x22b)][_0x36571a]=_0x138040,this[_0x30a9fa(0x231)](),!0x0;default:return this[_0x30a9fa(0x22b)]&&this[_0x30a9fa(0x22b)][_0x36571a]||null;}}['initGotEnv'](_0x3dea72){const _0x8678ed=_0x2de72c;this['got']=this[_0x8678ed(0x23f)]?this[_0x8678ed(0x23f)]:require(_0x8678ed(0x23f)),this['cktough']=this[_0x8678ed(0x1ad)]?this['cktough']:require(_0x8678ed(0x1da)),this[_0x8678ed(0x218)]=this[_0x8678ed(0x218)]?this[_0x8678ed(0x218)]:new this[(_0x8678ed(0x1ad))][(_0x8678ed(0x20d))](),_0x3dea72&&(_0x3dea72[_0x8678ed(0x207)]=_0x3dea72['headers']?_0x3dea72['headers']:{},void 0x0===_0x3dea72[_0x8678ed(0x207)]['Cookie']&&void 0x0===_0x3dea72[_0x8678ed(0x215)]&&(_0x3dea72['cookieJar']=this[_0x8678ed(0x218)]));}[_0x2de72c(0x1cf)](_0x4bf768,_0x5a22b9=()=>{}){const _0x2365fb=_0x2de72c;switch(_0x4bf768['headers']&&(delete _0x4bf768[_0x2365fb(0x207)][_0x2365fb(0x201)],delete _0x4bf768[_0x2365fb(0x207)][_0x2365fb(0x1b3)],delete _0x4bf768['headers']['content-type'],delete _0x4bf768[_0x2365fb(0x207)][_0x2365fb(0x1e7)]),_0x4bf768[_0x2365fb(0x224)]&&(_0x4bf768[_0x2365fb(0x232)]+='?'+this[_0x2365fb(0x1a9)](_0x4bf768[_0x2365fb(0x224)])),this['getEnv']()){case _0x2365fb(0x237):case _0x2365fb(0x1b6):case _0x2365fb(0x1d8):case _0x2365fb(0x1b7):default:this[_0x2365fb(0x238)]()&&this[_0x2365fb(0x253)]&&(_0x4bf768[_0x2365fb(0x207)]=_0x4bf768['headers']||{},Object['assign'](_0x4bf768[_0x2365fb(0x207)],{'X-Surge-Skip-Scripting':!0x1})),$httpClient[_0x2365fb(0x1cf)](_0x4bf768,(_0x3055b6,_0x2497dd,_0x3b695d)=>{const _0x1ca2cb=_0x2365fb;!_0x3055b6&&_0x2497dd&&(_0x2497dd[_0x1ca2cb(0x1f6)]=_0x3b695d,_0x2497dd[_0x1ca2cb(0x250)]=_0x2497dd[_0x1ca2cb(0x212)]?_0x2497dd[_0x1ca2cb(0x212)]:_0x2497dd[_0x1ca2cb(0x250)],_0x2497dd['status']=_0x2497dd['statusCode']),_0x5a22b9(_0x3055b6,_0x2497dd,_0x3b695d);});break;case'Quantumult\x20X':this[_0x2365fb(0x253)]&&(_0x4bf768[_0x2365fb(0x20b)]=_0x4bf768[_0x2365fb(0x20b)]||{},Object[_0x2365fb(0x1a4)](_0x4bf768[_0x2365fb(0x20b)],{'hints':!0x1})),$task[_0x2365fb(0x233)](_0x4bf768)[_0x2365fb(0x1c0)](_0x4dcbad=>{const {statusCode:_0x48fbba,statusCode:_0x4e856d,headers:_0x4237d9,body:_0x2f4c77,bodyBytes:_0x3ee32c}=_0x4dcbad;_0x5a22b9(null,{'status':_0x48fbba,'statusCode':_0x4e856d,'headers':_0x4237d9,'body':_0x2f4c77,'bodyBytes':_0x3ee32c},_0x2f4c77,_0x3ee32c);},_0x5a3030=>_0x5a22b9(_0x5a3030&&_0x5a3030[_0x2365fb(0x1fc)]||_0x2365fb(0x1db)));break;case _0x2365fb(0x1eb):let _0x3b0c4b=require(_0x2365fb(0x228));this[_0x2365fb(0x1d4)](_0x4bf768),this[_0x2365fb(0x23f)](_0x4bf768)['on']('redirect',(_0x45796f,_0x325b6f)=>{const _0x6687aa=_0x2365fb;try{if(_0x45796f[_0x6687aa(0x207)]['set-cookie']){const _0x1bde84=_0x45796f[_0x6687aa(0x207)][_0x6687aa(0x211)]['map'](this[_0x6687aa(0x1ad)][_0x6687aa(0x251)][_0x6687aa(0x1a5)])[_0x6687aa(0x1d0)]();_0x1bde84&&this[_0x6687aa(0x218)][_0x6687aa(0x1f4)](_0x1bde84,null),_0x325b6f[_0x6687aa(0x215)]=this[_0x6687aa(0x218)];}}catch(_0x14b517){this[_0x6687aa(0x19d)](_0x14b517);}})[_0x2365fb(0x1c0)](_0x84fe35=>{const _0x19a5f7=_0x2365fb,{statusCode:_0x3ad4a9,statusCode:_0x15e1da,headers:_0x1287dd,rawBody:_0x4b6d6a}=_0x84fe35,_0x2de807=_0x3b0c4b[_0x19a5f7(0x241)](_0x4b6d6a,this[_0x19a5f7(0x219)]);_0x5a22b9(null,{'status':_0x3ad4a9,'statusCode':_0x15e1da,'headers':_0x1287dd,'rawBody':_0x4b6d6a,'body':_0x2de807},_0x2de807);},_0x1e6613=>{const _0x2b442b=_0x2365fb,{message:_0x2f7a44,response:_0xbd854f}=_0x1e6613;_0x5a22b9(_0x2f7a44,_0xbd854f,_0xbd854f&&_0x3b0c4b[_0x2b442b(0x241)](_0xbd854f[_0x2b442b(0x240)],this['encoding']));});}}[_0x2de72c(0x1af)](_0x3c1244,_0x193499=()=>{}){const _0x5ed2af=_0x2de72c,_0x1605ed=_0x3c1244[_0x5ed2af(0x247)]?_0x3c1244[_0x5ed2af(0x247)][_0x5ed2af(0x24e)]():_0x5ed2af(0x1af);switch(_0x3c1244[_0x5ed2af(0x1f6)]&&_0x3c1244[_0x5ed2af(0x207)]&&!_0x3c1244['headers'][_0x5ed2af(0x201)]&&!_0x3c1244[_0x5ed2af(0x207)][_0x5ed2af(0x1f1)]&&(_0x3c1244[_0x5ed2af(0x207)]['content-type']=_0x5ed2af(0x1e5)),_0x3c1244[_0x5ed2af(0x207)]&&(delete _0x3c1244['headers'][_0x5ed2af(0x1b3)],delete _0x3c1244[_0x5ed2af(0x207)][_0x5ed2af(0x1e7)]),this[_0x5ed2af(0x1ec)]()){case'Surge':case'Loon':case'Stash':case _0x5ed2af(0x1b7):default:this[_0x5ed2af(0x238)]()&&this['isNeedRewrite']&&(_0x3c1244[_0x5ed2af(0x207)]=_0x3c1244[_0x5ed2af(0x207)]||{},Object[_0x5ed2af(0x1a4)](_0x3c1244[_0x5ed2af(0x207)],{'X-Surge-Skip-Scripting':!0x1})),$httpClient[_0x1605ed](_0x3c1244,(_0x5beed4,_0x43f1d8,_0x3564c9)=>{const _0x3d5f7c=_0x5ed2af;!_0x5beed4&&_0x43f1d8&&(_0x43f1d8[_0x3d5f7c(0x1f6)]=_0x3564c9,_0x43f1d8[_0x3d5f7c(0x250)]=_0x43f1d8[_0x3d5f7c(0x212)]?_0x43f1d8[_0x3d5f7c(0x212)]:_0x43f1d8[_0x3d5f7c(0x250)],_0x43f1d8[_0x3d5f7c(0x212)]=_0x43f1d8[_0x3d5f7c(0x250)]),_0x193499(_0x5beed4,_0x43f1d8,_0x3564c9);});break;case'Quantumult\x20X':_0x3c1244[_0x5ed2af(0x247)]=_0x1605ed,this['isNeedRewrite']&&(_0x3c1244[_0x5ed2af(0x20b)]=_0x3c1244[_0x5ed2af(0x20b)]||{},Object['assign'](_0x3c1244[_0x5ed2af(0x20b)],{'hints':!0x1})),$task[_0x5ed2af(0x233)](_0x3c1244)[_0x5ed2af(0x1c0)](_0x3f7696=>{const {statusCode:_0x2dc767,statusCode:_0x20e93f,headers:_0x7ee9dc,body:_0x1b8279,bodyBytes:_0x4c1802}=_0x3f7696;_0x193499(null,{'status':_0x2dc767,'statusCode':_0x20e93f,'headers':_0x7ee9dc,'body':_0x1b8279,'bodyBytes':_0x4c1802},_0x1b8279,_0x4c1802);},_0x1e099e=>_0x193499(_0x1e099e&&_0x1e099e['error']||_0x5ed2af(0x1db)));break;case _0x5ed2af(0x1eb):let _0x2f0b54=require(_0x5ed2af(0x228));this[_0x5ed2af(0x1d4)](_0x3c1244);const {url:_0xf6f3d5,..._0x156404}=_0x3c1244;this[_0x5ed2af(0x23f)][_0x1605ed](_0xf6f3d5,_0x156404)['then'](_0x36095c=>{const _0x4c76f6=_0x5ed2af,{statusCode:_0x3fc5cb,statusCode:_0x3b2328,headers:_0x2e3bf1,rawBody:_0x3fe6bf}=_0x36095c,_0x438bf6=_0x2f0b54[_0x4c76f6(0x241)](_0x3fe6bf,this[_0x4c76f6(0x219)]);_0x193499(null,{'status':_0x3fc5cb,'statusCode':_0x3b2328,'headers':_0x2e3bf1,'rawBody':_0x3fe6bf,'body':_0x438bf6},_0x438bf6);},_0x345c13=>{const _0x14c7e8=_0x5ed2af,{message:_0x4a2f3f,response:_0x34c458}=_0x345c13;_0x193499(_0x4a2f3f,_0x34c458,_0x34c458&&_0x2f0b54[_0x14c7e8(0x241)](_0x34c458['rawBody'],this['encoding']));});}}[_0x2de72c(0x21b)](_0x47cf4a,_0x3e0483=null){const _0x57e002=_0x2de72c,_0x108006=_0x3e0483?new Date(_0x3e0483):new Date();let _0x2f0e74={'M+':_0x108006[_0x57e002(0x21f)]()+0x1,'d+':_0x108006['getDate'](),'H+':_0x108006[_0x57e002(0x1f9)](),'m+':_0x108006[_0x57e002(0x1e1)](),'s+':_0x108006[_0x57e002(0x1c5)](),'q+':Math[_0x57e002(0x221)]((_0x108006['getMonth']()+0x3)/0x3),'S':_0x108006[_0x57e002(0x254)]()};/(y+)/[_0x57e002(0x1ac)](_0x47cf4a)&&(_0x47cf4a=_0x47cf4a[_0x57e002(0x244)](RegExp['$1'],(_0x108006[_0x57e002(0x1df)]()+'')[_0x57e002(0x223)](0x4-RegExp['$1'][_0x57e002(0x202)])));for(let _0x17b515 in _0x2f0e74)new RegExp('('+_0x17b515+')')[_0x57e002(0x1ac)](_0x47cf4a)&&(_0x47cf4a=_0x47cf4a[_0x57e002(0x244)](RegExp['$1'],0x1==RegExp['$1'][_0x57e002(0x202)]?_0x2f0e74[_0x17b515]:('00'+_0x2f0e74[_0x17b515])['substr']((''+_0x2f0e74[_0x17b515])[_0x57e002(0x202)])));return _0x47cf4a;}[_0x2de72c(0x1a9)](_0x5180d4){const _0x1f9eb2=_0x2de72c;let _0x131b76='';for(const _0x38fdbc in _0x5180d4){let _0x438ccf=_0x5180d4[_0x38fdbc];null!=_0x438ccf&&''!==_0x438ccf&&(_0x1f9eb2(0x229)==typeof _0x438ccf&&(_0x438ccf=JSON[_0x1f9eb2(0x1e4)](_0x438ccf)),_0x131b76+=_0x38fdbc+'='+_0x438ccf+'&');}return _0x131b76=_0x131b76['substring'](0x0,_0x131b76[_0x1f9eb2(0x202)]-0x1),_0x131b76;}[_0x2de72c(0x248)](_0x27668b=_0x2d81b4,_0x47fbbe='',_0x910914='',_0x55b220){const _0x3a840f=_0x2de72c,_0x1565fd=_0x964070=>{const _0x945c0a=_0x18da;switch(typeof _0x964070){case void 0x0:return _0x964070;case _0x945c0a(0x243):switch(this[_0x945c0a(0x1ec)]()){case _0x945c0a(0x237):case _0x945c0a(0x1d8):default:return{'url':_0x964070};case _0x945c0a(0x1b6):case _0x945c0a(0x1b7):return _0x964070;case _0x945c0a(0x236):return{'open-url':_0x964070};case _0x945c0a(0x1eb):return;}case _0x945c0a(0x229):switch(this[_0x945c0a(0x1ec)]()){case'Surge':case _0x945c0a(0x1d8):case _0x945c0a(0x1b7):default:{let _0x2dbdcd=_0x964070['url']||_0x964070['openUrl']||_0x964070[_0x945c0a(0x19f)];return{'url':_0x2dbdcd};}case _0x945c0a(0x1b6):{let _0x276933=_0x964070[_0x945c0a(0x203)]||_0x964070[_0x945c0a(0x232)]||_0x964070[_0x945c0a(0x19f)],_0x3ee955=_0x964070[_0x945c0a(0x1a1)]||_0x964070[_0x945c0a(0x204)];return{'openUrl':_0x276933,'mediaUrl':_0x3ee955};}case _0x945c0a(0x236):{let _0x54db1f=_0x964070['open-url']||_0x964070['url']||_0x964070[_0x945c0a(0x203)],_0x137561=_0x964070[_0x945c0a(0x204)]||_0x964070[_0x945c0a(0x1a1)],_0x26d9cd=_0x964070[_0x945c0a(0x24d)]||_0x964070[_0x945c0a(0x1f3)];return{'open-url':_0x54db1f,'media-url':_0x137561,'update-pasteboard':_0x26d9cd};}case _0x945c0a(0x1eb):return;}default:return;}};if(!this[_0x3a840f(0x23e)])switch(this[_0x3a840f(0x1ec)]()){case _0x3a840f(0x237):case'Loon':case _0x3a840f(0x1d8):case _0x3a840f(0x1b7):default:$notification[_0x3a840f(0x1af)](_0x27668b,_0x47fbbe,_0x910914,_0x1565fd(_0x55b220));break;case'Quantumult\x20X':$notify(_0x27668b,_0x47fbbe,_0x910914,_0x1565fd(_0x55b220));break;case _0x3a840f(0x1eb):}if(!this[_0x3a840f(0x1f5)]){let _0x5c071d=['','==============📣系统通知📣=============='];_0x5c071d[_0x3a840f(0x222)](_0x27668b),_0x47fbbe&&_0x5c071d[_0x3a840f(0x222)](_0x47fbbe),_0x910914&&_0x5c071d['push'](_0x910914),console['log'](_0x5c071d[_0x3a840f(0x22d)]('\x0a')),this['logs']=this[_0x3a840f(0x1dd)][_0x3a840f(0x1c7)](_0x5c071d);}}[_0x2de72c(0x1fa)](..._0x488e98){const _0x285c7d=_0x2de72c;_0x488e98[_0x285c7d(0x202)]>0x0&&(this['logs']=[...this[_0x285c7d(0x1dd)],..._0x488e98]),console['log'](_0x488e98[_0x285c7d(0x22d)](this[_0x285c7d(0x1e8)]));}[_0x2de72c(0x19d)](_0x17d6ed,_0x53ab44){const _0x3f9a83=_0x2de72c;switch(this[_0x3f9a83(0x1ec)]()){case _0x3f9a83(0x237):case'Loon':case _0x3f9a83(0x1d8):case _0x3f9a83(0x1b7):case'Quantumult\x20X':default:this['log']('','❗️'+this[_0x3f9a83(0x24c)]+_0x3f9a83(0x22e),_0x17d6ed);break;case _0x3f9a83(0x1eb):this[_0x3f9a83(0x1fa)]('','❗️'+this[_0x3f9a83(0x24c)]+',\x20错误!',_0x17d6ed[_0x3f9a83(0x245)]);}}[_0x2de72c(0x1b2)](_0x498ba6){return new Promise(_0x171352=>setTimeout(_0x171352,_0x498ba6));}[_0x2de72c(0x1f8)](_0x4cd374={}){const _0x521f74=_0x2de72c,_0x3bbbd3=new Date()[_0x521f74(0x1d1)](),_0x4eec73=(_0x3bbbd3-this[_0x521f74(0x1c3)])/0x3e8;switch(this[_0x521f74(0x1fa)]('','🔔'+this[_0x521f74(0x24c)]+',\x20结束!\x20🕛\x20'+_0x4eec73+'\x20秒'),this[_0x521f74(0x1fa)](),this['getEnv']()){case _0x521f74(0x237):case'Loon':case'Stash':case _0x521f74(0x1b7):case _0x521f74(0x236):default:$done(_0x4cd374);break;case'Node.js':process[_0x521f74(0x1f2)](0x1);}}}(_0x2d81b4,_0x65a8b6);}
