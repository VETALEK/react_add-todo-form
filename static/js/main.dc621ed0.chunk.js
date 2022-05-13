(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),o=a(9),s=a(2),r=a(7),c=a(1),l=a(5),d=a.n(l),m=(a(14),a(0)),u=function(e){var t=e.id,a=e.title,n=e.userName,i=e.completed,o=Object(c.useState)(i),r=Object(s.a)(o,2),l=r[0],u=r[1];return Object(m.jsxs)("div",{className:d()({TodoCard:!0,"TodoCard--completed":l}),children:[Object(m.jsx)("input",{type:"checkbox",id:"isDone".concat(t),className:"TodoCard__completedToggler",checked:l,onChange:function(e){var t=e.target;return u(t.checked)}}),Object(m.jsx)("label",{htmlFor:"isDone".concat(t),className:"TodoCard__hint",children:"Click on card to swithc"}),Object(m.jsx)("hr",{className:"TodoCard__strip"}),Object(m.jsx)("p",{className:"TodoCard__title",children:a}),Object(m.jsx)("p",{className:"TodoCard__userName",children:n})]})},h=(a(16),function(e){var t=e.todos;return Object(m.jsx)("ul",{className:"TodoList",children:t.map((function(e){var t=e.id,a=e.title,n=e.completed,i=e.userName;return Object(m.jsx)("li",{className:"TodoList__item",children:Object(m.jsx)(u,{id:t,title:a,completed:n,userName:i})},t)}))})}),b=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}],p=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}],j=(a(17),p.map((function(e){var t=b.find((function(t){return t.id===e.userId}));return Object(r.a)(Object(r.a)({},e),{},{userName:t?t.username:"Anonymous"})}))),g=b.map((function(e){return e.username})),y=function(){var e=Object(c.useState)(j),t=Object(s.a)(e,2),a=t[0],n=t[1],i=Object(c.useState)(!1),r=Object(s.a)(i,2),l=r[0],u=r[1],b=Object(c.useState)(""),p=Object(s.a)(b,2),y=p[0],O=p[1],f=Object(c.useState)(""),v=Object(s.a)(f,2),_=v[0],x=v[1],C=Object(c.useState)(!1),N=Object(s.a)(C,2),w=N[0],k=N[1],S=Object(c.useState)(!1),T=Object(s.a)(S,2),z=T[0],P=T[1];return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsxs)("form",{action:"GET",className:d()("TodoForm App__todoForm",{"TodoForm--completed":l,"TodoForm--invalid":w||z}),onSubmit:function(e){e.preventDefault();var t=!0;if(y.length<1&&(k(!0),t=!1),g.includes(_)||(P(!0),t=!1),t){var i={id:a.length+1,title:y,userName:_,completed:l};n((function(e){return[i].concat(Object(o.a)(e))})),O(""),x("")}},children:[Object(m.jsx)("input",{type:"checkbox",name:"completed",id:"isNewCompleted",className:"TodoForm__completedToggler",checked:l,onChange:function(e){var t=e.target;return u(t.checked)}}),Object(m.jsx)("label",{htmlFor:"isNewCompleted",className:"TodoForm__hint",children:w||z?"\n                ".concat(w?"No title":"","\n                ").concat(z?"No username":"","\n              "):"Click on card to switch"}),Object(m.jsx)("hr",{className:"TodoForm__strip"}),Object(m.jsx)("div",{className:"InputContainer",children:Object(m.jsx)("input",{name:"title",id:"newTitle",className:"TodoForm__title InputContainer__item",placeholder:"Task title",value:y,onChange:function(e){var t=e.target;t.value.match(/[^\u0430-\u044f\u0410-\u042f\u0451\u0401a-zA-Z 0-9]/)||(O(t.value),k(!1))}})}),Object(m.jsxs)("div",{className:"InputContainer",children:[Object(m.jsxs)("select",{name:"userName",id:"newUserName",className:"TodoForm__userName InputContainer__item",value:_,onChange:function(e){var t=e.target;x(t.value),P(!1)},children:[Object(m.jsx)("option",{value:"",disabled:!0,children:"Username"}),g.map((function(e){return Object(m.jsx)("option",{value:e,children:e},e)}))]}),Object(m.jsx)("button",{type:"submit",className:"TodoForm__submitButton InputContainer__item",children:"Add todo"})]})]}),Object(m.jsx)(h,{todos:a})]})};i.a.render(Object(m.jsx)(y,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.dc621ed0.chunk.js.map