/*
 * Copyright (c) 2001-2009, TIBCO Software Inc.
 * Use, modification, and distribution subject to terms of license.
 */
jsx3.Class.defineClass("jsx3.app.Monitor",jsx3.util.Logger.FormatHandler,null,function(f,k){var
ub={a:"jsx:///html/jsx3.app.Monitor.html",b:"jsx3.lang.System",c:"TR",d:"m",e:"namespace",f:"memory",g:"Monitor_",h:"directories=no,location=no,menubar=no,status=yes,personalbar=no,titlebar=yes,toolbar=no,resizable=yes,scrollbars=no,width=500,height=400",i:"function"};var
t=jsx3.app.Server;f._8=false;f.KZ=jsx3.net.URIResolver.DEFAULT.resolveURI(ub.a);f.ideDidLoad=function(){f._8=true;};k.vu=false;k.ZT=true;k.ww=null;k.C9=false;k.mz=null;k.Rv=null;k.init=function(p){this.jsxsuper(p);};k.onAfterInit=function(){if(this.ww!=null){var
ja=null;if(jsx3.Class.forName(ub.b))ja=jsx3.System.getApp(this.ww);if(ja!=null){this.yO(ja);}else t.subscribe(t.INITED,this,ub.c);}else{this.ZT=false;this.C9=false;this.vu=true;this.vs();}};k.yO=function(c){this.vu=true;this.mz=c;if(this.C9){var
nb=this;c.registerHotKey(function(o){nb.zw();},ub.d,false,true,true);}else this.vs();};k.TR=function(r){var
sa=r.target;if(sa.getEnv(ub.e)==this.ww){if(!f._8||!this.ZT)this.yO(sa);t.unsubscribe(t.INITED,this);}};k.handle=function(b){if(this.vu&&(!f._8||!this.ZT)){var
gb=this.Rv;if(gb){if(gb.closed)if(!this.C9)this.vs();try{if(!gb.closed&&gb.appendMessage){if(gb.isFirstTime()){var
_=jsx3.util.Logger.Manager.getManager();var
Sa=_.getHandler(ub.f);if(Sa)(jsx3.$A(Sa.getRecords())).each((jsx3.$F(function(r){if(r!==b)gb.appendMessage(this.format(r),jsx3.util.Logger.levelAsString(r.getLevel()));})).bind(this));}gb.appendMessage(this.format(b),jsx3.util.Logger.levelAsString(b.getLevel()));}}catch(Kb){}}}};k.zw=function(){if(this.Rv==null||this.Rv.closed)this.vs();};k.vs=function(){this.Rv=window.open(f.KZ,ub.g+this.getName(),ub.h);if(this.Rv){if(this.mz)if(typeof this.Rv.setName==ub.i)this.Rv.setName(this.mz.getEnv(ub.e));else this.Rv._jsxname=this.mz.getEnv(ub.e);window.focus();}};k.getDisableInIDE=function(){return this.ZT;};k.setDisableInIDE=function(g){this.ZT=g;};k.getServerNamespace=function(){return this.ww;};k.setServerNamespace=function(n){this.ww=n;};k.getActivateOnHotKey=function(){return this.C9;};k.setActivateOnHotKey=function(p){this.C9=p;};});jsx3.util.Logger.Handler.registerHandlerClass(jsx3.app.Monitor.jsxclass);
