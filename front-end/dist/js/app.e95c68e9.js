(function(t){function e(e){for(var p,i,d=e[0],o=e[1],r=e[2],g=0,l=[];g<d.length;g++)i=d[g],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&l.push(s[i][0]),s[i]=0;for(p in o)Object.prototype.hasOwnProperty.call(o,p)&&(t[p]=o[p]);m&&m(e);while(l.length)l.shift()();return n.push.apply(n,r||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],p=!0,d=1;d<a.length;d++){var o=a[d];0!==s[o]&&(p=!1)}p&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var p={},s={app:0},n=[];function i(e){if(p[e])return p[e].exports;var a=p[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=p,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var p in t)i.d(a,p,function(e){return t[e]}.bind(null,p));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var d=window["webpackJsonp"]=window["webpackJsonp"]||[],o=d.push.bind(d);d.push=e,d=d.slice();for(var r=0;r<d.length;r++)e(d[r]);var m=o;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var p=a("85ec"),s=a.n(p);s.a},"48b7":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var p=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"menu"},[a("ul",[t._m(0),a("li",[a("a",[a("router-link",{attrs:{to:"/"}},[t._v("Pokemon Team")])],1)]),a("li",[a("a",[a("router-link",{attrs:{to:"/admin"}},[t._v("Team Builder")])],1)])])]),t._m(1),a("div",{staticClass:"content"},[a("router-view")],1),t._m(2)])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{staticClass:"active-menu"},[a("img",{attrs:{src:"/pokemon-logo.png"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("h1",[t._v("Gen 1 Pokemon Team")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("a",{attrs:{href:"https://github.com/lathorne/creative-4"}},[t._v("https://github.com/lathorne/creative-4")]),a("div",[t._v(" Logan Thorneloe & Clint Frandsen")])])}],i=(a("034f"),a("2877")),d={},o=Object(i["a"])(d,s,n,!1,null,null,null),r=o.exports,m=a("8c4f"),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("section",{staticClass:"image-gallery"},t._l(t.items,(function(e){return a("div",{key:e._id,staticClass:"image"},[a("h2",[t._v(t._s(e.name))]),a("img",{attrs:{src:"/images/pokemon_images/"+e.path}}),a("div",[t._v(t._s(e.desc))]),a("div",{staticClass:"stat-box"},[t._m(0,!0),a("p",[t._v("Type: "+t._s(e.type1)+" & "+t._s(e.type2))]),a("div",{staticClass:"grid-container"},[a("div",{staticClass:"grid-item"},[t._v("HP: "+t._s(e.hp))]),a("div",{staticClass:"grid-item"},[t._v("Atk: "+t._s(e.attack))]),a("div",{staticClass:"grid-item"},[t._v("Def: "+t._s(e.defense))]),a("div",{staticClass:"grid-item"},[t._v("Speed: "+t._s(e.sp))]),a("div",{staticClass:"grid-item"},[t._v("Sp.Atk: "+t._s(e.spatk))]),a("div",{staticClass:"grid-item"},[t._v("Sp.Def: "+t._s(e.spdef))])])])])})),0)])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("u",[t._v("Pokemon Stats:")])])}],c=(a("96cf"),a("1da1")),f=a("bc3a"),y=a.n(f),k={name:"Home",data:function(){return{items:[]}},created:function(){this.getItems()},methods:{getItems:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get("/api/items");case 3:return a=e.sent,t.items=a.data,e.abrupt("return",!0);case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}}},h=k,u=(a("ceae"),Object(i["a"])(h,g,l,!1,null,"681785e9",null)),v=u.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"admin"},[this.databaseSize>=6?a("div",{staticStyle:{"font-size":"30px",background:"#4caf50",border:"4px solid #000000",padding:"16px",width:"98.5%","min-width":"580px","text-align":"center"}},[a("strong",[t._v(" You have maxed out your team with 6 Pokemon! Please remove a Pokemon if you wish to add a different one. ")])]):t._e(),a("br"),a("div",{staticClass:"columns"},[a("div",{staticClass:"column-container"},[a("h1",[t._v("Team Builder")]),a("div",{staticClass:"form"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.findTitle,expression:"findTitle"}],attrs:{placeholder:"Search"},domProps:{value:t.findTitle},on:{input:function(e){e.target.composing||(t.findTitle=e.target.value)}}}),t.suggestions.length>0?a("div",{staticClass:"suggestions"},t._l(t.suggestions,(function(e){return a("div",{key:e.id,staticClass:"suggestion",on:{click:function(a){return t.selectItem(e)}}},[t._v(" "+t._s(e.name)+" ")])})),0):t._e()])]),a("div",{staticClass:"column-container"},[a("section",{staticClass:"image-gallery"},t._l(t.databaseItems,(function(e){return a("div",{key:e._id,staticClass:"image",staticStyle:{border:"1px solid #333",padding:"10px"}},[a("h2",[t._v(t._s(e.name))]),a("img",{attrs:{src:"/images/pokemon_images/"+e.path}}),a("div",[t._v(t._s(e.desc))]),a("button",{on:{click:function(a){return t.deleteItem(e)}}},[t._v("Remove")])])})),0)])])])},b=[],A=(a("4de4"),a("caad"),a("b0c0"),a("2532"),[{id:1,name:"\tBulbasaur\t",type1:"Grass",type2:"Poison",total:318,hp:45,attack:49,defense:49,spatk:65,spdef:65,sp:45,image:"bulbasaur.png\t"},{id:2,name:"\tIvysaur\t",type1:"Grass",type2:"Poison",total:405,hp:60,attack:62,defense:63,spatk:80,spdef:80,sp:60,image:"ivysaur.png\t"},{id:3,name:"\tVenusaur\t",type1:"Grass",type2:"Poison",total:525,hp:80,attack:82,defense:83,spatk:100,spdef:100,sp:80,image:"venusaur.png\t"},{id:4,name:"\tCharmander\t",type1:"Fire",type2:"N/A",total:309,hp:39,attack:52,defense:43,spatk:60,spdef:50,sp:65,image:"charmander.png\t"},{id:5,name:"\tCharmeleon\t",type1:"Fire",type2:"N/A",total:405,hp:58,attack:64,defense:58,spatk:80,spdef:65,sp:80,image:"charmeleon.png\t"},{id:6,name:"\tCharizard\t",type1:"Fire",type2:"Flying",total:534,hp:78,attack:84,defense:78,spatk:109,spdef:85,sp:100,image:"charizard.png\t"},{id:7,name:"\tSquirtle\t",type1:"Water",type2:"N/A",total:314,hp:44,attack:48,defense:65,spatk:50,spdef:64,sp:43,image:"squirtle.png\t"},{id:8,name:"\tWartortle\t",type1:"Water",type2:"N/A",total:405,hp:59,attack:63,defense:80,spatk:65,spdef:80,sp:58,image:"\twartortle.png\t"},{id:9,name:"\tBlastoise\t",type1:"Water",type2:"N/A",total:530,hp:79,attack:83,defense:100,spatk:85,spdef:105,sp:78,image:"\tblastoise.png\t"},{id:10,name:"\tCaterpie\t",type1:"Bug",type2:"N/A",total:195,hp:45,attack:30,defense:35,spatk:20,spdef:20,sp:45,image:"\tcaterpie.png\t"},{id:11,name:"\tMetapod\t",type1:"Bug",type2:"N/A",total:205,hp:50,attack:20,defense:55,spatk:25,spdef:25,sp:30,image:"\tmetapod.png\t"},{id:12,name:"\tButterfree\t",type1:"Bug",type2:"Flying",total:395,hp:60,attack:45,defense:50,spatk:90,spdef:80,sp:70,image:"\tbutterfree.png\t"},{id:13,name:"\tWeedle\t",type1:"Bug",type2:"Poison",total:195,hp:40,attack:35,defense:30,spatk:20,spdef:20,sp:50,image:"\tweedle.png\t"},{id:14,name:"\tKakuna\t",type1:"Bug",type2:"Poison",total:205,hp:45,attack:25,defense:50,spatk:25,spdef:25,sp:35,image:"\tkakuna.png\t"},{id:15,name:"\tBeedrill\t",type1:"Bug",type2:"Poison",total:395,hp:65,attack:90,defense:40,spatk:45,spdef:80,sp:75,image:"beedrill.png\t"},{id:16,name:"\tPidgey\t",type1:"Normal",type2:"Flying",total:251,hp:40,attack:45,defense:40,spatk:35,spdef:35,sp:56,image:"pidgey.png\t"},{id:17,name:"\tPidgeotto\t",type1:"Normal",type2:"Flying",total:349,hp:63,attack:60,defense:55,spatk:50,spdef:50,sp:71,image:"\tpidgeotto.png\t"},{id:18,name:"\tPidgeot\t",type1:"Normal",type2:"Flying",total:479,hp:83,attack:80,defense:75,spatk:70,spdef:70,sp:101,image:"\tpidgeot.png\t"},{id:19,name:"\tRattata\t",type1:"Normal",type2:"N/A",total:253,hp:30,attack:56,defense:35,spatk:25,spdef:35,sp:72,image:"\trattata.png\t"},{id:20,name:"\tRaticate\t",type1:"Normal",type2:"N/A",total:413,hp:55,attack:81,defense:60,spatk:50,spdef:70,sp:97,image:"\traticate.png\t"},{id:21,name:"\tSpearow\t",type1:"Normal",type2:"Flying",total:262,hp:40,attack:60,defense:30,spatk:31,spdef:31,sp:70,image:"\tspearow.png\t"},{id:22,name:"\tFearow\t",type1:"Normal",type2:"Flying",total:442,hp:65,attack:90,defense:65,spatk:61,spdef:61,sp:100,image:"\tfearow.png\t"},{id:23,name:"\tEkans\t",type1:"Poison",type2:"N/A",total:288,hp:35,attack:60,defense:44,spatk:40,spdef:54,sp:55,image:"\tekans.png\t"},{id:24,name:"\tArbok\t",type1:"Poison",type2:"N/A",total:438,hp:60,attack:85,defense:69,spatk:65,spdef:79,sp:80,image:"\tarbok.png\t"},{id:25,name:"\tPikachu\t",type1:"Electric",type2:"N/A",total:320,hp:35,attack:55,defense:40,spatk:50,spdef:50,sp:90,image:"\tpikachu.png\t"},{id:26,name:"\tRaichu\t",type1:"Electric",type2:"N/A",total:485,hp:60,attack:90,defense:55,spatk:90,spdef:80,sp:110,image:"\traichu.png\t"},{id:27,name:"\tSandshrew\t",type1:"Ground",type2:"N/A",total:300,hp:50,attack:75,defense:85,spatk:20,spdef:30,sp:40,image:"\tsandshrew.png\t"},{id:28,name:"\tSandslash\t",type1:"Ground",type2:"N/A",total:450,hp:75,attack:100,defense:110,spatk:45,spdef:55,sp:65,image:"\tsandslash.png\t"},{id:29,name:"\tNidoran♀\t",type1:"Poison",type2:"N/A",total:275,hp:55,attack:47,defense:52,spatk:40,spdef:40,sp:41,image:"\tnidoran-f.png\t"},{id:30,name:"\tNidorina\t",type1:"Poison",type2:"N/A",total:365,hp:70,attack:62,defense:67,spatk:55,spdef:55,sp:56,image:"\tnidorina.png\t"},{id:31,name:"\tNidoqueen\t",type1:"Poison",type2:"Ground",total:505,hp:90,attack:92,defense:87,spatk:75,spdef:85,sp:76,image:"\tnidoqueen.png\t"},{id:32,name:"\tNidoran♂\t",type1:"Poison",type2:"N/A",total:273,hp:46,attack:57,defense:40,spatk:40,spdef:40,sp:50,image:"\tnidoran-m.png\t"},{id:33,name:"\tNidorino\t",type1:"Poison",type2:"N/A",total:365,hp:61,attack:72,defense:57,spatk:55,spdef:55,sp:65,image:"\tnidorino.png\t"},{id:34,name:"\tNidoking\t",type1:"Poison",type2:"Ground",total:505,hp:81,attack:102,defense:77,spatk:85,spdef:75,sp:85,image:"\tnidoking.png\t"},{id:35,name:"\tClefairy\t",type1:"Fairy",type2:"N/A",total:323,hp:70,attack:45,defense:48,spatk:60,spdef:65,sp:35,image:"\tclefairy.png\t"},{id:36,name:"\tClefable\t",type1:"Fairy",type2:"N/A",total:483,hp:95,attack:70,defense:73,spatk:95,spdef:90,sp:60,image:"\tclefable.png\t"},{id:37,name:"\tVulpix\t",type1:"Fire",type2:"N/A",total:299,hp:38,attack:41,defense:40,spatk:50,spdef:65,sp:65,image:"\tvulpix.png\t"},{id:38,name:"\tNinetales\t",type1:"Fire",type2:"N/A",total:505,hp:73,attack:76,defense:75,spatk:81,spdef:100,sp:100,image:"\tninetales.png\t"},{id:39,name:"\tJigglypuff\t",type1:"Normal",type2:"Fairy",total:270,hp:115,attack:45,defense:20,spatk:45,spdef:25,sp:20,image:"\tjigglypuff.png\t"},{id:40,name:"\tWigglytuff\t",type1:"Normal",type2:"Fairy",total:435,hp:140,attack:70,defense:45,spatk:85,spdef:50,sp:45,image:"\twigglytuff.png\t"},{id:41,name:"\tZubat\t",type1:"Poison",type2:"Flying",total:245,hp:40,attack:45,defense:35,spatk:30,spdef:40,sp:55,image:"\tzubat.png\t"},{id:42,name:"\tGolbat\t",type1:"Poison",type2:"Flying",total:455,hp:75,attack:80,defense:70,spatk:65,spdef:75,sp:90,image:"\tgolbat.png\t"},{id:43,name:"\tOddish\t",type1:"Grass",type2:"Poison",total:320,hp:45,attack:50,defense:55,spatk:75,spdef:65,sp:30,image:"\toddish.png\t"},{id:44,name:"\tGloom\t",type1:"Grass",type2:"Poison",total:395,hp:60,attack:65,defense:70,spatk:85,spdef:75,sp:40,image:"\tgloom.png\t"},{id:45,name:"\tVileplume\t",type1:"Grass",type2:"Poison",total:490,hp:75,attack:80,defense:85,spatk:110,spdef:90,sp:50,image:"\tvileplume.png\t"},{id:46,name:"\tParas\t",type1:"Bug",type2:"Grass",total:285,hp:35,attack:70,defense:55,spatk:45,spdef:55,sp:25,image:"\tparas.png\t"},{id:47,name:"\tParasect\t",type1:"Bug",type2:"Grass",total:405,hp:60,attack:95,defense:80,spatk:60,spdef:80,sp:30,image:"\tparasect.png\t"},{id:48,name:"\tVenonat\t",type1:"Bug",type2:"Poison",total:305,hp:60,attack:55,defense:50,spatk:40,spdef:55,sp:45,image:"\tvenonat.png\t"},{id:49,name:"\tVenomoth\t",type1:"Bug",type2:"Poison",total:450,hp:70,attack:65,defense:60,spatk:90,spdef:75,sp:90,image:"\tvenomoth.png\t"},{id:50,name:"\tDiglett\t",type1:"Ground",type2:"N/A",total:265,hp:10,attack:55,defense:25,spatk:35,spdef:45,sp:95,image:"\tdiglett.png\t"},{id:51,name:"\tDugtrio\t",type1:"Ground",type2:"N/A",total:405,hp:35,attack:80,defense:50,spatk:50,spdef:70,sp:120,image:"\tdugtrio.png\t"},{id:52,name:"\tMeowth\t",type1:"Normal",type2:"N/A",total:290,hp:40,attack:45,defense:35,spatk:40,spdef:40,sp:90,image:"\tmeowth.png\t"},{id:53,name:"\tPersian\t",type1:"Normal",type2:"N/A",total:440,hp:65,attack:70,defense:60,spatk:65,spdef:65,sp:115,image:"\tpersian.png\t"},{id:54,name:"\tPsyduck\t",type1:"Water",type2:"N/A",total:320,hp:50,attack:52,defense:48,spatk:65,spdef:50,sp:55,image:"\tpsyduck.png\t"},{id:55,name:"\tGolduck\t",type1:"Water",type2:"N/A",total:500,hp:80,attack:82,defense:78,spatk:95,spdef:80,sp:85,image:"\tgolduck.png\t"},{id:56,name:"\tMankey\t",type1:"Fighting",type2:"N/A",total:305,hp:40,attack:80,defense:35,spatk:35,spdef:45,sp:70,image:"\tmankey.png\t"},{id:57,name:"\tPrimeape\t",type1:"Fighting",type2:"N/A",total:455,hp:65,attack:105,defense:60,spatk:60,spdef:70,sp:95,image:"\tprimeape.png\t"},{id:58,name:"\tGrowlithe\t",type1:"Fire",type2:"N/A",total:350,hp:55,attack:70,defense:45,spatk:70,spdef:50,sp:60,image:"\tgrowlithe.png\t"},{id:59,name:"\tArcanine\t",type1:"Fire",type2:"N/A",total:555,hp:90,attack:110,defense:80,spatk:100,spdef:80,sp:95,image:"\tarcanine.png\t"},{id:60,name:"\tPoliwag\t",type1:"Water",type2:"N/A",total:300,hp:40,attack:50,defense:40,spatk:40,spdef:40,sp:90,image:"\tpoliwag.png\t"},{id:61,name:"\tPoliwhirl\t",type1:"Water",type2:"N/A",total:385,hp:65,attack:65,defense:65,spatk:50,spdef:50,sp:90,image:"\tpoliwhirl.png\t"},{id:62,name:"\tPoliwrath\t",type1:"Water",type2:"Fighting",total:510,hp:90,attack:95,defense:95,spatk:70,spdef:90,sp:70,image:"\tpoliwrath.png\t"},{id:63,name:"\tAbra\t",type1:"Psychic",type2:"N/A",total:310,hp:25,attack:20,defense:15,spatk:105,spdef:55,sp:90,image:"\tabra.png\t"},{id:64,name:"\tKadabra\t",type1:"Psychic",type2:"N/A",total:400,hp:40,attack:35,defense:30,spatk:120,spdef:70,sp:105,image:"\tkadabra.png\t"},{id:65,name:"\tAlakazam\t",type1:"Psychic",type2:"N/A",total:500,hp:55,attack:50,defense:45,spatk:135,spdef:95,sp:120,image:"\talakazam.png\t"},{id:66,name:"\tMachop\t",type1:"Fighting",type2:"N/A",total:305,hp:70,attack:80,defense:50,spatk:35,spdef:35,sp:35,image:"\tmachop.png\t"},{id:67,name:"\tMachoke\t",type1:"Fighting",type2:"N/A",total:405,hp:80,attack:100,defense:70,spatk:50,spdef:60,sp:45,image:"\tmachoke.png\t"},{id:68,name:"\tMachamp\t",type1:"Fighting",type2:"N/A",total:505,hp:90,attack:130,defense:80,spatk:65,spdef:85,sp:55,image:"\tmachamp.png\t"},{id:69,name:"\tBellsprout\t",type1:"Grass",type2:"Poison",total:300,hp:50,attack:75,defense:35,spatk:70,spdef:30,sp:40,image:"\tbellsprout.png\t"},{id:70,name:"\tWeepinbell\t",type1:"Grass",type2:"Poison",total:390,hp:65,attack:90,defense:50,spatk:85,spdef:45,sp:55,image:"\tweepinbell.png\t"},{id:71,name:"\tVictreebel\t",type1:"Grass",type2:"Poison",total:490,hp:80,attack:105,defense:65,spatk:100,spdef:70,sp:70,image:"\tvictreebel.png\t"},{id:72,name:"\tTentacool\t",type1:"Water",type2:"Poison",total:335,hp:40,attack:40,defense:35,spatk:50,spdef:100,sp:70,image:"\ttentacool.png\t"},{id:73,name:"\tTentacruel\t",type1:"Water",type2:"Poison",total:515,hp:80,attack:70,defense:65,spatk:80,spdef:120,sp:100,image:"\ttentacruel.png\t"},{id:74,name:"\tGeodude\t",type1:"Rock",type2:"Ground",total:300,hp:40,attack:80,defense:100,spatk:30,spdef:30,sp:20,image:"\tgeodude.png\t"},{id:75,name:"\tGraveler\t",type1:"Rock",type2:"Ground",total:390,hp:55,attack:95,defense:115,spatk:45,spdef:45,sp:35,image:"\tgraveler.png\t"},{id:76,name:"\tGolem\t",type1:"Rock",type2:"Ground",total:495,hp:80,attack:120,defense:130,spatk:55,spdef:65,sp:45,image:"\tgolem.png\t"},{id:77,name:"\tPonyta\t",type1:"Fire",type2:"N/A",total:410,hp:50,attack:85,defense:55,spatk:65,spdef:65,sp:90,image:"\tponyta.png\t"},{id:78,name:"\tRapidash\t",type1:"Fire",type2:"N/A",total:500,hp:65,attack:100,defense:70,spatk:80,spdef:80,sp:105,image:"\trapidash.png\t"},{id:79,name:"\tSlowpoke\t",type1:"Water",type2:"Psychic",total:315,hp:90,attack:65,defense:65,spatk:40,spdef:40,sp:15,image:"\tslowpoke.png\t"},{id:80,name:"\tSlowbro\t",type1:"Water",type2:"Psychic",total:490,hp:95,attack:75,defense:110,spatk:100,spdef:80,sp:30,image:"\tslowbro.png\t"},{id:81,name:"\tMagnemite\t",type1:"Electric",type2:"Steel",total:325,hp:25,attack:35,defense:70,spatk:95,spdef:55,sp:45,image:"\tmagnemite.png\t"},{id:82,name:"\tMagneton\t",type1:"Electric",type2:"Steel",total:465,hp:50,attack:60,defense:95,spatk:120,spdef:70,sp:70,image:"\tmagneton.png\t"},{id:83,name:"\tFarfetch'd\t",type1:"Normal",type2:"Flying",total:352,hp:52,attack:65,defense:55,spatk:58,spdef:62,sp:60,image:"\tfarfetch'd.png\t"},{id:84,name:"\tDoduo\t",type1:"Normal",type2:"Flying",total:310,hp:35,attack:85,defense:45,spatk:35,spdef:35,sp:75,image:"\tdoduo.png\t"},{id:85,name:"\tDodrio\t",type1:"Normal",type2:"Flying",total:460,hp:60,attack:110,defense:70,spatk:60,spdef:60,sp:100,image:"\tdodrio.png\t"},{id:86,name:"\tSeel\t",type1:"Water",type2:"N/A",total:325,hp:65,attack:45,defense:55,spatk:45,spdef:70,sp:45,image:"\tseel.png\t"},{id:87,name:"\tDewgong\t",type1:"Water",type2:"Ice",total:475,hp:90,attack:70,defense:80,spatk:70,spdef:95,sp:70,image:"\tdewgong.png\t"},{id:88,name:"\tGrimer\t",type1:"Poison",type2:"N/A",total:325,hp:80,attack:80,defense:50,spatk:40,spdef:50,sp:25,image:"\tgrimer.png\t"},{id:89,name:"\tMuk\t",type1:"Poison",type2:"N/A",total:500,hp:105,attack:105,defense:75,spatk:65,spdef:100,sp:50,image:"\tmuk.png\t"},{id:90,name:"\tShellder\t",type1:"Water",type2:"N/A",total:305,hp:30,attack:65,defense:100,spatk:45,spdef:25,sp:40,image:"\tshellder.png\t"},{id:91,name:"\tCloyster\t",type1:"Water",type2:"Ice",total:525,hp:50,attack:95,defense:180,spatk:85,spdef:45,sp:70,image:"\tcloyster.png\t"},{id:92,name:"\tGastly\t",type1:"\tGhost\t",type2:"Poison",total:310,hp:30,attack:35,defense:30,spatk:100,spdef:35,sp:80,image:"\tgastly.png\t"},{id:93,name:"\tHaunter\t",type1:"\tGhost\t",type2:"Poison",total:405,hp:45,attack:50,defense:45,spatk:115,spdef:55,sp:95,image:"\thaunter.png\t"},{id:94,name:"\tGengar\t",type1:"\tGhost\t",type2:"Poison",total:500,hp:60,attack:65,defense:60,spatk:130,spdef:75,sp:110,image:"\tgengar.png\t"},{id:95,name:"\tOnix\t",type1:"Rock",type2:"Ground",total:385,hp:35,attack:45,defense:160,spatk:30,spdef:45,sp:70,image:"\tonix.png\t"},{id:96,name:"\tDrowzee\t",type1:"Psychic",type2:"N/A",total:328,hp:60,attack:48,defense:45,spatk:43,spdef:90,sp:42,image:"\tdrowzee.png\t"},{id:97,name:"\tHypno\t",type1:"Psychic",type2:"N/A",total:483,hp:85,attack:73,defense:70,spatk:73,spdef:115,sp:67,image:"\thypno.png\t"},{id:98,name:"\tKrabby\t",type1:"Water",type2:"N/A",total:325,hp:30,attack:105,defense:90,spatk:25,spdef:25,sp:50,image:"\tkrabby.png\t"},{id:99,name:"\tKingler\t",type1:"Water",type2:"N/A",total:475,hp:55,attack:130,defense:115,spatk:50,spdef:50,sp:75,image:"\tkingler.png\t"},{id:100,name:"\tVoltorb\t",type1:"Electric",type2:"N/A",total:330,hp:40,attack:30,defense:50,spatk:55,spdef:55,sp:100,image:"\tvoltorb.png\t"},{id:101,name:"\tElectrode\t",type1:"Electric",type2:"N/A",total:480,hp:60,attack:50,defense:70,spatk:80,spdef:80,sp:140,image:"\telectrode.png\t"},{id:102,name:"\tExeggcute\t",type1:"Grass",type2:"Psychic",total:325,hp:60,attack:40,defense:80,spatk:60,spdef:45,sp:40,image:"\texeggcute.png\t"},{id:103,name:"\tExeggutor\t",type1:"Grass",type2:"Psychic",total:520,hp:95,attack:95,defense:85,spatk:125,spdef:65,sp:55,image:"\texeggutor.png\t"},{id:104,name:"\tCubone\t",type1:"Ground",type2:"N/A",total:320,hp:50,attack:50,defense:95,spatk:40,spdef:50,sp:35,image:"\tcubone.png\t"},{id:105,name:"\tMarowak\t",type1:"Ground",type2:"N/A",total:425,hp:60,attack:80,defense:110,spatk:50,spdef:80,sp:45,image:"\tmarowak.png\t"},{id:106,name:"\tHitmonlee\t",type1:"Fighting",type2:"N/A",total:455,hp:50,attack:120,defense:53,spatk:35,spdef:110,sp:87,image:"\thitmonlee.png\t"},{id:107,name:"\tHitmonchan\t",type1:"Fighting",type2:"N/A",total:455,hp:50,attack:105,defense:79,spatk:35,spdef:110,sp:76,image:"\thitmonchan.png\t"},{id:108,name:"\tLickitung\t",type1:"Normal",type2:"N/A",total:385,hp:90,attack:55,defense:75,spatk:60,spdef:75,sp:30,image:"\tlickitung.png\t"},{id:109,name:"\tKoffing\t",type1:"Poison",type2:"N/A",total:340,hp:40,attack:65,defense:95,spatk:60,spdef:45,sp:35,image:"\tkoffing.png\t"},{id:110,name:"\tWeezing\t",type1:"Poison",type2:"N/A",total:490,hp:65,attack:90,defense:120,spatk:85,spdef:70,sp:60,image:"\tweezing.png\t"},{id:111,name:"\tRhyhorn\t",type1:"Ground",type2:"Rock",total:345,hp:80,attack:85,defense:95,spatk:30,spdef:30,sp:25,image:"\trhyhorn.png\t"},{id:112,name:"\tRhydon\t",type1:"Ground",type2:"Rock",total:485,hp:105,attack:130,defense:120,spatk:45,spdef:45,sp:40,image:"\trhydon.png\t"},{id:113,name:"\tChansey\t",type1:"Normal",type2:"N/A",total:450,hp:250,attack:5,defense:5,spatk:35,spdef:105,sp:50,image:"\tchansey.png\t"},{id:114,name:"\tTangela\t",type1:"Grass",type2:"N/A",total:435,hp:65,attack:55,defense:115,spatk:100,spdef:40,sp:60,image:"\ttangela.png\t"},{id:115,name:"\tKangaskhan\t",type1:"Normal",type2:"N/A",total:490,hp:105,attack:95,defense:80,spatk:40,spdef:80,sp:90,image:"\tkangaskhan.png\t"},{id:116,name:"\tHorsea\t",type1:"Water",type2:"N/A",total:295,hp:30,attack:40,defense:70,spatk:70,spdef:25,sp:60,image:"\thorsea.png\t"},{id:117,name:"\tSeadra\t",type1:"Water",type2:"N/A",total:440,hp:55,attack:65,defense:95,spatk:95,spdef:45,sp:85,image:"\tseadra.png\t"},{id:118,name:"\tGoldeen\t",type1:"Water",type2:"N/A",total:320,hp:45,attack:67,defense:60,spatk:35,spdef:50,sp:63,image:"\tgoldeen.png\t"},{id:119,name:"\tSeaking\t",type1:"Water",type2:"N/A",total:450,hp:80,attack:92,defense:65,spatk:65,spdef:80,sp:68,image:"\tseaking.png\t"},{id:120,name:"\tStaryu\t",type1:"Water",type2:"N/A",total:340,hp:30,attack:45,defense:55,spatk:70,spdef:55,sp:85,image:"\tstaryu.png\t"},{id:121,name:"\tStarmie\t",type1:"Water",type2:"Psychic",total:520,hp:60,attack:75,defense:85,spatk:100,spdef:85,sp:115,image:"\tstarmie.png\t"},{id:122,name:"\tMr. Mime\t",type1:"Psychic",type2:"Fairy",total:460,hp:40,attack:45,defense:65,spatk:100,spdef:120,sp:90,image:"\tmr-mime.png\t"},{id:123,name:"\tScyther\t",type1:"Bug",type2:"Flying",total:500,hp:70,attack:110,defense:80,spatk:55,spdef:80,sp:105,image:"\tscyther.png\t"},{id:124,name:"\tJynx\t",type1:"Ice",type2:"Psychic",total:455,hp:65,attack:50,defense:35,spatk:115,spdef:95,sp:95,image:"\tjynx.png\t"},{id:125,name:"\tElectabuzz\t",type1:"Electric",type2:"N/A",total:490,hp:65,attack:83,defense:57,spatk:95,spdef:85,sp:105,image:"\telectabuzz.png\t"},{id:126,name:"\tMagmar\t",type1:"Fire",type2:"N/A",total:495,hp:65,attack:95,defense:57,spatk:100,spdef:85,sp:93,image:"\tmagmar.png\t"},{id:127,name:"\tPinsir\t",type1:"Bug",type2:"N/A",total:500,hp:65,attack:125,defense:100,spatk:55,spdef:70,sp:85,image:"\tpinsir.png\t"},{id:128,name:"\tTauros\t",type1:"Normal",type2:"N/A",total:490,hp:75,attack:100,defense:95,spatk:40,spdef:70,sp:110,image:"\ttauros.png\t"},{id:129,name:"\tMagikarp\t",type1:"Water",type2:"N/A",total:200,hp:20,attack:10,defense:55,spatk:15,spdef:20,sp:80,image:"\tmagikarp.png\t"},{id:130,name:"\tGyarados\t",type1:"Water",type2:"Flying",total:540,hp:95,attack:125,defense:79,spatk:60,spdef:100,sp:81,image:"\tgyarados.png\t"},{id:131,name:"\tLapras\t",type1:"Water",type2:"Ice",total:535,hp:130,attack:85,defense:80,spatk:85,spdef:95,sp:60,image:"\tlapras.png\t"},{id:132,name:"\tDitto\t",type1:"Normal",type2:"N/A",total:288,hp:48,attack:48,defense:48,spatk:48,spdef:48,sp:48,image:"\tditto.png\t"},{id:133,name:"\tEevee\t",type1:"Normal",type2:"N/A",total:325,hp:55,attack:55,defense:50,spatk:45,spdef:65,sp:55,image:"\teevee.png\t"},{id:134,name:"\tVaporeon\t",type1:"Water",type2:"N/A",total:525,hp:130,attack:65,defense:60,spatk:110,spdef:95,sp:65,image:"\tvaporeon.png\t"},{id:135,name:"\tJolteon\t",type1:"Electric",type2:"N/A",total:525,hp:65,attack:65,defense:60,spatk:110,spdef:95,sp:130,image:"\tjolteon.png\t"},{id:136,name:"\tFlareon\t",type1:"Fire",type2:"N/A",total:525,hp:65,attack:130,defense:60,spatk:95,spdef:110,sp:65,image:"\tflareon.png\t"},{id:137,name:"\tPorygon\t",type1:"Normal",type2:"N/A",total:395,hp:65,attack:60,defense:70,spatk:85,spdef:75,sp:40,image:"\tporygon.png\t"},{id:138,name:"\tOmanyte\t",type1:"Rock",type2:"Water",total:355,hp:35,attack:40,defense:100,spatk:90,spdef:55,sp:35,image:"\tomanyte.png\t"},{id:139,name:"\tOmastar\t",type1:"Rock",type2:"Water",total:495,hp:70,attack:60,defense:125,spatk:115,spdef:70,sp:55,image:"\tomastar.png\t"},{id:140,name:"\tKabuto\t",type1:"Rock",type2:"Water",total:355,hp:30,attack:80,defense:90,spatk:55,spdef:45,sp:55,image:"\tkabuto.png\t"},{id:141,name:"\tKabutops\t",type1:"Rock",type2:"Water",total:495,hp:60,attack:115,defense:105,spatk:65,spdef:70,sp:80,image:"\tkabutops.png\t"},{id:142,name:"\tAerodactyl\t",type1:"Rock",type2:"Flying",total:515,hp:80,attack:105,defense:65,spatk:60,spdef:75,sp:130,image:"\taerodactyl.png\t"},{id:143,name:"\tSnorlax\t",type1:"Normal",type2:"N/A",total:540,hp:160,attack:110,defense:65,spatk:65,spdef:110,sp:30,image:"\tsnorlax.png\t"},{id:144,name:"\tArticuno\t",type1:"Ice",type2:"Flying",total:580,hp:90,attack:85,defense:100,spatk:95,spdef:125,sp:85,image:"\tarticuno.png\t"},{id:145,name:"\tZapdos\t",type1:"Electric",type2:"Flying",total:580,hp:90,attack:90,defense:85,spatk:125,spdef:90,sp:100,image:"\tzapdos.png\t"},{id:146,name:"\tMoltres\t",type1:"Fire",type2:"Flying",total:580,hp:90,attack:100,defense:90,spatk:125,spdef:85,sp:90,image:"\tmoltres.png\t"},{id:147,name:"\tDratini\t",type1:"Dragon",type2:"N/A",total:300,hp:41,attack:64,defense:45,spatk:50,spdef:50,sp:50,image:"\tdratini.png\t"},{id:148,name:"\tDragonair\t",type1:"Dragon",type2:"N/A",total:420,hp:61,attack:84,defense:65,spatk:70,spdef:70,sp:70,image:"\tdragonair.png\t"},{id:149,name:"\tDragonite\t",type1:"Dragon",type2:"Flying",total:600,hp:91,attack:134,defense:95,spatk:100,spdef:100,sp:80,image:"\tdragonite.png\t"},{id:150,name:"\tMewtwo\t",type1:"Psychic",type2:"N/A",total:680,hp:106,attack:110,defense:90,spatk:154,spdef:90,sp:130,image:"\tmewtwo.png\t"},{id:151,name:"\tMew\t",type1:"Psychic",type2:"N/A",total:600,hp:100,attack:100,defense:100,spatk:100,spdef:100,sp:100,image:"\tmew.png\t"}]),P=A,w={name:"Admin",data:function(){return{title:"",file:null,addItem:null,items:[],databaseItems:[],findTitle:"",findItem:null,firstTextArea:"",databaseSize:0}},computed:{suggestions:function(){var t=this,e=this.items.filter((function(e){return e.name.toLowerCase().includes(t.findTitle.toLowerCase())}));return e.sort((function(t,e){return t.name>e.name}))}},created:function(){this.items=P,this.getItems()},methods:{fileChanged:function(t){this.file=t.target.files[0]},selectItem:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){var p;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!(e.databaseSize>=6)){a.next=2;break}return a.abrupt("return");case 2:return a.prev=2,a.next=5,y.a.post("/api/items",{id:t.id,name:t.name,type1:t.type1,type2:t.type2,total:t.total,hp:t.hp,attack:t.attack,defense:t.defense,spatk:t.spatk,spdef:t.spdef,sp:t.sp,path:t.image});case 5:p=a.sent,e.addItem=p.data,e.getItems(),a.next=14;break;case 10:return a.prev=10,a.t0=a["catch"](2),console.log("error!"),a.abrupt("return");case 14:case"end":return a.stop()}}),a,null,[[2,10]])})))()},getItems:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get("/api/items");case 3:return a=e.sent,t.databaseItems=a.data,t.databaseSize=t.databaseItems.length,e.abrupt("return",!0);case 9:return e.prev=9,e.t0=e["catch"](0),e.abrupt("return");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},deleteItem:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,y.a.delete("/api/items/"+t._id);case 3:return e.findItem=null,e.getItems(),a.abrupt("return",!0);case 8:return a.prev=8,a.t0=a["catch"](0),a.abrupt("return");case 11:case"end":return a.stop()}}),a,null,[[0,8]])})))()}}},_=w,F=(a("e7ad"),Object(i["a"])(_,N,b,!1,null,"ff112f1a",null)),G=F.exports;p["a"].use(m["a"]);var x=[{path:"/",name:"home",component:v},{path:"/admin",name:"admin",component:G}],C=new m["a"]({mode:"history",base:"/",routes:x}),W=C;p["a"].config.productionTip=!1,new p["a"]({router:W,render:function(t){return t(r)}}).$mount("#app")},"85ec":function(t,e,a){},afd1:function(t,e,a){},ceae:function(t,e,a){"use strict";var p=a("48b7"),s=a.n(p);s.a},e7ad:function(t,e,a){"use strict";var p=a("afd1"),s=a.n(p);s.a}});
//# sourceMappingURL=app.e95c68e9.js.map