(function(t){function e(e){for(var a,o,c=e[0],n=e[1],p=e[2],l=0,d=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,p||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,c=1;c<s.length;c++){var n=s[c];0!==r[n]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=s[0]))}return t}var a={},r={app:0},i=[];function o(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=a,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(s,a,function(e){return t[e]}.bind(null,a));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],n=c.push.bind(c);c.push=e,c=c.slice();for(var p=0;p<c.length;p++)e(c[p]);var u=n;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"28aa":function(t,e,s){"use strict";s("fbfd")},"4c6a":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("7a23"),r={id:"store"},i=Object(a["g"])("p",null,[Object(a["g"])("b",null,"Vuex store"),Object(a["g"])("br")],-1),o={class:"state"},c=Object(a["f"])(" - token: "),n={class:"lighter"},p=Object(a["f"])(),u=Object(a["g"])("br",null,null,-1),l=Object(a["f"])(" - user: "),d={class:"lighter"},f=Object(a["f"])(),b=Object(a["g"])("br",null,null,-1),m=Object(a["f"])(" - topTracks: "),y={class:"lighter"},h=Object(a["f"])(),O=Object(a["g"])("br",null,null,-1),g=Object(a["f"])(" - eventSuggestions: "),T={class:"lighter"},A=Object(a["f"])(),E=Object(a["g"])("br",null,null,-1),S={id:"nav"},v=Object(a["f"])("Home"),j={key:0},C=Object(a["f"])("Me"),k={key:2},L=Object(a["f"])("Events");function I(t,e,s,I,H,N){var G=Object(a["x"])("router-link"),x=Object(a["x"])("router-view");return Object(a["q"])(),Object(a["d"])(a["a"],null,[Object(a["g"])("div",r,[i,Object(a["g"])("p",o,[c,Object(a["g"])("span",n,Object(a["z"])(I.displayStoreToken()),1),p,u,l,Object(a["g"])("span",d,Object(a["z"])(I.displayStoreUser()),1),f,b,m,Object(a["g"])("span",y,Object(a["z"])(I.displayStoreTopTracks()),1),h,O,g,Object(a["g"])("span",T,Object(a["z"])(I.displayStoreEventSuggestions()),1),A,E])]),Object(a["g"])("div",S,[Object(a["g"])(G,{to:{name:"Home"}},{default:Object(a["C"])((function(){return[v]})),_:1}),I.getStoreToken.exists?(Object(a["q"])(),Object(a["d"])("span",j," | ")):Object(a["e"])("",!0),I.getStoreToken.exists?(Object(a["q"])(),Object(a["d"])(G,{key:1,to:{name:"Me",params:{accesstoken:I.getStoreToken.value}}},{default:Object(a["C"])((function(){return[C]})),_:1},8,["to"])):Object(a["e"])("",!0),I.getStoreEventSuggestions.exists?(Object(a["q"])(),Object(a["d"])("span",k," | ")):Object(a["e"])("",!0),I.getStoreEventSuggestions.exists?(Object(a["q"])(),Object(a["d"])(G,{key:3,to:{name:"Events"}},{default:Object(a["C"])((function(){return[L]})),_:1})):Object(a["e"])("",!0)]),Object(a["g"])(x)],64)}s("d81d"),s("b0c0");var H=s("5502"),N={setup:function(t){var e=Object(H["b"])(),s=Object(a["b"])((function(){return e.state.accesToken})),r=Object(a["b"])((function(){return e.state.user})),i=Object(a["b"])((function(){return e.state.topTracks})),o=Object(a["b"])((function(){return e.state.eventSuggestions}));function c(){return s.value.exists?"".concat(s.value.value.substr(0,25)," [...]"):"connect w/ spotify"}function n(){return r.value.exists?"".concat(JSON.stringify(r.value).substr(0,25)," [...]"):"connect w/ spotify"}function p(){return i.value.exists?"".concat(JSON.stringify(i.value.map((function(t){return t.name}))).substr(0,25)," [...]"):"connect w/ spotify"}function u(){return o.value.exists?o.value:"feature not implemented"}return{store:e,getStoreToken:s,getStoreUser:r,getStoreTopTracks:i,getStoreEventSuggestions:o,displayStoreToken:c,displayStoreUser:n,displayStoreTopTracks:p,displayStoreEventSuggestions:u}}};s("a0a4");N.render=I;var G=N,x=s("9483");Object(x["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var _=s("6c02"),M={class:"home"};function P(t,e,s,r,i,o){var c=Object(a["x"])("ConnectWithSpotify");return Object(a["q"])(),Object(a["d"])("div",M,[Object(a["g"])(c,{msg:"Welcome to Spot2Rave"})])}var B=Object(a["D"])("data-v-4559dfb8");Object(a["t"])("data-v-4559dfb8");var D={class:"home"},U=Object(a["g"])("p",null,[Object(a["f"])("Explore your favorite artists concerts"),Object(a["g"])("br")],-1),R={key:0};Object(a["r"])();var w=B((function(t,e,s,r,i,o){return Object(a["q"])(),Object(a["d"])("div",D,[Object(a["g"])("h1",null,Object(a["z"])(s.msg),1),U,Object(a["g"])("a",{href:r.loginUrl,target:"_blank",rel:"noopener noreferrer",class:"button--green"}," Connect with Spotify ",8,["href"]),r.getStoreToken.exists?(Object(a["q"])(),Object(a["d"])("p",R,"You already are connected :)")):Object(a["e"])("",!0)])})),V={name:"ConnectWithSpotify",props:{msg:String},setup:function(){var t="https://spot2rave.herokuapp.com/",e="".concat(t,"api/spotify/login");console.log("loginUrl",e,"| process.env.NODE_ENV","production");var s=Object(H["b"])(),r=Object(a["b"])((function(){return s.state.accesToken}));return{loginUrl:e,store:s,getStoreToken:r}}};s("28aa");V.render=w,V.__scopeId="data-v-4559dfb8";var K=V,W={name:"Home",components:{ConnectWithSpotify:K}};W.render=P;var Z=W,Y={class:"about"},F=Object(a["g"])("h1",null,"This is an about page",-1);function X(t,e){return Object(a["q"])(),Object(a["d"])("div",Y,[F])}const J={};J.render=X;var q=J,z=(s("a15b"),Object(a["D"])("data-v-7457ba81"));Object(a["t"])("data-v-7457ba81");var Q={class:"me"},$={key:0},tt={key:1,class:"results"},et={class:" index"},st={class:"name-artists-pop"},at={class:"artists"},rt={class:"name"},it={class:" popularity"};Object(a["r"])();var ot=z((function(t,e,s,r,i,o){return Object(a["q"])(),Object(a["d"])(a["a"],null,[Object(a["g"])("h1",null,Object(a["z"])(r.getStoreUser.display_name),1),Object(a["g"])("div",Q,[r.isLoading?(Object(a["q"])(),Object(a["d"])("span",$,"Loading")):(Object(a["q"])(),Object(a["d"])("div",tt,[(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["w"])(r.getStoreTopTracks,(function(t,e){return Object(a["q"])(),Object(a["d"])("div",{key:t.id,class:"track ",item:t,index:e,onClick:function(e){return r.goToTrack(t.id)}},[Object(a["g"])("p",et,Object(a["z"])(e+1),1),Object(a["g"])("img",{class:"image",src:t.image_low},null,8,["src"]),Object(a["g"])("div",st,[Object(a["g"])("p",at,Object(a["z"])(t.artists.join(", ")),1),Object(a["g"])("p",rt,Object(a["z"])(t.name),1),Object(a["g"])("p",it,"Popularité sur Spotify: "+Object(a["z"])(t.popularity)+"/100",1)])],8,["item","index","onClick"])})),128))]))])],64)})),ct=(s("96cf"),s("1da1")),nt=(s("d3b7"),s("d4ec")),pt=s("bee2"),ut=s("bc3a"),lt=s.n(ut),dt=s("bdab"),ft="https://api.spotify.com/v1/me/top/tracks",bt="https://api.spotify.com/v1/me",mt=function(){function t(){Object(nt["a"])(this,t)}return Object(pt["a"])(t,null,[{key:"getUser",value:function(t){return console.log("SpotifyService | getUser"),new Promise((function(e,s){lt.a.get(bt,{headers:{authorization:"Bearer "+t,"content-type":"application/json"}}).then((function(t){console.log(t.data),e(t.data)})).catch((function(t){console.log("err:",t),e([])}))}))}},{key:"getMockUser",value:function(t){return console.log("SpotifyService | getMockUser"),new Promise((function(t,e){t(dt.user.data)}))}},{key:"getTopTrack",value:function(t){return console.log("SpotifyService | getTopTrack"),new Promise((function(e,s){lt.a.get(ft,{headers:{authorization:"Bearer "+t,"content-type":"application/json"}}).then((function(t){var s=t.data.items;e(s.map((function(t){return{id:t.id,name:t.name,artists:t.artists.map((function(t){return t.name})),release_date:t.release_date,popularity:t.popularity,image:t.album.images[t.album.images.length-1].url}})))})).catch((function(t){console.log("err:",t),e([])}))}))}},{key:"getMockTopTrack",value:function(t){return console.log("SpotifyService | getMockTopTrack"),new Promise((function(t,e){t(dt.topTracks.items.map((function(t){return{id:t.id,name:t.name,artists:t.artists.map((function(t){return t.name})),release_date:t.release_date,popularity:t.popularity,image_high:t.album.images[0].url,image_med:t.album.images[1].url,image_low:t.album.images[2].url}})))}))}}]),t}(),yt=mt,ht={props:["accesstoken"],setup:function(t){var e=Object(a["v"])(!0),s=Object(a["v"])([]),r=Object(H["b"])(),i=Object(_["c"])();Object(a["n"])(Object(ct["a"])(regeneratorRuntime.mark((function a(){var i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!t.accesstoken||r.state.accesToken.exists){a.next=12;break}return f(t.accesstoken),a.next=4,p(t.accesstoken);case 4:return s.value=a.sent,m(s.value),a.next=8,l(t.accesstoken);case 8:i=a.sent,b(i),a.next=13;break;case 12:console.log("nothing to update");case 13:e.value=!1;case 14:case"end":return a.stop()}}),a)}))));var o=Object(a["b"])((function(){return r.state.accesToken})),c=Object(a["b"])((function(){return r.state.topTracks})),n=Object(a["b"])((function(){return r.state.user}));function p(t){return u.apply(this,arguments)}function u(){return u=Object(ct["a"])(regeneratorRuntime.mark((function t(e){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,yt.getMockTopTrack();case 2:return s=t.sent,t.abrupt("return",s);case 4:case"end":return t.stop()}}),t)}))),u.apply(this,arguments)}function l(t){return d.apply(this,arguments)}function d(){return d=Object(ct["a"])(regeneratorRuntime.mark((function t(e){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,yt.getMockUser();case 2:return s=t.sent,t.abrupt("return",s);case 4:case"end":return t.stop()}}),t)}))),d.apply(this,arguments)}function f(t){r.dispatch("setAccessToken",t)}function b(t){r.dispatch("setUserInStore",t)}function m(t){r.dispatch("setTopTrackInStore",t)}function y(t){i.push("/me/track/".concat(t))}return{isLoading:e,topTracks:s,store:r,getStoreToken:o,getStoreTopTracks:c,getStoreUser:n,fetchTopTracks:p,fetchUser:l,setTokenInStore:f,setUserInStore:b,setTopTracksInStore:m,goToTrack:y}}};s("e575");ht.render=ot,ht.__scopeId="data-v-7457ba81";var Ot=ht,gt=Object(a["D"])("data-v-797141dd");Object(a["t"])("data-v-797141dd");var Tt={class:"track"},At={key:0},Et={key:1,class:"results"},St={class:"name-artists-pop"},vt={class:"artists"},jt={class:"name"},Ct={class:" popularity"},kt=Object(a["f"])(" Go back ");Object(a["r"])();var Lt=gt((function(t,e,s,r,i,o){var c=Object(a["x"])("router-link");return Object(a["q"])(),Object(a["d"])(a["a"],null,[Object(a["g"])("h1",null,Object(a["z"])(r.track.name),1),Object(a["g"])("div",Tt,[r.isLoading?(Object(a["q"])(),Object(a["d"])("span",At,"Loading")):(Object(a["q"])(),Object(a["d"])("div",Et,[Object(a["g"])("img",{class:"image",src:r.track.image_med},null,8,["src"]),Object(a["g"])("div",St,[Object(a["g"])("p",vt,Object(a["z"])(r.track.artists.join(", ")),1),Object(a["g"])("p",jt,Object(a["z"])(r.track.name),1),Object(a["g"])("p",Ct,"Popularité sur Spotify: "+Object(a["z"])(r.track.popularity)+"/100",1)])])),Object(a["g"])(c,{to:{name:"Me",params:{accesstoken:r.getStoreToken.value}}},{default:gt((function(){return[kt]})),_:1},8,["to"])])],64)})),It=(s("7db0"),{props:["id"],setup:function(t){var e=Object(a["v"])(!0),s=Object(a["v"])({}),r=Object(_["c"])(),i=Object(H["b"])();Object(a["n"])(Object(ct["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:c.value.exists?(s.value=n(t.id),e.value=!1):(console.log("store has been reset, back to /"),r.push("/"));case 1:case"end":return a.stop()}}),a)}))));var o=Object(a["b"])((function(){return i.state.accesToken})),c=Object(a["b"])((function(){return i.state.topTracks}));function n(e){return c.value.find((function(e){return e.id===t.id}))}function p(){r.go(-1)}return{isLoading:e,track:s,router:r,store:i,getStoreToken:o,getStoreTracks:c,goBack:p}}});s("d217");It.render=Lt,It.__scopeId="data-v-797141dd";var Ht=It,Nt=Object(a["D"])("data-v-9a7bbf6c");Object(a["t"])("data-v-9a7bbf6c");var Gt={class:"me"},xt=Object(a["g"])("h1",{class:"title"},"Na",-1),_t={key:0};Object(a["r"])();var Mt=Nt((function(t,e,s,r,i,o){return Object(a["q"])(),Object(a["d"])("div",Gt,[Object(a["g"])("div",null,[xt,Object(a["g"])("p",null,"props.accesstoken "+Object(a["z"])(t.accesstoken.substr(0,10)),1),Object(a["g"])("p",null,"store.state.accesstoken "+Object(a["z"])(t.getStoreToken.substr(0,10)),1),t.isLoading?(Object(a["q"])(),Object(a["d"])("span",_t,"Loading")):Object(a["e"])("",!0)])])})),Pt={setup:function(t){return{}}};s("6d10");Pt.render=Mt,Pt.__scopeId="data-v-9a7bbf6c";var Bt=Pt,Dt=[{path:"/",name:"Home",component:Z},{path:"/about",name:"About",component:q},{path:"/me/:accesstoken",name:"Me",props:!0,component:Ot},{path:"/me/track/:id",name:"Track",props:!0,component:Ht},{path:"/events",name:"Events",component:Bt}],Ut=Object(_["a"])({history:Object(_["b"])("/"),routes:Dt}),Rt=Ut,wt=Object(H["a"])({state:{accesToken:{exists:!1},user:{exists:!1},topTracks:{exists:!1},eventSuggestions:{exists:!1}},mutations:{editAccessToken:function(t,e){t.accesToken.exists||(t.accesToken.value=e,t.accesToken.exists=!0,console.log("store | editAccessToken"))},editUser:function(t,e){t.user.exists||(t.user=e,t.user.exists=!0,console.log("store | editUser"))},editTopTracks:function(t,e){t.topTracks.exists||(t.topTracks=e,t.topTracks.exists=!0,console.log("store | topTracks"))},editEventSuggestions:function(t,e){t.eventSuggestions=e,t.eventSuggestions.exists=!0,console.log("store | editEventSuggestions")}},actions:{setAccessToken:function(t,e){var s=t.commit;s("editAccessToken",e)},setUserInStore:function(t,e){var s=t.commit;s("editUser",e)},setTopTrackInStore:function(t,e){var s=t.commit;s("editTopTracks",e)}},modules:{}});Object(a["c"])(G).use(wt).use(Rt).mount("#app")},"6d10":function(t,e,s){"use strict";s("4c6a")},"7aac":function(t,e,s){},a0a4:function(t,e,s){"use strict";s("d757")},bdab:function(t,e){t.exports={user:{data:{country:"FR",display_name:"6frann",email:"frcs.berger@gmail.com",explicit_content:{filter_enabled:!1,filter_locked:!1},external_urls:{spotify:"https://open.spotify.com/user/6frann"},followers:{href:null,total:2},href:"https://api.spotify.com/v1/users/6frann",id:"6frann",images:[],product:"open",type:"user",uri:"spotify:user:6frann"}},topTracks:{items:[{album:{album_type:"SINGLE",artists:[{external_urls:{spotify:"https://open.spotify.com/artist/2xsasxj0G1VCLzyX6ygjEC"},href:"https://api.spotify.com/v1/artists/2xsasxj0G1VCLzyX6ygjEC",id:"2xsasxj0G1VCLzyX6ygjEC",name:"Vega Missile",type:"artist",uri:"spotify:artist:2xsasxj0G1VCLzyX6ygjEC"}],available_markets:["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IN","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],external_urls:{spotify:"https://open.spotify.com/album/0aABgoF2di43hCtAf2XCA2"},href:"https://api.spotify.com/v1/albums/0aABgoF2di43hCtAf2XCA2",id:"0aABgoF2di43hCtAf2XCA2",images:[{height:640,url:"https://i.scdn.co/image/ab67616d0000b273071927a304df706d9ccae85a",width:640},{height:300,url:"https://i.scdn.co/image/ab67616d00001e02071927a304df706d9ccae85a",width:300},{height:64,url:"https://i.scdn.co/image/ab67616d00004851071927a304df706d9ccae85a",width:64}],name:"Warmongers",release_date:"2020-10-23",release_date_precision:"day",total_tracks:1,type:"album",uri:"spotify:album:0aABgoF2di43hCtAf2XCA2"},artists:[{external_urls:{spotify:"https://open.spotify.com/artist/2xsasxj0G1VCLzyX6ygjEC"},href:"https://api.spotify.com/v1/artists/2xsasxj0G1VCLzyX6ygjEC",id:"2xsasxj0G1VCLzyX6ygjEC",name:"Vega Missile",type:"artist",uri:"spotify:artist:2xsasxj0G1VCLzyX6ygjEC"}],available_markets:["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IN","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],disc_number:1,duration_ms:498596,explicit:!1,external_ids:{isrc:"FR9W11934565"},external_urls:{spotify:"https://open.spotify.com/track/6l9Ebgt7opzxvsDt8IETJd"},href:"https://api.spotify.com/v1/tracks/6l9Ebgt7opzxvsDt8IETJd",id:"6l9Ebgt7opzxvsDt8IETJd",is_local:!1,name:"Warmongers",popularity:38,preview_url:"https://p.scdn.co/mp3-preview/26bc71b9eefb5badc2b4dcdafe1ce00f85c4ebcf?cid=71a3a5397b9840098bdde0bddd938121",track_number:1,type:"track",uri:"spotify:track:6l9Ebgt7opzxvsDt8IETJd"},{album:{album_type:"SINGLE",artists:[{external_urls:{spotify:"https://open.spotify.com/artist/2xsasxj0G1VCLzyX6ygjEC"},href:"https://api.spotify.com/v1/artists/2xsasxj0G1VCLzyX6ygjEC",id:"2xsasxj0G1VCLzyX6ygjEC",name:"Vega Missile",type:"artist",uri:"spotify:artist:2xsasxj0G1VCLzyX6ygjEC"}],available_markets:["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IN","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],external_urls:{spotify:"https://open.spotify.com/album/0K0iDBZLM8fxElJQ6A6KFJ"},href:"https://api.spotify.com/v1/albums/0K0iDBZLM8fxElJQ6A6KFJ",id:"0K0iDBZLM8fxElJQ6A6KFJ",images:[{height:640,url:"https://i.scdn.co/image/ab67616d0000b27379909067ad5802a8f20cdbc7",width:640},{height:300,url:"https://i.scdn.co/image/ab67616d00001e0279909067ad5802a8f20cdbc7",width:300},{height:64,url:"https://i.scdn.co/image/ab67616d0000485179909067ad5802a8f20cdbc7",width:64}],name:"Expansion",release_date:"2020-09-18",release_date_precision:"day",total_tracks:1,type:"album",uri:"spotify:album:0K0iDBZLM8fxElJQ6A6KFJ"},artists:[{external_urls:{spotify:"https://open.spotify.com/artist/2xsasxj0G1VCLzyX6ygjEC"},href:"https://api.spotify.com/v1/artists/2xsasxj0G1VCLzyX6ygjEC",id:"2xsasxj0G1VCLzyX6ygjEC",name:"Vega Missile",type:"artist",uri:"spotify:artist:2xsasxj0G1VCLzyX6ygjEC"}],available_markets:["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IN","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],disc_number:1,duration_ms:311004,explicit:!1,external_ids:{isrc:"FR9W11934561"},external_urls:{spotify:"https://open.spotify.com/track/591pnGpkSms2aA1GAU79qC"},href:"https://api.spotify.com/v1/tracks/591pnGpkSms2aA1GAU79qC",id:"591pnGpkSms2aA1GAU79qC",is_local:!1,name:"Expansion",popularity:32,preview_url:"https://p.scdn.co/mp3-preview/7ec58fa81c81600a34c24e7ed6c7fac6b584d560?cid=71a3a5397b9840098bdde0bddd938121",track_number:1,type:"track",uri:"spotify:track:591pnGpkSms2aA1GAU79qC"},{album:{album_type:"ALBUM",artists:[{external_urls:{spotify:"https://open.spotify.com/artist/2ZV8HrS6uy7XtfPoUlqdV5"},href:"https://api.spotify.com/v1/artists/2ZV8HrS6uy7XtfPoUlqdV5",id:"2ZV8HrS6uy7XtfPoUlqdV5",name:"Mauro Bertoli",type:"artist",uri:"spotify:artist:2ZV8HrS6uy7XtfPoUlqdV5"}],available_markets:["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IN","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],external_urls:{spotify:"https://open.spotify.com/album/5KHW83iPshVaMLxGGfkZzc"},href:"https://api.spotify.com/v1/albums/5KHW83iPshVaMLxGGfkZzc",id:"5KHW83iPshVaMLxGGfkZzc",images:[{height:640,url:"https://i.scdn.co/image/ab67616d0000b2733d6243605e647869d4e3d670",width:640},{height:300,url:"https://i.scdn.co/image/ab67616d00001e023d6243605e647869d4e3d670",width:300},{height:64,url:"https://i.scdn.co/image/ab67616d000048513d6243605e647869d4e3d670",width:64}],name:"Debussy: Arabesques - Satie: Gnosiennes - Poulenc: 3 Novelettes - Beethoven: Fur Elise, Bagatelles Op. 126, Rondo Op. 129 - Mendelssohn: Rondo Capriccioso Op. 14 - Brahms: Sonata No. 1 Op. 1",release_date:"2016-06-29",release_date_precision:"day",total_tracks:24,type:"album",uri:"spotify:album:5KHW83iPshVaMLxGGfkZzc"},artists:[{external_urls:{spotify:"https://open.spotify.com/artist/2ZV8HrS6uy7XtfPoUlqdV5"},href:"https://api.spotify.com/v1/artists/2ZV8HrS6uy7XtfPoUlqdV5",id:"2ZV8HrS6uy7XtfPoUlqdV5",name:"Mauro Bertoli",type:"artist",uri:"spotify:artist:2ZV8HrS6uy7XtfPoUlqdV5"}],available_markets:["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IN","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],disc_number:1,duration_ms:290038,explicit:!1,external_ids:{isrc:"ushm21600771"},external_urls:{spotify:"https://open.spotify.com/track/1ulHVDFC1wNpbDC2mWE4ZA"},href:"https://api.spotify.com/v1/tracks/1ulHVDFC1wNpbDC2mWE4ZA",id:"1ulHVDFC1wNpbDC2mWE4ZA",is_local:!1,name:"Deux arabesques, L. 66: 1. Andantino con moto",popularity:6,preview_url:"https://p.scdn.co/mp3-preview/79c18d65ac6a94b658005d95cd2c48e778831ad0?cid=71a3a5397b9840098bdde0bddd938121",track_number:1,type:"track",uri:"spotify:track:1ulHVDFC1wNpbDC2mWE4ZA"},{album:{album_type:"SINGLE",artists:[{external_urls:{spotify:"https://open.spotify.com/artist/5dH56mquzTg0L5qjmeiUqf"},href:"https://api.spotify.com/v1/artists/5dH56mquzTg0L5qjmeiUqf",id:"5dH56mquzTg0L5qjmeiUqf",name:"TODIIX",type:"artist",uri:"spotify:artist:5dH56mquzTg0L5qjmeiUqf"}],available_markets:["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IN","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],external_urls:{spotify:"https://open.spotify.com/album/195XoN46gXi7yuYTACzoeG"},href:"https://api.spotify.com/v1/albums/195XoN46gXi7yuYTACzoeG",id:"195XoN46gXi7yuYTACzoeG",images:[{height:640,url:"https://i.scdn.co/image/ab67616d0000b27332e00747d0eef887c2412752",width:640},{height:300,url:"https://i.scdn.co/image/ab67616d00001e0232e00747d0eef887c2412752",width:300},{height:64,url:"https://i.scdn.co/image/ab67616d0000485132e00747d0eef887c2412752",width:64}],name:"Feel My Love",release_date:"2020-10-09",release_date_precision:"day",total_tracks:1,type:"album",uri:"spotify:album:195XoN46gXi7yuYTACzoeG"},artists:[{external_urls:{spotify:"https://open.spotify.com/artist/5dH56mquzTg0L5qjmeiUqf"},href:"https://api.spotify.com/v1/artists/5dH56mquzTg0L5qjmeiUqf",id:"5dH56mquzTg0L5qjmeiUqf",name:"TODIIX",type:"artist",uri:"spotify:artist:5dH56mquzTg0L5qjmeiUqf"}],available_markets:["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IN","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],disc_number:1,duration_ms:190673,explicit:!1,external_ids:{isrc:"NL1AP2090331"},external_urls:{spotify:"https://open.spotify.com/track/3IpPZ6QYc9nGGihOKVWWMN"},href:"https://api.spotify.com/v1/tracks/3IpPZ6QYc9nGGihOKVWWMN",id:"3IpPZ6QYc9nGGihOKVWWMN",is_local:!1,name:"Feel My Love",popularity:29,preview_url:"https://p.scdn.co/mp3-preview/375ca01845b407a6fb84cbc63f580ec6f8c23c3b?cid=71a3a5397b9840098bdde0bddd938121",track_number:1,type:"track",uri:"spotify:track:3IpPZ6QYc9nGGihOKVWWMN"},{album:{album_type:"SINGLE",artists:[{external_urls:{spotify:"https://open.spotify.com/artist/5D4cdVgjT4jAN2IDrV7mVe"},href:"https://api.spotify.com/v1/artists/5D4cdVgjT4jAN2IDrV7mVe",id:"5D4cdVgjT4jAN2IDrV7mVe",name:"Luca Draccar",type:"artist",uri:"spotify:artist:5D4cdVgjT4jAN2IDrV7mVe"}],available_markets:["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IN","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],external_urls:{spotify:"https://open.spotify.com/album/0MIEXYVsnKGy7iBwSuzGUU"},href:"https://api.spotify.com/v1/albums/0MIEXYVsnKGy7iBwSuzGUU",id:"0MIEXYVsnKGy7iBwSuzGUU",images:[{height:640,url:"https://i.scdn.co/image/ab67616d0000b273539a41f90beaf94c6f82d4c9",width:640},{height:300,url:"https://i.scdn.co/image/ab67616d00001e02539a41f90beaf94c6f82d4c9",width:300},{height:64,url:"https://i.scdn.co/image/ab67616d00004851539a41f90beaf94c6f82d4c9",width:64}],name:"Flamboyant",release_date:"2020-08-28",release_date_precision:"day",total_tracks:4,type:"album",uri:"spotify:album:0MIEXYVsnKGy7iBwSuzGUU"},artists:[{external_urls:{spotify:"https://open.spotify.com/artist/5D4cdVgjT4jAN2IDrV7mVe"},href:"https://api.spotify.com/v1/artists/5D4cdVgjT4jAN2IDrV7mVe",id:"5D4cdVgjT4jAN2IDrV7mVe",name:"Luca Draccar",type:"artist",uri:"spotify:artist:5D4cdVgjT4jAN2IDrV7mVe"}],available_markets:["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IN","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],disc_number:1,duration_ms:646125,explicit:!1,external_ids:{isrc:"FR96X2087805"},external_urls:{spotify:"https://open.spotify.com/track/1lHvMGnvWGhYQltRgXDbYM"},href:"https://api.spotify.com/v1/tracks/1lHvMGnvWGhYQltRgXDbYM",id:"1lHvMGnvWGhYQltRgXDbYM",is_local:!1,name:"Birba",popularity:42,preview_url:"https://p.scdn.co/mp3-preview/cbe484dd7c5b555fa84d4a7ac429ff3ddbd314e1?cid=71a3a5397b9840098bdde0bddd938121",track_number:1,type:"track",uri:"spotify:track:1lHvMGnvWGhYQltRgXDbYM"},{album:{album_type:"SINGLE",artists:[{external_urls:{spotify:"https://open.spotify.com/artist/6dC41opH96WjFwWhhAxBsS"},href:"https://api.spotify.com/v1/artists/6dC41opH96WjFwWhhAxBsS",id:"6dC41opH96WjFwWhhAxBsS",name:"Helsloot",type:"artist",uri:"spotify:artist:6dC41opH96WjFwWhhAxBsS"}],available_markets:["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IN","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],external_urls:{spotify:"https://open.spotify.com/album/5zY9TsJnvsXb5VMTjH7RPu"},href:"https://api.spotify.com/v1/albums/5zY9TsJnvsXb5VMTjH7RPu",id:"5zY9TsJnvsXb5VMTjH7RPu",images:[{height:640,url:"https://i.scdn.co/image/ab67616d0000b273510e0ba4ca7867fecad21f54",width:640},{height:300,url:"https://i.scdn.co/image/ab67616d00001e02510e0ba4ca7867fecad21f54",width:300},{height:64,url:"https://i.scdn.co/image/ab67616d00004851510e0ba4ca7867fecad21f54",width:64}],name:"Belfort",release_date:"2020-10-16",release_date_precision:"day",total_tracks:2,type:"album",uri:"spotify:album:5zY9TsJnvsXb5VMTjH7RPu"},artists:[{external_urls:{spotify:"https://open.spotify.com/artist/6dC41opH96WjFwWhhAxBsS"},href:"https://api.spotify.com/v1/artists/6dC41opH96WjFwWhhAxBsS",id:"6dC41opH96WjFwWhhAxBsS",name:"Helsloot",type:"artist",uri:"spotify:artist:6dC41opH96WjFwWhhAxBsS"}],available_markets:["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IN","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],disc_number:1,duration_ms:371612,explicit:!1,external_ids:{isrc:"DEBE72000385"},external_urls:{spotify:"https://open.spotify.com/track/6ESEOwrbLFiMrPbf7KO9lN"},href:"https://api.spotify.com/v1/tracks/6ESEOwrbLFiMrPbf7KO9lN",id:"6ESEOwrbLFiMrPbf7KO9lN",is_local:!1,name:"Belfort",popularity:25,preview_url:"https://p.scdn.co/mp3-preview/72febd58510d9863e43941efff81cbfd648063df?cid=71a3a5397b9840098bdde0bddd938121",track_number:1,type:"track",uri:"spotify:track:6ESEOwrbLFiMrPbf7KO9lN"},{album:{album_type:"SINGLE",artists:[{external_urls:{spotify:"https://open.spotify.com/artist/0dmK5swyEcHMHK570klgLx"},href:"https://api.spotify.com/v1/artists/0dmK5swyEcHMHK570klgLx",id:"0dmK5swyEcHMHK570klgLx",name:"Gabriel Marchisio",type:"artist",uri:"spotify:artist:0dmK5swyEcHMHK570klgLx"}],available_markets:["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IN","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],external_urls:{spotify:"https://open.spotify.com/album/6pBOIrH4vdpwatqzBf70ix"},href:"https://api.spotify.com/v1/albums/6pBOIrH4vdpwatqzBf70ix",id:"6pBOIrH4vdpwatqzBf70ix",images:[{height:640,url:"https://i.scdn.co/image/ab67616d0000b273d4852f0f6c6fdbdc33efc397",width:640},{height:300,url:"https://i.scdn.co/image/ab67616d00001e02d4852f0f6c6fdbdc33efc397",width:300},{height:64,url:"https://i.scdn.co/image/ab67616d00004851d4852f0f6c6fdbdc33efc397",width:64}],name:"More Days on Week",release_date:"2011",release_date_precision:"year",total_tracks:2,type:"album",uri:"spotify:album:6pBOIrH4vdpwatqzBf70ix"},artists:[{external_urls:{spotify:"https://open.spotify.com/artist/0dmK5swyEcHMHK570klgLx"},href:"https://api.spotify.com/v1/artists/0dmK5swyEcHMHK570klgLx",id:"0dmK5swyEcHMHK570klgLx",name:"Gabriel Marchisio",type:"artist",uri:"spotify:artist:0dmK5swyEcHMHK570klgLx"}],available_markets:["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IN","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],disc_number:1,duration_ms:494813,explicit:!1,external_ids:{isrc:"BGA471515554"},external_urls:{spotify:"https://open.spotify.com/track/3kn0wJavHokxqS65gkj44N"},href:"https://api.spotify.com/v1/tracks/3kn0wJavHokxqS65gkj44N",id:"3kn0wJavHokxqS65gkj44N",is_local:!1,name:"More Days on Week",popularity:27,preview_url:"https://p.scdn.co/mp3-preview/b66aeda1bffcdbb614c291f76873ff14b4229257?cid=71a3a5397b9840098bdde0bddd938121",track_number:1,type:"track",uri:"spotify:track:3kn0wJavHokxqS65gkj44N"},{album:{album_type:"ALBUM",artists:[{external_urls:{spotify:"https://open.spotify.com/artist/4gwpcMTbLWtBUlOijbVpuu"},href:"https://api.spotify.com/v1/artists/4gwpcMTbLWtBUlOijbVpuu",id:"4gwpcMTbLWtBUlOijbVpuu",name:"Capital Cities",type:"artist",uri:"spotify:artist:4gwpcMTbLWtBUlOijbVpuu"}],available_markets:["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IN","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],external_urls:{spotify:"https://open.spotify.com/album/3WrufJir7I61NkvkDwxero"},href:"https://api.spotify.com/v1/albums/3WrufJir7I61NkvkDwxero",id:"3WrufJir7I61NkvkDwxero",images:[{height:640,url:"https://i.scdn.co/image/ab67616d0000b27313c6cb6a81c8db4dbc8b9924",width:640},{height:300,url:"https://i.scdn.co/image/ab67616d00001e0213c6cb6a81c8db4dbc8b9924",width:300},{height:64,url:"https://i.scdn.co/image/ab67616d0000485113c6cb6a81c8db4dbc8b9924",width:64}],name:"In A Tidal Wave Of Mystery (Deluxe Edition)",release_date:"2013",release_date_precision:"year",total_tracks:16,type:"album",uri:"spotify:album:3WrufJir7I61NkvkDwxero"},artists:[{external_urls:{spotify:"https://open.spotify.com/artist/4gwpcMTbLWtBUlOijbVpuu"},href:"https://api.spotify.com/v1/artists/4gwpcMTbLWtBUlOijbVpuu",id:"4gwpcMTbLWtBUlOijbVpuu",name:"Capital Cities",type:"artist",uri:"spotify:artist:4gwpcMTbLWtBUlOijbVpuu"}],available_markets:["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IN","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],disc_number:1,duration_ms:192789,explicit:!1,external_ids:{isrc:"USCA21203108"},external_urls:{spotify:"https://open.spotify.com/track/6Z8R6UsFuGXGtiIxiD8ISb"},href:"https://api.spotify.com/v1/tracks/6Z8R6UsFuGXGtiIxiD8ISb",id:"6Z8R6UsFuGXGtiIxiD8ISb",is_local:!1,name:"Safe And Sound",popularity:82,preview_url:null,track_number:1,type:"track",uri:"spotify:track:6Z8R6UsFuGXGtiIxiD8ISb"},{album:{album_type:"ALBUM",artists:[{external_urls:{spotify:"https://open.spotify.com/artist/2pHk4wAmL7ofTAuvCIUWtv"},href:"https://api.spotify.com/v1/artists/2pHk4wAmL7ofTAuvCIUWtv",id:"2pHk4wAmL7ofTAuvCIUWtv",name:"Roméo Elvis",type:"artist",uri:"spotify:artist:2pHk4wAmL7ofTAuvCIUWtv"}],available_markets:["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IN","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],external_urls:{spotify:"https://open.spotify.com/album/6hIAy4WsqxwWnGvZYdjnHO"},href:"https://api.spotify.com/v1/albums/6hIAy4WsqxwWnGvZYdjnHO",id:"6hIAy4WsqxwWnGvZYdjnHO",images:[{height:640,url:"https://i.scdn.co/image/ab67616d0000b273f99fb4c3e3812bb4ea81f1f7",width:640},{height:300,url:"https://i.scdn.co/image/ab67616d00001e02f99fb4c3e3812bb4ea81f1f7",width:300},{height:64,url:"https://i.scdn.co/image/ab67616d00004851f99fb4c3e3812bb4ea81f1f7",width:64}],name:"Chocolat",release_date:"2019-04-12",release_date_precision:"day",total_tracks:19,type:"album",uri:"spotify:album:6hIAy4WsqxwWnGvZYdjnHO"},artists:[{external_urls:{spotify:"https://open.spotify.com/artist/2pHk4wAmL7ofTAuvCIUWtv"},href:"https://api.spotify.com/v1/artists/2pHk4wAmL7ofTAuvCIUWtv",id:"2pHk4wAmL7ofTAuvCIUWtv",name:"Roméo Elvis",type:"artist",uri:"spotify:artist:2pHk4wAmL7ofTAuvCIUWtv"}],available_markets:["AD","AE","AR","AT","AU","BE","BG","BH","BO","BR","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ","EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HN","HU","ID","IE","IL","IN","IS","IT","JO","JP","KW","LB","LI","LT","LU","LV","MA","MC","MT","MX","MY","NI","NL","NO","NZ","OM","PA","PE","PH","PL","PS","PT","PY","QA","RO","SA","SE","SG","SK","SV","TH","TN","TR","TW","US","UY","VN","ZA"],disc_number:1,duration_ms:192e3,explicit:!0,external_ids:{isrc:"BE5EO1900005"},external_urls:{spotify:"https://open.spotify.com/track/4RpNETpCJm2Nfr3aTpt4cJ"},href:"https://api.spotify.com/v1/tracks/4RpNETpCJm2Nfr3aTpt4cJ",id:"4RpNETpCJm2Nfr3aTpt4cJ",is_local:!1,name:"Coeur des hommes",popularity:47,preview_url:null,track_number:4,type:"track",uri:"spotify:track:4RpNETpCJm2Nfr3aTpt4cJ"}],total:9,limit:20,offset:0,href:"https://api.spotify.com/v1/me/top/tracks",previous:null,next:null}}},d217:function(t,e,s){"use strict";s("7aac")},d757:function(t,e,s){},de14:function(t,e,s){},e575:function(t,e,s){"use strict";s("de14")},fbfd:function(t,e,s){}});
//# sourceMappingURL=app.639eb811.js.map