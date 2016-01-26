/*
 * Copyright (c) 2001-2009, TIBCO Software Inc.
 * Use, modification, and distribution subject to terms of license.
 */
Array.prototype.indexOf=function(j,g){if(g==null)g=0;for(var
Ka=g;Ka<this.length;Ka++)if(this[Ka]==j)return Ka;return -1;};Array.prototype.lastIndexOf=function(f,n){if(n==null)n=this.length-1;for(var
rb=n;rb>=0;rb--)if(this[rb]==f)return rb;return -1;};Array.prototype.contains=function(o){return this.indexOf(o)>=0;};Array.prototype.remove=function(l){var
ba=this.indexOf(l);if(ba>=0)return (this.splice(ba,1))[0];return null;};Array.prototype.clone=function(){return this.concat();};Array.prototype.pushAll=function(s){this.push.apply(this,s);};Array.prototype.contentsEqual=function(f){if(f==null)return false;if(this.length!=f.length)return false;for(var
mb=0;mb<f.length;mb++)if(this[mb]!=f[mb])return false;return true;};Array.prototype.filter=function(g){var
K=[];for(var
B=0;B<this.length;B++)if(g(this[B]))K.push(this[B]);return K;};Array.prototype.map=function(f,i,d){var
Aa=null;if(i){if(d){Aa={};for(var
hb=0;hb<this.length;hb++){var
ia=f(this[hb]);for(var
fa=0;fa<ia.length;fa=fa+2)Aa[ia[hb]]=ia[hb+1];}}else{Aa=[];for(var
hb=0;hb<this.length;hb++){var
C=f(this[hb]);if(C instanceof Array)Aa.pushAll(C);else Aa.push(C);}}}else if(d){Aa={};for(var
hb=0;hb<this.length;hb++){var
ma=f(this[hb]);Aa[ma[0]]=ma[1];}}else{Aa=new
Array(this.length);for(var
hb=0;hb<this.length;hb++)Aa[hb]=f(this[hb]);}return Aa;};Math.modpos=function(n,i){return jsx3.util.numMod(n,i);};Math.isNaN=function(b){return jsx3.util.numIsNaN(b);};Number.prototype.roundTo=function(s){return jsx3.util.numRound(this,s);};Number.prototype.zeroPad=function(e){var
Ga=""+this;while(Ga.length<e)Ga="0"+Ga;return Ga;};Date.prototype.getLastDateOfMonth=function(){var
ja=this.getMonth();return Date.AH[ja]||((new
Date(this.getYear(),ja,29)).getMonth()==ja?29:28);};Date.prototype.equals=function(l){return l!=null&&l instanceof Date&&l.valueOf()==this.valueOf();};Date.prototype.compareTo=function(g){var
Jb=this.valueOf();var
eb=g.valueOf();return Jb==eb?0:Jb>eb?1:-1;};Date.AH=[31,null,31,30,31,30,31,31,30,31,30,31];String.prototype.trim=function(){return jsx3.util.strTrim(this);};String.prototype.doReplace=function(f,h){var
ba=new
RegExp(f,["g"]);return this.replace(ba,h);};String.prototype.escapeHTML=function(){return jsx3.util.strEscapeHTML(this);};String.prototype.doTruncate=function(q){return jsx3.util.strTruncate(this,q,"...",1);};String.prototype.toAbsolute=function(){var
ca;if(this.substring(0,1)=="/"||(this.substring(0,7)).toUpperCase()=="HTTP://"||(this.substring(0,8)).toUpperCase()=="HTTPS://"){ca=this.toString();}else if(this.substring(0,4)=="JSX/"){ca=jsx3.getEnv("jsxabspath")+this;}else ca=jsx3.getEnv("jsxhomepath")+this;return ca;};String.prototype.urlTo=function(r){var
B=null;var
Bb=this.lastIndexOf("/");if(Bb==this.length-1)B=this+r;else if(Bb<0)B=r;else B=this.substring(0,Bb+1)+r;B=B.replace(/\\/g,"/");var
wa=B.split("/");for(var
P=0;P<wa.length;P++){var
ka=wa[P];if(ka=="."){wa.splice(P--
,1);}else if(ka=="..")if(P>0&&wa[P-1]!=".."){wa.splice(P--
,1);wa.splice(P--
,1);}}return wa.join("/");};String.prototype.endsWith=function(r){return jsx3.util.strEndsWith(this,r);};String.prototype.constrainLength=function(i,q){return jsx3.util.strTruncate(this,i,q,0.6666666666666666);};String.prototype.toBase64=function(){return jsx3.util.strEncodeBase64(this);};String.prototype.fromBase64=function(){return jsx3.util.strDecodeBase64(this);};(function(c){var
ub={a:"undefined",b:"null",c:"[",d:",",e:"]",f:"object",g:":",h:"{",i:"}",j:"string",k:/(^\s*)|(\s*$)/g,l:"",m:"qE",n:"May not call $AsyncRV.rv() before the return value is set.",o:"function",p:"YZ",q:"number"};var
R=function(l,n){for(var B in n)l[B]=n[B];return l;};var
fb=function(b,q){if(typeof q==ub.a)q=true;var
qa;if(b==null)qa=ub.b;else if(c.$A.is(b)){var
Ja=[];for(var
y=0;y<b.length;y++)Ja.push(q?fb(b[y]):b[y]);qa=ub.c+Ja.join(ub.d)+ub.e;}else if(typeof b==ub.f){var
Ja=[];for(var H in b)if(!b.hasOwnProperty||b.hasOwnProperty(H))Ja.push(H+ub.g+(q?fb(b[H]):b[H]));qa=ub.h+Ja.join(ub.d)+ub.i;}else if(typeof b==ub.j){qa=c.util.strEscapeJSON(b);}else qa=b.toString();return qa;};c.$Object={extend:function(j){return R(this,j);},clone:function(){var
gb=c.$O();gb.extend(this);return gb;}};c.$O=function(n){return R(n||{},c.$Object);};c.$O.json=fb;c.$Array={each:function(d){for(var
ja=0;ja<this.length;ja++)d(this[ja]);},map:function(k){var
Za=c.$A();for(var
wb=0;wb<this.length;wb++)Za[wb]=k(this[wb]);return Za;},filter:function(p){var
Ga=c.$A();for(var
_a=0;_a<this.length;_a++)if(p(this[_a]))Ga.push(this[_a]);return Ga;},indexOf:function(f){for(var
Qa=0;Qa<this.length;Qa++)if(this[Qa]===f)return Qa;return -1;},contains:function(p){return this.indexOf(p)>=0;},remove:function(s){var
Da=this.indexOf(s);if(Da>=0)return (this.splice(Da,1))[0];},find:function(e){for(var
M=0;M<this.length;M++)if(e(this[M]))return this[M];},unique:function(){var
sa=this.concat();for(var
x=sa.length-1;x>=1;x--)for(var
ua=x-1;ua>=0;ua--)if(sa[x]===sa[ua]){sa.splice(x,1);break;}return c.$A(sa);},addAll:function(p){this.push.apply(this,p);},clone:function(){return c.$A(this.concat());}};c.$Hash=(c.$Object.clone()).extend({each:function(i){for(var Ib in this)if(this[Ib]!=this.constructor.prototype[Ib]&&this[Ib]!=c.$Hash[Ib])i(Ib,this[Ib]);},keys:function(){var
mb=[];for(var na in this)if(this[na]!=this.constructor.prototype[na]&&this[na]!=c.$Hash[na])mb.push(na);return c.$A(mb);},values:function(){var
Cb=[];for(var v in this)if(this[v]!=this.constructor.prototype[v]&&this[v]!=c.$Hash[v])Cb.push(this[v]);return c.$A(Cb);}});c.$Function={bind:function(g,o){var
kb=this;if(o==null||o.length==0){return c.$F(function(){return kb.apply(g,arguments);});}else return function(){var
rb;if(arguments.length>0){rb=[];for(var
Z=0;Z<o.length;Z++)rb.push(o[Z]);for(var
Z=0;Z<arguments.length;Z++)rb.push(arguments[Z]);}else rb=o;return kb.apply(g,rb);};},throttled:function(){var
Ib=this;return c.$F(function(){if(Ib._thlto)window.clearTimeout(Ib._thlto);Ib._thlto=window.setTimeout((c.$F(Ib)).bind(this,arguments));});},slept:function(){var
nb=this;return c.$F(function(){window.setTimeout(nb.bind(this,arguments));});}};c.$String=(c.$Object.clone()).extend({endsWith:function(r){return this.lastIndexOf(r)==this.length-r.length;},trim:function(){return c.$S(this.replace(ub.k,ub.l));}});c.$F=function(b){return R(b,c.$Function);};var
K=c.$F(function(e,i,m){e[i]=m.rv();});var
tb=function(d){var
X=null;for(var
va=0;va<d.length;va++){var
Ga=d[va];if(Ga instanceof Ha)if(Ga.JE){d[va]=Ga.rv();}else{Ga.when(K.bind(null,[d,va,Ga]));X=X?X.and(Ga):Ga;}}return X;};c.$AsyncCB=function(q,p){this.mM=q;this.oJ=p;this.ku=tb(p);};R(c.$AsyncCB.prototype,{Qp:c.$F(function(p,a){this.oJ[p]=a.rv();}),done:function(n){this.JE=true;this.wK=n;if(this.YZ)this.YZ(n);},args:function(){return this.oJ;}});var
Ha=c.$AsyncRV=function(){};R(Ha.prototype,{pK:function(a){this.JE=true;this.wK=a;if(this.qE){this.qE.each(function(d){d(a);});delete this[ub.m];}},rv:function(){if(!this.JE)throw new
Error(ub.n);return this.wK;},when:function(d,m){var
Ua=null;if(typeof d==ub.o)Ua=d;else if(d instanceof c.$AsyncCB){if(arguments.length>1)Ua=(function(){d.done(m);});else Ua=(function(i){d.done(i);});}else throw new
Error();if(this.JE){Ua(this.wK);}else{if(!this.qE)this.qE=c.$A();this.qE.push(Ua);}},and:function(n){var
Ea=[this];for(var
ea=0;ea<arguments.length;ea++)Ea.push(arguments[ea]);return new
zb(Ea);},or:function(b){var
sb=[this];for(var
Oa=0;Oa<arguments.length;Oa++)sb.push(arguments[Oa]);return new
pb(sb);}});var
ia=function(b){this.FZ=b;b.YZ=this.f3.bind(this);};ia.prototype=new
Ha();R(ia.prototype,{f3:c.$F(function(n){delete this.FZ[ub.p];this.pK(n);})});var
zb=function(l){this.gA=l.length;this.lA=0;(c.$A(l)).each((c.$F(function(e){if(e.JE)this.lA++;else e.when(this.AO.bind(this));})).bind(this));if(this.gA==this.lA)this.pK();};zb.prototype=new
Ha();R(zb.prototype,{AO:c.$F(function(){this.lA++;if(this.lA==this.gA)this.pK();})});var
pb=function(k){(c.$A(k)).each((c.$F(function(m){if(m.JE)this.AO();else m.when(this.AO.bind(this));})).bind(this));};pb.prototype=new
Ha();R(pb.prototype,{AO:c.$F(function(){if(!this.JE)this.pK();})});c.$A=function(e){if(e==null){e=[];}else if(e instanceof Array){}else if(c.$A.is(e)){var
Db=[];for(var
Ra=0;Ra<e.length;Ra++)Db[Ra]=e[Ra];e=Db;}else e=[e];return R(e,c.$Array);};c.$A.is=function(q){return q&&typeof q==ub.f&&(q instanceof Array||typeof q.length==ub.q);};c.$H=function(h){if(c.$A.is(h)){var
mb={};for(var
C=0;C<h.length;C++)mb[h[C]]=1;return R(mb,c.$Hash);}else return R(h||{},c.$Hash);};c.$S=function(e){if(e==null)return e;return R(e,c.$String);};c.$Y=function(a){return function(){var
rb=new
c.$AsyncCB(this,arguments);var
qa=new
ia(rb);if(rb.ku){var
ca=this;rb.ku.when(function(){var
vb=a.apply(ca,[rb]);if(vb instanceof Ha)vb.when(rb);});}else{var
vb=a.apply(this,[rb]);if(vb instanceof Ha)vb.when(rb);}return qa;};};c.$Z=function(g,p){if(p instanceof Ha)p.when(function(l){p=l;});return function(){var
bb=new
Ha();var
wb=c.Method.argsAsArray(arguments);if(p instanceof Ha){p.when(function(){Y(p,g,wb,bb);});}else Y(p||this,g,wb,bb);return bb;};};var
Y=function(h,o,s,j){var
Ab=typeof o==ub.o?o:h[o];var
za=tb(s);if(za){za.when(function(){j.pK(Ab.apply(h,s));});}else j.pK(Ab.apply(h,s));};})(jsx3);if(jsx3.lang==null)jsx3.lang={};(function(d){var
ub={a:"."};d.STACK_MAX=50;d.getCaller=function(q){var
ia=(q!=null?q:0)+1;var
gb=arguments;if(gb.callee){for(gb=gb.callee;gb!=null;gb=gb.caller){if(--ia>=0)continue;return gb.caller;}}else for(gb=gb.caller;gb!=null;gb=gb.caller){if(--ia>=0)continue;return gb.callee;}return null;};d.getStack=function(q){var
zb=[];var
Ya=(q!=null?q:0)+1;var
fa=arguments;if(fa.callee){for(fa=fa.callee;fa&&fa.caller&&zb.length<jsx3.lang.STACK_MAX;fa=fa.caller){if(--Ya>=0)continue;zb[zb.length]=fa.caller;}}else for(fa=fa.caller;fa&&fa.callee;fa=fa.caller){if(--Ya>=0)continue;zb[zb.length]=fa.callee;}return zb;};d.setVar=function(s,n){var
fa=s.split(ub.a);var
Ib=window;for(var
ca=0;ca<fa.length-1;ca++){var
hb=fa[ca];if(!Ib[hb])Ib[hb]={};Ib=Ib[hb];}Ib[fa[fa.length-1]]=n;};d.getVar=function(h){var
Cb=h.split(ub.a);var
pb=window;for(var
sa=0;sa<Cb.length;sa++){if(pb==null)return;pb=pb[Cb[sa]];}return pb;};})(jsx3.lang);if(window["jsx3"]==null)window["jsx3"]={};if(jsx3.lang==null)jsx3.lang={};jsx3.lang.Uj=new
window.Object();jsx3.lang.Jl=new
window.Object();jsx3.lang.Vc=function(){var
ub={a:"obj.no_inst"};return function(){if(arguments[0]!=jsx3.lang.Uj){var
db=this.getClass?this.getClass():null;throw new
jsx3.Exception(jsx3._msg(ub.a,db||this));}};};jsx3.lang.jm=function(){var
ub={a:"obj.no_init"};return function(){if(arguments[0]!==jsx3.lang.Jl)if(this.init){this.init.apply(this,arguments);}else{var
ha=jsx3.lang.getCaller(-1);throw new
jsx3.Exception(jsx3._msg(ub.a,ha.jsxclass));}};};jsx3.lang.Object=function(){this.init();};window._jsxDX=function(r,j){var
ub={a:"function",b:"string",c:"objClass",d:"@",e:"obj.super_funct",f:"obj.super_static",g:"obj.super_none",h:"undefined",i:"obj.supmx_funct",j:"obj.supmx_static",k:"obj.supmx_none",l:"INTERFACES",m:/jsx3/g,n:"jsx3.gui",o:"SUPERS",p:"",q:"."};j.init=function(){};j.getClass=function(){return this.__jsxclass__.jsxclass;};j.equals=function(i){return this===i;};j.clone=function(){return (this.getClass()).bless(this);};j.instanceOf=function(o){if(o instanceof jsx3.lang.Class){return o.isInstance(this);}else if(typeof o==ub.a&&o.prototype!=null){return this instanceof o||o.jsxclass!=null&&o.jsxclass.isInstance(this);}else if(typeof o==ub.b){o=jsx3.lang.Class.forName(o);if(o!=null)return o.isInstance(this);}throw new
jsx3.IllegalArgumentException(ub.c,o);};j.toString=function(){return ub.d+(this.getClass()).getName();};j.jsxsuper=function(f){var
La=jsx3.Exception;var
gb=jsx3.lang.getCaller();var
la=gb!=null?gb.jsxmethod:null;if(la==null||!(la instanceof jsx3.lang.Method))throw new
La(jsx3._msg(ub.e,gb));if(la.isStatic())throw new
La(jsx3._msg(ub.f,la));var
sb=la.getDeclaringClass();var
Ua=sb.yf(la);if(Ua==null)throw new
La(jsx3._msg(ub.g,la));var
F=Ua.apply(this,arguments);if(typeof F!=ub.h)return F;};j.jsxsupermix=function(d){var
cb=jsx3.Exception;var
Oa=jsx3.lang.getCaller();var
z=Oa!=null?Oa.jsxmethod:null;if(z==null||!(z instanceof jsx3.lang.Method))throw new
cb(jsx3._msg(ub.i,Oa));if(z.isStatic())throw new
cb(jsx3._msg(ub.j,z));var
pb=z.getDeclaringClass();var
xb=pb.Cn(z);if(xb==null)throw new
cb(jsx3._msg(ub.k,z));var
ta=xb.apply(this,arguments);if(typeof ta!=ub.h)return ta;};j.jsxmix=function(g){};j.isInstanceOf=function(d,q,h){if(this.getClass()&&(typeof d!=ub.b||jsx3.lang.Class.forName(d)!=null))return this.instanceOf(d);var
A=jsx3.getClass(this.getInstanceOf());if(A==null)A=this.constructor;if(typeof A==ub.a){var
Kb=A[q?q:ub.l];var
zb=Kb?Kb[d]:null;if(zb==1){return true;}else if(h){return false;}else return this.isInstanceOf(d.replace(ub.m,ub.n),q,true);}return false;};j.isSubclassOf=function(a){return this.isInstanceOf(a,ub.o);};j.getInstanceOf=function(){if(this.getClass())return (this.getClass()).getName();return this.jsxinstanceof?this.jsxinstanceof:this.constructor.className;};j.setInstanceOf=function(o){this.jsxinstanceof=o;return this;};j.getInstanceOfPackage=function(){if(this.getClass())return (this.getClass()).getPackageName();var
O=this.getInstanceOf();if(O==null)return ub.p;var
zb=O.lastIndexOf(ub.q);if(zb>=0)return O.substring(0,zb);else return ub.p;};j.getInstanceOfClass=function(){if(this.getClass()){var
L=(this.getClass()).getName();return L.substring(L.lastIndexOf(ub.q)+1);}var
ma=this.getInstanceOf();if(ma==null)return ub.p;var
X=ma.lastIndexOf(ub.q);if(X>=0)return ma.substring(X+1);else return ma;};j.eval=function(q,i){return jsx3.eval.call(this,q,i);};};window._jsxDX(jsx3.lang.Object,jsx3.lang.Object.prototype);window._jsxDX=null;jsx3.lang.Object.prototype.__noSuchMethod__=function(o,s){throw new
jsx3.Exception(jsx3._msg("class.nsm",(this.getClass()).getName()+"#"+o+"()"));};window.inheritance=jsx3.lang.Object;if(window["jsx3"]==null)window["jsx3"]={};if(jsx3.lang==null)jsx3.lang={};jsx3.lang.Method=jsx3.lang.Vc();jsx3.lang.Method.prototype=new
jsx3.lang.Object();jsx3.lang.Method.prototype.constructor=jsx3.lang.Method;window._jsxDX=function(d,f){var
ub={a:/^\s*function(\s+\w+)?\s*\(\s*([^\)]*?)\s*\)/,b:/\s*,\s*/,c:"method.call",d:".",e:"",f:/^[a-zA-Z_]\w*$/,g:"paramNames[",h:"]",i:"'",j:"', ",k:'var method = arguments.callee.jsxmethod;if (method instanceof jsx3.lang.Method) {  throw new jsx3.Exception("method " + method.getName() + " in class " + method.getDeclaringClass() +    " is abstract and may not be invoked");} else {  throw new jsx3.Exception("invoked abstract method improperly initialized");}',l:"new Function(",m:"');",n:"return this.",o:".apply(this.",p:", arguments);"};d.z0=ub.a;f.dB=function(){if(d.z0.exec((this.getFunction()).toString())){var
Z=RegExp.$2;this.t7=Z?Z.split(ub.b):[];}else this.t7=[];};f.getName=function(){return this.c7;};f.getArity=function(){if(this.t7==null)this.dB();return this.t7.length;};f.getParameterNames=function(){if(this.t7==null)this.dB();return this.t7.concat();};f.getParameterName=function(h){if(this.t7==null)this.dB();return this.t7[h];};f.getDeclaringClass=function(){return this.hh;};f.isPackageMethod=function(){return this.hh instanceof jsx3.lang.Package;};f.isStatic=function(){return this.oh;};f.isAbstract=function(){return this.ad;};f.getFunction=function(){if(this.isPackageMethod()){return (this.hh.getNamespace())[this.c7];}else if(this.oh){return (this.hh.getConstructor())[this.c7];}else return (this.hh.getConstructor()).prototype[this.c7];};f.apply=function(e,n){return (this.getFunction()).apply(e,n);};f.call=function(j){var
Hb=arguments;if(Hb.length>11)throw new
jsx3.Exception(jsx3._msg(ub.c,+Hb.length));return (this.getFunction()).call(Hb[0],Hb[1],Hb[2],Hb[3],Hb[4],Hb[5],Hb[6],Hb[7],Hb[8],Hb[9],Hb[10]);};f.toString=function(){return this.hh.getName()+ub.d+this.c7;};d.newAbstract=function(k){var
cb=ub.e;for(var
y=0;y<arguments.length;y++){if(!arguments[y].match(ub.f))throw new
jsx3.IllegalArgumentException(ub.g+y+ub.h,arguments[y]);cb=cb+(ub.i+arguments[y]+ub.j);}var
W=ub.k;var
Ma=jsx3.eval(ub.l+cb+ub.i+W+ub.m);Ma.ad=true;return Ma;};d.newDelegate=function(r,o){var
pa=ub.n+o+ub.d+r+ub.o+o+ub.p;return new
Function(pa);};d.argsAsArray=function(n,e,l){if(e==null)e=0;if(l==null)l=n.length;else l=Math.min(l,n.length);var
v=l-e;if(v<=0)return [];var
Db=new
Array(v);for(var
qb=0;qb<v;qb++)Db[qb]=n[qb+e];return Db;};};window._jsxDX(jsx3.lang.Method,jsx3.lang.Method.prototype);window._jsxDX=null;if(window["jsx3"]==null)window["jsx3"]=new
window.Object();if(jsx3.lang==null)jsx3.lang=new
window.Object();jsx3.lang.Class=jsx3.lang.Vc();jsx3.lang.Class.prototype=new
jsx3.lang.Object();jsx3.lang.Class.prototype.__jsxclass__=jsx3.lang.Class;window._jsxDX=function(a,e){var
ub={a:"toString",b:"valueOf",c:"jsx3.util.Logger.Manager",d:"jsx3.lang.Class",e:".",f:"jsx3.lang.Object",g:"function",h:"class.bad_super",i:"class.redefine",j:"class.int_ext_class",k:"class.class_ext_int",l:"object",m:"jsx3.lang",n:"class.def_error",o:"class.no_init",p:"loaded ",q:"class.bad_int",r:"class.class_imp_class",s:"class.redef_method"};a.lX={"jsx3.lang.Object":1,"jsx3.lang.Method":1,"jsx3.lang.ClassLoader":1,"jsx3.lang.Class":2};a.jU=[ub.a,ub.b];a.y9={prototype:1,constructor:1,jsxclass:1,__jsxclass__:1};a.KD=null;a.defineClass=function(c,l,q,o){this.E8(c,l,q,o,false);};a.defineInterface=function(p,f,b){this.E8(p,f,null,b,true);};a.E8=function(b,k,r,p,h){if(a.KD==null&&a.forName&&a.forName(ub.c)&&jsx3.util.Logger.Manager.getManager())a.KD=jsx3.util.Logger.getLogger(ub.d);var
xb=b.split(ub.e);var
Ra=xb.pop();var
_=this.Lj(xb);var
ha=this.lX[b]!=null;var
Bb=null;if(k==null){Bb=h||b==ub.f?window.Object:jsx3.lang.Object;}else if(k instanceof a){Bb=k.getConstructor();}else if(typeof k==ub.g&&k.prototype!=null){Bb=k;}else a.R2(jsx3._msg(ub.h,k));if(_[Ra]&&_[Ra].jsxclass){a.R2(jsx3._msg(ub.i,b,_[Ra].jsxclass),null,2);}else{var
V=false;if(!ha){if(Bb.jsxclass!=null){if(h&&!Bb.jsxclass.isInterface())a.R2(jsx3._msg(ub.j,b,Bb.jsxclass));if(!h&&Bb.jsxclass.isInterface())a.R2(jsx3._msg(ub.k,b,Bb.jsxclass));}if(typeof _[Ra]==ub.g){V=true;}else if(h){_[Ra]=jsx3.lang.Vc();}else if(typeof _[Ra]==ub.l){var
Nb=_[Ra];_[Ra]=jsx3.lang.jm();for(var Na in Nb)_[Ra][Na]=Nb[Na];}else _[Ra]=jsx3.lang.jm();_[Ra].prototype=this.Bz(Bb,h);}_[Ra].prototype.__jsxclass__=_[Ra];var
t=_[Ra];if(xb.join(ub.e)==ub.m)jsx3[Ra]=t;var
fb=a.Le(a);fb.c7=b;fb.t0=t;if(Bb!=null)fb.AE=Bb.jsxclass;fb.Wt=h;fb.FY=[];fb.Qq=[];fb.DJ=[];var
qb=fb.xE=[];var
Lb=fb.cF=[];fb.rE={};fb.VG={};t.jsxclass=fb;try{p(t,t.prototype);}catch(Kb){var
za=jsx3.NativeError?jsx3.NativeError.wrap(Kb):null;a.R2(jsx3._msg(ub.n,b,za||Kb.description),za);}for(var Na in t){if(a.y9[Na])continue;if(typeof t[Na]==ub.g){this.hv(t[Na],fb,Na,true);}else qb[qb.length]=Na;}for(var
R=0;R<a.jU.length;R++){var
ua=a.jU[R];if(t[ua]!=null&&t[ua]!=window.Function.prototype[ua]&&t[ua].jsxmethod==null)this.hv(t[ua],fb,ua,true);}for(var Na in t.prototype){if(a.y9[Na])continue;var
ib=t.prototype[Na];if(typeof ib==ub.g){if(Bb==null||ib!=Bb.prototype[Na])this.hv(ib,fb,Na,false);}else Lb[Lb.length]=Na;}for(var
R=0;R<a.jU.length;R++){var
ua=a.jU[R];if(t.prototype[ua]!=null&&t.prototype[ua]!=window.Object.prototype[ua]&&t.prototype[ua].jsxmethod==null)this.hv(t.prototype[ua],fb,ua,false);}if(!V&&!h&&!(typeof t.prototype.init==ub.g))a.R2(jsx3._msg(ub.o,b));if(jsx3.$A.is(r))for(var
R=r.length-1;R>=0;R--)a.YP(fb,t,r[R]);if(a.KD)a.KD.trace(ub.p+b);jsx3.CLASS_LOADER.rc(fb);}};a.YP=function(b,s,o){if(typeof o==ub.g&&o.jsxclass!=null)o=o.jsxclass;else if(!(o instanceof a))a.R2(jsx3._msg(ub.q,b,o));if(!o.isInterface())a.R2(jsx3._msg(ub.r,b,o));var
t=(o.getConstructor()).prototype;for(var Ib in t){var
eb=t[Ib];var
ea=typeof eb==ub.g?eb.jsxmethod:null;if(ea==null)continue;var
W=s.prototype[Ib];if(W==null){s.prototype[Ib]=eb;}else if(!(W.jsxmethod.getDeclaringClass()).equals(b))s.prototype[Ib]=eb;}b.FY.unshift(o);};a.Lj=function(g){var
Ia=window;for(var
Va=0;Va<g.length;Va++){var
Ea=g[Va];if(Ia[Ea]==null)Ia[Ea]=new
window.Object();Ia=Ia[Ea];}return Ia;};a.hv=function(o,c,h,d){if(o.jsxmethod instanceof jsx3.lang.Method)if((o.jsxmethod.getDeclaringClass()).equals(c))a.R2(jsx3._msg(ub.s,o.jsxmethod,c+ub.e+h));else return;var
jb=a.Le(jsx3.lang.Method);jb.hh=c;jb.c7=h;jb.oh=d;jb.ad=Boolean(o.ad);o.jsxmethod=jb;var
Qa=d?c.Qq:c.DJ;Qa[Qa.length]=jb;};a.Bz=function(g,f){if(g==Object)return {};return new
g(f?jsx3.lang.Uj:jsx3.lang.Jl);};a.Le=function(n){return new
n(jsx3.lang.Uj);};a.R2=function(n,d,b){if(a.KD){a.KD.log(b||1,n,d);}else if(jsx3.Exception){var
Oa=new
jsx3.Exception(n,d);window.alert(Oa.printStackTrace());}else window.alert(n);};};window._jsxDX(jsx3.lang.Class,jsx3.lang.Class.prototype);window._jsxDX=null;jsx3.lang.Class.defineClass("jsx3.lang.Class",null,null,function(f,s){var
ub={a:".",b:"",c:"class.new_inst",d:"class.bless_int",e:"function",f:"get",g:"is",h:"set",i:"class.int_imp_int",j:"class.class_imp_class",k:"class.already_imp",l:"xV",m:"class.mmix_bad",n:"class.no_aop",o:"m:",p:"undefined"};f.forName=function(l){var
Xa=jsx3.lang.getVar(l);return Xa?Xa.jsxclass:null;};s.getName=function(){return this.c7;};s.getPackage=function(){var
bb=this.c7;while(true){var
ob=bb.lastIndexOf(ub.a);if(ob<0)break;bb=bb.substring(0,ob);var
A=jsx3.lang.Package.forName(bb);if(A!=null)return A;if(f.forName(bb)==null)break;}return null;};s.getPackageName=function(){var
Va=this.getPackage();if(Va){return Va.getName();}else{var
S=this.c7.lastIndexOf(ub.a)+1;return S>=0?this.c7.substring(0,S-1):ub.b;}};s.getConstructor=function(){if(this.t0!=null)return this.t0;var
wb=jsx3.lang.getVar(this.c7);return wb||null;};s.getSuperClass=function(){return this.AE;};s.isInterface=function(){return this.Wt;};s.toString=function(){return this.c7;};s.newInstance=function(o){if(arguments.length>10)throw new
jsx3.Exception(jsx3._msg(ub.c));var
ob=arguments;var
Fb=this.getConstructor();return new
Fb(ob[0],ob[1],ob[2],ob[3],ob[4],ob[5],ob[6],ob[7],ob[8],ob[9]);};s.isInstance=function(n){var
Ga=n.__jsxclass__?n.__jsxclass__.jsxclass:null;return Ga!=null&&this.isAssignableFrom(Ga);};s.isAssignableFrom=function(k){if(this.equals(k))return true;if(k.xV==null)k.dF();return k.xV[this.getName()]==true;};s.dF=function(){this.xV={};for(var
Ja=0;Ja<this.FY.length;Ja++){var
Ra=this.FY[Ja];this.xV[Ra.getName()]=true;if(Ra.xV==null)Ra.dF();for(var I in Ra.xV)this.xV[I]=true;}if(this.AE!=null){this.xV[this.AE.getName()]=true;if(this.AE.xV==null)this.AE.dF();for(var I in this.AE.xV)this.xV[I]=true;}};s.mixin=function(l,r,b){if(b){for(var
Aa=0;Aa<b.length;Aa++){var
ka=this.getInstanceMethod(b[Aa]);if(ka&&l[ka.getName()]==null||!r)l[ka.getName()]=ka.getFunction();}}else for(var
Aa=0;Aa<this.DJ.length;Aa++){var
ka=this.DJ[Aa];if(l[ka.getName()]==null||!r)l[ka.getName()]=ka.getFunction();}};s.bless=function(e){if(this.isInterface())throw new
jsx3.Exception(jsx3._msg(ub.d,this));var
N=f.Bz(this.getConstructor());if(e!=null)for(var aa in e)if(!(typeof e[aa]==ub.e))N[aa]=e[aa];return N;};s.newInnerClass=function(c){if(this.isInterface()){return f.Le(this.getConstructor());}else return this.newInstance.apply(this,arguments);};s.getStaticMethods=function(){return this.Qq.concat();};s.getInstanceMethods=function(){return this.DJ.concat();};s.getStaticMethod=function(q){for(var
bb=0;bb<this.Qq.length;bb++)if(q==this.Qq[bb].getName())return this.Qq[bb];return null;};s.getInstanceMethod=function(d){if(!this.II){this.II={};for(var
Da=0;Da<this.DJ.length;Da++)this.II[this.DJ[Da].getName()]=this.DJ[Da];}return this.II[d]||null;};s.getGetter=function(p){p=(p.charAt(0)).toUpperCase()+p.substring(1);return this.dM(ub.f+p)||this.dM(ub.g+p);};s.getSetter=function(r){r=(r.charAt(0)).toUpperCase()+r.substring(1);return this.dM(ub.h+r);};s.getStaticFieldNames=function(){return this.xE.concat();};s.getInstanceFieldNames=function(){return this.cF.concat();};s.getInterfaces=function(){return this.FY.concat();};s.addInterface=function(p){var
Db=null;if(this.isInterface())Db=ub.i;else if(!p.isInterface())Db=ub.j;else if(p.isAssignableFrom(this))Db=ub.k;if(Db)throw new
jsx3.Exception(jsx3._msg(Db,this,p));f.YP(this,this.getConstructor(),p);delete this[ub.l];};s.getInheritance=function(){var
Lb=this.FY.concat();if(this.AE!=null){Lb[Lb.length]=this.AE;Lb.push.apply(Lb,this.AE.getInheritance());}return Lb;};s.getClasses=function(){var
G=this.getConstructor();var
y=[];for(var xb in G)if(typeof G[xb]==ub.e&&G[xb].jsxclass instanceof f){y[y.length]=G[xb].jsxclass;y.push.apply(y,G[xb].jsxclass.getClasses());}return y;};s.addMethodMixin=function(l,c,e){var
J=this.getInstanceMethod(l);if(!J)f.R2(jsx3._msg(ub.m,this,l));var
eb=jsx3.AOP;if(!eb)f.R2(jsx3._msg(ub.n,this,l));var
pb=this.getName()+ub.a+l+ub.a+c.getName();(eb.pc(pb,{classes:this,methods:l,type:c})).after(pb,function(){this[e].apply(this,jsx3.Method.argsAsArray(arguments,1));});};s.dM=function(m,c){var
Ba=null;if(!c)Ba=this.getInstanceMethod(m);var
W=this.getInheritance();for(var
bb=0;Ba==null&&bb<W.length;bb++)Ba=W[bb].getInstanceMethod(m);return Ba;};s.iQ=function(d,g){var
pa=null;if(!g)pa=this.getInstanceMethod(d);if(pa==null&&this.AE!=null)pa=this.AE.iQ(d);return pa;};s.Ey=function(o){var
ba=null;for(var
gb=0;gb<this.FY.length&&ba==null;gb++)ba=this.FY[gb].getInstanceMethod(o);if(ba==null&&this.AE!=null)ba=this.AE.Ey(o);return ba;};s.yf=function(j){var
Q=j.getName();var
L=this.rE[ub.o+Q];if(typeof L==ub.p)this.rE[ub.o+Q]=L=this.iQ(Q,true);return L;};s.Cn=function(k){var
R=k.getName();var
Za=this.VG[ub.o+R];if(typeof Za==ub.p)this.VG[ub.o+R]=Za=this.Ey(R);return Za;};});jsx3.lang.Class.defineClass("jsx3.lang.Object",null,null,function(){});jsx3.lang.Class.defineClass("jsx3.lang.Method",null,null,function(){});jsx3.lang.Class.jsxclass.AE=jsx3.lang.Object.jsxclass;jsx3.Class.defineClass("jsx3.lang.AOP",null,null,function(o,q){var
ub={a:"$",b:"EI",c:"G3",d:"qW",e:"NO",f:"YG",g:/^\w+$/,h:"^",i:"*",j:"\\w*",k:"string",l:"function",m:"strClass"};var
yb=jsx3.IllegalArgumentException;o.Kz={};o.kZ={};o.pc=function(m,r){if(o.Kz[m])throw new
yb();var
Xa=o.Kz[m]={c7:m,qW:[],NO:[],YG:[],aF:r,nD:[]};var
sb=o.So(r);for(var
wb=0;wb<sb.length;wb++){var
Ma=sb[wb];var
Oa=o.uq(Ma);o.kZ[Oa].bG.push(Xa);Xa.nD.push(Oa);}return o;};o.pcrem=function(f){var
S=o.Kz[f];if(S){var
ya=S.nD;for(var
tb=0;tb<ya.length;tb++){var
ib=o.kZ[ya[tb]];ib.bG.splice(jsx3.util.arrIndexOf(ib.bG,S),1);if(ib.bG.length==0)o.ss(ya[tb]);}delete o.Kz[f];}};o.uq=function(b){var
lb=b[0],oa=b[1];var
Ta=lb.getName()+ub.a+oa;if(!o.kZ[Ta]){var
Ha=(lb.getConstructor()).prototype;o.kZ[Ta]={Zq:Ha[oa],bG:[]};var
pa=Ha[oa].jsxmethod;Ha[oa]=o.BD(Ta);Ha[oa].jsxmethod=pa;}return Ta;};o.ss=function(n){var
I=o.kZ[n];var
u=I.Zq;var
wb=u.jsxmethod;((wb.getDeclaringClass()).getConstructor()).prototype[wb.getName()]=u;delete o.kZ[n];};o.before=function(f,a,n){o[n?ub.b:ub.c](f,a,ub.d);};o.after=function(b,e,j){o[j?ub.b:ub.c](b,e,ub.e);};o.around=function(p,j,e){o[e?ub.b:ub.c](p,j,ub.f);};o.G3=function(p,j,a){o.Kz[p][a].push(j);};o.EI=function(c,d,n){var
jb=o.Kz[c][n];for(var
Sa=jb.length-1;Sa>=0;Sa--)if(jb[j]===d)jb.splice(Sa,1);};o.BD=function(d){var
ga=function(){return o.qX(d,this,arguments);};ga.jsxmethod=o.qX.jsxmethod;return ga;};o.qX=function(p,m,l){var
U=o.gx(m,o.kZ[p].bG);var
G=o.aN(U,ub.f);if(G.length>0){return (new
o.Vt(p,G,m,l)).E2();}else return o.wZ(p,m,l,U);};o.wZ=function(k,l,d,h){if(!h)h=o.gx(l,o.kZ[k].bG);var
la=o.aN(h,ub.d);for(var
rb=0;rb<la.length;rb++)la[rb].apply(l,d);var
Ea=o.kZ[k].Zq.apply(l,d);var
va=o.aN(h,ub.e);if(va.length>0){var
Gb=jsx3.Method.argsAsArray(d);Gb.unshift(Ea);for(var
rb=0;rb<va.length;rb++)va[rb].apply(l,Gb);}return Ea;};o.gx=function(n,j){var
Ja=[];for(var
Mb=0;Mb<j.length;Mb++){var
za=j[Mb];var
da=za.aF;if(!da||!da.type||n.instanceOf(da.type))Ja.push(za);}return Ja;};o.aN=function(c,r){var
Ja=[];for(var
ca=0;ca<c.length;ca++)Ja.push.apply(Ja,c[ca][r]);return Ja;};o.So=function(l){var
S=[];var
I=o.a4(l.classes);for(var
nb=0;nb<I.length;nb++)S.push.apply(S,o.WE(I[nb],l.methods));return S;};o.a4=function(l){if(!jsx3.$A.is(l))l=[l];var
T=[];for(var
E=0;E<l.length;E++)T[E]=o.tI(l[E]);return T;};o.WE=function(k,a){var
v=[];var
qb=(k.getConstructor()).prototype;if(!jsx3.$A.is(a))a=[a];for(var
Ea=0;Ea<a.length;Ea++){var
qa=a[Ea];if(qa.match(ub.g)){var
H=qb[qa];if(H)v.push([k,qa]);}else{var
wb=new
RegExp(ub.h+qa.replace(ub.i,ub.j)+ub.a);for(var Ua in qb)if(Ua.match(wb))v.push([k,Ua]);}}return v;};o.tI=function(d){if(typeof d==ub.k)return jsx3.Class.forName(d);else if(typeof d==ub.l)return d.jsxclass;else if(d instanceof jsx3.Class)return d;else throw new
yb(ub.m,d);};o.Vt=function(i,f,a,s){this.vc=i;this.wB=f;this.mM=a;this.oJ=s;};o.Vt.prototype.E2=function(){return this.proceed.apply(this,this.oJ);};o.Vt.prototype.proceed=function(){var
va=this.wB.shift();if(va){var
Mb=jsx3.Method.argsAsArray(arguments);Mb.unshift(this);return va.apply(this.mM,Mb);}else return o.wZ(this.vc,this.mM,arguments);};});jsx3.Class.defineClass("jsx3.lang.Exception",null,null,function(n,o){var
ub={a:"jsxsuper",b:"jsxsupermix",c:"__noSuchMethod__",d:"",e:"\n",f:"    at ",g:"#",h:".",i:"()",j:"^function(\\s+\\w+)?\\s*\\(([^\\)]*)\\)\\s*{",k:"anonymous",l:/\s+/g,m:" ",n:"(",o:/\s*,\s*/,p:", ",q:")",r:" { ",s:"anonymous()",t:": ",u:"\nCaused By:\n"};var
xb=jsx3.lang.Method;n.Pp=false;n.gl=null;o.init=function(f,l){n.gl=this;this.hN=f;this.JK=l;this.Lo=[];this.vY();if(n.Pp&&window.onerror==null)window.alert(f+this.printStackTrace());var
Q=jsx3.util.Logger;if(Q){var
zb=Q.getLogger(n.jsxclass.getName());if(zb.isLoggable(6))zb.trace(f,this);}};o.toString=function(){return this.hN;};o.getMessage=function(){return this.hN;};o.getCause=function(){return this.JK;};o.getStack=function(){return this.Lo;};n.L0=[jsx3.Object.jsxclass.getInstanceMethod(ub.a),jsx3.Object.jsxclass.getInstanceMethod(ub.b),jsx3.Object.jsxclass.getInstanceMethod(ub.c)];n.formatStack=function(c){var
S=ub.d;if(!jsx3.util||!jsx3.util.jsxpackage)return S;for(var
vb=0;vb<c.length;vb++){var
J=c[vb];if(J==null)continue;if(J.jsxmethod instanceof xb){var
Jb=c[vb+1];if(Jb!=null&&jsx3.util.arrIndexOf(n.L0,Jb.jsxmethod)>=0)if(J==xb.prototype.apply)continue;if(jsx3.util.arrIndexOf(n.L0,J.jsxmethod)>=0)continue;if(S.length>0)S=S+ub.e;S=S+ub.f;S=S+(J.jsxmethod.getDeclaringClass()).getName();S=S+(J.jsxmethod.isStatic()?ub.g:ub.h);S=S+(J.jsxmethod.getName()+ub.i);}else{if(S.length>0)S=S+ub.e;S=S+ub.f;if(J.jsxclass instanceof jsx3.lang.Class){S=S+(J.jsxclass.getName()+ub.i);}else{var
Gb=J.toString();if(Gb.match(new
RegExp(ub.j))){var
Q=RegExp.$1||ub.k;var
ia=RegExp.$2;var
ba=RegExp.rightContext;ba=jsx3.util.strTruncate((jsx3.util.strTrim(ba)).replace(ub.l,ub.m),70);S=S+(jsx3.util.strTrim(Q)+ub.n+((jsx3.util.strTrim(ia)).split(ub.o)).join(ub.p)+ub.q+(ba?ub.r+ba:ub.d));}else S=S+ub.s;}}}return S;};o.printStackTrace=function(){var
Ba=(this.getClass()).getName()+ub.t+this+ub.e+n.formatStack(this.Lo);if(this.JK!=null)Ba=Ba+(ub.u+this.JK.printStackTrace());return Ba;};o.vY=function(){var
rb=jsx3.lang.getStack(1);var
N=-1;for(var
G=0;G<rb.length;G++)if(rb[G].jsxclass!=null){N=G;break;}if(N>=0)rb.splice(0,N+1);this.Lo=rb;};});jsx3.Class.defineClass("jsx3.lang.IllegalArgumentException",jsx3.lang.Exception,null,function(d,o){var
ub={a:"exc.ill_arg"};o.init=function(g,n){this.jsxsuper(jsx3._msg(ub.a,g,n));};});jsx3.Class.defineClass("jsx3.lang.NativeError",jsx3.lang.Exception,null,function(d,g){var
ub={a:"",b:"uncaught exception:",c:"jsx3.util.Logger",d:"string",e:"error.trap",f:"error.uncaught",g:"\n",h:"error.trap_err",i:"objError",j:/\s*$/,k:"EvalError",l:"RangeError",m:"ReferenceError",n:"SyntaxError",o:"TypeError",p:"Error",q:": ",r:"\nCaused By:\n",s:" (type:",t:", ",u:"line:",v:"file:",w:")"};var
mb=jsx3.Exception;d.D1=false;d.EW=true;d.wrap=function(s){if(s instanceof Error)return new
d(s);else if(s instanceof mb)return s;else return new
mb(ub.a+s);};d.initErrorCapture=function(l){window.onerror=arguments.length>0?l:d.S3;};d.stopErrorCapture=function(r){window.onerror=null;};d.Pr=ub.b;d.S3=function(b,p,h){try{if(!d.D1&&jsx3.Class.forName(ub.c)!=null&&jsx3.util.Logger.GLOBAL!=null){if(typeof b==ub.d&&b.indexOf(d.Pr)>=0)if(mb.gl!=null){var
Ba=jsx3.lang.getStack(0);if(Ba.length<2||Ba.contentsEqual(mb.gl.getStack())){if(Ba.length<2)jsx3.util.Logger.GLOBAL.logStack(2,jsx3._msg(ub.e,b,d.tx(h),p),1);jsx3.util.Logger.GLOBAL.error(jsx3._msg(ub.f),mb.gl);mb.gl=true;return true;}}jsx3.util.Logger.GLOBAL.logStack(2,jsx3._msg(ub.e,b,d.tx(h),p),1);return true;}else if(d.EW){if(typeof b==ub.d&&b.indexOf(d.Pr)>=0)if(mb.gl!=null){var
Ba=jsx3.lang.getStack(0);if(Ba.contentsEqual(mb.gl.getStack())){window.alert(jsx3._msg(ub.f)+ub.g+mb.gl.printStackTrace());return true;}}var
Ba=jsx3.lang.getStack(0);window.alert(jsx3._msg(ub.e,b,d.tx(h),p)+ub.g+mb.formatStack(Ba));return true;}else return false;}catch(Kb){window.alert(jsx3._msg(ub.h,d.wrap(Kb),b,d.tx(h),p));}};g._x=null;g.init=function(h){if(!(h instanceof Error))throw new
jsx3.IllegalArgumentException(ub.i,h);this._x=h;this.jsxsuper();};g.getMessage=function(){return (this._x.message||this._x.toString()).replace(ub.j,ub.a);};g.getFileName=function(){return this._x.fileName;};g.getLineNumber=function(){return d.tx(this._x.lineNumber);};d.tx=function(a){if(jsx3.util.numIsNaN(a))return null;return a;};g.getName=function(){return this._x.name;};g.isStructural=function(){return false;};g.getType=function(){if(this._x instanceof EvalError)return ub.k;if(this._x instanceof RangeError)return ub.l;if(this._x instanceof ReferenceError)return ub.m;if(this._x instanceof SyntaxError)return ub.n;if(this._x instanceof TypeError)return ub.o;return ub.p;};g.printStackTrace=function(){var
D=(this.getClass()).getName()+ub.q+this+ub.g+mb.formatStack(this.Lo);if(this._x.stack)D=D+(ub.g+this._x.stack);if(this._cause!=null)D=D+(ub.r+this._cause.printStackTrace());return D;};g.toString=function(){var
Wa=this.getLineNumber();var
O=this.getFileName();var
Za=this.getMessage();if(Wa||O){Za=Za+(ub.s+this.getType()+ub.t);if(Wa)Za=Za+(ub.u+Wa);if(O){if(Wa)Za=Za+ub.t;Za=Za+(ub.v+O);}Za=Za+ub.w;}return Za;};});jsx3.lang.Package=jsx3.lang.Vc();jsx3.lang.Class.defineClass("jsx3.lang.Package",null,null,function(s,k){var
ub={a:".",b:"jsx3.util.Logger",c:"jsx3.lang",d:"pkg.redefine",e:"pkg.def_error",f:"jsxpackage",g:"function",h:"object",i:"class.nsm",j:"#",k:"()",l:"class.redef_method"};var
hb=jsx3.lang.Class;var
ea=jsx3.lang.Method;s.Wr=[];s.definePackage=function(l,f){var
t=hb.Lj(l.split(ub.a));var
aa=false;var
rb=null;if(t.jsxpackage!=null){if(jsx3.Class.forName(ub.b))(jsx3.util.Logger.getLogger(ub.c)).info(jsx3._msg(ub.d,l));rb=t.jsxpackage;aa=true;rb.xE=[];rb.Qq=[];}else{rb=hb.Le(s);rb.bO=l;rb.xE=[];rb.Qq=[];t.jsxpackage=rb;}try{f(t);}catch(Kb){var
D=jsx3.NativeError.wrap(Kb);throw new
jsx3.Exception(jsx3._msg(ub.e,l,D),D);}for(var lb in t){if(lb==ub.f)continue;if(typeof t[lb]==ub.g){if(t[lb].jsxclass==null)this.hv(t[lb],rb,lb);}else if(t[lb]==null||typeof t[lb]!=ub.h||t[lb].jsxpackage==null)rb.xE.push(lb);}if(t.__noSuchMethod__==null)t.__noSuchMethod__=function(a,e){throw new
jsx3.Exception(jsx3._msg(ub.i,l+ub.j+a+ub.k));};s.Wr.push(rb);jsx3.CLASS_LOADER.Xm(rb);};s.hv=function(d,a,p){if(d.jsxmethod instanceof ea)if((d.jsxmethod.getDeclaringClass()).equals(a)&&d.jsxmethod.getName()!=p){throw new
jsx3.Exception(jsx3._msg(ub.l,d.jsxmethod,a+ub.a+p));}else{if((d.jsxmethod.getDeclaringClass()).equals(a)&&jsx3.util.arrIndexOf(a.Qq,d.jsxmethod)<0)a.Qq.push(d.jsxmethod);return;}var
t=hb.Le(ea);t.hh=a;t.c7=p;t.oh=true;d.jsxmethod=t;a.Qq.push(t);};s.forName=function(l){var
E=jsx3.lang.getVar(l);return E?E.jsxpackage:null;};s.getPackages=function(){return s.Wr.concat();};k.bO=null;k.Ev=null;k.Qq=null;k.xE=null;k.getName=function(){return this.bO;};k.getNamespace=function(){if(this.Ev!=null)return this.Ev;var
Db=jsx3.lang.getVar(this.bO);return Db||null;};k.getClasses=function(){var
Oa=[];var
z=this.getNamespace();for(var sa in z)if(typeof z[sa]==ub.g&&z[sa].jsxclass instanceof hb)if(z[sa].jsxclass.getPackage()==this&&this.getName()+ub.a+sa==z[sa].jsxclass.getName()){Oa[Oa.length]=z[sa].jsxclass;Oa.push.apply(Oa,z[sa].jsxclass.getClasses());}return Oa;};k.getStaticMethods=function(){return this.Qq.concat();};k.getStaticMethod=function(g){for(var
gb=0;gb<this.Qq.length;gb++)if(g==this.Qq[gb].getName())return this.Qq[gb];return null;};k.getStaticFieldNames=function(){return this.xE.concat();};k.toString=function(){return this.bO;};});jsx3.Package.definePackage("jsx3",function(){var
ub={A:"INHR01",B:"Super class '",C:"' of '",D:"' not properly defined",E:"1",F:"jsx3.util.Logger",G:"GP",a:"JSX/addins/",b:"Msxml2.FreeThreadedDOMDocument.3.0",c:"Msxml2.XSLTemplate.3.0",d:"Msxml2.XMLHTTP.3.0",e:"JSX30DESERIALIZE",f:"JSX30INITIALIZE",g:"",h:"var ",i:" = _ec.",j:";",k:"string",l:"object",m:"jsx3.gui.MatrixColumn",n:"jsx3.gui.Matrix.Column",o:"queueDone",p:"jsx3.net.Request.INSYNC",q:"gi",r:"http://www.tibco.com/gi",s:"boot.oah",t:/\s+/,u:"script",v:"function",w:".prototype",x:".",y:")",z:"\n"};jsx3.ADDINSPATH=ub.a;jsx3.XMLREGKEY=ub.b;jsx3.XSLREGKEY=ub.c;jsx3.HTTPREGKEY=ub.d;jsx3.getXmlVersion=function(){return 6;};jsx3.DESERIALIZE=ub.e;jsx3.INITIALIZE=ub.f;jsx3.LOG10E=Math.LOG10E;jsx3.STARTUP_EVENT=null;jsx3.CACHE=null;jsx3.EVENT=null;jsx3.getSharedCache=function(){if(jsx3.CACHE==null)jsx3.CACHE=new
jsx3.app.Cache();return jsx3.CACHE;};jsx3.getSystemCache=function(){if(jsx3.kA==null)jsx3.kA=new
jsx3.app.Cache();return jsx3.kA;};jsx3.eval=function(a,f){if(a!=null&&a!==ub.g){var
ha=ub.g;if(f){var
_ec=f;var
Lb=[];for(var Db in _ec)Lb[Lb.length]=ub.h+Db+ub.i+Db+ub.j;ha=Lb.join(ub.g);}return eval(ha+a);}};jsx3.resolveURI=function(b){return (jsx3.net.URIResolver.DEFAULT.resolveURI(b)).toString();};jsx3.makeCallback=function(j,k,g){var
ib=jsx3.Method.argsAsArray;var
Ba=ib(arguments,2);if(typeof j==ub.k)j=k[j];return function(){var
zb=arguments;var
Qa=zb.length>0?Ba.concat(ib(zb)):Ba;return j.apply(k,Qa);};};jsx3.clone=function(a){if(typeof a!=ub.l)return a;var
Ba={};for(var Aa in a)Ba[Aa]=a[Aa];return Ba;};jsx3.sP={};jsx3.sP[ub.m]=ub.n;jsx3.require=function(j){for(var
Za=0;Za<arguments.length;Za++){var
xa=arguments[Za];xa=jsx3.sP[xa]||xa;if(jsx3.Class.forName(xa)==null)jsx3.CLASS_LOADER.loadClass(xa);}};jsx3.ZN=[];jsx3.I9=[];jsx3.PU=null;jsx3.sleep=function(g,e,l,r){if(e&&jsx3.I9[e])if(r)jsx3.I9[e][0]=null;else return;var
tb=[g,e,l];var
y=jsx3.ZN;y[y.length]=tb;jsx3.I9[e]=tb;if(jsx3.PU==null)jsx3.PU=window.setTimeout(jsx3.PM,0);};jsx3.QUEUE_DONE=ub.o;jsx3.PM=function(){jsx3.util.WeakMap.expire();jsx3.tcf(function(){if(jsx3.lang.getVar(ub.p))return;var
la=jsx3.ZN;jsx3.ZN=[];for(var
ob=0;ob<la.length;ob++){var
T=la[ob];var
sb=T[0];if(!sb)continue;var
M=T[1];var
da=T[2];delete jsx3.I9[M];sb.apply(da);}},null,function(){if(jsx3.ZN.length>0)jsx3.PU=window.setTimeout(jsx3.PM,0);else{jsx3.PU=null;jsx3.publish({subject:jsx3.QUEUE_DONE});}});};jsx3.startup=function(){if(window.OpenAjax)try{OpenAjax.hub.registerLibrary(ub.q,ub.r,jsx3.getVersion());}catch(Kb){var
Fb=jsx3.util.Logger;if(Fb)Fb.GLOBAL.error(jsx3._msg(ub.s),jsx3.NativeError.wrap(Kb));}};jsx3.destroy=function(){if(jsx3.app&&jsx3.app.Server){var
aa=jsx3.app.Server.allServers();for(var
nb=0;nb<aa.length;nb++)try{aa[nb].destroy();}catch(Kb){}}if(jsx3.gui&&jsx3.gui.Event){var
ga="BEFOREUNLOAD BLUR CHANGE CLICK DOUBLECLICK ERROR FOCUS KEYDOWN KEYPRESS KEYUP LOAD MOUSEDOWN MOUSEMOVE MOUSEOUT MOUSEOVER MOUSEUP MOUSEWHEEL UNLOAD RESIZE".split(ub.t);for(var
nb=0;nb<ga.length;nb++)jsx3.gui.Event.unsubscribeAll(jsx3.gui.Event[ga[nb]]);}jsx3.NativeError.stopErrorCapture();var
Ka=document.getElementsByTagName(ub.u);for(var
nb=0;nb<Ka.length;nb++){var
O=Ka.item(nb);O.parentNode.removeChild(O);}jsx3.CLASS_LOADER.destroy();window.jsx3=null;};jsx3.getClass=function(q){try{var
Lb=eval(q);return typeof Lb==ub.v?Lb:null;}catch(Kb){return null;}};jsx3.Gk=function(g){try{var
I=eval(g+ub.w);return typeof I==ub.l&&typeof I.constructor==ub.v?I:null;}catch(Kb){return null;}};jsx3.getClassConstants=function(h){var
rb=jsx3.getClass(h);if(rb!=null){var
Va=[];for(var Ib in rb)if(Ib.toUpperCase()==Ib)Va[Va.length]=h+ub.x+Ib;return Va;}};jsx3.getInstanceMethods=function(p){var
db=jsx3.Gk(p);var
H=[];for(var Fb in db)if(typeof db[Fb]==ub.v){var
Z=db[Fb].toString();H[H.length]=Z.substring(9,Z.indexOf(ub.y)+1);}return H;};jsx3.getClassMethods=function(p){var
X=jsx3.getClass(p);var
Y=ub.g;for(var pb in X)if(typeof X[pb]==ub.v){var
ta=X[pb].toString();Y=Y+(pb+ta.substring(8,ta.indexOf(ub.y)+1)+ub.z);}return Y;};jsx3.doInherit=function(c,k,a){var
Mb=jsx3.getClass(c);var
B=jsx3.getClass(k);if(B==null){jsx3.util.Logger.doLog(ub.A,ub.B+k+ub.C+c+ub.D,1,false);return;}if(Mb.isInherited==null||a!=null&&a){if(!a){Mb.SUPER=k;Mb.SUPERS={};for(var mb in B.SUPERS){Mb.SUPERS[mb]=B.SUPERS[mb];Mb.SUPERS[c]=1;}}Mb.className=c;if(Mb.INHERITANCE==null)Mb.INHERITANCE=[c];if(B.INHERITANCE)for(var
da=B.INHERITANCE.length-1;da>=0;da--)Mb.INHERITANCE.splice(1,0,B.INHERITANCE[da]);else Mb.INHERITANCE.splice(1,0,k);if(Mb.INTERFACES==null)Mb.INTERFACES={};if(B.INTERFACES){for(var mb in B.INTERFACES)Mb.INTERFACES[mb]=B.INTERFACES[mb];}else Mb.INTERFACES[k]=ub.E;Mb.INTERFACES[c]=ub.E;if(!(a!=null&&a))Mb.isInherited=true;var
Na=jsx3.Gk(k);var
Fa=jsx3.Gk(c);for(var mb in Na)if(typeof Fa[mb]!=ub.v)Fa[mb]=Na[mb];}};jsx3.doImplement=function(q,f){jsx3.doInherit(q,f,true);};jsx3.doMixin=function(a,q){var
qa=jsx3.Gk(q);for(var pa in qa)if(typeof qa[pa]==ub.v)a[pa]=qa[pa];};jsx3.doDefine=function(j,c){var
kb=jsx3.getClass(j);if(kb.isDefined==null){kb.isDefined=true;c();}};jsx3.out=function(b,r,n,o){if(jsx3.Class.forName(ub.F))jsx3.util.Logger.doLog(b,r,n,o);};window.doInherit=jsx3.doInherit;window.doImplement=jsx3.doImplement;window.doMixin=jsx3.doMixin;window.doDefine=jsx3.doDefine;jsx3.log=function(j){if(jsx3.Class.forName(ub.F)&&jsx3.util.Logger.GLOBAL){if(jsx3.GP){for(var
ra=0;ra<jsx3.GP.length;ra++)jsx3.util.Logger.GLOBAL.info(jsx3.GP[ra]);delete jsx3[ub.G];}jsx3.util.Logger.GLOBAL.info(j);}else{var
da=jsx3.GP;if(!da)jsx3.GP=da=[];da[da.length]=j;}};});jsx3.Package.definePackage("jsx3.app",function(){});jsx3.Boolean={};jsx3.Boolean.TRUE=1;jsx3.Boolean.FALSE=0;jsx3.Boolean.valueOf=function(q){return q?1:0;};jsx3.Package.definePackage("jsx3.gui",function(r){var
ub={a:"className"};r.Cc=function(p,l){var
za=[];for(var
hb=0;hb<arguments.length-1;hb=hb+2){p=arguments[hb];if(p._jsxRr)continue;p._jsxRr=true;l=arguments[hb+1];var
J={};for(var Za in l)J[Za]=Za==ub.a?p.className:p.style[Za];za.push(p,J,l);}r.iL(za,0,6);};r.iL=function(c,m,h){if(m==h){for(var
Jb=0;Jb<c.length-2;Jb=Jb+3){var
ca=c[Jb];ca._jsxRr=null;}return;}for(var
Jb=0;Jb<c.length-2;Jb=Jb+3){var
ca=c[Jb];var
ka=m%2==0?c[Jb+2]:c[Jb+1];for(var gb in ka)if(gb==ub.a)ca.className=ka[gb];else ca.style[gb]=ka[gb];}window.setTimeout(function(){r.iL(c,m+1,h);},75);};r.isMouseEventModKey=function(f){if(jsx3.app.Browser.macosx)return f.metaKey();else return f.ctrlKey();};});jsx3.Package.definePackage("jsx3.lang",function(j){});jsx3.Package.definePackage("jsx3.net",function(n){});jsx3.Class.defineInterface("jsx3.net.URIResolver",null,function(p,c){var
ub={a:"jsxabspath",b:"jsxhomepath",c:"jsxscriptapppath",d:"..",e:"jsx",f:"JSX",g:"/",h:"jsxuser",i:"JSXAPPS",j:"GI_Builder/",k:"function",l:"jsxurirslv",m:"3.6",n:"strURI",o:"bRel"};p.xq={};p.register=function(n,i){p.xq[n]=i;};p.As=function(){if(this.V0==null)this.V0=new
jsx3.net.URI(jsx3.getEnv(ub.a));return this.V0;};p.Qs=function(){var
P=jsx3.getEnv(ub.b);if(P==null)return new
jsx3.net.URI(jsx3.getEnv(ub.c));if(this.vr==null)this.vr=new
jsx3.net.URI(P);return this.vr;};p.DEFAULT=p.jsxclass.newInnerClass();p.DEFAULT.resolveURI=function(i){var
Wa=jsx3.net.URI.valueOf(i);var
ua=Wa.getScheme();var
vb=Wa.getPath();var
V=p.getResolver(Wa);var
B=Wa;if(V&&V!=p.DEFAULT){if(Wa.isAbsolute())Wa=jsx3.net.URI.fromParts(null,null,null,null,vb.substring(1),Wa.getQuery(),Wa.getFragment());B=V.resolveURI(Wa);}else if(V){B=(p.As()).resolve(Wa);}else if(!ua&&vb.indexOf(ub.d)>=0){var
Ra=jsx3.app.Browser.getLocation();B=Ra.relativize(Ra.resolve(Wa));}return B;};p.DEFAULT.getUriPrefix=function(){return (p.As()).toString();};p.DEFAULT.relativizeURI=function(r,f){return jsx3.net.URI.valueOf(r);};p.JSX=p.jsxclass.newInnerClass();p.register(ub.e,p.JSX);p.JSX.getURI=function(){if(this._uri==null)this._uri=(p.As()).resolve(ub.f+ub.g);return this._uri;};p.JSX.resolveURI=function(e){var
Fa=jsx3.net.URI.valueOf(e);if(!p.isAbsoluteURI(Fa))Fa=(this.getURI()).resolve(Fa);return p.DEFAULT.resolveURI(Fa);};p.JSX.getUriPrefix=function(){return p.As()+ub.f+ub.g;};p.JSX.relativizeURI=function(i,n){var
M=(this.getURI()).relativize(i);if(M.isAbsolute()||n)return M;else return jsx3.net.URI.fromParts(ub.e,null,null,null,ub.g+M.getPath(),M.getQuery(),M.getFragment());};p.USER=p.jsxclass.newInnerClass();p.register(ub.h,p.USER);p.USER.resolveURI=function(f){var
M=jsx3.net.URI.valueOf(f);if((M.getPath()).indexOf(ub.i+ub.g)==0||!p.isAbsoluteURI(M))return (p.Qs()).resolve(M);return p.DEFAULT.resolveURI(M);};p.USER.getUriPrefix=function(){return (p.Qs()).toString();};p.USER.relativizeURI=function(k,r){var
na=jsx3.app.Browser.getLocation();var
Wa=(na.resolve(jsx3.getEnv(ub.b))).relativize(na.resolve(k));if(Wa.isAbsolute()||r)return Wa;else return jsx3.net.URI.fromParts(ub.h,null,null,null,ub.g+Wa.getPath(),Wa.getQuery(),Wa.getFragment());};p.isAbsoluteURI=function(a){var
la=jsx3.net.URI.valueOf(a);if(la.getScheme()!=null)return true;var
z=la.getPath();return z.indexOf(ub.g)==0||z.indexOf(ub.f+ub.g)==0||z.indexOf(ub.i+ub.g)==0||z.indexOf(ub.j)==0;};p.getResolver=function(o){var
La=jsx3.net.URI.valueOf(o);var
yb=La.getScheme();var
nb=null;if(yb){nb=p.xq[yb];if(typeof nb==ub.k)nb=nb(La);}else{var
ib=La.getPath();if(ib.indexOf(ub.f+ub.g)==0||ib.indexOf(ub.j)==0)nb=p.DEFAULT;else if(jsx3.getEnv(ub.l)==ub.m&&ib.indexOf(ub.i+ub.g)==0)nb=p.USER;}return nb;};c.resolveURI=jsx3.Method.newAbstract(ub.n);c.getUriPrefix=jsx3.Method.newAbstract();c.relativizeURI=jsx3.Method.newAbstract(ub.n,ub.o);});jsx3.Package.definePackage("jsx3.xml",function(d){});jsx3.Package.definePackage("jsx3.util",function(c){var
ub={A:"&lt;",B:/>/g,C:"&gt;",D:/\"/g,E:"&quot;",F:/[^\x09\x0A\x0D\x20-\x7F]/g,G:"\\u",H:"...",I:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",J:"=",a:",",b:/^[\\$_a-zA-Z][\w\\$]*$/,c:/^(\d+)?([a-zA-Z_]\w*)?$/,d:/[\._]/,e:"",f:"\b",g:"\\b",h:"\t",i:"\\t",j:"\n",k:"\\n",l:"\u000C",m:"\\f",n:"\r",o:"\\r",p:'"',q:'\\"',r:"\\",s:"\\\\",t:/[\"\\\x00-\x1f]/,u:/[\x00-\x1f\\\"]/g,v:"\\u00",w:/(^\s*)|(\s*$)/g,x:/&/g,y:"&amp;",z:/</g};c.RESERVED=jsx3.$H("abstract,boolean,break,byte,case,catch,char,class,const,continue,debugger,default,delete,do,double,else,enum,export,extends,false,final,finally,float,for,function,goto,if,implements,import,in,instanceof,int,interface,long,native,new,null,package,private,protected,public,return,short,static,super,switch,synchronized,this,throw,throws,transient,true,try,typeof,var,void,volatile,while,with".split(ub.a));c.isName=function(h){return Boolean(!c.RESERVED[h]&&h.match(ub.b));};c.compareVersions=function(n,m){var
pb=ub.c;var
x=n.split(ub.d);var
ia=m.split(ub.d);var
G=Math.max(x.length,ia.length);var
sb,ba,ya,ja;for(var
Oa=0;Oa<G;Oa++){if(x.length>Oa&&pb.test(x[Oa])){sb=parseInt(RegExp.$1)||Number(0);ba=RegExp.$2;}else{sb=0;ba=ub.e;}if(ia.length>Oa&&pb.test(ia[Oa])){ya=parseInt(RegExp.$1)||Number(0);ja=RegExp.$2;}else{ya=0;ja=ub.e;}if(sb>ya)return 1;if(sb<ya)return -1;if(ba>ja)return 1;if(ba<ja)return -1;}return 0;};c.numMod=function(h,a){var
mb=h%a;return mb<0?mb+a:mb;};c.numIsNaN=function(k){return k==null||k===ub.e||isNaN(k);};c.numRound=function(d,f){return Math.round(d/f)*f;};c.strEmpty=function(o){return o==null||o===ub.e;};c._jsxz0={};c._jsxz0[ub.f]=ub.g;c._jsxz0[ub.h]=ub.i;c._jsxz0[ub.j]=ub.k;c._jsxz0[ub.l]=ub.m;c._jsxz0[ub.n]=ub.o;c._jsxz0[ub.p]=ub.q;c._jsxz0[ub.r]=ub.s;c.strEscapeJSON=function(m){if(ub.t.test(m))return ub.p+m.replace(ub.u,function(d){var
Y=c._jsxz0[d];if(Y)return Y;Y=d.charCodeAt();return ub.v+(Math.floor(Y/16)).toString(16)+(Y%16).toString(16);})+ub.p;return ub.p+m+ub.p;};c.arrIndexOf=function(a,f){for(var
ma=0;ma<a.length;ma++)if(a[ma]===f)return ma;return -1;};c.SW=ub.w;c.strTrim=function(e){return e.replace(c.SW,ub.e);};c.strEscapeHTML=function(a){return (((((String(a)).replace(ub.x,ub.y)).replace(ub.z,ub.A)).replace(ub.B,ub.C)).replace(ub.D,ub.E)).replace(ub.F,function(m){var
Nb=m.charCodeAt(0);if(Nb<32||Nb>55295&&Nb<57344||Nb>65533&&Nb<65536||Nb>1114111)return ub.G+Nb.toString(16);else return m;});};c.strTruncate=function(g,s,f,b){if(f==null)f=ub.H;if(b==null)b=1;if(g.length>s&&f.length<s){var
L=s-f.length;var
H=Math.round(L*b);var
xb=g.substring(0,H);var
Bb=g.substring(g.length-(L-H));return xb+f+Bb;}else return g;};c.strEndsWith=function(a,n){var
sb=a.lastIndexOf(n);return sb>=0&&sb==a.length-n.length;};c.Mq=ub.I;c.strEncodeBase64=function(o){var
Nb=c.Mq;var
Ca=new
Array(Math.ceil(o.length*4/3));var
La=0,za=0,R=o.length;for(;La<=R-3;La=La+3){var
qb=(o.charCodeAt(La)&255)<<16|(o.charCodeAt(La+1)&255)<<8|o.charCodeAt(La+2)&255;Ca[za++
]=Nb.charAt((qb&16515072)>>18);Ca[za++
]=Nb.charAt((qb&258048)>>12);Ca[za++
]=Nb.charAt((qb&4032)>>6);Ca[za++
]=Nb.charAt(qb&63);}if(La<R){var
aa=La<R-1;var
qb=(o.charCodeAt(La)&255)<<16;if(aa)qb=qb|(o.charCodeAt(La+1)&255)<<8;Ca[za++
]=Nb.charAt((qb&16515072)>>18);Ca[za++
]=Nb.charAt((qb&258048)>>12);if(aa)Ca[za++
]=Nb.charAt((qb&4032)>>6);else Ca[za++
]=ub.J;Ca[za++
]=ub.J;}return Ca.join(ub.e);};c.strDecodeBase64=function(b){var
Qa=c.Mq;var
wa=new
Array(Math.ceil(b.length/4));var
Fa=0,L=0,Wa=b.length;for(;Fa<Wa;Fa=Fa+4){var
y=(Qa.indexOf(b.charAt(Fa))&255)<<18|(Qa.indexOf(b.charAt(Fa+1))&255)<<12|(Qa.indexOf(b.charAt(Fa+2))&255)<<6|Qa.indexOf(b.charAt(Fa+3))&255;wa[L++
]=String.fromCharCode((y&16711680)>>16,(y&65280)>>8,y&255);}if(b.charCodeAt(Fa-2)==61)wa[L-1]=wa[L-1].substring(0,1);else if(b.charCodeAt(Fa-1)==61)wa[L-1]=wa[L-1].substring(0,2);return wa.join(ub.e);};});jsx3.Class.defineClass("jsx3.util.Timer",null,null,function(h,m){var
ub={a:"bench.",b:" : ",c:"",d:"ms"};h.oL=[];h.listen=function(){var
va=[];h.oL.push(va);return va;};h.ignore=function(a){var
wb=jsx3.util.arrIndexOf(h.oL,a);h.oL.splice(wb,1);};h.LM=function(k,l,g){var
ua=h.oL;if(ua.length>0){var
Gb={topic:k.aU,subtopic:k.hN,message:l,ms:g};for(var
V=0;V<ua.length;V++)ua[V].push(Gb);}};m.init=function(f,g,q){this.Op=new
Date();this.aU=String(f);this.hN=String(g);this.D5=q||4;};m.log=function(a){var
ya=new
Date();if(!this.kV)if(jsx3.util.Logger)this.kV=jsx3.util.Logger.getLogger(ub.a+this.aU);var
S=ya-this.Op;if(this.kV&&this.kV.isLoggable(this.D5))this.kV.log(this.D5,(this.hN?this.hN+ub.b:ub.c)+(a?a+ub.b:ub.c)+S+ub.d);h.LM(this,a,S);this.Op=ya;};});jsx3.Class.defineClass("jsx3.util.WeakMap",null,null,function(a,o){var
ub={a:"lv"};a.cN=0;a.Mw={};a.LB=null;a.expire=function(){window.clearTimeout(a.LB);a.LB=null;for(var J in a.Mw){var
yb=a.Mw[J];if(yb.vJ)yb.lv={};}};o.init=function(){this.jG=a.cN++;this.lv={};this.vJ=false;a.Mw[this.jG]=this;};o.get=function(m){return this.lv[m];};o.set=function(r,g){this.lv[r]=g;this.vJ=true;if(!a.LB)a.LB=window.setTimeout(a.expire,0);};o.destroy=function(r,d){delete this[ub.a];delete a.Mw[this.jG];};});jsx3.Class.defineClass("jsx3.util.MemStats",null,null,function(b,h){var
ub={a:"namespace",b:"bench.",c:"sys-cache:",d:" shr-cache:",e:" sys-jss:",f:" [@",g:" dom:",h:" html:",i:" cache:",j:" jss:",k:"]",l:" time: ",m:"B",n:"K",o:"M",p:"G",q:"s"};b.INTERVAL=15000;b.sw=12;b.PZ=60;b.cN=0;b.eN=function(){var
D=jsx3.util.Logger;if(D){var
nb=b.cN%b.PZ==0?4:b.cN%b.sw==0?5:6;b.m9(nb);b.cN++;}};b.log=function(){b.m9(3);};b.getStats=function(){var
C={};var
Ya=new
Date();C.systemcache=b.CU(jsx3.getSystemCache());C.sharedcache=b.CU(jsx3.getSharedCache());C.jss=b.qI(jsx3.System.JSS);C.apps=[];var
K=jsx3.app.Server.allServers();(jsx3.$A(K)).each(function(i){var
y=(i.getRootBlock()).getRendered();C.apps.push({ns:i.getEnv(ub.a),cache:b.CU(i.getCache()),html:y?y.parentNode.innerHTML.length:0,dom:b.r2(i.JSXROOT)+b.r2(i.INVISIBLE),jss:(i.JSS.getKeys()).length+b.qI(i.LJSS)});});C.statstime=(new
Date()).getTime()-Ya.getTime();return C;};b.CU=function(d){var
yb=0;var
Ua=0;var
Za=d.keys();(jsx3.$A(Za)).each(function(k){var
kb=d.getDocument(k);if(kb){Ua++;yb=yb+(kb.toString()).length;}});return [Ua,yb];};b.r2=function(m){if(!m)return 0;var
ka=1;var
I=m.getChildren();for(var
L=0;L<I.length;L++)ka=ka+b.r2(I[L]);return ka;};b.qI=function(e){var
Eb=(e.getKeys()).length;var
zb=e.getParents();for(var
Ab=0;Ab<zb.length;Ab++)Eb=Eb+b.qI(zb[Ab]);return Eb;};b.m9=function(f){var
S=jsx3.util.Logger;if(S){var
Ba=S.getLogger(ub.b+b.jsxclass.getName());if(Ba.isLoggable(f)){var
K=b.getStats();var
da=ub.c+b.pV(K.systemcache[1])+ub.d+b.pV(K.sharedcache[1])+ub.e+K.jss;(jsx3.$A(K.apps)).each(function(i){da=da+(ub.f+i.ns+ub.g+i.dom+ub.h+b.pV(i.html)+ub.i+b.pV(i.cache[1])+ub.j+i.jss+ub.k);});da=da+(ub.l+b.mv(K.statstime));Ba.log(f,da);}}};b.pV=function(n){if(n<1024)return n+ub.m;n=Math.ceil(n/1024);if(n<1024)return n+ub.n;n=n/1024;if(n<1024)return Math.round(n*10)/10+ub.o;n=Math.ceil(n/1024);return Math.round(n*10)/10+ub.p;};b.mv=function(f){return Math.round(f/100)/10+ub.q;};window.setInterval(b.eN,b.INTERVAL);});jsx3.Class.defineClass("jsx3.util.List",null,null,function(m,o){var
ub={a:"a",b:"number",c:"[",d:"]"};m.wrap=function(g){if(g instanceof m){return g;}else if(g instanceof Array){return new
m(g,true);}else throw new
jsx3.IllegalArgumentException(ub.a,g);};o.init=function(l,h){if(typeof l==ub.b){this.sl=new
Array(l);}else if(l instanceof m){this.sl=l.sl.concat();}else{l=m.vM(l);if(l instanceof Array){this.sl=h?l:l.concat();}else this.sl=[];}this.Y6=-1;};o.size=function(){return this.sl.length;};o.get=function(k){return this.sl[k];};o.set=function(i,k){this.sl[i]=k;};o.iterator=function(){return new
m.Iterator(this);};o.clear=function(){this.sl.splice(0,this.sl.length);};o.indexOf=function(p,r){if(r==null)r=0;var
Ta=this.size();for(var
sa=r;sa<Ta;sa++)if(this.get(sa)===p)return sa;return -1;};o.lastIndexOf=function(d,f){if(f==null)f=this.size()-1;for(var
ea=f;ea>=0;ea--)if(this.get(ea)===d)return ea;return -1;};o.contains=function(h){return this.indexOf(h)>=0;};o.remove=function(f){var
va=this.indexOf(f);if(va>=0)return (this.sl.splice(va,1))[0];return null;};o.removeAt=function(n,b){if(arguments.length==2){return m.wrap(this.sl.splice(n,b-n));}else return (this.sl.splice(n,1))[0];};o.clone=function(){return new
m(this);};o.add=function(q,n){var
bb=this.sl;if(n==null)bb[bb.length]=q;else bb.splice(n,0,q);};o.addAll=function(l,q){if(l instanceof m)l=l.toArray(true);else l=m.vM(l);if(jsx3.$A.is(l)){if(q==null)this.sl.push.apply(this.sl,l);else this.sl=(this.sl.slice(0,q)).concat(l,this.sl.slice(q));}else throw new
jsx3.IllegalArgumentException(ub.a,l);};m.vM=function(s){if(s==null||s instanceof Array){return s;}else if(typeof s.length==ub.b){var
H=new
Array(s.length);for(var
Z=0;Z<s.length;Z++)H[Z]=s[Z];return H;}else return s;};o.slice=function(i,a){return m.wrap(arguments.length>1?this.sl.slice(i,a):this.sl.slice(i));};o.sort=function(e){if(e)this.sl.sort(e);else this.sl.sort();};o.toArray=function(q){return q?this.sl:this.sl.concat();};o.equals=function(d){if(this===d)return true;if(!(d instanceof m))return false;var
mb=this.size();if(mb!=d.size())return false;for(var
ob=0;ob<mb;ob++)if(this.get(ob)!==d.get(ob))return false;return true;};o.filter=function(r){var
ua=[];var
wb=this.size();for(var
Fa=0;Fa<wb;Fa++){var
Ra=this.get(Fa);if(r(Ra))ua[ua.length]=Ra;}return m.wrap(ua);};o.map=function(e,j,c){var
xa=this.size();if(j){if(c){var
ca={};for(var
Za=0;Za<xa;Za++){var
Na=e(this.get(Za));for(var
B=0;B<Na.length;B=B+2)ca[Na[B]]=Na[B+1];}return ca;}else{var
ca=[];for(var
Za=0;Za<xa;Za++){var
Ia=e(this.get(Za));if(Ia instanceof Array)ca.push.apply(ca,Ia);else ca[ca.length]=Ia;}return m.wrap(ca);}}else if(c){var
ca={};for(var
Za=0;Za<xa;Za++){var
jb=e(this.get(Za));ca[jb[0]]=jb[1];}return ca;}else{var
ca=new
Array(xa);for(var
Za=0;Za<xa;Za++)ca[Za]=e(this.get(Za));return m.wrap(ca);}};o.toString=function(){return ub.c+this.sl+ub.d;};o.reset=function(){this.Y6=-1;return this;};o.next=function(){return this.get(
++this.Y6);};o.move=function(k){this.Y6=k;return this;};o.hasNext=function(){return this.Y6<this.size()-1;};o.getIndex=function(){return this.Y6;};o.getItem=function(i){return this.get(i);};o.getLength=function(){return this.size();};});jsx3.Class.defineInterface("jsx3.util.Iterator",null,function(n,r){r.next=jsx3.Method.newAbstract();r.hasNext=jsx3.Method.newAbstract();r.remove=jsx3.Method.newAbstract();});jsx3.Class.defineClass("jsx3.util.List.Iterator",null,[jsx3.util.Iterator],function(n,r){r.init=function(b){this.eg=b;this.wm=b?b.size():0;this.dE=0;};r.next=function(){return this.eg.get(this.dE++);};r.hasNext=function(){return this.dE<this.wm;};r.remove=function(){if(this.dE>0){this.eg.removeAt(
--this.dE);this.wm--;}};});jsx3.Class.defineClass("jsx3.app.AddIn",null,[jsx3.net.URIResolver],function(d,j){var
ub={a:"prototypes/",b:"user:",c:"jsxuser:/addins/",d:"/",e:"id",f:"name",g:"description",h:"version",i:"jsxversion",j:"3.1",k:"config.xml",l:"JSX_SETTINGS::",m:"3.2",n:"jsxaddin",o:/:/,p:"!",q:":"};var
C=jsx3.net.URIResolver;d.PROTOTYPES_DIR=ub.a;j.init=function(p){this.vc=p;this.h0=p.indexOf(ub.b)==0?jsx3.resolveURI(ub.c+p.substring(5)+ub.d):jsx3.resolveURI(jsx3.ADDINSPATH+p+ub.d);this.ee=new
jsx3.net.URI(this.h0);this.Co=(jsx3.app.Browser.getLocation()).resolve(this.ee);this.p7=null;};j.getId=function(){return (this.getSettings()).get(ub.e);};j.getName=function(){return (this.getSettings()).get(ub.f);};j.getDescription=function(){return (this.getSettings()).get(ub.g);};j.getVersion=function(){return (this.getSettings()).get(ub.h);};j.getJsxVersion=function(){return (this.getSettings()).get(ub.i)||ub.j;};j.getKey=function(){return this.vc;};j.getPath=function(){return this.h0;};j.getSettings=function(){if(this.p7==null){var
ka=(jsx3.getSystemCache()).getOrOpenDocument(this.ee.resolve(ub.k),ub.l+this.getKey());this.p7=new
jsx3.app.Settings(ka);}return this.p7;};j.setSettings=function(l){this.p7=l;};j.resolveURI=function(o){var
N=jsx3.net.URI.valueOf(o);if(jsx3.util.compareVersions(this.getJsxVersion(),ub.m)>=0&&!C.isAbsoluteURI(N))N=this.ee.resolve(N);return C.DEFAULT.resolveURI(N);};j.getUriPrefix=function(){return this.ee.toString();};j.relativizeURI=function(s,g){var
ob=jsx3.app.Browser.getLocation();var
Ga=this.Co.relativize(ob.resolve(s));if(Ga.isAbsolute()||g)return Ga;else return jsx3.net.URI.fromParts(ub.n,null,(this.getKey()).replace(ub.o,ub.p),null,ub.d+Ga.getPath(),Ga.getQuery(),Ga.getFragment());};j.toString=function(){return this.vc;};C.register(ub.n,function(h){var
B=((h.getHost()).split(ub.p,2)).join(ub.q);return jsx3.System.getAddin(B);});});jsx3.Class.defineInterface("jsx3.util.EventDispatcher",null,function(c,m){var
ub={a:"*",b:"object",c:"function",d:"string",e:"objHandler, objFunction",f:"{",g:"}, {",h:"}",i:"objEvent"};c.i4=1;c.vR=2;c.Ly=3;c.nW=4;c.dw=5;c.SUBJECT_ALL=ub.a;m.subscribe=function(l,q,d){var
P=typeof q;var
Aa=typeof d;var
La=null;if(P==ub.b||P==ub.c){if(Aa==ub.c){La=[c.i4,q,d];}else if(Aa==ub.d){La=[c.vR,q,d];}else if(P==ub.c)La=[c.dw,q];}else if(P==ub.d)if(Aa==ub.c){La=[c.Ly,q,d];}else if(Aa==ub.d)La=[c.nW,q,d];if(La==null&&P==ub.b&&q.call&&q.apply)La=[c.dw,q];if(La==null)throw new
jsx3.IllegalArgumentException(ub.e,ub.f+typeof q+ub.g+typeof d+ub.h);if(!jsx3.$A.is(l))l=[l];for(var
Fb=0;Fb<l.length;Fb++){var
wa=this.b0();var
da=l[Fb];if(!wa[da])wa[da]=[La];else wa[da].push(La);}};m.unsubscribe=function(q,l){if(!jsx3.$A.is(q))q=[q];for(var
lb=0;lb<q.length;lb++){var
A=(this.b0())[q[lb]];if(A)for(var
Na=0;Na<A.length;Na++)if(A[Na][1]===l)A.splice(Na--
,1);}};m.unsubscribeAll=function(k){if(this._jsxeventreg)delete this._jsxeventreg[k];};m.unsubscribeAllFromAll=function(){this._jsxeventreg={};};m.publish=function(a){if(a.target==null)a.target=this;var
rb=a.subject;if(rb==null)throw new
jsx3.IllegalArgumentException(ub.i,a);var
t=this._jsxeventreg;if(!t)return;var
ya=t[rb];var
ea=t[ub.a];if(!ya&&!ea)return;var
yb=[];if(ya)yb.push.apply(yb,ya);if(ea)yb.push.apply(yb,ea);for(var
db=0;db<yb.length;db++){var
Ua=yb[db];var
H=Ua[0];var
ta=Ua[1];var
sa=Ua[2];if(H==c.i4){sa.call(ta,a);}else if(H==c.vR){ta[sa](a);}else if(H==c.Ly){var
zb=(this.getServer()).getJSX(ta);if(zb)sa.call(zb,a);}else if(H==c.nW){var
zb=(this.getServer()).getJSX(ta);if(zb)zb[sa](a);}else if(H==c.dw){ta.call(null,a);}else{}}return yb.length;};m.getSubscriberCount=function(k){var
db=(this.b0())[k];return db?db.length:0;};m.b0=function(){if(this._jsxeventreg==null)this._jsxeventreg={};return this._jsxeventreg;};});jsx3.util.EventDispatcher.jsxclass.mixin(jsx3);jsx3.EventDispatcher=jsx3.util.EventDispatcher;jsx3.Class.defineClass("jsx3.net.URI",null,null,function(s,f){var
ub={A:"%0",B:/[^a-fA-F0-9]/,a:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",b:"0123456789",c:"_-!.~'()*",d:",;:$&+=",e:"?/[]@",f:"%",g:"^[",h:"][\\-\\.\\+",i:"]*\\:",j:"arguments",k:"@",l:":",m:"",n:"/@",o:"//",p:"?",q:"#",r:"string",s:"/",t:".",u:"..",v:"&",w:"=",x:/(\W)/g,y:"\\$1",z:"]*$"};s.i2=ub.a;s.TZ=ub.b;s.ou=s.i2+s.TZ;s.B4=s.ou+ub.c;s.FQ=ub.d;s.nB=s.FQ+ub.e;s.FJ=ub.f;s._o=new
RegExp(ub.g+s.i2+ub.h+s.i2+ub.i);f._5=null;f.aP=null;f.GH=null;f.fs=null;f.Bq=null;f.h0=null;f.dp=null;f.Fy=null;f.K4=null;f.mB=null;s.fromParts=function(k,p,e,m,o,r,l){var
sb=s.jsxclass.bless();var
wa=arguments;var
B=null,N=null;if(wa.length==3){sb.aP=wa[0];N=s.encode(wa[1],s.B4+s.nB+s.FJ);sb.GH=s.decode(wa[1]);sb.fs=s.decode(wa[2]);}else if(wa.length==7){sb.aP=wa[0];sb.Fy=s.decode(wa[1]);sb.K4=wa[2];sb.mB=wa[3];sb.h0=s.decode(wa[4]);sb.dp=s.decode(wa[5]);sb.fs=s.decode(wa[6]);}else throw new
jsx3.IllegalArgumentException(ub.j,jsx3.Method.argsAsArray(wa));if(sb.Bq==null&&sb.K4!=null){sb.Bq=B=sb.K4;if(sb.Fy){sb.Bq=sb.Fy+ub.k+sb.Bq;B=s.encode(sb.Fy,s.B4+s.FQ+s.FJ)+ub.k+B;}if(sb.mB){sb.Bq=sb.Bq+ub.l+sb.mB;B=B+ub.l+sb.mB;}}if(sb.GH==null){sb.GH=N=ub.m;if(sb.h0){sb.GH=sb.h0;N=s.encode(sb.h0,s.B4+s.FQ+s.FJ+ub.n);}if(sb.Bq!=null){sb.GH=ub.o+sb.Bq+sb.GH;N=ub.o+B+N;}if(sb.dp){sb.GH=sb.GH+ub.p+sb.dp;N=N+ub.p+s.encode(sb.dp,s.B4+s.FQ+s.FJ);}}if(sb._5==null){sb._5=N;if(sb.aP)sb._5=sb.aP+ub.l+sb._5;if(sb.fs!=null)sb._5=sb._5+ub.q+s.encode(sb.fs,s.B4+s.nB+s.FJ);}return sb;};f.init=function(j){if(j==null)j=ub.m;if(typeof j!=ub.r)j=j.toString();this._5=j;var
Ja=j;var
Ua;if(s._o.test(Ja)){var
Bb=RegExp.lastMatch;this.aP=Ja.substring(0,Bb.length-1);Ja=Ja.substring(Bb.length);}if((Ua=Ja.indexOf(ub.q))>=0){this.fs=s.decode(Ja.substring(Ua+1));Ja=Ja.substring(0,Ua);}this.GH=Ja;var
Z=this.aP!=null;var
Ea=Z&&Ja.indexOf(ub.s)!=0;if(!Ea){if(Ja.indexOf(ub.o)==0){Ua=Ja.indexOf(ub.s,2);this.Bq=Ja.substring(2,Ua>=0?Ua:Ja.length);Ja=Ua>=0?Ja.substring(Ua):ub.m;}if((Ua=Ja.indexOf(ub.p))>=0){this.dp=s.decode(Ja.substring(Ua+1));Ja=Ja.substring(0,Ua);}this.h0=s.decode(Ja);var
Ma=this.Bq;if(Ma){if((Ua=Ma.indexOf(ub.k))>=0){this.Fy=s.decode(Ma.substring(0,Ua));Ma=Ma.substring(Ua+1);}if((Ua=Ma.indexOf(ub.l))>=0){this.mB=parseInt(Ma.substring(Ua+1));Ma=Ma.substring(0,Ua);}}this.K4=Ma;}};f.normalize=function(){if(jsx3.util.strEmpty(this.h0))return this;var
La=this.h0.split(ub.s);s.sE(La);var
u=La.join(ub.s);return u==this.h0?this:s.fromParts(this.aP,this.Fy,this.K4,this.mB,u,this.dp,this.fs);};s.sE=function(g){var
Na=g[0]!==ub.m;for(var
Lb=g.length-1;Lb>=0;Lb--)if(g[Lb]==ub.t)g.splice(Lb,1);for(var
Lb=0;Lb<g.length;Lb++)if(Lb>0&&g[Lb]==ub.u&&g[Lb-1]!=ub.u){g.splice(Lb-1,2);Lb=Lb-2;}if(Na&&g[0]!=null&&g[0].indexOf(ub.l)>=0)g.unshift(ub.t);};f.resolve=function(e){e=s.valueOf(e);if(this._5==ub.m)return e;if(e.isAbsolute()||this.isOpaque())return e;if(e.fs&&!e.h0&&!e.aP&&!e.Bq&&!e.dp)return s.fromParts(this.aP,this.Fy,this.K4,this.mB,this.h0,this.dp,e.fs);var
Va=this.aP;var
wb=e.dp;var
ob=e.fs;var
sa=null,Mb=null,ya=null,gb=null;if(e.Bq!=null){sa=e.Fy;Mb=e.K4;ya=e.mB;gb=e.h0;}else{sa=this.Fy;Mb=this.K4;ya=this.mB;if(e.h0.indexOf(ub.s)==0){gb=e.h0;}else{var
U=this.h0.split(ub.s);U.pop();U.push.apply(U,e.h0.split(ub.s));s.sE(U);gb=U.join(ub.s);}}return s.fromParts(Va,sa,Mb,ya,gb,wb,ob);};f.relativize=function(b){b=s.valueOf(b);if(this._5==ub.m)return b;if(this.isOpaque()||b.isOpaque())return b;if(this.aP!=b.aP)return b;var
Hb=this.Bq!=null?this.Bq:ub.m;var
Sa=b.Bq!=null?b.Bq:ub.m;if(Hb!=Sa)return b;var
D=this.h0||ub.m;var
wa=b.h0||ub.m;var
cb=D.split(ub.s);cb.pop();var
C=wa.split(ub.s);var
wb=[];var
X=0;while(X<cb.length&&X<C.length){if(cb[X]!=C[X])break;X++;}var
ea=null;if(X<2&&D.indexOf(ub.s)==0){ea=wa;}else{for(var
Db=X;Db<cb.length;Db++)wb[wb.length]=ub.u;for(var
Db=X;Db<C.length;Db++)wb[wb.length]=C[Db];ea=wb.join(ub.s);}return s.fromParts(null,null,null,null,ea,b.dp,b.fs);};f.getAuthority=function(){return this.Bq;};f.getFragment=function(){return this.fs;};f.getHost=function(){return this.K4;};f.getPath=function(){return this.h0;};f.getPort=function(){return this.mB;};f.getQuery=function(){return this.dp;};f.getQueryParam=function(g){var
u=this.dp;if(u){var
T=0;var
ba=g.length;var
mb=null;while((mb=u.indexOf(g,T))>=0){if(mb==0||u.charAt(mb-1)==ub.v){var
fa=u.charAt(mb+ba);if(fa==ub.v||jsx3.util.strEmpty(fa)){return true;}else if(fa==ub.w){var
Fb=u.indexOf(ub.v,mb+ba+1);return Fb>=0?u.substring(mb+ba+1,Fb):u.substring(mb+ba+1);}}T=mb+ba;}}return null;};f.getQueryParams=function(){var
da={};if(this.dp){var
Ma=this.dp.split(ub.v);for(var
K=0;K<Ma.length;K++){var
u=Ma[K];var
La=u.indexOf(ub.w);if(La>=0){da[u.substring(0,La)]=u.substring(La+1);}else da[u]=true;}}return da;};f.getScheme=function(){return this.aP;};f.getSchemeSpecificPart=function(){return this.GH;};f.getUserInfo=function(){return this.Fy;};f.isAbsolute=function(){return this.aP!=null;};f.isOpaque=function(){return this.aP!=null&&this.GH.indexOf(ub.s)!=0;};f.equals=function(p){if(this===p)return true;if(!(p instanceof jsx3.net.URI))return false;var
Wa=this.aP;var
ga=p.aP;if(Wa==null&&ga!=null||Wa!=null&&ga==null)return false;if(Wa!=null&&Wa.toLowerCase()!=ga.toLowerCase())return false;if(this.fs!=p.fs)return false;if(this.isOpaque()){if(!p.isOpaque())return false;return this.GH==p.GH;}else return this.h0==p.h0&&this.dp==p.dp&&this.Bq==p.Bq;};f.toString=function(){return this._5;};s.encode=function(q,j){if(q==null)return null;if(j==null)j=s.B4;var
sa=new
RegExp(ub.g+j.replace(ub.x,ub.y)+ub.z);if(q.match(sa))return q;var
z=q.length;var
P=new
Array(z);for(var
C=0;C<z;C++){var
nb=q.charAt(C);if(j.indexOf(nb)<0){var
Ca=nb.charCodeAt(0);if(Ca<16){P[C]=ub.A+(Ca.toString(16)).toUpperCase();}else if(Ca<256){P[C]=ub.f+(Ca.toString(16)).toUpperCase();}else P[C]=nb;}else P[C]=nb;}return P.join(ub.m);};s.decode=function(k){if(k==null)return null;if(k.indexOf(ub.f)<0)return k;var
K=k.length;var
Oa=new
Array(K);var
P=0;for(var
ga=0;ga<k.length;ga++){var
aa=k.charAt(ga);if(aa==ub.f){var
Ua=k.substring(ga+1,ga+3);if(Ua.match(ub.B)){Oa[P++
]=aa;}else{Oa[P++
]=String.fromCharCode(parseInt(Ua,16));ga=ga+2;}}else Oa[P++
]=aa;}return Oa.join(ub.m);};s.valueOf=function(b){if(jsx3.util.strEmpty(b))return s.K8;return b instanceof s?b:new
s(b);};s.K8=new
s();});jsx3.Class.defineClass("jsx3.gui.Event",null,null,function(k,a){var
ub={A:": ",B:/\s+/g,C:" ",D:"attaching event listener ",E:" to ",F:".",G:"adding event listener ",H:"setting event handler ",I:" on ",J:"error subscribing to event ",K:"_focusHandler  lost focus:",L:" (",M:")",N:"function",O:"subscribeLoseFocus ",P:"... adding event listener to ",Q:"unsubscribeLoseFocus ",R:"... removing event listener from ",S:"Unsubscribing from event ",T:"Unsubscribing all from event ",U:"Publishing event: ",V:"Handling event: ",W:"detaching event listener ",X:" from ",Y:"removing event listener ",Z:"unsetting event handler ",_:"",a:"beforeunload",aa:"mouse",b:"blur",ba:"key",c:"change",ca:"KeyEvents",d:"click",da:"MouseEvent",e:"dblclick",ea:"KeyEvent",f:"error",fa:"DOMMouseScroll",g:"focus",ga:"onmousewheel",h:"keydown",ha:"@jsx3.gui.Event <empty>",i:"keypress",ia:"@jsx3.gui.Event ",j:"keyup",ja:":",k:"load",l:"mousedown",m:"mousemove",n:"mouseout",o:"mouseover",p:"mouseup",q:"mousewheel",r:"unload",s:"resize",t:"jsx3.util.Logger",u:"registering window ",v:"deregistering window ",w:"Window ",x:" not registered.",y:"on",z:"Subscribing to event "};k.BEFOREUNLOAD=ub.a;k.BLUR=ub.b;k.CHANGE=ub.c;k.CLICK=ub.d;k.DOUBLECLICK=ub.e;k.ERROR=ub.f;k.FOCUS=ub.g;k.KEYDOWN=ub.h;k.KEYPRESS=ub.i;k.KEYUP=ub.j;k.LOAD=ub.k;k.MOUSEDOWN=ub.l;k.MOUSEMOVE=ub.m;k.MOUSEOUT=ub.n;k.MOUSEOVER=ub.o;k.MOUSEUP=ub.p;k.MOUSEWHEEL=ub.q;k.UNLOAD=ub.r;k.RESIZE=ub.s;k.KEY_ALT=18;k.KEY_ARROW_DOWN=40;k.KEY_ARROW_LEFT=37;k.KEY_ARROW_RIGHT=39;k.KEY_ARROW_UP=38;k.KEY_BACKSPACE=8;k.KEY_CONTROL=17;k.KEY_DELETE=46;k.KEY_END=35;k.KEY_ENTER=13;k.KEY_ESCAPE=27;k.KEY_HOME=36;k.KEY_INSERT=45;k.KEY_META=224;k.KEY_PAGE_DOWN=34;k.KEY_PAGE_UP=33;k.KEY_SHIFT=16;k.KEY_SPACE=32;k.KEY_TAB=9;k.KEY_0=48;k.KEY_9=57;k.KEY_A=65;k.KEY_Z=90;k.KEY_NP0=96;k.KEY_NP9=105;k.KEY_NPDIV=111;k.KEY_NPMUL=106;k.KEY_NPSUB=109;k.KEY_NPADD=107;k.KEY_NPDEC=110;k.KEY_F1=112;k.KEY_F15=126;k.cx=[];k.NC=[];k.wP=jsx3.util.EventDispatcher.jsxclass.newInnerClass();k.LS=[];var
y=null;k.tZ=function(){if(k._LOG==null)if(jsx3.Class.forName(ub.t)!=null){y=jsx3.util.Logger;k._LOG=y.getLogger(k.jsxclass.getName());}return k._LOG;};k._registerWindow=function(h){var
Eb=k.tZ();if(Eb!=null&&Eb.isLoggable(5))Eb.debug(ub.u+h.name);k.cx.push(h);k.NC.push({});k.LS.push({});};k._isWindowRegistered=function(d){return jsx3.util.arrIndexOf(k.cx,d)>=0;};k._deregisterWindow=function(s){var
Ea=jsx3.util.arrIndexOf(k.cx,s);if(Ea>=0){var
Ba=k.tZ();if(Ba!=null&&Ba.isLoggable(5))Ba.debug(ub.v+s.name);k.cx.splice(Ea,1);k.NC.splice(Ea,1);k.LS.splice(Ea,1);}else throw new
jsx3.Exception(ub.w+s+ub.x);};k._registerWindow(window);k.subscribe=function(f,d,j){k.wP.subscribe(f,d,j);var
C=ub.y+f;var
pb=k.tZ();if(pb!=null&&pb.isLoggable(5))pb.debug(ub.z+f+ub.A+((d.toString()).substring(0,50)).replace(ub.B,ub.C));var
bb=k.cp(f)?[window]:k.cx;for(var
eb=0;eb<bb.length;eb++)try{var
sb=bb[eb];var
v=k.gG(sb,f);if(v.attachEvent&&k.cW(f)){var
_a=k.LS[eb];if(!_a[f]){if(pb!=null&&pb.isLoggable(5))pb.debug(ub.D+f+ub.E+v+ub.F);v.attachEvent(C,k.Ft);_a[f]=true;}}else if(v.addEventListener&&k.l1(f)){var
_a=k.LS[eb];if(!_a[f]){if(pb!=null&&pb.isLoggable(5))pb.debug(ub.G+f+ub.E+v+ub.F);v.addEventListener(f,k.Ft,false);_a[f]=true;}}else{var
u=k.NC[eb];if(v[C]!=k.Ft){if(pb!=null&&pb.isLoggable(5))pb.debug(ub.H+C+ub.I+v+ub.F);if(v[C]!=null)u[C]=v[C];v[C]=k.Ft;}}}catch(Kb){if(pb!=null&&pb.isLoggable(5))pb.debug(ub.J+f,jsx3.NativeError.wrap(Kb));k._deregisterWindow(sb);eb--;}};k.jY=[];k._q=function(g){var
ob=k.wrap(g);var
Q=ob.srcElement();var
x=k.jY.concat();var
Ya=k.tZ();L2:for(var
_a=0;_a<x.length;_a++){var
Z=x[_a];var
Bb=Z[0];var
eb=Z[1];var
z=Z[2];var
nb=Q;if(eb.containsHtmlElement){if(eb.containsHtmlElement(Q))continue;}else while(nb!=null){if(nb==eb)continue L2;nb=nb.parentNode;}if(Ya!=null&&Ya.isLoggable(5))Ya.debug(ub.K+eb+ub.L+Bb+ub.M);var
na={target:k,event:ob};if(typeof z==ub.N)z.call(Bb,na);else Bb[z](na);}};k.subscribeLoseFocus=function(q,e,d){var
Sa=k.tZ();if(Sa!=null&&Sa.isLoggable(5))Sa.debug(ub.O+q+ub.C+e);k.jY.push([q,e,d]);if(k.jY.length==1){var
ma=e.ownerDocument||e.getDocument();if(Sa!=null&&Sa.isLoggable(5))Sa.debug(ub.P+ma);ma.addEventListener(ub.g,k._q,true);}};k.unsubscribeLoseFocus=function(p){var
fb=k.tZ();if(fb!=null&&fb.isLoggable(5))fb.debug(ub.Q+p);var
wa=null;for(var
Xa=0;Xa<k.jY.length;Xa++)if(k.jY[Xa][0]==p){var
Ra=k.jY[Xa][1];wa=Ra.ownerDocument||Ra.getDocument();k.jY.splice(Xa--
,1);}if(k.jY.length==0&&wa!=null){if(fb!=null&&fb.isLoggable(5))fb.debug(ub.R+wa);wa.removeEventListener(ub.g,k._q,true);}};k.preventSelection=function(n){};k.unsubscribe=function(s,j){var
xa=k.tZ();if(xa!=null&&xa.isLoggable(5))xa.debug(ub.S+s+ub.A+((j.toString()).substring(0,50)).replace(ub.B,ub.C));k.wP.unsubscribe(s,j);if(k.wP.getSubscriberCount(s)==0)k.Fw(s);};k.unsubscribeAll=function(i){var
Eb=k.tZ();if(Eb!=null&&Eb.isLoggable(5))Eb.debug(ub.T+i+ub.F);k.wP.unsubscribeAll(i);k.Fw(i);};k.publish=function(m){var
z={subject:m.getType(),target:k,event:m};k.H6(z);};k.H6=function(c){var
K=ub.y+c.subject.toLowerCase();var
C=k.tZ();if(C!=null&&C.isLoggable(6))C.trace(ub.U+K+ub.F);var
Oa=k.NC[0];if(Oa[K]!=null)Oa[K]();k.wP.publish(c);};k.Ft=function(n){var
Db=new
k(n!=null?n:window.event);var
ja=k.tZ();if(ja!=null&&ja.isLoggable(6))ja.trace(ub.V+Db.getType()+ub.F);var
T={subject:Db.getType(),target:k,event:Db};k.H6(T);if(T.returnValue)return T.returnValue;};k.Fw=function(c){var
ua=ub.y+c;var
db=k.tZ();var
z=k.cp(c)?[window]:k.cx;for(var
Bb=0;Bb<z.length;Bb++)try{var
Z=z[Bb];var
Ra=k.gG(Z,c);if(Ra.attachEvent&&k.cW(c)){var
Q=k.LS[Bb];if(Q[c]){if(db!=null&&db.isLoggable(5))db.debug(ub.W+c+ub.X+Ra);Ra.detachEvent(ua,k.Ft);Q[c]=false;}}else if(Ra.removeEventListener&&k.l1(c)){var
Q=k.LS[Bb];if(Q[c]){if(db!=null&&db.isLoggable(5))db.debug(ub.Y+c+ub.X+Ra+ub.F);Ra.removeEventListener(c,k.Ft,false);Q[c]=false;}}else{var
Sa=k.NC[Bb];if(db!=null&&db.isLoggable(5))db.debug(ub.Z+ua+ub.I+Ra+ub.F);if(Sa[ua]!=null){Ra[ua]=Sa[ua];delete Sa[ua];}else Ra[ua]=null;}}catch(Kb){if(db!=null&&db.isLoggable(5))db.debug(ub.J+c,jsx3.NativeError.wrap(Kb));k._deregisterWindow(Z);Bb--;}};k.gG=function(j,i){return i==ub.a||i==ub.r||i==ub.s?j:j.document;};k.cW=function(c){return c!=ub.a;};k.l1=function(c){return c!=ub.a;};k.cp=function(s){return s==ub.a||s==ub.r;};a.init=function(b,r){this.iv=b;if(r)this._clone=jsx3.clone(b);};a.rj=function(){if(this._clone==null)this._clone=jsx3.clone(this.iv);this._clone._jsxcD=true;};k.wrap=function(i,h){return i instanceof k?i:new
k(i,h);};k.getCurrent=function(n){return window.event?new
k(window.event,n):null;};a.Vu=function(){try{if(this.iv==null)return this._clone;else if(this.iv.currentTarget!=null)return this.iv;}catch(Kb){}this.iv=null;return this._clone;};a.event=function(){return this.Vu();};a.getType=function(){return (this.Vu()).type;};a.srcElement=function(){var
W=this.Vu();return W.target||W.srcElement;};a.toElement=function(){var
gb=this.Vu();return gb.type==ub.n?gb.relatedTarget:gb.target;};a.fromElement=function(){var
Hb=this.Vu();return Hb.type==ub.o?Hb.relatedTarget:Hb.target;};a.isMouseEvent=function(){var
Ka=this.getType()||ub._;return Ka.indexOf(ub.aa)==0||Ka==ub.d||Ka==ub.e;};a.isKeyEvent=function(){return (this.getType()||ub._).indexOf(ub.ba)==0;};a.setCapture=function(i){};a.releaseCapture=function(n){};a.keyCode=function(){var
Bb=this.Vu();return Bb.keyCode;};a.clientX=function(){var
Ya=this.Vu();return Ya?Ya.clientX:Number.NaN;};a.clientY=function(){var
pb=this.Vu();return pb?pb.clientY:Number.NaN;};a.getOffsetX=function(){var
tb=(this.Vu()).target;var
Z=(this.Vu()).clientX;return Z-(jsx3.html.getRelativePosition(tb.ownerDocument.body,tb)).L;};a.getOffsetY=function(){var
pb=(this.Vu()).target;var
Sa=(this.Vu()).clientY;return Sa-(jsx3.html.getRelativePosition(pb.ownerDocument.body,pb)).T;};a.getScreenX=function(){return (this.Vu()).screenX;};a.getScreenY=function(){return (this.Vu()).screenY;};a.getTrueX=function(){return (this.Vu()).clientX;};a.getTrueY=function(){return (this.Vu()).clientY;};a.getWheelDelta=function(){var
v=-1*(this.Vu()).detail/3;return v;};a.shiftKey=function(){var
pb=this.Vu();return pb.shiftKey;};a.ctrlKey=function(){var
Qa=this.Vu();return Qa.ctrlKey;};a.altKey=function(){var
jb=this.Vu();return jb.altKey;};a.metaKey=function(){var
T=this.Vu();return T.metaKey;};a.enterKey=function(){return (this.Vu()).keyCode==13;};a.spaceKey=function(){return (this.Vu()).keyCode==32;};a.tabKey=function(){return (this.Vu()).keyCode==9;};a.rightArrow=function(){return (this.Vu()).keyCode==39;};a.leftArrow=function(){return (this.Vu()).keyCode==37;};a.upArrow=function(){return (this.Vu()).keyCode==38;};a.downArrow=function(){return (this.Vu()).keyCode==40;};a.deleteKey=function(){return (this.Vu()).keyCode==46;};a.backspaceKey=function(){return (this.Vu()).keyCode==8;};a.insertKey=function(){return (this.Vu()).keyCode==45;};a.homeKey=function(){return (this.Vu()).keyCode==36;};a.endKey=function(){return (this.Vu()).keyCode==35;};a.pageUpKey=function(){return (this.Vu()).keyCode==33;};a.pageDownKey=function(){return (this.Vu()).keyCode==34;};a.escapeKey=function(){return (this.Vu()).keyCode==27;};a.exists=function(){return this.Vu()!=null;};a.cancelBubble=function(){var
na=this.Vu();na._jsxC5=true;if(!na._jsxcD)na.stopPropagation();};a.cancelReturn=function(){(this.Vu()).returnValue=false;};a.cancelKey=function(){var
Fb=this.Vu();if(!Fb._jsxcD){Fb.stopPropagation();Fb.preventDefault();}};a.cancelAll=function(){this.cancelBubble();this.cancelKey();this.cancelReturn();};a.leftButton=function(){var
Gb=this.Vu();if(jsx3.app.Browser.macosx&&Gb.ctrlKey)return false;var
Ib=this.getType();if(Ib==ub.l||Ib==ub.p){return Gb.button==0;}else if(Ib==ub.d||Ib==ub.e)return Gb.button==0;return false;};a.rightButton=function(){var
sb=this.Vu();var
Fb=this.getType();if(Fb==ub.l||Fb==ub.p)return sb.button==2||jsx3.app.Browser.macosx&&sb.ctrlKey;else return false;};a.button=function(){var
ca=this.Vu();return ca.button;};a.setReturn=function(h){(this.Vu()).returnValue=h;};a.setKeyCode=function(b){var
va=this.Vu();if(va.charCode==13){var
da=(this.getDocument()).createEvent(ub.ca);da.initKeyEvent(ub.i,true,true,(this.getDocument()).defaultView,va.ctrlKey(),va.altKey(),va.shiftKey(),false,0,b);va.preventDefault();va.target.dispatchEvent(da);}};a.isModifierKey=function(){var
C=this.Vu();return C.keyCode==16||C.keyCode==17||C.keyCode==18||C.keyCode==224;};a.hasModifier=function(i){return !i&&this.shiftKey()||this.ctrlKey()||this.altKey()||this.metaKey();};a.isArrowKey=function(){var
Ra=this.keyCode();return Ra>=37&&Ra<=40;};a.isFunctionKey=function(){var
Aa=this.keyCode();return Aa>=112&&Aa<=126;};a.getAttribute=function(i){return (this.Vu())[i];};a.setAttribute=function(c,l){(this.Vu())[c]=l;};a.removeAttribute=function(s){(this.Vu())[s]=null;};k.dispatchMouseEvent=function(b,q,l){var
Na=document.createEvent(ub.da);Na.initMouseEvent(q,true,true,window,0,0,0,0,0,false,false,false,false,0,b);if(l)for(var ta in l)Na[ta]=l[ta];b.dispatchEvent(Na);};k.dispatchKeyEvent=function(c,s,b,r,m,g,e){var
Ha=document.createEvent(ub.ea);Ha.initMouseEvent(s,true,true,window,0,0,0,0,0,false,m,g,r,0,c);Ha.keyCode=b;if(e)for(var Wa in e)Ha[Wa]=e[Wa];c.dispatchEvent(Ha);};window.addEventListener(ub.fa,function(c){var
oa=c.target||c.srcElement;while(oa!=null&&!c._jsxC5){if(oa.getAttribute){var
A=oa.getAttribute(ub.ga);if(A)jsx3.eval.call(oa,A,{event:c});}oa=oa.parentNode;}},false);a.isFakeOut=function(n){if(this.getType()==ub.n){var
gb=this.toElement();try{while(gb!=null){if(gb==n)return true;gb=gb.parentNode;}}catch(Kb){return false;}}return false;};a.isFakeOver=function(p){if(this.getType()==ub.o){var
xb=this.fromElement();try{while(xb!=null){if(xb==p)return true;xb=xb.parentNode;}}catch(Kb){return false;}}return false;};a.toString=function(){var
lb=this.Vu();if(lb==null)return ub.ha;var
G=[];for(var pb in lb)if(typeof lb[pb]!=ub.N)G[G.length]=pb;G.sort();var
Ya=[ub.ia];for(var
ib=0;ib<G.length;ib++)Ya[Ya.length]=G[ib]+ub.ja+lb[G[ib]]+ub.C;return Ya.join(ub._);};});jsx3.gui.Event.subscribe("unload",jsx3.destroy);jsx3.Class.defineClass("jsx3.app.Browser",null,null,function(a,s){var
ub={a:"win32",b:"linux",c:"macosx",d:"other",e:/[_-]/,f:"_",g:"Win",h:"Linux",i:"Mac OS X"};a.WIN32=ub.a;a.LINUX=ub.b;a.MACOSX=ub.c;a.OTHER=ub.d;a.getLocaleString=function(){var
Eb=window.navigator.language;var
Aa=Eb.split(ub.e);if(Aa.length>0){Aa[0]=Aa[0].toLowerCase();if(Aa.length>1)Aa[1]=Aa[1].toUpperCase();}return Aa.join(ub.f);};a.isTableMoveBroken=function(h){return true;};a.tP=null;a.getStyleClass=function(q){if(a.tP==null){var
wb={};for(var
za=0;za<document.styleSheets.length;za++){var
ba=document.styleSheets[za];try{for(var
gb=0;gb<ba.cssRules.length;gb++){var
fb=ba.cssRules[gb];wb[fb.selectorText]=fb.style;}}catch(Kb){}}a.tP=wb;}return a.tP[q];};a.getLocation=function(){if(a.VF==null)a.VF=new
jsx3.net.URI(window.location.href);return a.VF;};a.getSystem=function(){if(a.Rx==null){var
C=navigator.platform;var
mb=navigator.userAgent;var
R=ub.d;if(C.indexOf(ub.g)==0)R=ub.a;else if(C.indexOf(ub.h)==0)R=ub.b;else if(mb.indexOf(ub.i)!=-1)R=ub.c;a.Rx=R;}return a.Rx;};a[a.getSystem()]=true;});jsx3.Class.defineClass("jsx3.app.Settings",null,null,function(r,i){var
ub={a:"undefined",b:"/data",c:"/record[@jsxid='",d:"']",e:"E0",f:"./record",g:"type",h:"jsxid",i:"true",j:"data",k:"map",l:"./record[@jsxid='",m:"record",n:"null",o:"string",p:"number",q:"boolean",r:"false",s:"object",t:"array",u:"function",v:"idPR02",w:"Cannot persist object of type "};i.init=function(b){this.io=b||jsx3.xml.CDF.newDocument();this.dc=this.io.getRootNode();};i.get=function(q){var
Hb=this.yx(arguments);if(typeof Hb==ub.a){var
ka=this.getNode.apply(this,arguments);if(ka==null)return r.UNDEF;Hb=r.K0(ka);this.PR(Hb,arguments);}return Hb;};i.getNode=function(a){var
ab=this.dc;var
Ba=ub.b;for(var
bb=0;ab&&bb<arguments.length;bb++)Ba=Ba+(ub.c+arguments[bb]+ub.d);return ab.selectSingleNode(Ba);};i.PR=function(b,s){if(s.length==0){this.E0=b;}else{if(!this.E0)this.E0={_jsxa8:true};var
ia=this.E0;for(var
za=0;za<s.length-1;za++){var
Xa=s[za];if(ia[Xa]==null)ia[Xa]={_jsxa8:true};ia=ia[Xa];}ia[s[s.length-1]]=b;}};i.yx=function(h){var
Da=this.E0;for(var
Nb=0;Da&&Nb<h.length;Nb++)Da=Da[h[Nb]];return Da&&Da._jsxa8?r.UNDEF:Da;};i.z2=function(){delete this[ub.e];};r.HM={array:function(q){var
xb=q.selectNodeIterator(ub.f);var
T=[];while(xb.hasNext()){var
ea=xb.next();var
qa=r.HM[ea.getAttribute(ub.g)];T[T.length]=qa?qa(ea):ea.getValue();}return T;},map:function(e){var
gb=e.selectNodeIterator(ub.f);var
ha={};while(gb.hasNext()){var
Z=gb.next();var
Ga=r.HM[Z.getAttribute(ub.g)];ha[Z.getAttribute(ub.h)]=Ga?Ga(Z):Z.getValue();}return ha;},number:function(j){return Number(j.getValue());},"boolean":function(p){return p.getValue()===ub.i;},"null":function(s){return null;},string:function(a){return a.getValue();},eval:function(s){try{return jsx3.eval(s.getValue());}catch(Kb){return null;}}};r.K0=function(e){var
cb=e.getNodeName()==ub.j?ub.k:e.getAttribute(ub.g);var
Mb=r.HM[cb];return Mb?Mb(e):e.getValue();};i.set=function(p,o){var
ja=this.dc;for(var
Wa=0;Wa<arguments.length-2;Wa++){var
E=ja.selectSingleNode(ub.l+arguments[Wa]+ub.d);if(E&&E.getAttribute(ub.g)!=ub.k){ja.removeChild(E);E=null;}if(!E){E=ja.createNode(1,ub.m);E.setAttribute(ub.h,arguments[Wa]);E.setAttribute(ub.g,ub.k);ja.appendChild(E);}ja=E;}r.hK(ja,arguments[arguments.length-2],arguments[arguments.length-1]);this.z2();};i.remove=function(m){var
sb=null;var
H=this.dc;for(var
db=0;H&&db<arguments.length;db++){sb=H;H=H.selectSingleNode(ub.l+arguments[db]+ub.d);}if(H&&sb){sb.removeChild(H);this.z2();}};r.hK=function(c,a,k){var
ob=r.S7(a,c);ob.removeChildren();var
Pa=typeof k;if(k==null||Pa==ub.a){ob.setAttribute(ub.g,ub.n);ob.setValue(null);}else if(Pa==ub.o||Pa==ub.p){ob.setAttribute(ub.g,Pa);ob.setValue(k);}else if(Pa==ub.q){ob.setAttribute(ub.g,ub.q);ob.setValue(k?ub.i:ub.r);}else if(Pa==ub.s){if(jsx3.$A.is(k)){ob.setAttribute(ub.g,ub.t);for(var
M=0;M<k.length;M++)r.hK(ob,M.toString(),k[M]);}else{ob.setAttribute(ub.g,ub.k);for(var Db in k)r.hK(ob,Db,k[Db]);}}else if(Pa==ub.u){}else jsx3.ERROR.doLog(ub.v,ub.w+Pa,5);};r.S7=function(k,m){var
ma=m.selectSingleNode(ub.l+k+ub.d);if(!ma){ma=m.createNode(1,ub.m);ma.setAttribute(ub.h,k);m.appendChild(ma);}return ma;};});jsx3.Settings=jsx3.app.Settings;jsx3.Class.defineClass("jsx3.xml.Entity",null,null,function(m,a){var
ub={a:"xml.wrap_type",b:"xml.clone_tp",c:"xml.err_append",d:"",e:":",f:"@",g:'="',h:'"',i:"xml.str_err",j:"xml.str_empty",k:"object",l:"<foo ",m:"/>",n:"text/xml",o:"jsx3.xml.Template",p:"transformToObject",q:"transform",r:"[",s:"]",t:"undefined",u:" ",v:"3.0.0"};m.TYPEELEMENT=1;m.TYPEATTRIBUTE=2;m.TYPETEXT=3;m.TYPECDATA=4;m.TYPECOMMENT=8;m.eD={1:true,2:true,3:true,4:true,7:true,8:true};a.init=function(p){this.bW=p;this.Nt=p.nodeType;if(!m.eD[this.Nt]){this.Wd(300,jsx3._msg(ub.a,this.Nt));}else if(this._x)this.Wd(0);};a.createNode=function(d,k,n){var
qb=this.Kt();var
C=null;if(n==null)n=null;if(d==2){C=qb.createAttributeNS(n,k);}else if(d==3){C=qb.createTextNode(k);}else if(d==4){C=qb.createCDATASection(k);}else if(d==8){C=qb.createComment(k);}else C=qb.createElementNS(n,k);return new
m(C);};a.cloneNode=function(p){if(this.Nt==1){var
K=this.bW.cloneNode(p);return new
m(K);}else this.Wd(301,jsx3._msg(ub.b,this.Nt));};a.appendChild=function(l){var
Ga=l.bW;var
ra=Ga.ownerDocument!=this.bW.ownerDocument;if(ra)Ga=this.bW.ownerDocument.importNode(Ga,true);if(this.bW!=null&&Ga!=null&&this.Nt==1){this.bW.appendChild(Ga);if(ra&&l.bW.parentNode)l.bW.parentNode.removeChild(l.bW);l.bW=Ga;}else this.Wd(302,jsx3._msg(ub.c,l));return this;};a.insertBefore=function(q,f){if(f==null){if(this.Nt==1){this.appendChild(q);return q;}}else{var
Za=q.bW;var
yb=Za.ownerDocument!=this.bW.ownerDocument;if(yb)Za=this.bW.ownerDocument.importNode(Za,true);if(this.Nt==1&&f.Nt!=2&&q.Nt!=2)if(f.getParent()!=null&&(f.getParent()).equals(this)){var
rb=new
m(this.bW.insertBefore(Za,f.bW));if(yb&&q.bW.parentNode)q.bW.parentNode.removeChild(q.bW);q.bW=Za;return rb;}return null;}};a.replaceNode=function(n,g){var
X=n.bW;var
Lb=X.ownerDocument!=this.bW.ownerDocument;if(Lb)X=this.bW.ownerDocument.importNode(X,true);if(this.Nt==1&&g.Nt==1&&n.Nt==1)if(g.getParent()!=null&&(g.getParent()).equals(this)&&g.getParent()!=null&&(g.getParent()).equals(this)){var
wa=new
m(this.bW.replaceChild(X,g.bW));if(Lb&&n.bW.parentNode)n.bW.parentNode.removeChild(n.bW);n.bW=X;return wa;}return null;};a.setAttribute=function(b,d){if(d!=null)this.bW.setAttribute(b,String(d));else this.removeAttribute(b);return this;};a.getAttribute=function(f){return this.bW?this.bW.getAttribute(f):null;};a.getAttributeNode=function(g){if(this.bW!=null&&this.Nt==1){var
I=this.bW.getAttributeNode(g);if(I!=null)return new
m(I);}};a.setAttributeNode=function(o){var
Ua=o.bW;var
K=Ua.ownerDocument!=this.bW.ownerDocument;if(K){Ua=this.bW.ownerDocument.createAttribute(Ua.nodeName);Ua.nodeValue=o.bW.nodeValue;o.bW=Ua;}this.bW.setAttributeNodeNS(Ua);return this;};a.getAttributes=function(){if(this.bW!=null&&this.Nt==1)return new
m.List(this.bW.attributes);else return null;};a.getAttributeNames=function(){var
_=this.bW.attributes;var
T=new
Array(_.length);for(var
C=0;C<T.length;C++)T[C]=_[C].nodeName;return T;};a.getRootNode=function(){return this.bW?new
m(this.Kt(1)):null;};a.getParent=function(){return this.bW!=this.Kt(1)?new
m(this.bW.parentNode):null;};a.getChildIterator=function(b){return new
m.ChildIterator(this.bW?this.bW.childNodes:[],b);};a.getChildNodes=function(s){if(!this.bW)return new
m.List([]);var
Cb=this.bW.childNodes;var
ma=[];for(var
cb=0;cb<Cb.length;cb++){var
yb=Cb[cb];if(yb.nodeType==1||s&&(yb.nodeType==3||yb.nodeType==4))ma[ma.length]=yb;}return new
m.List(ma);};a.removeChild=function(p){var
la=p.getParent();return la!=null&&la.equals(this)?new
m(this.bW.removeChild(p.bW)):null;};a.removeChildren=function(){var
oa=this.bW.childNodes;for(var
Nb=oa.length-1;Nb>=0;Nb--)this.bW.removeChild(oa[Nb]);};a.removeAttribute=function(j){if(this.Nt==1)this.bW.removeAttribute(j);};a.removeAttributeNode=function(l){this.bW.removeAttributeNode(l.bW);return this;};a.equals=function(f){return f.bW==this.bW;};a.getNodeType=function(){return this.Nt;};a.getNodeName=function(){return this.bW.nodeName;};a.getNamespaceURI=function(){var
lb=this.bW.namespaceURI;if(lb==null)lb=ub.d;return lb;};a.selectSingleNode=function(b,j){if(!this.bW)return null;return this.jl(b,j,0);};a.selectNodes=function(k,s){if(!this.bW)return new
m.List([]);return this.jl(k,s,1);};a.selectNodeIterator=function(s,l){if(!this.bW)return new
m.SelectIterator();return this.jl(s,l,2);};a.getBaseName=function(){var
vb=this.getNodeName();var
ua=vb.indexOf(ub.e);return ua>=0?vb.substring(ua+1):vb;};a.getPrefix=function(){var
ia=this.getNodeName();var
tb=ia.indexOf(ub.e);return tb>=0?ia.substring(0,tb):ub.d;};a.getXML=function(){return this.toString();};a.toString=function(){var
hb=ub.f+(this.getClass()).getName();if(this.bW!=null&&!this.hasError()){if(this.getNodeType()==2){return this.getNodeName()+ub.g+this.getValue()+ub.h;}else return (new
XMLSerializer()).serializeToString(this.bW);}else return this.hasError()?jsx3._msg(ub.i,hb,this.getError()):jsx3._msg(ub.j,hb);};a.getValue=function(){if(this.Nt==1){var
N=new
Array(this.bW.childNodes.length);for(var
wa=0;wa<this.bW.childNodes.length;wa++){var
I=this.bW.childNodes[wa];if(I.nodeType==3||I.nodeType==4)N[wa]=I.nodeValue;else N[wa]=I.textContent;}return N.join(ub.d);}else return this.bW.nodeValue;};a.setValue=function(b){if(b==null)b=ub.d;if(this.Nt==1){this.removeChildren();this.appendChild(this.createNode(3,b));}else this.bW.nodeValue=b;return this;};m.VY=new
XPathEvaluator();m.LH=[XPathResult.FIRST_ORDERED_NODE_TYPE,XPathResult.ORDERED_NODE_ITERATOR_TYPE,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE];a.jl=function(d,h,q){if(typeof h==ub.k)h=jsx3.xml.Document.sc(h);var
Ta=this.bW.ownerDocument;var
pa=Ta.documentElement;var
S=h?m.gs(h,pa):m.g4(Ta)||m.VY.createNSResolver(pa);var
Q=null;try{Q=m.VY.evaluate(d,this.bW,S,m.LH[q],null);}catch(Kb){}if(q==1){var
la=null;var
Lb=[];if(Q)while(la=Q.iterateNext())Lb[Lb.length]=la;return new
m.List(Lb);}else if(q==2){return new
m.SelectIterator(Q);}else return Q&&Q.singleNodeValue?new
m(Q.singleNodeValue):null;};m.g4=function(o){if(!o._jsxoi)if(o._jsxdf)o._jsxoi=m.gs(o._jsxdf);return o._jsxoi;};m.z1={};m.gs=function(e){var
Nb=m.z1[e];if(!Nb){var
ra=(new
DOMParser()).parseFromString(ub.l+e+ub.m,ub.n);Nb=m.z1[e]=m.VY.createNSResolver(ra.documentElement);}return Nb;};a.Kt=function(l){if(l==null){return this.bW.ownerDocument;}else if(l==1){var
da=this.bW.ownerDocument;return da!=null?da.documentElement:null;}else if(l==2)return this.bW.documentElement;};a.getNative=function(){return this.bW;};a.getFirstChild=function(){if(this.Nt==1){var
_=this.bW.firstChild;while(_!=null&&_.nodeType!=1)_=_.nextSibling;if(_!=null)return new
m(_);}return null;};a.getLastChild=function(){if(this.Nt==1){var
u=this.bW.lastChild;while(u!=null&&u.nodeType!=1)u=u.previousSibling;if(u!=null)return new
m(u);}return null;};a.getPreviousSibling=function(){if(this.Nt==1){var
R=this.bW.previousSibling;while(R!=null&&R.nodeType!=1)R=R.previousSibling;if(R!=null)return new
m(R);}return null;};a.getNextSibling=function(){if(this.Nt==1){var
La=this.bW.nextSibling;while(La!=null&&La.nodeType!=1)La=La.nextSibling;if(La!=null)return new
m(La);}return null;};a.transformNode=function(p,d,b){jsx3.require(ub.o);var
y=new
jsx3.xml.Template(p);if(d)y.setParams(d);return y[b?ub.p:ub.q](this);};m.hw=function(){};m.hw.prototype.toString=function(){return ub.r+this.code+ub.s+(typeof this.description!=ub.t?ub.u+this.description:ub.d);};a.Wd=function(q,n){if(this._x==null)this._x=new
m.hw();this._x.code=q;this._x.description=n;};a.getError=function(){if(!this._x)this.Wd(0);return this._x;};a.hasError=function(){return this._x!=null&&this._x.code!=0;};a.getOwnerDocument=function(){return this.bW?new
jsx3.xml.Document(this.Kt()):null;};m.getVersion=function(){return ub.v;};});jsx3.Entity=jsx3.xml.Entity;jsx3.Class.defineClass("jsx3.xml.Entity.List",jsx3.util.List,null,function(d,e){var
ub={a:"Not implemented",b:"[",c:"]"};var
u=jsx3.Exception;e.init=function(i){this.jsxsuper(null,true);this.sl=i;};e.get=function(i){var
Bb=this.sl[i];return Bb!=null?new
jsx3.xml.Entity(Bb):Bb;};var
R=ub.a;e.add=function(){throw new
u(R);};e.addAll=function(){throw new
u(R);};e.set=function(){throw new
u(R);};e.remove=function(){throw new
u(R);};e.removeAt=function(){throw new
u(R);};e.sort=function(){throw new
u(R);};e.slice=function(s,g){return new
d(arguments.length>1?this.sl.slice(s,g):this.sl.slice(s));};e.toString=function(){return ub.b+this.toArray()+ub.c;};e.clone=function(){return new
d(this.sl.concat());};e.toArray=function(){var
Y=this.size();var
Va=new
Array(Y);for(var
N=0;N<Y;N++)Va[N]=this.get(N);return Va;};});jsx3.Class.defineClass("jsx3.xml.Entity.ChildIterator",null,[jsx3.util.Iterator],function(b,f){f.init=function(j,r){this.ox=j;this.dE=0;this.uL=r;this.o6();this.bW=null;};f.next=function(){if(!this._next)return null;if(this.bW){this.bW.init(this._next);}else this.bW=new
jsx3.xml.Entity(this._next);this.o6();return this.bW;};f.hasNext=function(){return this._next!=null;};f.o6=function(){this._next=null;var
Da=this.ox;var
Ab=Da.length;while(this._next==null&&this.dE<Ab){var
Ca=Da[this.dE];if(Ca.nodeType==1||this.uL&&(Ca.nodeType==3||Ca.nodeType==4))this._next=Ca;this.dE++;}};});jsx3.Class.defineClass("jsx3.xml.Entity.SelectIterator",null,[jsx3.util.Iterator],function(m,q){q.init=function(f){this.BA=f;this.sI=0;this.bW=null;};q.next=function(){var
va=this.BA.snapshotItem(this.sI++);if(!va)return null;if(this.bW){this.bW.init(va);}else this.bW=new
jsx3.xml.Entity(va);return this.bW;};q.hasNext=function(){return this.BA&&this.sI<this.BA.snapshotLength;};});jsx3.Collection=jsx3.xml.Entity.List;jsx3.util.Collection=jsx3.Collection;jsx3.Class.defineClass("jsx3.net.Request",null,[jsx3.util.EventDispatcher],function(g,f){var
ub={a:"response",b:"timeout",c:"req_inst",d:"_timeoutto",e:"req.bad_xml",f:"UniversalBrowserRead",g:"req.netsc",h:"req.open",i:"req.err_open",j:"req.err_state",k:"hS",l:"req.err_send",m:"load.async",n:"load.sync",o:" ",p:"3.00.00"};g.STATUS_OK=200;g.STATUS_ERROR=400;g.EVENT_ON_RESPONSE=ub.a;g.EVENT_ON_TIMEOUT=ub.b;g.uV={};f.init=function(d){if(d!=null)g.uV[d]=this;try{this._request=new
XMLHttpRequest();}catch(Kb){throw new
jsx3.Exception(jsx3._msg(ub.c),jsx3.NativeError.wrap(Kb));}};f.abort=function(){if(this._timeoutto){window.clearTimeout(this._timeoutto);delete this[ub.d];}this._request.onreadystatechange=new
Function();this._request.onerror=null;this._request.abort();return this;};f.getAllResponseHeaders=function(){return this._request.getAllResponseHeaders();};f.getResponseHeader=function(c){return this._request.getResponseHeader(c);};f.getStatusText=function(){return this._request.statusText;};f.getStatus=function(){var
va=this.hS!=null?this.hS:this._request.status;return va==0?200:va;};f.getResponseText=function(){return this._request.responseText;};f.getResponseXML=function(){var
ia=new
jsx3.xml.Document();ia.Gn(this);if(!ia.hasError()){return ia;}else{g.m9(2,jsx3._msg(ub.e,this.kC,ia.getError()));return null;}};f.getNative=function(){return this._request;};f.setRequestHeader=function(l,c){this._request.setRequestHeader(l,String(c));return this;};f.getReadyState=function(){return this._request.readyState;};g.open=function(s,e,m,n,b){var
ma=jsx3.net.URI.valueOf(e);var
ab=ma.getScheme();var
ua=g._HANDLERS[ab]||g.jsxclass;return (ua.newInstance()).open(s,ma,m,n,b);};g._HANDLERS={};g.addSchemeHandler=function(d,j){g._HANDLERS[d]=j;};g.getSchemeHandler=function(l){return g._HANDLERS[l];};f.open=function(s,q,m,n,i){this.hS=0;this.F8=Boolean(m);this.Zq=s;this.kC=jsx3.net.URIResolver.DEFAULT.resolveURI(q);try{if(window.netscape&&netscape.security)netscape.security.PrivilegeManager.enablePrivilege(ub.f);}catch(Kb){g.m9(5,jsx3._msg(ub.g,jsx3.NativeError.wrap(Kb)));}try{g.m9(6,jsx3._msg(ub.h,this.kC));this._request.open(s,this.kC.toString(),this.F8,n,i);}catch(Kb){this.hS=400;g.m9(2,jsx3._msg(ub.i,q,jsx3.NativeError.wrap(Kb)));}return this;};g.cancelRequest=function(p){var
lb=g.uV[p];if(lb)lb.abort();};g.getRequest=function(k){return g.uV[k];};f.getURL=function(){return this.kC&&this.kC.toString();};f.setTimeouts=function(n,i,d,l){return this;};f.send=function(e,n){if(this.hS==400)throw new
jsx3.Exception(jsx3._msg(ub.j));var
wb=new
jsx3.util.Timer(g.jsxclass,this.kC);var
Ba=false;try{if(!this.F8)g.INSYNC=true;this._request.send(e);if(this.F8)this.hS=0;else delete this[ub.k];}catch(Kb){this.hS=400;g.m9(2,jsx3._msg(ub.l,this.kC,jsx3.NativeError.wrap(Kb)));Ba=this;}finally{g.INSYNC=false;}if(this.F8){if(Ba||this._request.readyState==4){jsx3.sleep(function(){wb.log(ub.m);this.publish({subject:ub.a});},null,this);}else{var
X=this;this._request.onreadystatechange=function(){if(X._request.readyState==4){wb.log(ub.m);X.WM();}};this._request.onerror=(jsx3.$F(this.s7)).bind(this);if(!isNaN(n)&&n>0)this._timeoutto=window.setTimeout(function(){wb.log(ub.b);X.A9();},n);}}else wb.log(ub.n);return this;};f.A9=function(){delete this[ub.d];this.abort();this.hS=408;this.publish({subject:ub.b});};f.WM=function(){delete this[ub.k];if(this._timeoutto){window.clearTimeout(this._timeoutto);delete this[ub.d];}this._request.onreadystatechange=new
Function();this._request.onerror=null;this.publish({subject:ub.a});};f.s7=function(){try{this.hS=this._request.status;}catch(Kb){this.hS=400;this._request={};}this.publish({subject:ub.a});};f.toString=function(){return this.jsxsuper()+ub.o+this.Zq+ub.o+this.getStatus()+ub.o+this.kC;};g.m9=function(d,l){if(g.KD==null)if(jsx3.util.Logger){g.KD=jsx3.util.Logger.getLogger(g.jsxclass.getName());if(g.KD==null)return;}else return;g.KD.log(d,l);};g.getVersion=function(){return ub.p;};});jsx3.HttpRequest=jsx3.net.Request;jsx3.Class.defineClass("jsx3.xml.Document",jsx3.xml.Entity,[jsx3.util.EventDispatcher],function(e,m){var
ub={A:"xml.unknown",B:"UniversalBrowserRead",C:"1.0",D:"<?xml",E:' version="',F:'"',G:' encoding="',H:' standalone="',I:"yes",J:"no",K:"?>\n",L:"xml",M:"<!-- ",N:" -->",O:"\n",P:"XPath",Q:"xmlns:",R:"='",S:"'",T:"object",U:"([^=]*)=['\"]([^\"^']*)['\"]",V:"g",W:":",X:"http://www.w3.org/XML/1998/namespace",Y:"undefined",Z:"jsx",_:"attribute::* | child::*",a:"response",aa:"3.0.0",b:"error",c:"timeout",d:"http://xsd.tns.tibco.com/gi/cxf/2006",e:"jsx_xmlns",f:/xmlns:([^=]*)=['\"]([^\"^']*)['\"]/g,g:"",h:"xml.parser",i:"MV",j:"GET",k:"*",l:"Y1",m:"content-type",n:/xml|xsl/i,o:"xml.doc_status",p:"xml.timeout",q:"text/xml",r:"parse",s:"0",t:"xml.err_fmt",u:"xml.doc_bad_ex",v:"xml.doc_bad",w:"parsererror",x:/^http:\/\/www\.mozilla\.org\/(.+\/)?parsererror.xml/i,y:/[\n\r]/g,z:" "};var
Ma=jsx3.xml.Entity;e.ON_RESPONSE=ub.a;e.ON_ERROR=ub.b;e.ON_TIMEOUT=ub.c;e.SEARCHABLE_NAMESPACE=ub.d;e.SEARCHABLE_PREFIX=ub.e;e.DU=ub.f;m.init=function(n){var
C=n instanceof Ma;if(!n||C){try{this.MV=window.document.implementation.createDocument(ub.g,ub.g,null);}catch(Kb){this.Wd(101,jsx3._msg(ub.h,jsx3.NativeError.wrap(Kb)));delete this[ub.i];}if(n){this.MV.appendChild((n.getNative()).cloneNode(true));this.jsxsuper(this.MV.documentElement);}}else{this.MV=n;this.jsxsuper(n.documentElement);}};m.load=function(r,f){var
nb=jsx3.net;var
xa=nb.Request;this.kC=r.toString();this.Wd(0);var
Mb=Boolean(this.getAsync());var
E=xa.open(ub.j,r,Mb);if(E.getStatus()!=400){if(Mb)E.subscribe(ub.k,this,ub.l);E.send(null,f);}else if(Mb)jsx3.sleep(function(){this.Gn(E);},null,this);if(!Mb)this.Gn(E);return this;};m.Gn=function(h){var
rb=this.kC;this.H8(h);this.kC=rb;if(this.hasError())this.publish({subject:ub.b});else this.publish({subject:ub.a});};m.H8=function(h){var
ob=h.getStatus();var
da=ob>=200&&ob<400;var
ja=ub.g;if(!da)try{ja=h.getResponseHeader(ub.m);}catch(Kb){}if(da||jsx3.util.strEmpty(ja)||ub.n.test(ja)){this.loadXML(h.getResponseText());}else this.Wd(102,jsx3._msg(ub.o,this.kC,ob));};m.Y1=function(b){var
oa=jsx3.net.Request;var
kb=b.target;var
hb=b.subject;kb.unsubscribe(ub.k,this,ub.l);if(hb==ub.a){this.Gn(kb);}else if(hb==ub.c){this.Wd(111,jsx3._msg(ub.p));this.publish({subject:ub.c});}else e.m9();};m.NY=function(d){Ma.prototype.init.call(this,d);};m.loadXML=function(l){this.kC=null;this.Wd(0);try{var
ta=new
jsx3.util.Timer(e.jsxclass,l!=null?jsx3.util.strTruncate(l,30):ub.g,5);this.MV=(new
DOMParser()).parseFromString(l,ub.q);if(!this.B5(this.MV))this.NY(this.MV.documentElement);ta.log(ub.r);}catch(Kb){this.B5(this.MV,jsx3.NativeError.wrap(Kb));}return this;};m.getSourceURL=function(){return this.kC;};m.B5=function(h,o){if(h!=null){var
Mb=h.parseError;if(Mb!=null&&Mb.errorCode!=ub.s){var
Gb=jsx3._msg(ub.t,Mb.errorCode,Mb.line,Mb.linepos,jsx3.util.strTrim(String(Mb.reason)),jsx3.util.strTruncate(Mb.srcText),Mb.url);this.Wd(Mb.errorCode,Gb);return true;}var
w=h.documentElement;if(w==null){if(o)this.Wd(158,jsx3._msg(ub.u,o));else this.Wd(108,jsx3._msg(ub.v));return true;}else if(w.tagName==ub.w&&w.namespaceURI&&w.namespaceURI.match(ub.x)){this.Wd(109,w.textContent.replace(ub.y,ub.z));return true;}}if(o!=null){this.Wd(110,jsx3._msg(ub.A,jsx3.NativeError.wrap(o)));return true;}return false;};m.getValidateOnParse=function(){return this.MV.validateOnParse;};m.setValidateOnParse=function(g){this.MV.validateOnParse=g;};m.getResolveExternals=function(){return this.MV.resolveExternals;};m.setResolveExternals=function(r){this.MV.resolveExternals=r;};m.cloneDocument=function(){try{netscape.security.PrivilegeManager.enablePrivilege(ub.B);}catch(Kb){}try{var
Pa=new
e(this.MV.cloneNode(true));}catch(Kb){var
Pa=new
e();Pa.loadXML(this.getXML());}return Pa;};m.toString=function(){if(this.MV!=null&&!this.hasError()){return (new
XMLSerializer()).serializeToString(this.MV);}else return this.jsxsuper();};m.getXmlVersion=function(){return this.MV.xmlVersion;};m.getXmlEncoding=function(){return this.MV.xmlEncoding;};m.getXmlStandalone=function(){return this.MV.xmlStandalone;};m.serialize=function(n,c,r){if(n===true)n=this.getXmlVersion()||ub.C;if(c===true)c=this.getXmlEncoding();var
A=n||c||r;if(A){var
nb=ub.D;if(n)nb=nb+(ub.E+n+ub.F);if(c)nb=nb+(ub.G+c+ub.F);if(r!=null)nb=nb+(ub.H+(r?ub.I:ub.J)+ub.F);nb=nb+ub.K;var
Oa=new
Array(this.MV.childNodes.length+1);Oa[0]=nb;for(var
Va=0;Va<this.MV.childNodes.length;Va++){var
E=this.MV.childNodes[Va];if(E.nodeType!=7||E.nodeName!=ub.L){var
W=new
Ma(E);Oa[Va+1]=W.hasError()?ub.M+W+ub.N:W.toString();}}}else{var
Oa=new
Array(this.MV.childNodes.length);for(var
Va=0;Va<this.MV.childNodes.length;Va++){var
E=this.MV.childNodes[Va];var
W=new
Ma(E);Oa[Va]=W.hasError()?ub.M+W+ub.N:W.toString();if(E.nodeType==7||E.nodeName==ub.L)Oa[Va]+=ub.O;}}return Oa.join(ub.g);};m.createDocumentElement=function(o,l){if(l==null)l=null;var
xb=this.MV.createElementNS(l,o);if(this.MV.documentElement!=null)this.MV.replaceChild(xb,this.MV.documentElement);else this.MV.appendChild(xb);this.NY(this.MV.documentElement);return new
jsx3.xml.Entity(xb);};m.createProcessingInstruction=function(d,h){var
Gb=this.MV.createProcessingInstruction(d,h);this.MV.appendChild(Gb);};m.setAsync=function(d){this._jsxPD=d;return this;};m.getAsync=function(l){return Boolean(this._jsxPD);};m.setSelectionLanguage=function(o){return this;};m.getSelectionLanguage=function(){return ub.P;};e.sc=function(c){var
L=[];for(var Ab in c)L[L.length]=ub.Q+c[Ab]+ub.R+Ab+ub.S;return L.join(ub.z);};m.setSelectionNamespaces=function(n){if(typeof n==ub.T)n=e.sc(n);this.MV._jsxdf=n;this.MV._jsxoi=null;return this;};m.getSelectionNamespaces=function(g){return this.MV._jsxdf?this.MV._jsxdf:ub.g;};m.createNamespaceAxis=function(){var
xb=this.getRootNode();var
Jb=xb.toString();var
Mb=ub.g;do{var
hb=new
RegExp(ub.Q+ub.e+Mb+ub.U,ub.V);var
kb=Jb.search(hb);if(kb>=0)Mb=Mb==ub.g?0:Mb+1;}while(kb>=0);this.XK(xb,ub.e+Mb);this.loadXML(this.getXML());return ub.e+Mb;};m.XK=function(h,k){var
pa=(h.cloneNode(false)).getXML();var
sa;while(sa=e.DU.exec(pa))if(RegExp.$1!=k&&RegExp.$1!=ub.L){var
da=h.createNode(2,k+ub.W+RegExp.$1,e.SEARCHABLE_NAMESPACE);da.setValue(RegExp.$2);h.setAttributeNode(da);}else if(RegExp.$1==ub.L)jsx3.log(pa);for(var
t=h.getChildIterator();t.hasNext();)this.XK(t.next(),k);};m.getDeclaredNamespaces=function(s){this._jsxqH={};var
ma=this.getRootNode();if(ma)this.KF(ma,{index:0},s);return this._jsxqH;};m.KF=function(b,j,r){var
O=b.getNamespaceURI();if(O!=ub.g&&O!=ub.X){var
U;if(!this._jsxqH[O]||r&&(U=b.getPrefix())!=ub.g&&typeof r[U]!=ub.Y)if(U){this._jsxqH[O]=U;}else{j.index+=1;this._jsxqH[O]=ub.Z+j.index;}}if(b.getNodeType()==1)for(var
xa=b.selectNodeIterator(ub._);xa.hasNext();){var
ia=xa.next();if(ia.getNodeType()==1||ia.getNodeType()==2)this.KF(ia,j,r);}};m.getNativeDocument=function(){return this.MV;};e.m9=function(k,b){if(e.KD==null)if(jsx3.util.Logger){e.KD=jsx3.util.Logger.getLogger(e.jsxclass.getName());if(e.KD==null)return;}else return;e.KD.log(k,b);};e.getVersion=function(){return ub.aa;};});jsx3.Document=jsx3.xml.Document;jsx3.Class.defineClass("jsx3.xml.Template",null,null,function(p,s){var
ub={a:"temp.init_err",b:"stylesheet",c:"temp.nat_err",d:"temp.root_elm",e:"",f:" => ",g:"temp.empty",h:"transform",i:"temp.temp_err",j:"temp.doc_err",k:"temp.err"};p.DISABLE_OUTPUT_ESCAPING=1;p.s6={};p.supports=function(n){return p.s6[n]||Boolean(0);};s.init=function(e){if(e.hasError())throw new
jsx3.Exception(jsx3._msg(ub.a,e.getError()));if(e.getBaseName()==ub.b){try{this.wQ=new
XSLTProcessor();this.wQ.importStylesheet(e.getNativeDocument());}catch(Kb){this.Wd(202,jsx3._msg(ub.c,jsx3.NativeError.wrap(Kb)));}}else this.Wd(201,jsx3._msg(ub.d));this._src=e.getSourceURL();};s.setParam=function(j,n){if(!this.t7)this.t7=new
jsx3.util.List();if(this.t7.indexOf(j)<0)this.t7.add(j);this.wQ.setParameter(ub.e,j,n!=null?n.toString():ub.e);};s.vH=function(h,d){var
lb=new
jsx3.util.Timer(p.jsxclass,(h instanceof jsx3.xml.Document?h.getSourceURL():ub.e)+ub.f+this);var
H=h instanceof jsx3.xml.Document?h.getNativeDocument():h.getNative();var
ia=this.wQ.transformToDocument(H);var
zb=null;if(ia){zb=d?new
jsx3.xml.Document(ia):(new
XMLSerializer()).serializeToString(ia);}else this.Wd(203,jsx3._msg(ub.g));lb.log(ub.h);return zb;};s.reset=function(){if(this.t7){for(var
rb=this.t7.iterator();rb.hasNext();)this.wQ.removeParameter(ub.e,rb.next());this.t7.clear();}};s.setParams=function(e){for(var va in e)this.setParam(va,e[va]);};s.transform=function(c,i){if(this.hasError())throw new
jsx3.Exception(jsx3._msg(ub.i,this.getError()));if(c.hasError())throw new
jsx3.Exception(jsx3._msg(ub.j,c.getError()));try{return this.vH(c,i);}catch(Kb){this.Wd(204,jsx3._msg(ub.k,jsx3.NativeError.wrap(Kb)));return null;}};s.transformToObject=function(r){return this.transform(r,true);};s.toString=function(){return this._src;};});jsx3.xml.Entity.jsxclass.mixin(jsx3.xml.Template.prototype,true,["getError","hasError","Wd"]);jsx3.Class.defineClass("jsx3.xml.XslDocument",jsx3.xml.Document,null,function(f,s){var
ub={a:"temp.parse",b:"_M"};s.setParam=function(o,q){(this.Ks()).setParam(o,q);};s.setParams=function(b){(this.Ks()).setParams(b);};s.reset=function(){if(this._M)this._M.reset();};s.transform=function(d){return (this.Ks()).transform(d);};s.transformToObject=function(p){return (this.Ks()).transformToObject(p);};s.Ks=function(){if(this._M==null){this._M=new
jsx3.xml.Template(this);if(this._M.hasError())throw new
jsx3.Exception(jsx3._msg(ub.a,this.getSourceURL(),this._M.getError()));}return this._M;};s.load=function(p){delete this[ub.b];return this.jsxsuper(p);};s.loadXML=function(q){delete this[ub.b];return this.jsxsuper(q);};s.hasError=function(){return this.jsxsuper()||this._M!=null&&this._M.hasError();};s.getError=function(){var
ka=null;if(this._M)ka=this._M.getError();if(!ka)ka=this.jsxsuper();return ka;};f.wrap=function(c){return new
f(c.getNativeDocument());};s.cloneDocument=function(){return f.wrap(this.jsxsuper());};s.isMutable=function(){return true;};});jsx3.Class.defineClass("jsx3.xml.Processor",null,null,function(h,d){var
B=jsx3.xml.Template;h.DISABLE_OUTPUT_ESCAPING=1;h.supports=function(r){return B.supports(r);};d.init=function(s,g,n){this.u1=s;this.DL=g;this.t7=n;};d.setXML=function(p){this.u1=p;return this;};d.setXSL=function(s){this.DL=s;return this;};d.setParams=function(e){this.t7=e;return this;};d.transformToObject=function(){return this.transform(true);};d.transform=function(q){var
ca=new
B(this.DL);if(!ca.hasError()){if(this.t7)ca.setParams(this.t7);var
L=ca.transform(this.u1,q);if(!ca.hasError())return L;}var
qa=ca.getError();this.Wd(qa.code,qa.description);return null;};});jsx3.xml.Entity.jsxclass.mixin(jsx3.xml.Processor.prototype,true,["getError","hasError","Wd"]);jsx3.Class.defineClass("jsx3.util.Logger",null,null,function(h,m){var
ub={a:"FATAL",b:"ERROR",c:"WARN",d:"INFO",e:"DEBUG",f:"TRACE",g:"",h:"logr.err_hand",i:" ",j:"(",k:") ",l:":",m:"ERRO01",n:"TIME: ",o:"\n",p:"CODE: ",q:"DESC: "};var
qa=jsx3.Method;var
Ua=jsx3.Exception;h.OFF=0;h.FATAL=1;h.ERROR=2;h.WARN=3;h.INFO=4;h.DEBUG=5;h.TRACE=6;h.qR=1;h.d0=6;h.GLOBAL=null;h.getLogger=function(n){var
Jb=h.Manager.getManager();if(Jb==null)return null;var
fb=Jb.getLogger(n);if(fb==null){fb=new
h(n);Jb.addLogger(fb);}return fb;};h.GZ=[null,ub.a,ub.b,ub.c,ub.d,ub.e,ub.f];h.levelAsString=function(r){return h.GZ[r]||ub.g;};m.c7=null;m.XJ=null;m.y5=null;m.D5=4;m.a2=null;m.fz=true;m._P=null;m.init=function(k){this.c7=k;};m.getName=function(){return this.c7;};m.addHandler=function(n){if(!this.XJ)this.XJ=jsx3.$A();this.XJ.push(n);};m.removeHandler=function(i){if(this.XJ)this.XJ.remove(i);};m.getLevel=function(){return this.y5;};m.getEffectiveLevel=function(){return this.D5;};m.setLevel=function(q){q=Math.max(0,Math.min(h.d0,q));this.y5=q;this.CD();};m.CD=function(){var
pa=null;if(this.y5!=null){pa=this.y5;}else if(this.a2!=null){pa=this.a2.D5;}else pa=m.D5;if(pa!=this.D5){this.D5=pa;if(this._P)for(var
db=0;db<this._P.length;db++)this._P[db].CD();}};m.getParent=function(){return this.a2;};m.setParent=function(j){if(this.a2!=null)this.a2._P.remove(this);this.a2=j;if(this.a2!=null){if(!this.a2._P)this.a2._P=jsx3.$A();this.a2._P.push(this);}this.CD();};m.getUseParentHandlers=function(){return this.fz;};m.setUseParentHandlers=function(j){this.fz=j;};m.RR=function(g){var
hb=this;var
Jb=g.getLevel();while(hb){var
Nb=hb.XJ;if(Nb)for(var
mb=0;mb<Nb.length;mb++){var
K=Nb[mb];if(K.isLoggable(Jb))try{K.handle(g);}catch(Kb){Kb=jsx3.NativeError.wrap(Kb);(h.getLogger(h.jsxclass.getName())).error(jsx3._msg(ub.h,K.getName(),Kb),Kb);}}if(!hb.getUseParentHandlers())break;hb=hb.getParent();}};m.log=function(b,n,j){b=Math.max(b,h.qR);if(this.D5<b)return;var
ia=jsx3.$A.is(j)?j:qa.argsAsArray(arguments,2);var
jb=new
h.Record(n,ia,b,this.getName(),jsx3.lang.getCaller(1),null);this.RR(jb);};m.logError=function(a,o,g){a=Math.max(a,h.qR);if(this.D5<a)return;var
ga=new
h.Record(o,null,a,this.getName(),jsx3.lang.getCaller(1),g);this.RR(ga);};m.logStack=function(s,p,k){s=Math.max(s,h.qR);if(this.D5<s)return;var
T=new
h.Record(p,null,s,this.getName(),jsx3.lang.getStack(k!=null?k:0),null);this.RR(T);};m.isLoggable=function(f){f=Math.max(f,h.qR);return this.D5>=f;};m.fatal=function(j,n){if(n==null||jsx3.$A.is(n))this.log(1,j,n);else if(n instanceof Ua)this.logError(1,j,n);else if(this.D5>=1)this.log(1,j,qa.argsAsArray(arguments,1));};m.error=function(n,j){if(j==null||jsx3.$A.is(j))this.log(2,n,j);else if(j instanceof Ua)this.logError(2,n,j);else if(this.D5>=2)this.log(2,n,qa.argsAsArray(arguments,1));};m.warn=function(p,b){if(b==null||jsx3.$A.is(b))this.log(3,p,b);else if(b instanceof Ua)this.logError(3,p,b);else if(this.D5>=3)this.log(3,p,qa.argsAsArray(arguments,1));};m.info=function(l,g){if(g==null||jsx3.$A.is(g))this.log(4,l,g);else if(g instanceof Ua)this.logError(4,l,g);else if(this.D5>=4)this.log(4,l,qa.argsAsArray(arguments,1));};m.debug=function(d,a){if(a==null||jsx3.$A.is(a))this.log(5,d,a);else if(a instanceof Ua)this.logError(5,d,a);else if(this.D5>=5)this.log(5,d,qa.argsAsArray(arguments,1));};m.trace=function(e,s){if(s==null||jsx3.$A.is(s))this.log(6,e,s);else if(s instanceof Ua)this.logError(6,e,s);else if(this.D5>=6)this.log(6,e,qa.argsAsArray(arguments,1));};m.toString=function(){return this.jsxsuper()+ub.i+this.getName();};h.reset=function(){};h.doLog=function(l,p,e,f){if(e==null)e=4;else if(e<4)e=4;else e=5;if(h.GLOBAL){var
Pa=p!=null?ub.j+l+ub.k+p:l;if(f||f==null)h.GLOBAL.logStack(e,Pa,1);else h.GLOBAL.log(e,Pa);}};h.logError=function(g,i){var
oa=ub.g;for(var fa in g){if(oa)oa=oa+ub.i;oa=oa+(fa+ub.l+g[fa]);}h.doLog(ub.m,oa,i,false);};h.getMinPriority=function(){return 3;};h.getLog=function(){return [];};h.errorToString=function(e){var
nb=ub.g;nb=nb+(ub.n+new
Date(e.timestamp)+ub.o);nb=nb+(ub.p+e.code+ub.o);nb=nb+(ub.q+e.description+ub.o);return nb;};h.toString=function(){return ub.g;};});jsx3.Class.defineClass("jsx3.util.Logger.Manager",null,null,function(o,l){var
ub={A:"logr.bn_setr",B:"/configuration/logger[@name='",C:"useParent",D:"false",E:"./handler-ref",F:"logr.no_hand",G:".",a:"jsx:/../logger.xml",b:"global",c:"jsx_logger_config",d:"logr.err_conf",e:"<configuration/>",f:"[@lazy='true' and @class='",g:"']",h:"/configuration/logger[handler-ref/@name='",i:"name",j:"/configuration/handler",k:"",l:"class",m:"lazy",n:"true",o:"require",p:"level",q:"number",r:"logr.no_class",s:"logger.require",t:"jsx.js",u:"zs",v:"[@require='true']",w:"./property",x:"value",y:"eval",z:"logr.bn_eval"};var
rb=jsx3.Exception;var
Jb=jsx3.util.Logger;o._N=ub.a;o.n6=ub.b;o.P7=null;o.qp=-1;l.initialize=function(j){if(!j){j=new
jsx3.xml.Document();j.load(jsx3.getEnv(ub.c)||o._N);}if(j.hasError()){window.alert(jsx3._msg(ub.d,j.getError(),jsx3.resolveURI(j.getSourceURL())));j.loadXML(ub.e);}this.Rr=j;this.Es();for(var w in this.Nx)this.addLogger(this.Nx[w]);};o.getManager=function(){if(o.P7==null){o.P7=new
o();Jb.GLOBAL=new
Jb(o.n6);o.P7.addLogger(Jb.GLOBAL);}return o.P7;};l.Rr=null;l.Nx=null;l.XJ=null;l.init=function(s){this.Nx={};this.XJ={};};l.FP=function(n){var
R=this.Es(ub.f+n.getName()+ub.g);this.mY(R);};l.mY=function(a){for(var
oa=0;oa<a.length;oa++){var
Eb=a[oa];var
Q=this.getHandler(Eb);var
R=this.Rr.selectNodeIterator(ub.h+Eb+ub.g);while(R.hasNext()){var
Fb=R.next();var
Hb=Fb.getAttribute(ub.i);var
Ha=this.getLogger(Hb);if(Ha!=null)Ha.addHandler(Q);}}};l.Es=function(j){var
fb=[];if(!this.Rr)return fb;var
R=this.Rr.selectNodeIterator(ub.j+(j!=null?j:ub.k));var
Sa=this.zs==null;while(R.hasNext()){var
Ja=R.next();var
Ha=Ja.getAttribute(ub.i);if(this.getHandler(Ha)!=null)continue;var
Mb=Ja.getAttribute(ub.l);var
P=Ja.getAttribute(ub.m)==ub.n;var
D=Ja.getAttribute(ub.o)==ub.n;var
Ia=jsx3.Class.forName(Mb);if(Ia==null&&D){if(this.zs==null)this.zs=[];this.zs.push(Mb);this.XJ[Ha]=o.qp;continue;}if(Ia){var
Fb=Ia.newInstance(Ha);this.tt(Fb,Ja);Fb.onAfterInit();var
gb=Ja.getAttribute(ub.p);if(gb&&typeof Jb[gb]==ub.q)Fb.setLevel(Jb[gb]);this.addHandler(Fb);fb[fb.length]=Ha;}else if(!P&&!D){window.alert(jsx3._msg(ub.r,Mb));}else this.XJ[Ha]=o.qp;}if(Sa&&this.zs!=null){var
Ca=this;var
za=new
jsx3.util.Job(ub.s);za.run=function(){jsx3.sleep(function(){this.o2();},null,Ca);};jsx3.CLASS_LOADER.addJob(za,ub.t);}return fb;};l.o2=function(j){for(var
ja=0;ja<this.zs.length;ja++)jsx3.require(this.zs[ja]);delete this[ub.u];var
w=this.Es(ub.v);this.mY(w);};l.tt=function(p,f){var
Ka=p.getClass();for(var
ab=f.selectNodeIterator(ub.w);ab.hasNext();){var
Za=ab.next();var
ya=Za.getAttribute(ub.i);var
zb=Za.getAttribute(ub.x);var
Hb=Za.getAttribute(ub.y)==ub.n;var
y=Ka.getSetter(ya);if(y!=null){if(Hb)try{zb=isNaN(zb)?p.eval(zb):Number(zb);}catch(Kb){throw new
rb(jsx3._msg(ub.z,ya,zb,p),jsx3.NativeError.wrap(Kb));}y.apply(p,[zb]);}else throw new
rb(jsx3._msg(ub.A,ya,Ka));}};l.addLogger=function(n){var
Ea=n.getName();this.Nx[Ea]=n;if(this.Rr){var
wa=this.Rr.selectSingleNode(ub.B+Ea+ub.g);if(wa!=null){var
db=wa.getAttribute(ub.p);if(db&&typeof Jb[db]==ub.q)n.setLevel(Jb[db]);var
aa=wa.getAttribute(ub.C)!=ub.D;n.setUseParentHandlers(aa);var
N=wa.selectNodeIterator(ub.E);while(N.hasNext()){var
La=N.next();var
Z=La.getAttribute(ub.i);var
ab=this.getHandler(Z);if(ab!=null){n.addHandler(ab);}else if(this.XJ[Z]!=o.qp)throw new
rb(jsx3._msg(ub.F,Ea,Z));}this.tt(n,wa);}}if(Ea!=o.n6){var
qb=Ea.lastIndexOf(ub.G);var
A=qb>=0?Ea.substring(0,qb):o.n6;n.setParent(Jb.getLogger(A));}};l.addHandler=function(n){this.XJ[n.getName()]=n;};l.getLogger=function(m){return this.Nx[m];};l.getHandler=function(a){var
Ca=this.XJ[a];return Ca==o.qp?null:Ca;};l.getHandlerNames=function(){var
Oa=[];for(var v in this.XJ)Oa[Oa.length]=v;return Oa;};});jsx3.Class.defineClass("jsx3.util.Logger.Record",null,null,function(n,k){var
ub={a:"function"};n.lp=1;k.jG=null;k.Hp=null;k.hN=null;k.t7=null;k.D5=null;k.kV=null;k.Lo=null;k._x=null;k.init=function(f,m,j,o,q,d){this.jG=n.lp++;this.Hp=new
Date();this.hN=f;this.t7=m;this.D5=j;this.kV=o;this.Lo=q;this._x=d;};k.getSerial=function(){return this.jG;};k.getDate=function(){return this.Hp;};k.getMessage=function(){return this.hN;};k.getParameters=function(){return this.t7;};k.getLevel=function(){return this.D5;};k.getLoggerName=function(){return this.kV;};k.getFunction=function(){return typeof this.Lo==ub.a?this.Lo:null;};k.getStack=function(){return jsx3.$A.is(this.Lo)?this.Lo:null;};k.getError=function(){return this._x;};});jsx3.Class.defineClass("jsx3.util.Logger.Handler",null,null,function(g,p){var
ub={a:"",b:"objRecord"};var
Ya=jsx3.util.Logger;var
Ib=jsx3.util.Logger.Manager;g.registerHandlerClass=function(c){(Ib.getManager()).FP(c);};p.c7=ub.a;p.D5=null;p.init=function(e){this.c7=e;};p.onAfterInit=function(){};p.getName=function(){return this.c7;};p.getLevel=function(){return this.D5;};p.setLevel=function(q){q=Math.max(0,Math.min(Ya.d0,q));this.D5=q;};p.isLoggable=function(b){return this.D5==null||this.D5>=b;};p.handle=jsx3.Method.newAbstract(ub.b);});jsx3.Class.defineClass("jsx3.util.Logger.MemoryHandler",jsx3.util.Logger.Handler,null,function(c,p){p.uz=null;p.y8=100;p.init=function(f){this.jsxsuper(f);this.uz=[];};p.handle=function(d){this.uz[this.uz.length]=d;if(this.uz.length>this.y8)this.uz.shift();};p.clearBuffer=function(){this.uz=[];};p.getBufferSize=function(){return this.y8;};p.setBufferSize=function(e){this.y8=Math.max(1,e);if(this.uz.length>this.y8)this.uz.splice(0,this.uz.length-this.y8);};p.getRecords=function(h){if(h==null)h=this.uz.length;return this.uz.slice(this.uz.length-h);};});jsx3.Class.defineClass("jsx3.util.Logger.FormatHandler",jsx3.util.Logger.Handler,null,function(m,n){var
ub={a:"%d %t %n (%l) - %M",b:"",c:" ",d:" (",e:") ",f:"\n",g:/\%s/g,h:"{0}",i:/\%n/g,j:"{1}",k:/\%l/g,l:"{2}",m:/\%M/g,n:"{3}",o:/\%f/g,p:"{4}",q:/\%d/g,r:"{5,date,yyyy-MM-dd}",s:/\%t/g,t:"{5,date,HH:mm:ss.SSS}"};n.mt=ub.a;n.mG=ub.b;n.init=function(j){this.jsxsuper(j);};n.format=function(h){var
ib=h.getDate();var
Ea=h.getFunction();var
V=h.getMessage()||ub.b;var
ha=this.os();var
qb=jsx3.util.Logger.levelAsString(h.getLevel());var
T=ha?ha.format(h.getSerial(),h.getLoggerName(),qb,V,Ea!=null?Ea.jsxmethod!=null?Ea.jsxmethod.toString():Ea.toString():ub.b,ib):ib+ub.c+h.getLoggerName()+ub.d+qb+ub.e+V;var
Ua=h.getError();var
lb=h.getStack();if(Ua!=null){T=T+(ub.f+Ua.printStackTrace());}else if(lb!=null)T=T+(ub.f+jsx3.Exception.formatStack(lb));return T;};n.getFormat=function(){return this.mt;};n.setFormat=function(b){this.mt=b;this.e7=null;};n.os=function(){if(this.e7==null&&jsx3.util.MessageFormat){var
ma=this.mt||ub.b;ma=ma.replace(ub.g,ub.h);ma=ma.replace(ub.i,ub.j);ma=ma.replace(ub.k,ub.l);ma=ma.replace(ub.m,ub.n);ma=ma.replace(ub.o,ub.p);ma=ma.replace(ub.q,ub.r);ma=ma.replace(ub.s,ub.t);this.e7=new
jsx3.util.MessageFormat(ma);}return this.e7;};n.getResourceUrls=function(){return this.mG;};n.setResourceUrls=function(g){this.mG=g;};});jsx3.Class.defineClass("jsx3.util.Logger.ConsoleHandler",jsx3.util.Logger.FormatHandler,null,function(a,q){var
ub={a:"error",b:"warn",c:"info",d:"debug"};var
Va=[null,ub.a,ub.a,ub.b,ub.c,ub.d,ub.d];q.handle=function(b){if(window.console){var
kb=Va[b.getLevel()];if(kb)try{console[kb](this.format(b));}catch(Kb){}}};});jsx3.Class.defineClass("jsx3.util.Logger.AlertHandler",jsx3.util.Logger.FormatHandler,null,function(d,i){var
ub={a:"logr.alrt_ctd",b:"logr.alrt_err"};i.eN=5;i.l5=0;i.ZK=false;i.handle=function(f){if(this.ZK)return;this.l5++;try{if(this.eN>0&&this.l5%this.eN==0)if(!window.confirm(jsx3._msg(ub.a,this.getName()))){this.ZK=true;return;}window.alert(this.format(f));}catch(Kb){window.alert(jsx3._msg(ub.b,jsx3.NativeError.wrap(Kb)));}};i.getConfirmInterval=function(){return this.eN;};i.setConfirmInterval=function(k){this.eN=k;};});jsx3.ERROR=jsx3.util.Logger;jsx3.Class.defineClass("jsx3.util.Locale",null,null,function(b,j){var
ub={a:"",b:"en",c:"US",d:"GB",e:"string.lang.",f:"string.terr.",g:"format.locale.displayname",h:"_",i:/[\-_]/};j.init=function(a,d){this.vt=a?a.toLowerCase():ub.a;this.AS=d?d.toUpperCase():ub.a;};b.ENGLISH=new
b(ub.b);b.US=new
b(ub.b,ub.c);b.UK=new
b(ub.b,ub.d);j.getLanguage=function(){return this.vt;};j.getCountry=function(){return this.AS;};j.getDisplayLanguage=function(g){return (jsx3.System.getLocaleProperties(g)).get(ub.e+this.vt)||ub.a;};j.getDisplayCountry=function(q){return (jsx3.System.getLocaleProperties(q)).get(ub.f+this.AS)||ub.a;};j.getDisplayName=function(o){var
B=this.getDisplayLanguage(o);var
ka=this.getDisplayCountry(o);if(!B)return ka;if(!ka)return B;var
na=(jsx3.System.getLocaleProperties(o)).get(ub.g);return (new
jsx3.util.MessageFormat(na)).format(B,ka);};j.getSearchPath=function(){var
K=[this];if(this.AS!=ub.a||this.vt!=ub.a){if(this.AS!=ub.a&&this.vt!=ub.a)K.push(new
b(this.vt));K.push(new
b(ub.a));}return K;};j.equals=function(a){return this===a||a instanceof b&&a.vt==this.vt&&a.AS==this.AS;};j.toString=function(){if(this.AS)return this.vt+ub.h+this.AS;else return this.vt;};b.valueOf=function(r){var
_a=r.split(ub.i);return new
b(_a[0],_a[1]);};});jsx3.Class.defineClass("jsx3.util.NumberFormat",null,null,function(h,o){var
ub={A:";",B:"nmfmt.numpt",C:",",D:"nmfmt.gpdec",E:"#",F:"\u00A4",G:"%",H:"\u2030",I:"-",a:".integer",b:"",c:".currency",d:".percent",e:"format.number",f:"._instance",g:"number.NaN",h:"number",i:"number.minus",j:"number.infinity",k:"number.zero",l:/\-?(\d+(\.\d*)?|\d*\.\d+)([eE]\-?\d+)?/,m:"number.percent",n:"number.permille",o:"number.currency",p:".",q:"number.currency.grouping",r:"number.grouping",s:"number.currency.decimal",t:"number.decimal",u:"unshift",v:"push",w:"0",x:"0#,.",y:"'",z:"nmfmt.sq"};h.NUMBER=1;h.INTEGER=2;h.CURRENCY=3;h.getInstance=function(e,l){switch(e){case 2:return h.getIntegerInstance(l);case 3:return h.getCurrencyInstance(l);default:return h.getNumberInstance(l);}};h.getIntegerInstance=function(n){return h.DT(n,ub.a);};h.getNumberInstance=function(g){return h.DT(g,ub.b);};h.getCurrencyInstance=function(p){return h.DT(p,ub.c);};h.getPercentInstance=function(s){return h.DT(s,ub.d);};h.DT=function(a,r){var
Hb=h.iK(a);var
_=ub.e+r+ub.f;var
aa=Hb.get(_);if(!Hb.containsKey(_)||aa==null){var
H=Hb.get(ub.e+r);aa=new
h(H,a);Hb.set(_,aa);}return aa;};o.k5=0;o.gV=ub.b;o.yq=ub.b;o.vw=null;o.fB=null;o.ky=false;o.kG=Number.MAX_VALUE;o.U8=0;o.fM=0;o.bz=0;o.pM=1;o.XH=false;o.init=function(d,l){this.mt=d;this.IB=l||jsx3.System.getLocale();this.xI();};o.getLocale=function(){return this.IB;};o.setLocale=function(q){this.IB=q;this.xI();};o.format=function(r){var
v=this.iK();if(isNaN(r)){return v.get(ub.g);}else{if(typeof r!=ub.h)r=Number(r);var
W=r>=0;var
wa=W?this.gV:this.vw!=null?this.vw:v.get(ub.i)+this.gV;var
Db=W?this.yq:this.fB!=null?this.fB:this.yq;var
x=null;if(!isFinite(r)){x=v.get(ub.j);}else{r=this.pM*Math.abs(r);var
Qa=h.cV(r);var
_a=Qa[0];var
Va=Qa[1];if(this.fM<_a.length-Va){var
Fa=_a.splice(Va+this.fM,_a.length-Va-this.fM);if(h.Ou(_a,Fa))Va++;}var
E=Va>=0?_a.slice(0,Va):_a;var
La=Va>=0?_a.slice(Va):[];h.y2(E,this.kG,this.U8,true);h.y2(La,this.fM,this.bz,false);var
mb=v.get(ub.k);h.WX(E,mb);h.WX(La,mb);if(this.k5>0){var
Ga=this.LN(this.XH);for(var
gb=E.length-this.k5;gb>=1;gb=gb-this.k5)E.splice(gb,0,Ga);}x=E.join(ub.b);if(this.ky||La.length>0)x=x+(this.At(this.XH)+La.join(ub.b));}return wa+x+Db;}};h.Jt=ub.l;o.parse=function(p){var
Ba=this.iK();if(p==Ba.get(ub.g))return NaN;var
ob=false;var
R=1;var
ta=false;var
tb=Ba.get(ub.i);var
W=this.vw,Ka=this.fB;if(W||Ka){W=this.qL(W,Ba);Ka=this.qL(Ka,Ba);if(p.indexOf(W)==0&&p.lastIndexOf(Ka)==p.length-Ka.length){ob=true;p=W.replace(tb,ub.b)+p.substring(W.length,p.length-Ka.length)+Ka.replace(tb,ub.b);}}var
xb=p.indexOf(tb);if(xb==0){ob=true;p=p.substring(0,xb)+p.substring(xb+tb.length);}var
u=Ba.get(ub.m);var
ua=p.indexOf(u);if(ua>=0){R=100;p=p.substring(0,ua)+p.substring(ua+u.length);}else{var
sb=Ba.get(ub.n);ua=p.indexOf(sb);if(ua>=0){R=1000;p=p.substring(0,ua)+p.substring(ua+sb.length);}}var
v=Ba.get(ub.o);var
F=p.indexOf(v);if(F>=0){ta=true;p=p.substring(0,F)+p.substring(F+v.length);}if(p==Ba.get(ub.j))return ob?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY;var
ab=this.LN(ta);if(ab){var
K=-1;while((K=p.indexOf(ab))>=0)p=p.substring(0,K)+p.substring(K+ab.length);}var
P=this.At(ta);if(P!=ub.p){var
kb=p.indexOf(P);if(kb>=0)p=(p=p.substring(0,kb)+ub.p+p.substring(kb+ab.length));}if(!h.Jt.exec(p))return NaN;return (ob?-1:1)*Number(RegExp.lastMatch)/R;};o.LN=function(m){var
da=this.iK();return m?da.get(ub.q)||da.get(ub.r):da.get(ub.r);};o.At=function(g){var
Jb=this.iK();return g?Jb.get(ub.s)||Jb.get(ub.t):Jb.get(ub.t);};h.MW="0".charCodeAt(0);h.mE=".".charCodeAt(0);h.cV=function(g){if(g<0)throw new
jsx3.Exception();var
Da=Math.log(g)*jsx3.LOG10E;if(!isFinite(Da)){if(g==0)return [[0],0];throw new
jsx3.Exception();}var
Ga=g.toString();var
Na=[];var
V=null;for(var
yb=0;yb<Ga.length;yb++){var
oa=Ga.charCodeAt(yb);var
Hb=oa-h.MW;if(Hb>=0&&Hb<=9){Na[Na.length]=Hb;}else if(oa==h.mE){}else break;}if(Da>=0){var
M=Math.floor(Da+1);if(Na.length>M){V=M;}else{if(Na.length<M)for(var
yb=Na.length;yb<M;yb++)Na[Na.length]=0;V=Na.length;}}else{var
Oa=Math.ceil(-1-Da);var
ab=Na.indexOf(0);Na.splice(0,ab+1);for(var
yb=0;yb<Oa;yb++)if(Na[yb]!=0)Na.splice(yb,0,0);V=0;}return [Na,V];};h.y2=function(s,b,k,a){if(s.length>b){if(a){s.splice(0,s.length-b);}else s.splice(b,s.length-b);}else if(s.length<k){var
Ha=a?ub.u:ub.v;for(var
S=s.length;S<k;S++)s[Ha](ub.w);}};h.Ou=function(a,s){if(s[0]>=5)for(var
x=a.length-1;x>=0;x--){var
Lb=a[x]+1;if(Lb>=10){a[x]=0;if(x==0){a.unshift(1);return true;}}else{a[x]=Lb;break;}}return false;};h.WX=function(a,p){var
F=p.charCodeAt(0);for(var
Ha=0;Ha<a.length;Ha++)a[Ha]=String.fromCharCode(a[Ha]+F);};h.TD=ub.x;o.xI=function(){var
zb=ub.y;var
N=this.iK();var
u=this.mt;var
Pa=0;var
ma=u.length;var
Fa=1;var
wb=null,pb=null;while(Pa<ma){var
Ia=u.charAt(Pa);if(Fa==1){if(Ia==zb){var
lb=u.indexOf(zb,Pa+1);if(lb==Pa+1){this.gV+=zb;Pa=Pa+2;}else if(lb>=0){this.gV+=u.substring(Pa+1,lb);Pa=lb+1;}else throw new
jsx3.Exception(jsx3._msg(ub.z,Pa,this));}else if(h.TD.indexOf(Ia)>=0){wb=Pa;Fa++;}else{this.gV+=this.m7(Ia,N);Pa++;}}else if(Fa==2){if(h.TD.indexOf(Ia)>=0){Pa++;}else{pb=Pa;Fa++;}}else if(Fa==3){if(Ia==zb){var
lb=u.indexOf(zb,Pa+1);if(lb==Pa+1){this.yq+=zb;Pa=Pa+2;}else if(lb>=0){this.yq+=u.substring(Pa+1,lb);Pa=lb+1;}else throw new
jsx3.Exception(jsx3._msg(ub.z,Pa,this));}else if(Ia==ub.A){this.vw=ub.b;this.fB=ub.b;Fa++;}else this.yq+=this.m7(Ia,N);Pa++;}else if(Fa==4){if(Ia==zb){var
lb=u.indexOf(zb,Pa+1);if(lb==Pa+1){this.vw+=zb;Pa=Pa+2;}else if(lb>=0){this.vw+=u.substring(Pa+1,lb);Pa=lb+1;}else throw new
jsx3.Exception(jsx3._msg(ub.z,Pa,this));}else if(h.TD.indexOf(Ia)>=0){Fa++;}else{this.vw+=this.m7(Ia,N);Pa++;}}else if(Fa==5){if(h.TD.indexOf(Ia)>=0){Pa++;}else Fa++;}else if(Fa==6){if(Ia==zb){var
lb=u.indexOf(zb,Pa+1);if(lb==Pa+1){this.fB+=zb;Pa=Pa+2;}else if(lb>=0){this.fB+=u.substring(Pa+1,lb);Pa=lb+1;}else throw new
jsx3.Exception(jsx3._msg(ub.z,Pa,this));}else this.fB+=this.m7(Ia,N);Pa++;}}if(pb==null)pb=ma;if(wb==null)throw new
jsx3.Exception(jsx3._msg(ub.B,u));this.Uu(u.substring(wb,pb));};o.Uu=function(j){var
Va=j.indexOf(ub.p);if(Va<0)Va=j.length;else if(Va==j.length-1)this.ky=true;var
H=j.lastIndexOf(ub.C);if(H>=0){var
Pa=Va-H-1;if(Pa<1)throw new
jsx3.Exception(jsx3._msg(ub.D,j));this.k5=Pa;}for(var
C=0;C<Va;C++)if(j.charAt(C)==ub.w)this.U8++;for(var
C=Va+1;C<j.length;C++)if(j.charAt(C)==ub.w){this.bz++;this.fM++;}else if(j.charAt(C)==ub.E)this.fM++;};h.iK=function(l){return jsx3.System.getLocaleProperties(l);};o.iK=function(){return h.iK(this.IB);};o.qL=function(d,i){var
x=d.split(ub.b);for(var
Ta=0;Ta<x.length;Ta++)x[Ta]=this.m7(x[Ta],i);return x.join(ub.b);};o.m7=function(b,l){if(b==ub.F){this.XH=true;return l.get(ub.o);}else if(b==ub.G){this.pM=100;return l.get(ub.m);}else if(b==ub.H){this.pM=1000;return l.get(ub.n);}else if(b==ub.I){return l.get(ub.i);}else return b;};o.toString=function(){return this.mt;};});jsx3.Class.defineClass("jsx3.util.DateFormat",null,null,function(r,e){var
ub={A:"m",B:"s",C:"S",D:"gmt",E:"string",F:"M",G:"E",H:"a",I:"x",J:"'",K:/[a-zA-Z']/g,L:"dtfmt.sq",M:"dtfmt.token",N:"objDate",O:"dtfmt.parse",P:"dtfmt.inv",a:"short",b:"medium",c:"long",d:"full",e:"format.date.",f:"intType",g:"format.time.",h:"intDateType",i:"intTimeType",j:"format.datetime",k:"date.era",l:"date.era.long",m:"date.day.narrow",n:"date.day.abbrev",o:"date.day",p:"time.ampm",q:"GMT",r:":",s:"",t:"date.month.abbrev",u:"date.month",v:"-",w:"+",x:"0",y:"y",z:"d"};r.SHORT=1;r.MEDIUM=2;r.LONG=3;r.FULL=4;r.LX=2;r.LU=[null,ub.a,ub.b,ub.c,ub.d];r.getDateInstance=function(k,f){var
w=(jsx3.System.getLocaleProperties(f)).get(ub.e+r.LU[k||r.LX]);if(w==null)throw new
jsx3.IllegalArgumentException(ub.f,k);return new
r(w,f);};r.getTimeInstance=function(s,q){var
lb=(jsx3.System.getLocaleProperties(q)).get(ub.g+r.LU[s||r.LX]);if(lb==null)throw new
jsx3.IllegalArgumentException(ub.f,s);return new
r(lb,q);};r.getDateTimeInstance=function(o,f,n){var
gb=jsx3.System.getLocaleProperties(n);var
Na=gb.get(ub.e+r.LU[o||r.LX]);var
qb=gb.get(ub.g+r.LU[f||r.LX]);if(Na==null)throw new
jsx3.IllegalArgumentException(ub.h,o);if(qb==null)throw new
jsx3.IllegalArgumentException(ub.i,f);var
cb=new
jsx3.util.MessageFormat(gb.get(ub.j));return new
r(cb.format(qb,Na),n);};r.tN={G:function(b,m,s){var
wa=b.getFullYear()<1;return r.eU((s.pu(m<4?ub.k:ub.l))[wa?0:1]);},y:function(l,d,j){return r.V5(l.getFullYear(),d);},M:function(a,l,k){return r.YV(k,a.getMonth(),l);},d:function(q,i,o){return r.ZC(q.getDate(),i);},E:function(f,q,d){return r.eU((d.pu(q<3?ub.m:q<4?ub.n:ub.o))[f.getDay()]);},H:function(g,p,c){return r.ZC(g.getHours(),p);},h:function(d,o,b){return r.ZC(d.getHours()%12||Number(12),o);},m:function(l,d,j){return r.ZC(l.getMinutes(),d);},s:function(i,a,g){return r.ZC(i.getSeconds(),a);},S:function(h,s,f){return r.ZC(h.getMilliseconds(),s);},a:function(l,p,c){return r.eU((c.pu(ub.p))[Math.floor(l.getHours()/12)]);},z:function(m,n,k){var
Ia=r.m2(m,k);return ub.q+Ia[0]+ub.r+Ia[1];},Z:function(j,b,h){var
_=r.m2(j,h);return _[0]+_[1];}};r.V5=function(q,p){if(p==2){var
Xa=ub.s+q;return Xa.substring(Xa.length-2);}else{if(q<1)q=1-q;return r.ZC(q,p);}};r.ZC=function(a,m){var
H=a.toString();while(H.length<m)H="0000000000".substring(0,m-H.length)+H;return H;};r.eU=function(d,j){if(j==null||j>=4||d.length<=j)return d;else return d.substring(0,j);};r.YV=function(q,d,i){if(i<=2)return r.ZC(d+1,i);else return r.eU((q.pu(i<4?ub.t:ub.u))[d],i);};r.m2=function(b,a){var
V=a.getTimeZoneOffset(b);var
fa=V<0?ub.v:ub.w;V=Math.abs(V);var
L=(Math.floor(V/60)).toString();var
tb=(Math.floor(V%60)).toString();if(L.length<2)L=ub.x+L;if(tb.length<2)tb=ub.x+tb;return [fa+L,tb];};r.No={G:function(o,s,c,g,m,k,n){var
S=r.AZ(s,c,[o.pu(ub.k),o.pu(ub.l)],g,false,k);var
u=S[0],D=S[1];if(u>=0){n.bc=u==0;return D;}else return -1;},y:function(i,f,p,a,g,d,k){if(a<=2){var
Pa=r.w7(f,p,a,null,d);var
Ra=Number(Pa);if(!isNaN(Ra)){if(Pa.length==2){var
eb=new
Date();var
Ib=eb.getFullYear();var
V=100*Math.floor(Ib/100)+Ra;if(V>=Ib+20){V=V-100;}else if(V<Ib-80)V=V+100;Ra=V;}k.y=Ra;return Pa.length;}else return -1;}else{var
aa=r.w7(f,p,a,null,d);return r.KN(aa,ub.y,k);}},M:function(q,p,f,i,o,m,c){if(i<=2){var
V=r.w7(p,f,i,2,m);var
bb=Number(V);if(!isNaN(bb)){c.M=bb-1;return V.length;}else return -1;}else{var
_a=r.AZ(p,f,[q.pu(ub.t),q.pu(ub.u)],i,false,m);var
Ib=_a[0],fa=_a[1];if(Ib>=0){c.M=Ib;return fa;}else return -1;}},d:function(n,a,b,f,l,j,o){var
aa=r.w7(a,b,f,2,j);return r.KN(aa,ub.z,o);},E:function(q,p,f,i,o,m,c){var
Eb=r.AZ(p,f,[q.pu(ub.m),q.pu(ub.o),q.pu(ub.n)],i,false,m);var
w=Eb[0],ha=Eb[1];if(w>=0){return ha;}else return 0;},H:function(s,o,g,k,q,j,a){var
jb=r.w7(o,g,k,2,j);var
Mb=Number(jb);if(!isNaN(Mb)){a.hours24=Mb;return jb.length;}else return -1;},h:function(h,g,o,s,f,d,l){var
Ua=r.w7(g,o,s,2,d);var
ha=Number(Ua);if(!isNaN(ha)){l.hours12=ha;return Ua.length;}else return -1;},m:function(h,g,o,s,f,d,l){var
E=r.w7(g,o,s,2,d);return r.KN(E,ub.A,l);},s:function(s,o,g,k,q,j,a){var
bb=r.w7(o,g,k,2,j);return r.KN(bb,ub.B,a);},S:function(a,n,h,l,o,p,s){var
E=r.w7(n,h,l,3,p);return r.KN(E,ub.C,s);},a:function(j,a,q,b,h,f,m){var
zb=r.OX(a,q,j.pu(ub.p),b,false,f);var
Ta=zb[0],Bb=zb[1];if(Ta>=0){m.pm=Ta==1;return Bb;}else return -1;},z:function(f,i,m,q,d,b,n){var
Ca=i.substring(m,m+3);var
sa=i.charAt(m+3);var
Lb=Number(i.substring(m+4,m+6));var
aa=Number(i.substring(m+7,m+9));if(Ca.toLowerCase()==ub.D&&(sa==ub.w||sa==ub.v)&&!isNaN(Lb)&&!isNaN(aa)){var
V=60*Lb+aa;if(sa==ub.v)V=V*-1;n.timezone=V;return 9;}else return -1;},Z:function(d,k,p,o,b,s,f){var
J=k.charAt(p);var
zb=Number(k.substring(p+1,p+3));var
xa=Number(k.substring(p+3,p+5));if((J==ub.w||J==ub.v)&&!isNaN(zb)&&!isNaN(xa)){var
ia=60*zb+xa;if(J==ub.v)ia=ia*-1;f.timezone=ia;return 5;}else return -1;}};r.PD=function(a,b,j){if(a.indexOf(j,b)==b)return j.length;else return -1;};r.w7=function(g,o,b,p,m){var
O=m==null||typeof m==ub.E&&!r.EV(m,0);if(jsx3.$A.is(m))O=O||m[0]==ub.F&&m[1]>2||m[0]==ub.G||m[0]==ub.H;if(O){var
Qa=o;while(r.EV(g,Qa))Qa++;return g.substring(o,Qa);}else{for(var
D=0;D<b;D++)if(!r.EV(g,o+D))return ub.I;return g.substring(o,o+b);}};r.AZ=function(g,o,m,s,n,a){var
H=[];for(var
Ab=0;Ab<m.length;Ab++)H.push.apply(H,m[Ab]);var
hb=r.OX(g,o,H,s,n,a);hb[0]=hb[0]%m[0].length;return hb;};r.OX=function(l,j,k,n,s,h){var
ha=-1;var
Jb=0;if(!s)l=l.toLowerCase();for(var
hb=0;hb<k.length;hb++){var
U=0;var
gb=s?k[hb]:k[hb].toLowerCase();while(l.length>U&&gb.length>U&&l.charAt(j+U)==gb.charAt(U))U++;if(U>Jb){Jb=U;ha=hb;}}return [ha,Jb];};r.KN=function(g,p,n){var
rb=Number(g);if(!isNaN(rb)){n[p]=rb;return g.length;}else return -1;};r.EV=function(a,k){var
_a=a.charCodeAt(k);return _a>=48&&_a<=57;};e.init=function(k,o){this.mt=k;this.sC=null;this.IB=o||jsx3.System.getLocale();this.Jy();};e.getLocale=function(){return this.IB;};e.setLocale=function(q){this.IB=q;};e.getTimeZoneOffset=function(b){return this.sC!=null?this.sC:-1*(b||new
Date()).getTimezoneOffset();};e.setTimeZoneOffset=function(n){this.sC=n;};e.pu=function(j){return (jsx3.System.getLocaleProperties(this.IB)).get(j);};e.Jy=function(){var
ja=ub.J;var
Gb=[];this.Cx=Gb;var
E=this.mt;var
ib=E.length;var
aa=0;var
t=[];var
O=ub.K;while(aa<ib){var
L=E.charAt(aa);if(L==ja){var
ea=E.indexOf(ja,aa+1);if(ea==aa+1){t[t.length]=ja;aa=aa+2;}else if(ea>=0){t[t.length]=E.substring(aa+1,ea);aa=ea+1;}else throw new
jsx3.Exception(jsx3._msg(ub.L,aa,this));}else if(r.tN[L]){var
Ib=1;while(E.charAt(aa+Ib)==L)Ib++;var
Bb=t.join(ub.s);if(Bb.length>0){Gb[Gb.length]=Bb;t.splice(0,t.length);}Gb[Gb.length]=[L,Ib];aa=aa+Ib;}else if(L.match(O)){throw new
jsx3.Exception(jsx3._msg(ub.M,aa,E));}else{O.lastIndex=aa+1;if(O.exec(E)){t[t.length]=E.substring(aa,O.lastIndex-1);aa=O.lastIndex-1;}else{t[t.length]=E.substring(aa);break;}}}var
Bb=t.join(ub.s);if(Bb.length>0){Gb[Gb.length]=Bb;t.splice(0,t.length);}};e.format=function(f){if(!(f instanceof Date)){if(!isNaN(f)){f=new
Date(Number(f));}else f=new
Date(f);if(isNaN(f))throw new
jsx3.IllegalArgumentException(ub.N,f);}var
da=new
Array(this.Cx.length);var
pb=new
Date();pb.setTime(f.getTime()+(this.getTimeZoneOffset(f)+f.getTimezoneOffset())*1000*60);for(var
B=0;B<this.Cx.length;B++){var
La=this.Cx[B];if(jsx3.$A.is(La)){var
Ia=La[0];var
jb=La[1];da[B]=r.tN[Ia](pb,jb,this);}else da[B]=La;}return da.join(ub.s);};e.parse=function(q){var
ia=new
Date();ia.setTime(0);var
B=0;var
pa={};for(var
Lb=0;Lb<this.Cx.length;Lb++){var
oa=this.Cx[Lb];var
ab=-1;if(jsx3.$A.is(oa)){ab=r.No[oa[0]](this,q,B,oa[1],ia,this.Cx[Lb+1],pa);}else ab=r.PD(q,B,oa);if(ab<0)throw new
jsx3.Exception(jsx3._msg(ub.O,q,this));B=B+ab;}if(pa.y!=null)ia.setUTCFullYear(pa.y);if(pa.bc)ia.setUTCFullYear(1-ia.getUTCFullYear());if(pa.M!=null)ia.setUTCMonth(pa.M);if(pa.d!=null)ia.setUTCDate(pa.d);if(pa.hours24){ia.setUTCHours(pa.hours24);}else if(pa.hours12){var
E=pa.hours12;if(pa.pm)E=E+12;ia.setUTCHours(E);}if(pa.m!=null)ia.setUTCMinutes(pa.m);if(pa.s!=null)ia.setUTCSeconds(pa.s);if(pa.S!=null)ia.setUTCMilliseconds(pa.S);if(pa.timezone!=null){ia.setTime(ia.getTime()-pa.timezone*1000*60);}else ia.setTime(ia.getTime()-this.getTimeZoneOffset(ia)*1000*60);if(isNaN(ia.getTime()))throw new
jsx3.Exception(jsx3._msg(ub.P,q,this));return ia;};e.getFormat=function(){return this.mt;};e.toString=function(){return this.mt;};});jsx3.Class.defineClass("jsx3.util.MessageFormat",null,null,function(k,j){var
ub={a:"{",b:"}",c:"string",d:"number",e:"null",f:"",g:"'",h:"msfmt.sq",i:"msfmt.bracket",j:"getDateInstance",k:"getTimeInstance",l:"getDateTimeInstance",m:",",n:"msfmt.bad_ind",o:"short",p:"medium",q:"long",r:"full",s:"datetime",t:"integer",u:"percent",v:"currency",w:"msfmt.bad_type"};var
Ea=jsx3.util.NumberFormat;var
L=jsx3.util.DateFormat;j.init=function(d,l){this.mt=d;this.IB=l||jsx3.System.getLocale();this.xI();};j.getLocale=function(){return this.IB;};j.setLocale=function(f){this.IB=f;this.xI();};j.format=function(b){var
t=new
Array(this.Cx.length);var
Da=arguments[0] instanceof Array?arguments[0]:arguments;for(var
w=0;w<t.length;w++){var
Ta=this.Cx[w];if(jsx3.$A.is(Ta)){var
Db=Ta[0];var
Ha=Ta[1];var
ya=Da[Db];if(Db>=Da.length){t[w]=ub.a+Db+ub.b;}else if(Ha!=null){t[w]=Ha.format(ya);}else if(typeof ya==ub.c){t[w]=ya;}else if(typeof ya==ub.d&&Ea){if(!this.qK)this.qK=Ea.getNumberInstance(this.IB);t[w]=this.qK.format(ya);}else if(ya==null){t[w]=ub.e;}else if(ya instanceof Date&&L){t[w]=(L.getDateTimeInstance(1,1,this.IB)).format(ya);}else t[w]=ya.toString();}else t[w]=this.Cx[w];}return t.join(ub.f);};j.xI=function(){var
fb=ub.g;var
va=[];this.Cx=va;var
Bb=this.mt;var
ya=Bb.length;var
sb=0;var
w=false;var
Ya=[];while(sb<ya){var
Ka=Bb.indexOf(fb,sb);var
Lb=Bb.indexOf(ub.a,sb);if(Ka>=0&&(Ka<Lb||Lb<0)){if(Ka>sb)Ya[Ya.length]=Bb.substring(sb,Ka);var
Ga=Bb.indexOf(fb,Ka+1);if(Ga==Ka+1){Ya[Ya.length]=fb;sb=Ga+1;}else if(Ga>=0){Ya[Ya.length]=Bb.substring(Ka+1,Ga);sb=Ga+1;}else throw new
jsx3.Exception(jsx3._msg(ub.h,Ka,this));}else if(Lb>=0){if(Lb>sb)Ya[Ya.length]=Bb.substring(sb,Lb);va[va.length]=Ya.join(ub.f);Ya.splice(0,Ya.length);sb=Lb+1;var
ua=[];while(true){var
Ib=Bb.charAt(sb);if(Ib==ub.f)throw new
jsx3.Exception(jsx3._msg(ub.i,ya-ua.length-1,this));if(Ib==fb){if(Bb.charAt(sb+1)==fb){ua[ua.length]=Ib;sb=sb+2;}else{w=!w;sb=sb+1;}}else if(w){ua[ua.length]=Ib;sb++;}else if(Ib==ub.b){sb++;break;}else{ua[ua.length]=Ib;sb++;}}va[va.length]=this.IS(ua.join(ub.f));}else{Ya[Ya.length]=Bb.substring(sb);break;}}var
la=Ya.join(ub.f);if(la.length>0)va[va.length]=la;};k.yu={date:ub.j,time:ub.k,datetime:ub.l};j.IS=function(s){var
nb=s.split(ub.m);var
xb=Number(nb[0]);if(isNaN(xb))throw new
jsx3.Exception(jsx3._msg(ub.n,s,this));if(nb.length>1){var
mb=nb[1];var
X=(nb.slice(2)).join(ub.m);if(k.yu[mb]){if(!L)return [xb,null];var
yb=k.yu[mb];var
Aa=null;if(X==ub.o)Aa=1;else if(X==ub.p)Aa=2;else if(X==ub.q)Aa=3;else if(X==ub.r)Aa=4;if(Aa!=null||jsx3.util.strEmpty(X))return [xb,mb==ub.s?L[yb](Aa,Aa,this.IB):L[yb](Aa,this.IB)];return [xb,new
L(X,this.IB)];}else if(mb==ub.d){if(!Ea)return [xb,null];if(jsx3.util.strEmpty(X))return [xb,Ea.getNumberInstance(this.IB)];else if(X==ub.t)return [xb,Ea.getIntegerInstance(this.IB)];else if(X==ub.u)return [xb,Ea.getPercentInstance(this.IB)];else if(X==ub.v)return [xb,Ea.getCurrencyInstance(this.IB)];else return [xb,new
Ea(X,this.IB)];}else throw new
jsx3.Exception(jsx3._msg(ub.w,s,this));}else return [xb,null];};j.toString=function(){return this.mt;};});jsx3.Package.definePackage("jsx3.html",function(r){var
ub={A:"span",B:"div",C:"<",D:' xmlns="',E:'"',F:" ",G:'="',H:"/>",I:">",J:"</",K:"<![CDATA[",L:"]]>",M:"&",N:";",O:"<!--",P:"-->",Q:"html.set_outer",R:"beforeend",S:"beforebegin",T:"html.adj",U:"opacity:",V:"UniversalXPConnect",W:"@mozilla.org/widget/clipboard;1",X:"@mozilla.org/widget/transferable;1",Y:"text/unicode",Z:"@mozilla.org/supports-string;1",_:"jsx:///images/icons/h.png",a:"",aa:"jsx:///images/icons/v.png",b:"overflow:hidden;",ba:"background-image:url(",c:"body",ca:");",d:'<input type="text" id="_jsx3_html_b1" style="position:absolute;top:0px;left:-120px;width:100px;height:30px;padding:8px;margin:0px;"/>',da:"_jsx_",e:"beforeEnd",ea:"disable-output-escp",f:"_jsx3_html_b1",fa:/&lt;/g,g:'<div id="_jsx3_html_b2" style="position:absolute;top:0px;left:-116px;width:100px;height:24px;padding:8px;"></div>',ga:/&gt;/g,h:"_jsx3_html_b2",ha:/&quot;/g,i:"string",ia:/&amp;/g,j:/^<([^\s]*)([\s\S]*)\/>$/i,ja:/&([a-zA-Z_]+);/g,k:"<$1$2></$1>",ka:"class",l:"_scrollTop",la:/<span class=\"disable-output-escp\">([\s\S]*?)<\/span>/g,m:"_scrollLeft",ma:"&#",n:/^on/,na:"jsx_image_loader",o:"function",oa:"none",p:"event",pa:"_",q:"head",qa:"img",r:"undefined",ra:"id",s:"http://www.w3.org/1999/xhtml",sa:"src",t:"style",ta:"unshift",u:" {",ua:"push",v:"}",va:/\//g,w:"type",wa:/\s+/g,x:"text/css",y:"media",z:"screen"};var
kb=jsx3.gui.Event;r.MODE_IE_QUIRKS=0;r.MODE_FF_QUIRKS=1;r.MODE_IE_STRICT=2;r.MODE_FF_STRICT=3;r.pe=ub.a;r.hl=ub.b;r.getMode=function(g){if(r.XE==null){var
P=g!=null?g.ownerDocument:document;var
pa=g||(document.getElementsByTagName(ub.c))[0];r.XE=0;var
ua=ub.d;jsx3.html.insertAdjacentHTML(pa,ub.e,ua);var
wa=P.getElementById(ub.f);if(wa.offsetHeight!=30){r.XE=jsx3.CLASS_LOADER.IE?2:3;}else{var
db=ub.g;jsx3.html.insertAdjacentHTML(pa,ub.e,db);var
W=P.getElementById(ub.h);if(parseInt(W.offsetWidth)>100)r.XE=1;pa.removeChild(W);}pa.removeChild(wa);}return r.XE;};r.emptyToClosed=function(c){return typeof c==ub.i?c.replace(ub.j,ub.k):c;};r.restoreScrollPosition=function(i){jsx3.sleep(function(){if(i)jsx3.html.findElements(i,function(h){if(h&&h.nodeType==1){if(h._scrollTop){h.scrollTop=h._scrollTop;delete h[ub.l];}if(h._scrollLeft){h.scrollLeft=h._scrollLeft;delete h[ub.m];}}},true,true,false,true);});};r.persistScrollPosition=function(j){if(j)jsx3.html.findElements(j,function(h){if(h&&h.nodeType==1){if(h.scrollTop)h._scrollTop=h.scrollTop;if(h.scrollLeft)h._scrollLeft=h.scrollLeft;}},true,true,false,true);};r.getScrollSizeOffset=function(n,e){return 0;};r.addEventListener=function(f,j,o){j=j.replace(ub.n,ub.a);f.addEventListener(j,typeof o==ub.o?o:new
Function(ub.p,o),false);};r.removeEventListener=function(q,l,d){l=l.replace(ub.n,ub.a);q.removeEventListener(l,d,false);};r.removeStyle=function(a,o){a.style.removeProperty(o);};r._FOCUSABLE={input:true,textarea:true,select:true,body:true,a:true,img:true,button:true,frame:true,iframe:true,object:true};r.isFocusable=function(e){return e.focus!=null&&(parseInt(e.tabIndex)>=0||r._FOCUSABLE[e.tagName.toLowerCase()]);};r.createRule=function(m,q,b){if(!b)b=document;var
B=(b.getElementsByTagName(ub.q))[0];var
Va=typeof b.createElementNS!=ub.r?b.createElementNS(ub.s,ub.t):b.createElement(ub.t);var
la=b.createTextNode(m+ub.u+q+ub.v);Va.appendChild(la);Va.setAttribute(ub.w,ub.x);Va.setAttribute(ub.y,ub.z);B.appendChild(Va);};r.getRuleByName=function(s){var
D=document.styleSheets;for(var
Db=0;Db<D.length;Db++){var
K=D[Db];for(var
ca=0;ca<K.cssRules.length;ca++)if(K.cssRules[ca].selectorText==s)return K.cssRules[ca];}return null;};r.scrollIntoView=function(j,c,s,q){var
Ca=j.parentNode;while(Ca!=null){var
Va=Ca.tagName.toLowerCase();if(Va==ub.A||Va==ub.B){var
T=r.getRelativePosition(Ca,j);if(Ca.clientWidth+Ca.scrollLeft<=T.L){Ca.scrollLeft=T.L+j.offsetWidth-Ca.clientWidth+s;}else if(Ca.clientWidth+Ca.scrollLeft<T.L+j.offsetWidth&&s!=null)Ca.scrollLeft=T.L+j.offsetWidth-Ca.clientWidth+s;if(Ca.scrollLeft>=T.L+j.offsetWidth){Ca.scrollLeft=T.L-s;}else if(Ca.scrollLeft>T.L&&s!=null)Ca.scrollLeft=T.L-s;if(Ca.clientHeight+Ca.scrollTop<=T.T){Ca.scrollTop=T.T+j.offsetHeight-Ca.clientHeight+q;}else if(Ca.clientHeight+Ca.scrollTop<T.T+j.offsetHeight&&q!=null)Ca.scrollTop=T.T+j.offsetHeight-Ca.clientHeight+q;if(Ca.scrollTop>=T.T+j.offsetHeight){Ca.scrollTop=T.T-q;}else if(Ca.scrollTop>T.T&&q!=null)Ca.scrollTop=T.T-q;}if(Ca==c)break;Ca=Ca.parentNode;}};r.getOuterHTML=function(p){if(window.SVGElement&&p instanceof SVGElement){return (new
XMLSerializer()).serializeToString(p);}else{var
xa=[];switch(p.nodeType){case 1:xa[xa.length]=ub.C+p.nodeName.toLowerCase();if(p.namespaceURI)xa[xa.length]=ub.D+p.namespaceURI+ub.E;for(var
F=0;F<p.attributes.length;F++){var
Ta=p.attributes.item(F);if(Ta.nodeValue!=null)xa[xa.length]=ub.F+Ta.nodeName+ub.G+Ta.nodeValue+ub.E;}if(p.childNodes.length==0)xa[xa.length]=ub.H;else xa[xa.length]=ub.I+p.innerHTML+ub.J+p.nodeName.toLowerCase()+ub.I;break;case 3:xa[xa.length]=p.nodeValue;break;case 4:xa[xa.length]=ub.K+p.nodeValue+ub.L;break;case 5:xa[xa.length]=ub.M+p.nodeName+ub.N;break;case 8:xa[xa.length]=ub.O+p.nodeValue+ub.P;break;default:if(p.childNodes)for(var
Na=0;Na<p.childNodes.length;Na++)xa.push(r.getOuterHTML(p.childNodes[Na]));break;}return xa.join(ub.a);}};r.setOuterHTML=function(d,o){if(window.SVGElement&&d instanceof SVGElement){if(!o){d.parentNode.removeChild(d);}else{var
ga=d.ownerDocument.createRange();ga.setStartBefore(d);var
ob=ga.createContextualFragment(o);d.parentNode.replaceChild(ob,d);}}else try{var
ga=d.ownerDocument.createRange();ga.setStartBefore(d);var
ob=ga.createContextualFragment(o);d.parentNode.replaceChild(ob,d);}catch(Kb){var
yb=typeof o==ub.i?o.substring(0,50):o;throw new
jsx3.Exception(jsx3._msg(ub.Q,d,yb),jsx3.NativeError.wrap(Kb));}};r.removeNode=function(o){o.parentNode.removeChild(o);};r.setInnerText=function(s,a){for(var
fb=s.childNodes.length-1;fb>=0;fb--)s.removeChild(s.childNodes[fb]);s.appendChild(s.ownerDocument.createTextNode(a));};r.insertAdjacentHTML=function(n,m,f){if(m.toLowerCase()==ub.R){var
ga=n.ownerDocument.createRange();ga.setStartAfter(n);var
Ga=ga.createContextualFragment(f);n.appendChild(Ga);return f;}else if(m.toLowerCase()==ub.S){var
ga=n.ownerDocument.createRange();ga.setStartBefore(n);var
Ga=ga.createContextualFragment(f);n.parentNode.insertBefore(Ga,n);return f;}else throw new
jsx3.Exception(jsx3._msg(ub.T,m));};r.updateCSSOpacity=function(p,m){p.style.opacity=m.toString();};r.getCSSOpacity=function(o){return ub.U+o+ub.N;};r.getRelativePosition=function(p,n){if(p==null)p=(n.ownerDocument.getElementsByTagName(ub.c))[0];var
ya=n.ownerDocument;var
Ga,Sa,F,I;if(!n.getBoundingClientRect){Ga=ya.getBoxObjectFor(n);Sa=ya.getBoxObjectFor(p);F=Ga.screenX-Sa.screenX+p.scrollLeft;I=Ga.screenY-Sa.screenY+p.scrollTop;}else{Ga=n.getBoundingClientRect();Sa=p.getBoundingClientRect();F=Ga.left-Sa.left+Math.max(ya.documentElement.scrollLeft,ya.body.scrollLeft);I=Ga.top-Sa.top+Math.max(ya.documentElement.scrollTop,ya.body.scrollTop);}return {L:F,T:I,W:n.offsetWidth,H:n.offsetHeight};};r.copy=function(q){netscape.security.PrivilegeManager.enablePrivilege(ub.V);var
zb=Components.classes[ub.W].createInstance(Components.interfaces.nsIClipboard);if(zb){var
J=Components.classes[ub.X].createInstance(Components.interfaces.nsITransferable);if(J){J.addDataFlavor(ub.Y);var
sb=Components.classes[ub.Z].createInstance(Components.interfaces.nsISupportsString);sb.data=q;J.setTransferData(ub.Y,sb,q.length*2);var
va=Components.interfaces.nsIClipboard;zb.setData(J,null,va.kGlobalClipboard);}}};r.paste=function(){netscape.security.PrivilegeManager.enablePrivilege(ub.V);var
I=Components.classes[ub.W].getService(Components.interfaces.nsIClipboard);if(I){var
O=Components.classes[ub.X].createInstance(Components.interfaces.nsITransferable);if(O){O.addDataFlavor(ub.Y);I.getData(O,I.kGlobalClipboard);var
t={};var
ma={};O.getTransferData(ub.Y,t,ma);if(t)t=t.value.QueryInterface(Components.interfaces.nsISupportsString);return t?t.data.substring(0,ma.value/2):null;}}return null;};r.AU=jsx3.resolveURI(ub._);r.z9=jsx3.resolveURI(ub.aa);r.getCSSFade=function(n){return r.getCSSPNG(n?r.AU:r.z9);};r.getCSSPNG=function(a){return ub.ba+a+ub.ca;};r.getJSXParent=function(d,k){while(d!=null){if(d.id&&d.id.indexOf(ub.da)==0){var
nb=k?k.getJSXById(d.id):jsx3.GO(d.id);if(nb!=null)return nb;}if(!d.parentNode){var
Da=d.parentWindow||d.defaultView;d=Da?Da.frameElement:null;}else d=d.parentNode;}return null;};r.removeOutputEscaping=function(c){var
oa=c?[c]:[];while(oa.length>0){var
I=oa.shift();if(I.nodeName&&I.nodeName.toLowerCase()==ub.A&&I.className==ub.ea){I.innerHTML=((((I.innerHTML.replace(ub.fa,ub.C)).replace(ub.ga,ub.I)).replace(ub.ha,ub.E)).replace(ub.ia,ub.M)).replace(ub.ja,r.sA);I.removeAttribute(ub.ka);}else if(I.childNodes)oa.push.apply(oa,this.nodesToArray(I.childNodes));}};r.removeOutputEscapingSpan=function(k){return k.replace(ub.la,function(h,n){return ((((n.replace(ub.fa,ub.C)).replace(ub.ga,ub.I)).replace(ub.ha,ub.E)).replace(ub.ia,ub.M)).replace(ub.ja,r.sA);});};r.HZ={nbsp:160,copy:169,reg:174,deg:176,middot:183,le:8804,ge:8805,lt:60,gt:62,euro:8364,ndash:8211,mdash:8212,lsquo:8216,rsquo:8217,ldquo:8220,rdquo:8221,permil:8240};r.sA=function(p,s){var
G=r.HZ[s];return G?ub.ma+G+ub.N:p;};r.ot=ub.na;r.loadImages=function(s){var
rb=document.getElementById(r.ot);if(rb==null){var
wb=(document.getElementsByTagName(ub.c))[0];if(wb){rb=document.createElement(ub.B);rb.id=r.ot;rb.style.display=ub.oa;wb.insertBefore(rb,wb.firstChild);}else return;}var
Ia=jsx3.$A.is(s)?s:arguments;for(var
L=0;L<Ia.length;L++){if(!Ia[L])continue;var
Sa=jsx3.resolveURI(Ia[L]);var
gb=r.ot+ub.pa+Sa;if(document.getElementById(gb)==null){var
va=document.createElement(ub.qa);va.setAttribute(ub.ra,gb);va.setAttribute(ub.sa,Sa);rb.appendChild(va);}}};r.updateRule=function(n,q,g){var
la=jsx3.html.getRuleByName(n);if(la)la.style[q]=g;};r.getElementById=function(s,l,g){return this.findElements(s,function(j){return j.id==l;},g,false,false,true);};r.getElementByTagName=function(m,k,a){k=k.toLowerCase();return this.findElements(m,function(g){return g.tagName.toLowerCase()==k;},a,false,false,true);};r.getElementsByTagName=function(b,s,i){s=s.toLowerCase();return this.findElements(b,function(g){return g.tagName.toLowerCase()==s;},i,true,false,true);};r.findElements=function(d,h,k,n,l,f){var
Oa=k?ub.ta:ub.ua;var
_a=n?[]:null;var
pa=f?[d]:this.nodesToArray(d.childNodes);while(pa.length>0){var
Kb=pa.shift();if(h.call(null,Kb))if(n)_a[_a.length]=Kb;else return Kb;if(!l)pa[Oa].apply(pa,this.nodesToArray(Kb.childNodes));}return _a;};r.getElmUpByTagName=function(l,a,e){return r.findElementUp(l,function(g){return g.nodeName.toLowerCase()==a;},e);};r.findElementUp=function(h,m,a){var
B=h.ownerDocument.documentElement;var
Pa=a?h:h.parentNode;while(Pa!=null){if(m.call(null,Pa))return Pa;if(Pa==B)break;Pa=Pa.parentNode;}return null;};r.selectSingleElm=function(k,p){var
Ja=1,Q=arguments;if(arguments.length==2)if(typeof p==ub.i){Ja=0;Q=p.split(ub.va);}else if(jsx3.$A.is(p)){Ja=0;Q=p;}var
pa=k;for(var
t=Ja;pa!=null&&t<Q.length;t++){var
rb=Q[t];if(!isNaN(rb)){var
_=Number(rb);var
Ra=pa.childNodes.length;var
La=0,Nb=0;for(;La<Ra&&Nb<_;La++)if(pa.childNodes[La].nodeType==1)Nb++;pa=pa.childNodes[La];}else throw new
jsx3.Exception();}return pa;};r.nodesToArray=function(a){var
Sa=new
Array(a.length);for(var
w=0;w<a.length;w++)Sa[w]=a[w];return Sa;};r.getSelection=function(n){return new
r.Selection(n);};r.focusNext=function(n,p){var
Ra=n;while(Ra.lastChild)Ra=Ra.lastChild;while(!r.isFocusable(Ra)&&Ra!=n)Ra=Ra.previousSibling||Ra.parentNode;if(Ra!=n||r.isFocusable(Ra))if(Ra.onfocus!=null){var
ma=Ra.onfocus;Ra.onfocus=null;Ra.focus();jsx3.sleep(function(){Ra.onfocus=ma;});}else Ra.focus();};r.focusPrevious=function(b,k){var
Ya=this.findElements(b,function(s){return r.isFocusable(s);},true,false,false,true);if(Ya!=null)if(Ya.onfocus!=null){var
pb=Ya.onfocus;Ya.onfocus=null;Ya.focus();jsx3.sleep(function(){Ya.onfocus=pb;});}else Ya.focus();};r.focus=function(j){try{if(j.focus)j.focus();}catch(Kb){}};r.addClass=function(q,b){var
S=q.className;if(S){if(!(jsx3.$A(S.split(ub.wa))).contains(b))q.className=S+ub.F+b;}else q.className=b;};r.removeClass=function(g,k){var
nb=g.className;if(nb&&nb.indexOf(k)>=0){var
ma=jsx3.$A(nb.split(ub.wa));if(ma.remove(k))g.className=ma.join(ub.F);}};});jsx3.Class.defineClass("jsx3.html.Selection",null,null,function(q,k){var
ub={a:"end"};k.init=function(s){this.DY={elm:s,start:s.selectionStart,end:s.selectionEnd,scrollt:s.scrollTop,scrolll:s.scrollLeft};};k.getStartIndex=function(){return this.DY.start;};k.getEndIndex=function(){return this.DY.end;};k.setRange=function(d,s){this.DY.start=d;this.DY.end=s;this.DY.elm.setSelectionRange(d,s);};k.getOffsetLeft=function(){if(this.DY.pos==null)this.DY.pos=jsx3.html.getRelativePosition(null,this.DY.elm);return this.DY.pos.L;};k.getOffsetTop=function(){if(this.DY.pos==null)this.DY.pos=jsx3.html.getRelativePosition(null,this.DY.elm);return this.DY.pos.T;};k.getText=function(){return this.DY.elm.value.substring(this.DY.start,this.DY.end);};k.setText=function(a){this.DY.elm.value=this.DY.elm.value.substring(0,this.DY.start)+a+this.DY.elm.value.substring(this.DY.end);this.DY.elm.setSelectionRange(this.DY.start,this.DY.start+a.length);this.DY.elm.end=this.DY.elm.selectionEnd;};k.insertCaret=function(o){this.DY.elm.focus();if(o==ub.a){this.DY.elm.setSelectionRange(this.DY.elm.end,this.DY.elm.end);}else throw new
jsx3.Exception();this.DY.elm.scrollTop=this.DY.scrollt;this.DY.elm.scrollLeft=this.DY.scrolll;};});jsx3.Class.defineClass("jsx3.app.Cache",null,[jsx3.util.EventDispatcher],function(c,l){var
ub={a:"remove",b:"add",c:"change",d:"http://xsd.tns.tibco.com/gi/cache",e:'<loading xmlns="',f:'"/>',g:'<timeout xmlns="',h:'<error xmlns="',i:"*",j:"p1",k:"_jsxcacheid",l:"response",m:"timeout",n:"error",o:"strId",p:"objDocument",q:"dE",r:"gU"};var
yb=jsx3.xml.Document;c.REMOVE=ub.a;c.ADD=ub.b;c.CHANGE=ub.c;c.ASYNC_TIMEOUT=60000;c.XSDNS=ub.d;c.zt=(new
yb()).loadXML(ub.e+c.XSDNS+ub.f);c.Iw=(new
yb()).loadXML(ub.g+c.XSDNS+ub.f);c.OZ=(new
yb()).loadXML(ub.h+c.XSDNS+ub.f);l.init=function(){this.dE={};this.gU=[];};l.addParent=function(d){this.gU.push(d);};l.clearById=function(j){var
Db=this.dE[j];if(Db){delete this.dE[j];this.publish({subject:j,action:ub.a});this.publish({subject:ub.c,id:j,action:ub.a});return Db.kD;}};l.isSystem=function(i){return false;};l.clearByTimestamp=function(e){if(e instanceof Date)e=e.getTime();var
Z=false;var
H=[];for(var ab in this.dE){var
Ab=this.dE[ab];if(Ab.tH<e){delete this.dE[ab];this.publish({subject:ab,action:ub.a});H.push(ab);}}if(H.length>0)this.publish({subject:ub.c,ids:H,action:ub.a});return H;};l.getDocument=function(q){if(this.dE[q]!=null)return this.dE[q].kD;for(var
u=0;u<this.gU.length;u++){var
nb=this.gU[u].getDocument(q);if(nb!=null)return nb;}return null;};l.getOrOpenDocument=function(h,f,e){if(f==null)f=h.toString();return this.getDocument(f)||this.JD(h,f,e,false);};l.openDocument=function(q,p,o){return this.JD(q,p,o,false);};l.getOrOpenAsync=function(b,m,a){if(m==null)m=b.toString();return this.getDocument(m)||this.JD(b,m,a,true);};l.JD=function(e,i,h,f){if(h==null)h=yb.jsxclass;if(i==null)i=e.toString();var
gb=h.newInstance();gb.setAsync(f);if(f){gb.subscribe(ub.i,this,ub.j);gb._jsxcacheid=i;gb.load(e,c.ASYNC_TIMEOUT);gb=c.zt.cloneDocument();}else gb.load(e);this.setDocument(i,gb);return gb;};l.p1=function(o){var
fb=o.target;var
vb=o.subject;var
Mb=fb._jsxcacheid;delete fb[ub.k];fb.unsubscribe(ub.i,this);if(this.dE)if(vb==ub.l){this.setDocument(Mb,fb);}else if(vb==ub.m){this.setDocument(Mb,c.Iw.cloneDocument());}else if(vb==ub.n){var
_=c.OZ.cloneDocument();_.setAttribute(ub.n,(fb.getError()).toString());this.setDocument(Mb,_);}};l.setDocument=function(d,o){if(d==null)throw new
jsx3.IllegalArgumentException(ub.o,d);if(o==null)throw new
jsx3.IllegalArgumentException(ub.p,o);var
Cb={};Cb.tH=(new
Date()).getTime();Cb.kD=o;var
gb=this.dE[d]?ub.c:ub.b;this.dE[d]=Cb;this.publish({subject:d,action:gb});this.publish({subject:ub.c,action:gb,id:d});};l.getTimestamp=function(i){var
cb=this.dE[i];return cb!=null?cb.tH:null;};l.keys=function(){var
Qa=[];for(var Fb in this.dE)Qa[Qa.length]=Fb;return Qa;};l.destroy=function(){delete this[ub.q];delete this[ub.r];};});jsx3.Cache=jsx3.app.Cache;jsx3.Class.defineClass("jsx3.app.Properties",null,null,function(m,d){var
ub={a:"_global",b:"./record",c:"jsxid",d:"eval",e:"jsxtext",f:"1",g:"true",h:"props.eval",i:"load",j:"undefined",k:"strValue"};var
pb=jsx3.util.Logger.getLogger(m.jsxclass.getName());m.MC=ub.a;d.init=function(){this.gU=[];this._P=[];this.OE=[m.MC];this.nU={};this.nU[m.MC]={};this.gX={};this.kE=false;this.TX={};this.nR=false;};d.loadXML=function(e,b){var
F=new
jsx3.util.Timer(m.jsxclass,b||(e instanceof jsx3.xml.Document?e.getSourceURL():e.getNodeName()));if(b==null){b=m.MC;}else if(jsx3.util.arrIndexOf(this.OE,b)<0)this.OE.splice(1,0,b);var
sb=this.nU[b];if(sb==null)sb=this.nU[b]={};for(var
ea=e.selectNodeIterator(ub.b);ea.hasNext();){var
R=ea.next();var
pa=R.getAttribute(ub.c);var
eval=R.getAttribute(ub.d);var
Da=R.getAttribute(ub.e);if(eval==ub.f||eval==ub.g)try{Da=isNaN(Da)?jsx3.eval(Da):Number(Da);}catch(Kb){pb.warn(jsx3._msg(ub.h,pa,Da),jsx3.NativeError.wrap(Kb));}sb[pa]=Da;}this.kE=true;F.log(ub.i);};d.addParent=function(b){this.gU.splice(0,0,b);b._P.push(this);this.uR(true);};d.removeParent=function(a){var
oa=jsx3.util.arrIndexOf(this.gU,a);if(oa>=0){this.gU.splice(oa,1);a.RT(this);this.uR(true);}};d.RT=function(s){var
Ha=jsx3.util.arrIndexOf(this._P,s);if(Ha>=0)this._P.splice(Ha,1);};d.removeAllParents=function(){if(this.gU.length>0){for(var
sa=0;sa<this.gU.length;sa++)this.gU[sa].RT(this);this.gU=[];this.nR=false;this.TX={};}};d.getParents=function(){return this.gU.concat();};d.containsKey=function(h){if(this.kE)this.mO();return typeof this.gX[h]!=ub.j;};d.getKeys=function(){if(this.kE)this.mO();var
x=[];for(var da in this.gX)x[x.length]=da;return x;};d.get=function(g){if(this.kE)this.mO();if(typeof this.gX[g]!=ub.j)return this.gX[g];if(this.nR)this.pL();return this.TX[g];};d.set=function(s,h){if(typeof h==ub.j)throw new
jsx3.IllegalArgumentException(ub.k,h);this.nU[m.MC][s]=h;this.gX[s]=h;this.uR();};d.remove=function(f){for(var aa in this.nU)delete this.nU[aa][f];delete this.gX[f];this.uR();};d.mO=function(){this.kE=false;var
xa=this.gX={};for(var
ca=this.OE.length-1;ca>=0;ca--){var
fa=this.nU[this.OE[ca]];for(var ab in fa)xa[ab]=fa[ab];}};d.pL=function(){this.nR=false;var
X=this.TX={};for(var
Oa=this.gU.length-1;Oa>=0;Oa--){var
Bb=this.gU[Oa];if(Bb.kE)Bb.mO();if(Bb.nR)Bb.pL();var
Ab=Bb.gX;var
rb=Bb.TX;for(var da in rb)X[da]=rb[da];for(var da in Ab)X[da]=Ab[da];}};d.uR=function(b){var
Ta=b?[this]:this._P.concat();while(Ta.length>0){var
Ba=Ta.shift();if(!Ba.nR){Ba.nR=true;Ta.push.apply(Ta,Ba._P);}}};});jsx3.Class.defineClass("jsx3.app.PropsBundle",jsx3.app.Properties,null,function(e,j){var
ub={a:".",b:"::",c:"propbn.err_key",d:"",e:"*",f:"propbn.err_file",g:"/data/locale",h:"key",i:"Parent of bundle ",j:" (",k:") is null.",l:"locales",m:/\s*,\s*/};var
Na=jsx3.util.Logger.getLogger(e.jsxclass.getName());var
Ja=jsx3.util.Job;e.w6=ub.a;e.SH=-1;e.uv={};e.q9={};e.u9=new
jsx3.util.JobGraph();e.UR=new
e();e.getProps=function(c,i,m){if(!i)i=jsx3.System.getLocale();var
Ba=c+ub.b+i;if(!e.q9[Ba]){var
na=e.u9;if(na.node(c))return e.UR;var
ya=new
Ja(c);e.iK(c,i,m,false,ya);}var
ea=e.q9[Ba];if(ea==e.SH)throw new
jsx3.Exception(jsx3._msg(ub.c,c,i));return ea;};e.getPropsAsync=function(g,m,b,i){if(!m)m=jsx3.System.getLocale();var
Fa=g+ub.b+m;var
Q=new
Ja(null,function(){var
Oa=e.q9[Fa];b(Oa!=e.SH?Oa:null);});e.iK(g,m,i,true,Q);};e.iK=function(d,g,l,i,f){var
N=e.u9;d=d.toString();N.pause();N.add(f);var
va=f;var
R=g.getSearchPath();for(var
H=0;H<R.length;H++){var
S=R[H];var
rb=d+ub.b+S;if(e.q9[rb])break;var
gb=N.node(rb);if(!gb){gb=e.P6(rb,d,S,l,i);N.add(gb);gb.add(va);}else{gb.add(va);break;}va=gb;}N.start();};e.P6=function(g,k,a,q,b){return new
Ja(g,function(){var
tb=this;e.N5(g,k,a,q,b,function(){tb.finish();});return 0;});};e.N5=function(l,f,s,c,g,a){var
gb=e.q9,Xa=e.uv;var
Za=false,O=false;if(gb[l]){O=true;}else if(s.toString()==ub.d){Za=true;}else if(!Xa[f][s]){var
wa=s.getSearchPath();for(var
wb=1;!gb[l]&&wb<wa.length;wb++){var
y=wa[wb];var
A=f+ub.b+y;gb[l]=gb[A];}O=true;}if(O){a();return;}var
nb;if(Za){Xa[f]={};nb=f;}else{var
Ia=f.lastIndexOf(ub.a);nb=f.substring(0,Ia)+e.w6+s+f.substring(Ia);}var
_=null,va=false;if(c)_=c.getDocument(nb);if(_){va=true;c=null;}else{_=new
jsx3.xml.Document();if(g){_.setAsync(true);_.subscribe(ub.e,e,function(o){e.vv(l,f,s,c,o.target,a);});}else va=true;_.load(nb);}if(va)e.vv(l,f,s,c,_,a);};e.vv=function(g,a,h,o,i,p){var
Ia=i.getSourceURL();if(!i.hasError()){if(o&&Ia)o.setDocument(Ia,i);e.Cv(a,i);e.e9(a,h,i);}else{Na.error(jsx3._msg(ub.f,Ia,i.getError()));e.q9[g]=e.SH;}p();};e.e9=function(g,m,q){for(var
Ab=q.selectNodeIterator(ub.g);Ab.hasNext();){var
ga=Ab.next();var
v=ga.getAttribute(ub.h)||ub.d;e.W6(g,v,ga);e.uv[g][v]=true;}if(!e.q9[g+ub.b+m])e.W6(g,m.toString(),q);};e.W6=function(c,q,m){var
F=e.q9;var
oa=new
e();oa.loadXML(m);oa.h0=c;oa.IB=jsx3.util.Locale.valueOf(q);F[c+ub.b+q]=oa;if(q){var
ta=oa.IB.getSearchPath();for(var
Ia=1;Ia<ta.length;Ia++){var
rb=F[c+ub.b+ta[Ia]];if(rb){oa.addParent(rb);return;}}Na.error(ub.i+c+ub.j+q+ub.k);}};e.Cv=function(m,d){var
U=d.getAttribute(ub.l);if(e.uv[m]==null)e.uv[m]={};if(U!=null){var
Z=U.split(ub.m);for(var
_=0;_<Z.length;_++)if(Z[_])e.uv[m][Z[_]]=true;}};j.getLocale=function(){return this.IB;};j.getPath=function(){return this.h0;};e.clearCache=function(l,r){if(l){delete e.uv[l];var
va=l+ub.b;for(var ua in e.q9)if(ua.indexOf(va)==0)delete e.q9[ua];if(r){var
eb=r.keys();for(var
ib=0;ib<eb.length;ib++)if(eb[ib].indexOf(l)==0)r.clearById(eb[ib]);}}else{e.uv={};e.q9={};}};});jsx3.Class.defineClass("jsx3.lang.System",null,null,function(g,o){var
ub={a:"_",b:"jsx:///locale/locale.xml",c:"",d:" ",e:"_jsx_",f:"namespace",g:"apppathrel",h:"apppath",i:"3.8.0_399db",j:/\d/,k:"3.8.0"};g.LJSS=new
jsx3.app.Properties();g.JSS=new
jsx3.app.Properties();g.JSS.addParent(g.LJSS);g.C5={};g.getProperty=function(h){return g.JSS.get(h);};g.getLocale=function(){if(g.IB==null&&jsx3.util.Locale){var
Fb=jsx3.app.Browser.getLocaleString();if(Fb){var
gb=Fb.split(ub.a);g.IB=new
jsx3.util.Locale(gb[0],gb[1]);}else g.IB=jsx3.util.Locale.US;}return g.IB;};g.setLocale=function(p){if(p!=g.IB){g.JSS.removeParent(g.getLocaleProperties());g.IB=p;g.JSS.addParent(g.getLocaleProperties());}};g.reloadLocalizedResources=function(){var
A=jsx3.app.PropsBundle;if(A){var
y=g.LJSS.getParents();g.LJSS.removeAllParents();for(var
wb=0;wb<y.length;wb++)g.LJSS.addParent(jsx3.app.PropsBundle.getProps(y[wb].getPath(),g.getLocale(),jsx3.getSystemCache()));}};g.T0=jsx3.resolveURI(ub.b);g.getLocaleProperties=function(j){return jsx3.app.PropsBundle.getProps(g.T0,j,jsx3.getSystemCache());};g.getMessage=function(r,i){var
Y=g.LJSS.get(r);var
x=ub.c;if(arguments.length>1){var
z=jsx3.Method.argsAsArray(arguments,1);if(Y!=null&&jsx3.util.MessageFormat){try{var
ka=new
jsx3.util.MessageFormat(Y);return ka.format(z);}catch(Kb){}}else x=ub.d+z.join(ub.d);}if(Y==null)Y=r;return Y+x;};g.GO=function(r,d){var
mb=null;if(r!=null)if(r.indexOf(ub.e)==0){var
eb=jsx3.app.DOM.getNamespaceForId(r);if(d&&d!=eb)return null;if(g.C5[eb])mb=g.C5[eb].getJSXById(r);}else if(d){if(g.C5[d])mb=g.C5[d].getJSXByName(r);}else for(var Ha in g.C5)if((mb=g.C5[Ha].getJSXByName(r))!=null)return mb;return mb;};g.getApp=function(s){return g.C5[s];};g.getAllApps=function(){var
Gb=[];for(var bb in g.C5)Gb.push(g.C5[bb]);return Gb;};g.registerApp=function(p){var
vb=p.getEnv(ub.f);jsx3.lang.setVar(vb,p);g.C5[vb]=p;};g.deregisterApp=function(p){var
ha=p.getEnv(ub.f);var
Lb=jsx3.lang.getVar(ha);if(p==Lb)jsx3.lang.setVar(p.getEnv(ub.f),null);if(g.C5[ha]==p)delete g.C5[ha];};g.activateApp=function(q){jsx3.registerApp(q);};g.getAppByPath=function(f){for(var H in g.C5){var
kb=g.C5[H];if(kb.getEnv(ub.g)==f||kb.getEnv(ub.h)==f)return kb;}return null;};g.bM=[];g.h3={};g.registerAddin=function(b,a){jsx3.lang.setVar(b,a);g.bM.push(a);g.h3[a.getKey()]=a;};g.getAddins=function(){return g.bM.concat();};g.getAddin=function(i){return g.h3[i];};g.getVersion=function(){var
ca=ub.i;return ca.match(ub.j)?ca:ub.k;};});jsx3.GO=jsx3.lang.System.GO;jsx3.getApp=jsx3.lang.System.getApp;jsx3.registerApp=jsx3.lang.System.registerApp;jsx3.activateApp=jsx3.lang.System.activateApp;jsx3.deregisterApp=jsx3.lang.System.deregisterApp;jsx3.getVersion=jsx3.lang.System.getVersion;jsx3.Class.defineInterface("jsx3.xml.CDF",null,function(e,b){var
ub={A:"//record",B:"",C:"'",D:"//*[@jsxid='",E:"']",F:'//*[@jsxid="',G:'"]',H:"//record[not(@jsxid)]",I:/\[(\w+)\]$/,J:"name()='",K:" or ",L:"substring(.,1,1)='{' and substring(.,string-length(.),1)='}'",M:"//@*[(",N:") and (",O:")]",P:"undefined",Q:"//@",R:" | //@",S:"{",T:"}",U:"<",V:' jsxid="jsxroot"/>',W:"jsx_",X:"3.00.00",a:"data",b:"record",c:"jsxid",d:"jsxtext",e:"jsxexecute",f:"jsxdisabled",g:"jsxselected",h:"jsxunselectable",i:"jsximg",j:"jsxtip",k:"jsxkeycode",l:"jsxstyle",m:"jsxclass",n:"objRecord",o:"objRecordNode",p:"cdf.prop_ins",q:"cdf.prop_del",r:"strRecordId",s:"intAction",t:"string",u:"cdf.adopt_col",v:"cdf.adopt_dest",w:"cdf.adopt_src",x:"adoptRecord() no object with id: ",y:"cdf.before_col",z:"cdf.before_rec"};e.KD=jsx3.util.Logger.getLogger(e.jsxclass.getName());e.DELETE=0;e.INSERT=1;e.UPDATE=2;e.INSERTBEFORE=3;e.ELEM_ROOT=ub.a;e.ELEM_RECORD=ub.b;e.ATTR_ID=ub.c;e.ATTR_TEXT=ub.d;e.ATTR_EXECUTE=ub.e;e.ATTR_DISABLED=ub.f;e.ATTR_SELECTED=ub.g;e.ATTR_UNSELECTABLE=ub.h;e.ATTR_IMG=ub.i;e.ATTR_TIP=ub.j;e.ATTR_KEYCODE=ub.k;e.Wo=[ub.d,ub.j,ub.i,ub.k,ub.l,ub.m];e.cN=1;b.insertRecord=function(q,i,c){if(q instanceof Object){var
Y=this.getXML();var
I=1;var
Jb=Y.selectSingleNode(this.Ee(q.jsxid));if(Jb!=null){I=2;}else{Jb=Y.createNode(1,ub.b);var
kb=i!=null?Y.selectSingleNode(this.Ee(i)):null;if(kb==null)kb=Y.getRootNode();kb.appendChild(Jb);}for(var pb in q)if(q[pb]!=null)Jb.setAttribute(pb,q[pb].toString());if(c!==false)this.redrawRecord(q[ub.c],I);return Jb;}else throw new
jsx3.IllegalArgumentException(ub.n,q);};b.insertRecordNode=function(o,g,k){if(o instanceof jsx3.xml.Entity){var
yb=this.getXML();var
Ea=1;var
Oa=yb.selectSingleNode(this.Ee(o.getAttribute(ub.c)));if(Oa!=null){Ea=2;(Oa.getParent()).replaceNode(o,Oa);}else{var
ua=g!=null?yb.selectSingleNode(this.Ee(g)):null;if(ua==null)ua=yb.getRootNode();ua.appendChild(o);}if(k!==false)this.redrawRecord(o.getAttribute(ub.c),Ea);}else throw new
jsx3.IllegalArgumentException(ub.o,o);};b.insertRecordProperty=function(d,q,r,s){var
K=this.getRecordNode(d);if(K!=null){K.setAttribute(q,r);if(s!==false)this.redrawRecord(d,2);}else e.KD.debug(jsx3._msg(ub.p,d));return this;};b.deleteRecordProperty=function(p,j,k){var
ja=this.getXML();var
tb=ja.selectSingleNode(this.Ee(p));if(tb!=null){tb.removeAttribute(j);if(k!==false)this.redrawRecord(p,2);}else e.KD.debug(jsx3._msg(ub.q,p));};b.redrawRecord=jsx3.Method.newAbstract(ub.r,ub.s);b.adoptRecord=function(c,k,l,f){var
Kb=c;if(typeof c==ub.t)Kb=jsx3.GO(c);if(Kb!=null){var
Oa=Kb.getRecordNode(k);if(Oa!=null){var
Ka=l==null?(this.getXML()).getRootNode():this.getRecordNode(l);if(Ka!=null){var
rb=Ka;while(rb!=null&&!rb.equals(Oa))rb=rb.getParent();if(rb==null){if(Kb!=this){var
Lb=this.getRecordNode(k);if(Lb!=null){e.KD.debug(jsx3._msg(ub.u,this,k));return;}}var
Va=Kb.deleteRecord(k);this.insertRecordNode(Va,l,f);return this.getRecordNode(k);}else{}}else e.KD.debug(jsx3._msg(ub.v,this,k,l));}else e.KD.debug(jsx3._msg(ub.w,this,k,Kb));}else e.KD.debug(ub.x+c);};b.insertRecordBefore=function(p,r,m){var
S=this.getXML();var
Cb=S.selectSingleNode(this.Ee(p.jsxid));if(Cb){e.KD.debug(jsx3._msg(ub.y,p.jsxid,this));}else{var
Mb=S.selectSingleNode(this.Ee(r));if(Mb!=null&&Mb.getParent()!=null){var
oa=this.insertRecord(p,(Mb.getParent()).getAttribute(ub.c),false);if(oa){this.adoptRecordBefore(this,p.jsxid,r,m);return oa;}}else e.KD.debug(jsx3._msg(ub.z,r,this));}};b.adoptRecordBefore=function(k,c,r,q){var
u=k;if(typeof k==ub.t)u=jsx3.GO(k);if(u==this&&c==r){}else{var
na=(this.getRecordNode(r)).getParent();var
Ua=na.getAttribute(ub.c);var
ib=this.adoptRecord(k,c,Ua,false);if(ib){var
R=this.getRecordNode(r);na.insertBefore(ib,R);if(q!==false)this.redrawRecord(ib.getAttribute(ub.c),3);return ib;}}};b.deleteRecord=function(h,c){var
v=this.getXML();var
Ma=v.selectSingleNode(this.Ee(h));if(Ma!=null){Ma=(Ma.getParent()).removeChild(Ma);if(c!==false)this.redrawRecord(h,0);return Ma;}return null;};b.getRecord=function(a){var
ha=this.getRecordNode(a);if(ha!=null){var
fb={};var
tb=ha.getAttributeNames();for(var
Z=0;Z<tb.length;Z++)fb[tb[Z]]=ha.getAttribute(tb[Z]);return fb;}return null;};b.getRecordIds=function(){var
T=[];var
B=this.getXML();var
Ga=B.selectNodeIterator(ub.A);while(Ga.hasNext()){var
F=Ga.next();T.push(F.getAttribute(ub.c));}return T;};b.getRecordNode=function(j){var
rb=this.getXML();return rb.selectSingleNode(this.Ee(j));};b.Ee=function(l){return (l+ub.B).indexOf(ub.C)==-1?ub.D+l+ub.E:ub.F+l+ub.G;};b.resetData=function(d){if(jsx3.xml.Cacheable&&this.instanceOf(jsx3.xml.Cacheable)){this.clearXmlData();if(d)this.repaint();}};b.reloadFromSource=function(o){if(jsx3.xml.Cacheable&&this.instanceOf(jsx3.xml.Cacheable))this.resetXmlCacheData();};b.assignIds=function(){var
_a=this.getXML();for(var
ma=_a.selectNodeIterator(ub.H);ma.hasNext();){var
va=ma.next();va.setAttribute(ub.c,e.getKey());}};e.zp=ub.I;b.convertProperties=function(h,s,a){if(s==null)s=e.Wo;else if(a)s.push.apply(s,e.Wo);if(jsx3.getXmlVersion()>3&&!jsx3.CLASS_LOADER.SAF){var
rb=new
Array(s.length);for(var
Sa=0;Sa<s.length;Sa++)rb[Sa]=ub.J+s[Sa]+ub.C;var
S=rb.join(ub.K);var
zb=ub.L;var
M=ub.M+S+ub.N+zb+ub.O;for(var
Sa=(this.getXML()).selectNodeIterator(M);Sa.hasNext();){var
I=Sa.next();var
Ja=I.getValue();var
sa=Ja.substring(1,Ja.length-1);var
A=null;if(sa.match(e.zp)){sa=RegExp.leftContext;A=RegExp.$1;}var
Xa=h.get(sa);if(typeof Xa!=ub.P)if(A!=null&&Xa instanceof Object)I.setValue(Xa[A]);else I.setValue(Xa);}}else{var
M=ub.Q+s.join(ub.R);for(var
ba=(this.getXML()).selectNodeIterator(M);ba.hasNext();){var
I=ba.next();var
Ja=I.getValue();if(Ja.indexOf(ub.S)==0&&jsx3.util.strEndsWith(Ja,ub.T)){var
sa=Ja.substring(1,Ja.length-1);var
A=null;if(sa.match(e.zp)){sa=RegExp.leftContext;A=RegExp.$1;}var
Xa=h.get(sa);if(typeof Xa!=ub.P)if(A!=null&&Xa instanceof Object)I.setValue(Xa[A]);else I.setValue(Xa);}}}};e.newDocument=function(){var
xb=new
jsx3.xml.Document();xb.loadXML(ub.U+ub.a+ub.V);return xb;};e.getKey=function(){return ub.W+(e.cN++
).toString(36);};e.getVersion=function(){return ub.X;};});jsx3.Class.defineClass("jsx3.xml.CDF.Document",jsx3.xml.Document,[jsx3.xml.CDF],function(f,n){var
ub={a:"<",b:"data",c:' jsxid="jsxroot"/>'};n.getXML=function(){return this;};n.redrawRecord=function(a,l){};n.cloneDocument=function(){return f.wrap(this.jsxsuper());};f.newDocument=function(){var
Q=new
f();Q.loadXML(ub.a+ub.b+ub.c);return Q;};f.wrap=function(k){return new
f(k.getNativeDocument());};});jsx3.CDF=jsx3.xml.CDF;jsx3.Class.defineClass("jsx3.app.DOM",null,[jsx3.util.EventDispatcher],function(e,q){var
ub={a:"change",b:"_jsx_",c:"_",d:"mH",e:"QH",f:""};e.Xz={};e.U4={};e.j6={};e.Z8=0;e.TYPEADD=0;e.TYPEREMOVE=1;e.TYPEREARRANGE=2;e.EVENT_CHANGE=ub.a;e.newId=function(d){var
la=e.D9(d);return ub.b+la+ub.c+(e.NU(la)).toString(36);};e.D9=function(m){if(e.U4[m]==null){var
Eb=(e.Z8++
).toString(36);e.U4[m]=Eb;e.j6[Eb]=m;}return e.U4[m];};e.NU=function(m){if(e.Xz[m]==null)e.Xz[m]=0;return ++e.Xz[m];};e.getNamespaceForId=function(i){var
G=i.substring(5,i.indexOf(ub.c,5));return e.j6[G];};q.init=function(){this.mH={};this.QH={};};q.destroy=function(){delete this[ub.d];delete this[ub.e];};q.get=function(d){return this.mH[d]||this.getByName(d);};q.getByName=function(i){var
Jb=this.QH[i];return Jb!=null?Jb.get(0):null;};e.l9=[];q.getAllByName=function(j){var
W=this.QH[j];return W!=null?W.toArray():e.l9;};q.getById=function(f){return this.mH[f];};q.add=function(b){this.mH[b.getId()]=b;var
gb=b.getName();if(gb!=null&&gb!==ub.f)if(this.QH[gb]==null)this.QH[gb]=jsx3.util.List.wrap([b]);else this.QH[gb].add(b,0);};q.remove=function(i){delete this.mH[i.getId()];var
ka=this.QH[i.getName()];if(ka!=null)ka.remove(i);};q.onNameChange=function(d,s){var
O=this.QH[s];if(O!=null)O.remove(d);var
ta=d.getName();if(ta!=null&&ta!==ub.f)if(this.QH[ta]==null)this.QH[ta]=jsx3.util.List.wrap([d]);else this.QH[ta].add(d,0);};q.onChange=function(f,l,g){this.publish({subject:ub.a,type:f,parentId:l,jsxId:g});};});jsx3.DOM=jsx3.app.DOM;jsx3.Class.defineClass("jsx3.app.Server",null,[jsx3.util.EventDispatcher,jsx3.net.URIResolver],function(o,a){var
ub={A:"@Solid Light",Aa:"height:",B:"GUIREF",Ba:"HEIGHT",C:"NAMESPACE",Ca:'<div id="',D:"JSXINVISIBLE",Da:'" style="position:',E:'<div class="jsx30block jsx30env">',Ea:'"></div>',F:"<b>Version:</b> ",Fa:"serv.err_paint",G:"3.8.0; build 399db",Ga:"onload",H:"<br/>",Ha:"serv.err_onload",I:"<b>XML Version:</b> ",Ia:"jsx3.app.Server.help.",J:"<b>System Locale:</b> ",Ja:"jsx3.app.Server.help",K:"<b>Browser:</b> ",Ka:"R9",L:"<b>Operating System:</b> ",La:"objectseturl",M:" (",Ma:"px",N:")",Na:"?",O:"<hr/>",Oa:"&",P:"<b>",Pa:"css",Q:"namespace",Qa:"jss",R:"</b>",Ra:"ljss",S:"<div>",Sa:"serv.err_jss",T:"<b>Path:</b> ",Ta:"xml",U:"version",Ua:"xsl",V:"</div>",Va:"script",W:"config.xml",Wa:"services",X:"JSX_SETTINGS",Xa:"jsx3.net.Service",Y:"serv.err_set",Ya:"strType",Z:"apppath",Za:"serv.err_unload",_:"onunload",_a:"includes",a:"inited",aa:"serv.err_onun",ab:"serv.err_badid",b:"help",ba:"jsx3.gui.Painted",bb:"=",c:"JSX",ca:"LIQUID",cb:"; expires=",d:"jsxsettings",da:"_jsxje",db:"; path=",e:/\/*$/,ea:"change",eb:"; domain=",f:"",fa:"keydown",fb:"; secure",g:"undefined",ga:"checkHotKeys",gb:"; ",h:"object",ha:"jsx3.gui.Alerts",hb:"jsx3.gui.Window",i:"/",ia:"BODYHOTKEYS",ib:"JSXWINDOWS",j:"JSXAPPS",ja:"C2",jb:"strName",k:"liquid",ka:"jsx3.app.Server.",kb:"serv.win_err",l:"eventsvers",la:"();",lb:"serv.win_notwin",m:"jsxversion",ma:"if (jsx3.EventHelp.isDragging()) jsx3.EventHelp.reset();",mb:"serv.win_name",n:"3.1",na:"OVERFLOW",nb:"3.2",o:"jsxabspath",oa:"overflow:auto;",ob:"apppathuri",p:"serv.no_ns",pa:"overflow:hidden;",pb:"apppathabs",q:"caption",qa:"POSITION",qb:"apppathrel",r:"cancelrightclick",ra:"relative",rb:"jsxapp",s:"return false;",sa:"absolute",sb:/\//g,t:"cancelerror",ta:"left:",tb:"!",u:"jsx3.gui.Block",ua:"LEFT",ub:/!/g,v:"JSXROOT",va:";",vb:"default_locale",w:"jsxbgcolor",wa:"top:",wb:"addins",x:"@Solid DarkShadow",xa:"TOP",xb:" ",y:"JSXBODY",ya:"width:",yb:":",z:"100%",za:"WIDTH",zb:"3.00.00"};jsx3.util.EventDispatcher.jsxclass.mixin(o);var
Pa=jsx3.gui.Event;var
Qa=jsx3.net.URIResolver;var
Sa=jsx3.app.Browser;var
ea=null;var
na=jsx3.util.Logger.getLogger(o.jsxclass.getName());o.Z_DIALOG=2;o.Z_DRAG=3;o.Z_MENU=4;o.INITED=ub.a;o.HELP=ub.b;o.TV=ub.c;o.TL=new
jsx3.util.List();a.JSXROOT=null;a.JSXBODY=null;a.Cache=null;a.ENVIRONMENT=null;a.DOM=null;a.JSS=null;a.init=function(m,h,p,r){this.DOM=new
jsx3.app.DOM();this.Cache=new
jsx3.app.Cache();this.Cache.addParent(jsx3.getSharedCache());if(r!=null&&r.jsxsettings!=null){this._jsxQZ=r.jsxsettings;delete r[ub.d];}this.ENVIRONMENT=r=r!=null?jsx3.clone(r):{};r.apppath=m.replace(ub.e,ub.f);var
Na=this.getSettings();var
cb=Na.get();for(var _ in cb){var
Ia=_.toLowerCase();if(typeof r[Ia]==ub.g&&typeof cb[_]!=ub.h)r[Ia]=cb[_];}r.apppathuri=new
jsx3.net.URI(r.apppath+ub.i);if(r.jsxappbase)r.apppathuri=r.apppathuri.resolve(r.jsxappbase);var
Nb=r.apppath.indexOf(ub.j);if(Nb>=0)r.apppathrel=r.apppath.substring(Nb+"JSXAPPS".length+1);r.apppathabs=(Sa.getLocation()).resolve(r.apppathuri);if(r[ub.k]==null)r[ub.k]=true;if(r[ub.l]==null)r[ub.l]=3;if(r[ub.m]==null)r[ub.m]=ub.n;r.abspath=jsx3.getEnv(ub.o);r.guiref=h;r.namespace=r.jsxappns||r.namespace;if(r.namespace==null)throw new
jsx3.Exception(jsx3._msg(ub.p,m));if(h&&this.getEnv(ub.q))h.ownerDocument.title=this.getEnv(ub.q);if(h&&this.getEnv(ub.r))h.ownerDocument.oncontextmenu=new
Function(ub.s);if(this.getEnv(ub.t))jsx3.NativeError.initErrorCapture();o.TL.add(this);jsx3.registerApp(this);this.JSS=new
jsx3.app.Properties();this.LJSS=new
jsx3.app.Properties();this.JSS.addParent(this.LJSS);this.JSS.addParent(jsx3.System.JSS);o.publish({subject:o.INITED,target:this});if(p)this.paint();};a.RZ=function(){jsx3.require(ub.u);ea=jsx3.gui.Block;if(this.JSXROOT)return;var
Xa=this.JSXROOT=this._r(ub.v);Xa.setDynamicProperty(ub.w,ub.x);Xa.setRelativePosition(0);Xa.setOverflow(3);Xa.setAlwaysCheckHotKeys(true);Xa.setIndex(1);var
Za=this.JSXBODY=new
ea(ub.y,0,0,ub.z,ub.z,ub.f);Za.setDynamicProperty(ub.w,ub.A);Za.setRelativePosition(0);Za.setZIndex(1);(Za.setOverflow(3)).setIndex(0);Xa.setChild(Za);};a.onResize=function(){if(jsx3.CLASS_LOADER.IE){window.clearTimeout(this.resize_timeout_id);var
Eb=this;this.resize_timeout_id=window.setTimeout(function(){Eb.Dv();},250);}else this.Dv();};a.Dv=function(){var
_=this.getEnv(ub.B);if(_)(this.getRootBlock()).Ul({left:0,top:0,parentwidth:_.clientWidth,parentheight:_.clientHeight},true);};a.getNextZIndex=function(f){if(this.sY==null){this.sY=[];this.sY[0]=0;this.sY[1]=1000;this.sY[o.Z_DIALOG]=5000;this.sY[o.Z_DRAG]=7500;this.sY[o.Z_MENU]=10000;this.sY[5]=25000;}return this.sY[f]++;};o.allServers=function(){return o.TL.toArray();};a._r=function(q){if(this._jsxje==null)this._jsxje=[];var
ib=new
ea(q,0,0,ub.z,ub.z,ub.f);ib._jsxYn=this.getEnv(ub.C);ib._jsxid=jsx3.app.DOM.newId(this.getEnv(ub.C));ib._jsxCm=this;this.DOM.add(ib);this._jsxje.push(ib);return ib;};a.getInvisibleRoot=function(){if(this.INVISIBLE==null)this.INVISIBLE=this._r(ub.D);return this.INVISIBLE;};a.getEnv=function(g){return this.ENVIRONMENT[g.toLowerCase()];};o.C2=function(h){var
Ua=[ub.E];Ua.push(ub.F,ub.G,ub.H);Ua.push(ub.I,jsx3.getXmlVersion(),ub.H);Ua.push(ub.J,(jsx3.System.getLocale()).getDisplayName(),ub.H);Ua.push(ub.K,jsx3.CLASS_LOADER+ub.H);Ua.push(ub.L,jsx3.app.Browser.getSystem()+ub.M+navigator.userAgent+ub.N);Ua.push(ub.O);var
ka=null;var
Ib=o.allServers();for(var
pa=0;pa<Ib.length;pa++){var
eb=Ib[pa];Ua.push(ub.P,eb.getEnv(ub.Q),ub.R,ub.S);Ua.push(ub.T,eb.getAppPath(),ub.H);Ua.push(ub.F,eb.getEnv(ub.U),ub.H);Ua.push(ub.V);if(ka==null){ka=eb.getRootBlock();if(ka.getRendered()==null)ka=null;}}Ua.push(ub.V);Ua=Ua.join(ub.f);if(ka)ka.showSpy(Ua,Math.round((ka.getRendered()).clientWidth/2),Math.round((ka.getRendered()).clientHeight/2-100));else window.alert(Ua);};a.getSettings=function(){if(this._jsxQZ==null){var
Ta=(this.getCache()).getOrOpenDocument(jsx3.resolveURI(this.getAppPath()+ub.i+ub.W),ub.X);if(Ta.hasError()){na.error(jsx3._msg(ub.Y,this,Ta.getError()));Ta=null;}this._jsxQZ=new
jsx3.app.Settings(Ta);}return this._jsxQZ;};a.getAppPath=function(){return this.getEnv(ub.Z);};o.jy=function(q){return q instanceof jsx3.gui.WindowBar&&q.getType()==3;};a.getTaskBar=function(k){if(!jsx3.gui.WindowBar)return null;if(k==null)k=this.JSXROOT;return k.findDescendants(o.jy,false,false,false,true);};a.destroy=function(){var
ab=this.getEnv(ub._);if(ab)try{this.eval(ab);}catch(Kb){na.error(jsx3._msg(ub.aa,this),jsx3.NativeError.wrap(Kb));}if(jsx3.Class.forName(ub.ba))jsx3.gui.Painted.Box.unregisterServer(this,this.getEnv(ub.ca));if(this.JSXROOT){var
pa=this.JSXROOT.getRendered();if(pa){if(pa.parentNode.id==o.TV)pa=pa.parentNode;jsx3.html.removeNode(pa);}}if(this._jsxje)for(var
Ba=0;Ba<this._jsxje.length;Ba++){var
Cb=this._jsxje[Ba];Cb.removeChildren();}delete this[ub.da];this.DOM.unsubscribeAllFromAll();this.DOM.destroy();this.Cache.unsubscribeAll(ub.ea);this.Cache.destroy();jsx3.deregisterApp(this);o.TL.remove(this);Pa.unsubscribe(ub.fa,this,ub.ga);this.ENVIRONMENT={};};a.paint=function(j){jsx3.require(ub.ha,ub.u);ea=jsx3.gui.Block;if(!jsx3.gui.Alerts.jsxclass.isAssignableFrom(o.jsxclass))o.jsxclass.addInterface(jsx3.gui.Alerts.jsxclass);jsx3.html.getMode(this.getEnv(ub.B));this.RZ();jsx3.gui.Painted.Box.registerServer(this,this.getEnv(ub.ca));if(this.getEnv(ub.ia))Pa.subscribe(ub.fa,this,ub.ga);var
qa=ub.ja;this.registerHotKey(new
Function(ub.ka+qa+ub.la),74,true,true,true);this.registerHotKey(new
Function(ub.ma),27,false,false,false);this._regHelpKey();var
aa=this.getEnv(ub.B);if(aa){var
tb=ub.f;var
fb=this.getEnv(ub.na);if(fb==1){tb=ub.oa;}else if(fb==2)tb=ub.pa;var
vb,z=ub.f,nb=ub.f;if(this.getEnv(ub.qa)==0){vb=ub.ra;}else{vb=ub.sa;z=ub.ta+this.getEnv(ub.ua)+ub.va;nb=ub.wa+this.getEnv(ub.xa)+ub.va;}var
bb=ub.ya+this.getEnv(ub.za)+ub.va;var
ua=ub.Aa+this.getEnv(ub.Ba)+ub.va;aa.innerHTML=ub.Ca+o.TV+ub.Da+vb+ub.va+tb+z+nb+bb+ua+ub.Ea;aa=aa.lastChild;this.JSXROOT.tl({left:0,top:0,parentwidth:aa.clientWidth,parentheight:aa.clientHeight});if(aa)aa.innerHTML=this.JSXROOT.paint();}try{this.Ec(j);}catch(Kb){na.fatal(jsx3._msg(ub.Fa,this),jsx3.NativeError.wrap(Kb));}try{this.eval(this.getEnv(ub.Ga));}catch(Kb){na.fatal(jsx3._msg(ub.Ha,this),jsx3.NativeError.wrap(Kb));}};a._regHelpKey=function(){var
lb=this.getDynamicProperty(ub.Ia+jsx3.app.Browser.getSystem())||this.getDynamicProperty(ub.Ja);if(lb)this.registerHotKey(jsx3.gui.HotKey.valueOf(lb,jsx3.makeCallback(ub.Ka,this)));};a.Ec=function(l){var
tb=null;if(l){tb=this.JSXBODY.loadXML(l,true);}else{var
Ab=this.getEnv(ub.La);if(Ab)tb=this.JSXBODY.load(Ab,true);}if(tb)tb.setPersistence(1);};a.setDimensions=function(m,p,g,q){if(jsx3.$A.is(m)){p=m[1];g=m[2];q=m[3];m=m[0];}var
Ya=this.JSXROOT.getRendered();if(Ya){if(m)Ya.parentNode.style.left=m+ub.Ma;if(p)Ya.parentNode.style.top=p+ub.Ma;if(g)Ya.parentNode.style.width=g+ub.Ma;if(q)Ya.parentNode.style.height=q+ub.Ma;}};a.loadInclude=function(g,m,d,r){if(m==null)m=ub.f;var
Ca=r?((g+ub.f).indexOf(ub.Na)==-1?ub.Na:ub.Oa)+(new
Date()).valueOf():ub.f;if(d==ub.Pa){jsx3.CLASS_LOADER.loadResource(g+Ca,m,d);}else if(d==ub.Qa||d==ub.Ra&&!jsx3.app.PropsBundle){var
Mb=this.Cache.openDocument(g,m);if(Mb.hasError()){jsx3.util.Logger.GLOBAL.error(jsx3._msg(ub.Sa,+g,Mb.getError()));}else (this.getProperties()).loadXML(Mb,m);}else if(d==ub.Ra){var
R=this.getCache();if(r){var
Ga=this.LJSS.getParents();for(var
O=0;O<Ga.length;O++)if(Ga[O].getPath()==g)this.LJSS.removeParent(Ga[O]);jsx3.app.PropsBundle.clearCache(g,R);}this.LJSS.addParent(jsx3.app.PropsBundle.getProps(g,this.getLocale(),R));}else if(d==ub.Ta||d==ub.Ua){return this.Cache.openDocument(g,m);}else if(d==ub.Va){this.unloadInclude(m);jsx3.CLASS_LOADER.loadResource(g+Ca,m,d);}else if(d==ub.Wa){jsx3.require(ub.Xa);return (new
jsx3.net.Service(g)).setNamespace(this);}else throw new
jsx3.IllegalArgumentException(ub.Ya,d);};a.unloadInclude=function(k){var
qb=(this.getRootDocument()).getElementById(k);try{if(qb)qb.parentNode.removeChild(qb);}catch(Kb){na.warn(jsx3._msg(ub.Za,k,this),jsx3.NativeError.wrap(Kb));}};a.loadResource=function(l){var
D=this.getSettings();var
F=((jsx3.util.List.wrap(D.get(ub._a))).filter(function(f){return f.id==l;})).toArray(true);var
la;for(var
pb=0;pb<F.length;pb++){var
da=F[pb];la=this.loadInclude(this.resolveURI(da.src),da.id,da.type);}if(F.length==0)na.warn(jsx3._msg(ub.ab,l));return la;};a.setDynamicProperty=function(q,d){var
Z=this.getProperties();Z.set(q,d);};a.getDynamicProperty=function(g,r){var
ka=(this.getProperties()).get(g);if(arguments.length>1&&jsx3.util.MessageFormat)try{var
S=new
jsx3.util.MessageFormat(ka);var
ab=new
Array(arguments.length-1);for(var
u=1;u<arguments.length;u++)ab[u-1]=arguments[u];return S.format(ab);}catch(Kb){}return ka;};a.setCookie=function(m,r,j,k,e,d,n){(this.getRootDocument()).cookie=m+ub.bb+(n?r:escape(r))+(j?ub.cb+j.toGMTString():ub.f)+(k?ub.db+k:ub.f)+(e?ub.eb+e:ub.f)+(d?ub.fb:ub.f);};a.getCookie=function(s,m){var
Aa=this.getRootDocument();var
Mb=Aa.cookie;var
V=s+ub.bb;var
wa=Mb.indexOf(ub.gb+V);if(wa==-1){wa=Mb.indexOf(V);if(wa!=0)return null;}else wa=wa+2;var
Nb=Aa.cookie.indexOf(ub.va,wa);if(Nb==-1)Nb=Mb.length;var
T=Mb.substring(wa+V.length,Nb);return m?T:unescape(T);};a.deleteCookie=function(q,h,k){this.setCookie(q,ub.f,new
Date(1970,0,1),h,k);};a.getRootBlock=function(){if(this.JSXROOT==null)this.RZ();return this.JSXROOT;};a.getAlertsParent=function(){return this.getRootBlock();};a.getBodyBlock=function(){if(this.JSXROOT==null)this.RZ();return this.JSXBODY;};a.getRootObjects=function(){return (this.JSXBODY.getChildren()).concat();};a.getCache=function(){return this.Cache;};a.getProperties=function(){return this.JSS;};a.getDOM=function(){return this.DOM;};a.getJSX=function(c){return this.DOM.get(c);};a.getJSXByName=function(q){return this.DOM.getByName(q);};a.getJSXById=function(c){return this.DOM.getById(c);};a.beep=function(){if(!jsx3.gui.WindowBar)return;var
la=this.JSXROOT.findDescendants(function(j){return j instanceof jsx3.gui.WindowBar&&j.getType()==2;},false,false);if(la!=null)la.beep();};a.createAppWindow=function(i){jsx3.require(ub.hb);if(this.WINDOWS==null)this.WINDOWS=this._r(ub.ib);if(this.WINDOWS.getChild(i)!=null)throw new
jsx3.IllegalArgumentException(ub.jb,i);var
Q=new
jsx3.gui.Window(i);this.WINDOWS.setChild(Q);return Q;};a.loadAppWindow=function(e,j){jsx3.require(ub.hb);if(this.WINDOWS==null)this.WINDOWS=this._r(ub.ib);var
J=null;if(e instanceof jsx3.xml.Entity)J=this.WINDOWS.loadXML(e,false,j);else J=this.WINDOWS.load(e,false,j);if(J==null)throw new
jsx3.Exception(jsx3._msg(ub.kb,e));if(!(J instanceof jsx3.gui.Window)){(J.getParent()).removeChild(J);throw new
jsx3.Exception(jsx3._msg(ub.lb,e,J.getClass()));}if(this.WINDOWS.getChild(J.getName())!=J){(J.getParent()).removeChild(J);throw new
jsx3.Exception(jsx3._msg(ub.mb,e,J.getName()));}return J;};a.getAppWindow=function(k){if(this.WINDOWS!=null)return this.WINDOWS.getChild(k);return null;};a.getDocumentOf=function(i){var
B=i;while(B!=null){if(jsx3.gui.Window&&B instanceof jsx3.gui.Window)return B.getDocument();if(B._jsxCm!=null)return this.getRootDocument();B=B.getParent();}return this.getRootDocument();};a.getRootDocument=function(){var
F=this.getEnv(ub.B);return F!=null?F.ownerDocument:null;};a.getRenderedOf=function(l){var
va=l.getId();var
W=this.getRootDocument();if(W==null)return null;var
Ib=W.getElementById(va);if(Ib==null&&this.WINDOWS!=null){var
K=this.WINDOWS.getChildren();for(var
Oa=0;Ib==null&&Oa<K.length;Oa++){var
ka=K[Oa].getDocument();if(ka)Ib=ka.getElementById(va);}}return Ib;};a.registerHotKey=function(j,e,h,n,l){return (this.getRootBlock()).registerHotKey(j,e,h,n,l);};a.checkHotKeys=function(n){return (this.getRootBlock()).checkHotKeys(n.event);};a.getServer=function(){return this;};a.isAtLeastVersion=function(e){return jsx3.util.compareVersions(this.getEnv(ub.m),e)>=0;};a.resolveURI=function(f){var
Ba=jsx3.net.URI.valueOf(f);if(this.isAtLeastVersion(ub.nb)&&!Qa.isAbsoluteURI(Ba)){var
M=this.getEnv(ub.ob);Ba=M.resolve(Ba);}return Qa.DEFAULT.resolveURI(Ba);};a.getUriPrefix=function(){return (this.getEnv(ub.ob)).toString();};a.relativizeURI=function(e,l){var
ob=Sa.getLocation();var
Oa=this.getEnv(ub.pb);var
y=Oa.relativize(ob.resolve(e));if(y.isAbsolute()||l){return y;}else{var
pb=this.getEnv(ub.qb);if(pb){return jsx3.net.URI.fromParts(ub.rb,null,pb.replace(ub.sb,ub.tb),null,ub.i+y.getPath(),y.getQuery(),y.getFragment());}else return jsx3.net.URI.fromParts(null,null,null,null,this.getEnv(ub.Z)+ub.i+y.getPath(),y.getQuery(),y.getFragment());}};Qa.register(ub.rb,function(g){var
Y=g.getHost();if(Y){var
x=Y.replace(ub.ub,ub.i);var
Mb=jsx3.System.getAppByPath(x);return Mb||new
o.Resolver(x);}return Qa.DEFAULT;});a.getLocale=function(){if(this.IB==null)this.IB=this.getDefaultLocale();return this.IB!=null?this.IB:jsx3.System.getLocale();};a.setLocale=function(d){this.IB=d;};a.getDefaultLocale=function(){var
V=(this.getSettings()).get(ub.vb);if(V==null)return null;V=jsx3.util.strTrim(V.toString());return V.length>0&&jsx3.util.Locale?jsx3.util.Locale.valueOf(V):null;};a.reloadLocalizedResources=function(){var
pa=this.LJSS.getParents();this.LJSS.removeAllParents();for(var
zb=0;zb<pa.length;zb++){var
H=jsx3.app.PropsBundle.getProps(pa[zb].getPath(),this.getLocale(),this.getCache());this.LJSS.addParent(H);}};a.R9=function(i){var
ha=jsx3.html.getJSXParent(i.srcElement(),this);if(!ha)ha=this.JSXROOT;return ha?this.invokeHelp(ha):false;};a.invokeHelp=function(i){var
Da=null;while(i&&!Da){Da=i.getHelpId();i=i.getParent();}if(Da)this.publish({subject:o.HELP,helpid:Da,model:i});return Boolean(Da);};a.getAddins=function(){var
vb=[];var
eb=(this.getSettings()).get(ub.wb);if(eb)for(var
Ua=0;Ua<eb.length;Ua++){var
y=jsx3.System.getAddin(eb[Ua]);if(y)vb.push(y);}return vb;};a.toString=function(){return this.jsxsuper()+ub.xb+this.getAppPath()+ub.yb+this.getEnv(ub.Q);};o.getVersion=function(){return ub.zb;};});if(jsx3.gui.Alerts)jsx3.app.Server.jsxclass.addInterface(jsx3.gui.Alerts.jsxclass);jsx3.Server=jsx3.app.Server;jsx3.Class.defineClass("jsx3.app.Server.Resolver",null,[jsx3.net.URIResolver],function(c,a){var
ub={a:"jsxhomepath",b:"JSXAPPS",c:"/",d:/!/g,e:"jsxapp"};var
ea=jsx3.net.URIResolver;a.init=function(q){this._host=q;this._uri=new
jsx3.net.URI(jsx3.getEnv(ub.a)+ub.b+ub.c+q.replace(ub.d,ub.c)+ub.c);};a.resolveURI=function(o){var
H=jsx3.net.URI.valueOf(o);if(!ea.isAbsoluteURI(H))H=ea.DEFAULT.resolveURI(this._uri.resolve(H));return ea.DEFAULT.resolveURI(H);};a.getUriPrefix=function(){return this._uri.toString();};a.relativizeURI=function(r,f){var
ca=this._uri.relativize(r);if(ca.isAbsolute()||f)return ca;else return jsx3.net.URI.fromParts(ub.e,null,this._host,null,ub.c+ca.getPath(),ca.getQuery(),ca.getFragment());};a.toString=function(){return this._uri.toString();};});jsx3.Class.defineClass("jsx3.app.Model",null,[jsx3.util.EventDispatcher],function(g,j){var
ub={A:/^\[(\w+)(\(\))?(\*)?=\"?(.*?)\"?\]$/,Aa:"model.bad_type",B:"jsxdomholder",Ba:"jsx1:strings | jsx1:variants | jsx1:dynamics | jsx1:properties | jsx1:events | jsx1:xslparameters",C:"1",Ca:"_jsxSi",D:"undefined",Da:"jsxcustom",E:"serialization",Ea:"_jsxHj",F:"jsxversion",Fa:"jsxxslparams",G:"dynamics",Ga:"jsx1:object | jsx1:include | jsx1:children/jsx1:object | jsx1:children/jsx1:include",H:"properties",Ha:"onafter",I:"events",Ia:"model.onafter",J:"xslparameters",Ja:"response",K:"object",Ka:"error",L:"type",La:"timeout",M:"variants",Ma:"@",N:"strings",Na:" ",O:"model.async_convt",Oa:"/",P:"include",Pa:"3.00.00",Q:"src",R:"async",S:"true",T:"false",U:"model.child_notarr",V:"_jsx",W:"'",X:"[",Y:",",Z:"]",_:"new Date(",a:"urn:tibco.com/v3.0",aa:")",b:"http://xsd.tns.tibco.com/gi/cif/2006",ba:"model.bad_comp",c:"JSXFRAG",ca:"model.bad_compobj",d:"jsx:///xsl/cif_resolver.xsl",da:"jsx3.xml.Template",e:"jsx3.app.Model",ea:"name",f:"string",fa:"icon",g:"url",ga:"description",h:"_jsxDW",ha:"onBeforeDeserialize",i:"vntItem",ia:"onAfterDeserialize",j:"_jsxxK",ja:"objXML",k:"intIndex",ka:"model.bad_vers",l:"number",la:"xmlns",m:"model.clone_frag",ma:"model.future_vers",n:"function",na:"/jsx1:serialization/",o:"unshift",oa:"xmlns:jsx1='",p:"push",pa:"jsx1:onBeforeDeserialize",q:/(\b\w+\b)|(\#[a-zA-Z_]\w*)|(\.[\w\-]+)|(\:[\w\-]+(?:\([^\)]*\))?)|(\[\w+(?:\(\))?\*?=[^\]]*\])|(\*)|( *> *)|( +)/g,qa:"model.onbefore",r:"strExpr",ra:"jsx1:object | ",s:/_/g,sa:"jsx1:objects/jsx1:object | /jsx1:object",t:".",ta:"jsx1:",u:"",ua:"load",v:/\s+/,va:"paint",w:":first",wa:"strKey",x:":last",xa:"jsx1:variants/@jsxloadtype",y:/:nth(?:\-child)?\( *(\d+) *\)/,ya:"jsx3.gui.Painted",z:/:instanceof\( *(\S+?) *\)/,za:"model.load_cls"};var
ka=jsx3.xml.Entity;var
Sa=jsx3.xml.Document;var
G=jsx3.IllegalArgumentException;g.PERSISTNONE=0;g.PERSISTEMBED=1;g.PERSISTREF=2;g.PERSISTREFASYNC=3;g.LT_NORMAL=0;g.LT_SLEEP_PAINT=1;g.LT_SLEEP_DESER=2;g.LT_SLEEP_PD=3;g.LT_SHOW_PAINT=4;g.LT_SHOW_DESER=5;g.CURRENT_VERSION=ub.a;g.CIF_VERSION=ub.b;g.FRAGMENTNS=ub.c;g.ASYNC_LOAD_TIMEOUT=60000;g.XT=jsx3.resolveURI(ub.d);j._jsxid=null;j._jsxxK=null;j._jsxSZ=null;j._jsxYn=null;j._jsxCm=null;j._jsxDW=null;j._jsxX2=null;j._jsxFY=null;j._jsxhq=true;j.init=function(c,f){this.jsxsuper();this.jsxinstanceof=f==null?ub.e:f;this.jsxname=c;};j.getChild=function(f){var
da=null;if(this._jsxSZ!=null){if(typeof f==ub.f||isNaN(f)){var
Za=-1;var
Na=this.getChildren();var
yb=Na.length;for(var
Ta=0;Ta<yb;Ta++)if(f==Na[Ta].getName()){da=Ta;break;}}else da=f;if(da>=0&&da<this._jsxSZ.length)return this._jsxSZ[da];}return null;};j.getFirstChild=function(){return this.getChild(0);};j.getLastChild=function(){return this.getChild((this.getChildren()).length-1);};j.getNextSibling=function(){if(!this._jsxxK)return null;return this._jsxxK.getChild(this.getChildIndex()+1);};j.getPreviousSibling=function(){if(!this._jsxxK)return null;return this._jsxxK.getChild(this.getChildIndex()-1);};j.getChildren=function(){if(this._jsxSZ==null)this._jsxSZ=[];return this._jsxSZ;};j.getPersistence=function(){return this._jsxX2;};j.getPersistenceUrl=function(){return this.getMetaValue(ub.g);};j.setPersistence=function(c){this._jsxX2=c;return this;};j.setChild=function(o,q,h,i){if(!this.onSetChild(o)||!o.onSetParent(this))return false;var
ia=false;if(i==null&&this._jsxYn==null){i=ub.c;}else if(i!=null){ia=true;}else i=this._jsxYn;var
Ib=this.getServer();if(i!=ub.c&&Ib&&this._jsxYn==i){this.Yp(o,i,o._jsxDW!=null,Ib);}else this._jsxDW=1;var
ta=this._jsxSZ;if(!ta)ta=this._jsxSZ=[];ta[ta.length]=o;o._jsxxK=this;if(q==null)q=0;o._jsxX2=q;if(h&&(q==2||q==3))o.setMetaValue(ub.g,h.toString());this.onChildAdded(o);if(!ia&&i!=ub.c)(Ib.getDOM()).onChange(0,this.getId(),o.getId());return this;};j.onSetChild=function(f){return true;};j.onSetParent=function(r){return true;};j.onRemoveChild=function(p,c){};j.onChildAdded=function(b){};j.hasPaintProfile=function(){return false;};j.Yp=function(p,c,f,n){p._jsxYn=c;p.tk(c);(n.getDOM()).add(p);if(f){delete p[ub.h];var
wb=p.getChildren();var
pa=wb.length;for(var
na=0;na<pa;na++)p.Yp(wb[na],c,true,n);}};j.tk=function(r){this._jsxid=jsx3.app.DOM.newId(r);};j.removeChild=function(a){var
V=-1;if(!isNaN(a)){V=Number(a);}else if(a instanceof jsx3.app.Model){V=a._jsxxK==this?a.getChildIndex():-1;}else throw new
G(ub.i,a);var
Lb=this.getChild(V);if(Lb!=null){var
pb=this.getServer();this.f7(V,pb);this.onRemoveChild(Lb,V);(pb.getDOM()).onChange(1,this.getId(),Lb.getId());}};j.f7=function(o,p,f){if(o>=0&&o<(this.getChildren()).length){var
x=this.getChild(o);if(!f)x.qd(this);var
Ya=(x.getChildren()).length;for(var
ea=Ya-1;ea>=0;ea--)x.f7(ea,p,true);(p.getDOM()).remove(x);delete x[ub.j];if(!f)this._jsxSZ.splice(o,1);else if(o==0)this._jsxSZ.splice(0,this._jsxSZ.length);x.onDestroy(this);}else throw new
G(ub.k,o);};j.removeChildren=function(q){var
gb=this.getServer();if(q==null){q=(this.getChildren()).concat();for(var
ha=q.length-1;ha>=0;ha--){q[ha].qd(this);this.f7(ha,gb,true);}}else{var
ib=null;q=q.concat();for(var
ha=q.length-1;ha>=0;ha--){var
Aa=q[ha];if(typeof Aa==ub.l){ib=Aa;q[ha]=this.getChild(ib);}else ib=Aa.getChildIndex();this.f7(ib,gb,false);}}if(q.length>0)this.onRemoveChild(q,null);return this;};j.getServer=function(){var
t=this;while(t){if(t._jsxCm)return t._jsxCm;t=t._jsxxK;}return null;};j._getLocale=function(){var
t=this.getServer();return t!=null?t.getLocale():jsx3.System.getLocale();};j._getLocaleProp=function(a){return (jsx3.System.getLocaleProperties(this._getLocale())).get(a);};j.adoptChild=function(d,b,l){this.Zy(d.getChildIndex(),d,b,l,false);};j.adoptChildrenFrom=function(k,p,i,d){if(!p)p=(k.getChildren()).concat();if(p.length>0){for(var
ea=0;ea<p.length;ea++)this.Zy(p[ea].getChildIndex(),p[ea],i,d,true);k.onRemoveChild(p,null);for(var
ea=0;ea<p.length;ea++)this.onChildAdded(p[ea]);}};j.Os=function(a,e){if(a==e||a==e-1)return false;var
zb=this.getChildren();var
Pa=a<e?e-1:e;var
t=zb.splice(a,1);var
fb=zb.splice(0,Pa);this._jsxSZ=fb.concat(t,zb);this.onChildAdded(t[0]);((this.getServer()).getDOM()).onChange(2,this.getId(),e);return true;};j.insertBefore=function(i,s,d){var
M=true;if(!i._jsxxK||!s){M=this.setChild(i);}else if(i._jsxxK!=this)M=this.Zy(i.getChildIndex(),i,false,true,true);if(M){if(s)M=this.Os(i.getChildIndex(),s.getChildIndex());if(d!==false)this.repaint();}return M;};j.Zy=function(m,f,r,o,i){if(o){this.onSetChild(f);f.onSetParent(this);}else if(!this.onSetChild(f)||!f.onSetParent(this))return false;var
Y=f._jsxxK;delete f[ub.j];f.clearBoxProfile(true);if(Y._jsxSZ!=null)Y._jsxSZ.splice(m,1);f.qd(Y);if(!i)Y.onRemoveChild(f,m);var
Fb=Y.getServer();var
Ia=this.getServer();var
ca=Fb!=Ia;if(ca)this.eY(f,Y,Fb,Ia);(Fb.getDOM()).onChange(1,Y.getId(),f.getId());var
P=this._jsxSZ;if(!P)P=this._jsxSZ=[];P[P.length]=f;f._jsxxK=this;if(!i)this.onChildAdded(f);if(r!==false)this.hk(f,i&&Y._jsxSZ.length>0);(Ia.getDOM()).onChange(0,this.getId(),f.getId());return this;};j.hk=function(c,s){};j.qd=function(r){var
Y=(r.getServer()).getRenderedOf(this);if(Y)jsx3.html.removeNode(Y);};j.eY=function(e,k,a,p){(a.getDOM()).remove(e);e._jsxYn=this._jsxYn;(p.getDOM()).add(e);e.onChangeServer(p,a);var
Mb=e.getChildren();for(var
wa=0;wa<Mb.length;wa++)e.eY(Mb[wa],null,a,p);};j.onChangeServer=function(h,i){};j.doClone=function(f,m){var
wb=m==2?(this.getServer()).getRootBlock():this._jsxxK;if(wb){var
sa=wb.rx(this.toXMLDoc(),m<1,f,null,null,m==2?ub.c:null);return sa?sa[0]:null;}else throw new
jsx3.Exception(jsx3._msg(ub.m,this));};j.getDescendantOfName=function(q,h,b){return this.findDescendants(function(k){return k.getName()==q;},h,false,b,false);};j.getFirstChildOfType=function(h,p){if(p){var
H=null;if(typeof h==ub.f)H=jsx3.Class.forName(h);else if(typeof h==ub.n&&h.jsxclass instanceof jsx3.Class)H=h.jsxclass;else if(h instanceof jsx3.Class)H=h;return this.findDescendants(function(b){return (b.getClass()).equals(H);},false,false,true,false);}else return this.findDescendants(function(i){return i.instanceOf(h);},false,false,true,false);};j.getDescendantsOfType=function(p,f){return this.findDescendants(function(h){return h.instanceOf(p);},false,true,f,false);};j.findDescendants=function(d,o,e,h,a){var
Pa=o?ub.o:ub.p;var
pb=e?[]:null;var
ya=a?[this]:(this.getChildren()).concat();while(ya.length>0){var
xb=ya.shift();if(d.call(null,xb))if(e)pb[pb.length]=xb;else return xb;if(!h)ya[Pa].apply(ya,xb.getChildren());}return pb;};j.selectDescendants=function(q,s){var
ua=ub.q;var
Va=jsx3.$A([this]);var
Lb=null;var
Xa=true;var
I=true;var
B=(this.getServer()).getRootBlock()==this;var
A=false;ua.lastIndex=0;var
Eb=0,eb=null;while((eb=ua.exec(q))&&!A){if(Eb!=eb.index)throw new
G(ub.r,q);var
ja=null;if(eb[1]){if(Lb)throw new
G(ub.r,q);var
zb=eb[1].replace(ub.s,ub.t);ja=(function(m){return (m.getClass()).getName()==zb;});}else if(eb[2]){var
ga=eb[2].substring(1);if(B){Lb=jsx3.$A(((this.getServer()).getDOM()).getAllByName(ga));}else ja=(function(o){return o.getName()==ga;});}else if(eb[3]){var
zb=eb[3].substring(1);ja=(function(k){return typeof k.getClassName==ub.n&&(jsx3.$A((k.getClassName()||ub.u).split(ub.v))).contains(zb);});}else if(eb[4]){if(eb[4]==ub.w){ja=(function(k){return k.getChildIndex()==0;});}else if(eb[4]==ub.x){ja=(function(m){var
vb=(m.getParent()).getChildren();return m===vb[vb.length-1];});}else if(ub.y.test(eb[4])){var
Ua=parseInt(RegExp.$1);ja=(function(f){return f.getChildIndex()==Ua;});}else if(ub.z.test(eb[4])){var
vb=jsx3.Class.forName(RegExp.$1);ja=(function(a){return vb&&a.instanceOf(vb);});}else throw new
G(ub.r,q);}else if(eb[5]){ub.A.test(eb[5]);var
nb=RegExp.$1,C=RegExp.$2,bb=RegExp.$3,ba=RegExp.$4;ja=(function(b){var
sa=C?b[nb]():b[nb];sa=sa==null?ub.u:String(sa);return bb?ba.length>0&&sa.indexOf(ba)>=0:sa===ba;});}else if(eb[6]){ja=(function(d){return true;});}else if(!Lb)throw new
G(ub.r,q);else if(Lb.length==0)A=true;else{Va=Lb;Lb=null;Xa=Boolean(eb[8]);I=(B=false);}if(ja)if(Lb)Lb=Lb.filter(ja);else{Lb=jsx3.$A();Va.each(function(n){Lb.addAll(n.findDescendants(ja,false,true,!Xa,I));});Lb=Lb.unique();}Eb=ua.lastIndex;}if(!A&&Eb!=q.length)throw new
G(ub.r,q);return s?Lb[0]:Lb;};j.onDestroy=function(i){};j.getId=function(){return this._jsxid;};j.getChildIndex=function(){var
Oa=this._jsxxK;if(Oa!=null)return jsx3.util.arrIndexOf(Oa.getChildren(),this);return -1;};j.getName=function(){return this.jsxname;};j.setName=function(k){if(k!=null){var
Hb=this.jsxname;this.jsxname=k;var
Da=this.getServer();if(Da)(Da.getDOM()).onNameChange(this,Hb);}return this;};j.getHelpId=function(){return this.jsxhelpid;};j.setHelpId=function(b){this.jsxhelpid=b;};j.getLoadType=function(){return this.jsxloadtype||0;};j.setLoadType=function(p){this.jsxloadtype=p;};j.nf=function(){return this._jsxhq;};j.Dk=function(e){if(this._jsxhq!=e){this._jsxhq=e;if(e){var
Ea=this.getRendered();if(Ea&&(!Ea.firstChild||Ea.getAttribute(ub.B)==ub.C))this.repaint();}}};j.getParent=function(){return this._jsxxK;};j.getAncestorOfType=function(k){return this.findAncestor(function(m){return m.instanceOf(k);},false);};j.getAncestorOfName=function(r){return this.findAncestor(function(i){return i.getName()==r;},false);};j.findAncestor=function(s,n){var
Ba=n?this:this._jsxxK;while(Ba!=null){if(s.call(null,Ba))return Ba;Ba=Ba._jsxxK;}return null;};j.toXML=function(l){return (this.toXMLDoc(l)).serialize(true,l!=null?l.charset:null);};j.toXMLDoc=function(b){if(b==null){b=this._jsxFY;if(b==null)b={};}else if(this._jsxFY!=null){b=jsx3.clone(b);for(var ya in this._jsxFY)if(typeof b[ya]==ub.D)b[ya]=this._jsxFY[ya];}var
gb=g.CURRENT_VERSION;var
Fb=new
jsx3.xml.Document();var
Mb=Fb.createDocumentElement(ub.E,gb);Mb.setAttribute(ub.F,g.KC());for(var ya in g.rp)if(typeof b[ya]!=ub.D){var
E=g.rp[ya];var
xb=Fb.createNode(1,E,gb);xb.appendChild(Fb.createNode(4,b[ya],gb));Mb.appendChild(xb);}if(b.children){var
Ya=(this.getChildren()).length;for(var
ob=0;ob<Ya;ob++)Mb.appendChild((this.getChild(ob)).ln(Fb,b));}else Mb.appendChild(this.ln(Fb,b));return Fb;};g.KC=function(){var
I=(jsx3.System.getVersion()).split(ub.t);return I[0]+ub.t+I[1];};g.bS={_jsxSi:ub.G,jsxcustom:ub.H,_jsxHj:ub.I,jsxxslparams:ub.J};g.bT={"boolean":1,number:1};j.ln=function(q,n){var
Pa=g.CURRENT_VERSION;var
Mb=q.createNode(1,ub.K,Pa);var
D=this.getClass();var
z=D!=null?D.getName():null;if(z==null)z=this.jsxinstanceof;Mb.setAttribute(ub.L,z);var
nb=q.createNode(1,ub.M,Pa);var
Jb=q.createNode(1,ub.N,Pa);Mb.appendChild(nb);Mb.appendChild(Jb);for(var za in g.bS){var
xb=this[za];if(xb!=null&&typeof xb==ub.K){var
qa=g.H0(q,g.bS[za],xb);if(qa!=null){Mb.appendChild(qa);if(g.bS[za]==ub.G&&this._jsxAo)for(var pa in this._jsxAo)qa.removeAttribute(pa);}}}var
A=this._jsxSZ;if(A)if(jsx3.$A.is(A)){var
E=A.length;if(E>0)for(var
Oa=0;Oa<E;Oa++){var
ja=A[Oa];var
rb=ja._jsxX2;if(rb==2||rb==3){if(rb==3&&Oa!=E-1){jsx3.util.Logger.GLOBAL.warn(jsx3._msg(ub.O,this));rb=ja._jsxX2=2;}var
_a=q.createNode(1,ub.P,Pa);_a.setAttribute(ub.Q,ja.getPersistenceUrl());_a.setAttribute(ub.R,rb==3?ub.S:ub.T);Mb.appendChild(_a);}else if(rb==1||n.persistall)Mb.appendChild(ja.ln(q,n));}}else jsx3.util.Logger.GLOBAL.error(jsx3._msg(ub.U,this,this[pa]));for(var pa in this){var
fa=this[pa];var
Bb=typeof fa;if(Bb==ub.n||pa.indexOf(ub.V)==0||fa==null){}else if(jsx3.$A.is(fa)){var
W=new
Array(fa.length);for(var
Oa=0;Oa<fa.length;Oa++){var
Ta=fa[Oa];W[Oa]=g.bT[typeof Ta]?Ta:ub.W+Ta+ub.W;}nb.setAttribute(pa,ub.X+W.join(ub.Y)+ub.Z);}else if(Bb==ub.K){if(fa instanceof Date)nb.setAttribute(pa,ub._+fa.getTime()+ub.aa);}else if(this._jsxSi==null||this._jsxSi[pa]==null)if(g.bT[Bb]){nb.setAttribute(pa,String(fa));}else Jb.setAttribute(pa,fa);}return Mb;};g.H0=function(r,m,f){var
O=null;for(var X in f){if(O==null)O=r.createNode(1,m,g.CURRENT_VERSION);O.setAttribute(X,String(f[X]));}return O;};j.getNS=function(){return this._jsxYn;};j.getUriResolver=function(){var
J=this;while(J!=null){if(J._jsxgd&&J._jsxgd.resolver)return J._jsxgd.resolver;if(J._jsxCm!=null)return J._jsxCm;J=J._jsxxK;}return null;};j.load=function(p,q,s){var
Kb=(s||this.getUriResolver()).resolveURI(p);var
Ba=(new
Sa()).load(Kb);if(Ba.hasError())throw new
jsx3.Exception(jsx3._msg(ub.ba,Kb,Ba.getError()));return (this.rx(Ba,q,null,Kb,p,null,null,s,null))[0];};j.loadXML=function(o,m,i){var
Ua=o instanceof Sa?o:(new
Sa()).loadXML(o);if(Ua.hasError()){var
Hb=Ua.getSourceURL();var
S=Hb?ub.ba:ub.ca;throw new
jsx3.Exception(jsx3._msg(S,Hb,Ua.getError()));}return (this.rx(Ua,m,null,Ua.getSourceURL(),Ua.getSourceURL(),null,null,i,null))[0];};j.loadAndCache=function(p,q,f,s){if(f==null)f=(this.getServer()).getCache();var
x=(s||this.getUriResolver()).resolveURI(p);var
kb=f.getOrOpenDocument(x);if(kb.hasError())throw new
jsx3.Exception(jsx3._msg(ub.ba,x,kb.getError()));return (this.rx(kb,q,null,x,p,null,f,s,null))[0];};g.Z4=function(l){jsx3.require(ub.da);var
oa=(jsx3.getSystemCache()).getOrOpenDocument(g.XT,null,jsx3.xml.XslDocument.jsxclass);return oa.transformToObject(l);};g.rp={name:ub.ea,icon:ub.fa,description:ub.ga,onbefore:ub.ha,onafter:ub.ia};j.rx=function(s,m,a,k,c,l,d,i,p){if(!p||a==3)var
jb=new
jsx3.util.Timer(g.jsxclass,k);if(s==null)throw new
G(ub.ja,s);if(((s.getRootNode()).getNamespaceURI()).indexOf(g.CIF_VERSION)==0){s=g.Z4(s);if(s==null)throw new
G(ub.ja,s);}if(((s.getRootNode()).getNamespaceURI()).indexOf(g.CURRENT_VERSION)!=0){throw new
jsx3.Exception(jsx3._msg(ub.ka,k,(s.getRootNode()).getAttribute(ub.la)));}else{var
Jb=(s.getRootNode()).getAttribute(ub.F);if(Jb&&jsx3.util.compareVersions(Jb,jsx3.System.getVersion())>0)throw new
jsx3.Exception(jsx3._msg(ub.ma,k,Jb));}var
ba=l==ub.c;var
v=ub.na;s.setSelectionNamespaces(ub.oa+g.CURRENT_VERSION+ub.W);var
Cb=s.selectSingleNode(v+ub.pa);if(Cb!=null){var
Bb=Cb.getValue();if(Bb&&!s._jsxQm)try{jsx3.eval(Bb,{objPARENT:this,objXML:s});s._jsxQm=true;}catch(Kb){jsx3.util.Logger.GLOBAL.error(jsx3._msg(ub.qa,k),jsx3.NativeError.wrap(Kb));}}if(l==null)l=this._jsxYn;var
Ya=this.getUriResolver()||p;if(i==null){i=jsx3.net.URIResolver.getResolver(c);}else if(c)if(i.getUriPrefix()!=Ya.getUriPrefix()){c=jsx3.net.URI.valueOf(c);if(!jsx3.net.URIResolver.isAbsoluteURI(c))c=i.relativizeURI(c);}var
Ua=this.getServer();if(p==null)p=Ua;var
Aa=i||Ya;var
eb=s.selectNodeIterator(v+ub.ra+v+ub.sa);var
da=[];var
Ka={uri:k,resolver:i,nameIndex:{},varNameIndex:{}};while(eb.hasNext()){var
I=eb.next();var
x=this.Ec(I,k,l,p,d,Aa,Ka);if(x!=null){da[da.length]=x;if(!ba)var
Z=this.setChild(x,a,k,l);if(Z===false)return false;if(da.length==1){if(c)x.setMetaValue(ub.g,c.toString());for(var R in g.rp){var
yb=s.selectSingleNode(v+ub.ta+g.rp[R]);if(yb!=null)x.setMetaValue(R,yb.getValue());}}if(Ua!=null)x.onAfterAttach();}}if(!ba&&da.length>0&&Ua)(Ua.getDOM()).onChange(0,this.getId(),da[0].getId());if(jb)jb.log(ub.ua,true);if(m!==false){for(var
ha=0;ha<da.length;ha++)this.hk(da[ha],ha<da.length-1);if(jb)jb.log(ub.va);}return da;};g.META_FIELDS={url:1,name:1,icon:1,description:1,onafter:1,onattach:1,onbefore:1,unicode:1};j.getMetaValue=function(f){if(g.META_FIELDS[f])return this._jsxFY?this._jsxFY[f]:ub.u;else throw new
G(ub.wa,f);};j.setMetaValue=function(n,c){if(g.META_FIELDS[n]){if(this._jsxFY==null)this._jsxFY={};this._jsxFY[n]=c;}else throw new
G(ub.wa,n);};j.Ec=function(s,k,l,p,d,i,f){if(s==null)return null;if(!s._jsxye){var
za=s.selectSingleNode(ub.xa);za=za?parseInt(za.getValue()):0;if(za==2||za==3||za==5){jsx3.require(ub.ya);var
bb=new
g.Loading(s,za,[k,l,p,d,i,f]);bb._jsxYn=l;return bb;}}var
t=s.getAttribute(ub.L);var
R=jsx3.Class.forName(t);if(R==null)R=jsx3.getClass(t);if(R==null)try{R=jsx3.CLASS_LOADER.loadClass(t);}catch(Kb){jsx3.util.Logger.GLOBAL.error(jsx3._msg(ub.za,t),jsx3.NativeError.wrap(Kb));}if(R==null){jsx3.util.Logger.GLOBAL.error(jsx3._msg(ub.Aa,k,t));return null;}var
bb=null;if(R instanceof jsx3.Class){bb=R.bless();}else{bb=new
R(jsx3.DESERIALIZE);bb.jsxinstanceof=t;}bb._jsxgd=f;bb._jsxYn=l;bb.onBeforeAssemble(this,p);for(var
qb=s.selectNodeIterator(ub.Ba);qb.hasNext();){var
Cb=qb.next();var
M=Cb.getBaseName();if(M==ub.N)g.tq(bb,Cb);else if(M==ub.M)g.CO(bb,Cb);else if(M==ub.G)g.hy(bb,Cb,ub.Ca);else if(M==ub.H)g.hy(bb,Cb,ub.Da);else if(M==ub.I)g.hy(bb,Cb,ub.Ea);else if(M==ub.J)g.hy(bb,Cb,ub.Fa);}var
Xa=bb.getName();if(Xa){f.nameIndex[Xa]=bb;if(jsx3.util.isName(Xa))f.varNameIndex[Xa]=bb;}var
qb=s.selectNodeIterator(ub.Ga);while(qb.hasNext()){var
ea=qb.next();if(ea.getBaseName()==ub.K){var
ya=bb.Ec(ea,k,l,p,d,i,f);if(ya)bb.setChild(ya,1,null,l);}else if(ea.getBaseName()==ub.P){var
N=ea.getAttribute(ub.Q);var
Ab=i.resolveURI(N);var
Mb=true;if(ea.getAttribute(ub.R)==ub.S){Mb=false;if(qb.hasNext()){jsx3.util.Logger.GLOBAL.warn(jsx3._msg(ub.O,bb));Mb=true;}}if(Mb){var
B=d!=null?d.getOrOpenDocument(Ab):(new
Sa()).load(Ab);if(B.hasError())throw new
jsx3.Exception(jsx3._msg(ub.ba,Ab,s.getError()));bb.rx(B,false,2,Ab,N,l,d,null,p);}else bb.v6(Ab,N,l,d,p);}else throw new
jsx3.Exception();}bb.onAfterAssemble(this,p);return bb;};j.onBeforeAssemble=function(k,m){};j.onAfterAssemble=function(f,l){};j.onAfterAttach=function(){var
Lb=(this.getChildren()).concat();for(var
J=Lb.length-1;J>=0;J--)if(Lb[J]._jsxxK==this)Lb[J].onAfterAttach();if(this.hasPaintProfile())this.applyDynamicProperties();var
jb=this.getMetaValue(ub.Ha);if(jb)try{var
W=this._jsxgd;var
u=W?(jsx3.$O(W.varNameIndex)).clone():{};u.objJSX=this;this.eval(jb,u);}catch(Kb){var
Ea=this.getMetaValue(ub.g);jsx3.util.Logger.GLOBAL.error(jsx3._msg(ub.Ia,Ea),jsx3.NativeError.wrap(Kb));}};j.v6=function(p,k,c,q,f){var
lb=this;if(q!=null&&q.getDocument(p.toString())!=null){var
pb=q.getDocument(p.toString());jsx3.sleep(function(){this.rx(pb,true,3,p,k,c,q,null,f);},null,this);}else{var
pb=new
Sa();pb.setAsync(true);pb.subscribe(ub.Ja,function(o){if(q!=null)q.setDocument(p,o.target);lb.rx(o.target,true,3,p,k,c,q,null,f);});pb.subscribe([ub.Ka,ub.La],function(h){throw new
jsx3.Exception(jsx3._msg(ub.ba,p,h.target.getError()));});pb.load(p,g.ASYNC_LOAD_TIMEOUT);}};g.tq=function(k,n){var
z=n.getAttributeNames();for(var
va=0;va<z.length;va++){var
da=z[va];k[da]=n.getAttribute(da);}};g.CO=function(c,b){var
eb=b.getAttributeNames();for(var
Wa=0;Wa<eb.length;Wa++){var
ia=eb[Wa];var
ea=b.getAttribute(ia);c[ia]=isNaN(ea)?c.eval(ea):Number(ea);}};g.hy=function(i,p,a){var
ca=i[a]={};var
bb=p.getAttributeNames();for(var
T=0;T<bb.length;T++){var
ua=bb[T];ca[ua]=p.getAttribute(ua);}};j.toString=function(){return ub.Ma+(this.getClass()).getName()+ub.Na+this.getId()+ub.Oa+this.getName();};g.getVersion=function(){return ub.Pa;};});jsx3.Model=jsx3.app.Model;jsx3.Class.defineClass("jsx3.gui.HotKey",null,[jsx3.util.EventDispatcher],function(p,o){var
ub={A:"\u21A9",B:"\u238B",C:"\u21E5",D:"\u2326",E:"\u2423",F:"\u232B",G:"\u2191",H:"\u2193",I:"\u2190",J:"\u2192",K:"Insert",L:"\u2196",M:"\u2198",N:"\u21DE",O:"\u21DF",P:"Meta",Q:"Alt",R:"Ctrl",S:"Shift",T:"Enter",U:"Esc",V:"Tab",W:"Del",X:"Space",Y:"Backspace",Z:"Up",_:"Down",a:"invoked",aa:"Left",b:"+",ba:"Right",c:"ctrl",ca:"Home",d:"shift",da:"End",e:"alt",ea:"PgUp",f:"meta",fa:"PgDn",g:"string",ga:"@HotKey key:",h:/^\[(\d+)\]$/,ha:" shift:",i:"",ia:" ctrl:",j:"function",ja:" alt:",k:"callback",ka:" meta:",l:"number",la:/^[fF](\d\d?)$/,m:"key",ma:"F",n:"meta+",o:"alt+",p:"ctrl+",q:"shift+",r:"[",s:"]",t:"gui.hk.dest",u:"u4",v:"\u2318",w:"\u2325",x:"\u2303",y:"\u21EA",z:"\u21E7"};var
Ea=jsx3.gui.Event;p.WAS_INVOKED=ub.a;o.u4=null;o.hH=null;o.Up=false;o.Iy=false;o.fV=false;o._L=false;o.ZY=true;o.JQ=false;p.valueOf=function(k,s){var
wb=(k.toLowerCase()).split(ub.b);var
Aa=wb.pop();var
C=wb.indexOf(ub.c)>=0;var
ua=wb.indexOf(ub.d)>=0;var
wa=wb.indexOf(ub.e)>=0;var
fb=wb.indexOf(ub.f)>=0;if(typeof Aa==ub.g&&Aa.match(ub.h))Aa=parseInt(RegExp.$1);return new
p(s||new
Function(ub.i),Aa,ua,C,wa,fb);};o.init=function(h,i,a,j,b,n){if(!(typeof h==ub.j))throw new
jsx3.IllegalArgumentException(ub.k,h);this.u4=h;this.Up=a==null?null:Boolean(a);this.Iy=j==null?null:Boolean(j);this._L=b==null?null:Boolean(b);this.fV=n==null?null:Boolean(n);this.hH=typeof i==ub.l?i:p.keyDownCharToCode(i);if(this.hH==null)throw new
jsx3.IllegalArgumentException(ub.m,i);};o.getKey=function(){var
Z=ub.i;if(this.fV)Z=Z+ub.n;if(this._L)Z=Z+ub.o;if(this.Iy)Z=Z+ub.p;if(this.Up)Z=Z+ub.q;var
xa=p.keyDownCodeToChar(this.hH);Z=Z+(xa!=null?xa:ub.r+this.hH+ub.s);return Z;};o.getKeyCode=function(){return this.hH;};o.isMatch=function(h){var
mb=h.keyCode()==this.hH&&(this.Up==null||h.shiftKey()==this.Up)&&(this.Iy==null||h.ctrlKey()==this.Iy)&&(this.fV==null||h.metaKey()==this.fV)&&(this._L==null||h.altKey()==this._L);return mb;};o.invoke=function(e,d){if(this.JQ||!this.ZY)throw new
jsx3.Exception(jsx3._msg(ub.t,this));var
za=this.u4.apply(e,d);this.publish({subject:ub.a});return za;};o.isEnabled=function(){return this.ZY;};o.setEnabled=function(n){this.ZY=n;};o.isDestroyed=function(){return this.JQ;};o.destroy=function(){this.JQ=true;delete this[ub.u];};o.getFormatted=function(){var
Aa=null,Fb=null;if(jsx3.app.Browser.macosx){Aa=ub.i;Fb=p.eV;}else{Aa=ub.b;Fb=p.sF;}var
Lb=ub.i;if(this.Iy)Lb=Lb+(Fb.ctrl[0]+Aa);if(this._L)Lb=Lb+(Fb.alt[0]+Aa);if(this.Up)Lb=Lb+(Fb.shift[0]+Aa);if(this.fV)Lb=Lb+(Fb.meta[0]+Aa);var
bb=p.keyDownCodeToChar(this.hH,true);Lb=Lb+(bb!=null?bb.length==1?bb.toUpperCase():bb:ub.r+this.hH+ub.s);return Lb;};p.eV={meta:[ub.v,224],alt:[ub.w,18],ctrl:[ub.x,17],shift:[jsx3.CLASS_LOADER.FX&&jsx3.CLASS_LOADER.getVersion()<3?ub.y:ub.z,16],enter:[ub.A,13],esc:[ub.B,27],tab:[ub.C,9],del:[ub.D,46],space:[ub.E,32],backspace:[ub.F,8],up:[ub.G,38],down:[ub.H,40],left:[ub.I,37],right:[ub.J,39],insert:[ub.K,45],home:[ub.L,36],end:[ub.M,35],pgup:[ub.N,33],pgdn:[ub.O,34]};p.sF={meta:[ub.P,224],alt:[ub.Q,18],ctrl:[ub.R,17],shift:[ub.S,16],enter:[ub.T,13],esc:[ub.U,27],tab:[ub.V,9],del:[ub.W,46],space:[ub.X,32],backspace:[ub.Y,8],up:[ub.Z,38],down:[ub._,40],left:[ub.aa,37],right:[ub.ba,39],insert:[ub.K,45],home:[ub.ca,36],end:[ub.da,35],pgup:[ub.ea,33],pgdn:[ub.fa,34]};o.toString=function(){return ub.ga+this.hH+ub.ha+this.Up+ub.ia+this.Iy+ub.ja+this._L+ub.ka+this.fV;};p.rR={39:222,44:188,45:189,46:190,47:191,59:186,61:187,91:219,92:220,93:221,96:192};p.keyDownCharToCode=function(d){var
nb=null;if(d.length==1){var
La=d.charCodeAt(0);if(La>=65&&La<=90)nb=La;else if(La>=97&&La<=122)nb=La-32;else if(La>=48&&La<=57)nb=La;else nb=p.rR[La];}else if(p.sF[d.toLowerCase()]){nb=p.sF[d.toLowerCase()][1];}else if(d.match(ub.la))nb=parseInt(RegExp.$1)+112-1;return nb;};p.keyDownCodeToChar=function(a,l){var
t=null;if(a>=65&&a<=90)t=String.fromCharCode(a+97-65);else if(a>=48&&a<=57)t=String.fromCharCode(a);else if(a>=112&&a<=126)t=ub.ma+(a-112+1);else{for(var Da in p.rR)if(p.rR[Da]==a){t=String.fromCharCode(Da);break;}if(t==null){var
Cb=l&&jsx3.app.Browser.macosx?p.eV:p.sF;for(var Da in Cb)if(Cb[Da][1]==a){t=Cb[Da][0];break;}}}return t;};});jsx3.Class.defineClass("jsx3.gui.Painted",jsx3.app.Model,null,function(r,f){var
ub={A:"Bottom",B:"Left",C:"padding",D:"margin",E:"border",F:"jsxafterresizeview",G:"done",H:"box.async",I:"box.sync",J:" box updates of ",a:" ",b:'="',c:/\"/g,d:"&quot;",e:'"',f:"",g:"jsxcustom",h:"object",i:"bench.",j:" repaints of ",k:"jsx3.gui.Painted.recalc",l:"repaint",m:'<span id="',n:'" style="display:none;" jsxdomholder="1"></span>',o:"jsx3.gui.Painted.domPaint",p:"beforeEnd",q:"paint.insert",r:"jsx3.gui.Painted.repaint",s:"_jsxHK",t:"_jsxFD",u:"_jsxxw",v:/\s*;\s*/g,w:/\s*:\s*/,x:/(-\S)/gi,y:"Top",z:"Right"};var
Fa=jsx3.html;r.MASK_NO_EDIT={NN:false,EE:false,SS:false,WW:false,MM:false};r.MASK_ALL_EDIT={NN:true,EE:true,SS:true,WW:true,MM:true};f.init=function(p){this.jsxsuper(p);};f.getAbsolutePosition=function(h,e){if(e==null)e=this.getRendered(h);if(e==null)return {L:0,T:0,W:0,H:0};if(h==null)h=(this.jB()).getRendered(e);return Fa.getRelativePosition(h,e);};f.applyDynamicProperties=function(){if(this._jsxSi!=null){var
_a=this.getServer();if(_a==null)return;var
na=_a.getProperties();for(var X in this._jsxSi)this[X]=na.get(this._jsxSi[X]);}};f.setDynamicProperty=function(k,d,i){if(this._jsxSi==null)this._jsxSi={};if(this._jsxAo==null)this._jsxAo={};if(d==null){delete this._jsxSi[k];delete this._jsxAo[k];}else{this._jsxSi[k]=d;if(i)this._jsxAo[k]=d;else delete this._jsxAo[k];}return this;};f.getDynamicProperty=function(l){if(this._jsxSi)return this._jsxSi[l];};f.setAttribute=function(p,o){(this.getAttributes())[p]=o;return this;};f.getAttribute=function(q){return (this.getAttributes())[q];};f.getAttributes=function(){if(this.jsxcustom==null)this.jsxcustom={};return this.jsxcustom;};f.renderAttributes=function(k,j){var
K=[];if(this.jsxcustom!=null){var
ob=jsx3.gui.Interactive;var
eb=ob&&this.instanceOf(ob);for(var Pa in this.jsxcustom){var
S=k!=null&&(jsx3.$A.is(k)&&jsx3.util.arrIndexOf(k,Pa)>=0||k[Pa])||j&&eb&&ob.isBridgeEventHandler(Pa);var
ab=this.jsxcustom[Pa];if(!S&&ab!=null)K[K.length]=ub.a+Pa+ub.b+ab.replace(ub.c,ub.d)+ub.e;}}return K.join(ub.f);};f.removeAttribute=function(j){delete this.getAttributes()[j];return this;};f.removeAttributes=function(){delete this[ub.g];return this;};f.focus=function(){var
A=this.getRendered();if(A)Fa.focus(A);return A;};f.getMaskProperties=function(){return r.MASK_NO_EDIT;};f.getRendered=function(s){var
Da=null;if(s&&s instanceof jsx3.gui.Event){if(s.srcElement())Da=(s.srcElement()).ownerDocument;}else if(s&&typeof s==ub.h)Da=s.ownerDocument||(s.getElementById?s:null);if(Da==null)Da=this.getDocument();return Da!=null?Da.getElementById(this.getId()):null;};f.containsHtmlElement=function(a){var
Xa=this.getRendered(a);if(Xa)while(a!=null){if(Xa==a)return true;a=a.parentNode;}return false;};f.getDocument=function(){var
sa=this;while(sa!=null){if(jsx3.gui.Window&&sa instanceof jsx3.gui.Window)return sa.getDocument();else if(sa._jsxCm!=null)return sa._jsxCm.getRootDocument();sa=sa.getParent();}return null;};f.jB=function(){var
W=this;while(W!=null){if(jsx3.gui.Window&&W instanceof jsx3.gui.Window)return W.getRootBlock();else if(W._jsxCm!=null)return W._jsxCm.getRootBlock();W=W.getParent();}return null;};r.BX=null;r.REPAINT_MAP=new
jsx3.util.WeakMap();f.repaint=function(){var
Gb=[this];while(Gb.length>0){var
na=Gb.shift();var
Ba=na.getId();if(Ba==null)continue;var
Xa=1+(r.REPAINT_MAP.get(Ba)||Number(0));if(Xa>1){(jsx3.util.Logger.getLogger(ub.i+r.jsxclass)).warn(Xa+ub.j+na);}else{var
Za=na.getChildren();if(Za.length>0)Gb.push.apply(Gb,Za);}r.REPAINT_MAP.set(Ba,Xa);}var
Fb=this.getRendered();if(this.isDomPaint()){if(Fb!=null){var
Ka=Fb.previousSibling;var
Ib=this.paintDom();if(Ib!=Fb)Fb.parentNode.replaceChild(Ib,Fb);else if(Ib.parentNode==null)Ka.parentNode.insertBefore(Ib,Ka);}return null;}else{var
Sa=null;if(Fb!=null){var
db=new
jsx3.util.Timer(r.jsxclass,this);Sa=this.paint();Fa.setOuterHTML(Fb,Sa);r.Ji(this,Fb);var
X=Fb.ownerDocument;if(X.recalc!=null)jsx3.sleep(function(){X.recalc(true);},ub.k);db.log(ub.l);}return Sa;}};f.paint=jsx3.Method.newAbstract();f.onAfterPaint=function(g){};r.Ji=function(i,d){var
Za=[i];while(Za.length>0){var
x=Za.shift();if(x.onAfterPaint!=f.onAfterPaint){var
Cb=x.getRendered(d);if(Cb)x.onAfterPaint(Cb);}var
Bb=x.getChildren();if(Bb.length>0)Za.unshift.apply(Za,Bb);}};f.onAfterRestoreView=function(a){};r._onAfterRestoreViewCascade=function(d,i){var
P=[d];while(P.length>0){var
K=P.shift();if(K.onAfterRestoreView!=f.onAfterRestoreView){var
na=K.getRendered(i);if(na)K.onAfterRestoreView(na);}var
Xa=K.getChildren();if(Xa.length>0)P.unshift.apply(P,Xa);}};f.isDomPaint=function(){return false;};f.paintDom=function(){throw new
jsx3.Exception();};f.s4=function(){return ub.m+this.getId()+ub.n;};r.Dz=[];r.iZ=function(c){r.Dz.push(c);jsx3.sleep(r.l3,ub.o);};r.l3=function(){for(var
Za=0;Za<r.Dz.length;Za++){var
xa=r.Dz[Za];var
O=xa.getRendered();if(O!=null){var
Ta=xa.paintDom();O.parentNode.replaceChild(Ta,O);}}r.Dz.splice(0,r.Dz.length);};f.paintChild=function(h,e,i,a){if(i==null)i=this.getRendered();if(i!=null){if(!a)if(h.isDomPaint()){i.appendChild(h.paintDom());}else{var
mb=new
jsx3.util.Timer(r.jsxclass,this);Fa.insertAdjacentHTML(i,ub.p,h.paint());mb.log(ub.q);}r.Ji(h,i);}};f.hk=function(e,b){this.paintChild(e,b);};f.insertHTML=function(s){this.paintChild(s);return this;};f.paintChildren=function(k){if(k==null)k=this.getChildren();var
Ma=new
Array(k.length);for(var
P=0;P<k.length;P++){var
Ib=k[P];if(Ib.isDomPaint()){Ma[P]=Ib.s4();r.iZ(Ib);}else{var
ca=Ib.getLoadType();if(ca==1||ca==2||ca==3){Ma[P]=Ib.s4();jsx3.sleep(jsx3.makeCallback(ub.l,Ib),ub.r+Ib.getId());}else if((ca==5||ca==4)&&!Ib.nf()){Ma[P]=Ib.s4();}else Ma[P]=Ib.paint();}}return Ma.join(ub.f);};f._conditionalPaint=function(){var
va;if(this.isDomPaint()){va=this.s4();r.iZ(this);}else{var
Eb=this.getLoadType();if(Eb==1||Eb==2||Eb==3){va=this.s4();jsx3.sleep(jsx3.makeCallback(ub.l,this),ub.r+this.getId());}else if((Eb==5||Eb==4)&&!this.nf()){va=this.s4();}else va=this.paint();}return va;};f.Wl=function(l,c){if(this._jsxHK)this.clearBoxProfile();if(this._jsxxw==null&&l)this._jsxxw=this.Jm(c);return this._jsxxw;};f.hc=function(s){this._jsxxw=s;};f.ce=function(){this._jsxHK=true;};f.clearBoxProfile=function(c){var
W=[this];while(W.length>0){var
M=W.shift();delete M[ub.s];delete M[ub.t];if(M._jsxxw){delete M[ub.u];if(c){var
B=M.getChildren();if(B.length>0)W.push.apply(W,B);}}}};r.He=function(q,p,b){if(p){var
Sa=(jsx3.util.strTrim(p)).split(ub.v);for(var
G=0;G<Sa.length;G++){var
U=Sa[G];if(U==ub.f)continue;var
t=U.split(ub.w);if(t&&t.length==2){var
mb=t[0].replace(ub.x,function(g,d){return (d.substring(1)).toUpperCase();});q.style[mb]=t[1];}}}else if(b){var
Qa=[ub.y,ub.z,ub.A,ub.B];for(var
G=0;G<4;G++){var
mb=b+Qa[G];q.style[mb]=ub.f;}}};f.recalcBox=function(k){this.findDescendants(function(m){m.clearBoxProfile(false);},true,true,false,true);this.tl(this.getParent()?(this.getParent()).ng(this):null,this.getRendered());if(k){var
Wa=this.getRendered();if(Wa!=null){var
sb=this.Wl(true);for(var
A=0;A<k.length;A++)if(k[A]==ub.C){r.He(Wa,sb.wg(),ub.C);}else if(k[A]==ub.D){r.He(Wa,sb.en(),ub.D);}else if(k[A]==ub.E)r.He(Wa,sb.Fe(),ub.E);}}};f.ng=function(){var
Ca=this._jsxxw;return Ca!=null?{parentwidth:Ca.Sh(),parentheight:Ca.Zg()}:{};};f.Gi=function(p){var
ua=this._jsxFD?this._jsxFD[p]:null;return ua;};f.Ck=function(p,k){if(!this._jsxFD)this._jsxFD=[];this._jsxFD[p]=k;return k;};f.flushCachedClientDimensions=function(q){};f.Jm=function(m){return new
r.Box({});};f.gi=function(s,p,m){this.Tl(s,p,m,1);};f.Tl=function(p,m,b,g){if(g==1){this.ce();if(m!=null)b.addRepaint(this);}else if(g==2||g==4){var
ca=this.Wl(true,p);var
Bb=ca.recalculate(p,m,b);if(Bb.w||Bb.h){if(!r._RESIZE_EVENT&&jsx3.gui.Interactive)r._RESIZE_EVENT={subject:ub.F};if(r._RESIZE_EVENT)this.publish(r._RESIZE_EVENT);var
sb=this.getChildren();var
L=g==4&&m?Math.max(0,m.childNodes.length-sb.length):0;for(var
C=sb.length-1;C>=0;C--){var
Wa=sb[C];var
I=Wa.Wl(false);if(I&&I.wF())continue;var
xb=C+L;var
tb=m?m.childNodes[xb]?m.childNodes[xb]:true:null;b.add(Wa,{parentwidth:ca.Sh(),parentheight:ca.Zg()},tb,true);}}else{}}else if(g==3){var
ca=this.Wl(true,p);if(m)ca.recalculate(p,m,b);}};f.Ul=function(p,m){var
w=new
jsx3.util.Timer(r.jsxclass,this);var
ia=new
r.Queue();ia.add(this,p,m);ia.subscribe(ub.G,function(){w.log(ub.H);});ia.start();};r.EQ={};r.EQ.add=function(j,i,h){var
sa=new
jsx3.util.Timer(r.jsxclass,j);j.ZG(this,i,h);sa.log(ub.I);};r.EQ.addRepaint=function(m){m.repaint();};f.tl=function(p,m){r.EQ.add(this,p,m);};r.UPDATE_MAP=new
jsx3.util.WeakMap();f.ZG=function(k,g,d){var
Pa=1+(r.UPDATE_MAP.get(this.getId())||Number(0));if(Pa>1)(jsx3.util.Logger.getLogger(ub.i+r.jsxclass)).warn(Pa+ub.J+this);r.UPDATE_MAP.set(this.getId(),Pa);this.applyDynamicProperties();delete this[ub.t];this.gi(g,d,k);};});jsx3.Class.defineClass("jsx3.gui.Painted.Queue",jsx3.lang.Object,[jsx3.util.EventDispatcher],function(o,n){var
ub={a:"jsx3.gui.Painted.queue",b:"unshift",c:"push",d:"done",e:"fw",f:"{Painted.Queue ",g:" ",h:"-",i:"}"};o.ix=250;o.cN=0;o.SO=new
jsx3.util.List();o.m8=true;o.GD=false;o.enableChunking=function(m){o.m8=m;};o.E2=function(){o.doChunk();};o.doChunk=function(){if(o.m8){if(o.GD)return;o.GD=true;var
Na=(new
Date()).getTime()+o.ix;var
y=(new
Date()).getTime();var
fa=o.SO.removeAt(0);while(fa!=null&&y<Na)if(fa.fw.length>0){var
ia=fa.fw.shift();if(jsx3.$A.is(ia))ia[0].ZG(fa,ia[1],ia[2]);else ia.repaint();y=(new
Date()).getTime();}else{fa.destroy();fa=o.SO.removeAt(0);}if(fa!=null){o.SO.add(fa,0);jsx3.sleep(o.doChunk,ub.a);}o.GD=false;}else while(o.SO.size()>0){var
fa=o.SO.removeAt(0);while(fa.fw.length>0){var
ia=fa.fw.shift();if(jsx3.$A.is(ia))ia[0].ZG(fa,ia[1],ia[2]);else ia.repaint();}}};n.init=function(){this.jG=
++o.cN;this.fw=[];o.SO.add(this);};n.add=function(i,q,p,k){if(p===true)p=i.getRendered();this.fw[k?ub.b:ub.c]([i,q,p]);};n.addRepaint=function(q,c){this.fw[c?ub.b:ub.c](q);};n.start=function(){o.E2();};n.destroy=function(){this.publish({subject:ub.d});delete this[ub.e];o.SO.remove(this);};n.toString=function(){return ub.f+this.jG+ub.g+(this.fw!=null?this.fw.length:ub.h)+ub.i;};});jsx3.Class.defineClass("jsx3.gui.Painted.Box",jsx3.lang.Object,null,function(n,e){var
ub={A:"display:-moz-inline-box;",Aa:/-top/,B:"box",Ba:/-right/,C:"0px",Ca:/-bottom/,D:"string",Da:/-left/,E:"number",Ea:/border(?:(?:-top(?:-width)?)|(?:-width))?:[^0-9]*([0-9]*)px/gi,F:"object",Fa:/border(?:(?:-top(?:-color)?)|(?:-color))?:[^;]*((?:#[a-zA-Z0-9]{6})|(?:rgb\s*\(\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\))|(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenrod|DarkGray|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGray|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGray|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|Goldenrod|Gray|Green|GreenYellow|Honeydew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCora|LightCyan|LightGoldenrodYellow|LightGreen|LightGrey|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGray|LightSteelBlu|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquamarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenrod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|Seashell|Sienna|Silver|SkyBlue|SlateBlue|SlateGray|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen))/gi,G:"%",Ga:/border(?:(?:-top(?:-style)?)|(?:-style))?:[^;]*(dashed|dotted|double|groove|hidden|inset|none|outset|ridge|solid)/gi,H:";",Ha:/border(?:(?:-right(?:-width)?)|(?:-width))?:[^0-9]*([0-9]*)px/gi,I:"px",Ia:/border(?:(?:-right(?:-color)?)|(?:-color))?:[^;]*((?:#[a-zA-Z0-9]{6})|(?:rgb\s*\(\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\))|(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenrod|DarkGray|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGray|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGray|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|Goldenrod|Gray|Green|GreenYellow|Honeydew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCora|LightCyan|LightGoldenrodYellow|LightGreen|LightGrey|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGray|LightSteelBlu|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquamarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenrod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|Seashell|Sienna|Silver|SkyBlue|SlateBlue|SlateGray|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen))/gi,J:"px;",Ja:/border(?:(?:-right(?:-style)?)|(?:-style))?:[^;]*(dashed|dotted|double|groove|hidden|inset|none|outset|ridge|solid)/gi,K:"px ",Ka:/border(?:(?:-bottom(?:-width)?)|(?:-width))?:[^0-9]*([0-9]*)px/gi,L:":",La:/border(?:(?:-bottom(?:-color)?)|(?:-color))?:[^;]*((?:#[a-zA-Z0-9]{6})|(?:rgb\s*\(\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\))|(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenrod|DarkGray|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGray|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGray|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|Goldenrod|Gray|Green|GreenYellow|Honeydew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCora|LightCyan|LightGoldenrodYellow|LightGreen|LightGrey|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGray|LightSteelBlu|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquamarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenrod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|Seashell|Sienna|Silver|SkyBlue|SlateBlue|SlateGray|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen))/gi,M:"relativebox",Ma:/border(?:(?:-bottom(?:-style)?)|(?:-style))?:[^;]*(dashed|dotted|double|groove|hidden|inset|none|outset|ridge|solid)/gi,N:"<",Na:/border(?:(?:-left(?:-width)?)|(?:-width))?:[^0-9]*([0-9]*)px/gi,O:" ",Oa:/border(?:(?:-left(?:-color)?)|(?:-color))?:[^;]*((?:#[a-zA-Z0-9]{6})|(?:rgb\s*\(\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\))|(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenrod|DarkGray|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGray|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGray|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|Goldenrod|Gray|Green|GreenYellow|Honeydew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCora|LightCyan|LightGoldenrodYellow|LightGreen|LightGrey|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGray|LightSteelBlu|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquamarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenrod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|Seashell|Sienna|Silver|SkyBlue|SlateBlue|SlateGray|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen))/gi,P:"width:",Pa:/border(?:(?:-left(?:-style)?)|(?:-style))?:[^;]*(dashed|dotted|double|groove|hidden|inset|none|outset|ridge|solid)/gi,Q:"height:",Qa:"IMPLICIT:\n",R:'"/>',Ra:": ",S:'">',Sa:"\n",T:"left:0px",Ta:"\nEXPLICIT:\n",U:"left:",V:"top:0px",W:"top:",X:"position:absolute;",Y:' style="',Z:"position:relative;",_:"</",a:/[^\d-]*([-]*[\d]*)[^\d-]*([-]*[\d]*)[^\d-]*([-]*[\d]*)[^\d-]*([-]*[\d]*)/,aa:">",b:/\b(\d*)px/g,ba:"resize",c:"boxtype",ca:"onResize",d:"tagname",da:/input\[(\S*)\]/i,e:"margin",ea:"input",f:"padding",fa:/(^[;\s]*)|([;\s]*$)/g,g:"border",ga:"pseudo",h:"left",ha:"border-top:",i:"top",ia:"border-right:",j:"width",ja:"border-bottom:",k:"height",ka:"border-left:",l:"empty",la:"text",m:"container",ma:"password",n:"XZ",na:"textarea",o:"m3",oa:"td",p:"lT",pa:"body",q:"U0",qa:'<div id="_jsx3_html_scr" class="jsx30block" style="padding:0px;margin:0px;border-width:0px;position:absolute;width:100px;height:100px;left:-100px;top:-100px;overflow:scroll;">&#160;</div>',r:"rq",ra:"beforeEnd",s:"yy",sa:"_jsx3_html_scr",t:"E3",ta:"not matched",u:"Q6",ua:"0",v:"right",va:/(\s*(padding|padding-top|padding-right|padding-bottom|padding-left)\s*:\s*(\d+)(px)?\s*((\d+)(px)?)?\s*((\d+)(px)?)?\s*((\d+)(px)?)?\s*;)+/ig,w:"bottom",wa:/(\s*(margin|margin-top|margin-right|margin-bottom|margin-left)\s*:\s*(-*\d+)(px)?\s*((-*\d+)(px)?)?\s*((-*\d+)(px)?)?\s*((-*\d+)(px)?)?\s*;)+/ig,x:"",xa:"Missing Semicolon",y:"display:inline-table;",ya:/[^\s*]/i,z:"display:inline-block;",za:"Mismatch Rule"};var
Kb=jsx3.html;n.Lr=ub.a;n.HD=ub.b;n.JN=[ub.c,ub.d,ub.e,ub.f,ub.g,ub.h,ub.i,ub.j,ub.k,ub.l,ub.m];n.q4=[ub.c,ub.h,ub.i,ub.j,ub.k];n.lB={width:ub.n,height:ub.o,top:ub.p,left:ub.q,padding:ub.r,border:ub.s,margin:ub.t,tagname:ub.u};n.jq=[ub.i,ub.v,ub.w,ub.h];n.OS=null;if(jsx3.CLASS_LOADER.SAF){n.RW=[ub.x,ub.y,ub.x,ub.y];}else if(jsx3.CLASS_LOADER.IE){n.RW=[ub.x,ub.x,ub.z,ub.x];}else if(jsx3.CLASS_LOADER.FX&&jsx3.CLASS_LOADER.getVersion()>=3)n.RW=[ub.x,ub.z,ub.x,ub.z];else n.RW=[ub.x,ub.A,ub.x,ub.A];n.TH={pad:ub.f,mar:ub.e,e:ub.x,box:ub.B,zpx:ub.C,str:ub.D,num:ub.E,obj:ub.F,pct:ub.G,semi:ub.H,px:ub.I,pxs:ub.J,pxc:ub.K,c:ub.L,rbox:ub.M,bor:ub.g};n.wH={hph:{height:1,parentheight:1},wpw:{width:1,parentwidth:1}};n.iO=[ub.N,ub.O,ub.P,ub.Q,ub.R,ub.S,ub.T,ub.U,ub.V,ub.W,ub.X,ub.Y,ub.Z,ub._,ub.aa,ub.x];n.getCssFix=function(){return n.RW[Kb.getMode()];};e.JL=ub.x;e.oW=ub.x;e.c4=ub.x;e.N1=true;e.styles=ub.x;e.attributes=ub.x;e.init=function(b){this.implicit=b||{};this.calculate();};e.reset=function(){this.N1=true;};e.paint=function(){this.N1=false;var
Pa=new
Array(2);var
w=n.iO[0]+this.Ts.tagname+n.iO[1]+this.attributes;var
nb=this.getPaintedWidth();nb=nb!=null?n.iO[2]+Math.max(0,nb)+n.TH.pxs:n.TH.e;var
ya=this.getPaintedHeight();ya=ya!=null?n.iO[3]+Math.max(0,ya)+n.TH.pxs:n.TH.e;var
db=this.Ts.empty?n.iO[4]:n.iO[5];if(this.Ts.boxtype==n.TH.box){var
fb=this.Ts.left;fb=fb==null?n.iO[6]:n.iO[7]+fb+n.TH.pxs;var
La=this.Ts.top;La=La==null?n.iO[8]:n.iO[9]+La+n.TH.pxs;var
C=this.implicit.omitpos?n.TH.e:n.iO[10];Pa[0]=w+n.iO[11]+C+nb+ya+fb+La+this.wg()+this.en()+this.Fe()+this.styles+db;}else if(this.Ts.boxtype==n.TH.rbox){var
C=this.implicit.omitpos?n.TH.e:n.iO[12];Pa[0]=w+n.iO[11]+C+this.pS()+nb+ya+this.wg()+this.en()+this.Fe()+this.styles+db;}else{var
fb=this.Ts.left;fb=fb==null?n.TH.e:n.iO[7]+fb+n.TH.pxs;var
La=this.Ts.top;La=La==null?n.TH.e:n.iO[9]+La+n.TH.pxs;var
C=this.implicit.omitpos?n.TH.e:n.iO[12];Pa[0]=w+n.iO[11]+C+nb+ya+fb+La+this.wg()+this.en()+this.Fe()+this.styles+db;}Pa[1]=this.Ts.empty?n.iO[15]:n.iO[13]+this.Ts.tagname+n.iO[14];return Pa;};e.setStyles=function(c){this.styles=c;return this;};e.setAttributes=function(o){this.attributes=o;return this;};e.pS=function(){return this.Ts.container&&(Kb.getMode()==3||Kb.getMode()==1)?n.TH.e:n.getCssFix();};e.wF=function(){var
E=this.implicit;return (typeof E.width!=n.TH.str||E.width.indexOf(n.TH.pct)<0)&&(typeof E.height!=n.TH.str||E.height.indexOf(n.TH.pct)<0)&&(typeof E.left!=n.TH.str||E.left.indexOf(n.TH.pct)<0)&&(typeof E.top!=n.TH.str||E.top.indexOf(n.TH.pct)<0);};n._RECALC_VALS=[[[[{n:1},{h:1}],[{w:1},{w:1,h:1}]],[[{t:1},{t:1,h:1}],[{t:1,w:1},{t:1,w:1,h:1}]]],[[[{l:1},{l:1,h:1}],[{l:1,w:1},{l:1,w:1,h:1}]],[[{l:1,t:1},{l:1,t:1,h:1}],[{l:1,t:1,w:1},{l:1,t:1,w:1,h:1,a:1}]]]];e.recalculate=function(g,p){var
mb=this.N1;var
qa=0,oa=0,ha=0,Pa=0;for(var la in g)if(this.implicit[la]!=g[la]){this.implicit[la]=g[la];mb=true;if(!ha&&n.wH.wpw[la])ha=1;if(!Pa&&n.wH.hph[la])Pa=1;}if(mb){this.calculate(n.q4);if(p){var
ia=p.style;if(this.Ts.boxtype==n.TH.box&&this.Ts.left!=null&&this.Ts.top!=null){if(parseInt(ia.left)!=this.Ts.left){ia.left=this.Ts.left+n.TH.px;qa=1;}if(parseInt(ia.top)!=this.Ts.top){ia.top=this.Ts.top+n.TH.px;oa=1;}}if(g.parentheight!=null||g.parentwidth!=null||g.width!=null||g.height!=null){var
u=this.getPaintedWidth();var
Da=this.getPaintedHeight();if(u!=null&&parseInt(ia.width)!=u){ia.width=Math.max(0,u)+n.TH.px;ha=1;}else ha=0;if(Da!=null&&parseInt(ia.height)!=Da){ia.height=Math.max(0,Da)+n.TH.px;Pa=1;}else Pa=0;}}}this.N1=false;return n._RECALC_VALS[qa][oa][ha][Pa];};n.zY={left:1,top:1};n.w0=function(){};n.w0.prototype={padding:ub.x,margin:ub.x,border:ub.x,bwidth:0,bheight:0,btop:0,bleft:0,pwidth:0,pheight:0,ptop:0,pleft:0};e.calculate=function(s){if(!s)s=n.JN;if(!this.Ts)this.Ts=new
n.w0();var
Eb=this.Ts;for(var
eb=0;eb<s.length;eb++){var
Ca=s[eb];var
yb=this.implicit[Ca];if(n.zY[Ca]&&(yb==null||yb==n.TH.e)&&this.implicit.boxtype==n.TH.box){Eb[Ca]=0;}else{var
A=n.lB[Ca];if(A){if(yb===n.TH.e)yb=null;this[A](yb);}else this.Ts[Ca]=yb;}}};n.registerServer=function(h,p){if(p)jsx3.gui.Event.subscribe(ub.ba,h,ub.ca);};n.unregisterServer=function(l,q){if(q)jsx3.gui.Event.unsubscribe(ub.ba,l,ub.ca);};e.XZ=function(h){if(h==null){this.Ts.width=this.Ts.clientwidth=null;}else{if(typeof h==n.TH.str&&h.indexOf(n.TH.pct)>=0)h=Math.round(this.implicit.parentwidth*parseInt(h)/100);else h=Number(h);this.Ts.width=h;this.Ts.clientwidth=Math.max(0,h-this.Ts.pwidth-this.Ts.bwidth);}};e.m3=function(a){if(a==null){this.Ts.height=this.Ts.clientheight=null;}else{if(typeof a==n.TH.str&&a.indexOf(n.TH.pct)>=0)a=Math.round(this.implicit.parentheight*parseInt(a)/100);else a=Number(a);this.Ts.height=a;this.Ts.clientheight=Math.max(0,a-this.Ts.pheight-this.Ts.bheight);}};e.U0=function(p){this.Ts.left=typeof p==n.TH.str&&p.indexOf(n.TH.pct)>=0?Math.round(this.implicit.parentwidth*parseInt(p)/100):p==null?p:Number(p);};e.lT=function(k){this.Ts.top=typeof k==n.TH.str&&k.indexOf(n.TH.pct)>=0?Math.round(this.implicit.parentheight*parseInt(k)/100):k==null?k:Number(k);};e.Q6=function(h){if(h==null){this.Ts.tagname=h;this.Ts.type=h;}else if(h.search(ub.da)>-1){this.Ts.tagname=ub.ea;this.Ts.type=RegExp.$1.toLowerCase();}else this.Ts.tagname=h;};e.yy=function(a){if(a==null)a=n.TH.e;if(this.JL===a)return;this.JL=a;var
u=null,bb=null;if(typeof a==n.TH.str&&a.indexOf(ub.L)>=0){var
Ma=n.U7(a);if(typeof Ma!=n.TH.obj)u=Ma.split(n.TH.semi);}else{a=a.replace(ub.fa,n.TH.e);if(a!==n.TH.e)u=a.split(n.TH.semi);}if(u&&u.length>1){var
P=true;for(var
za=0;P&&za<u.length-1&&za<3;za++)if(u[za]!=u[za+1])P=false;if(P)u.splice(1,u.length);}if(!u){bb=[0,0,0,0];}else if(u.length==1){var
Eb=u[0].match(n.HD);var
ob=Eb?parseInt(Eb[0]):0;if(isNaN(ob))ob=0;bb=[ob,ob,ob,ob];}else{bb=[];for(var
za=0;za<4;za++){var
Eb=u[za].match(n.HD);var
ob=Eb?parseInt(Eb[0]):0;if(isNaN(ob))ob=0;bb[za]=ob;}}this.Ts.bwidth=bb[1]+bb[3];this.Ts.bheight=bb[0]+bb[2];this.Ts.bleft=bb[3];this.Ts.btop=bb[0];if(u)for(var
za=0;za<u.length;za++)if(u[za].indexOf(ub.ga)>=0)u[za]=n.TH.e;if(u==null){this.Ts.border=n.TH.e;}else if(u.length==1){this.Ts.border=u[0]?n.TH.bor+n.TH.c+(bb[0]>0?u[0]:n.TH.zpx)+n.TH.semi:n.TH.e;}else if(u.length==4)this.Ts.border=(u[0]?ub.ha+(bb[0]>0?u[0]:n.TH.zpx)+n.TH.semi:n.TH.e)+(u[1]?ub.ia+(bb[1]>0?u[1]:n.TH.zpx)+n.TH.semi:n.TH.e)+(u[2]?ub.ja+(bb[2]>0?u[2]:n.TH.zpx)+n.TH.semi:n.TH.e)+(u[3]?ub.ka+(bb[3]>0?u[3]:n.TH.zpx)+n.TH.semi:n.TH.e);};e.E3=function(c){if(c==null)c=n.TH.e;if(this.oW===c)return;this.oW=c;var
sb=null;if(typeof c==n.TH.str&&c.indexOf(ub.L)>-1){var
J=n.gY(c,n.TH.mar);if(typeof J!=n.TH.obj)sb=J.match(n.Lr);}else if(typeof c==n.TH.num){sb=[c];}else{c=jsx3.util.strTrim(String(c));if(c!==n.TH.e)if(isNaN(c))sb=c.match(n.Lr);else sb=[Number(c)];}if(sb==null)this.Ts.margin=n.TH.e;else if(sb.length==1)this.Ts.margin=n.TH.mar+n.TH.c+sb[0]+n.TH.pxs;else this.Ts.margin=n.TH.mar+n.TH.c+sb[1]+n.TH.pxc+sb[2]+n.TH.pxc+sb[3]+n.TH.pxc+sb[4]+n.TH.pxs;};e.rq=function(b){if(b==null)b=n.TH.e;if(this.c4===b)return;this.c4=b;var
Mb=null;if(typeof b==n.TH.str&&b.indexOf(ub.L)>-1){var
zb=n.gY(b,n.TH.pad);if(typeof zb!=n.TH.obj)Mb=zb.match(n.Lr);}else if(typeof b==n.TH.num){Mb=[b];}else{b=jsx3.util.strTrim(String(b));if(b!==n.TH.e)if(isNaN(b))Mb=b.match(n.Lr);else Mb=[Number(b)];}var
S=null;if(Mb==null){S=[0,0,0,0];this.Ts.padding=n.TH.e;}else if(Mb.length==1){var
Aa=Mb[0];S=[Aa,Aa,Aa,Aa];this.Ts.padding=n.TH.pad+n.TH.c+Aa+n.TH.pxs;}else{S=[];for(var
Y=1;Y<5;Y++){var
Aa=parseInt(Mb[Y]);if(isNaN(Aa))Aa=0;S[Y-1]=Aa;}this.Ts.padding=n.TH.pad+n.TH.c+S[0]+n.TH.pxc+S[1]+n.TH.pxc+S[2]+n.TH.pxc+S[3]+n.TH.pxs;}this.Ts.pwidth=S[1]+S[3];this.Ts.pheight=S[0]+S[2];this.Ts.ptop=S[0];this.Ts.pleft=S[3];};e.Td=function(b){var
Bb=this._P;if(!Bb)Bb=this._P=[];Bb[Bb.length]=b;};e.lg=function(l){return this._P?this._P[l]:null;};e.Vi=function(){return this.Ts.bleft+this.Ts.pleft;};e.Eg=function(){return this.Ts.btop+this.Ts.ptop;};e.Sh=function(){return this.Ts.clientwidth;};e.Zg=function(){return this.Ts.clientheight;};e.getOffsetWidth=function(){return this.Ts.width;};e.getOffsetHeight=function(){return this.Ts.height;};e.getBorderWidth=function(){return this.Ts.bwidth;};e.getBorderHeight=function(){return this.Ts.bheight;};e.getPaintedWidth=function(){var
db=this.Ts.type;var
ia=Kb.getMode();if(jsx3.CLASS_LOADER.SAF){var
da=(db==ub.la||db==ub.ma||this.Ts.tagname==ub.na||this.Ts.tagname==ub.oa)&&ia==1?this.Ts.width:this.Ts.clientwidth;}else var
da=ia==0||(db==ub.la||db==ub.ma||this.Ts.tagname==ub.na)&&ia==1?this.Ts.width:this.Ts.clientwidth;return da===n.TH.e||isNaN(da)?null:da;};e.getPaintedHeight=function(){var
Qa=this.Ts.type;var
X=Kb.getMode();var
pa=X==0||(Qa==ub.la||Qa==ub.ma||this.Ts.tagname==ub.na)&&X==1?this.Ts.height:this.Ts.clientheight;return pa===n.TH.e||isNaN(pa)?null:pa;};e.getPaintedLeft=function(){return this.Ts.left;};e.getPaintedTop=function(){return this.Ts.top;};e.getBoxType=function(){return this.Ts.boxtype;};e.en=function(){return this.Ts.margin||n.TH.e;};e.wg=function(){return this.Ts.padding||n.TH.e;};e.Fe=function(){return this.Ts.border||n.TH.e;};n.getBody=function(){return (document.getElementsByTagName(ub.pa))[0];};n.getScrollSize=function(b){if(n.OS==null){var
qb=b||n.getBody();var
zb=ub.qa;Kb.insertAdjacentHTML(qb,ub.ra,zb);var
J=document.getElementById(ub.sa);n.OS=100-parseInt(J.clientWidth);qb.removeChild(J);}return n.OS;};n.getScrollSizeOffset=function(b){var
cb=n.getScrollSize();return Kb.getScrollSizeOffset(cb,b);};n.gY=function(q,m){var
Ka=ub.ta;var
J=ub.ua;var
A=ub.ua;var
pa=ub.ua;var
ba=ub.ua;var
M=ub.va;var
Pa=ub.wa;var
Ca=m==n.TH.pad?M:Pa;var
Na=q.split(n.TH.semi);if(Na)for(var
x=0;x<Na.length;x++){var
fa=Na[x]+n.TH.semi;var
wa=fa.search(Ca);if(wa>0){return {desc:ub.xa,cause:Na[x]};}else if(wa==-1){if(Na[x].search(ub.ya)>=0)return {desc:ub.za,cause:Na[x]};}else{Ka=fa.replace(Ca,function(h,g,f,b,d,c,j,a,s,p,o,k,r){if(f.match(ub.Aa)){J=b==null?ub.ua:b;}else if(f.match(ub.Ba)){A=b==null?ub.ua:b;}else if(f.match(ub.Ca)){pa=b==null?ub.ua:b;}else if(f.match(ub.Da)){ba=b==null?ub.ua:b;}else{J=jsx3.util.strEmpty(b)?ub.ua:b;A=jsx3.util.strEmpty(j)?J:j;pa=jsx3.util.strEmpty(p)?J:p;ba=jsx3.util.strEmpty(r)?A:r;}return J+ub.O+A+ub.O+pa+ub.O+ba;});Ka=J+ub.O+A+ub.O+pa+ub.O+ba;}}return Ka;};var
Jb=ub.Ea;var
lb=ub.Fa;var
vb=ub.Ga;var
Cb=ub.Ha;var
ea=ub.Ia;var
R=ub.Ja;var
y=ub.Ka;var
Fa=ub.La;var
Ea=ub.Ma;var
Ya=ub.Na;var
ga=ub.Oa;var
jb=ub.Pa;n.U7=function(c){var
yb={top:{width:0,color:ub.x,style:ub.x},right:{width:0,color:ub.x,style:ub.x},bottom:{width:0,color:ub.x,style:ub.x},left:{width:0,color:ub.x,style:ub.x}};while(Jb.exec(c))yb.top.width=RegExp.$1;while(lb.exec(c))yb.top.color=RegExp.$1;while(vb.exec(c))yb.top.style=RegExp.$1;while(Cb.exec(c))yb.right.width=RegExp.$1;while(ea.exec(c))yb.right.color=RegExp.$1;while(R.exec(c))yb.right.style=RegExp.$1;while(y.exec(c))yb.bottom.width=RegExp.$1;while(Fa.exec(c))yb.bottom.color=RegExp.$1;while(Ea.exec(c))yb.bottom.style=RegExp.$1;while(Ya.exec(c))yb.left.width=RegExp.$1;while(ga.exec(c))yb.left.color=RegExp.$1;while(jb.exec(c))yb.left.style=RegExp.$1;return yb.top.width+n.TH.pxc+yb.top.style+ub.O+yb.top.color+n.TH.semi+yb.right.width+n.TH.pxc+yb.right.style+ub.O+yb.right.color+n.TH.semi+yb.bottom.width+n.TH.pxc+yb.bottom.style+ub.O+yb.bottom.color+n.TH.semi+yb.left.width+n.TH.pxc+yb.left.style+ub.O+yb.left.color;};e.toString=function(){var
Ib=ub.Qa;for(var Ja in this.implicit)Ib=Ib+(Ja+ub.Ra+this.implicit[Ja]+ub.Sa);Ib=Ib+ub.Ta;for(var Ja in this.Ts)Ib=Ib+(Ja+ub.Ra+this.Ts[Ja]+ub.Sa);return Ib;};});jsx3.Class.defineClass("jsx3.app.Model.Loading",jsx3.gui.Painted,null,function(d,l){var
ub={a:"undefined",b:"jsx1:strings/@jsxname"};l.init=function(o,c,g){this._jsxCr=o;o._jsxye=true;this._jsxuJ=c;this._jsxww=g;if(c==2||c==3)jsx3.sleep(function(){var
Va=this.Kr();if(c==2)this.gS();else jsx3.sleep(function(){this.gS();},null,this);},null,this);};l.Kr=function(){var
Pa=this.getParent();var
pb=Pa.Ec.apply(this,[this._jsxCr].concat(this._jsxww));Pa.setChild(pb,1,null,this._jsxww[1]);Pa.insertBefore(pb,this,false);var
Bb=Pa.getDocument();if(Bb){var
ob=Bb.getElementById(this._jsxid);if(ob)ob.id=pb._jsxid;}Pa.removeChild(this);this._jsxfN=pb;if(this._jsxuJ==5)this.gS();return pb;};l.getName=function(){if(typeof this._jsxE6==ub.a){var
H=this._jsxCr.selectSingleNode(ub.b);this._jsxE6=H?H.getValue():null;}return this._jsxE6;};l.getType=function(){return this._jsxuJ;};l.ln=function(f,r){return this._jsxCr.cloneNode(true);};l.gS=function(){this._jsxfN.repaint();};l.paint=function(){return this.s4();};l.getRendered=function(){return null;};l.Dk=function(f){if(f&&this._jsxuJ==5)this.Kr();this.jsxsuper(f);return this._jsxfN;};});jsx3.require("jsx3.gui.HotKey");jsx3.Class.defineInterface("jsx3.gui.Interactive",null,function(f,e){var
ub={A:"jsxbeforeedit",Aa:"dl",B:"jsxbeforemove",Ba:/\"/g,C:"jsxbeforeresize",Ca:"&quot;",D:"jsxbeforeselect",Da:";",E:"jsxbeforesort",Ea:"string",F:"jsxcanceldrop",Fa:"jsx3.",G:"jsxctrldrop",Ga:"(event,this,'",H:"jsxdestroy",Ha:"',",I:"jsxdata",Ia:");",J:"jsxdrag",Ja:"jsx3.GO('",K:"jsxdrop",Ka:"').",L:"jsxexecute",La:"');",M:"jsxhide",Ma:" ",N:"jsxincchange",Na:'="',O:"jsxinput",Oa:"",P:"jsxmenu",Pa:'"',Q:"jsxscroll",Qa:/;\s*$/,R:"jsxselect",Ra:"gui.int.br",S:"jsxshow",Sa:"id",T:"jsxspy",Ta:"body",U:"jsxtoggle",Ua:"gui.int.eb",V:/\S/,Va:"absolute",W:"function",Wa:"JSXDragId",X:"blur",Xa:"JSXDragType",Y:"change",Ya:"_jsxspy",Z:"click",Za:"jsx3.gui.Heavyweight",_:"dblclick",_a:'<span class="jsx30spyglassbuffer"><div class="jsx30spyglass">',a:"jsxblur",aa:"focus",ab:"</div></span>",b:"jsxchange",ba:"keydown",bb:"W",c:"jsxclick",ca:"keypress",cb:"E",d:"jsxdblclick",da:"keyup",db:"S",e:"jsxfocus",ea:"mousedown",eb:"N",f:"jsxkeydown",fa:"mousemove",fb:"X",g:"jsxkeypress",ga:"mouseout",gb:"Y",h:"jsxkeyup",ha:"mouseover",hb:"_jsxIu",i:"jsxload",ia:"mouseup",ib:"_jsxsP",j:"jsxmousedown",ja:"mousewheel",jb:"jsxspystylekeys",k:"jsxmouseout",ka:"cn",kb:"jsxspystylevalues",l:"jsxmouseover",la:"Km",lb:/ *; */,m:"jsxmouseup",ma:"Pb",mb:/(-\S)/gi,n:"jsxmousewheel",na:"Zn",nb:":",o:"text-decoration:underline",oa:"Vl",ob:"jsxmodal",p:"jsxadopt",pa:"_ebKeyDown",pb:"vntCallback",q:"jsxafterappend",qa:"kc",qb:"3.00.00",r:"jsxaftercommit",ra:"Id",rb:"EVENTSVERS",s:"jsxafteredit",sa:"Xg",sb:"onDestroy",t:"jsxaftermove",ta:"_ebMouseMove",tb:"rB",u:"jsxafterreorder",ua:"nk",v:"jsxafterresize",va:"Pe",w:"jsxafterresizeview",wa:"eo",x:"jsxaftersort",xa:"lk",y:"jsxbeforeappend",ya:"on",z:"jsxbeforedrop",za:"dm"};var
N=jsx3.gui.Event;f.JSXBLUR=ub.a;f.JSXCHANGE=ub.b;f.JSXCLICK=ub.c;f.JSXDOUBLECLICK=ub.d;f.JSXFOCUS=ub.e;f.JSXKEYDOWN=ub.f;f.JSXKEYPRESS=ub.g;f.JSXKEYUP=ub.h;f.JSXLOAD=ub.i;f.JSXMOUSEDOWN=ub.j;f.JSXMOUSEOUT=ub.k;f.JSXMOUSEOVER=ub.l;f.JSXMOUSEUP=ub.m;f.JSXMOUSEWHEEL=ub.n;f.FOCUS_STYLE=ub.o;f.ADOPT=ub.p;f.AFTER_APPEND=ub.q;f.AFTER_COMMIT=ub.r;f.AFTER_EDIT=ub.s;f.AFTER_MOVE=ub.t;f.AFTER_REORDER=ub.u;f.AFTER_RESIZE=ub.v;f.AFTER_RESIZE_VIEW=ub.w;f.AFTER_SORT=ub.x;f.BEFORE_APPEND=ub.y;f.BEFORE_DROP=ub.z;f.BEFORE_EDIT=ub.A;f.BEFORE_MOVE=ub.B;f.BEFORE_RESIZE=ub.C;f.BEFORE_SELECT=ub.D;f.BEFORE_SORT=ub.E;f.CANCEL_DROP=ub.F;f.CHANGE=ub.b;f.CTRL_DROP=ub.G;f.DESTROY=ub.H;f.DATA=ub.I;f.DRAG=ub.J;f.DROP=ub.K;f.EXECUTE=ub.L;f.HIDE=ub.M;f.INCR_CHANGE=ub.N;f.INPUT=ub.O;f.MENU=ub.P;f.SCROLL=ub.Q;f.SELECT=ub.R;f.SHOW=ub.S;f.SPYGLASS=ub.T;f.TOGGLE=ub.U;e.cn=function(q,o){this.doEvent(ub.a,{objEVENT:q});};e.Km=function(a,l){this.doEvent(ub.b,{objEVENT:a});};e.Pb=function(n,r){this.doEvent(ub.c,{objEVENT:n});};e.Zn=function(s,m){this.doEvent(ub.d,{objEVENT:s});};e.Vl=function(d,i){this.doEvent(ub.e,{objEVENT:d});};e._ebKeyDown=function(k,b){var
Eb=false;if(this.hasHotKey())Eb=this.checkHotKeys(k);if(!Eb)this.doEvent(ub.f,{objEVENT:k});return Eb;};e.kc=function(l,a){this.doEvent(ub.g,{objEVENT:l});};e.Id=function(r,n){this.doEvent(ub.h,{objEVENT:r});};e.Xg=function(n,r){this.doEvent(ub.j,{objEVENT:n});};e.nk=function(m,s){this.doEvent(ub.k,{objEVENT:m});};e.Pe=function(q,o){this.doEvent(ub.l,{objEVENT:q});};e.eo=function(n,r){var
ma=null;this.doEvent(ub.m,{objEVENT:n});if(n.rightButton()&&(ma=this.getMenu())!=null){var
Db=(this.getServer()).getJSX(ma);if(Db!=null){var
pb=this.doEvent(ub.P,{objEVENT:n,objMENU:Db,_gipp:1});if(pb!==false){if(pb instanceof Object&&pb.objMENU instanceof jsx3.gui.Menu)Db=pb.objMENU;Db.showContextMenu(n,this);}}}};e.lk=function(p,i){this.doEvent(ub.n,{objEVENT:p});};e.setEvent=function(g,d){(this.getEvents())[d]=g;return this;};e.getEvents=function(){if(this._jsxHj==null)this._jsxHj={};return this._jsxHj;};e.getEvent=function(r){if(this._jsxHj)return this._jsxHj[r];};e.hasEvent=function(q){return this._jsxHj!=null&&this._jsxHj[q]!=null&&this._jsxHj[q].match(ub.V);};e.doEvent=function(b,s){var
Z=this.getEvent(b);if(typeof this.publish==ub.W)this.publish({subject:b,context:s});return this.eval(Z,this._getEvtContext(s));};e._getEvtContext=function(s){var
I=this._jsxgd;if(I)s=((jsx3.$O(I.varNameIndex)).clone()).extend(s);return s;};e.removeEvent=function(c){if(this._jsxHj!=null)delete this._jsxHj[c];return this;};e.removeEvents=function(){this._jsxHj={};return this;};e.setCanMove=function(m){this.jsxmove=m;return this;};e.getCanMove=function(){return this.jsxmove||0;};e.setCanDrag=function(l){this.jsxdrag=l;return this;};e.getCanDrag=function(){return this.jsxdrag||0;};e.setCanDrop=function(l){this.jsxdrop=l;return this;};e.getCanDrop=function(){return this.jsxdrop||0;};e.setCanSpy=function(p){this.jsxspy=p;return this;};e.getCanSpy=function(){return this.jsxspy||0;};e.getMenu=function(){return this.jsxmenu;};e.setMenu=function(d){this.jsxmenu=d;return this;};f.ld=[ub.X,ub.Y,ub.Z,ub._,ub.aa,ub.ba,ub.ca,ub.da,ub.ea,ub.fa,ub.ga,ub.ha,ub.ia,ub.ja];f.mn={};f.mn[ub.X]=ub.ka;f.mn[ub.Y]=ub.la;f.mn[ub.Z]=ub.ma;f.mn[ub._]=ub.na;f.mn[ub.aa]=ub.oa;f.mn[ub.ba]=ub.pa;f.mn[ub.ca]=ub.qa;f.mn[ub.da]=ub.ra;f.mn[ub.ea]=ub.sa;f.mn[ub.fa]=ub.ta;f.mn[ub.ga]=ub.ua;f.mn[ub.ha]=ub.va;f.mn[ub.ia]=ub.wa;f.mn[ub.ja]=ub.xa;f.isBridgeEventHandler=function(i){if(f.wC==null){f.wC={};for(var
ja=0;ja<f.ld.length;ja++)f.wC[ub.ya+f.ld[ja]]=true;}return f.wC[i];};f._BRIDGE=ub.za;f._EB=ub.Aa;e.Bf=function(i,s){var
na={};if((i==null||!i[ub.ba])&&(this.hasHotKey()||this.getAlwaysCheckHotKeys()))na[ub.ba]=true;if((i==null||!i[ub.ia])&&this.getMenu())na[ub.ia]=true;var
S=[];var
Va=this.instanceOf(jsx3.gui.Painted);var
ib=this.getId();for(var
Gb=0;Gb<f.ld.length;Gb++){var
G=f.ld[Gb];var
gb=ub.ya+G;var
ga=[];var
yb=Va?this.getAttribute(gb):null;if(yb)ga[ga.length]=yb.replace(ub.Ba,ub.Ca)+ub.Da;var
Sa=i&&i[G]||na[G];if(Sa){if(typeof Sa!=ub.Ea)Sa=f.mn[G];if(s!=null)ga[ga.length]=ub.Fa+f._EB+ub.Ga+Sa+ub.Ha+s+ub.Ia;else ga[ga.length]=ub.Ja+ib+ub.Ka+f._BRIDGE+ub.Ga+Sa+ub.La;}if(ga.length>0)S[S.length]=ub.Ma+gb+ub.Na+ga.join(ub.Oa)+ub.Pa;}return S.join(ub.Oa);};e.pi=function(o,r,c){var
Ta=ub.ya+o;var
cb=ub.Oa;var
S=false;if(S){var
pb=this.getAttribute(Ta);if(pb){cb=cb+pb;if(!pb.match(ub.Qa))cb=cb+ub.Da;}}var
qb=c!=null?ub.Fa+f._EB+ub.Ga+r+ub.Ha+c+ub.Ia:ub.Ja+this.getId()+ub.Ka+f._BRIDGE+ub.Ga+r+ub.La;return ub.Ma+Ta+ub.Na+cb+qb+ub.Pa;};e.dm=function(l,c,k){var
ob=this[k];var
Xa=jsx3.gui.Event.wrap(l);if(ob){ob.call(this,Xa,c);}else throw new
jsx3.Exception(jsx3._msg(ub.Ra,k,Xa.getType(),this));};jsx3.dl=function(h,s,o,a){var
Y=s;a=a||Number(0);for(var
I=0;I<a;I++)Y=Y.parentNode;var
ab=Y.getAttribute(ub.Sa);var
A=jsx3.GO(ab);if(A!=null)A.dm(h,s,o);else if(jsx3.html.getElmUpByTagName(s,ub.Ta)!=null)throw new
jsx3.Exception(jsx3._msg(ub.Ua,ab,a,s));};f._beginMove=function(i,d,n,m){var
Za=d.ownerDocument;jsx3.gui.Event.preventSelection(Za);var
mb=i.getTrueX();var
Eb=d.offsetLeft;jsx3.EventHelp.constrainY=m;jsx3.EventHelp.xOff=Eb-mb;var
v=i.getTrueY();var
Nb=d.offsetTop;jsx3.EventHelp.constrainX=n;jsx3.EventHelp.yOff=Nb-v;jsx3.EventHelp.jF=d;jsx3.EventHelp.FLAG=1;jsx3.EventHelp.beginTrackMouse(i);i.setCapture(d);i.cancelReturn();i.cancelBubble();};f._beginMoveConstrained=function(n,h,c){var
cb=h.ownerDocument;jsx3.gui.Event.preventSelection(cb);jsx3.EventHelp.startX=n.getTrueX();jsx3.EventHelp.startY=n.getTrueY();jsx3.EventHelp.xOff=h.offsetLeft;jsx3.EventHelp.yOff=h.offsetTop;jsx3.EventHelp.dragRounder=c;jsx3.EventHelp.jF=h;jsx3.EventHelp.FLAG=3;jsx3.EventHelp.FF=false;jsx3.EventHelp.beginTrackMouse(n);n.setCapture(h);n.cancelReturn();n.cancelBubble();};e.doBeginMove=function(q,o){if(!q.leftButton())return;if(o==null)o=this.getRendered();var
u=o.ownerDocument;var
Aa=this.doEvent(ub.B,{objEVENT:q});var
jb=Aa===false;if(o!=null&&!jb){o.style.zIndex=(this.getServer()).getNextZIndex(jsx3.app.Server.Z_DRAG);jsx3.gui.Event.preventSelection(u);var
Ia=q.getTrueX();var
V=o.style.position==ub.Va?parseInt(o.style.left)||0:o.scrollLeft;if(Aa&&Aa.bCONSTRAINY)jsx3.EventHelp.constrainY=true;jsx3.EventHelp.xOff=V-Ia;var
D=q.getTrueY();var
Na=o.style.position==ub.Va?parseInt(o.style.top)||0:o.scrollTop;if(Aa&&Aa.bCONSTRAINX)jsx3.EventHelp.constrainX=true;jsx3.EventHelp.yOff=Na-D;jsx3.EventHelp.jF=o;jsx3.EventHelp.FLAG=1;jsx3.EventHelp.FF=false;jsx3.EventHelp.beginTrackMouse(q);q.setCapture(o);}};e.doEndMove=function(j,c){if(c==null)c=this.getRendered();if(c!=null){c.style.zIndex=this.getZIndex();j.releaseCapture(c);var
Y=parseInt(c.style.left);var
Za=parseInt(c.style.top);this.setLeft(Y);this.setTop(Za);this.doEvent(ub.t,{objEVENT:j,intL:Y,intT:Za,_gipp:1});}};e.doDrag=function(n,h,a,l){n.cancelAll();if(h==null){h=n.srcElement();while(h!=null&&h.getAttribute(ub.Wa)==null){h=h.parentNode;if(h=(h.ownerDocument.getElementsByTagName(ub.Ta))[0])h=null;}if(h==null)return;}var
S=h.getAttribute(ub.Wa);var
x=h.getAttribute(ub.Xa);if(l==null)l={};l.strDRAGID=h.getAttribute(ub.Wa);l.strDRAGTYPE=h.getAttribute(ub.Xa);l.objGUI=h;l.objEVENT=n;if(this.doEvent(ub.J,l)===false)return;jsx3.EventHelp.DRAGTYPE=l.strDRAGTYPE;jsx3.EventHelp.DRAGID=l.strDRAGID;if(jsx3.$A.is(l.strDRAGIDS))jsx3.EventHelp.DRAGIDS=l.strDRAGIDS;jsx3.EventHelp.JSXID=this;if(a==null)a=jsx3.EventHelp.drag;var
kb=a(h,this,jsx3.EventHelp.DRAGTYPE,jsx3.EventHelp.DRAGID);if(kb==null){return false;}else{jsx3.EventHelp.dragItemHTML=kb;jsx3.EventHelp.FLAG=2;jsx3.EventHelp.FF=true;jsx3.EventHelp.beginTrackMouse(n);}jsx3.EventHelp.constrainX=false;jsx3.EventHelp.constrainY=false;};e.doDrop=function(l,a,s){if(jsx3.EventHelp.DRAGID!=null){var
Y=jsx3.EventHelp.JSXID;var
Ba=jsx3.EventHelp.DRAGID;var
_a=jsx3.EventHelp.DRAGTYPE;var
Sa={objEVENT:l,objSOURCE:Y,strDRAGID:Ba,strDRAGTYPE:_a};if(s==jsx3.EventHelp.ONDROP&&jsx3.gui.isMouseEventModKey(l)){Sa.objGUI=l.srcElement();this.doEvent(ub.G,Sa);jsx3.EventHelp.reset();}else if(s==jsx3.EventHelp.ONDROP){Sa.objGUI=l.srcElement();this.doEvent(ub.K,Sa);jsx3.EventHelp.reset();}else if(s==jsx3.EventHelp.ONBEFOREDROP){Sa.objGUI=l.toElement();this.doEvent(ub.z,Sa);}else if(s==jsx3.EventHelp.ONCANCELDROP){Sa.objGUI=l.fromElement();this.doEvent(ub.F,Sa);}}};e.doSpyOver=function(n,r,c){var
Ua=n.getTrueX();var
_a=n.getTrueY();if(this._jsxspytimeout)return;if(c==null)c={};n.rj();c.objEVENT=n;var
tb=this;this._jsxspytimeout=window.setTimeout(function(){if(tb.getParent()==null)return;tb._jsxspytimeout=null;var
Ab=tb.doEvent(ub.T,c);if(Ab)tb.showSpy(Ab,n);},jsx3.EventHelp.SPYDELAY);};e.doSpyOut=function(q,o){if(q.isFakeOut(o))return;if(!jsx3.gui.Heavyweight)return;var
w=jsx3.gui.Heavyweight.GO(ub.Ya);if(w){var
yb=w.getRendered();if(yb&&q.isFakeOut(yb))return;}window.clearTimeout(this._jsxspytimeout);this._jsxspytimeout=null;f.hideSpy();};e.showSpy=function(a,l,h){if(a!=null){jsx3.require(ub.Za);f.hideSpy();a=ub._a+a+ub.ab;var
Ja=new
jsx3.gui.Heavyweight(ub.Ya,this);Ja.setHTML(a);Ja.setRatio(1.4);if(l instanceof N){Ja.addXRule(l,ub.bb,ub.bb,12);Ja.addXRule(l,ub.cb,ub.cb,-12);Ja.addYRule(l,ub.db,ub.eb,6);Ja.addYRule(l,ub.eb,ub.db,-6);}else{Ja.addRule(l,ub.bb,-2,ub.fb);Ja.addRule(l,ub.cb,12,ub.fb);Ja.addRule(null,ub.bb,-24,ub.fb);Ja.addRule(h,ub.eb,-2,ub.gb);Ja.addRule(h,ub.db,-6,ub.gb);Ja.setOverflow(3);}Ja.show();var
Y=Ja.getRendered();if(Y){var
ka=(Y.ownerDocument.getElementsByTagName(ub.Ta))[0];if(parseInt(Y.style.width)+parseInt(Y.style.left)>ka.offsetWidth)Ja.applyRules(ub.fb);}N.subscribe(ub.ea,jsx3.gui.Interactive.hideSpy);}};f.hideSpy=function(){if(jsx3.gui.Heavyweight){var
eb=jsx3.gui.Heavyweight.GO(ub.Ya);if(eb){eb.destroy();N.unsubscribe(ub.ea,jsx3.gui.Interactive.hideSpy);}}};e.getSpyStyles=function(p){return this.jsxspystyle?this.jsxspystyle:p?p:null;};e.setSpyStyles=function(o){delete this[ub.hb];delete this[ub.ib];delete this[ub.jb];delete this[ub.kb];this.jsxspystyle=o;};e.eZ=function(){var
U={};if(jsx3.util.strEmpty(this.getSpyStyles())&&this.jsxspystylekeys!=null){var
Ea=(this.jsxspystylekeys||ub.Oa).split(ub.lb);var
Eb=(this.jsxspystylevalues||ub.Oa).split(ub.lb);for(var
Kb=0;Kb<Ea.length;Kb++)U[Ea[Kb]]=Eb[Kb];}else{var
Ha=this.getSpyStyles(ub.o);var
X=ub.mb;var
U={};var
O=Ha.split(ub.Da);for(var
Kb=0;Kb<O.length;Kb++){var
I=O[Kb]+ub.Oa;var
Pa=I.split(ub.nb);if(Pa&&Pa.length==2){var
_a=Pa[0].replace(X,function(r,q){return (q.substring(1)).toUpperCase();});U[_a]=Pa[1];}}}return U;};e.applySpyStyle=function(a){if(this._jsxIu==null)this._jsxIu=this.eZ();if(this._jsxsP==null){this._jsxsP={};for(var ya in this._jsxIu)this._jsxsP[ya]=a.style[ya];}try{for(var ya in this._jsxIu)a.style[ya]=this._jsxIu[ya];}catch(Kb){}};e.removeSpyStyle=function(n){try{for(var ga in this._jsxsP)n.style[ga]=this._jsxsP[ga];}catch(Kb){}};e.checkHotKeys=function(n){if(this._jsxVY==null)return false;if(n.isModifierKey())return false;var
ua=false;var
va=n.getAttribute(ub.ob);for(var Nb in this._jsxVY){var
Da=this._jsxVY[Nb];if(Da instanceof jsx3.gui.HotKey){if(Da.isDestroyed()){delete this._jsxVY[Nb];continue;}else if(!Da.isEnabled())continue;if(Da.isMatch(n)){var
pa=true;if(!va)pa=Da.invoke(this,[n]);if(pa!==false)ua=true;}}}if(ua)n.cancelAll();return ua;};e.registerHotKey=function(n,a,i,r,h){var
O;if(n instanceof jsx3.gui.HotKey){O=n;}else{var
aa=typeof n==ub.W?n:this[n];if(!(typeof aa==ub.W))throw new
jsx3.IllegalArgumentException(ub.pb,n);O=new
jsx3.gui.HotKey(aa,a,i,r,h);}if(this._jsxVY==null)this._jsxVY={length:0};var
Mb=O.getKey();this._jsxVY.length+=(this._jsxVY[Mb]?0:1);this._jsxVY[Mb]=O;return O;};e.hasHotKey=function(){return this._jsxVY!=null&&this._jsxVY.length>0;};e.setAlwaysCheckHotKeys=function(g){this.jsxalwayscheckhk=g;return this;};e.getAlwaysCheckHotKeys=function(){return this.jsxalwayscheckhk;};e.clearHotKeys=function(){this._jsxVY=null;};f.getVersion=function(){return ub.qb;};e.isOldEventProtocol=function(){var
Da=this.getServer();return Da&&Da.getEnv(ub.rb)<3.1;};e.rB=function(b){this.doEvent(ub.H,{objPARENT:b});};jsx3.app.Model.jsxclass.addMethodMixin(ub.sb,f.jsxclass,ub.tb);});jsx3.Event=jsx3.gui.Interactive;jsx3.Class.defineClass("jsx3.EventHelp",null,null,function(b,f){var
ub={a:"mousemove",b:"mouseup",c:"",d:/<[^>]*>/gi,e:" ",f:"...",g:"... ... ...",h:"<span class='jsx30block_drag'>",i:"</span>",j:"px",k:"dragRounder",l:"_jsxdrag",m:"body",n:'<div id="_jsxdrag"',o:' style="position:absolute;left:',p:"px;top:",q:"px;min-width:10px;z-index:",r:';">',s:"</div>",t:"beforeEnd"};b.ONBEFOREDROP=0;b.ONDROP=1;b.ONCANCELDROP=2;b.DRAGICONINDEX=32000;b.DEFAULTSPYLEFTOFFSET=5;b.DEFAULTSPYTOPOFFSET=5;b.SPYDELAY=300;b.FLAG=0;b.FF=false;b.yOff=0;b.xOff=0;b.jF=null;b.beginTrackMouse=function(l){jsx3.gui.Event.subscribe(ub.a,b.mouseTracker);jsx3.gui.Event.subscribe(ub.b,b.mouseUpTracker);};b.endTrackMouse=function(){jsx3.gui.Event.unsubscribe(ub.a,b.mouseTracker);jsx3.gui.Event.unsubscribe(ub.b,b.mouseUpTracker);};b.mouseTracker=function(a){b.doMouseMove(a.event);};b.mouseUpTracker=function(e){b.reset();};b.drag=function(c,j,d,k){var
yb=c&&c.innerHTML?jsx3.util.strTruncate((c.innerHTML+ub.c).replace(ub.d,ub.e),25,ub.f,0.5):ub.g;return ub.h+yb+ub.i;};b.doMouseMove=function(k){if(b.FLAG==1||b.FLAG==3){var
ab=b.jF.ownerDocument;if(b.FLAG==1){if(!b.constrainX)b.jF.style.left=k.getTrueX()+b.xOff+ub.j;if(!b.constrainY)b.jF.style.top=k.getTrueY()+b.yOff+ub.j;}else{var
fa=k.getTrueX()-b.startX;var
X=k.getTrueY()-b.startY;var
C=b[ub.k](b.xOff+fa,b.yOff+X,k);if(C[0]!=b.offsetLeft||C[1]!=b.offsetTop){if(!isNaN(C[0]))b.jF.style.left=C[0]+ub.j;if(!isNaN(C[1]))b.jF.style.top=C[1]+ub.j;}}}else if(b.FLAG==2){var
ab=b.JSXID.getDocument();var
ha=ab.getElementById(ub.l);if(ha)jsx3.html.removeNode(ha);var
Ma=(ab.getElementsByTagName(ub.m))[0];b.xOff=10;b.yOff=10;jsx3.gui.Event.preventSelection(ab);var
Cb=ub.n+jsx3.html.pe+ub.o+(b.constrainX?parseInt(b.jF.style.left):k.getTrueX()+b.xOff)+ub.p+(b.constrainY?parseInt(b.jF.style.top):k.getTrueY()+b.yOff)+ub.q+b.DRAGICONINDEX+ub.r+b.dragItemHTML+ub.s;jsx3.html.insertAdjacentHTML(Ma,ub.t,Cb);b.jF=ab.getElementById(ub.l);b.FLAG=1;}else b.endTrackMouse();};b.reset=function(){b.DRAGTYPE=null;b.DRAGID=null;b.DRAGIDS=null;b.FLAG=0;b.endTrackMouse();if(b.jF){if(b.jF.id==ub.l)jsx3.html.removeNode(b.jF);if(jsx3.CLASS_LOADER.IE)b.jF.releaseCapture();b.jF=null;b.constrainX=false;b.constrainY=false;}};b.isDragging=function(){return b.jF!=null&&b.FF;};b.getDragIcon=function(){return b.jF;};b.getDragSource=function(){return b.JSXID;};b.getDragType=function(){return b.DRAGTYPE;};b.getDragId=function(){return b.DRAGID;};b.getDragIds=function(){return jsx3.$A.is(b.DRAGIDS)?b.DRAGIDS:[b.DRAGID];};});jsx3.Class.defineInterface("jsx3.gui.Alerts",null,function(j,g){var
ub={a:"jsxexecute",b:"xml/components/dialog_alert.xml",c:"ok",d:"title",e:"message",f:"y0",g:"this.",h:"(this.getAncestorOfType(jsx3.gui.Dialog));",i:"xml/components/dialog_prompt.xml",j:"cancel",k:"var d = this.getAncestorOfType(jsx3.gui.Dialog); this.",l:"(d, d.getDescendantOfName('value').getValue());",m:"value",n:"xml/components/dialog_confirm.xml",o:"no",p:"",q:"bold"};var
wa=ub.a;g.getAlertsParent=jsx3.Method.newAbstract();g.alert=function(c,r,d,o,s){var
ha=jsx3.net.URIResolver.JSX;var
Kb=(this.getAlertsParent()).loadAndCache(ub.b,false,jsx3.getSharedCache(),ha);var
vb=Kb.getDescendantOfName(ub.c);if(c!=null)(Kb.getDescendantOfName(ub.d)).setText(c);if(r!=null)(Kb.getDescendantOfName(ub.e)).setText(r);if(o===false)Kb.hideButton();else if(o!=null)vb.setText(o);if(d!=null){var
ta=ub.f;vb.y0=d;vb.setEvent(ub.g+ta+ub.h,wa);}this.configureAlert(Kb,s);(this.getAlertsParent()).paintChild(Kb);Kb.focus();return Kb;};g.prompt=function(f,b,c,m,l,r,p){var
Ab=jsx3.net.URIResolver.JSX;var
Kb=(this.getAlertsParent()).loadAndCache(ub.i,false,jsx3.getSharedCache(),Ab);var
Gb=Kb.getDescendantOfName(ub.c);var
pa=Kb.getDescendantOfName(ub.j);if(f!=null)(Kb.getDescendantOfName(ub.d)).setText(f);if(b!=null)(Kb.getDescendantOfName(ub.e)).setText(b);if(l!=null)Gb.setText(l);if(r!=null)pa.setText(r);if(c!=null){var
zb=ub.f;Gb.y0=c;Gb.setEvent(ub.k+zb+ub.l,wa);}if(m!=null){var
zb=ub.f;pa.y0=m;pa.setEvent(ub.g+zb+ub.h,wa);}this.configureAlert(Kb,p);(this.getAlertsParent()).paintChild(Kb);jsx3.sleep(function(){(Kb.getDescendantOfName(ub.m)).focus();});return Kb;};g.confirm=function(d,f,n,b,h,a,i,c,s,l){var
ab=jsx3.net.URIResolver.JSX;var
Ka=(this.getAlertsParent()).loadAndCache(ub.n,false,jsx3.getSharedCache(),ab);var
Z=Ka.getDescendantOfName(ub.c);var
Ab=Ka.getDescendantOfName(ub.j);var
ia=Ka.getDescendantOfName(ub.o);var
ba=[Z,Ab,ia];i=i!=null?i-1:0;if(d!=null)(Ka.getDescendantOfName(ub.d)).setText(d);if(f!=null)(Ka.getDescendantOfName(ub.e)).setText(f);if(h!=null)Z.setText(h);if(a!=null)Ab.setText(a);if(b!=null){var
Ca=ub.f;Ab.y0=b;Ab.setEvent(ub.g+Ca+ub.h,wa);}if(n!=null){var
Ca=ub.f;Z.y0=n;Z.setEvent(ub.g+Ca+ub.h,wa);}if(c!=null||s!=null||i==3){if(s)ia.setText(s);if(c){var
Ca=ub.f;ia.y0=c;ia.setEvent(ub.g+Ca+ub.h,wa);}ia.setDisplay(ub.p);}var
sa=ba[i];if(sa){sa.setFontWeight(ub.q);Ka.registerHotKey(function(o){if(o.enterKey()){(this.getDescendantOfName(sa.getName())).doExecute(o);o.cancelBubble();}},13,false,false,false);}this.configureAlert(Ka,l);(this.getAlertsParent()).paintChild(Ka);Ka.focus();return Ka;};g.configureAlert=function(p,h){if(h==null)return;if(h.width)p.setWidth(h.width,false);if(h.height)p.setHeight(h.height,false);if(h.noTitle)p.removeChild(p.getChild(ub.d));if(h.nonModal)p.setModal(0);};});jsx3.Alerts=jsx3.gui.Alerts;jsx3.require("jsx3.gui.Painted","jsx3.gui.Interactive");jsx3.Class.defineClass("jsx3.gui.Block",jsx3.gui.Painted,[jsx3.gui.Interactive],function(l,k){var
ub={A:" ",Aa:' title="',B:"...",Ba:"visibility:hidden;",C:"... ... ...",Ca:"z-index:",D:"<span class='jsx30block_drag'>",Da:"onfocus",E:"</span>",Ea:"_mask",F:"padding",Fa:"jsxbgcolor",G:"0px",Ga:"@Solid Shadow",H:"top",Ha:"jsxbg",I:"position",Ia:"@Mask 70%",J:"relative",Ja:"jsxcursor",K:"absolute",Ka:"@Wait",L:"visibility",La:"if (objEVENT.tabKey() && objEVENT.shiftKey()) { this.getParent().focus(); }",M:"zIndex",Ma:"var objEVENT = jsx3.gui.Event.wrap(event); if (objEVENT.shiftKey()) { jsx3.GO(this.id).getParent().focus(); }",N:"box",Na:"_jsxcQ",O:"100%",Oa:"tabIndex",P:"div",Pa:"_jsxZs",Q:"jsx3.gui.CDF",Qa:"3.00.00",R:"jsxdblclick",S:"dblclick",T:"jsxclick",U:"click",V:"jsxkeydown",W:"keydown",X:"mouseover",Y:"mouseout",Z:"mousedown",_:"doBeginMove",a:"Verdana",aa:"doBeginDrag",b:"#000000",ba:' JSXDragId="',c:"&#160;",ca:'" JSXDragType="JSX_GENERIC"',d:"jsx30block",da:' id="',e:"span",ea:'"',f:"bold",fa:' class="',g:"normal",ga:'" ',h:"",ha:' label="',i:"none",ia:"background-color:",j:"hidden",ja:";",k:"left",ka:"color:",l:"center",la:"cursor:",m:"right",ma:"block",n:"jsx:///images/spc.gif",na:"display:block;",o:"backgroundColor",oa:"display:none;",p:"border",pa:"font-family:",q:"color",qa:"font-size:",r:"cursor",ra:"px;",s:"relativebox",sa:"font-weight:",t:/display:([^;]*);?/i,ta:' tabindex="',u:"$1",ua:'" jsxtabindex="',v:"display",va:"overflow:auto;",w:"margin",wa:"overflow:hidden;",x:"mouseup",xa:"text-align:",y:"doEndMove",ya:/\"/g,z:/<[^>]*>/gi,za:"&quot;"};var
ga=jsx3.gui.Event;var
F=jsx3.gui.Interactive;l.SCROLLSIZE=16;l.OVERFLOWSCROLL=1;l.OVERFLOWHIDDEN=2;l.OVERFLOWEXPAND=3;l.DEFAULTFONTNAME=ub.a;l.DEFAULTFONTSIZE=10;l.DEFAULTCOLOR=ub.b;l.DEFAULTTEXT=ub.c;l.DEFAULTCLASSNAME=ub.d;l.DEFAULTTAGNAME=ub.e;l.FONTBOLD=ub.f;l.FONTNORMAL=ub.g;l.DISPLAYBLOCK=ub.h;l.DISPLAYNONE=ub.i;l.VISIBILITYVISIBLE=ub.h;l.VISIBILITYHIDDEN=ub.j;l.NULLSTYLE=-1;l.ALIGNLEFT=ub.k;l.ALIGNCENTER=ub.l;l.ALIGNRIGHT=ub.m;l.ABSOLUTE=0;l.RELATIVE=1;l.MASK_NO_EDIT=jsx3.gui.Painted.MASK_NO_EDIT;l.MASK_ALL_EDIT=jsx3.gui.Painted.MASK_ALL_EDIT;l.MASK_MOVE_ONLY={MM:true};l.MASK_EAST_ONLY={NN:false,EE:true,SS:false,WW:false,MM:false};l.SPACE=jsx3.resolveURI(ub.n);jsx3.html.loadImages(l.SPACE);k.init=function(s,f,a,q,n,e){this.jsxsuper(s);if(f!=null)this.setLeft(f);if(a!=null)this.setTop(a);if(q!=null)this.setWidth(q);if(n!=null)this.setHeight(n);if(e!=null)this.setText(e);};k.getBackgroundColor=function(){return this.jsxbgcolor;};k.setBackgroundColor=function(f,r){this.jsxbgcolor=f;if(r)this.updateGUI(ub.o,f==l.NULLSTYLE?ub.h:f);return this;};k.getBackground=function(){return this.jsxbg;};k.setBackground=function(e){this.jsxbg=e;return this;};k.getBorder=function(){return this.jsxborder;};k.setBorder=function(q,b){this.jsxborder=q;if(b)this.recalcBox([ub.p]);else this.ce();return this;};k.getColor=function(){return this.jsxcolor;};k.setColor=function(g,m){this.jsxcolor=g;if(m)this.updateGUI(ub.q,g==l.NULLSTYLE?ub.h:g);return this;};k.getCursor=function(){return this.jsxcursor;};k.setCursor=function(q,j){this.jsxcursor=q;if(j)this.updateGUI(ub.r,q);return this;};k.getCSSOverride=function(){return this.jsxstyleoverride;};k.setCSSOverride=function(f){this.jsxstyleoverride=f;return this;};k.getClassName=function(){return this.jsxclassname;};k.setClassName=function(c){this.jsxclassname=c;return this;};k.getDisplay=function(){return this.jsxdisplay;};k.setDisplay=function(f,i){if(this.jsxdisplay!=f){this.jsxdisplay=f;if(i){if(f!=ub.i){var
L=this.Wl();if(!(this.getRelativePosition()==0||L&&L.getBoxType()!=ub.s)){var
za=(jsx3.gui.Painted.Box.getCssFix()).replace(ub.t,ub.u);if(!jsx3.util.strEmpty(za))f=za;}}if(f==ub.i)jsx3.html.persistScrollPosition(this.getRendered());this.updateGUI(ub.v,f);if(f!=ub.i){jsx3.gui.Painted._onAfterRestoreViewCascade(this,this.getRendered());jsx3.html.restoreScrollPosition(this.getRendered());}}}return this;};k.getFontName=function(){return this.jsxfontname;};k.setFontName=function(e){this.jsxfontname=e;return this;};k.getFontSize=function(){return this.jsxfontsize;};k.setFontSize=function(d){this.jsxfontsize=d;return this;};k.getFontWeight=function(){return this.jsxfontweight;};k.setFontWeight=function(n){this.jsxfontweight=n;return this;};k.getHeight=function(){return this.jsxheight;};k.setHeight=function(d,b){this.jsxheight=d;if(b){this.Ul({height:d},true);}else this.ce();return this;};k.getIndex=function(){return this.jsxindex;};k.setIndex=function(h,g){this.jsxindex=h;if(g){var
S=this.getRendered();if(S!=null)S.tabIndex=h;}return this;};l.getJSXParent=function(c){return jsx3.html.getJSXParent(c);};k.getLeft=function(){return this.jsxleft;};k.setLeft=function(a,q){this.jsxleft=a;if(q){if(isNaN(a))a=0;this.Ul({left:a},true);}else this.clearBoxProfile(false);return this;};k.setDimensions=function(j,m,n,i,a){if(jsx3.$A.is(j)){a=m;i=j[3];n=j[2];m=j[1];j=j[0];}if(j!=null)this.jsxleft=j;if(m!=null)this.jsxtop=m;if(n!=null)this.jsxwidth=n;if(i!=null)this.jsxheight=i;if(a){this.Ul({left:this.jsxleft,top:this.jsxtop,width:this.jsxwidth,height:this.jsxheight},true);}else this.ce();};k.getDimensions=function(){return [this.getLeft(),this.getTop(),this.getWidth(),this.getHeight()];};k.getMargin=function(){return this.jsxmargin;};k.setMargin=function(b,q){this.jsxmargin=b;if(q)this.recalcBox([ub.w]);else this.ce();return this;};k.getMaskProperties=function(){var
ka={};ka.NN=true;ka.SS=true;ka.EE=true;ka.WW=true;ka.MM=this.getRelativePosition()==0;return ka;};k.doBeginMove=function(d,i){if(d.leftButton()){this.jsxsupermix(d,i);ga.subscribe(ub.x,this,ub.y);d.cancelAll();}};k.doEndMove=function(a){a=a.event;var
oa=this.getRendered(a);if(a.leftButton()){ga.unsubscribe(ub.x,this,ub.y);this.jsxsupermix(a,oa);}else this.eo(a,oa);};k.getDragIcon=function(h,b,r,p){var
aa=h&&h.innerHTML?jsx3.util.strTruncate((h.innerHTML+ub.h).replace(ub.z,ub.A),25,ub.B,0.5):ub.C;return ub.D+aa+ub.E;};k.doBeginDrag=function(o,q){if(o.leftButton())this.doDrag(o,q,this.getDragIcon);};k.getOverflow=function(){return this.jsxoverflow;};k.setOverflow=function(d){this.jsxoverflow=d;return this;};k.getPadding=function(){return this.jsxpadding;};k.setPadding=function(j,i){this.jsxpadding=j;if(i)this.recalcBox([ub.F]);else this.ce();return this;};k.getPropertiesPath=function(){return null;};k.getModelEventsPath=function(){return null;};k.getRelativePosition=function(){return this.jsxrelativeposition;};k.setRelativePosition=function(e,d){if(this.jsxrelativeposition!=e){this.ce();this.jsxrelativeposition=e;if(d){if(e==0){this.setDimensions(this.getLeft()||Number(0),this.getTop()||Number(0),null,null,true);this.updateGUI(ub.w,ub.G);}else{this.updateGUI(ub.k,ub.G);this.updateGUI(ub.H,ub.G);if(this.getMargin())this.setMargin(this.getMargin(),true);}this.updateGUI(ub.I,e==1?ub.J:ub.K);if(this.getDisplay()!=ub.i)this.setDisplay(ub.h,true);}}return this;};k.getTagName=function(){return this.jsxtagname;};k.setTagName=function(i){this.jsxtagname=i;this.ce();return this;};k.getText=function(){return this.jsxtext;};k.setText=function(j,c){this.jsxtext=j;if(c)if(this.getChild(0)!=null||(this.Wl(true)).lg(0)!=null){this.repaint();}else{var
X=this.getRendered();if(X!=null)X.innerHTML=j;}return this;};k.getTextAlign=function(){return this.jsxtextalign;};k.setTextAlign=function(o){this.jsxtextalign=o;return this;};k.getTip=function(){return this.jsxtip;};k.setTip=function(e){this.jsxtip=e;var
db;if(db=this.getRendered())db.title=e;return this;};k.getTop=function(){return this.jsxtop;};k.setTop=function(q,o){this.jsxtop=q;if(o){if(isNaN(q))q=0;this.Ul({top:q},true);}else this.clearBoxProfile(false);return this;};k._findGUI=function(h){return this.getRendered();};k.updateGUI=function(q,n){var
eb=this._findGUI(q);if(eb!=null)try{eb.style[q]=n;}catch(Kb){}};k.getVisibility=function(){return this.jsxvisibility;};k.setVisibility=function(h,a){this.jsxvisibility=h;if(a)this.updateGUI(ub.L,h);return this;};k.getWidth=function(){return this.jsxwidth;};k.setWidth=function(c,q){this.jsxwidth=c;if(q){this.Ul({width:c},true);}else this.ce();return this;};k.getZIndex=function(){return this.jsxzindex;};k.setZIndex=function(s,r){this.jsxzindex=s;if(r)this.updateGUI(ub.M,s);return this;};k.gi=function(c,s,o){this.Tl(c,s,o,4);};k.Jm=function(b){this.applyDynamicProperties();if(this.getParent()&&(b==null||isNaN(b.parentwidth)||isNaN(b.parentheight))){b=(this.getParent()).ng(this);}else if(b==null)b={};var
Db=b.boxtype&&b.boxtype!=ub.N||this.getRelativePosition()!=0;var
rb=Db?null:b.left?b.left:this.getLeft();var
xa=Db?null:b.top?b.top:this.getTop();if(!Db&&!rb)rb=0;if(!Db&&!xa)xa=0;var
Ya,bb,qa,L;if(!b.boxtype)b.boxtype=Db?ub.s:ub.N;if(b.tagname==null)b.tagname=(Ya=this.getTagName())?Ya.toLowerCase():jsx3.gui.Block.DEFAULTTAGNAME;if(b.left==null&&b.boxtype==ub.N)b.left=rb;if(b.top==null&&b.boxtype==ub.N)b.top=xa;if(b.width==null)b.width=b.width?b.width:this.getWidth();if(b.height==null)b.height=b.height?b.height:this.getHeight();if(b.width==ub.O||b.tagName==ub.P&&this.ii()==ub.h){b.tagname=ub.P;b.container=true;}if((bb=this.getPadding())!=null&&bb!=ub.h)b.padding=bb;if(Db&&(qa=this.getMargin())!=null&&qa!=ub.h)b.margin=qa;if((L=this.getBorder())!=null&&L!=ub.h)b.border=L;return new
jsx3.gui.Painted.Box(b);};k.setCDFId=function(f){this.jsxcdfid=f;var
ab=this.getAncestorOfType(ub.Q);if(ab)ab.read();};k.getCDFId=function(){return this.jsxcdfid;};k.setCDFAttribute=function(q){this.jsxcdfattribute=q;var
vb=this.getAncestorOfType(ub.Q);if(vb)vb.read();};k.getCDFAttribute=function(){return this.jsxcdfattribute;};k.paint=function(j){this.applyDynamicProperties();j=j==null?this.ii():j;var
Ma=this.getId();var
y={};if(this.hasEvent(ub.R))y[ub.S]=true;if(this.hasEvent(ub.T))y[ub.U]=true;if(this.hasEvent(ub.V))y[ub.W]=true;var
ha=ub.h;if(this.getCanSpy()==1){y[ub.X]=true;y[ub.Y]=true;}if(this.getCanMove()==1){if(this.getCanMove()==1)y[ub.Z]=ub._;}else if(this.getMenu()!=null){y[ub.x]=true;}else if(this.getCanDrop()==1)y[ub.x]=true;if(y[ub.Z]==null&&this.getCanDrag()==1){y[ub.Z]=ub.aa;ha=ha+(ub.ba+Ma+ub.ca);}var
fa=this.Bf(y,0)+ha;var
R=this.renderAttributes(null,true);var
O=this.Wl(true);O.setAttributes(this.md()+this.Do()+fa+ub.da+Ma+ub.ea+this.Wb()+ub.fa+this.dd()+ub.ga+R);O.setStyles(this.Di()+this.Uc()+this.ti()+this.Kh()+this.Bj()+this.Gd()+this.Kk()+this.We()+this.Ak()+this.yg()+this.qg()+this.paintBlockDisplay()+this.Vg());return (O.paint()).join(j+this.paintChildren());};k.Pe=function(h,e){if(this.getCanSpy()==1)this.doSpyOver(h,e);if(this.getCanDrop()==1)this.doDrop(h,e,jsx3.EventHelp.ONBEFOREDROP);};k.nk=function(m,b){if(this.getCanSpy()==1)this.doSpyOut(m,b);if(this.getCanDrop()==1)this.doDrop(m,b,jsx3.EventHelp.ONCANCELDROP);};k.eo=function(r,a){if(this.getCanDrop()==1)this.doDrop(r,a,jsx3.EventHelp.ONDROP);else this.jsxsupermix(r,a);};k.Wb=function(){var
Fb=this.getName();return Fb!=null?ub.ha+Fb+ub.ea:ub.h;};k.Uc=function(){var
Mb=this.getBackgroundColor();return Mb?ub.ia+Mb+ub.ja:ub.h;};k.ti=function(){return this.getBackground()?this.getBackground()+ub.ja:ub.h;};k.Kh=function(){var
Oa=this.getColor();return Oa?ub.ka+Oa+ub.ja:ub.h;};k.yg=function(){var
Ra=this.getCursor();return Ra?ub.la+Ra+ub.ja:ub.h;};k.Vg=function(){return this.getCSSOverride()?this.getCSSOverride():ub.h;};k.dd=function(){var
na=this.getClassName();return l.DEFAULTCLASSNAME+(na?ub.A+na:ub.h);};k.paintBlockDisplay=function(){if(jsx3.util.strEmpty(this.getDisplay())||this.getDisplay()==ub.ma){var
Pa=this.Wl();if(this.getWidth()==ub.O){return ub.na;}else return ub.h;}else if(this.getDisplay()==ub.i)return ub.oa;return ub.h;};k.Ne=function(){var
sa=this.getDisplay();return jsx3.util.strEmpty(sa)||sa==ub.h?ub.h:ub.oa;};k.Gd=function(){var
Ya=this.getFontName();return Ya?ub.pa+Ya+ub.ja:ub.h;};k.Di=function(){var
ia=parseInt(this.getFontSize());return isNaN(ia)?ub.h:ub.qa+ia+ub.ra;};k.We=function(){var
_=this.getFontWeight();return _?ub.sa+_+ub.ja:ub.h;};k.md=function(b){if(b==null)b=this.getIndex();return b!=null&&this.jsxenabled!=0?ub.ta+b+ub.ua+b+ub.ea:ub.h;};k.Bj=function(){if(this.getOverflow()==1){return ub.va;}else if(this.getOverflow()==2){return ub.wa;}else return ub.h;};k.ii=function(){return this.getText()?this.getText():ub.h;};k.Ak=function(){var
la=this.getTextAlign();return la?ub.xa+la+ub.ja:ub.h;};k.Do=function(){var
I=this.getTip();if(I!=null){I=I.replace(ub.ya,ub.za);return I?ub.Aa+I+ub.ga:ub.h;}else if(jsx3.gui.Form&&this.instanceOf(jsx3.gui.Form)){var
Ra=this.getKeyBinding();return Ra?ub.Aa+Ra.replace(ub.ya,ub.za)+ub.ga:ub.h;}else return ub.h;};k.qg=function(){return jsx3.util.strEmpty(this.getVisibility())||this.getVisibility()==ub.h?ub.h:ub.Ba;};k.Kk=function(){var
Oa=this.getZIndex();return isNaN(Oa)?ub.h:ub.Ca+Oa+ub.ja;};k.showMask=function(r){if(this._jsxcQ)this.hideMask();var
Ya;if(Ya=this.getRendered()){var
V=(this.getAbsolutePosition()).H;if(Ya.onfocus)Ya._jsxZs=Ya.onfocus;jsx3.html.addEventListener(Ya,ub.Da,l.DB);if(Ya.tabIndex)Ya._jsxtabindex=Ya.tabIndex;Ya.tabIndex=0;this._jsxcQ=this.getId()+ub.Ea;var
nb=(((((((((new
l(this._jsxcQ,0,0,ub.O,ub.O,r)).setOverflow(2)).setFontWeight(ub.f)).setTextAlign(ub.l)).setIndex(0)).setRelativePosition(0)).setZIndex(32000)).setDynamicProperty(ub.Fa,ub.Ga)).setDynamicProperty(ub.Ha,ub.Ia)).setDynamicProperty(ub.Ja,ub.Ka);nb.setWidth(ub.O);nb.setHeight(ub.O);nb.setPadding(parseInt(V/2));nb.setEvent(ub.La,ub.V);nb.setAttribute(ub.Da,ub.Ma);this.setChild(nb);this.paintChild(nb);nb.focus();}};l.DB=function(b){var
y=jsx3.GO(this.id);if(y){var
Mb=ga.wrap(b||window.event);if(!Mb.shiftKey())if((y.getChildren()).length)(y.getLastChild()).focus();}};k.hideMask=function(){var
x;if(x=this.getChild(this._jsxcQ)){this.removeChild(x);delete this[ub.Na];var
eb;if(eb=this.getRendered()){if(eb._jsxtabindex){eb.tabIndex=eb._jsxtabindex;}else eb.removeAttribute(ub.Oa);jsx3.html.removeEventListener(eb,ub.Da,l.DB);if(eb._jsxZs){eb.onfocus=eb._jsxZs;delete eb[ub.Pa];}else{}}}};l.getVersion=function(){return ub.Qa;};});jsx3.Block=jsx3.gui.Block;