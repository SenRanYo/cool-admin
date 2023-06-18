var _=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function G(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function B0(e){if(e.__esModule)return e;var x=e.default;if(typeof x=="function"){var f=function c(){if(this instanceof c){var a=[null];a.push.apply(a,arguments);var d=Function.bind.apply(x,a);return new d}return x.apply(this,arguments)};f.prototype=x.prototype}else f={};return Object.defineProperty(f,"__esModule",{value:!0}),Object.keys(e).forEach(function(c){var a=Object.getOwnPropertyDescriptor(e,c);Object.defineProperty(f,c,a.get?a:{enumerable:!0,get:function(){return e[c]}})}),f}var V={},j={};Object.defineProperty(j,"__esModule",{value:!0});j.default=()=>{throw new Error("File system is not available")};var L={},O={};Object.defineProperty(O,"__esModule",{value:!0});O.default=(e,x,f)=>({confidence:f,name:x.name(e),lang:x.language?x.language():void 0});var z=_&&_.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(L,"__esModule",{value:!0});const q=z(O);class J{name(){return"UTF-8"}match(x){let f=!1,c=0,a=0,d=0,t;const b=x.rawInput;x.rawLen>=3&&(b[0]&255)==239&&(b[1]&255)==187&&(b[2]&255)==191&&(f=!0);for(let u=0;u<x.rawLen;u++){const s=b[u];if(s&128){if((s&224)==192)d=1;else if((s&240)==224)d=2;else if((s&248)==240)d=3;else{if(a++,a>5)break;d=0}for(;u++,!(u>=x.rawLen);){if((b[u]&192)!=128){a++;break}if(--d==0){c++;break}}}}if(t=0,f&&a==0)t=100;else if(f&&c>a*10)t=80;else if(c>3&&a==0)t=100;else if(c>0&&a==0)t=80;else if(c==0&&a==0)t=10;else if(c>a*10)t=25;else return null;return(0,q.default)(x,this,t)}}L.default=J;var p={},A=_&&_.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(p,"__esModule",{value:!0});p.UTF_32LE=p.UTF_32BE=p.UTF_16LE=p.UTF_16BE=void 0;const U=A(O);class H{name(){return"UTF-16BE"}match(x){const f=x.rawInput;return f.length>=2&&(f[0]&255)==254&&(f[1]&255)==255?(0,U.default)(x,this,100):null}}p.UTF_16BE=H;class Q{name(){return"UTF-16LE"}match(x){const f=x.rawInput;return f.length>=2&&(f[0]&255)==255&&(f[1]&255)==254?f.length>=4&&f[2]==0&&f[3]==0?null:(0,U.default)(x,this,100):null}}p.UTF_16LE=Q;class D{name(){return"UTF-32"}getChar(x,f){return-1}match(x){let f=0,c=0,a=!1,d=0;const t=x.rawLen/4*4,b=x.rawInput;if(t==0)return null;this.getChar(b,0)==65279&&(a=!0);for(let u=0;u<t;u+=4){const s=this.getChar(b,u);s<0||s>=1114111||s>=55296&&s<=57343?c+=1:f+=1}return a&&c==0?d=100:a&&f>c*10?d=80:f>3&&c==0?d=100:f>0&&c==0?d=80:f>c*10&&(d=25),d==0?null:(0,U.default)(x,this,d)}}class W extends D{name(){return"UTF-32BE"}getChar(x,f){return(x[f+0]&255)<<24|(x[f+1]&255)<<16|(x[f+2]&255)<<8|x[f+3]&255}}p.UTF_32BE=W;class X extends D{name(){return"UTF-32LE"}getChar(x,f){return(x[f+3]&255)<<24|(x[f+2]&255)<<16|(x[f+1]&255)<<8|x[f+0]&255}}p.UTF_32LE=X;var y={},Y=_&&_.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(y,"__esModule",{value:!0});y.gb_18030=y.euc_kr=y.euc_jp=y.big5=y.sjis=void 0;const Z=Y(O);function x0(e,x){const f=(c,a,d,t)=>{if(t<d)return-1;const b=Math.floor(d+t>>>1);return a>c[b]?f(c,a,b+1,t):a<c[b]?f(c,a,d,b-1):b};return f(e,x,0,e.length-1)}class e0{constructor(){this.charValue=0,this.index=0,this.nextIndex=0,this.error=!1,this.done=!1}reset(){this.charValue=0,this.index=-1,this.nextIndex=0,this.error=!1,this.done=!1}nextByte(x){return this.nextIndex>=x.rawLen?(this.done=!0,-1):x.rawInput[this.nextIndex++]&255}}class M{constructor(){this.commonChars=[]}name(){return"mbcs"}match(x){let f=0,c=0,a=0,d=0,t=0;const b=new e0;x:{for(b.reset();this.nextChar(b,x);){if(d++,b.error)a++;else{const u=b.charValue&4294967295;u>255&&(f++,this.commonChars!=null&&x0(this.commonChars,u)>=0&&c++)}if(a>=2&&a*5>=f)break x}if(f<=10&&a==0){f==0&&d<10?t=0:t=10;break x}if(f<20*a){t=0;break x}if(this.commonChars==null)t=30+f-20*a,t>100&&(t=100);else{const s=90/Math.log(f/4);t=Math.floor(Math.log(c+1)*s+10),t=Math.min(t,100)}}return t==0?null:(0,Z.default)(x,this,t)}nextChar(x,f){return!0}}class f0 extends M{constructor(){super(...arguments),this.commonChars=[33088,33089,33090,33093,33115,33129,33130,33141,33142,33440,33442,33444,33449,33450,33451,33453,33455,33457,33459,33461,33463,33469,33470,33473,33476,33477,33478,33480,33481,33484,33485,33500,33504,33511,33512,33513,33514,33520,33521,33601,33603,33614,33615,33624,33630,33634,33639,33653,33654,33673,33674,33675,33677,33683,36502,37882,38314]}name(){return"Shift_JIS"}language(){return"ja"}nextChar(x,f){x.index=x.nextIndex,x.error=!1;const c=x.charValue=x.nextByte(f);if(c<0)return!1;if(c<=127||c>160&&c<=223)return!0;const a=x.nextByte(f);return a<0?!1:(x.charValue=c<<8|a,a>=64&&a<=127||a>=128&&a<=255||(x.error=!0),!0)}}y.sjis=f0;class c0 extends M{constructor(){super(...arguments),this.commonChars=[41280,41281,41282,41283,41287,41289,41333,41334,42048,42054,42055,42056,42065,42068,42071,42084,42090,42092,42103,42147,42148,42151,42177,42190,42193,42207,42216,42237,42304,42312,42328,42345,42445,42471,42583,42593,42594,42600,42608,42664,42675,42681,42707,42715,42726,42738,42816,42833,42841,42970,43171,43173,43181,43217,43219,43236,43260,43456,43474,43507,43627,43706,43710,43724,43772,44103,44111,44208,44242,44377,44745,45024,45290,45423,45747,45764,45935,46156,46158,46412,46501,46525,46544,46552,46705,47085,47207,47428,47832,47940,48033,48593,49860,50105,50240,50271]}name(){return"Big5"}language(){return"zh"}nextChar(x,f){x.index=x.nextIndex,x.error=!1;const c=x.charValue=x.nextByte(f);if(c<0)return!1;if(c<=127||c==255)return!0;const a=x.nextByte(f);return a<0?!1:(x.charValue=x.charValue<<8|a,(a<64||a==127||a==255)&&(x.error=!0),!0)}}y.big5=c0;function k(e,x){e.index=e.nextIndex,e.error=!1;let f=0,c=0,a=0;x:{if(f=e.charValue=e.nextByte(x),f<0){e.done=!0;break x}if(f<=141)break x;if(c=e.nextByte(x),e.charValue=e.charValue<<8|c,f>=161&&f<=254){c<161&&(e.error=!0);break x}if(f==142){c<161&&(e.error=!0);break x}f==143&&(a=e.nextByte(x),e.charValue=e.charValue<<8|a,a<161&&(e.error=!0))}return e.done==!1}class a0 extends M{constructor(){super(...arguments),this.commonChars=[41377,41378,41379,41382,41404,41418,41419,41430,41431,42146,42148,42150,42152,42154,42155,42156,42157,42159,42161,42163,42165,42167,42169,42171,42173,42175,42176,42177,42179,42180,42182,42183,42184,42185,42186,42187,42190,42191,42192,42206,42207,42209,42210,42212,42216,42217,42218,42219,42220,42223,42226,42227,42402,42403,42404,42406,42407,42410,42413,42415,42416,42419,42421,42423,42424,42425,42431,42435,42438,42439,42440,42441,42443,42448,42453,42454,42455,42462,42464,42465,42469,42473,42474,42475,42476,42477,42483,47273,47572,47854,48072,48880,49079,50410,50940,51133,51896,51955,52188,52689],this.nextChar=k}name(){return"EUC-JP"}language(){return"ja"}}y.euc_jp=a0;class d0 extends M{constructor(){super(...arguments),this.commonChars=[45217,45235,45253,45261,45268,45286,45293,45304,45306,45308,45496,45497,45511,45527,45538,45994,46011,46274,46287,46297,46315,46501,46517,46527,46535,46569,46835,47023,47042,47054,47270,47278,47286,47288,47291,47337,47531,47534,47564,47566,47613,47800,47822,47824,47857,48103,48115,48125,48301,48314,48338,48374,48570,48576,48579,48581,48838,48840,48863,48878,48888,48890,49057,49065,49088,49124,49131,49132,49144,49319,49327,49336,49338,49339,49341,49351,49356,49358,49359,49366,49370,49381,49403,49404,49572,49574,49590,49622,49631,49654,49656,50337,50637,50862,51151,51153,51154,51160,51173,51373],this.nextChar=k}name(){return"EUC-KR"}language(){return"ko"}}y.euc_kr=d0;class t0 extends M{constructor(){super(...arguments),this.commonChars=[41377,41378,41379,41380,41392,41393,41457,41459,41889,41900,41914,45480,45496,45502,45755,46025,46070,46323,46525,46532,46563,46767,46804,46816,47010,47016,47037,47062,47069,47284,47327,47350,47531,47561,47576,47610,47613,47821,48039,48086,48097,48122,48316,48347,48382,48588,48845,48861,49076,49094,49097,49332,49389,49611,49883,50119,50396,50410,50636,50935,51192,51371,51403,51413,51431,51663,51706,51889,51893,51911,51920,51926,51957,51965,52460,52728,52906,52932,52946,52965,53173,53186,53206,53442,53445,53456,53460,53671,53930,53938,53941,53947,53972,54211,54224,54269,54466,54490,54754,54992]}name(){return"GB18030"}language(){return"zh"}nextChar(x,f){x.index=x.nextIndex,x.error=!1;let c=0,a=0,d=0,t=0;x:{if(c=x.charValue=x.nextByte(f),c<0){x.done=!0;break x}if(c<=128)break x;if(a=x.nextByte(f),x.charValue=x.charValue<<8|a,c>=129&&c<=254){if(a>=64&&a<=126||a>=80&&a<=254)break x;if(a>=48&&a<=57&&(d=x.nextByte(f),d>=129&&d<=254&&(t=x.nextByte(f),t>=48&&t<=57))){x.charValue=x.charValue<<16|d<<8|t;break x}x.error=!0;break x}}return x.done==!1}}y.gb_18030=t0;var l={},n0=_&&_.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(l,"__esModule",{value:!0});l.KOI8_R=l.windows_1256=l.windows_1251=l.ISO_8859_9=l.ISO_8859_8=l.ISO_8859_7=l.ISO_8859_6=l.ISO_8859_5=l.ISO_8859_2=l.ISO_8859_1=void 0;const E=n0(O),r0=16777215;class T{constructor(x,f){this.byteIndex=0,this.ngram=0,this.ngramCount=0,this.hitCount=0,this.spaceChar=32,this.ngramList=x,this.byteMap=f}search(x,f){let c=0;return x[c+32]<=f&&(c+=32),x[c+16]<=f&&(c+=16),x[c+8]<=f&&(c+=8),x[c+4]<=f&&(c+=4),x[c+2]<=f&&(c+=2),x[c+1]<=f&&(c+=1),x[c]>f&&(c-=1),c<0||x[c]!=f?-1:c}lookup(x){this.ngramCount+=1,this.search(this.ngramList,x)>=0&&(this.hitCount+=1)}addByte(x){this.ngram=(this.ngram<<8)+(x&255)&r0,this.lookup(this.ngram)}nextByte(x){return this.byteIndex>=x.inputLen?-1:x.inputBytes[this.byteIndex++]&255}parse(x,f){let c,a=!1;for(this.spaceChar=f;(c=this.nextByte(x))>=0;){const t=this.byteMap[c];t!=0&&(t==this.spaceChar&&a||this.addByte(t),a=t==this.spaceChar)}this.addByte(this.spaceChar);const d=this.hitCount/this.ngramCount;return d>.33?98:Math.floor(d*300)}}class h{constructor(x,f){this.fLang=x,this.fNGrams=f}}const b0=e=>Array.isArray(e)&&isFinite(e[0]);class w{constructor(){this.spaceChar=32,this.nGramLang=void 0}ngrams(){return[]}byteMap(){return[]}name(x){return"sbcs"}language(){return this.nGramLang}match(x){this.nGramLang=void 0;const f=this.ngrams();if(b0(f)){const d=new T(f,this.byteMap()).parse(x,this.spaceChar);return d<=0?null:(0,E.default)(x,this,d)}let c=-1;for(let a=f.length-1;a>=0;a--){const d=f[a],b=new T(d.fNGrams,this.byteMap()).parse(x,this.spaceChar);b>c&&(c=b,this.nGramLang=d.fLang)}return c<=0?null:(0,E.default)(x,this,c)}}class s0 extends w{byteMap(){return[32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,0,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,32,32,32,32,32,32,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,170,32,32,32,32,32,32,32,32,32,32,181,32,32,32,32,186,32,32,32,32,32,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,32,248,249,250,251,252,253,254,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,32,248,249,250,251,252,253,254,255]}ngrams(){return[new h("da",[2122086,2122100,2122853,2123118,2123122,2123375,2123873,2124064,2125157,2125671,2126053,2126697,2126708,2126953,2127465,6383136,6385184,6385252,6386208,6386720,6579488,6579566,6579570,6579572,6627443,6644768,6644837,6647328,6647396,6648352,6648421,6648608,6648864,6713202,6776096,6776174,6776178,6907749,6908960,6909543,7038240,7039845,7103858,7104871,7105637,7169380,7234661,7234848,7235360,7235429,7300896,7302432,7303712,7398688,7479396,7479397,7479411,7496992,7566437,7610483,7628064,7628146,7629164,7759218]),new h("de",[2122094,2122101,2122341,2122849,2122853,2122857,2123113,2123621,2123873,2124142,2125161,2126691,2126693,2127214,2127461,2127471,2127717,2128501,6448498,6514720,6514789,6514804,6578547,6579566,6579570,6580581,6627428,6627443,6646126,6646132,6647328,6648352,6648608,6776174,6841710,6845472,6906728,6907168,6909472,6909541,6911008,7104867,7105637,7217249,7217252,7217267,7234592,7234661,7234848,7235360,7235429,7238757,7479396,7496805,7497065,7562088,7566437,7610468,7628064,7628142,7628146,7695972,7695975,7759218]),new h("en",[2122016,2122094,2122341,2122607,2123375,2123873,2123877,2124142,2125153,2125670,2125938,2126437,2126689,2126708,2126952,2126959,2127720,6383972,6384672,6385184,6385252,6386464,6386720,6386789,6386793,6561889,6561908,6627425,6627443,6627444,6644768,6647412,6648352,6648608,6713202,6840692,6841632,6841714,6906912,6909472,6909543,6909806,6910752,7217249,7217268,7234592,7235360,7238688,7300640,7302688,7303712,7496992,7500576,7544929,7544948,7561577,7566368,7610484,7628146,7628897,7628901,7629167,7630624,7631648]),new h("es",[2122016,2122593,2122607,2122853,2123116,2123118,2123123,2124142,2124897,2124911,2125921,2125935,2125938,2126197,2126437,2126693,2127214,2128160,6365283,6365284,6365285,6365292,6365296,6382441,6382703,6384672,6386208,6386464,6515187,6516590,6579488,6579564,6582048,6627428,6627429,6627436,6646816,6647328,6647412,6648608,6648692,6907246,6943598,7102752,7106419,7217253,7238757,7282788,7282789,7302688,7303712,7303968,7364978,7435621,7495968,7497075,7544932,7544933,7544944,7562528,7628064,7630624,7693600,15953440]),new h("fr",[2122101,2122607,2122849,2122853,2122869,2123118,2123124,2124897,2124901,2125921,2125935,2125938,2126197,2126693,2126703,2127214,2154528,6385268,6386793,6513952,6516590,6579488,6579571,6583584,6627425,6627427,6627428,6627429,6627436,6627440,6627443,6647328,6647412,6648352,6648608,6648864,6649202,6909806,6910752,6911008,7102752,7103776,7103859,7169390,7217252,7234848,7238432,7238688,7302688,7302772,7304562,7435621,7479404,7496992,7544929,7544932,7544933,7544940,7544944,7610468,7628064,7629167,7693600,7696928]),new h("it",[2122092,2122600,2122607,2122853,2122857,2123040,2124140,2124142,2124897,2125925,2125938,2127214,6365283,6365284,6365296,6365299,6386799,6514789,6516590,6579564,6580512,6627425,6627427,6627428,6627433,6627436,6627440,6627443,6646816,6646892,6647412,6648352,6841632,6889569,6889571,6889572,6889587,6906144,6908960,6909472,6909806,7102752,7103776,7104800,7105633,7234848,7235872,7237408,7238757,7282785,7282788,7282793,7282803,7302688,7302757,7366002,7495968,7496992,7563552,7627040,7628064,7629088,7630624,8022383]),new h("nl",[2122092,2122341,2122849,2122853,2122857,2123109,2123118,2123621,2123877,2124142,2125153,2125157,2125680,2126949,2127457,2127461,2127471,2127717,2128489,6381934,6381938,6385184,6385252,6386208,6386720,6514804,6579488,6579566,6579570,6627426,6627446,6645102,6645106,6647328,6648352,6648435,6648864,6776174,6841716,6907168,6909472,6909543,6910752,7217250,7217252,7217253,7217256,7217263,7217270,7234661,7235360,7302756,7303026,7303200,7303712,7562088,7566437,7610468,7628064,7628142,7628146,7758190,7759218,7761775]),new h("no",[2122100,2122102,2122853,2123118,2123122,2123375,2123873,2124064,2125157,2125671,2126053,2126693,2126699,2126703,2126708,2126953,2127465,2155808,6385252,6386208,6386720,6579488,6579566,6579572,6627443,6644768,6647328,6647397,6648352,6648421,6648864,6648948,6713202,6776174,6908779,6908960,6909543,7038240,7039845,7103776,7105637,7169380,7169390,7217267,7234848,7235360,7235429,7237221,7300896,7302432,7303712,7398688,7479411,7496992,7565165,7566437,7610483,7628064,7628142,7628146,7629164,7631904,7631973,7759218]),new h("pt",[2122016,2122607,2122849,2122853,2122863,2123040,2123123,2125153,2125423,2125600,2125921,2125935,2125938,2126197,2126437,2126693,2127213,6365281,6365283,6365284,6365296,6382693,6382703,6384672,6386208,6386273,6386464,6516589,6516590,6578464,6579488,6582048,6582131,6627425,6627428,6647072,6647412,6648608,6648692,6906144,6906721,7169390,7238757,7238767,7282785,7282787,7282788,7282789,7282800,7303968,7364978,7435621,7495968,7497075,7544929,7544932,7544933,7544944,7566433,7628064,7630624,7693600,14905120,15197039]),new h("sv",[2122100,2122102,2122853,2123118,2123510,2123873,2124064,2124142,2124655,2125157,2125667,2126053,2126699,2126703,2126708,2126953,2127457,2127465,2155634,6382693,6385184,6385252,6386208,6386804,6514720,6579488,6579566,6579570,6579572,6644768,6647328,6648352,6648864,6747762,6776174,6909036,6909543,7037216,7105568,7169380,7217267,7233824,7234661,7235360,7235429,7235950,7299944,7302432,7302688,7398688,7479393,7479411,7495968,7564129,7565165,7610483,7627040,7628064,7628146,7629164,7631904,7758194,14971424,16151072])]}name(x){return x&&x.c1Bytes?"windows-1252":"ISO-8859-1"}}l.ISO_8859_1=s0;class u0 extends w{byteMap(){return[32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,0,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,32,32,32,32,32,32,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,177,32,179,32,181,182,32,32,185,186,187,188,32,190,191,32,177,32,179,32,181,182,183,32,185,186,187,188,32,190,191,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,32,248,249,250,251,252,253,254,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,32,248,249,250,251,252,253,254,32]}ngrams(){return[new h("cs",[2122016,2122361,2122863,2124389,2125409,2125413,2125600,2125668,2125935,2125938,2126072,2126447,2126693,2126703,2126708,2126959,2127392,2127481,2128481,6365296,6513952,6514720,6627440,6627443,6627446,6647072,6647533,6844192,6844260,6910836,6972704,7042149,7103776,7104800,7233824,7268640,7269408,7269664,7282800,7300206,7301737,7304052,7304480,7304801,7368548,7368554,7369327,7403621,7562528,7565173,7566433,7566441,7566446,7628146,7630573,7630624,7676016,12477728,14773997,15296623,15540336,15540339,15559968,16278884]),new h("hu",[2122016,2122106,2122341,2123111,2123116,2123365,2123873,2123887,2124147,2124645,2124649,2124790,2124901,2125153,2125157,2125161,2125413,2126714,2126949,2156915,6365281,6365291,6365293,6365299,6384416,6385184,6388256,6447470,6448494,6645625,6646560,6646816,6646885,6647072,6647328,6648421,6648864,6648933,6648948,6781216,6844263,6909556,6910752,7020641,7075450,7169383,7170414,7217249,7233899,7234923,7234925,7238688,7300985,7544929,7567973,7567988,7568097,7596391,7610465,7631904,7659891,8021362,14773792,15299360]),new h("pl",[2122618,2122863,2124064,2124389,2124655,2125153,2125161,2125409,2125417,2125668,2125935,2125938,2126697,2127648,2127721,2127737,2128416,2128481,6365296,6365303,6385257,6514720,6519397,6519417,6582048,6584937,6627440,6627443,6627447,6627450,6645615,6646304,6647072,6647401,6778656,6906144,6907168,6907242,7037216,7039264,7039333,7170405,7233824,7235937,7235941,7282800,7305057,7305065,7368556,7369313,7369327,7369338,7502437,7502457,7563754,7564137,7566433,7825765,7955304,7957792,8021280,8022373,8026400,15955744]),new h("ro",[2122016,2122083,2122593,2122597,2122607,2122613,2122853,2122857,2124897,2125153,2125925,2125938,2126693,2126819,2127214,2144873,2158190,6365283,6365284,6386277,6386720,6386789,6386976,6513010,6516590,6518048,6546208,6579488,6627425,6627427,6627428,6627440,6627443,6644e3,6646048,6646885,6647412,6648692,6889569,6889571,6889572,6889584,6907168,6908192,6909472,7102752,7103776,7106418,7107945,7234848,7238770,7303712,7365998,7496992,7497057,7501088,7594784,7628064,7631477,7660320,7694624,7695392,12216608,15625760])]}name(x){return x&&x.c1Bytes?"windows-1250":"ISO-8859-2"}}l.ISO_8859_2=u0;class i0 extends w{byteMap(){return[32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,0,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,32,32,32,32,32,32,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,241,242,243,244,245,246,247,248,249,250,251,252,32,254,255,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,32,241,242,243,244,245,246,247,248,249,250,251,252,32,254,255]}ngrams(){return[2150944,2151134,2151646,2152400,2152480,2153168,2153182,2153936,2153941,2154193,2154462,2154464,2154704,2154974,2154978,2155230,2156514,2158050,13688280,13689580,13884960,14015468,14015960,14016994,14017056,14164191,14210336,14211104,14216992,14407133,14407712,14413021,14536736,14538016,14538965,14538991,14540320,14540498,14557394,14557407,14557409,14602784,14602960,14603230,14604576,14605292,14605344,14606818,14671579,14672085,14672088,14672094,14733522,14734804,14803664,14803666,14803672,14806816,14865883,14868e3,14868192,14871584,15196894,15459616]}name(){return"ISO-8859-5"}language(){return"ru"}}l.ISO_8859_5=i0;class l0 extends w{byteMap(){return[32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,0,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,32,32,32,32,32,32,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,32,32,32,32,32,224,225,226,227,228,229,230,231,232,233,234,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32]}ngrams(){return[2148324,2148326,2148551,2152932,2154986,2155748,2156006,2156743,13050055,13091104,13093408,13095200,13100064,13100227,13100231,13100232,13100234,13100236,13100237,13100239,13100243,13100249,13100258,13100261,13100264,13100266,13100320,13100576,13100746,13115591,13181127,13181153,13181156,13181157,13181160,13246663,13574343,13617440,13705415,13748512,13836487,14229703,14279913,14805536,14950599,14993696,15001888,15002144,15016135,15058720,15059232,15066656,15081671,15147207,15189792,15255524,15263264,15278279,15343815,15343845,15343848,15386912,15388960,15394336]}name(){return"ISO-8859-6"}language(){return"ar"}}l.ISO_8859_6=l0;class o0 extends w{byteMap(){return[32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,0,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,32,32,32,32,32,32,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,161,162,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,220,32,221,222,223,32,252,32,253,254,192,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,32,243,244,245,246,247,248,249,250,251,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,32]}ngrams(){return[2154989,2154992,2155497,2155753,2156016,2156320,2157281,2157797,2158049,2158368,2158817,2158831,2158833,2159604,2159605,2159847,2159855,14672160,14754017,14754036,14805280,14806304,14807292,14807584,14936545,15067424,15069728,15147252,15199520,15200800,15278324,15327520,15330014,15331872,15393257,15393268,15525152,15540449,15540453,15540464,15589664,15725088,15725856,15790069,15790575,15793184,15868129,15868133,15868138,15868144,15868148,15983904,15984416,15987951,16048416,16048617,16050157,16050162,16050666,16052e3,16052213,16054765,16379168,16706848]}name(x){return x&&x.c1Bytes?"windows-1253":"ISO-8859-7"}language(){return"el"}}l.ISO_8859_7=o0;class _0 extends w{byteMap(){return[32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,0,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,32,32,32,32,32,32,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,181,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,32,32,32,32,32]}ngrams(){return[new h("he",[2154725,2154727,2154729,2154746,2154985,2154990,2155744,2155749,2155753,2155758,2155762,2155769,2155770,2157792,2157796,2158304,2159340,2161132,14744096,14950624,14950625,14950628,14950636,14950638,14950649,15001056,15065120,15068448,15068960,15071264,15071776,15278308,15328288,15328762,15329773,15330592,15331104,15333408,15333920,15474912,15474916,15523872,15524896,15540448,15540449,15540452,15540460,15540462,15540473,15655968,15671524,15787040,15788320,15788525,15920160,16261348,16312813,16378912,16392416,16392417,16392420,16392428,16392430,16392441]),new h("he",[2154725,2154732,2155753,2155756,2155758,2155760,2157040,2157810,2157817,2158053,2158057,2158565,2158569,2160869,2160873,2161376,2161381,2161385,14688484,14688492,14688493,14688506,14738464,14738916,14740512,14741024,14754020,14754029,14754042,14950628,14950633,14950636,14950637,14950639,14950648,14950650,15002656,15065120,15066144,15196192,15327264,15327520,15328288,15474916,15474925,15474938,15528480,15530272,15591913,15591920,15591928,15605988,15605997,15606010,15655200,15655968,15918112,16326884,16326893,16326906,16376864,16441376,16442400,16442857])]}name(x){return x&&x.c1Bytes?"windows-1255":"ISO-8859-8"}language(){return"he"}}l.ISO_8859_8=_0;class h0 extends w{byteMap(){return[32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,0,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,32,32,32,32,32,32,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,170,32,32,32,32,32,32,32,32,32,32,181,32,32,32,32,186,32,32,32,32,32,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,32,248,249,250,251,252,105,254,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,32,248,249,250,251,252,253,254,255]}ngrams(){return[2122337,2122345,2122357,2122849,2122853,2123621,2123873,2124140,2124641,2124655,2125153,2125676,2126689,2126945,2127461,2128225,6365282,6384416,6384737,6384993,6385184,6385405,6386208,6386273,6386429,6386685,6388065,6449522,6578464,6579488,6580512,6627426,6627435,6644841,6647328,6648352,6648425,6648681,6909029,6909472,6909545,6910496,7102830,7102834,7103776,7103858,7217249,7217250,7217259,7234657,7234661,7234848,7235872,7235950,7273760,7498094,7535982,7759136,7954720,7958386,16608800,16608868,16609021,16642301]}name(x){return x&&x.c1Bytes?"windows-1254":"ISO-8859-9"}language(){return"tr"}}l.ISO_8859_9=h0;class m0 extends w{byteMap(){return[32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,0,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,32,32,32,32,32,32,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,32,32,32,32,32,144,131,32,131,32,32,32,32,32,32,154,32,156,157,158,159,144,32,32,32,32,32,32,32,32,32,154,32,156,157,158,159,32,162,162,188,32,180,32,32,184,32,186,32,32,32,32,191,32,32,179,179,180,181,32,32,184,32,186,32,188,190,190,191,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255]}ngrams(){return[2155040,2155246,2155758,2156512,2156576,2157280,2157294,2158048,2158053,2158305,2158574,2158576,2158816,2159086,2159090,2159342,2160626,2162162,14740968,14742268,14937632,15068156,15068648,15069682,15069728,15212783,15263008,15263776,15269664,15459821,15460384,15465709,15589408,15590688,15591653,15591679,15592992,15593186,15605986,15605999,15606001,15655456,15655648,15655918,15657248,15657980,15658016,15659506,15724267,15724773,15724776,15724782,15786210,15787492,15856352,15856354,15856360,15859488,15918571,15920672,15920880,15924256,16249582,16512288]}name(){return"windows-1251"}language(){return"ru"}}l.windows_1251=m0;class g0 extends w{byteMap(){return[32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,0,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,32,32,32,32,32,32,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,32,32,32,32,32,32,129,32,131,32,32,32,32,136,32,138,32,156,141,142,143,144,32,32,32,32,32,32,32,152,32,154,32,156,32,32,159,32,32,32,32,32,32,32,32,32,32,170,32,32,32,32,32,32,32,32,32,32,181,32,32,32,32,32,32,32,32,32,32,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,32,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,32,32,32,32,244,32,32,32,32,249,32,251,252,32,32,255]}ngrams(){return[2148321,2148324,2148551,2153185,2153965,2154977,2155492,2156231,13050055,13091104,13093408,13095200,13099296,13099459,13099463,13099464,13099466,13099468,13099469,13099471,13099475,13099482,13099486,13099491,13099494,13099501,13099808,13100064,13100234,13115591,13181127,13181149,13181153,13181155,13181158,13246663,13574343,13617440,13705415,13748512,13836487,14295239,14344684,14544160,14753991,14797088,14806048,14806304,14885063,14927648,14928160,14935072,14950599,15016135,15058720,15124449,15131680,15474887,15540423,15540451,15540454,15583520,15585568,15590432]}name(){return"windows-1256"}language(){return"ar"}}l.windows_1256=g0;class y0 extends w{byteMap(){return[32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,0,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,32,32,32,32,32,32,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,163,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,163,32,32,32,32,32,32,32,32,32,32,32,32,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223]}ngrams(){return[2147535,2148640,2149313,2149327,2150081,2150085,2150338,2150607,2150610,2151105,2151375,2151380,2151631,2152224,2152399,2153153,2153684,2154196,12701385,12702936,12963032,12963529,12964820,12964896,13094688,13181136,13223200,13224224,13226272,13419982,13420832,13424846,13549856,13550880,13552069,13552081,13553440,13553623,13574352,13574355,13574359,13617103,13617696,13618392,13618464,13620180,13621024,13621185,13684684,13685445,13685449,13685455,13812183,13813188,13881632,13882561,13882569,13882583,13944268,13946656,13946834,13948960,14272544,14603471]}name(){return"KOI8-R"}language(){return"ru"}}l.KOI8_R=y0;var S={},p0=_&&_.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(S,"__esModule",{value:!0});S.ISO_2022_CN=S.ISO_2022_KR=S.ISO_2022_JP=void 0;const w0=p0(O);class P{constructor(){this.escapeSequences=[]}name(){return"ISO_2022"}match(x){let f,c,a,d=0,t=0,b=0,u;const s=x.inputBytes,I=x.inputLen;x:for(f=0;f<I;f++){if(s[f]==27){e:for(a=0;a<this.escapeSequences.length;a++){const B=this.escapeSequences[a];if(I-f<B.length)continue e;for(c=1;c<B.length;c++)if(B[c]!=s[f+c])continue e;d++,f+=B.length-1;continue x}t++}(s[f]==14||s[f]==15)&&b++}return d==0?null:(u=(100*d-100*t)/(d+t),d+b<5&&(u-=(5-(d+b))*10),u<=0?null:(0,w0.default)(x,this,u))}}class S0 extends P{constructor(){super(...arguments),this.escapeSequences=[[27,36,40,67],[27,36,40,68],[27,36,64],[27,36,65],[27,36,66],[27,38,64],[27,40,66],[27,40,72],[27,40,73],[27,40,74],[27,46,65],[27,46,70]]}name(){return"ISO-2022-JP"}language(){return"ja"}}S.ISO_2022_JP=S0;class O0 extends P{constructor(){super(...arguments),this.escapeSequences=[[27,36,41,67]]}name(){return"ISO-2022-KR"}language(){return"kr"}}S.ISO_2022_KR=O0;class I0 extends P{constructor(){super(...arguments),this.escapeSequences=[[27,36,41,65],[27,36,41,71],[27,36,42,72],[27,36,41,69],[27,36,43,73],[27,36,43,74],[27,36,43,75],[27,36,43,76],[27,36,43,77],[27,78],[27,79]]}name(){return"ISO-2022-CN"}language(){return"zh"}}S.ISO_2022_CN=I0;(function(e){var x=_&&_.__createBinding||(Object.create?function(n,r,o,g){g===void 0&&(g=o);var m=Object.getOwnPropertyDescriptor(r,o);(!m||("get"in m?!r.__esModule:m.writable||m.configurable))&&(m={enumerable:!0,get:function(){return r[o]}}),Object.defineProperty(n,g,m)}:function(n,r,o,g){g===void 0&&(g=o),n[g]=r[o]}),f=_&&_.__setModuleDefault||(Object.create?function(n,r){Object.defineProperty(n,"default",{enumerable:!0,value:r})}:function(n,r){n.default=r}),c=_&&_.__importStar||function(n){if(n&&n.__esModule)return n;var r={};if(n!=null)for(var o in n)o!=="default"&&Object.prototype.hasOwnProperty.call(n,o)&&x(r,n,o);return f(r,n),r},a=_&&_.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(e,"__esModule",{value:!0}),e.detectFileSync=e.detectFile=e.analyse=e.detect=void 0;const d=a(j),t=a(L),b=c(p),u=c(y),s=c(l),I=c(S),B=[new t.default,new b.UTF_16BE,new b.UTF_16LE,new b.UTF_32BE,new b.UTF_32LE,new u.sjis,new u.big5,new u.euc_jp,new u.euc_kr,new u.gb_18030,new I.ISO_2022_JP,new I.ISO_2022_KR,new I.ISO_2022_CN,new s.ISO_8859_1,new s.ISO_8859_2,new s.ISO_8859_5,new s.ISO_8859_6,new s.ISO_8859_7,new s.ISO_8859_8,new s.ISO_8859_9,new s.windows_1251,new s.windows_1256,new s.KOI8_R],N=n=>{const r=(0,e.analyse)(n);return r.length>0?r[0].name:null};e.detect=N;const K=n=>{const r=[];for(let i=0;i<256;i++)r[i]=0;for(let i=n.length-1;i>=0;i--)r[n[i]&255]++;let o=!1;for(let i=128;i<=159;i+=1)if(r[i]!==0){o=!0;break}const g={byteStats:r,c1Bytes:o,rawInput:n,rawLen:n.length,inputBytes:n,inputLen:n.length};return B.map(i=>i.match(g)).filter(i=>!!i).sort((i,F)=>F.confidence-i.confidence)};e.analyse=K;const R=(n,r={})=>new Promise((o,g)=>{let m;const i=(0,d.default)(),F=(C,v)=>{m&&i.closeSync(m),C?g(C):o((0,e.detect)(v))};if(r&&r.sampleSize){m=i.openSync(n,"r");const C=Buffer.allocUnsafe(r.sampleSize);i.read(m,C,0,r.sampleSize,r.offset,v=>{F(v,C)});return}i.readFile(n,F)});e.detectFile=R;const $=(n,r={})=>{const o=(0,d.default)();if(r&&r.sampleSize){const g=o.openSync(n,"r"),m=Buffer.allocUnsafe(r.sampleSize);return o.readSync(g,m,0,r.sampleSize,r.offset),o.closeSync(g),(0,e.detect)(m)}return(0,e.detect)(o.readFileSync(n))};e.detectFileSync=$,e.default={analyse:e.analyse,detect:e.detect,detectFileSync:e.detectFileSync,detectFile:e.detectFile}})(V);const C0=G(V);export{B0 as a,C0 as b,_ as c,G as g};
