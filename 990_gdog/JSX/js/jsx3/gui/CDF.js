/*
 * Copyright (c) 2001-2009, TIBCO Software Inc.
 * Use, modification, and distribution subject to terms of license.
 */
jsx3.require("jsx3.gui.Block","jsx3.xml.Cacheable");jsx3.Class.defineClass("jsx3.gui.CDF",jsx3.gui.Block,[jsx3.xml.CDF,jsx3.xml.Cacheable],function(m,p){var
ub={a:"Component: ",b:"; XPath: //record[@jsxid='",c:"']/@",d:"; value to be shown (read): ",e:"",f:"jsx3.gui.Form",g:"jsx3.gui.RadioButton"};var
O=jsx3.util.Logger.getLogger(m.jsxclass.getName());p.init=function(i){this.jsxsuper(i);};p.redrawRecord=function(e,c){this.read(null,e);};p.Sw=function(a){var
L=this.jsxcdfid;if(jsx3.util.strEmpty(L))this.findAncestor(function(k){if(!jsx3.util.strEmpty(k.jsxcdfid)){L=k.jsxcdfid;return true;}},false);var
db=[];m.Pw(this,L,db,a);return db;};m.Pw=function(g,q,r,c){var
oa=g.getChildren();var
Qa=q;for(var
bb=0;bb<oa.length;bb++){var
qa=oa[bb];if(qa instanceof m&&!(jsx3.util.strEmpty(qa.jsxxmlid)&&jsx3.util.strEmpty(qa.jsxxmlurl)&&jsx3.util.strEmpty(qa.jsxxml)))continue;if(!jsx3.util.strEmpty(qa.jsxcdfid))q=qa.jsxcdfid;if(!jsx3.util.strEmpty(qa.jsxcdfattribute)&&(jsx3.util.strEmpty(q)||!jsx3.util.strEmpty(q)&&(!c||c==q))){O.trace(ub.a+qa+ub.b+q+ub.c+qa.jsxcdfattribute);r.push({target:qa,jsxcdfid:q,jsxcdfattribute:qa.jsxcdfattribute});}m.Pw(qa,q,r,c);q=Qa;}};p.paint=function(){this.ig(0,this.getXML());return this.jsxsuper();};p.repaint=function(){this.read(false);return this.jsxsuper();};p.onXmlBinding=function(j){this.jsxsupermix(j);this.read();};p.onAfterPaint=function(i){this.read(false);};p.read=function(f,k){if(f!==false)f=true;var
C=this.Sw(k);var
qa=this;if(jsx3.util.strEmpty(this.jsxxmlid)&&jsx3.util.strEmpty(this.jsxxmlurl)&&jsx3.util.strEmpty(this.jsxxml))qa=this.findAncestor(function(e){return !(jsx3.util.strEmpty(e.jsxxmlid)&&jsx3.util.strEmpty(e.jsxxmlurl)&&jsx3.util.strEmpty(e.jsxxml));},false);for(var
ha=0;ha<C.length;ha++){var
ja=qa.getRecordNode(C[ha].jsxcdfid);var
sa=C[ha].target;var
Na;Na=ja instanceof jsx3.xml.Entity?ja.getAttribute(C[ha].jsxcdfattribute):null;O.trace(ub.a+sa+ub.d+Na+ub.e);this.setFieldValue(sa,Na,f);}};p.write=function(){var
Ua=this.Sw();for(var
F=0;F<Ua.length;F++){var
Aa=this.getRecordNode(Ua[F].jsxcdfid);if(Aa){var
wa=Ua[F].target;var
jb=this.getFieldValue(wa);if(jb==null)Aa.removeAttribute(Ua[F].jsxcdfattribute);else if(Aa.getAttribute(Ua[F].jsxcdfattribute)!=jb)Aa.setAttribute(Ua[F].jsxcdfattribute,jb);}}};p.getFieldValue=function(s){if(!s.instanceOf(ub.f)){return s.getText();}else if(jsx3.gui.RadioButton&&s.instanceOf(ub.g)){return s.getGroupValue();}else return s.getValue();};p.setFieldValue=function(j,o,d){if(!j.instanceOf(ub.f)){j.setText(o||ub.e,d);}else if(jsx3.gui.RadioButton&&j.instanceOf(ub.g)){j.setGroupValue(o);}else j.setValue(o);};p.setCDFId=function(k){this.jsxcdfid=k;this.read();};p.getCDFId=function(){return this.jsxcdfid;};});
