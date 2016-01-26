(jsx3.$O(this)).extend({_getDataMatrix:function(){var
kb=(this.getPalette()).getUIObject();return kb?kb.getDataMatrix():null;},onJsxPropertyChange:function(n){var
v=jsx3.ide.getActiveEditor();var
fb=this._getDataMatrix();fb.redrawCell(n.prop,fb.getChild("jsxproperties_value"));},onPropertyEdit:function(o,e,p){var
Va=jsx3.ide.getSelected();var
Ba=jsx3.ide.getSelected();var
v=o.getRecord(e);if(typeof (jsx3.ide.PROJECT.getServer()).getDynamicProperty(p)!="undefined"){this.fH(this._getDataMatrix(),jsx3.ide.getSelected(),e,p);this._updatePropertyNode(o,Va,e);o.redrawCell(e,o.getChild("jsxproperties_value"));return false;}else{if(typeof p=="string")p=jsx3.util.strTrim(p);return this._editObjectProperty(v,Ba,e,p);}},_editObjectProperty:function(b,m,p,q){var
ca=q!=null?q.toString():"";if(b.disallow){var
Wa=b.disallow.indexOf("/")==0?jsx3.eval(b.disallow):new
RegExp(b.disallow);if(ca.match(Wa)){(this.getLog()).error("input '"+jsx3.util.strEscapeHTML(ca)+"' for property "+p+" is invalid, must not match "+Wa);return false;}}if(b.validate){var
Wa=b.validate.indexOf("/")==0?jsx3.eval(b.validate):new
RegExp(b.validate);if(!ca.match(Wa)){(this.getLog()).error("input '"+jsx3.util.strEscapeHTML(ca)+"' for property "+p+" is invalid, must match "+Wa);return false;}}if(b["eval"]=="1")try{q=this.eval(q);}catch(Kb){(this.getLog()).error("error evaluating expression '"+(q!=null?jsx3.util.strEscapeHTML(q):null)+"': "+jsx3.NativeError.wrap(Kb));return false;}var
Cb=b["jsxexecute"];if(b.validatehtml)if(jsx3.util.strEndsWith((jsx3.app.Browser.getLocation()).getPath(),".xhtml")){var
vb=(new
jsx3.xml.Document()).loadXML("<jsxtext>"+q+"</jsxtext>");if(vb.hasError()){(this.getLog()).error("When working in XHTML mode, the "+b.jsxid+" property must be well-formed XML. ("+vb.getError()+")");return false;}}for(var
Da=0;Da<m.length;Da++){var
M=m[Da];if(Cb!=null){try{this.eval(Cb,{vntValue:q,objJSX:M});}catch(Kb){(this.getLog()).error("error evaluating expression '"+Cb+"': "+jsx3.NativeError.wrap(Kb));return false;}}else{M[p]=q;M.repaint();}}if(b.domchanged)this.publish({subject:"domChanged",objs:m});this.publish({subject:"propChanged",objs:m,prop:p});for(var
Da=0;Da<m.length;Da++)if(m[Da].getPersistence()!=jsx3.app.Model.PERSISTNONE){(jsx3.ide.getEditorForJSX(m[Da])).setDirty(true);break;}return true;},onPropertyBeforeEdit:function(s,m,a){if(m!=s.getChild(1))return false;var
D=s.getRecordNode(a);var
la=D.getAttribute("jsxmask");if(!la)return false;if(D.getAttribute("uneditable")=="1")return false;if(D.getAttribute("jsxdynamic")!=null)return false;var
M=m.getChild(la)||m.getChild("jsxtextbox");if(M instanceof jsx3.gui.Select){M.clearXmlData();for(var
Ib=D.selectNodeIterator("enum");Ib.hasNext();){var
y=Ib.next();var
_=y.getAttribute("jsxvalue");var
T=y.getAttribute("jsxtext");M.insertRecord({jsxid:_,jsxtext:T});}M.redrawRecord(M.getValue());}return {objMASK:M};},onPropertyMenu:function(i,o){i.setSourceXML(((this.getResource("contextmenu")).getData()).cloneDocument());var
x=this._getDataMatrix();var
db=x.getRecordNode(o);if(db.getAttribute("uneditable")=="1")return false;if(db.selectSingleNode("record")!=null)return false;i.enableItem("jsxdpclear",db.getAttribute("nullable")!=="0");var
Ua=db.getAttribute("jsxtype");if(!Ua)Ua=o;var
qb=this._getPropertyIdsForType(Ua);var
na={};for(var
T=0;T<qb.length;T++){var
Bb=qb[T];var
hb=Bb.split(".");var
ha=na;for(var
Ab=0;Ab<hb.length-1;Ab++){var
u=hb[Ab];if(typeof ha[u]=="object"){}else if(typeof ha[u]=="number"){ha[u]={__leaf:1};}else ha[u]={};ha=ha[hb[Ab]];}var
_a=hb[hb.length-1];if(!ha[_a])ha[_a]=1;else ha[_a].__leaf=1;}var
Ra=jsx3.xml.CDF.newDocument();this.aD(Ra,Ra,na,"");for(var
T=Ra.getChildIterator();T.hasNext();)this.J6(T.next());if(Ra.getFirstChild())(Ra.getFirstChild()).setAttribute("jsxdivider","1");var
G=(i.getXML()).getRootNode();for(var
T=(Ra.getChildNodes()).iterator();T.hasNext();)G.appendChild(T.next());var
za=jsx3.ide.getSelected();var
ya=true;for(var
T=0;T<za.length&&ya;T++)ya=ya&&za[T].getDynamicProperty(o)!=null;i.enableItem("jsxdpconvert",ya);return true;},aD:function(r,p,e,l){for(var ma in e){if(ma=="__leaf")continue;var
hb=l?l+"."+ma:ma;var
B=r.createNode(jsx3.xml.Entity.TYPEELEMENT,"record");B.setAttribute("jsxid",hb);B.setAttribute("jsxtext",ma);if(typeof e[ma]=="object"){if(e[ma].__leaf){var
nb=r.createNode(jsx3.xml.Entity.TYPEELEMENT,"record");nb.setAttribute("jsxid",hb);nb.setAttribute("jsxtext",ma);p.appendChild(nb);}this.aD(r,B,e[ma],hb);}p.appendChild(B);}},J6:function(h){var
Xa=false;do{Xa=false;var
M=h.getChildNodes();if(M.size()==1){var
t=M.get(0);var
xb=t.getChildNodes();if(xb.size()>0){Xa=true;for(var
U=0;U<xb.size();U++)h.appendChild(xb.get(U));h.setAttribute("jsxtext",h.getAttribute("jsxtext")+"."+t.getAttribute("jsxtext"));h.removeChild(t);}}}while(Xa);M=h.getChildNodes();for(var
U=0;U<M.size();U++)this.J6(M.get(U));},onPropertyMenuExecute:function(n,j){var
Y=jsx3.ide.getSelected();var
Db=this._getDataMatrix();var
xa=n.getContextRecordId();var
L=Db.getRecordNode(xa);var
sa;if(j=="jsxdpclear"){for(var
Ea=0;Ea<Y.length;Ea++)Y[Ea].setDynamicProperty(xa);this._editObjectProperty(Db.getRecord(xa),Y,xa,null);}else if(j=="jsxdpconvert"){for(var
Ea=0;Ea<Y.length;Ea++)Y[Ea].setDynamicProperty(xa);this.publish({subject:"propChanged",objs:Y,prop:xa,lookup:true});}else if((sa=L.getAttribute("lookupid"))!=null){for(var
Ea=0;Ea<Y.length;Ea++)Y[Ea].setDynamicProperty(sa);var
Ja=L.getAttribute("eval")==="0"?j:this.eval(j);this._editObjectProperty(Db.getRecord(xa),Y,xa,Ja);}else this.fH(Db,Y,xa,j);this._updatePropertyNode(null,Y,null,L);Db.redrawRecord(xa,jsx3.xml.CDF.UPDATE,Db.getChild("jsxproperties_value"));},fH:function(n,b,k,a){for(var
Z=0;Z<b.length;Z++)b[Z].setDynamicProperty(k,a);this._editObjectProperty(n.getRecord(k),b,k,(b[0].getServer()).getDynamicProperty(a));},onPropertiesChange:function(){var
eb=this._getDataMatrix();if(eb==null)return;var
da=jsx3.ide.getSelected();var
tb=false;if(da.length>0){var
Mb=this._getMergedPropertiesDoc(da);if(Mb!=null){(jsx3.IDE.getCache()).setDocument(eb.getXMLId(),Mb);tb=true;}}else (jsx3.IDE.getCache()).setDocument(eb.getXMLId(),jsx3.xml.CDF.newDocument());if(tb){eb.setDisplay(jsx3.gui.Block.DISPLAYBLOCK,true);eb.repaintData();}else eb.setDisplay(jsx3.gui.Block.DISPLAYNONE,true);},_getMergedPropertiesDoc:function(f){var
ka=new
jsx3.util.List();var
R=new
Array(f.length);for(var
B=0;B<f.length;B++){if(!f[B])return null;R[B]=this._getClassPropertiesDoc(f[B]);if(!R[B])return null;if(ka.indexOf(R[B])<0)ka.add(R[B]);}var
w=null;if(ka.size()==1){var
Ia=R[0];for(var
B=Ia.selectNodeIterator("//record[not(@group)]");B.hasNext();)this._updatePropertyNode(null,f,null,B.next());return Ia;}else{for(var
B=0;B<f.length;B++){var
A=f[B];var
Ia=R[B];if(B==0){w=new
jsx3.util.List((Ia.selectNodes("//record[not(@group)]")).toArray());}else for(var
O=w.iterator();O.hasNext();){var
Da=O.next();var
I=Da.getAttribute("jsxid");if(Ia.selectSingleNode("//record[not(@group) and @jsxid='"+I+"']")==null)O.remove();}}var
Ia=(new
jsx3.xml.Document()).loadXML('<data jsxid="jsxroot"/>');for(var
O=w.iterator();O.hasNext();)Ia.appendChild((O.next()).cloneNode(true));w=Ia.selectNodes("//record");}for(var
B=w.iterator();B.hasNext();)this._updatePropertyNode(null,f,null,B.next());return Ia;},_updatePropertyNode:function(d,s,g,c){if(c==null)c=d.getRecordNode(g);else if(g==null)g=c.getAttribute("jsxid");var
da=c.getAttribute("getter");g=c.getAttribute("jsxid");s=jsx3.$A(s);var
Gb=null,oa=null,ia=null;for(var
w=0;w<s.length;w++){var
Fa=s[w];var
M=null,E=null;E=Fa.getDynamicProperty(g);if(da){M=Fa[da]();}else if(Fa[g]!=null)M=Fa[g];if(w==0){Gb=M;oa=E;}else if(Gb!==M||oa!==E){ia=1;Gb=(oa=null);break;}}c.setAttribute("value",Gb);c.setAttribute("jsxdynamic",oa);c.setAttribute("jsxmulti",ia);},_getClassPropertiesDoc:function(o){var
F=jsx3.IDE.getCache();var
nb="PROPERTIES_TEMPLATE_"+(o.getClass()).getName()+(o._subPropId?o._subPropId():"");var
wb=F.getDocument(nb);if(wb!=null)return wb;var
Mb=jsx3.ide.getTemplateForObject("prop",o);if(Mb==null)return null;var
G=new
jsx3.net.URI(Mb.getSourceURL());Mb.convertProperties(jsx3.IDE.getProperties());var
ra=null;var
Jb=0;do{ra=Mb.selectNodes("//record[@include]");for(var
oa=ra.iterator();oa.hasNext();){var
Ma=oa.next();var
ka=Ma.getAttribute("absinclude");if(ka==null)ka=(G.resolve(Ma.getAttribute("include"))).toString();var
K=Ma.getAttribute("path");var
E=Ma.getAttribute("group");var
sa=Ma.getAttribute("children");var
t="PROPERTIES_MASTER_"+ka;var
Hb=F.getDocument(t);if(Hb==null){Hb=F.openDocument(ka,t);if(Hb.hasError()){(this.getLog()).error("Error parsing properties file '"+ka+"' for class "+o.getClass()+": "+Hb.getError());return null;}}if(!K&&E)K="/data/record[@jsxid = '"+E+"']"+(sa?"/*":"");if(!K)K="/data/*";var
pb=null;for(var
ia=Hb.selectNodeIterator(K);ia.hasNext();){var
V=(ia.next()).cloneNode(true);this._fixPropsIncludeAttr(V,ka);if(pb==null)pb=V;var
L=(Ma.getParent()).insertBefore(V,Ma);if(L.getNative()==null)(this.getLog()).error("insert failed");}if(pb!=null)for(var
ia=Ma.selectNodeIterator("./record");ia.hasNext();)pb.appendChild((ia.next()).cloneNode(true));var
L=(Ma.getParent()).removeChild(Ma);if(L.getNative()==null)(this.getLog()).error("remove failed");}}while(ra.size()>0&&Jb++
<6);for(var
oa=Mb.selectNodeIterator("//enum");oa.hasNext();){var
Ma=oa.next();var
v=Ma.getAttribute("jsxid");if(Ma.getAttribute("eval")!=="0")v=jsx3.eval(v);Ma.setAttribute("jsxvalue",v);}for(var
oa=Mb.selectNodeIterator("//record[record]");oa.hasNext();){var
Ma=oa.next();Ma.setAttribute("jsxopen","1");Ma.setAttribute("jsxunselectable","1");}F.setDocument(nb,Mb);return Mb;},_fixPropsIncludeAttr:function(a,j){var
lb=new
jsx3.net.URI(j);var
Ra=jsx3.util.List.wrap([a]);while(Ra.size()>0){var
Da=Ra.removeAt(0);var
F=Da.getAttribute("include");if(F)Da.setAttribute("absinclude",(lb.resolve(F)).toString());Ra.addAll(Da.selectNodes("record"));}},Q1:null,LI:null,constructPropertyTypeIndex:function(){var
vb=this.Q1={};var
ta=[jsx3.getSystemCache(),jsx3.getSharedCache(),(jsx3.ide.PROJECT.getServer()).getCache()];for(var
sa=0;sa<ta.length;sa++){var
pa=ta[sa];var
fa=pa.keys();for(var
Ib=0;Ib<fa.length;Ib++){var
ca=pa.getDocument(fa[Ib]);if(ca!=null){if(ca.hasError()){(this.getLog()).warn("XML property file has error: "+ca.getSourceURL());continue;}var
na=ca;if(ca.getAttribute("jsxnamespace")=="propsbundle")na=ca.selectSingleNode("//locale[not(@key)]");if(na)for(var
Sa=na.getChildIterator();Sa.hasNext();){var
I=Sa.next();if(I.getNodeName()=="record"){var
da=I.getAttribute("type");if(da){var
ja=I.getAttribute("jsxid");vb[ja]=da;}}}}}}var
Xa=this.LI={_empty:[]};for(var rb in vb){var
da=vb[rb];if(Xa[da]==null)Xa[da]=[];Xa[da].push(rb);}},_getPropertyIdsForType:function(b){return this.LI[b]||this.LI["_empty"];},openColorPickerMask:function(l){var
ub={a:"colorpicker",b:"colorPicker"};l.suspendEditSession();((this.getResource(ub.a)).load()).when((jsx3.$F(function(){var
M=this.loadRsrcComponent(ub.a,(this.getServer()).getRootBlock(),false);(M.getDescendantOfName(ub.b)).setValue(l.getMaskValue());M.onColorPick((M.getDescendantOfName(ub.b)).getRGB());M.setDisplay(jsx3.gui.Block.DISPLAYBLOCK,true);M._jsxmask=l;(M.getParent()).paintChild(M);M.focus();})).bind(this));},_colorPickerMaskChoose:function(e,r){var
Hb=r._jsxmask;var
tb=(r.getDescendantOfName("colorPicker")).getRGB();var
N="#"+(((16777216+tb).toString(16)).substring(1)).toUpperCase();Hb.setMaskValue(N);r.doClose();(Hb.getDescendantOfName("btnCP")).focus();Hb.resumeEditSession();Hb.commitEditMask(e,true);},_colorPickerMaskCancel:function(r,e){var
Qa=e._jsxmask;e.doClose();(Qa.getDescendantOfName("btnCP")).focus();Qa.resumeEditSession();},openCdfMask:function(g){var
ub={a:"jsx3.ide.palette.properties",b:"columneditor/columneditor.xml",c:"Error with cdf document. ",d:"execBtn",e:"1;",f:"cancelBtn",g:"ibUp",h:"ibDown"};var
ob=jsx3.ide.getPlugIn(ub.a);var
ia=(jsx3.IDE.getRootBlock()).loadAndCache(ub.b,false,null,ob);var
Pa=(ia.getDescendantsOfType(jsx3.gui.Matrix))[0];var
ca=g.getMaskValue();var
ba=new
jsx3.xml.CDF.Document.newDocument();if(!jsx3.util.strEmpty(ca)){ba.loadXML(ca);if(ba.hasError()){(this.getLog()).error(ub.c+(ba.getError()).description);ba=new
jsx3.xml.CDF.Document.newDocument();}}((Pa.getServer()).getCache()).setDocument(Pa.getXMLId(),ba);var
W=ia.getDescendantOfName(ub.d);W.setEvent(ub.e,jsx3.gui.Interactive.EXECUTE);W.subscribe(jsx3.gui.Interactive.EXECUTE,this,function(h){this.gz(h.context.objEVENT,W.getAncestorOfName(ia.getName()));});var
cb=ia.getDescendantOfName(ub.f);cb.setEvent(ub.e,jsx3.gui.Interactive.EXECUTE);cb.subscribe(jsx3.gui.Interactive.EXECUTE,this,function(s){this.Fu(s.context.objEVENT,W.getAncestorOfName(ia.getName()));});var
ma=ia.getDescendantOfName(ub.g);ma.setEvent(ub.e,jsx3.gui.Interactive.EXECUTE);ma.subscribe(jsx3.gui.Interactive.EXECUTE,this,function(e){var
Q=e.target;if(Q.emGetSession())this.Rq(Q.getAncestorOfType(jsx3.gui.Matrix),(Q.emGetSession()).recordId,true);});var
Hb=ia.getDescendantOfName(ub.h);Hb.setEvent(ub.e,jsx3.gui.Interactive.EXECUTE);Hb.subscribe(jsx3.gui.Interactive.EXECUTE,this,function(c){var
yb=c.target;if(yb.emGetSession())this.Rq(yb.getAncestorOfType(jsx3.gui.Matrix),(yb.emGetSession()).recordId,false);});g.suspendEditSession();ia._jsxmask=g;(ia.getParent()).paintChild(ia);ia.focus();},gz:function(q,b){var
Va=b._jsxmask;var
jb=(b.getDescendantsOfType(jsx3.gui.Matrix))[0];var
ga=(jb.getXML()).getXML();Va.setMaskValue(ga);b.doClose();(Va.getDescendantOfName("btnTable")).focus();Va.resumeEditSession();Va.commitEditMask(q,true);},Fu:function(n,e){var
Qa=e._jsxmask;e.doClose();(Qa.getDescendantOfName("btnTable")).focus();Qa.resumeEditSession();},Rq:function(r,a,q){if(!a)return;var
sb=r.getRecordNode(a);if(sb){var
cb=sb.getParent();if(q){var
vb=sb.getPreviousSibling();if(vb){cb.insertBefore(sb,vb);r.repaintData();}}else{var
Za=sb.getNextSibling();if(Za){cb.insertBefore(Za,sb);r.repaintData();}}}}});
