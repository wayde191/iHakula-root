/*
 * Copyright (c) 2001-2009, TIBCO Software Inc.
 * Use, modification, and distribution subject to terms of license.
 */
jsx3.require("jsx3.gui.Block");jsx3.Class.defineClass("jsx3.gui.Stack",jsx3.gui.Block,null,function(g,r){var
ub={A:"none",B:"right",C:"left",D:"text-align:",E:";",F:"5 5 5 5",G:"bold",H:"3.0.00",a:"#aaaafe",b:"#aaaacb",c:"#ffffff",d:"solid 1px #ffffff;solid 1px #9898a5;solid 1px #9898a5;solid 1px #ffffff",e:"solid 1px #c8c8d5;solid 1px #9898a5;solid 1px #9898a5;solid 1px #c8c8d5",f:"_content",g:"100%",h:"JSXFRAG",i:"jsxexecute",j:"jsxshow",k:"click",l:"BK",m:"keypress",n:"mouseover",o:"mouseout",p:"box",q:"div",r:"0 0 0 4",s:"",t:'id="',u:'"',v:' class="',w:"overflow:hidden;",x:' class="jsx30stack_handle"',y:"jsx30stack_textv",z:"jsx30stack_texth"};var
Ja=jsx3.gui;var
ua=Ja.Event;var
Y=Ja.Block;g.ORIENTATIONV=0;g.ORIENTATIONH=1;g.ACTIVECOLOR=ub.a;g.INACTIVECOLOR=ub.b;g.CHILDBGCOLOR=ub.c;g.BORDER=ub.d;g.CAPTION_BORDER=ub.e;g.BACKGROUND=jsx3.html.getCSSFade(false);g.BACKGROUNDH=jsx3.html.getCSSFade(true);r.init=function(j,f){this.jsxsuper(j,null,null,null,null,f);var
ea=new
Y(j+ub.f,0,0,ub.g,ub.g);ea.setOverflow(1);ea.setBorder(g.BORDER);ea.setBackgroundColor(g.CHILDBGCOLOR);this.setChild(ea,1,null,ub.h);};r.onSetParent=function(e){return Ja.StackGroup&&e instanceof Ja.StackGroup;};r.doShowStack=function(){this.BK(this.isOldEventProtocol());};r.doShow=function(){this.BK(false);};r.BK=function(k,b){var
Da=this.getParent();if(k instanceof ua){var
D=jsx3.html.getJSXParent(k.srcElement());if(D!=null&&D!=this)return;}if(this==Da.getChild(Da.getSelectedIndex()))return;Da.setSelectedIndex(this.getChildIndex());var
hb=Da.Wl();Da.Ul({left:0,top:0,parentwidth:hb.getOffsetWidth(),parentheight:hb.getOffsetHeight()},true);if(k)this.doEvent(ub.i,{objEVENT:k instanceof ua?k:null});this.doEvent(ub.j,{_gipp:1});if(b)jsx3.html.focus(b);};r.Pe=function(m,s){s.style.backgroundColor=this.getActiveColor();return;if(jsx3.EventHelp.isDragging())this.BK(m);var
lb=jsx3.html.getCSSOpacity(0.75);Ja.Painted.He(s,lb);};r.nk=function(q,o){o.style.backgroundColor=this.getInactiveColor();return;var
ib=jsx3.html.getCSSOpacity(1);Ja.Painted.He(o,ib);};r.getContentChild=function(){var
Kb=(this.getChildren()).length;for(var
Wa=0;Wa<Kb;Wa++){var
E=this.getChild(Wa);if(!(Ja.Menu&&E instanceof Ja.Menu)&&!(Ja.ToolbarButton&&E instanceof Ja.ToolbarButton))return E;}return null;};r._ebKeyDown=function(l,a){if(this.jsxsupermix(l,a))return;if(l.enterKey()||l.spaceKey()){this.BK(l);l.cancelAll();}};g.ld={};g.ld[ub.k]=ub.l;g.ld[ub.m]=true;g.ld[ub.n]=true;g.ld[ub.o]=true;r.ng=function(n){var
Ca=this.Gi(0);if(Ca)return Ca;var
tb={};if(this.getParent()){var
Lb=(this.getParent()).ng(this);var
eb=(this.getParent()).paintBarSize();var
qa=0,ba=0,z=Lb.parentwidth,Ta=Lb.parentheight;if(this.getOrientation()==0){ba=eb;Ta=Ta-eb;}else{qa=eb;z=z-eb;}tb={boxtype:ub.p,left:qa,top:ba,width:z,height:Ta,parentwidth:z,parentheight:Ta};}return this.Ck(0,tb);};r.gi=function(h,e,j){var
Kb=this.Wl(true,h);if(e){var
V=Kb.recalculate(h,e,j);if(!V.w&&!V.h)return;var
eb=(this.getParent()).paintBarSize();var
Ta=Kb.Sh();var
_=Kb.Zg();var
hb={};if(this.getOrientation()==0){hb.height=eb;hb.parentwidth=h.parentwidth;}else{hb.width=eb;hb.parentheight=h.parentheight;}var
G=Kb.lg(0);G.recalculate(hb,e?e.childNodes[0]:null,j);var
t=this.getContentChild();if(t!=null){t=this.Xr(t,this.isFront());if(this.isFront()){var
Mb=this.getOrientation()==0?{boxtype:ub.p,left:0,top:eb,width:Ta,height:_-eb,parentwidth:Ta,parentheight:_-eb}:{boxtype:ub.p,left:eb,top:0,width:Ta-eb,height:_,parentwidth:Ta-eb,parentheight:_};j.add(t,Mb,t.getRendered(e),true);}}}};r.Jm=function(k){if(this.getParent()&&(k==null||isNaN(k.parentwidth)||isNaN(k.parentheight))){k=(this.getParent()).ng(this);}else if(k==null)k={};k.width=ub.g;k.height=ub.g;k.tagname=ub.q;k.boxtype=ub.p;var
Q=new
Ja.Painted.Box(k);var
Ia=(this.getParent()).paintBarSize();var
_={};_.parentwidth=Q.Sh();_.parentheight=Q.Zg();if(this.getOrientation()==0){_.width=ub.g;_.height=Ia;}else{_.width=Ia;_.height=ub.g;}_.left=0;_.top=0;_.tagname=ub.q;_.boxtype=ub.p;_.border=g.CAPTION_BORDER;_.padding=ub.r;var
nb=new
Ja.Painted.Box(_);Q.Td(nb);_={};_.tagname=ub.q;_.boxtype=ub.p;_.left=0;_.top=0;_.padding=this.getPadding();var
na=new
Ja.Painted.Box(_);nb.Td(na);return Q;};r.paint=function(){if(!(this.getParent() instanceof Ja.StackGroup))return ub.s;this.applyDynamicProperties();var
Ca=this.Wl(true);Ca.setAttributes(ub.t+this.getId()+ub.u+this.Wb()+ub.v+this.dd()+ub.u);Ca.setStyles(ub.w);var
Ea=this.Bf(g.ld,1);var
eb=this.renderAttributes(null,true);var
ca=Ca.lg(0);ca.setAttributes(this.md()+this.Do()+Ea+eb+ub.x);ca.setStyles(this.Uc()+this.ti()+this.Kh()+this.Gd()+this.Di()+this.We()+this.Ak()+this.Vg());var
M=this.getChildren();var
L=[],F=[];for(var
w=0;w<M.length;w++)if(Ja.Menu&&M[w] instanceof Ja.Menu||Ja.ToolbarButton&&M[w] instanceof Ja.ToolbarButton){F.push(M[w]);}else if(L.length==0){M[w]=this.Xr(M[w],this.isFront());L.push(M[w]);}var
Gb=this.paintChildren(F);var
va=this.paintChildren(L);var
Nb=ca.lg(0);var
E=this.getOrientation()==0?ub.y:ub.z;Nb.setAttributes(ub.v+E+ub.u+jsx3.html.pe);var
H=(Nb.paint()).join(this.ii());return (Ca.paint()).join((ca.paint()).join(H+Gb)+va);};r.Xr=function(c,j){var
Sa=c.Dk(j);c=Sa||c;if(c instanceof Y){c.setDisplay(j?ub.s:ub.A,true);c.setVisibility();}return c;};r.Ak=function(){var
gb;if(this.getTextAlign()){gb=this.getTextAlign();}else if(this.getParent()&&this.getOrientation()==0){gb=ub.B;}else gb=ub.C;return ub.D+gb+ub.E;};r.setText=function(p,q){this.jsxsuper(p,false);var
F;if(q&&(F=this.getRendered())!=null)F.firstChild.firstChild.innerHTML=p;return this;};r.getPadding=function(){var
jb=this.jsxsuper();return jb!=null&&jb!=ub.s?jb:ub.F;};r.getFontWeight=function(){return this.jsxsuper()||ub.G;};r.ti=function(){return (this.getBackground()?this.getBackground():this.getOrientation()==1?g.BACKGROUNDH:g.BACKGROUND)+ub.E;};r.md=function(){return this.jsxsuper(this.getIndex()||Number(0));};r.getActiveColor=function(){return this.jsxactivecolor==null?g.ACTIVECOLOR:this.jsxactivecolor;};r.setActiveColor=function(k){this.jsxactivecolor=k;return this;};r.getInactiveColor=function(){return this.jsxinactivecolor==null?g.INACTIVECOLOR:this.jsxinactivecolor;};r.setInactiveColor=function(n){this.jsxinactivecolor=n;return this;};r.getOrientation=function(){return this.getParent()!=null?(this.getParent()).getOrientation():0;};r.focus=function(){this.doShow();this.jsxsuper();};r.isFront=function(){var
C=this.getChildIndex();return C>=0&&(this.getParent()).getSelectedIndex()==C;};r.getMaskProperties=function(){return Y.MASK_NO_EDIT;};g.getVersion=function(){return ub.H;};r.qd=function(f){var
mb=this.getContentChild();if(mb)mb.qd(f);this.jsxsuper(f);};});jsx3.gui.Stack.prototype.getBackgroundColor=jsx3.gui.Stack.prototype.getInactiveColor;jsx3.gui.Stack.prototype.setBackgroundColor=jsx3.gui.Stack.prototype.setInactiveColor;jsx3.Stack=jsx3.gui.Stack;
