/*
 * Copyright (c) 2001-2009, TIBCO Software Inc.
 * Use, modification, and distribution subject to terms of license.
 */
jsx3.require("jsx3.gui.Block");jsx3.Class.defineClass("jsx3.gui.Window",jsx3.app.Model,null,function(a,n){var
ub={A:"onLoad ",B:"unload",C:"onunload",D:"body",E:"head",F:"link",G:"stylesheet",H:"href",I:"id",J:"rel",K:"type",L:'<span id="',M:'"></span>',N:"jsx3",O:"onFocus ",P:"onBeforeUnload ",Q:"function",R:"object",S:"onResize ",T:"onParentUnload",U:"_JSXROOT",V:"100%",W:"jsxbgcolor",X:"@Solid Light",Y:" ",a:"jsx:///../jsx3.gui.window.html",b:"jsx:///../jsx3.gui.window.xhtml",c:"screenLeft",d:"screenTop",e:"screenX",f:"screenY",g:"open",h:"close",i:"focus",j:"resize",k:"pclose",l:"",m:"gui.win.op",n:".xhtml",o:/\./g,p:"directories=no,location=no,menubar=no,status=yes,personalbar=no,titlebar=yes,toolbar=no,width=",q:",",r:"height=",s:"resizable=",t:"yes",u:"no",v:"scrollbars=",w:"_jsxwindow",x:"about:blank",y:"gui.win.rm",z:"gui.win.cl"};var
Y=jsx3.Exception;var
ca=jsx3.util.Logger;var
Ra=ca.getLogger(a.jsxclass.getName());a.jZ=jsx3.resolveURI(ub.a);a.KG=jsx3.resolveURI(ub.b);if(jsx3.CLASS_LOADER.IE){a.CI=ub.c;a.xO=ub.d;}else{a.CI=ub.e;a.xO=ub.f;}a.DID_OPEN=ub.g;a.WILL_CLOSE=ub.h;a.DID_FOCUS=ub.i;a.DID_RESIZE=ub.j;a.PARENT_DID_CLOSE=ub.k;n.jsxwidth=400;n.jsxheight=300;n.jsxresizable=0;n.jsxscrollable=0;n.jsxdependent=1;n.jsxtitle=ub.l;n._jsxwindow=null;n._jsxpB=null;n.init=function(b){this.jsxsuper(b);};n.open=function(){if(this._jsxwindow!=null&&!this._jsxwindow.closed){throw new
Y(jsx3._msg(ub.m,this));}else{var
R=jsx3.util.strEndsWith(((jsx3.app.Browser.getLocation()).getPath()).toLowerCase(),ub.n)?a.KG:a.jZ;var
tb=window.open(R,(this.getId()).replace(ub.o,ub.l),ub.p+this.getWidth()+ub.q+ub.r+this.getHeight()+ub.q+ub.s+(this.isResizable()?ub.t:ub.u)+ub.q+ub.v+(this.isScrollable()?ub.t:ub.u));if(tb!=null){tb[ub.w]=this;this._jsxwindow=tb;this._jsxpB=window;return true;}else return false;}};n.close=function(){if(this._jsxwindow!=null&&!this._jsxwindow.closed){var
M=this._jsxwindow;M.location=ub.x;var
Fa=this;window.setTimeout(function(){try{M.close();}catch(Kb){var
Jb=jsx3._msg(ub.y,Fa,(jsx3.lang.NativeError.wrap(Kb)).getMessage());Ra.warn(Jb);}},500);return true;}else throw new
Y(jsx3._msg(ub.z,this));};n.doClose=function(){(this.getRootBlock()).removeChildren();try{this.close();}catch(Kb){var
Ib=jsx3._msg(ub.y,this,(jsx3.lang.NativeError.wrap(Kb)).getMessage());Ra.warn(Ib);}if(this.getParent())(this.getParent()).removeChild(this);};n.focus=function(){if(this._jsxwindow!=null&&!this._jsxwindow.closed){this._jsxwindow.focus();}else throw new
Y(jsx3._msg(ub.z,this));};n.isOpen=function(){return this._jsxwindow!=null&&!this._jsxwindow.closed;};n.isParentOpen=function(){return this._jsxpB!=null&&!this._jsxpB.closed;};n.moveTo=function(b,e){if(this._jsxwindow!=null&&!this._jsxwindow.closed){if(this._jsxpB!=null&&!this._jsxpB.closed)this._jsxwindow.moveBy(b-this._jsxwindow[a.CI]+this._jsxpB[a.CI],e-this._jsxwindow[a.xO]+this._jsxpB[a.xO]);else this._jsxwindow.moveBy(b-this._jsxwindow[a.CI],e-this._jsxwindow[a.xO]);}else throw new
Y(jsx3._msg(ub.z,this));};n.constrainToScreen=function(){if(this._jsxwindow!=null&&!this._jsxwindow.closed){var
aa=this._jsxwindow;if(aa[a.CI]<0||aa[a.CI]>window.screen.width||aa[a.xO]<0||aa[a.xO]>window.screen.height)aa.moveTo(0,0);}};n.getOffsetLeft=function(){if(this._jsxwindow!=null&&!this._jsxwindow.closed){if(this._jsxpB!=null&&!this._jsxpB.closed)return this._jsxwindow[a.CI]-this._jsxpB[a.CI];else return this._jsxwindow[a.CI];}else throw new
Y(jsx3._msg(ub.z,this));};n.getOffsetTop=function(){if(this._jsxwindow!=null&&!this._jsxwindow.closed){if(this._jsxpB!=null&&!this._jsxpB.closed)return this._jsxwindow[a.xO]-this._jsxpB[a.xO];else return this._jsxwindow[a.xO];}else throw new
Y(jsx3._msg(ub.z,this));};n.onunload=function(){if(this.isDependent()&&this._jsxwindow&&this._jsxwindow.close)try{this._jsxwindow.close();}catch(Kb){}};n.onLoad=function(g){if(Ra.isLoggable(5))Ra.debug(ub.A+this);jsx3.gui.Event.subscribe(ub.B,this,ub.C);jsx3.gui.Event._registerWindow(g);var
Kb=g.document;var
Ea=g.opener;var
Gb=(Kb.getElementsByTagName(ub.D))[0];var
Xa=(Kb.getElementsByTagName(ub.E))[0];var
xa=(this.getServer()).getRootDocument();var
A=xa.getElementsByTagName(ub.F);for(var
X=0;X<A.length;X++){var
eb=A[X];if(eb.rel==ub.G){var
D=eb.getAttribute(ub.H);var
va=Kb.createElement(ub.F);va.setAttribute(ub.I,eb.getAttribute(ub.I));va.setAttribute(ub.H,D);va.setAttribute(ub.J,eb.getAttribute(ub.J));va.setAttribute(ub.K,eb.getAttribute(ub.K));Xa.appendChild(va);}}Gb.innerHTML=ub.L+(this.getRootBlock()).getId()+ub.M;(this.getRootBlock()).repaint();g[ub.N]=Ea.jsx3;this._jsxwindow=g;this._jsxpB=Ea;this.setTitle(this.getTitle());this.publish({subject:ub.g});};n.onFocus=function(){if(Ra.isLoggable(5))Ra.debug(ub.O+this);this.publish({subject:ub.i});};n.onBeforeUnload=function(){if(Ra.isLoggable(5))Ra.debug(ub.P+this);try{jsx3.gui.Event.unsubscribe(ub.B,this,ub.C);}catch(Kb){}if(jsx3.gui.Event._isWindowRegistered(this._jsxwindow)){jsx3.gui.Event._deregisterWindow(this._jsxwindow);this._jsxwindow.document.onkeydown=null;for(var fa in this._jsxwindow)try{if(typeof this._jsxwindow[fa]==ub.Q||typeof this._jsxwindow[fa]==ub.R)this._jsxwindow[fa]=null;}catch(Kb){}if(this._jsxpB!=null&&!this._jsxpB.closed)this._jsxpB.focus();this._jsxwindow=null;this._jsxpB=null;this.publish({subject:ub.h});}};n.onResize=function(){if(Ra.isLoggable(6))Ra.trace(ub.S+this);this.jsxwidth=this._jsxwindow.document.body.clientWidth;this.jsxheight=this._jsxwindow.document.body.clientHeight;if(this._jsxD3!=null)this._jsxwindow.clearTimeout(this._jsxD3);var
Mb=this;this._jsxD3=this._jsxwindow.setTimeout(function(){Mb._jsxD3=null;jsx3.gui.Painted.Queue.enableChunking(false);(Mb.getRootBlock()).Ul({parentwidth:Mb.getWidth(),parentheight:Mb.getHeight()},true);jsx3.gui.Painted.Queue.enableChunking(true);},250);this.publish({subject:ub.j});};n.onParentUnload=function(){if(Ra.isLoggable(5))Ra.debug(ub.T);this.publish({subject:a.DID_PARENT_CLOSE});};n.getRootBlock=function(){var
Q=this.getChild(0);if(Q==null){Q=new
jsx3.gui.Block(this.getName()+ub.U,0,0,ub.V,ub.V,ub.l);Q.setDynamicProperty(ub.W,ub.X);Q.setRelativePosition(0);Q.setOverflow(2);Q.setIndex(0);this.setChild(Q);}return Q;};n.getWindow=function(){if(this._jsxwindow!=null&&!this._jsxwindow.closed)return this._jsxwindow;return null;};n.getParentWindow=function(){if(this._jsxpB!=null&&!this._jsxpB.closed)return this._jsxpB;return null;};n.getDocument=function(){if(this._jsxwindow!=null&&!this._jsxwindow.closed)return this._jsxwindow.document;return null;};n.ng=function(){return {parentwidth:this.getWidth(),parentheight:this.getHeight()};};n.repaint=function(){return (this.getRootBlock()).repaint();};n.getWidth=function(){return this.jsxwidth;};n.setWidth=function(d){if(this._jsxwindow!=null&&!this._jsxwindow.closed)this._jsxwindow.resizeBy(d-this.jsxwidth,0);this.jsxwidth=d;};n.getHeight=function(){return this.jsxheight;};n.setHeight=function(k){if(this._jsxwindow!=null&&!this._jsxwindow.closed)this._jsxwindow.resizeBy(0,k-this.jsxheight);this.jsxheight=k;};n.isResizable=function(){return this.jsxresizable;};n.setResizable=function(h){this.jsxresizable=jsx3.Boolean.valueOf(h);};n.isScrollable=function(){return this.jsxscrollable;};n.setScrollable=function(h){this.jsxscrollable=jsx3.Boolean.valueOf(h);};n.isDependent=function(){return this.jsxdependent;};n.setDependent=function(m){this.jsxdependent=jsx3.Boolean.valueOf(m);};n.getTitle=function(){return this.jsxtitle;};n.setTitle=function(k){this.jsxtitle=k;if(this._jsxwindow!=null&&!this._jsxwindow.closed)this._jsxwindow.document.title=k;};n.toString=function(m){return this.jsxsuper()+ub.Y+this.getName();};});
