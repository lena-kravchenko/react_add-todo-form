(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(4),s=a.n(r),l=a(1),o=a(7),c=a(5),m=a(6),u=a(9),d=a(8),h=a(2),p=(a(15),function(e){var t=e.name;return i.a.createElement("p",null,t)}),g=function(e){var t=e.activity;return i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,t.completed?"\ud83d\uddf8":"\u2717"," ",t.title),i.a.createElement("p",null,i.a.createElement(p,{user:t.user})))};g.defaultProps={activity:[]};var b=function(e){var t=e.activities;return i.a.createElement("ul",{className:"list"},t.map((function(e){return i.a.createElement("li",{key:e.id,className:"list__item"},i.a.createElement(g,{activity:e}))})))};b.defaultProps={activities:[]};var y=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}],v=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}].map((function(e){return Object(h.a)(Object(h.a)({},e),{},{userId:y.find((function(t){return t.id===e.userId}))})})),f=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={activitiesList:v,userId:null,title:"",noUserFlag:!1,noTitleFlag:!1},e.handleSubmit=function(t){t.preventDefault(),e.state.userId?e.state.title?e.setState((function(e){return{activitiesList:[].concat(Object(o.a)(e.activitiesList),[{id:e.activitiesList.length+1,title:e.title,completed:!1,userId:Number(e.userId)}]),userId:"",title:"",noUserFlag:!1,noTitleFlag:!1}})):e.setState({noTitleFlag:!0}):e.setState({noUserFlag:!0})},e.handleChange=function(t){var a=t.target,n=a.name,i=a.value;e.setState(Object(l.a)({},n,i))},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state,t=e.activitiesList,a=e.userId,n=e.title,r=e.noUserFlag,s=e.noTitleFlag;return i.a.createElement("div",{className:"form"},i.a.createElement("form",{onSubmit:!r&&!s&&this.handleSubmit},i.a.createElement("div",{className:"activities"},i.a.createElement("p",{className:"error"},r&&"Please choose a user"),i.a.createElement("label",{htmlFor:"user"},"User:")," ",i.a.createElement("select",{id:"user",name:"userId",value:a,onChange:this.handleChange},i.a.createElement("option",{value:""},"Choose a user"),y.map((function(e){return i.a.createElement("option",{value:e.id,key:e.id},e.name)})))," ",i.a.createElement("label",{htmlFor:"title"},"Title:")," ",i.a.createElement("input",{id:"title",type:"text",name:"title",placeholder:"Enter the title",value:n,onChange:this.handleChange}),i.a.createElement("p",{className:"error"},this.state.noTitleFlag&&"Please enter a title"),i.a.createElement("button",{type:"submit",className:"add"},"Add"))),i.a.createElement(b,{activities:t}))}}]),a}(i.a.Component);s.a.render(i.a.createElement(f,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.cbc0edb4.chunk.js.map