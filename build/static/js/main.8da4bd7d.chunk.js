(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{129:function(e,t,a){e.exports=a(260)},134:function(e,t,a){},135:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},136:function(e,t,a){},260:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(28),o=a.n(l),c=(a(134),a(43)),s=a(32),u=(a(135),a(136),a(7)),p=a(8),i=a(10),d=a(9),m=a(13),b=a(12),h=a.n(b),E=a(16),f=a(117),v=a.n(f).a.create({baseURL:"http://3.17.67.172:8081"}),y=a(118),g=a.n(y)()(),k=function(e,t){return g.push("/home"),{type:"SAVE_USER",payload:{username:e,token:t}}},O=function(){return function(){var e=Object(E.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/leaderboard");case 2:a=e.sent,t({type:"LOAD_LEADERBOARDS",payload:{leaderboards:a.data.leaderboards}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(E.a)(h.a.mark((function t(a){var n,r,l,o;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Le.getState().user.token,r=Le.getState().user.username,l=Le.getState().pvp.gameId,t.next=5,v.post("matchmaking/updateScore",{playerName:r,gameId:l,score:e},{headers:{token:n}});case 5:o=t.sent,console.log(o),a({type:"UPDATE_PVP_GAME_SCORES",payload:{scores:o.data.scores}});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},S=function(e){return{type:"UPDATE_PVP_GAME_SCORES",payload:{scores:e}}},C=function(){return function(){var e=Object(E.a)(h.a.mark((function e(t){var a,n,r,l;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Le.getState().user.token,n=Le.getState().user.username,r=Le.getState().pvp.gameId,e.next=5,v.post("/matchmaking/endGame",{playerName:n,gameId:r},{headers:{token:a}});case 5:l=e.sent,console.log(l),"Success"==l.data.status&&t({type:"END_PVP_GAME",payload:{winner:l.data.winner}});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},j=function(){return function(){var e=Object(E.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/wallet/currencies");case 2:a=e.sent,console.log(a),t({type:"LOAD_CURRENCIES",payload:{currencies:a.data.currencies}});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},D=function(e,t){return function(){var t=Object(E.a)(h.a.mark((function t(a){var n,r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Le.getState().user.token,console.log("sessiontoken ",n),t.next=4,v.post("/wallet/balances",{PlayerName:e},{headers:{token:n}});case 4:r=t.sent,a({type:"LOAD_BALANCES",payload:{balances:r.data.balances}});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},A=a(262),I=function(e){var t=1;return r.a.createElement(A.a,{striped:!0,bordered:!0,hover:!0,size:"sm"},r.a.createElement("thead",null,r.a.createElement("th",null,"Rank"),r.a.createElement("th",null,"Player"),r.a.createElement("th",null,"Score")),r.a.createElement("tbody",null,null!=e.players&&e.players.map((function(a){if(null!=a&&""!=a)return r.a.createElement("tr",{key:e.instance+"_"+a},r.a.createElement("td",null,t++),r.a.createElement("td",null,a),r.a.createElement("td",null,e.playerScores[a]))}))))},x=a(270),N=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={index:0},e.handleSelect=function(t,a){e.setState({index:t})},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){return e.props.loadLeaderboardData(e.props.leaderboardName)}),5e3)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h2",null,this.props.leaderboardName),r.a.createElement(x.a,{activeIndex:this.state.index,onSelect:this.handleSelect},null!=this.props.leaderboardsData&&this.props.leaderboardsData.map((function(t){return t.leaderboardName===e.props.leaderboardName&&t.data.subLeaderboards.map((function(e){var a=t.data.players[e];return r.a.createElement(x.a.Item,null,"Hello",e,r.a.createElement(I,{instance:e,players:a,playerScores:t.data.details}))}))}))))}}]),a}(r.a.Component),M=Object(m.b)((function(e){return{leaderboardsData:e.leaderboardsData}}),{loadLeaderboardData:function(e){return function(){var t=Object(E.a)(h.a.mark((function t(a){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("action :"+e),t.next=3,v.get("/leaderboard/"+e);case 3:n=t.sent,a({type:"LOAD_LEADERBOARDS_DATA",payload:{leaderboardsData:n.data,leaderboardId:e}});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(N),R=a(272),T=a(263),L=a(122),_=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.props.loadLeaderboards()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(R.a,{style:{backgroundColor:"#24bfb8",border:"#24bfb8"},text:"white"},r.a.createElement(R.a.Header,null,"Leaderboards"),r.a.createElement(R.a.Body,null,r.a.createElement(T.a,null,null!=this.props.leaderboards?this.props.leaderboards.map((function(e){return r.a.createElement(L.a,null,r.a.createElement(M,{leaderboardName:e}))})):""))))}}]),a}(r.a.Component),G=Object(m.b)((function(e){return{leaderboards:e.leaderboards}}),{loadLeaderboards:O})(_),P=(r.a.Component,a(271)),H=a(268),U=a(269),B=a(264),W=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).onSubmit=function(t){e.props.onLoginClick(t.username,t.password)},e}return Object(p.a)(a,[{key:"renderInput",value:function(e){var t=e.input,a=e.lable,n=e.meta,l=e.type;return console.log(n),r.a.createElement(U.a.Group,{controlId:a},r.a.createElement(U.a.Label,null,a),r.a.createElement(U.a.Control,Object.assign({},t,{autoComplete:"off",type:l})),r.a.createElement(U.a.Text,null,n.touched&&n.error?r.a.createElement("div",{style:{color:"red"}},n.error):""))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(U.a,{onSubmit:this.props.handleSubmit(this.onSubmit)},r.a.createElement(P.a,{name:"username",component:this.renderInput,lable:"Username",type:"text"}),r.a.createElement(P.a,{name:"password",component:this.renderInput,lable:"Password",type:"password"}),r.a.createElement(B.a,{block:!0,style:{backgroundColor:"#24bfb8",border:"#24bfb8"},variant:"primary",type:"submit"},"Login")))}}]),a}(r.a.Component),F=Object(H.a)({form:"FormCreate",validate:function(e){var t={};return e.username||(t.username="Enter username"),e.password||(t.password="Enter password"),t}})(W),V=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={errorMessage:""},e.login=function(){var t=Object(E.a)(h.a.mark((function t(a,n){var r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.post("/login",{playerName:a,password:n});case 2:r=t.sent,console.log(r),null!=r&"Success"==r.data.status?e.props.saveUser(a,r.data.token):e.setState({errorMessage:"Invalid Credentials"});case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.props.match&&console.log(this.props.match)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Login"),r.a.createElement(F,{onLoginClick:this.login}),r.a.createElement("div",{style:{color:"red"}},this.state.errorMessage))}}]),a}(r.a.Component),J=Object(m.b)((function(e,t){return console.log(t),{}}),{saveUser:k})(V),z=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).register=function(t){e.props.onRegisterClick(t.username,t.password,t.email,t.mobileNo)},e}return Object(p.a)(a,[{key:"renderInput",value:function(e){var t=e.input,a=e.lable,n=e.type,l=e.meta;return r.a.createElement(U.a.Group,{controlId:a},r.a.createElement(U.a.Label,null,a),r.a.createElement(U.a.Control,Object.assign({},t,{type:n})),r.a.createElement(U.a.Text,null,l.touched&&l.error?r.a.createElement("div",{style:{color:"red"}},l.error):""))}},{key:"render",value:function(){return r.a.createElement(U.a,{onSubmit:this.props.handleSubmit(this.register)},r.a.createElement(P.a,{name:"username",component:this.renderInput,lable:"Username",type:"text"}),r.a.createElement(P.a,{name:"password",component:this.renderInput,lable:"Password",type:"password"}),r.a.createElement(P.a,{name:"repassword",component:this.renderInput,lable:"Re-Password",type:"password"}),r.a.createElement(P.a,{name:"email",component:this.renderInput,lable:"Email",type:"email"}),r.a.createElement(P.a,{name:"mobileNo",component:this.renderInput,lable:"Mobile No",type:"number"}),r.a.createElement(B.a,{block:!0,style:{backgroundColor:"#24bfb8",border:"#24bfb8"},type:"submit"},"Register"))}}]),a}(r.a.Component),Y=Object(H.a)({form:"RegisterForm",validate:function(e){var t={};return e.username||(t.username="Enter username"),e.password||(t.password="Enter password"),e.repassword||(t.repassword="Enter valid username"),e.password!=e.repassword&&(t.repassword="Not matching with password "),t}})(z),X=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={errorMessage:""},e.register=function(){var t=Object(E.a)(h.a.mark((function t(a,n,r,l){var o;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.post("/register",{playerName:a,password:n,email:r,mobileNo:l});case 2:o=t.sent,console.log(o),null!=o&"Success"==o.data.status?e.props.saveUser(a,o.data.token):e.setState({errorMessage:"Invalid Credentials"});case 5:case"end":return t.stop()}}),t)})));return function(e,a,n,r){return t.apply(this,arguments)}}(),e}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Register"),r.a.createElement(Y,{onRegisterClick:this.register}),r.a.createElement("div",{style:{color:"red"}},this.state.errorMessage))}}]),a}(r.a.Component),$=Object(m.b)((function(e){return e}),{saveUser:k})(X),q=a(265),K=function(e){return r.a.createElement("div",null,r.a.createElement(q.a,null,r.a.createElement(T.a,null,r.a.createElement(L.a,null,r.a.createElement(J,null)),r.a.createElement(L.a,null,r.a.createElement($,null)))))},Q=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).generateScore=function(t){e.props.generateScore(t.leaderboardId)},e}return Object(p.a)(a,[{key:"renderInput",value:function(e){var t=e.input,a=e.type,n=e.name,l=e.lable,o=e.meta;return r.a.createElement(U.a.Group,null,r.a.createElement(U.a.Label,null,l),r.a.createElement(U.a.Control,Object.assign({},t,{type:a,name:n})),r.a.createElement(U.a.Text,null,o.touched&&o.error?r.a.createElement("div",{style:{color:"red"}},o.error):""))}},{key:"renderSelect",value:function(e){return r.a.createElement(U.a.Group,{controlId:e.lable},r.a.createElement(U.a.Label,null,e.lable),r.a.createElement(U.a.Control,Object.assign({as:"select"},e.input,{name:e.name}),e.children),r.a.createElement(U.a.Text,null,e.meta.error?r.a.createElement("div",{style:{color:"red"}},e.meta.error):""))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(U.a,{onSubmit:this.props.handleSubmit(this.generateScore)},r.a.createElement(P.a,{name:"leaderboardId",lable:"LeaderboardId",component:this.renderSelect},r.a.createElement("option",{value:"NA"},"--Select--"),null!=this.props.leaderboards&&this.props.leaderboards.map((function(e){return r.a.createElement("option",{key:e},e)}))),r.a.createElement(B.a,{style:{backgroundColor:"#24bfb8",border:"#24bfb8"},type:"submit"},"Click here for score")))}}]),a}(r.a.Component),Z=Object(H.a)({form:"Game",validate:function(e){var t={};return e.leaderboardId&&"NA"!=e.leaderboardId||(t.leaderboardId="Select leaderboard"),t}})(Q),ee=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).submitHandler=function(){var t=Object(E.a)(h.a.mark((function t(a){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=10*Math.round(Math.random())+20*Math.round(Math.random()),e.props.updateScore(a,e.props.username,n);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.props.loadLeaderboards()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(Z,{leaderboards:this.props.leaderboards,generateScore:this.submitHandler}),""!=this.props.errorMessage?this.props.errorMessage:"","Your current game score : ",this.props.score)}}]),a}(r.a.Component),te=Object(m.b)((function(e){return{username:e.user.username,token:e.user.token,leaderboards:e.leaderboards,score:e.score,errorMessage:e.errorMessage}}),{updateScore:function(e,t,a){return function(){var n=Object(E.a)(h.a.mark((function n(r){var l,o;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l=Le.getState().user.token,console.log("sessiontoken ",l),n.next=4,v.post("/leaderboard/"+e+"/addScore",{name:t,score:a},{headers:{token:l}});case 4:null!=(o=n.sent)&&0==o.data.statusCode?r({type:"UPDATE_SCORE",payload:{score:a}}):null!=o&&-1==o.data.statusCode&&r({type:"SHOW_SCORE_ERROR",payload:{message:"error in updating score"}});case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},loadLeaderboards:O})(ee),ae=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.props.loadBalances(this.props.username,this.props.token),this.props.loadCurrencies()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h4",null,"Balances"),r.a.createElement(A.a,{striped:!0,bordered:!0,hover:!0,size:"sm"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Currency"),r.a.createElement("th",null,"Balance"))),r.a.createElement("tbody",null,this.props.currencies&&this.props.currencies.map((function(t){return null!=e.props.balances&&r.a.createElement("tr",null,r.a.createElement("td",null,t),r.a.createElement("td",null,e.props.balances[t]?e.props.balances[t]:0))})))))}}]),a}(r.a.Component),ne=Object(m.b)((function(e){return{currencies:e.currencies,balances:e.balances,username:e.user.username,token:e.user.token}}),{loadBalances:D,loadCurrencies:j})(ae),re=a(266),le=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).transact=function(t){console.log(t),e.props.transaction(t.type,t.currency,t.amount)},e}return Object(p.a)(a,[{key:"renderInput",value:function(e){var t=e.input,a=e.type,n=e.name,l=e.lable,o=e.meta;return r.a.createElement(U.a.Group,{controlId:l},r.a.createElement(U.a.Label,null,l),r.a.createElement(U.a.Control,Object.assign({},t,{type:a,name:n})),r.a.createElement(U.a.Text,null,o.touched&&o.error?r.a.createElement("div",{style:{color:"red"}},o.error):""," "))}},{key:"renderSelect",value:function(e){return r.a.createElement(U.a.Group,{controlId:e.lable},r.a.createElement(U.a.Label,null,e.lable),r.a.createElement(U.a.Control,Object.assign({as:"select"},e.input,{name:e.name}),e.children),r.a.createElement(U.a.Text,null,e.meta.error?r.a.createElement("div",{style:{color:"red"}},e.meta.error):""," "))}},{key:"render",value:function(){return r.a.createElement(re.a,{style:{backgroundColor:"#24bfb8",border:"#24bfb8"}},r.a.createElement("h3",null,"Transaction Form"),r.a.createElement(U.a,{onSubmit:this.props.handleSubmit(this.transact)},r.a.createElement(P.a,{name:"amount",lable:"Amount",component:this.renderInput,type:"number"}),r.a.createElement(P.a,{name:"currency",lable:"Currency",component:this.renderSelect},r.a.createElement("option",{value:"NA"},"-select-"),null!=this.props.currencies&&this.props.currencies.map((function(e){return r.a.createElement("option",{value:e},e)}))),r.a.createElement(P.a,{name:"type",lable:"TransactionType",component:this.renderSelect},r.a.createElement("option",{value:"NA"},"-select-"),r.a.createElement("option",{value:"debit"},"debit"),r.a.createElement("option",{value:"credit"},"credit")),r.a.createElement(B.a,{variant:"light",block:!0,type:"submit"},"Submit")))}}]),a}(r.a.Component),oe=Object(H.a)({form:"Transaction",validate:function(e){var t={};return e.currency?e.type?(!e.amount||e.amount<0)&&(t.amount="Enter amount greater than 0"):t.type="Select type":t.currency="Select currency",t}})(le),ce=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={status:""},e.handleSubmit=function(){var t=Object(E.a)(h.a.mark((function t(a,n,r){var l;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("NA"==a||"NA"==n){t.next=8;break}return t.next=3,v.post("/wallet/"+a,{playerName:e.props.username,amount:parseInt(r),currency:n},{headers:{token:e.props.token}});case 3:l=t.sent,e.setState({status:l.data.status}),e.props.loadBalances(e.props.username,e.props.token),t.next=9;break;case 8:alert("Select currency and type");case 9:case"end":return t.stop()}}),t)})));return function(e,a,n){return t.apply(this,arguments)}}(),e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.props.loadCurrencies()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(oe,{currencies:this.props.currencies,transaction:this.handleSubmit}),this.state.status)}}]),a}(r.a.Component),se=Object(m.b)((function(e){return{currencies:e.currencies,username:e.user.username,token:e.user.token}}),{loadCurrencies:j,loadBalances:D})(ce),ue=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"renderComponent",value:function(){return r.a.createElement("div",null,r.a.createElement(T.a,{style:{padding:"1%"}},r.a.createElement(L.a,null,r.a.createElement(B.a,{style:{backgroundColor:"#24bfb8",border:"#24bfb8"},onClick:function(){g.push("/home")}},"back"))),r.a.createElement(T.a,null,r.a.createElement(L.a,null,r.a.createElement(ne,null))),r.a.createElement(T.a,null,r.a.createElement(L.a,null,r.a.createElement(se,null))))}},{key:"render",value:function(){return r.a.createElement("div",null,this.props.username?this.renderComponent():"Illegal access to this page")}}]),a}(r.a.Component),pe=Object(m.b)((function(e){return{username:e.user.username}}))(ue),ie=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(T.a,null,r.a.createElement(L.a,null,r.a.createElement(B.a,{style:{backgroundColor:"#24bfb8",border:"#24bfb8"},block:!0,onClick:function(){g.push("/wallet")}},"Wallet")),r.a.createElement(L.a,null,r.a.createElement(B.a,{style:{backgroundColor:"#24bfb8",border:"#24bfb8"},block:!0,onClick:function(){g.push("/games")}},"Games")),r.a.createElement(L.a,null,r.a.createElement(B.a,{style:{backgroundColor:"#d94545",border:"#d94545"},block:!0,onClick:function(){e.props.logoutUser(),g.push("/login")}},"Logout"))),r.a.createElement(T.a,null,r.a.createElement(L.a,null,r.a.createElement("h2",null,"Welcome ",this.props.username))),r.a.createElement(T.a,null,r.a.createElement(L.a,null,r.a.createElement(te,{username:this.props.username}))),r.a.createElement(G,{username:this.props.username}))}}]),a}(r.a.Component),de=Object(m.b)((function(e){return{username:e.user.username}}),{logoutUser:function(){return function(){var e=Object(E.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Le.getState().user.token,e.next=3,v.post("/logout",{},{headers:{token:a}});case 3:"Success"==e.sent.status&&t({type:"CLEAR_USER",payload:{}});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(ie),me=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).renderComponent=function(){return r.a.createElement(K,null)},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.props.match.params&&console.log(this.props.match.params)}},{key:"render",value:function(){return r.a.createElement("div",null,this.renderComponent())}}]),a}(r.a.Component),be=Object(m.b)((function(e){return{username:e.user.username}}))(me),he=a(267),Ee=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={game:""},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.props.match&&this.props.findOpponent(this.props.match.params.game)}},{key:"componentDidUpdate",value:function(){"FOUND"!=this.props.pvp.status?this.props.pollOpponent():this.props.match&&(console.log(this.props.match),g.push("/"+this.props.match.params.game))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(T.a,null,r.a.createElement(L.a,null,r.a.createElement(B.a,{style:{backgroundColor:"#24bfb8",border:"#24bfb8"},onClick:function(){g.push("/home")}},"back"))),r.a.createElement(R.a,null,r.a.createElement(R.a.Header,{style:{color:"white",backgroundColor:"#24bfb8",border:"#24bfb8"}},r.a.createElement("h1",null,"Finding Opponent ...")),r.a.createElement(R.a.Body,null,r.a.createElement(he.a,{size:"lg",animation:"border"}))))}}]),a}(r.a.Component),fe=Object(m.b)((function(e){return{pvp:e.pvp}}),{findOpponent:function(e){return function(){var t=Object(E.a)(h.a.mark((function t(a){var n,r,l;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Le.getState().user.token,r=Le.getState().user.username,t.next=4,v.post("matchmaking/findOpponent",{playerName:r,gameName:e},{headers:{token:n}});case 4:l=t.sent,console.log(l),"Success"==l.data.status?a({type:"FIND_MATCH",payload:{status:"FOUND",opponentUser:l.data.opponentPlayer,gameId:l.data.gameId}}):a({type:"FIND_MATCH",payload:{status:"SEARCHING",opponentUser:"",gameId:"NA"}});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},pollOpponent:function(){return function(){var e=Object(E.a)(h.a.mark((function e(t){var a,n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Le.getState().user.token,n=Le.getState().user.username,e.next=4,v.post("matchmaking/pollOpponent",{playerName:n},{headers:{token:a}});case 4:r=e.sent,console.log(r),"Success"==r.data.status?t({type:"FIND_MATCH",payload:{status:"FOUND",opponentUser:r.data.opponentPlayer,gameId:r.data.gameId}}):t({type:"FIND_MATCH",payload:{status:"SEARCHING",opponentUser:"",gameId:"NA"}});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Ee),ve=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={seconds:20},e.updateCache=function(t){var a=JSON.parse(t.data);console.log("Updated",a),e.props.updateScoresInState(a)},e.endGameHandler=function(){e.props.endGame()},e.submitHandler=function(){var t=10*Math.round(Math.random())+20*Math.round(Math.random());e.props.updatePvpScore(t)},e.renderGame=function(){return r.a.createElement("div",null,r.a.createElement(T.a,{style:{paddingBottom:"1%"}},r.a.createElement(L.a,null,r.a.createElement(B.a,{block:!0,style:{backgroundColor:"#24bfb8",border:"#24bfb8"},onClick:function(){g.push("/home")}},"back")),r.a.createElement(L.a,null,r.a.createElement(B.a,{block:!0,style:{backgroundColor:"#d6b84d",border:"#d6b84d"},onClick:function(){g.push("/pvp/highscore")}},"New-Match"))),r.a.createElement(R.a,null,r.a.createElement(R.a.Header,{style:{color:"white",backgroundColor:"#24bfb8",border:"#24bfb8"}},r.a.createElement("h4",null,"Game Id : ",e.props.pvp.gameId),r.a.createElement("h4",null,"Time : ",e.state.seconds)),r.a.createElement(R.a.Body,null,r.a.createElement(T.a,null,r.a.createElement(L.a,null,r.a.createElement(R.a,null,r.a.createElement(R.a.Img,{variant:"top",src:"https://github.com/Nithin2994/react-game/blob/gh-pages/images/user.png?raw=true"}),r.a.createElement(R.a.Body,null,r.a.createElement(R.a.Title,null,e.props.username),r.a.createElement(R.a.Text,null,r.a.createElement("h2",null,"Score  ",e.props.pvpScores[e.props.username])),r.a.createElement(B.a,{style:{backgroundColor:"#24bfb8",border:"#24bfb8"},onClick:e.submitHandler},"Play")))),r.a.createElement(L.a,null,r.a.createElement(R.a,null,r.a.createElement(R.a.Img,{variant:"top",src:"/images/user.png"}),r.a.createElement(R.a.Body,null,r.a.createElement(R.a.Title,null,e.props.pvp.opponent),r.a.createElement(R.a.Text,null,r.a.createElement("h2",null,"Score  ",e.props.pvpScores[e.props.pvp.opponent])))))))))},e.renderWinner=function(){return r.a.createElement("div",null,r.a.createElement(T.a,{style:{paddingBottom:"1%"}},r.a.createElement(L.a,null,r.a.createElement(B.a,{style:{backgroundColor:"#24bfb8",border:"#24bfb8"},onClick:function(){g.push("/home")}},"back"))),r.a.createElement(R.a,{style:{backgroundColor:"#24bfb8",border:"#24bfb8"}},r.a.createElement(R.a.Header,null,r.a.createElement("h2",null,"Congratulations ",e.props.pvp.winner[e.props.pvp.opponent]?e.props.pvp.opponent:e.props.username,"  ")),r.a.createElement(R.a.Body,null,r.a.createElement(T.a,null,r.a.createElement(L.a,null,r.a.createElement(R.a.Img,{variant:"top",src:"/images/user.png"})),r.a.createElement(L.a,null,r.a.createElement(T.a,{style:{padding:"1%"}},r.a.createElement(L.a,null,r.a.createElement(R.a,{style:{backgroundColor:"#24bfb8",border:"#24bfb8"},text:"white"},r.a.createElement(R.a.Header,null,"SCORE"),r.a.createElement(R.a.Body,null,r.a.createElement("h2",null,e.props.pvp.winner[e.props.pvp.opponent]?e.props.pvp.winner[e.props.pvp.opponent]:e.props.pvp.winner[e.props.username]))))),r.a.createElement(T.a,{style:{padding:"1%"}},r.a.createElement(L.a,null,r.a.createElement(R.a,{style:{backgroundColor:"#24bfb8",border:"#24bfb8"},text:"white"},r.a.createElement(R.a.Header,null,"LEVEL"),r.a.createElement(R.a.Body,null,r.a.createElement("h2",null,e.props.pvp.winner[e.props.pvp.opponent]?e.props.pvp.winner[e.props.pvp.opponent]:e.props.pvp.winner[e.props.username]))))),r.a.createElement(T.a,{style:{padding:"1%"}},r.a.createElement(L.a,null,r.a.createElement(R.a,{style:{backgroundColor:"#24bfb8",border:"#24bfb8"},text:"white"},r.a.createElement(R.a.Header,null,"REWARDS"),r.a.createElement(R.a.Body,null,r.a.createElement("h2",null,e.props.pvp.winner[e.props.pvp.opponent]?e.props.pvp.winner[e.props.pvp.opponent]:e.props.pvp.winner[e.props.username]))))))))))},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.ws=new WebSocket("ws://localhost:8081/ws"),this.ws.onopen=function(){return e.ws.send(JSON.stringify({gameId:e.props.pvp.gameId,isJoin:"true",Player:e.props.username}))},this.ws.addEventListener("message",this.updateCache),setInterval((function(){e.setState({seconds:e.state.seconds-1})}),1e3),setTimeout(this.endGameHandler,2e4)}},{key:"render",value:function(){return r.a.createElement("div",null,this.props.pvp&&"Finished"!=this.props.pvp.gameStatus?this.renderGame():this.renderWinner())}}]),a}(r.a.Component),ye=Object(m.b)((function(e){return{username:e.user.username,pvp:e.pvp,pvpScores:e.pvpScores}}),{updatePvpScore:w,endGame:C,updateScoresInState:S})(ve),ge=a(60),ke=function(e){return r.a.createElement(L.a,null,e.selected?e.currentPlayer==e.selected?r.a.createElement("img",{width:"100%",height:"100%",src:"https://github.com/Nithin2994/react-game/blob/gh-pages/images/O.png?raw=true"}):r.a.createElement("img",{width:"100%",height:"100%",src:"https://github.com/Nithin2994/react-game/blob/gh-pages/images/X.png?raw=true"}):r.a.createElement("img",{onClick:function(){e.selectCell(e.id)},width:"100%",height:"100%",src:"https://github.com/Nithin2994/react-game/blob/gh-pages/images/click.png?raw=true"}))},Oe=a(124),we=a.n(Oe),Se=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={seconds:60,selectedData:{},myTurn:!0},e.updateCache=function(t){var a=JSON.parse(t.data);console.log("Received ",a),e.updateGridVals(a),e.state.winner||e.setState({myTurn:!0})},e.updateGridVals=function(t){var a=Object(ge.a)({},e.state.selectedData);a[t.id]=t.player,e.setState({selectedData:a}),e.state.selectedData[1]==e.state.selectedData[2]&&e.state.selectedData[2]==e.state.selectedData[3]&&e.state.selectedData[1]&&e.setState({winner:"Winner is "+e.state.selectedData[1]}),e.state.selectedData[4]==e.state.selectedData[5]&&e.state.selectedData[5]==e.state.selectedData[6]&&e.state.selectedData[4]&&e.setState({winner:"Winner is "+e.state.selectedData[4]}),e.state.selectedData[7]==e.state.selectedData[8]&&e.state.selectedData[8]==e.state.selectedData[9]&&e.state.selectedData[8]&&e.setState({winner:"Winner is "+e.state.selectedData[8]}),e.state.selectedData[1]==e.state.selectedData[5]&&e.state.selectedData[5]==e.state.selectedData[9]&&e.state.selectedData[5]&&e.setState({winner:"Winner is "+e.state.selectedData[5]}),e.state.selectedData[3]==e.state.selectedData[5]&&e.state.selectedData[5]==e.state.selectedData[7]&&e.state.selectedData[5]&&e.setState({winner:"Winner is "+e.state.selectedData[5]}),e.state.selectedData[2]==e.state.selectedData[5]&&e.state.selectedData[5]==e.state.selectedData[8]&&e.state.selectedData[5]&&e.setState({winner:"Winner is "+e.state.selectedData[5]}),e.state.selectedData[1]==e.state.selectedData[4]&&e.state.selectedData[4]==e.state.selectedData[7]&&e.state.selectedData[4]&&e.setState({winner:"Winner is "+e.state.selectedData[4]}),e.state.selectedData[3]==e.state.selectedData[6]&&e.state.selectedData[6]==e.state.selectedData[9]&&e.state.selectedData[6]&&e.setState({winner:"Winner is "+e.state.selectedData[6]});var n=0;we.a.forEach(e.state.selectedData,(function(e,t){n++})),9==n&&e.setState({winner:"Match is Draw"}),e.state.winner&&(e.endGameHandler(),e.setState({myTurn:!1}))},e.endGameHandler=function(){e.props.endGame()},e.selectCellHandler=function(){var t=Object(E.a)(h.a.mark((function t(a){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(1!=e.state.myTurn){t.next=7;break}return console.log("Selected : ",a),t.next=4,v.post("/matchmaking/tiktoctoe",{player:e.props.username,id:a});case 4:t.sent&&e.updateGridVals({player:e.props.username,id:a}),e.setState({myTurn:!1});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.renderGameGrid=function(){return r.a.createElement("div",null,r.a.createElement(q.a,null,r.a.createElement(T.a,null,r.a.createElement(L.a,{md:3,lg:3}),[1,2,3].map((function(t){return r.a.createElement(ke,{key:t,style:{width:"5%"},id:t,selected:e.state.selectedData[t],selectCell:e.selectCellHandler,currentPlayer:e.props.username})})),r.a.createElement(L.a,{md:3,lg:3})),r.a.createElement(T.a,null,r.a.createElement(L.a,{md:3,lg:3}),[4,5,6].map((function(t){return r.a.createElement(ke,{key:t,style:{width:"5%"},id:t,selected:e.state.selectedData[t],selectCell:e.selectCellHandler,currentPlayer:e.props.username})})),r.a.createElement(L.a,{md:3,lg:3})),r.a.createElement(T.a,null,r.a.createElement(L.a,{md:3,lg:3}),[7,8,9].map((function(t){return r.a.createElement(ke,{key:t,style:{width:"5%"},id:t,selected:e.state.selectedData[t],selectCell:e.selectCellHandler,currentPlayer:e.props.username})})),r.a.createElement(L.a,{md:3,lg:3}))))},e.renderWinner=function(){return r.a.createElement("h2",null,e.state.winner," ")},e.render=function(){return r.a.createElement("div",null,r.a.createElement(T.a,{style:{paddingBottom:"1%"}},r.a.createElement(L.a,null,r.a.createElement(B.a,{block:!0,style:{backgroundColor:"#24bfb8",border:"#24bfb8"},onClick:function(){g.push("/home")}},"back")),r.a.createElement(L.a,null,r.a.createElement(B.a,{block:!0,style:{backgroundColor:"#d6b84d",border:"#d6b84d"},onClick:function(){g.push("/pvp/tictactoe")}},"New-Match"))),r.a.createElement(R.a,null,r.a.createElement(R.a.Header,null,r.a.createElement("h2",null,"Tic Tac Toe"),r.a.createElement("h3",null,e.state.winner?e.state.winner:e.state.myTurn?"Your Turn":"Opponent Turn")),r.a.createElement(R.a.Body,null,e.renderGameGrid())))},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.ws=new WebSocket("ws://localhost:8081/ws"),this.ws.onopen=function(){return e.ws.send(JSON.stringify({gameId:"TikTocToe",isJoin:"true",Player:e.props.username}))},this.ws.addEventListener("message",this.updateCache)}}]),a}(r.a.Component),Ce=Object(m.b)((function(e){return{username:e.user.username,pvp:e.pvp}}),{updatePvpScore:w,endGame:C,updateScoresInState:S})(Se),je=function(){return r.a.createElement(re.a,{style:{backgroundColor:"#24bfb8"}},r.a.createElement("center",null,r.a.createElement("h1",null," My Game ")))},De=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement(q.a,null,r.a.createElement(T.a,null,r.a.createElement(L.a,null,r.a.createElement(B.a,{style:{backgroundColor:"#24bfb8",border:"#24bfb8"},onClick:function(){g.push("/home")}},"back"))),r.a.createElement(T.a,null,r.a.createElement(L.a,null,r.a.createElement("img",{width:"100%",height:"100%",src:"https://github.com/Nithin2994/react-game/blob/gh-pages/images/highscore.jpeg?raw=true",onClick:function(){g.push("/pvp/highscore")}})),r.a.createElement(L.a,null,r.a.createElement("img",{width:"100%",height:"100%",src:"https://github.com/Nithin2994/react-game/blob/gh-pages/images/tictoctoe.png?raw=true",onClick:function(){g.push("/pvp/tictactoe")}}))))}}]),a}(r.a.Component);var Ae=function(){return r.a.createElement(c.a,{basename:"/react-game/",history:g},r.a.createElement(je,null),r.a.createElement(q.a,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/index",component:be}),r.a.createElement(s.a,{path:"/login",component:J}),r.a.createElement(s.a,{path:"/register",component:$}),r.a.createElement(s.a,{path:"/logintest/:type",exact:!0,component:be}),r.a.createElement(s.a,{path:"/home",extact:!0,component:de}),r.a.createElement(s.a,{path:"/wallet",extact:!0,component:pe}),r.a.createElement(s.a,{path:"/pvp/:game",extact:!0,component:fe}),r.a.createElement(s.a,{path:"/highscore",extact:!0,component:ye}),r.a.createElement(s.a,{path:"/tictactoe",extact:!0,component:Ce}),r.a.createElement(s.a,{path:"/games",extact:!0,component:De}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ie=a(15),xe=a(82),Ne=a(273),Me=Object(Ie.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{username:"",token:""},t=arguments.length>1?arguments[1]:void 0;return"SAVE_USER"==t.type?(console.log("userreducer",t),{username:t.payload.username,token:t.payload.token}):"CLEAR_USER"==t.type?{}:e},leaderboards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"LOAD_LEADERBOARDS"==t.type?t.payload.leaderboards:e},leaderboardsData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a=!0;if("LOAD_LEADERBOARDS_DATA"==t.type){var n=[];if(e.length>0&&e.map((function(e){e.leaderboardName===t.payload.leaderboardId&&(console.log("update data"),a=!1,e.data=t.payload.leaderboardsData),n=[].concat(Object(xe.a)(n),[e])})),a){var r={leaderboardName:t.payload.leaderboardId,data:t.payload.leaderboardsData};n=[].concat(Object(xe.a)(n),[r])}return n}return e},score:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;return"UPDATE_SCORE"==t.type?(console.log("update",t.payload.score),t.payload.score):e},errorMessage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;if("SHOW_SCORE_ERROR"==t.type){var a=t.payload.message;return a}return e},currencies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;if("LOAD_CURRENCIES"==t.type){var a=t.payload.currencies;return a}return e},balances:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;if("LOAD_BALANCES"==t.type){var a=t.payload.balances;return a}return e},form:Ne.a,pvp:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if("FIND_MATCH"==t.type){console.log(t.payload);var a={};return a.status=t.payload.status,a.opponent=t.payload.opponentUser,a.gameId=t.payload.gameId,a.gameStatus="Begin",a}if("END_PVP_GAME"==t.type){var n=Object(ge.a)({},e);return n.gameStatus="Finished",n.winner=t.payload.winner,n}return e},pvpScores:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if("UPDATE_PVP_GAME_SCORES"==t.type){console.log("updating cache ",t.payload.scores);var a=t.payload.scores;return a}return"FIND_MATCH"==t.type?{}:e}}),Re=a(126),Te=Object(Ie.d)(Me,Object(Ie.a)(Re.a));o.a.render(r.a.createElement(m.a,{store:Te},r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ae,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}));var Le=t.default=Te}},[[129,1,2]]]);
//# sourceMappingURL=main.8da4bd7d.chunk.js.map