(jsx3.$O(this)).extend({_resolvers:{},_getPrototypeLibraries:function(){var
ub={a:"jsxapp:/images/icon_7.gif",b:"components",c:"Components",d:"1",e:"system",f:"System",g:"a",h:"prototypes",i:"addins",j:"Addins",k:"b",l:"addins/",m:"folder",n:"jsxid",o:"user",p:"User",q:"c",r:"other",s:"Other",t:"d",u:"other/"};var
B=this.resolveURI(ub.a);var
v=jsx3.xml.CDF.Document.newDocument();var
Va=v.insertRecord({jsxid:ub.b,jsxtext:ub.c,jsxopen:ub.d});var
kb=null;this._resolvers={};kb=v.insertRecord({jsxid:ub.e,jsxtext:ub.f,jsxopen:ub.d,jsxunselectable:ub.d,jsximg:B,sorton:ub.g},ub.b);this._doPLDirectoryRead(v,kb,jsx3.ide.getBuilderRelativeFile(ub.h),this.getServer());this._resolvers[ub.e]=this.getServer();var
Bb=jsx3.System.getAddins();kb=v.insertRecord({jsxid:ub.i,jsxtext:ub.j,jsxopen:ub.d,jsxunselectable:ub.d,jsximg:B,sorton:ub.k},ub.b);(jsx3.$A(Bb)).each((jsx3.$F(function(j){var
A=jsx3.ide.getSystemRelativeFile(j.resolveURI(jsx3.app.AddIn.PROTOTYPES_DIR));if(A.isDirectory()){var
wb=v.insertRecord({jsxid:ub.l+j.getKey(),jsxtext:j.getName(),type:ub.m,jsxunselectable:ub.d,syspath:(jsx3.ide.getSystemDirFile()).relativePathTo(A),jsximg:B,jsxlazy:ub.d},ub.i);this._resolvers[wb.getAttribute(ub.n)]=j;}})).bind(this));if((kb.getChildNodes()).size()==0)(kb.getParent()).removeChild(kb);kb=v.insertRecord({jsxid:ub.o,jsxtext:ub.p,jsxopen:ub.d,jsxunselectable:ub.d,jsximg:B,sorton:ub.q},ub.b);this._doPLDirectoryRead(v,kb,jsx3.ide.getHomeRelativeFile(ub.h),jsx3.net.URIResolver.USER);this._resolvers[ub.o]=jsx3.net.URIResolver.USER;if((kb.getChildNodes()).size()==0)(kb.getParent()).removeChild(kb);if(this._otherFolders){kb=v.insertRecord({jsxid:ub.r,jsxtext:ub.s,type:ub.r,jsxopen:ub.d,jsxunselectable:ub.d,jsximg:B,sorton:ub.t},ub.b);var
z=0;this._otherFolders.each((jsx3.$F(function(o){var
Ya=o.path,ea=o.resolver,ta=o.label;var
F=jsx3.ide.getSystemRelativeFile(ea.resolveURI(Ya));if(F.isDirectory()){var
eb=v.insertRecord({jsxid:ub.u+
++z,jsxtext:ta||F.getName(),jsxunselectable:ub.d,syspath:(jsx3.ide.getSystemDirFile()).relativePathTo(F),jsximg:B,jsxlazy:ub.d},ub.r);this._resolvers[eb.getAttribute(ub.n)]=ea;}})).bind(this));}return v;},_doPLDirectoryRead:function(d,l,i,n){var
t=jsx3.ide.getSystemDirFile();var
Ca=this.resolveURI("jsxapp:/images/icon_46.gif");if(i.isDirectory()){var
tb=i.listFiles();for(var
zb=0;zb<tb.length;zb++){var
nb=tb[zb];if(jsx3.ide.isFileToIgnore(nb))continue;var
Lb=nb.getName();if(nb.isDirectory()){d.insertRecord({jsxid:l.getAttribute("jsxid")+"/"+Lb,jsxtext:Lb,type:"folder",jsxlazy:"1",jsxunselectable:"1",jsximg:l.getAttribute("jsximg"),sorton:"a_"+(Lb.charAt(0)=="~"?"z"+Lb:Lb),syspath:(jsx3.ide.getSystemDirFile()).relativePathTo(nb)},l.getAttribute("jsxid"));}else if(nb.getExtension()=="xml"){var
oa=d.insertRecord({jsxid:l.getAttribute("jsxid")+"/"+Lb,jsxtext:Lb,type:"component",path:n!=null&&!(this.getServer()).equals(n)?n.relativizeURI(t.relativePathTo(nb)):jsx3.ide.SERVER.relativizeURI(t.relativePathTo(nb),true),jsximg:Ca,sorton:"b_"+Lb,syspath:(jsx3.ide.getSystemDirFile()).relativePathTo(nb)},l.getAttribute("jsxid"));this.HF(oa,nb,n);}}}else return false;return true;},doPLDirData:function(o,n){var
Mb=o.getXML();var
L=jsx3.ide.getSystemRelativeFile(n.getAttribute("syspath"));var
va=null;var
U=n;while(U!=null&&va==null){va=this._resolvers[U.getAttribute("jsxid")];U=U.getParent();}this._doPLDirectoryRead(Mb,n,L,va);return {bCLEAR:true};},lD:new
RegExp('<(?:meta name=")?name(?:")?>(<!\\[CDATA\\[)?(.*?)(\\]\\]>)?</'),vU:new
RegExp('<(?:meta name=")?icon(?:")?>(<!\\[CDATA\\[)?(.*?)(\\]\\]>)?</'),Au:new
RegExp('<(?:meta name=")?description(?:")?>(<!\\[CDATA\\[)?([\\s\\S]*?)(\\]\\]>)?</'),Pq:new
RegExp("<object type=['\"]([\\.\\w]+)['\"]"),HF:function(e,g,j){var
_=null,mb=null,Nb="";var
Ja=g.read();var
za=this.lD.exec(Ja);if(za&&za[0])_=za[2];var
x=this.vU.exec(Ja);if(x&&x[0])mb=x[2];var
Lb=this.Au.exec(Ja);if(Lb&&Lb[0])Nb=Lb[2].replace(/\s+/g," ");var
rb=this.Pq.exec(Ja);if(rb&&rb[0])Nb="["+rb[1]+"] "+Nb;if(_){e.setAttribute("jsxtext",_);e.setAttribute("sorton","b_"+_);}if(mb)e.setAttribute("jsximg",j?j.resolveURI(mb):mb);if(Nb)e.setAttribute("jsxtip",Nb);},reloadPrototypeLibraries:function(k){var
ua=this._getPrototypeLibraries();k.setSourceXML(ua);this.publish({subject:"reloaded"});}});
