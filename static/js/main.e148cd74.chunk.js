(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(t){t.exports=[{header:"Judges awards / General"},{artist:"Black Eyed Peas",title:" Let's Get It Started",path:"/clips/Black Eyed Peas - Let's Get It Started (Cut).mp3",runtime:103},{artist:"C&C Dance Factory",title:" Gonna Make You Sweat",path:"/clips/C&C Dance Factory - Gonna Make You Sweat (Cut).mp3",runtime:127},{artist:"Calvin Harris",title:" Summer",path:"/clips/Calvin Harris - Summer (Cut).mp3",runtime:106},{artist:"John Denver",title:" Thank God I'm a Country Boy",path:"/clips/John Denver - Thank God I'm a Country Boy (Cut).mp3",runtime:109},{artist:"Macklemore & Ryan Lewis",title:" Can't Hold Us",path:"/clips/Macklemore & Ryan Lewis - Can't Hold Us (Cut).mp3",runtime:81},{artist:"Queen",title:"Dont Stop Me Now",path:"/clips/Queen - Dont Stop Me Now (Cut).mp3",runtime:146},{artist:"Rick Astley",title:" Never Gonna Give You Up",path:"/clips/Rick Astley - Never Gonna Give You Up (cut).mp3",runtime:169},{header:"Robot Design awards"},{artist:"AC DC",title:" Thunderstruck",path:"/clips/AC_DC - Thunderstruck (Cut).mp3",runtime:132},{artist:"Darude",title:" Sandstorm",path:"/clips/Darude - Sandstorm (Cut).mp3",runtime:83},{artist:"Fall Out Boy",title:" Centuries",path:"/clips/Fall Out Boy - Centuries (Cut).mp3",runtime:132},{artist:"Fall Out Boy",title:" Immortals",path:"/clips/Fall Out Boy - Immortals (Cut).mp3",runtime:83},{artist:"I See Monstas",title:" Evolution",path:"/clips/I See Monstas - Evolution (Cut).mp3",runtime:109},{artist:"Galantis",title:" Runaway",path:"/clips/Galantis - Runaway (Cut).mp3",runtime:58},{artist:"Van Halen",title:" Jump",path:"/clips/Van Halen - Jump (Cut).mp3",runtime:186},{artist:"Zedd & Aloe Blacc",title:" Candyman",path:"/clips/Zedd & Aloe Blacc - Candyman (Cut).mp3",runtime:53},{header:"Robot Performance awards"},{artist:"Led Zeppelin",title:" Immigrant Song",path:"/clips/Led Zeppelin - Immigrant Song (Cut).mp3",runtime:87},{artist:"Scotty",title:" Pirates of the Caribbean, Scotty remix",path:"/clips/Scotty - Pirates of the Caribbean, Scotty remix (Cut).mp3",runtime:150},{artist:"Flo Rida",title:" Club Can't Handle Me",path:"/clips/Flo Rida - Club Can't Handle Me (Cut).mp3",runtime:189},{header:"Core Values awards"},{artist:"Guy Sebastian",title:" Tonight Again",path:"/clips/Guy Sebastian - Tonight Again (Cut).mp3",runtime:97},{artist:"Imagine Dragons",title:" On Top Of The World",path:"/clips/Imagine Dragons - On Top Of The World (Cut).mp3",runtime:109},{artist:"Katy Perry",title:" Roar",path:"/clips/Katy Perry - Roar (Cut).mp3",runtime:109},{artist:"Pharell Williams",title:" Happy",path:"/clips/Pharell Williams - Happy (Cut).mp3",runtime:115},{artist:"Rocky Horror Picture Show",title:" Time Warp",path:"/clips/Rocky Horror Picture Show - Time Warp (Cut).mp3",runtime:144},{artist:"Steps",title:"5, 6, 7, 8",path:"/clips/Steps - 5, 6, 7, 8 (Cut).mp3",runtime:115},{artist:"Tegan and Sara",title:" Everything is Awesome",path:"/clips/Tegan and Sara - Everything is Awesome (Cut).mp3",runtime:163},{artist:"The Rembrandts",title:" I'll Be There For You",path:"/clips/The Rembrandts - I'll Be There For You (Cut).mp3",runtime:108},{header:"Project awards"},{artist:"Calvin Harris",title:" My Way",path:"/clips/Calvin Harris - My Way (Cut).mp3",runtime:181},{artist:"Marc Ronson & Bruno Mars",title:" Uptown Funk",path:"/clips/Marc Ronson & Bruno Mars - Uptown Funk (Cut).mp3",runtime:64},{artist:"Miley Cyrus",title:" Party In The USA",path:"/clips/Miley Cyrus - Party In The USA (Cut).mp3",runtime:157},{artist:"P!nk",title:" Just Like Fire",path:"/clips/P!nk - Just Like Fire (Cut).mp3",runtime:113},{artist:"Psy",title:" Gangnam Style",path:"/clips/Psy - Gangnam Style (Cut).mp3",runtime:72},{artist:"Taylor Swift",title:" 22",path:"/clips/Taylor Swift - 22 (Cut).mp3",runtime:121},{artist:"The Beatles",title:" Twist and Shout",path:"/clips/The Beatles - Twist and Shout (Cut).mp3",runtime:100},{artist:"The Black Eyed Peas",title:" I Gotta Feelin'",path:"/clips/The Black Eyed Peas - I Gotta Feelin' (Cut).mp3",runtime:63},{header:"Champions Award"},{artist:"K'naan",title:" Wavin Flag",path:"/clips/K'naan - Wavin Flag (Cut).mp3",runtime:160},{artist:"Zedd",title:" Beautiful Now",path:"/clips/Zedd - Beautiful Now (Cut).mp3",runtime:96},{artist:"Queen",title:" We Are The Champions",path:"/clips/Queen - We Are The Champions (Cut).mp3",runtime:76}]},15:function(t,e,a){},22:function(t,e,a){t.exports=a(33)},27:function(t,e,a){},33:function(t,e,a){"use strict";a.r(e);var i=a(1),n=a.n(i),r=a(19),s=a.n(r),l=(a(27),a(7)),u=a(8),c=a(10),o=a(9),p=a(11),m=a(2),h=(a(15),a(12)),d=a(14),y=a.n(d),b=a(34),C=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(c.a)(this,Object(o.a)(e).call(this,t))).state={runtime:a.props.track.runtime,selected:!1,playing:!1,played:!1,disabled:!0,volume:0},a.cut=a.cut.bind(Object(m.a)(Object(m.a)(a))),a.click=a.click.bind(Object(m.a)(Object(m.a)(a))),a.playSound=a.playSound.bind(Object(m.a)(Object(m.a)(a))),a.stopSound=a.stopSound.bind(Object(m.a)(Object(m.a)(a))),a.incVolume=a.incVolume.bind(Object(m.a)(Object(m.a)(a))),a.decVolume=a.decVolume.bind(Object(m.a)(Object(m.a)(a))),a.updateRuntime=a.updateRuntime.bind(Object(m.a)(Object(m.a)(a))),a.enable=a.enable.bind(Object(m.a)(Object(m.a)(a))),a.changingVolume=!1,a}return Object(p.a)(e,t),Object(u.a)(e,[{key:"click",value:function(t){this.props.selectable&&!this.state.disabled&&(console.log(this.props.track),this.changingVolume||(this.state.selected?this.decVolume():this.playSound()))}},{key:"playSound",value:function(){this.setState({playing:!0}),this.incVolume(),this.setState({selected:!0}),this.props.onSelect()}},{key:"incVolume",value:function(){this.changingVolume=!0;var t=this.state.volume+5;t<100?setTimeout(this.incVolume,50):this.changingVolume=!1,this.setState({volume:t})}},{key:"decVolume",value:function(){this.changingVolume=!0;var t=this.state.volume-4;t>0?setTimeout(this.decVolume,50):(this.stopSound(),this.changingVolume=!1),this.setState({volume:t})}},{key:"stopSound",value:function(){this.setState({playing:!1,selected:!1,volume:0,played:!0}),this.props.onSelect()}},{key:"updateRuntime",value:function(t){var e=(t.duration-t.position)/1e3;e<2&&this.decVolume(),this.setState({runtime:Math.round(e)})}},{key:"enable",value:function(){this.setState({disabled:!1})}},{key:"cut",value:function(){this.stopSound()}},{key:"sound",value:function(){return n.a.createElement(y.a,{url:"/award-soundboard"+this.props.track.path,playStatus:this.state.playing?y.a.status.PLAYING:y.a.status.STOPPED,volume:this.state.volume,autoLoad:!0,onLoad:this.enable,onPlaying:this.updateRuntime})}},{key:"trackDetails",value:function(){var t="";return this.state.disabled?t="disabled":this.state.selected?t="clicked":(this.state.played&&(t+="used "),this.props.selectable||(t+="unclickable")),n.a.createElement("tr",{className:t,onClick:this.click},n.a.createElement("td",null,this.props.track.title),n.a.createElement("td",null,this.props.track.artist),n.a.createElement("td",null,this.state.runtime," s"),this.sound())}},{key:"control",value:function(){return n.a.createElement("tr",{className:this.state.selected?"clicked":""},n.a.createElement("td",{onClick:this.click},this.state.volume," %"),n.a.createElement("td",{onClick:this.click},this.state.runtime," s"),n.a.createElement("td",null,n.a.createElement(b.a,{onClick:this.cut},"Cut out")),this.sound())}},{key:"render",value:function(){return this.state.playing?this.control():this.trackDetails()}}]),e}(i.Component),k=a(35),v=a(36),S=a(37),f=a(38),g=a(39),O=a(40),w=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(c.a)(this,Object(o.a)(e).call(this,t))).state={selected:"",tab:"cat"},a.select=a.select.bind(Object(m.a)(Object(m.a)(a))),a.getRow=a.getRow.bind(Object(m.a)(Object(m.a)(a))),a}return Object(p.a)(e,t),Object(u.a)(e,[{key:"pickTab",value:function(t){this.setState({tab:t})}},{key:"select",value:function(t){var e=this.state.selected===t?"":t;console.log(this.state.selected),this.setState({selected:e})}},{key:"getRow",value:function(t,e){var a=this;if(t.header){var i="header";return t.header.startsWith("Judges")?i+=" judge":t.header.startsWith("Robot D")?i+=" design":t.header.startsWith("Robot P")?i+=" performance":t.header.startsWith("Core")?i+=" core":t.header.startsWith("Project")?i+=" project":t.header.startsWith("Champions")&&(i+=" champ"),n.a.createElement("tr",{className:i,key:h.indexOf(t)},n.a.createElement("td",{colspan:"3"},t.header))}return n.a.createElement(C,{track:t,key:h.indexOf(t),selectable:""===this.state.selected||t.title===this.state.selected,onSelect:function(){return a.select(t.title)}})}},{key:"sortString",value:function(t,e){return t<e?-1:t>e?1:0}},{key:"render",value:function(){var t=this,e=h;return"title"===this.state.tab?e=h.filter(function(t){return!t.header}).sort(function(e,a){return t.sortString(e.title,a.title)}):"artist"===this.state.tab&&(e=h.filter(function(t){return!t.header}).sort(function(e,a){return t.sortString(e.artist,a.artist)})),n.a.createElement(k.a,null,n.a.createElement(v.a,null,n.a.createElement(S.a,{pills:!0},n.a.createElement(f.a,null,n.a.createElement(g.a,null,"Display format:")),n.a.createElement(f.a,{onClick:function(){return t.pickTab("cat")}},n.a.createElement(g.a,{active:"cat"===this.state.tab},"Categories")),n.a.createElement(f.a,{onClick:function(){return t.pickTab("title")}},n.a.createElement(g.a,{active:"title"===this.state.tab},"Title A-Z")),n.a.createElement(f.a,{onClick:function(){return t.pickTab("artist")}},n.a.createElement(g.a,{active:"artist"===this.state.tab},"Artist A-Z")))),n.a.createElement(O.a,{dark:!0},n.a.createElement("tbody",null,e.map(function(e,a){return t.getRow(e,a)}))))}}]),e}(i.Component),E=a(41),j=a(42),T=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(c.a)(this,Object(o.a)(e).call(this,t))).state={pdf:!1},a.handleUpload=a.handleUpload.bind(Object(m.a)(Object(m.a)(a))),a}return Object(p.a)(e,t),Object(u.a)(e,[{key:"handleUpload",value:function(t){this.setState({pdf:t})}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement(k.a,null,n.a.createElement(E.a,null,n.a.createElement(j.a,{sm:12},n.a.createElement(w,null)),""))))}}]),e}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(32);s.a.render(n.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.e148cd74.chunk.js.map