jsx3.Class.defineClass("jsx3.ide.recorder.Editor",jsx3.ide.Editor,null,function(f,j){var
ub={A:"target",B:"_",C:"jsx3.gui.Event",D:":",E:":new Date('",F:"')",G:"jsx3.app.Model",H:"JSX(",I:"jsx3.xml.Entity",J:"XML(",K:":0x",L:"{",M:", ",N:"}",a:"editor",b:"jsxid",c:"recorder.html",d:"gipprecorder",e:"gippeditor",f:"A pop-up blocker prevented the recorder from opening.",g:"Stop Recorder",h:"Launch Recorder",i:"",j:"jsxuser:///",k:/^[a-zA-Z_]\w*$/,l:" ",m:"#",n:" > :nth(",o:")",p:"jsxwait_",q:"jsxassert_",r:"selected",s:"checked",t:"state",u:"front",v:"value",w:"number",x:"boolean",y:"exists",z:"function"};var
ib=jsx3.gui;var
B=function(){return jsx3.IDE.RecorderEditorPlugin;};j.render=function(q){var
Ea=((B()).getResource(ub.a)).getData();return q.loadXML(Ea,false,B());};j.onBeforeClose=function(){if(this._running)this.onToggleLaunch();};j.onToggleLaunch=function(){if(this._running){if(this._recorder){this._recorder.close();this._recorder=null;this._running=false;}}else{var
A=this.Bk();if((A.getValue()).length==0){var
E=(A.getXML()).getLastChild();if(E)A.setValue([E.getAttribute(ub.b)]);}var
hb=window.open(((B()).resolveURI(ub.c)).toString(),ub.d);if(hb){hb[ub.e]=this;this._recorder=hb;}else ((B()).getServer()).alert(null,ub.f);}};j.onRecorderLaunched=function(){this._running=true;((this.getContent()).getLaunchBtn()).setText(ub.g,true);};j.onRecorderStopped=function(){if(this.isAlive()){this._running=false;this._recorder=null;((this.getContent()).getLaunchBtn()).setText(ub.h,true);}};j.onInsertRecord=function(b){var
E=this.Bk();var
ta=E.getValue();ta=ta[ta.length-1];E.endEditSession();if(!b)b={jsxid:jsx3.xml.CDF.getKey(),label:ub.i,target:ub.i,action:ub.i,value:ub.i};else if(!b.jsxid)b.jsxid=jsx3.xml.CDF.getKey();if(ta){var
J=(E.getRecordNode(ta)).getNextSibling();if(J)E.insertRecordBefore(b,J.getAttribute(ub.b));else E.insertRecord(b);}else{var
Ja=((E.getXML()).getChildIterator()).next();if(Ja)E.insertRecordBefore(b,Ja.getAttribute(ub.b));else E.insertRecord(b);}E.setValue(b.jsxid);this.setDirty(true);};j.onDeleteRecord=function(l){(this.Bk()).deleteRecord(l);this.setDirty(true);};j.onReorder=function(){this.setDirty(true);return true;};j.Bk=function(){return (this.getContent()).getGrid();};j.getJsxSrc=function(){return (((B()).resolveURI(ub.c)).relativize(jsx3.resolveURI(jsx3.MAIN_SCRIPT))).toString();};j.getJsxAppPath=function(){return (((B()).resolveURI(ub.c)).relativize(jsx3.resolveURI(ub.j+jsx3.ide.PROJECT.getPathFromHome()))).toString();};j.onModelEvent=function(r,o,h,a){if(a||h&&h._gipp){this.onInsertRecord({label:ub.i,target:this.vf(r),action:this.kL(o,h),value:this.oV(o,h)});this.setDirty(true);}};j.onAssert=function(p,m){var
cb=this.Bk();cb.endEditSession();var
u=this.bN(p,m);this.onInsertRecord({label:ub.i,target:this.vf(p),action:u[0],value:u[1]});this.setDirty(true);};j.vf=function(r){var
N=(r.getServer()).getDOM();var
I=ub.i;var
Ra=ub.k;while(r){var
qb=r.getParent();var
G=r.getName();var
Na=N.getAllByName(G);if(I)I=ub.l+I;if((Na.length==1||!qb)&&Ra.test(G)){I=ub.m+G+I;break;}else if((qb.findDescendants(function(g){return g.getName()==G;},false,true)).length==1&&Ra.test(G)){I=ub.m+G+I;}else I=ub.n+r.getChildIndex()+ub.o+I;r=r.getParent();}return I;};j.bN=function(n,o){var
M=o?ub.p:ub.q;var
ra,qb=null;if(f._T(n.getSelected)){ra=ub.r;qb=jsx3.$O.json(n.getSelected());}else if(f._T(n.getChecked)){ra=ub.s;qb=jsx3.$O.json(n.getChecked());}else if(f._T(n.getState)){ra=ub.t;qb=jsx3.$O.json(n.getState());}else if(f._T(n.isFront)){ra=ub.u;qb=jsx3.$O.json(n.isFront());}else if(f._T(n.getValue)){ra=ub.v;qb=n.getValue();if(typeof qb!=ub.w&&typeof qb!=ub.x&&qb!==null)qb=jsx3.$O.json(qb?qb.toString():qb);}else ra=ub.y;return [M+ra,qb];};f._T=function(p){return typeof p==ub.z||p&&p.apply&&p.call;};j.kL=function(r,e){return r;};j.oV=function(p,g){var
Ha=[];for(var oa in g){if(oa==ub.A||oa.indexOf(ub.B)==0)continue;var
w=g[oa];if(this.qV(w,ub.C)){var
hb={type:w.getType()};if(w.keyCode())hb.keyCode=w.keyCode();if(w.altKey())hb.altKey=true;if(w.shiftKey())hb.shiftKey=true;if(w.ctrlKey())hb.ctrlKey=true;if(w.metaKey())hb.metaKey=true;Ha.push(oa+ub.D+jsx3.$O.json(hb));}else if(w&&w.getUTCDate){Ha.push(oa+ub.E+w.toString()+ub.F);}else if(this.qV(w,ub.G)){Ha.push(oa+ub.D+jsx3.$O.json(ub.H+this.vf(w)+ub.o));}else if(this.qV(w,ub.I)){Ha.push(oa+ub.D+jsx3.$O.json(ub.J+w.toString()+ub.o));}else if(typeof w==ub.w&&w>=4095){Ha.push(oa+ub.K+(w.toString(16)).toUpperCase());}else if(w&&w.ownerDocument){}else Ha.push(oa+ub.D+jsx3.$O.json(w));}return ub.L+Ha.join(ub.M)+ub.N;};j.qV=function(c,s){if(c&&c.getClass){var
F=c.getClass();while(F){if(F.getName()==s)return true;var
eb=F.getInterfaces();for(var
ab=0;ab<eb.length;ab++)if(eb[ab].getName()==s)return true;F=F.getSuperClass();}}return false;};j.isAlive=function(){try{var
xa=this.getContent();return xa&&xa.getRendered()&&(xa.getRendered()).offsetWidth>0;}catch(Kb){((B()).getLog()).debug(jsx3.NativeError.wrap(Kb));return true;}};});
