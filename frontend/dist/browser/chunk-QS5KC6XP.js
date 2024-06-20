import{a as oe}from"./chunk-XPQ3BFQD.js";import{a as ne,b as re}from"./chunk-63NUMNZE.js";import{b as $}from"./chunk-HQ5X4PSV.js";import{a as ae}from"./chunk-LVKUJYNS.js";import{b as H,f as Q,g as G,l as z,p as W,q as K,r as Y,s as J,t as X,v as Z,w as ee,x as te}from"./chunk-QPXZDK5X.js";import{b as I,j as ie,l as w}from"./chunk-44R3DJPO.js";import{Ab as b,Cc as q,Eb as E,Hb as S,Jb as u,Ob as k,Pb as A,Qb as T,Sb as t,Tb as f,Ua as R,Ub as m,Vb as F,Xa as d,Ya as v,_ as O,_b as B,da as U,ja as M,mb as _,ob as g,ra as h,sa as x,tb as C,wb as y,xb as D,xc as V,yb as n,yc as L,zb as i,zc as j}from"./chunk-RLAW6FQZ.js";var le=(()=>{let s=class s{get backendUrl(){return this.mybackendUrl}constructor(e){this.http=e,this.mybackendUrl=w.backendUrl,this.serverurl=this.mybackendUrl+"/rides"}getAllStatus(){return this.http.post(`${this.serverurl}/getAllConfirmedRideStatus`,{})}getAllRides(e){return this.http.post(this.serverurl+"/getfilteredRides",e)}getAllfreeDrivers(e,r){return this.http.post(this.serverurl+e,r)}getAssignSpecificDriver(e,r){return this.http.post(this.serverurl+e,r)}assignNearestDriver(e,r){return this.http.post(this.serverurl+e,{rideid:r})}};s.\u0275fac=function(r){return new(r||s)(U(I))},s.\u0275prov=O({token:s,factory:s.\u0275fac,providedIn:"root"});let o=s;return o})();var fe=["closeButton"],_e=["assignButton"],ge=["statusButton"],N=(o,s)=>s._id;function ve(o,s){o&1&&t(0," Pending ")}function he(o,s){o&1&&t(0," Assigning ")}function xe(o,s){o&1&&t(0," Accepted ")}function Ce(o,s){if(o&1&&(n(0,"option",15),_(1,ve,1,0)(2,he,1,0)(3,xe,1,0),i()),o&2){let l,e=s.$implicit;g("value",e._id),d(),C(1,(l=e._id)===0?1:l===1?2:l===3?3:-1)}}function be(o,s){if(o&1&&(n(0,"option",15),t(1),i()),o&2){let l=s.$implicit;g("value",l._id),d(),m("",l.vname," (servicetype)")}}function Se(o,s){o&1&&t(0," Pending ")}function Ee(o,s){o&1&&t(0," Assigning ")}function Re(o,s){o&1&&t(0," Hold ")}function ye(o,s){o&1&&t(0," Accepted ")}function De(o,s){o&1&&t(0," Arrived ")}function ke(o,s){o&1&&t(0," Picked ")}function Ae(o,s){o&1&&t(0," Pending ")}function Te(o,s){if(o&1&&t(0),o&2){let l=u().$implicit;m(" ",l.driverDetails.dname," ")}}function Ie(o,s){o&1&&t(0," Hold ")}function we(o,s){o&1&&t(0," Assign ")}function Fe(o,s){o&1&&t(0," Cancel ")}function Ne(o,s){o&1&&t(0," Assigning ")}function Pe(o,s){o&1&&t(0," Assigning ")}function Oe(o,s){o&1&&t(0," Arrive ")}function Ue(o,s){o&1&&t(0," Pick Up ")}function Me(o,s){o&1&&t(0," Complete ")}function Be(o,s){if(o&1){let l=E();n(0,"tr",24)(1,"td"),t(2),i(),n(3,"td"),t(4),i(),n(5,"td"),t(6),i(),n(7,"td"),t(8),i(),n(9,"td"),t(10),i(),n(11,"td"),t(12),i(),n(13,"td"),t(14),i(),n(15,"td")(16,"button",41,3),_(18,Se,1,0)(19,Ee,1,0)(20,Re,1,0)(21,ye,1,0)(22,De,1,0)(23,ke,1,0)(24,Ae,1,0),i()(),n(25,"td",42)(26,"button",43,4),S("click",function(){let r=h(l),c=r.$implicit,a=r.$index,p=u();return x(p.AssignCall(c,a))}),_(28,Te,1,1)(29,Ie,1,0)(30,we,1,0),i()(),n(31,"td",44)(32,"button",45),S("click",function(){let r=h(l).$implicit,c=u();return x(c.UpdateAction(r._id,r.ridestatus,r.driverDetails))}),_(33,Fe,1,0)(34,Ne,1,0)(35,Pe,1,0)(36,Oe,1,0)(37,Ue,1,0)(38,Me,1,0),i()(),n(39,"td",44)(40,"button",46),S("click",function(){let r=h(l).$implicit,c=u();return x(c.InfoModalData(r))}),t(41,"info"),i()()()}if(o&2){let l,e,r=s.$implicit,c=u();d(2),f(r.ride_no),d(2),f(r.userDetails.uname),d(2),f(r.vehicleDetails.vname),d(2),f(r.bookDate),d(2),f(r.bookTime),d(2),f(r.fromLocation),d(2),f(r.toLocation),d(4),C(18,(l=r.ridestatus)===0?18:l===1?19:l===2?20:l===3?21:l===4?22:l===5?23:24),d(10),C(28,r.driverDetails?28:r.ridestatus===2?29:30),d(4),g("ngClass",c.getNextStatus(r.ridestatus)),d(),C(33,(e=r.ridestatus)===0?33:e===1?34:e===2?35:e===3?36:e===4?37:e===5?38:-1)}}function Ve(o,s){if(o&1){let l=E();n(0,"tr",24)(1,"td"),b(2,"img",51),i(),n(3,"td"),t(4),i(),n(5,"td"),t(6),i(),n(7,"td"),t(8),i(),n(9,"td"),t(10),i(),n(11,"td"),t(12),i(),n(13,"td")(14,"button",52),S("click",function(){let r=h(l).$implicit,c=u(3);return x(c.AssignMe(r))}),t(15,"Assign Me"),i()()()}if(o&2){let l=s.$implicit,e=u(3);d(2),g("src",e.backendUrl+"/uploads/alldrivers/"+l.profile,R),d(2),f(l.name),d(2),f(l.email),d(2),F(" ",e.ride.callcode," ",l.phone,""),d(2),f(e.ride.cityname),d(2),f(e.ride.vehicleDetails.vname)}}function Le(o,s){if(o&1){let l=E();n(0,"tbody"),_(1,Ve,16,7,"tr",48),n(2,"tr")(3,"td",49)(4,"button",50),S("click",function(){h(l);let r=u(2);return x(r.NearestDriver(r.ride._id))}),t(5,"Assign Nearest Driver"),i()()()()}if(o&2){let l=u(2);d(),g("ngForOf",l.alldetailsofDriver)}}function je(o,s){if(o&1&&(n(0,"table",34)(1,"thead",47)(2,"tr",24)(3,"th"),t(4,"Profile"),i(),n(5,"th"),t(6,"Name"),i(),n(7,"th"),t(8,"Email"),i(),n(9,"th"),t(10,"+91 Phone"),i(),n(11,"th"),t(12,"City "),i(),n(13,"th"),t(14,"Service"),i(),n(15,"th"),t(16,"Action"),i()()(),_(17,Le,6,1,"tbody",40),i()),o&2){let l=u();d(17),g("ngIf",l.ride)}}function qe(o,s){o&1&&(n(0,"h1"),t(1,"Request is already assigned to Driver For this Ride"),i())}function $e(o,s){if(o&1&&(n(0,"tr")(1,"td"),t(2,"Waypoint"),i(),n(3,"td"),t(4),i()()),o&2){let l=u(2);d(4),m(": ",l.ride.waypointsLocation,"")}}function He(o,s){o&1&&(n(0,"tr")(1,"td"),t(2,"Waypoint"),i(),n(3,"td"),t(4,": null"),i()())}function Qe(o,s){if(o&1&&(n(0,"tr")(1,"td"),t(2," Driver Profile "),i(),n(3,"td"),b(4,"img",53),i()(),n(5,"tr")(6,"td"),t(7," Driver Name "),i(),n(8,"td"),t(9),i()(),n(10,"tr")(11,"td"),t(12," Driver Phone no. "),i(),n(13,"td"),t(14),i()(),n(15,"tr")(16,"td"),t(17," Driver E-mail"),i(),n(18,"td"),t(19),i()()),o&2){let l=u(2);d(4),g("src",l.backendUrl+"/uploads/alldrivers/"+l.ride.driverDetails.dimage,R),d(5),m(": ",l.ride.driverDetails.dname,""),d(5),m(": ",l.ride.driverDetails.dphone,""),d(5),m(": ",l.ride.driverDetails.demail,"")}}function Ge(o,s){if(o&1&&(n(0,"tbody")(1,"tr")(2,"td"),t(3,"Request id"),i(),n(4,"td"),t(5),i()(),n(6,"tr")(7,"td"),t(8,"User id"),i(),n(9,"td"),t(10),i()(),n(11,"tr")(12,"td"),t(13,"User Profile"),i(),n(14,"td"),b(15,"img",53),i()(),n(16,"tr")(17,"td"),t(18,"User name"),i(),n(19,"td"),t(20),i()(),n(21,"tr")(22,"td"),t(23,"User Email"),i(),n(24,"td"),t(25),i()(),n(26,"tr")(27,"td"),t(28,"User Phone"),i(),n(29,"td"),t(30),i()(),n(31,"tr")(32,"td"),t(33,"Booking Time"),i(),n(34,"td"),t(35),i()(),n(36,"tr")(37,"td"),t(38,"Pickup Location"),i(),n(39,"td"),t(40),i()(),n(41,"tr")(42,"td"),t(43,"Drop-off Location"),i(),n(44,"td"),t(45),i()(),_(46,$e,5,1,"tr")(47,He,5,0),n(48,"tr")(49,"td"),t(50,"Service Type"),i(),n(51,"td"),t(52),i()(),n(53,"tr")(54,"td"),t(55,"Total Distance"),i(),n(56,"td"),t(57),i()(),n(58,"tr")(59,"td"),t(60,"Estimated Time"),i(),n(61,"td"),t(62),i()(),n(63,"tr")(64,"td"),t(65,"Estimated Fare Price"),i(),n(66,"td"),t(67),i()(),_(68,Qe,20,4),i()),o&2){let l=u();d(5),m(": ",l.ride._id,""),d(5),m(": ",l.ride.userDetails._id,""),d(5),g("src",l.backendUrl+"/uploads/allusers/"+l.ride.userDetails.uimage,R),d(5),m(": ",l.ride.userDetails.uname,""),d(5),m(": ",l.ride.userDetails.uemail,""),d(5),m(": ",l.ride.userDetails.uphone,""),d(5),F(": ",l.ride.bookDate," (",l.ride.bookTime,")"),d(5),m(": ",l.ride.fromLocation,""),d(5),m(": ",l.ride.toLocation,""),d(),C(46,l.ride.waypointsLocation.length>0?46:47),d(6),m(": ",l.ride.vehicleDetails.vname,""),d(5),m(": ",l.ride.rideDistance," km"),d(5),m(": ",l.ride.estimatedTime,""),d(5),m(": ",l.ride.estimatedFarePrice,""),d(),C(68,l.ride.driverDetails?68:-1)}}var ot=(()=>{let s=class s{get backendUrl(){return this.mybackendUrl}constructor(e,r,c,a,p,P,se,de,ce){this.socketService=e,this.confirmRideService=r,this.runningRequestService=c,this.toaster=a,this._notificationService=p,this.getDataService=P,this.router=se,this.http=de,this.formBuilder=ce,this.ride=null,this.assignBtn="Assign",this.mybackendUrl=w.backendUrl,this.allStatus=[{_id:0},{_id:1},{_id:3}],this.showpopup=!1,this._notificationService.requestPermission()}ngOnInit(){this.getAllServiceTypes(),this.addNewRide(),this.rejectRide(),this.acceptRide(),this.HoldRide(),this.AssignDriverChrone(),this.noDriverFound(),this.UpdateSpecificRow(),this.updateNearestDriver(),this.updateRidestatus(),this.filterForm=this.formBuilder.group({idandname:[""],bookDate:[""],ridestatus:[""],vehicleid:[""]}),this.getAllRides(this.filterForm.value),console.log("ON socket connection data")}getAllServiceTypes(){this.getDataService.getAllVehicles().subscribe({next:e=>{e.success===!0&&(this.allVehicles=e.data)},error:e=>{},complete:()=>{}})}Clear(){this.filterForm.reset(),this.getAllRides(this.filterForm.value)}onSubmit(){this.getAllRides(this.filterForm.value)}notify(e){let r=[];r.push({title:"Driver not Found",alertContent:"For the Ride "+e}),this._notificationService.generateNotification(r)}AssignDriverChrone(){this.socketService.listen("AssignDriverCrone").subscribe({next:e=>{console.log("AssignDriverCrone-->",e),this.updateButtonname(e._id,e.ridestatus,e.driverDetails)}})}addNewRide(){console.log("ETTESTING Is running----------------------------"),this.socketService.listen("addNewRide").subscribe({next:e=>{console.log(" TEST ME RESPONSE FROM SOCKET RAAJU"),console.log("-->>>",e),this.allRideArray.push(e)}})}findmyIndex(e){return this.allRideArray.findIndex(c=>c._id===e)}updateRidestatus(){this.socketService.listen("updateRideStatus").subscribe({next:e=>{let r=this.findmyIndex(e._id);if(r!==-1)if(e.ridestatus===6||e.ridestatus===7){this.allRideArray.splice(r,1);return}else this.allRideArray[r].ridestatus=e.ridestatus},error:e=>{console.log("acceupdateRideStatus",e)},complete:()=>{}})}AssignDriverCrone(){this.socketService.listen("AssignDriverCrone").subscribe({next:e=>{this.updateButtonname(e._id,e.ridestatus,e.driverDetails)}})}noDriverFound(){this.socketService.listen("NoDriverFound").subscribe({next:e=>{console.log("noDriverFound event",e);let r=e.data;this._notificationService.changeDashboardProperty(e.counter),this.updateButtonname(r._id,r.ridestatus,r.driverDetails)}})}HoldRide(){this.socketService.listen("HoldRide").subscribe({next:e=>{let r=this.findmyIndex(e._id);console.log("HOLD EVENT ",e),this.updateButtonname(e._id,e.ridestatus,e.driverDetails)}})}acceptRide(){this.socketService.listen("acceptRide").subscribe({next:e=>{console.log("UPDATE ride event is called"),this.updateButtonname(e._id,e.ridestatus,e.driverDetails)}})}updateNearestDriver(){this.socketService.listen("crone1").subscribe({next:e=>{console.log("CRONE1111!!",e);let r=e.data[0];this.updateButtonname(r._id,r.ridestatus,r.driverDetails)},error:e=>{console.log("crone1",e)},complete:()=>{}})}NearestDriver(e){this.confirmRideService.assignNearestDriver("/assignNearestDriver",e).subscribe({next:r=>{console.log("AssignNearestDriver rES",r),r.success===!0&&this.toaster.success("NEAREST ASSIGNED","SUCCESS")},error:r=>{console.log("/assignNearestDriver Error",r)},complete:()=>{}}),this.clickCloseButton()}clickCloseButton(){this.closeButton&&(console.log("CLOSE BTN CALLED"),this.showpopup=!1,this.closeButton.nativeElement.click())}AssignMe(e){let r=e,c={rideid:this.ride._id,driverid:e._id};this.confirmRideService.getAssignSpecificDriver("/assignSpecificDriver",c).subscribe({next:a=>{console.log("assignSpecificDriver RES",a),a.success===!0&&this.toaster.success(a.message,"Success")},error:a=>{console.log("Error assignSpecificDriver",a),this.toaster.error("Erro assignSpecificDriver",a)},complete:()=>{}}),this.showpopup=!1}updateButtonname(e,r,c){let a=this.findmyIndex(e);a!==-1&&(console.log("THIs RIDE is ",this.allRideArray[a]),console.log("INDEX",a,"name",r,"driver",c),this.allRideArray[a].ridestatus=r,this.allRideArray[a].driverDetails=c,console.log("ARRAY NEW afterchanged",this.allRideArray[a]))}getNextStatus(e){switch(e){case 0:return"bg-cancel";case 1:return"bg-grey";case 2:return"bg-green";case 3:return"bg-blue";case 4:return"bg-orange";case 5:return"bg-success";default:return"bg-default"}}getBackgroundClass(e){switch(e){case 0:return"bg-yellow";case 1:return"bg-assigning";case 2:return"bg-blue";case 3:return"bg-green";case 4:return"bg-pink";case 5:return"bg-grey";default:return"bg-default"}}UpdateSpecificRow(){this.socketService.listen("getcurrentRunningRequest").subscribe({next:e=>{console.log("11 UpdateSpecificRow() res",e),this.updateButtonname(e._id,e.ridestatus,e.driverDetails),this.clickCloseButton()},error:e=>{console.log("Error getcurrentRunningRequest",e)},complete:()=>{}})}AssignCall(e,r){if(console.log("FFFFFFFFFF",this.allRideArray[r]),this.allRideArray[r].ridestatus!==0){console.log("---------AAAAAAAAAAAA----------------------CLOSE BTN CONDITION IS TRUE-------------------------------");return}else this.showpopup=!0;console.log("AssignCall",e),this.ride=e;let c={city:e.cityid,vehicle:e.vehicleDetails._id};this.confirmRideService.getAllfreeDrivers("/getAllfreeDrivers",c).subscribe({next:a=>{console.log("getAllfreeDrivers RESPONSE",a),a.success===!0?(this.alldetailsofDriver=a.data,this.toaster.success(a.message,"Success")):(this.clickCloseButton(),this.toaster.error(a.message,"Failure"))},error:a=>{console.log("getAllfreeDrivers Error",a)},complete:()=>{}})}compareObjects(e,r){let c=Object.keys(e);for(let a of c)if(e[a]!==r[a])return!1;return!0}getAllRides(e){this.confirmRideService.getAllRides(e).subscribe({next:r=>{if(console.log("getfilteredRides",r),r.success===!0)if(r.data.length>0)this.allRideArray=r.data;else{if(this.filterForm.pristine)return;this.toaster.warning("No Matching Data Found","Warning")}},error:r=>{console.log("getfilteredRides",r)},complete:()=>{}})}InfoModalData(e){this.ride=e}UpdateAction(e,r,c){let a=null;console.log("ridestatus to update->",r);let p="";switch(r){case 0:a="cancel";break;case 3:a="arrive",p=c._id;break;case 4:a="pickup",p=c._id;break;case 5:a="complete",p=c._id;break}if(!(r==0&&!confirm("Are you sure You want to cancel this Ride : "+e))){if(console.log("driver-->>>",p),a===null){console.warn("RETURNED DUE TO INVALID CLICKK------------");return}console.log("CANCEL--->>>>RIDEID",e,"DRIVERID",p,"RESULT",a),this.updateStatus(a,e,p)}}updateStatus(e,r,c){this.runningRequestService.acceptThisRequest("/"+e+"Ride",r,c).subscribe({next:a=>{console.log("COMPLETE PAYMENT REQUEST RES",a),a.success===!0&&a.data?a.data.userPayment.status===2?window.location.replace(a.data?.userPayment.link):a.data?.userPayment.status&&a.data?.driverPayment.status?(this.toaster.success(a.message,"Success"),this.router.navigate(["dashboard/ride-history"])):a.data?.userPayment.status===3?this.toaster.error("Payment Failed To Debit from User","Error"):a.data?.driverPayment.status==3&&this.toaster.error("Payment Failed To Driver","Error"):a.success==!1&&this.toaster.error(a.message,"Error")},error:a=>{console.log("acceptThisRequest Error",a),this.toaster.error("FAILED TO ACCEPT RIDE error","Error")},complete:()=>{}})}rejectRide(){this.socketService.listen("rejectRide").subscribe({next:e=>{let r=this.findmyIndex(e);console.log("rejectRide res-->>>",e),this.updateButtonname(e._id,e.ridestatus,e.driverDetails)}})}};s.\u0275fac=function(r){return new(r||s)(v(re),v(le),v(oe),v(ie),v(ne),v(ae),v($),v(I),v(Z))},s.\u0275cmp=M({type:s,selectors:[["app-confirmed-ride"]],viewQuery:function(r,c){if(r&1&&(k(fe,5),k(_e,5),k(ge,5)),r&2){let a;A(a=T())&&(c.closeButton=a.first),A(a=T())&&(c.assignButton=a.first),A(a=T())&&(c.statusButton=a.first)}},standalone:!0,features:[B],decls:83,vars:3,consts:[["showDriverDetails",""],["closeButton",""],["showRideDetails",""],["statusButton",""],["assignButton",""],[1,"container-fluid"],[1,"card"],[1,"card-body"],[3,"ngSubmit","formGroup"],[1,"row","g-3"],[1,"col-md-6"],["type","text","formControlName","idandname","name","idno","placeholder","Search by request ID, username, or phone number",1,"form-control"],["type","date","formControlName","bookDate","name","fromDate",1,"form-control"],["formControlName","ridestatus","name","status",1,"form-select"],["value","","selected",""],[3,"value"],["formControlName","vehicleid","name","servicetype",1,"form-select"],[1,"d-flex","justify-content-around","gap-3"],["type","submit",1,"btn","btn-success",2,"width","50%"],["type","button",1,"btn","btn-dark",2,"width","50%",3,"click"],[1,"card","mt-2"],[1,"card-body","table-responsive","p-2"],[1,"table","table-striped","table-hover","align-middle","w-100",2,"border-radius","10px","text-align","center"],[1,"table-dark"],[1,"text-center"],[2,"min-width","5rem"],["colspan","2"],[1,"text-align","text-center"],["id","showDriverDetails","tabindex","-1","aria-labelledby","showDriverDetailsLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog","modal-dialog-centered","modal-lg"],[1,"modal-content"],[1,"modal-header"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close","mr-2"],[1,"modal-body","table-responsive"],[1,"table","table-hover","align-middle","w-100"],[1,"modal-footer"],["type","button","data-bs-dismiss","modal",1,"btn","btn-secondary"],["id","showRideDetails","tabindex","-1","aria-labelledby","showRideDetailsLabel","aria-hidden","true",1,"modal","fade"],[1,"table-responsive"],["id","rideinfo",1,"table"],[4,"ngIf"],[1,"btn","bg-secondary","text-white",2,"font-size","14px"],[1,"p-2"],["data-bs-toggle","modal","data-bs-target","#showDriverDetails",1,"btn","btn-primary",3,"click"],[1,""],[1,"btn","fw-bold","text-white",3,"click","ngClass"],["data-bs-toggle","modal","data-bs-target","#showRideDetails",1,"btn","btn-info",3,"click"],[1,"table-light"],["class","text-center",4,"ngFor","ngForOf"],["colspan","7"],[1,"btn","btn-success","w-100",3,"click"],["alt","Driver img",2,"width","50px","height","30px",3,"src"],[1,"btn","btn-primary",3,"click"],["alt","Vehicle Image","width","80","height","80",1,"",2,"border-radius","50%",3,"src"]],template:function(r,c){if(r&1){let a=E();n(0,"div",5)(1,"div",6)(2,"div",7)(3,"form",8),S("ngSubmit",function(){return h(a),x(c.onSubmit())}),n(4,"div",9)(5,"div",10),b(6,"input",11),i(),n(7,"div",10),b(8,"input",12),i(),n(9,"div",10)(10,"select",13)(11,"option",14),t(12,"Ride Status(all)"),i(),y(13,Ce,4,2,"option",15,N),i()(),n(15,"div",10)(16,"select",16)(17,"option",14),t(18,"Service Type(null)"),i(),y(19,be,2,2,"option",15,N),i()(),n(21,"div",17)(22,"button",18),t(23,"Filter"),i(),n(24,"button",19),S("click",function(){return h(a),x(c.Clear())}),t(25,"Clear"),i()()()()()(),n(26,"div",20)(27,"div",21)(28,"table",22)(29,"thead",23)(30,"tr",24)(31,"th"),t(32,"Ride Id"),i(),n(33,"th"),t(34,"User Name"),i(),n(35,"th"),t(36,"Service Type"),i(),n(37,"th",25),t(38,"Pickup Date"),i(),n(39,"th"),t(40,"Pickup Time"),i(),n(41,"th"),t(42,"Pickup Location"),i(),n(43,"th"),t(44,"Dropoff Location"),i(),n(45,"th"),t(46,"Status"),i(),n(47,"th"),t(48,"Assign"),i(),n(49,"th",26),t(50,"Action"),i()()(),n(51,"tbody",27),y(52,Be,42,11,"tr",24,N),i()()()(),n(54,"div",28,0)(56,"div",29)(57,"div",30)(58,"div",31),b(59,"button",32),i(),n(60,"div",33),_(61,je,18,1,"table",34)(62,qe,2,0),i(),n(63,"div",35)(64,"button",36,1),t(66,"Close"),i()()()()(),n(67,"div",37,2)(69,"div",29)(70,"div",30)(71,"div",31),b(72,"button",32),i(),n(73,"div",33)(74,"h2"),t(75,"Ride Details"),i(),n(76,"div",38)(77,"table",39),_(78,Ge,69,16,"tbody",40),i()()(),n(79,"div",35)(80,"button",36,1),t(82,"Close"),i()()()()()()}r&2&&(d(3),g("formGroup",c.filterForm),d(10),D(c.allStatus),d(6),D(c.allVehicles),d(33),D(c.allRideArray),d(9),C(61,c.showpopup?61:62),d(17),g("ngIf",c.ride))},dependencies:[q,V,L,j,ee,z,J,X,H,Y,Q,G,te,W,K],styles:[".showform[_ngcontent-%COMP%]{display:none}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{vertical-align:middle}#rideinfo[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{font-weight:700;width:10rem}.bg-yellow[_ngcontent-%COMP%]{background-color:#cea32c;text-decoration:none}.bg-orange[_ngcontent-%COMP%]{background-color:#ec720f}.bg-green[_ngcontent-%COMP%]{background-color:#41ce41}.bg-blue[_ngcontent-%COMP%]{background-color:#a950ac}.bg-pink[_ngcontent-%COMP%]{background-color:#c53e54}.bg-grey[_ngcontent-%COMP%]{background-color:#02bd02}.bg-cancel[_ngcontent-%COMP%]{background-color:#e94848}.bg-success[_ngcontent-%COMP%]{background-color:#207927}.bg-assigning[_ngcontent-%COMP%]{background-color:#15a508}.button-styling[_ngcontent-%COMP%]{font-size:15px}.name-button-styling[_ngcontent-%COMP%], .none[_ngcontent-%COMP%]{font-size:25px}"]});let o=s;return o})();export{ot as ConfirmedRideComponent};
