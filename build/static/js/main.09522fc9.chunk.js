(this.webpackJsonpphotogalleryalbum=this.webpackJsonpphotogalleryalbum||[]).push([[0],{145:function(t,e,c){},146:function(t,e,c){},247:function(t,e,c){"use strict";c.r(e);var a=c(0),n=c.n(a),i=c(34),s=c.n(i),r=(c(145),c(56)),l=(c(146),c(51)),o=c(52),j=c(61),b=c(59),d=c(249),h=c(108),O=c(254),u=c(257),x=c(258),p=c(259),m=c(260),g=c(261),f=c(6),v=d.a.Header,y=d.a.Content,I=d.a.Footer,k=d.a.Sider,C=h.a.SubMenu,S=function(t){Object(j.a)(c,t);var e=Object(b.a)(c);function c(){var t;Object(l.a)(this,c);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))).state={collapsed:!1},t.onCollapse=function(e){console.log(e),t.setState({collapsed:e})},t}return Object(o.a)(c,[{key:"render",value:function(){var t=this.state.collapsed;return Object(f.jsxs)(d.a,{style:{minHeight:"100vh"},children:[Object(f.jsxs)(k,{collapsible:!0,collapsed:t,onCollapse:this.onCollapse,children:[Object(f.jsx)("div",{className:"logo"}),Object(f.jsxs)(h.a,{theme:"dark",defaultSelectedKeys:["1"],mode:"inline",children:[Object(f.jsx)(h.a.Item,{icon:Object(f.jsx)(u.a,{}),children:"Option 1"},"1"),Object(f.jsx)(h.a.Item,{icon:Object(f.jsx)(x.a,{}),children:"Option 2"},"2"),Object(f.jsxs)(C,{icon:Object(f.jsx)(p.a,{}),title:"User",children:[Object(f.jsx)(h.a.Item,{children:"Tom"},"3"),Object(f.jsx)(h.a.Item,{children:"Bill"},"4"),Object(f.jsx)(h.a.Item,{children:"Alex"},"5")]},"sub1"),Object(f.jsxs)(C,{icon:Object(f.jsx)(m.a,{}),title:"Team",children:[Object(f.jsx)(h.a.Item,{children:"Team 1"},"6"),Object(f.jsx)(h.a.Item,{children:"Team 2"},"8")]},"sub2"),Object(f.jsx)(h.a.Item,{icon:Object(f.jsx)(g.a,{}),children:"Files"},"9")]})]}),Object(f.jsxs)(d.a,{className:"site-layout",children:[Object(f.jsx)(v,{className:"site-layout-background",style:{padding:0}}),Object(f.jsxs)(y,{style:{margin:"0 16px"},children:[Object(f.jsxs)(O.a,{style:{margin:"16px 0"},children:[Object(f.jsx)(O.a.Item,{children:Object(f.jsx)(r.b,{to:"/",children:"Home"})}),Object(f.jsx)(O.a.Item,{children:Object(f.jsx)(r.b,{to:"/",children:"Articles"})})]}),Object(f.jsx)("div",{className:"site-layout-background",style:{padding:24,minHeight:360},children:this.props.children})]}),Object(f.jsx)(I,{style:{textAlign:"center"},children:"Evimeria \xa92021"})]})]})}}]),c}(n.a.Component),w=c(20),A=c(89),D=c.n(A),F=c(256),T=c(252),M=c(255),N=c(262),E=c(263),H=c(264),L=function(t){var e=t.icon,c=t.text;return Object(f.jsxs)(F.b,{children:[n.a.createElement(e),c]})},z=function(t){return Object(f.jsx)(T.b,{itemLayout:"vertical",size:"large",pagination:{onChange:function(t){console.log(t)},pageSize:3},dataSource:t.data,footer:Object(f.jsxs)("div",{children:[Object(f.jsx)("b",{children:"ant design"})," footer part"]}),renderItem:function(t){return Object(f.jsxs)(T.b.Item,{actions:[Object(f.jsx)(L,{icon:N.a,text:"156"},"list-vertical-star-o"),Object(f.jsx)(L,{icon:E.a,text:"156"},"list-vertical-like-o"),Object(f.jsx)(L,{icon:H.a,text:"2"},"list-vertical-message")],extra:Object(f.jsx)("img",{width:272,alt:"logo",src:"https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"}),children:[Object(f.jsx)(T.b.Item.Meta,{avatar:Object(f.jsx)(M.a,{src:t.avatar}),title:Object(f.jsx)("a",{href:"/".concat(t.id),children:t.title}),description:t.description}),t.content]},t.title)}})},B=function(t){Object(j.a)(c,t);var e=Object(b.a)(c);function c(){var t;Object(l.a)(this,c);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))).state={articles:[]},t}return Object(o.a)(c,[{key:"componentDidMount",value:function(){var t=this;D.a.get("http://127.0.0.1:8000/api/").then((function(e){t.setState({articles:e.data}),console.log(e.data)}))}},{key:"render",value:function(){return Object(f.jsx)(z,{data:this.state.articles})}}]),c}(n.a.Component),J=B,K=c(253),P=function(t){Object(j.a)(c,t);var e=Object(b.a)(c);function c(){var t;Object(l.a)(this,c);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))).state={article:{}},t}return Object(o.a)(c,[{key:"componentDidMount",value:function(){var t=this,e=this.props.match.params.articleID;D.a.get("http://127.0.0.1:8000/api/".concat(e)).then((function(e){t.setState({article:e.data})}))}},{key:"render",value:function(){return Object(f.jsx)(K.a,{title:this.state.article.title,children:Object(f.jsx)("p",{children:this.state.article.content})})}}]),c}(n.a.Component),q=P,Q=function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(w.a,{exact:!0,path:"/",component:J}),Object(f.jsx)(w.a,{exact:!0,path:"/:articleID",component:q})]})};var U=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(r.a,{children:Object(f.jsx)(S,{children:Object(f.jsx)(Q,{})})})})},X=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,265)).then((function(e){var c=e.getCLS,a=e.getFID,n=e.getFCP,i=e.getLCP,s=e.getTTFB;c(t),a(t),n(t),i(t),s(t)}))};s.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(U,{})}),document.getElementById("root")),X()}},[[247,1,2]]]);
//# sourceMappingURL=main.09522fc9.chunk.js.map