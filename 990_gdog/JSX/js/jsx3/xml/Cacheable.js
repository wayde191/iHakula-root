/*
 * Copyright (c) 2001-2009, TIBCO Software Inc.
 * Use, modification, and distribution subject to terms of license.
 */
jsx3.require("jsx3.xml.Template","jsx3.xml.CDF");jsx3.Class.defineInterface("jsx3.xml.Cacheable",null,function(p,s){var
ub={A:"_XSL",B:/\s*,\s*/g,C:",",D:"xml.trans_bad",E:"xml.trans_err",F:"3.00.00",a:"jsx:///xsl/xml.xsl",b:"JSX_XML_XSL",c:"",d:"jsxasyncmessage",e:"jsx3.xml.Cacheable.",f:"jsx3.xml.Cacheable.data",g:"xml.err_trans",h:/\s*<\/?JSX_FF_WELLFORMED_WRAPPER( [^>]*)?\/?>\s*/g,i:"jsxxslparams",j:"xml.err_load",k:"data",l:"jsxassignids",m:"1",n:"_XML",o:"xmlbind",p:"onChangeServer",q:"h7",r:"onAfterAttach",s:"TC",t:"_jsxbG",u:"onDestroy",v:"lV",w:"loading",x:"onXmlBinding",y:"string",z:"xml.err_load_xsl"};var
t=jsx3.xml.Document;var
x=jsx3.xml.CDF;var
xb=jsx3.util.Logger.getLogger(p.jsxclass.getName());p.DEFAULTSTYLESHEET=jsx3.resolveURI(ub.a);p.DEFAULTXSLCACHEID=ub.b;p.CLEANUPRESOURCES=0;p.SHARERESOURCES=1;s.doTransform=function(h){var
ca=this.getXML();if(this.getNodeSet())ca=this.getNodeSet();this.ig(0,ca);var
N=this.getXSL();if(ca.hasError()||N.hasError())return ub.c;if(h==null)h=this.jsxxslparams;var
la=ub.c;var
K=null;if(N instanceof jsx3.xml.XslDocument){K=N;K.reset();}else K=new
jsx3.xml.Template(N);if(!K.hasError()){if(h)K.setParams(h);if(ca.getNamespaceURI()==jsx3.app.Cache.XSDNS){var
da=this.getServer();K.setParam(ub.d,da.getDynamicProperty(ub.e+ca.getNodeName(),h&&h.jsxtitle||da.getDynamicProperty(ub.f)));}la=K.transform(ca);if(K.hasError()){xb.error(jsx3._msg(ub.g,this,K.getError()));la=ub.c;}}else xb.error(jsx3._msg(ub.g,this,K.getError()));return la;};s.Nm=function(q){return q.replace(ub.h,ub.c);};s.getXSLParams=function(){if(this.jsxxslparams==null)this.jsxxslparams={};return this.jsxxslparams;};s.setXSLParam=function(i,f){if(f!=null)(this.getXSLParams())[i]=f;else delete this.getXSLParams()[i];return this;};s.removeXSLParam=function(h){delete this.getXSLParams()[h];return this;};s.removeXSLParams=function(){delete this[ub.i];return this;};s.getNodeSet=function(){return this._jsxbG;};s.setNodeSet=function(c){this._jsxbG=c;};s.resetCacheData=function(e){var
lb=(e||this.getServer()).getCache();lb.clearById(this.getXSLId());lb.clearById(this.getXMLId());};s.resetXmlCacheData=function(m){var
na=(m||this.getServer()).getCache();na.clearById(this.getXMLId());};s.resetXslCacheData=function(m){var
Cb=(m||this.getServer()).getCache();Cb.clearById(this.getXSLId());};s.clearXmlData=function(){((this.getServer()).getCache()).setDocument(this.getXMLId(),x.newDocument());};s.getShareResources=function(){return this.jsxshare==null?0:this.jsxshare;};s.setShareResources=function(j){this.jsxshare=j;return this;};s.getXML=function(){var
zb=this.getServer();if(zb==null)return x.newDocument();var
bb=zb.getCache();var
sa=this.getXMLId();var
ga=bb.getDocument(sa);if(ga==null){var
Ua=this.getXMLString();if(!jsx3.util.strEmpty(Ua)){ga=new
t();ga.loadXML(Ua);}else{var
V=this.getXMLURL();if(!jsx3.util.strEmpty(V)){V=(this.getUriResolver()).resolveURI(V);if(this.jsxxmlasync){ga=bb.getOrOpenAsync(V,sa);}else ga=(new
t()).load(V);}else ga=x.newDocument();}if(ga.hasError()){xb.error(jsx3._msg(ub.j,this,ga.getError()));return ga;}ga=this.setSourceXML(ga,bb);}return ga;};s.setSourceXML=function(d,a){d=this._J(d);if(!a)a=(this.getServer()).getCache();var
M=this.getXMLId();if(a.getDocument(M)!=d)this.yp(a,this.getXMLId(),d);if(this.instanceOf(x)){if(d.getNodeName()==ub.k&&d.getAttribute(ub.l)==ub.m)this.assignIds();this.convertProperties((this.getServer()).getProperties());}return d;};s.yp=function(r,m,f){var
vb=this._jsxqs;if(vb)this.ig(false);r.setDocument(m,f);if(vb)this.ig(true);};s.getXMLId=function(){return this.jsxxmlid||this.getId()+ub.n;};s.setXMLId=function(b){this.jsxxmlid=b;return this;};s.getXMLString=function(){return this.jsxxml;};s.setXMLString=function(f){this.jsxxml=f;return this;};s.getXMLURL=function(){return this.jsxxmlurl;};s.setXMLURL=function(i){this.jsxxmlurl=i;return this;};s.getXmlAsync=function(){return this.jsxxmlasync;};s.setXmlAsync=function(d){this.jsxxmlasync=jsx3.Boolean.valueOf(d);return this;};s.getXmlBind=function(){return this.jsxxmlbind;};s.setXmlBind=function(n){this.jsxxmlbind=jsx3.Boolean.valueOf(n);this.ig(this.jsxxmlbind);return this;};s.onXmlBinding=function(c){var
U=c.target.getDocument(c.subject);this.ig(0,U);if(this.publish)this.publish({subject:ub.o,xml:U});};s.h7=function(o,b){var
la=b.getCache(),X=o.getCache();var
bb=this.getXMLId(),za=this.getXSLId();var
sa=la.getDocument(bb);var
Qa=la.getDocument(za);if(this.getShareResources()!=1)this.resetCacheData(b);if(sa)X.setDocument(bb,sa);if(Qa)X.setDocument(za,Qa);this.ig(false,0,b);this.ig(this.jsxxmlbind,0,o);};jsx3.app.Model.jsxclass.addMethodMixin(ub.p,p.jsxclass,ub.q);s.TC=function(){this.ig(this.jsxxmlbind);};jsx3.app.Model.jsxclass.addMethodMixin(ub.r,p.jsxclass,ub.s);s.lV=function(e){var
sb=e.getServer();this.ig(false,0,sb);if(this.getShareResources()==0)this.resetCacheData(sb);delete this[ub.t];};jsx3.app.Model.jsxclass.addMethodMixin(ub.u,p.jsxclass,ub.v);s.ig=function(e,b,n){if(!n)n=this.getServer();if(n){var
U=n.getCache();var
I=this.getXMLId();var
L=null;if(b){if(!this.jsxxmlbind)L=!b.hasError()&&b.getNamespaceURI()==jsx3.app.Cache.XSDNS&&b.getNodeName()==ub.w;}else L=e;if(L!=null&&Boolean(this._jsxqs)!=L){if(L){U.subscribe(I,this,ub.x);}else U.unsubscribe(I,this);this._jsxqs=L;}}};s.getXSL=function(){return this.qj(p.DEFAULTSTYLESHEET);};s.qj=function(n,b){var
va=jsx3.xml.XslDocument;var
ga=this.getXSLId();var
Na=(this.getServer()).getCache();var
yb=Na.getDocument(ga);if(yb==null){if(this.getXSLString()!=null){yb=(new
va()).loadXML(this.getXSLString());}else if(this.getXSLURL()!=null){yb=(new
va()).load((this.getUriResolver()).resolveURI(this.getXSLURL()));}else{var
ab=jsx3.getSharedCache();if(b){yb=ab.getDocument(n);if(!yb){yb=typeof b==ub.y?(new
va()).loadXML(b):b;ab.setDocument(n,yb);}}else yb=ab.getOrOpenDocument(n,null,va.jsxclass);}if(yb.hasError()){xb.error(jsx3._msg(ub.z,this,yb.getError()));return yb;}Na.setDocument(ga,yb);}return yb;};s.getXSLId=function(){var
Ja=null;Ja=this.jsxxslid;return Ja||this.getId()+ub.A;};s.setXSLId=function(d){this.jsxxslid=d;return this;};s.getXSLString=function(){return this.jsxxsl;};s.setXSLString=function(b){this.jsxxsl=b;return this;};s.getXSLURL=function(){return this.jsxxslurl;};s.setXSLURL=function(g){this.jsxxslurl=g;return this;};s.getXMLTransformers=function(){return this.jsxxmltrans!=null?this.jsxxmltrans.split(ub.B):[];};s.setXMLTransformers=function(a){this.jsxxmltrans=a!=null?a instanceof Array?a.join(ub.C):a:null;};s._J=function(j){var
y=this.getXMLTransformers();if(y.length>0){var
Qa=this.getServer();var
Ba=Qa.getCache();var
Eb=j;for(var
bb=0;bb<y.length;bb++){var
sa=y[bb];var
Gb=Ba.getDocument(sa);if(Gb==null){sa=(this.getUriResolver()).resolveURI(sa);Gb=Ba.openDocument(sa,sa);}if(Gb==null||Gb.hasError()){xb.warn(jsx3._msg(ub.D,sa,this,Gb.getError()));Ba.clearById(sa);continue;}var
va=new
jsx3.xml.Template(Gb);va.setParams(this.getXSLParams());Eb=va.transformToObject(Eb);if(va.hasError())throw new
jsx3.Exception(jsx3._msg(ub.E,sa,this,va.getError()));if(Eb.hasError())throw new
jsx3.Exception(jsx3._msg(ub.E,sa,this,Eb.getError()));}return Eb;}else return j;};p.getVersion=function(){return ub.F;};});jsx3.xml.Cacheable.prototype.resetData=jsx3.xml.Cacheable.prototype.clearXmlData;
