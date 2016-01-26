jsx3.Class.defineClass("jsx3.amp.util.MenuManager",null,null,function(n,o){var
ub={a:"No menu bar or parent menu for menu: ",b:"/",c:"Invalid menu path for action: "};var
w=jsx3.amp;var
ob=jsx3.util.Logger.getLogger(n.jsxclass.getName());o.init=function(){this.iA={};this.mA={};};o.addMenuBar=function(q,f){this.iA[q]=f;};o.getMenu=function(g){return this.mA[g];};o.getMenus=function(){var
ea=jsx3.$A();for(var O in this.mA)ea.push(this.mA[O]);return ea;};o.finishInit=function(){for(var ka in this.mA){var
Mb=this.mA[ka];var
Ib=this.iA[Mb.getPath()];if(Ib){Ib.setChild(Mb.getNativeMenu());(Mb.getNativeMenu()).setSourceXML(Mb.getXML());Ib.paintChild(Mb.getNativeMenu());}}};o.addMenu=function(m){var
Ta=this.iA[m.getPath()];var
Ya=this.Fq(m.getPath());if(Ta){}else{var
ta=this.mA[Ya[0]];if(ta){ta.addItem(m,Ya[1]);}else ob.warn(ub.a+Ya[0]);}var
lb=Ya[0]+m.getId()+ub.b;this.mA[lb]=m;};o.addItem=function(g){var
aa=this.Fq(g.getPath());var
u=this.mA[aa[0]];if(u){u.addItem(g,aa[1]);}else ob.warn(ub.c+aa[0]);};o.Fq=function(m){var
Ha=m.split(ub.b);var
E=Ha[Ha.length-1];var
Na=(Ha.slice(0,Ha.length-1)).join(ub.b)+ub.b;return [Na,E];};});jsx3.Class.defineClass("jsx3.amp.util.MenuItem",null,null,function(p,c){var
ub={a:".",b:"id",c:"label",d:"img",e:"tip",f:"menupath",g:"/",h:"execute",i:"enabled",j:"with(this){",k:"}",l:"selected",m:"hotkey"};var
za=jsx3.amp;c.init=function(d,a){this.DI=d;this.C6=a;};c.attr=function(m){return this.C6.attr(m);};c.getId=function(){return this.DI.getId()+ub.a+this.attr(ub.b);};c.getLabel=function(){return this.attr(ub.c);};c.getImg=function(){var
B=this.attr(ub.d);return B?jsx3.net.URIResolver.JSX.relativizeURI((this.DI.getPlugIn()).resolveURI(B)):null;};c.getTip=function(){return this.attr(ub.e);};c.getPath=function(){return this.attr(ub.f);};c.M2=function(){var
F=this.getPath();if(F.lastIndexOf(ub.g)!=F.length-1)F=F+ub.g;return F+this.getId();};c.execute=function(){var
Qa=this.attr(ub.h);if(Qa){var
Na=(this.getRootMenu()).getNativeMenu();((this.DI.getPlugIn()).load()).when((jsx3.$F(function(){try{this.eval(Qa,{menu:Na});}catch(Kb){za.LOG.error(jsx3.NativeError.wrap(Kb));}})).bind(this.DI));}};c.toString=function(){return this.getId();};c.isEnabled=function(){var
oa=this.C6.attr(ub.i);if(oa&&za.PlugIn.isBindExpr(oa))return Boolean((this.DI.getPlugIn()).eval(ub.j+oa.substring(1,oa.length-1)+ub.k));return true;};c.isSelected=function(){var
Ra=this.C6.attr(ub.l);if(Ra&&za.PlugIn.isBindExpr(Ra))return Boolean((this.DI.getPlugIn()).eval(ub.j+Ra.substring(1,Ra.length-1)+ub.k));return false;};c.getHotKey=function(){return this.attr(ub.m);};c.getMenu=function(){return this._parent;};c.getRootMenu=function(){var
Ab=this;while(Ab._parent)Ab=Ab._parent;return Ab;};c.getExt=function(){return this.DI;};});jsx3.Class.defineClass("jsx3.amp.util.Menu",jsx3.amp.util.MenuItem,null,function(f,h){var
ub={a:"jsx3.amp.util.MenuManager",b:"divider",c:"id",d:"section",e:"jsxroot",f:"//*[@jsxid='",g:"']",h:"jsxid",i:"1",j:"0",k:"record",l:"record | record/record",m:"Error: no item with ID ",n:"path",o:"jsx3.gui.Menu",p:"1;",q:"Vq",r:"IK",s:"jsxdisableescape",t:"yes",u:""};var
Lb=jsx3.amp;var
ab=jsx3.util.Logger.getLogger(ub.a);h.init=function(p,o){this.jsxsuper(p,o);this.cM=[];this.YX={};this.Ez={};(o.children()).each((jsx3.$F(function(i){if(i.nname()==ub.b)this.addSection(i.attr(ub.c),true);else if(i.nname()==ub.d)this.addSection(i.attr(ub.c),false);})).bind(this));};h.getItem=function(m){var
yb=this.Ez[m];if(!yb)for(var H in this.Ez)if(this.Ez[H] instanceof f){yb=this.Ez[H].getItem(m);if(yb)break;}return yb;};h.Vq=function(i){var
G=i.context.strPARENTID;if(G==null)G=ub.e;var
I=this._menu.getXML();var
Wa=I.selectSingleNode(ub.f+G+ub.g);if(!Wa)Wa=I;var
y=null,Ha=Wa;while(!y){y=this.getItem(Ha.getAttribute(ub.h));Ha=Ha.getParent();if(Ha==null)y=this;}y.onShow(this._menu,Wa);};h.getXML=function(){var
Fb=jsx3.xml.CDF.Document.newDocument();for(var
u=0;u<this.cM.length;u++){var
t=this.cM[u];for(var
Ta=0;Ta<t._items.length;Ta++){var
N=t._items[Ta];var
ka=Fb.insertRecord({jsxid:N.getId(),jsxtext:N.getLabel(),jsximg:N.getImg(),jsxtip:N.getTip(),jsxkeycode:N.getHotKey(),jsxdivider:Ta==0&&t._divider?ub.i:ub.j});if(N instanceof f){var
la=N.getXML();for(var
ra=la.selectNodeIterator(ub.k);ra.hasNext();)ka.appendChild((ra.next()).cloneNode(true));}}}return Fb;};h.onShow=function(j,o){for(var
wa=o.selectNodeIterator(ub.l);wa.hasNext();){var
pb=(wa.next()).getAttribute(ub.h);if(pb){var
kb=this.Ez[pb];if(kb){j.enableItem(pb,kb.isEnabled());j.selectItem(pb,kb.isSelected());}else{kb=this.getItem(pb);if(kb)j.enableItem(pb,kb.isEnabled());else ab.warn(ub.m+pb);}}}};h.IK=function(e){var
eb=e.context.strRECORDID;var
oa=this.getItem(eb);if(oa)oa.execute();};h.getId=function(){return this.attr(ub.c);};h.getPath=function(){return this.attr(ub.n);};h.getNativeMenu=function(){if(this._menu==null){jsx3.require(ub.o);this._menu=new
jsx3.gui.Menu(this.getId(),this.getLabel());this._menu.setEvent(ub.p,jsx3.gui.Interactive.MENU);this._menu.subscribe(jsx3.gui.Interactive.MENU,this,ub.q);this._menu.subscribe(jsx3.gui.Interactive.EXECUTE,this,ub.r);this._menu.setXSLParam(ub.s,ub.t);}return this._menu;};h.addSection=function(j,l){var
Kb={_id:j,_divider:l,_items:[]};this.cM.push(Kb);this.YX[j]=Kb;};h.addItem=function(k,s){var
T=this.YX[s]||this.YX[ub.u];if(!T){this.addSection(ub.u,false);T=this.YX[ub.u];}this.Ez[k.getId()]=k;T._items.push(k);k._parent=this;};h.getItems=function(){var
Ja=jsx3.$A();for(var
Fa=0;Fa<this.cM.length;Fa++){var
Pa=this.cM[Fa];for(var
Ua=0;Ua<Pa._items.length;Ua++)Ja.push(Pa._items[Ua]);}return Ja;};});
