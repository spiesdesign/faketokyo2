/*1355440395,173217057*/

if (self.CavalryLogger) { CavalryLogger.start_js(["nNFvm"]); }

__d("Event",["event-form-bubbling","DataStore","DOMQuery","DOMEvent","ErrorUtils","Parent","UserAgent","$","copyProperties","getObjectValues"],function(a,b,c,d,e,f){b('event-form-bubbling');var g=b('DataStore'),h=b('DOMQuery'),i=b('DOMEvent'),j=b('ErrorUtils'),k=b('Parent'),l=b('UserAgent'),m=b('$'),n=b('copyProperties'),o=b('getObjectValues'),p=a.Event;if(!p.$E){p.DATASTORE_KEY='Event.listeners';if(!p.prototype)p.prototype={};function q(z,aa,ba){this.target=z;this.type=aa;this.data=ba;}n(q.prototype,{getData:function(){this.data=this.data||{};return this.data;},stop:function(){new i(this).stopPropagation();return this;},prevent:function(){new i(this).preventDefault();return this;},kill:function(){this.stop().prevent();return false;},getTarget:function(){return new i(this).target||null;}});function r(z){if(z instanceof q)return z;if(!z)if(!window.addEventListener&&document.createEventObject){z=window.event?document.createEventObject(window.event):{};}else z={};if(!z._inherits_from_prototype)for(var aa in p.prototype)try{z[aa]=p.prototype[aa];}catch(ba){}return z;}n(p.prototype,{_inherits_from_prototype:true,getRelatedTarget:function(){var z=this.relatedTarget||(this.fromElement===this.srcElement?this.toElement:this.fromElement);return z?m(z):null;},getModifiers:function(){var z={control:!!this.ctrlKey,shift:!!this.shiftKey,alt:!!this.altKey,meta:!!this.metaKey};z.access=l.osx()?z.control:z.alt;z.any=z.control||z.shift||z.alt||z.meta;return z;},isRightClick:function(){if(this.which)return this.which===3;return this.button&&this.button===2;},isMiddleClick:function(){if(this.which)return this.which===2;return this.button&&this.button===4;},isDefaultRequested:function(){return this.getModifiers().any||this.isMiddleClick()||this.isRightClick();}});n(p.prototype,q.prototype);n(p,{listen:function(z,aa,ba,ca){if(typeof z=='string')z=m(z);if(typeof ca=='undefined')ca=p.Priority.NORMAL;if(typeof aa=='object'){var da={};for(var ea in aa)da[ea]=p.listen(z,ea,aa[ea],ca);return da;}if(aa.match(/^on/i))throw new TypeError("Bad event name `"+aa+"': use `click', not `onclick'.");if(z.nodeName=='LABEL'&&aa=='click'){var fa=z.getElementsByTagName('input');z=fa.length==1?fa[0]:z;}else if(z===window&&aa==='scroll'){var ga=h.getDocumentScrollElement();if(ga!==document.documentElement&&ga!==document.body)z=ga;}var ha=g.get(z,t,{});if(v[aa]){var ia=v[aa];aa=ia.base;if(ia.wrap)ba=ia.wrap(ba);}w(z,aa);var ja=ha[aa];if(!(ca in ja))ja[ca]=[];var ka=ja[ca].length,la=new y(ba,ja[ca],ka);ja[ca].push(la);return la;},stop:function(z){new i(z).stopPropagation();return z;},prevent:function(z){new i(z).preventDefault();return z;},kill:function(z){new i(z).kill();return false;},getKeyCode:function(event){event=new i(event).event;if(!event)return false;switch(event.keyCode){case 63232:return 38;case 63233:return 40;case 63234:return 37;case 63235:return 39;case 63272:case 63273:case 63275:return null;case 63276:return 33;case 63277:return 34;}if(event.shiftKey)switch(event.keyCode){case 33:case 34:case 37:case 38:case 39:case 40:return null;}return event.keyCode;},getPriorities:function(){if(!s){var z=o(p.Priority);z.sort(function(aa,ba){return aa-ba;});s=z;}return s;},fire:function(z,aa,ba){var ca=new q(z,aa,ba),da;do{var ea=p.__getHandler(z,aa);if(ea)da=ea(ca);z=z.parentNode;}while(z&&da!==false&&!ca.cancelBubble);return da!==false;},__fire:function(z,aa,event){var ba=p.__getHandler(z,aa);if(ba)return ba(r(event));},__getHandler:function(z,aa){return g.get(z,p.DATASTORE_KEY+aa);},getPosition:function(z){z=new i(z).event;var aa=h.getDocumentScrollElement(),ba=z.clientX+aa.scrollLeft,ca=z.clientY+aa.scrollTop;return {x:ba,y:ca};}});var s=null,t=p.DATASTORE_KEY,u=function(z){return function(aa){if(!h.contains(this,aa.getRelatedTarget()))return z.call(this,aa);};},v;if(!window.navigator.msPointerEnabled){v={mouseenter:{base:'mouseover',wrap:u},mouseleave:{base:'mouseout',wrap:u}};}else v={mousedown:{base:'MSPointerDown'},mousemove:{base:'MSPointerMove'},mouseup:{base:'MSPointerUp'},mouseover:{base:'MSPointerOver'},mouseout:{base:'MSPointerOut'},mouseenter:{base:'MSPointerOver',wrap:u},mouseleave:{base:'MSPointerOut',wrap:u}};var w=function(z,aa){var ba='on'+aa,ca=x.bind(z),da=g.get(z,t);if(aa in da)return;da[aa]={};if(z.addEventListener){z.addEventListener(aa,ca,false);}else if(z.attachEvent)z.attachEvent(ba,ca);g.set(z,t+aa,ca);if(z[ba]){var ea=z===document.documentElement?p.Priority._BUBBLE:p.Priority.TRADITIONAL,fa=z[ba];z[ba]=null;p.listen(z,aa,fa,ea);}if(z.nodeName==='FORM'&&aa==='submit')p.listen(z,aa,p.__bubbleSubmit.curry(z),p.Priority._BUBBLE);},x=j.guard(function(event){event=r(event);var z=event.type;if(!g.get(this,t))throw new Error("Bad listenHandler context.");var aa=g.get(this,t)[z];if(!aa)throw new Error("No registered handlers for `"+z+"'.");if(z=='click'){var ba=k.byTag(event.getTarget(),'a');if(window.userAction){var ca=window.userAction('evt_ext',ba,event,{mode:'DEDUP'}).uai_fallback('click');if(window.ArbiterMonitor)window.ArbiterMonitor.initUA(ca,[ba]);}if(window.clickRefAction)window.clickRefAction('click',ba,event);}var da=p.getPriorities();for(var ea=0;ea<da.length;ea++){var fa=da[ea];if(fa in aa){var ga=aa[fa];for(var ha=0;ha<ga.length;ha++){if(!ga[ha])continue;var ia=ga[ha].fire(this,event);if(ia===false){return event.kill();}else if(event.cancelBubble)event.stop();}}}return event.returnValue;});p.Priority={URGENT:-20,TRADITIONAL:-10,NORMAL:0,_BUBBLE:1000};function y(z,aa,ba){this._handler=z;this._container=aa;this._index=ba;}n(y.prototype,{remove:function(){delete this._handler;delete this._container[this._index];},fire:function(z,event){return j.applyWithGuard(this._handler,z,[event],function(aa){aa.event_type=event.type;aa.dom_element=z.name||z.id;aa.category='eventhandler';});}});a.$E=p.$E=r;}e.exports=p;});