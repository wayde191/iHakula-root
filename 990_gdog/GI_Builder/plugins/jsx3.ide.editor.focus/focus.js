(jsx3.$O(this)).extend({_FOCUS:{wI:"NN",qA:"SS",V4:"EE",tJ:"WW",mp:"MM",By:"nudge",k3:"#000000",Dq:"#1E90FF",cy:"#FF901E",qN:"#999999",rs:2,IF:2,S4:3,eu:6,Yv:4,Io:{37:"W",38:"N",39:"E",40:"S"},d2:0,tT:"S",p9:"0",Er:"0",Cr:null,Bp:null},_getSnapTo:function(){var
fb=jsx3.ide.getIDESettings();if(fb.get("prefs","dom","snapTo")){var
xa=fb.get("prefs","builder","snapto");return xa!=null?Math.max(1,xa):10;}else return 1;},toggleSnapToGrid:function(){var
kb=jsx3.ide.getIDESettings();var
Ta=!kb.get("prefs","dom","snapTo");kb.set("prefs","dom","snapTo",Ta);this.setBindableProp("snapOn",Ta);},toggleFocusRectangle:function(){var
gb=jsx3.ide.getIDESettings();var
qa=gb.get("prefs","dom","showFocus");this.showFocusRectangle(!qa,true,true);},showFocusRectangle:(jsx3.$F(function(e,a,c){var
xb={A:"px;top:",B:'<span id="_ide_SS"',C:'<span id="_ide_BB" unselectable="on" style="position:absolute;left:0px;top:0px;width:',D:"px;border:solid 1px ",E:';z-index:-1;font-size:4px;"></span>',F:'<span id="_ide_MM"',G:' jsxpoint="MM" unselectable="on" style="overflow:hidden;cursor:',H:"move",I:"</span>",J:"W",K:"N",L:"onmousedown",M:"ondblclick",N:"onkeydown",O:"onfocus",P:"onblur",Q:"jsxfocusrectangle_span",a:"jsxfocusrectangle",b:"boolean",c:"prefs",d:"dom",e:"showFocus",f:"rectangleOn",g:"component",h:"jsxtab_componenteditor_main",i:"",j:'<span tabindex="1" id="jsxfocusrectangle_span" style="position:absolute;width:100%;height:100%;left:2px;top:2px;">',k:'<span id="_ide_NN"',l:' jsxon="1"',m:' jsxpoint="',n:'" unselectable="on" style="overflow:hidden;cursor:',o:"N-resize",p:"normal",q:";position:absolute;background-color:",r:";left:",s:"px;top:-1px;width:",t:"px;height:",u:'px;">&#160;</span>',v:'<span id="_ide_WW"',w:"W-resize",x:";left:-1px;top:",y:"px;width:",z:'<span id="_ide_EE"'};var
Z=this._FOCUS;var
Ba=jsx3.gui.Heavyweight.GO(xb.a);if(Ba)Ba.destroy();var
ga=jsx3.ide.getIDESettings();if(typeof e!=xb.b){e=ga.get(xb.c,xb.d,xb.e);}else{c=true;ga.set(xb.c,xb.d,xb.e,e);this.setBindableProp(xb.f,e);}var
da=jsx3.ide.getActiveEditor();if(da==null||!(jsx3.ide.ComponentEditor&&da instanceof jsx3.ide.ComponentEditor&&da.getMode()==xb.g))return;var
db=jsx3.ide.getSelected();if(!e||db.length==0)return;var
qb=(da.getContent()).getDescendantOfName(xb.h);var
eb=qb.getAncestorOfType(jsx3.gui.TabbedPane);qb=qb.getRendered();var
Xa=null,Ja=Number.POSITIVE_INFINITY,_a=Number.NEGATIVE_INFINITY;var
A=Ja,Bb=_a;for(var
na=0;na<db.length;na++){if(!db[na])continue;var
wa=db[na].getMaskProperties();if(Xa==null){Xa=jsx3.clone(wa);}else{var
ib=[Z.wI,Z.qA,Z.V4,Z.tJ,Z.mp];for(var
ea=0;ea<ib.length;ea++)Xa[ib[ea]]=Xa[ib[ea]]&&wa[ib[ea]];}var
la=db[na].getAbsolutePosition(qb);Ja=Math.min(Ja,la.L);A=Math.min(A,la.T);_a=Math.max(_a,la.L+la.W);Bb=Math.max(Bb,la.T+la.H);}if(Xa==null)return;Z.Cr={L:Ja,T:A,W:_a-Ja,H:Bb-A};var
Cb=db.length==1;var
ia=Xa[Z.mp]?Z.Dq:Z.cy;var
Ga=Cb&&Xa[Z.wI]&&Xa[Z.mp]?Z.wI:xb.i;var
bb=Cb&&Xa[Z.qA]?Z.qA:xb.i;var
y=Cb&&Xa[Z.V4]?Z.V4:xb.i;var
B=Cb&&Xa[Z.tJ]&&Xa[Z.mp]?Z.tJ:xb.i;var
P=Xa[Z.mp]?Z.mp:xb.i;var
ja=Math.round((Z.Cr.W-Z.eu)/2);var
Ib=Math.round((Z.Cr.H-Z.eu)/2);var
ub=Z.Cr.W,Eb=Z.Cr.H;if(jsx3.html.getMode()!=jsx3.html.MODE_IE_QUIRKS){ub=ub-2;Eb=Eb-2;}var
Ra=xb.j;Ra=Ra+(xb.k+(Ga?xb.l:xb.i)+xb.m+Ga+xb.n+(Ga?xb.o:xb.p)+xb.q+(Ga?Z.qN:ia)+xb.r+ja+xb.s+Z.eu+xb.t+Z.S4+xb.u);Ra=Ra+(xb.v+(B?xb.l:xb.i)+xb.m+B+xb.n+(B?xb.w:xb.p)+xb.q+(B?Z.qN:ia)+xb.x+Ib+xb.y+Z.S4+xb.t+Z.eu+xb.u);Ra=Ra+(xb.z+(y?xb.l:xb.i)+xb.m+y+xb.n+(y?xb.w:xb.p)+xb.q+(y?Z.qN:ia)+xb.r+(Z.Cr.W-2)+xb.A+Ib+xb.y+Z.S4+xb.t+Z.eu+xb.u);Ra=Ra+(xb.B+(bb?xb.l:xb.i)+xb.m+bb+xb.n+(bb?xb.o:xb.p)+xb.q+(bb?Z.qN:ia)+xb.r+ja+xb.A+(Z.Cr.H-2)+xb.y+Z.eu+xb.t+Z.S4+xb.u);Ra=Ra+(xb.C+ub+xb.t+Eb+xb.D+ia+xb.E);Ra=Ra+(xb.F+(P?xb.l:xb.i)+xb.G+(P?xb.H:xb.p)+xb.q+(P?Z.qN:ia)+xb.r+Math.round((Z.Cr.W-Z.Yv)/2)+xb.A+Math.round((Z.Cr.H-Z.Yv)/2)+xb.y+Z.Yv+xb.t+Z.Yv+xb.u);Ra=Ra+xb.I;var
wb=jsx3.ide.SERVER.getRootBlock();Ba=new
jsx3.gui.Heavyweight(xb.a,eb);Ba.setDomParent(qb);Ba.setHTML(Ra);Ba.setWidth(Z.Cr.W);Ba.setHeight(Z.Cr.H);Ba.addXRule(wb,xb.J,xb.J,Z.Cr.L-2);Ba.addYRule(wb,xb.K,xb.K,Z.Cr.T-2);Ba.show();var
Db=(Ba.getRendered(qb)).firstChild;jsx3.html.addEventListener(Db,xb.L,(jsx3.$F(this._doFocusDown)).bind(this));jsx3.html.addEventListener(Db,xb.M,(jsx3.$F(this.showFocusRectangle)).bind(this,[false,true]));jsx3.html.addEventListener(Db,xb.N,(jsx3.$F(this._doFocusKeyDown)).bind(this,[Db]));jsx3.html.addEventListener(Db,xb.O,(jsx3.$F(this._doFocusFocus)).bind(this,[Db]));jsx3.html.addEventListener(Db,xb.P,(jsx3.$F(this._doFocusBlur)).bind(this,[Db]));jsx3.sleep(function(){var
Da=qb.ownerDocument.getElementById(xb.Q);if(c&&Da&&Da.clientHeight>0){Da.focus();qb.scrollTop=qb.scrollLeft=0;}});})).throttled(),_doFocusKeyDown:function(r,q){var
_=jsx3.gui.Event.wrap(q||window.event);var
xb=_.keyCode();var
x=this._FOCUS.Io[xb];if(x!=null){this._doFocusNudge(_,x);_.cancelAll();}else if(_.ctrlKey()&&!_.shiftKey()&&!_.altKey()&&!_.metaKey())if(xb==jsx3.gui.Event.KEY_BACKSPACE||xb==jsx3.gui.Event.KEY_DELETE)(jsx3.ide.getActiveEditor()).doRecycle();},_doFocusFocus:function(i){var
bb=i.childNodes;for(var
Fb=0;Fb<bb.length;Fb++){var
Lb=bb[Fb];if(Lb.getAttribute("jsxon")=="1")Lb.style.backgroundColor=this._FOCUS.k3;}try{i.parentNode.parentNode.scrollTop=i.parentNode.parentNode.scrollLeft=0;}catch(Kb){}},_doFocusBlur:function(e){var
Qa=e.childNodes;for(var
kb=0;kb<Qa.length;kb++){var
Y=Qa[kb];if(Y.getAttribute("jsxon")=="1")Y.style.backgroundColor=this._FOCUS.qN;}},_doFocusDown:function(p){var
H=this._FOCUS;var
Bb=jsx3.gui.Event.wrap(p||window.event);var
gb=Bb.srcElement();var
Db=gb.ownerDocument.getElementById("jsxfocusrectangle_span");if(Db){Db.focus();try{Db.parentNode.parentNode.scrollTop=Db.parentNode.parentNode.scrollLeft=0;}catch(p){}}var
Qa=jsx3.ide.getSelected();var
zb=gb.getAttribute("jsxpoint");if(zb||zb==H.mp&&Bb.ctrlKey()){H.Bp={L:0,T:0,W:H.Cr.W,H:H.Cr.H};H.tT=zb;H.d2=1;var
qa=this._getSnapTo();if(zb==H.mp){H.p9=jsx3.util.numRound(Number(H.Cr.L),qa)-H.Cr.L;H.Er=jsx3.util.numRound(Number(H.Cr.T),qa)-H.Cr.T;if(jsx3.gui.isMouseEventModKey(Bb)){gb.parentNode.childNodes[4].style.borderStyle="dashed";H.d2=2;}}else{H.p9=jsx3.util.numRound(Number(H.Cr.W),qa)-H.Cr.W;H.Er=jsx3.util.numRound(Number(H.Cr.H),qa)-H.Cr.H;}H.boxStartW=H.Cr.W;H.boxStartH=H.Cr.H;H.eventStartX=Bb.getScreenX();H.eventStartY=Bb.getScreenY();jsx3.gui.Event.subscribe(jsx3.gui.Event.MOUSEMOVE,this,this._doFocusMove);jsx3.gui.Event.subscribe(jsx3.gui.Event.MOUSEUP,this,this._doFocusUp);}else{}},_doFocusMove:function(k){if(this._FOCUS.d2>0){var
P=k.event;var
ca=(P.srcElement()).ownerDocument.getElementById("jsxfocusrectangle_span");var
Xa=this._getSnapTo();var
va=jsx3.util.numRound(P.getScreenX()-this._FOCUS.eventStartX-this._FOCUS.p9,Xa)+this._FOCUS.p9;var
xb=jsx3.util.numRound(P.getScreenY()-this._FOCUS.eventStartY-this._FOCUS.Er,Xa)+this._FOCUS.Er;this._adjustSize(ca,va,xb);}},_doFocusNudge:function(k,r){var
Y=jsx3.gui.Heavyweight.GO("jsxfocusrectangle");if(Y==null)return;var
Nb=jsx3.ide.getSelected();var
La=0,zb=0;switch(r){case "W":La=-1;break;case "N":zb=-1;break;case "E":La=1;break;case "S":zb=1;break;}if(k.shiftKey()){La=La*10;zb=zb*10;}var
Jb=false;for(var
v=0;v<Nb.length;v++){var
N=Nb[v];var
Sa=N.getMaskProperties();if(!Sa[this._FOCUS.mp])continue;if(La){var
nb=N.getLeft();N.setLeft((nb!=null?nb:0)+La,true);Jb=true;}if(zb){var
xa=N.getTop();N.setTop((xa!=null?xa:0)+zb,true);Jb=true;}}if(Jb){this.showFocusRectangle(null,null,true);this.publish({subject:"moved",targets:Nb});}},updateFocusOnModeChange:function(b){var
nb=jsx3.gui.Heavyweight.GO("jsxfocusrectangle");var
za=b.mode;if(za=="component")this.showFocusRectangle(null,false);else if(nb)nb.destroy();},_doFocusUp:function(m,n){jsx3.gui.Event.unsubscribe(jsx3.gui.Event.MOUSEMOVE,this,this._doFocusMove);jsx3.gui.Event.unsubscribe(jsx3.gui.Event.MOUSEUP,this,this._doFocusUp);if(this._FOCUS.d2>0){var
gb=false,Ab=false;var
Qa=jsx3.ide.getSelected();if(this._FOCUS.d2==2){Qa=(jsx3.ide.getActiveEditor()).cloneJSX();jsx3.ide.setDomValue(Qa);}else{if(this._FOCUS.Cr.W!=this._FOCUS.Bp.W){Qa[0].setWidth(this._FOCUS.Bp.W,true);gb=true;}if(this._FOCUS.Cr.H!=this._FOCUS.Bp.H){Qa[0].setHeight(this._FOCUS.Bp.H,true);gb=true;}}for(var
Ba=0;Ba<Qa.length;Ba++){var
Mb=Qa[Ba];if(this._FOCUS.Bp.L!=0){var
Nb=Mb.getLeft();Mb.setLeft((Nb!=null?Nb:0)+this._FOCUS.Bp.L-this._FOCUS.rs,true);Ab=true;}if(this._FOCUS.Bp.T!=0){var
G=Mb.getTop();Mb.setTop((G!=null?G:0)+this._FOCUS.Bp.T-this._FOCUS.IF,true);Ab=true;}}if(Ab)this.showFocusRectangle(null,null,true);if(gb||Ab)this.publish({subject:"moved",targets:Qa});this._FOCUS.d2=0;}},_adjustSize:function(m,j,k){var
ia=this._FOCUS.tT;if(ia==this._FOCUS.mp||ia==this._FOCUS.By){m.style.left=this._FOCUS.Bp.L=j+this._FOCUS.rs;m.style.top=this._FOCUS.Bp.T=k+this._FOCUS.IF;}else{var
rb=null,Ua=null;var
Nb=jsx3.html.getMode()!=jsx3.html.MODE_IE_QUIRKS?-2:0;if(ia==this._FOCUS.tJ||ia==this._FOCUS.wI){rb=Math.max(1,this._FOCUS.boxStartW-j);Ua=Math.max(1,this._FOCUS.boxStartH-k);if(ia==this._FOCUS.tJ)m.style.left=this._FOCUS.Bp.L=j+this._FOCUS.rs;if(ia==this._FOCUS.wI)m.style.top=this._FOCUS.Bp.T=k+this._FOCUS.rs;}else{rb=Math.max(1,this._FOCUS.boxStartW+j);Ua=Math.max(1,this._FOCUS.boxStartH+k);}if(ia==this._FOCUS.V4||ia==this._FOCUS.tJ){var
ra=Math.round((rb-this._FOCUS.eu)/2);m.childNodes[2].style.left=rb-this._FOCUS.rs;m.childNodes[4].style.width=rb+Nb;m.childNodes[0].style.left=ra;m.childNodes[3].style.left=ra;m.childNodes[5].style.left=Math.round((rb-this._FOCUS.Yv)/2);this._FOCUS.Bp.W=rb;}else if(ia==this._FOCUS.qA||ia==this._FOCUS.wI){var
Jb=Math.round((Ua-this._FOCUS.eu)/2);m.childNodes[3].style.top=Ua-this._FOCUS.IF;m.childNodes[4].style.height=Ua+Nb;m.childNodes[1].style.top=Jb;m.childNodes[2].style.top=Jb;m.childNodes[5].style.top=Math.round((Ua-this._FOCUS.Yv)/2);this._FOCUS.Bp.H=Ua;}}}});
