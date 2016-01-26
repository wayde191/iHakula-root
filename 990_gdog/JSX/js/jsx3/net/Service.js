/*
 * Copyright (c) 2001-2009, TIBCO Software Inc.
 * Use, modification, and distribution subject to terms of license.
 */
jsx3.Class.defineClass("jsx3.net.Service",null,[jsx3.util.EventDispatcher],function(c,g){var
ub={A:"1.00",Aa:"SOAP-ENV",Ab:"I",Ac:"1.0",Ad:"jsx3.CACHE",Ae:'").setValue("',Af:"\n",B:"positiveInteger",Ba:"http://schemas.xmlsoap.org/soap/envelope/",Bb:"stubsrc",Bc:"headers/record",Bd:'.getDocument("',Be:'.setDocument("',Bf:"The XSLT could not be compiled from the CXF source document:\n\t",C:"100",Ca:"SOAP-ENC",Cb:"namespace",Cc:"name",Cd:'").selectSingleNode("',Ce:'",jsx3.xml.CDF.Document.newDocument());',Cf:"compile",D:"negativeInteger",Da:"http://schemas.xmlsoap.org/soap/encoding/",Db:"The server namespace referenced by this jsx3.net.Service instance could not be resolved. Please validate that the namespace is correct: ",Dc:"value",Dd:'").getValue();',De:'this.CDFCONTEXT.context.createNode(jsx3.xml.Entity.TYPEELEMENT,"record");',Df:'<xsl:template match="/">',E:"-30",Ea:"xsi",Eb:"jsx3.IDE",Ec:"Invalid method. setTimeouts() no longer valid. Use setTimeout() instead.",Ed:"The map has a rule that references an invalid path to a node in the XML cache document, ",Ee:"jsxid",Ef:"@",F:"nonPositiveInteger",Fa:"http://www.w3.org/2001/XMLSchema-instance",Fb:"When using the XML Mapping Utility, you must have at lease one GUI component open for edit within GI Builder. Otherwise, there is no server instance to to use as the server context. For now, the IDE context will be used.",Fc:"timeout",Fd:": ",Fe:'this.CDFCONTEXT.context.setAttribute("',Ff:'<xsl:template match="*|@*" mode="x',G:"-40",Ga:"xsd",Gb:"stubpath",Gc:"//record[@jsxskip]",Gd:"The map has a rule that references an invalid XML document in the cache: ",Ge:'","',Gf:'">',H:"nonNegativeInteger",Ha:"http://www.w3.org/2001/XMLSchema",Hb:"O",Hc:"jsxskip",Hd:"CDF Document",He:"*[name()='record' and (record or mappings or (@xpointer and not(@xpointer='')))]",Hf:"mappings/record[@name='CDF Document' or @name='CDF Record' or @name='CDF Attribute']",I:"-10",Ia:"xml",Ib:"The URL for the rules file does not reference a valid CXF document. Please make sure that the URL is correct (",Ic:"Creating the request message for the operation, '",Id:"Map to CDF Document",Ie:"*[local-name()='",If:'<data jsxid="jsxroot">',J:"duration",Ja:"http://www.w3.org/XML/1998/namespace",Jb:") and that it returns a valid document:\n\t",Jc:"', using the rules file located at, '",Jd:'");',Je:"record[@jsxtext='",Jf:"</data>",K:"1696-09-01T00:00:00",Ka:"http://xsd.tns.tibco.com/gi/json/2007/",Kb:"jsxrulesxml",Kc:"/",Kd:"CDF Record",Ke:"The call to the operation, '",Kf:'<record jsxid="{generate-id()}">',L:"dateTime",La:"onSuccess",Lb:"//record[@opname='",Lc:/^([^:]*)(:)/,Ld:"Map to CDF Record",Le:"', hosted at '",Lf:"</record>",M:"10-25-2004T11:34:01",Ma:"onError",Mb:"']",Mc:"XPath",Md:'this.CDFCONTEXT.records.next().selectNodes("record");',Me:"' just returned with the HTTP Status code, ",Mf:'<xsl:attribute name="',N:"gYear",Na:"onTimeout",Nb:"//record[@type='T']",Nc:"The stub path (typically the path to the SOAP Envelope Body) does not return a valid node (",Nd:"CDF Attribute",Ne:"' has returned an error (HTTP Status Code: '",Nf:'"><xsl:value-of select="."/></xsl:attribute>',O:"2005",Oa:"onInvalid",Ob:"record[@type='",Oc:").",Od:"Map to CDF Attribute",Oe:"').\nDescription: ",Of:'<xsl:apply-templates select="',P:"10-25-2004",Pa:"onProcessRule",Pb:"function",Pc:"The outbound stub URL does not reference a valid document.  Please make sure that the URL is correct (",Pd:'this.CDFCONTEXT.context.getAttribute("',Pe:"The static JSON string did not return a valid JSON object when evaluated. The inbound filter (e.g., doInboundFilter()) as well as the inbound mappings (e.g., doInboundMap()) will not be executed.",Pf:'" mode="x',Q:"gMonthDay",Qa:"onResponse",Qb:"object",Qc:"getServiceMessage",Qd:"Script",Qe:"The static JSON string did not return a valid JSON object when evaluated. The inbound filter (e.g., doInboundFilter()) as well as the inbound mappings (e.g., doInboundMap()) will not be executed.\nDescription:",Qf:'"/>',R:"12-25",Ra:"",Rb:"jsxhttprequest",Rc:"jsx",Rd:"Map to Script",Re:"' did not return a valid response document. The inbound filter (e.g., doInboundFilter()) as well as the inbound mappings (e.g., doInboundMap()) will not be executed.\nDescription: ",Rf:"</xsl:template>",S:"gDay",Sa:"\t:\t",Sb:"//record[@type='W']",Sc:"xmlns:",Sd:"this.eval(",Se:"Executing in Static mode, using service message proxy, '",Sf:"record[not(mappings/record[@name='CDF Record' and @value and not(@value='')])]",T:"25",Ta:"\r\n",Tb:"src",Tc:"mappings/record[@name='CDF Record' and @value and not(@value='')]/@value",Td:");",Te:"'.",U:"gMonth",Ua:"{",Ub:"endpoint",Uc:"//record[@jsxid='",Ud:"???",Ue:"An alternate message exchange pattern was encountered for the mapping rule: one-way. The inbound filter and inbound mappings will NOT be run.",V:"12",Va:",",Vb:"Executing the Outbound Filter.",Vc:"The rule node identified by the jsxid, '",Vd:"restrictions/record[@name='nillable' and @value='true']",Ve:"The Cache document, '",W:"gYearMonth",Wa:"}",Wb:"onbeforesend",Wc:"', cannot be located. Processing will proceed normally with the active rule and will not be handled by the referenced (unresolved) rule.",Wd:"repeat",We:"', is being referenced as a bound CDF document for the operation, '",X:"2004-12",Xa:"The XML document could not be converted to JSON, because it does not belong to the namespace, ",Xb:"Executing the Inbound Filter.",Xc:"type",Xd:"groupref",Xe:"'. However, this document cannot be located.",Y:"base64Binary",Ya:"safename",Yb:"onafterreceive",Yc:"A",Yd:"soaparray",Ye:"mode",Z:"bGJpcmRlYXVAdGliY28uY29t",Za:"array",Zb:"An alternate message exchange pattern was encountered for the mapping rule: one-way. The inbound filter will not be run.",Zc:"jsxtext",Zd:"soaparraytype",Ze:"Executing the Inbound Mappings.",_:"float",_a:"array/literal",_b:"method",_c:":",_d:"Array",_e:"F",a:"Lorem ipsum dolor sit amet consectetuer adipiscing elit In pharetra wisi non dolor Pellentesque a ipsum Nulla laoreet erat a nulla In porta luctus justo Pellentesque arcu odio sollicitudin ac hendrerit non ornare et risus Proin aliquam viverra ligula Aliquam eget lectus eu lorem convallis volutpat Aliquam erat volutpat",aa:"134.52",ab:'"',ac:"POST",ad:"D",ae:"arrayType",af:"This operation uses a compiled XSLT document to transform the server results to CDF.",b:"string",ba:"0.923874",bb:'":[',bc:"jsonp",bd:"ancestor-or-self::record[(@type='I' or @type='O') and @soapuse='encoded' and @soapencstyle='",be:"record[@jsxtext='arrayType']/@ttns",bf:"jsx3.xml.Template",c:"int",ca:"anyURI",cb:"[",cc:"record",cd:"datatype",ce:"record[@jsxtext='arrayType']/@datatype",cf:"The compiled transformation was successful. Adding the CDF to the server's cache.",d:"1000",da:"http://www.generalinterface.org/",db:"literal",dc:"tns",dd:"simple",de:"./*",df:".//record/mappings/record[@name='CDF Document']",e:"integer",ea:"NMTOKEN",eb:"]",ec:"Running in static mode. Using sample response document at '",ed:/[^:]*[:]?/,ee:"restrictions/record[@name!='minoccur' and @name!='maxoccur']",ef:"The CDF document that was just created could not be cached, because it has no name. Update the Rules document to use a name for the CDF document being created.",f:"2000",fa:"Y",fb:"simpletype",fc:"'",fd:"xsd:",fe:"restrictions/record[@name='enumeration' and @value='",ff:"CDF Mappings require that the first mapping be of type 'CDF Document' and that this mapping type exist only once for an output. Update the Rules document to use a a CDF Document mapping.",g:"double",ga:"NMTOKENS",gb:"simpletype/literal",gc:"get",gd:"ttns",ge:"enumeration",gf:"The merge failed and a CDF Document could not be created, using the compiled CXF. Run this operation in an uncompiled state to better discern the cause of this error:\n\t",h:"1.234",ha:"NO",hb:'":',hc:"The static response URL does not reference a valid file. The transaction has been cancelled.  Please make sure that the URL is correct (",hd:"xsi:type",he:"maxExclusive",hf:"jsx:",i:"boolean",ia:"Name",ib:/^true$|^false$|^null$|^[1-9]+(?:(?:[0-9]*\.*)|\.*)[0-9]*$/,ic:") and that it returns a valid JSON object:\n\t",id:"Create Node",ie:"maxInclusive",j:"true",ja:"abc",jb:/^xml|^\d|[\W]/i,jc:"The static response URL does not reference a valid document. The transaction has been cancelled.  Please make sure that the URL is correct (",jd:"<",je:"minInclusive",jf:"xmlns:jsx='",k:"date",ka:"NCName",kb:"( ",kc:/^script$/i,kd:">",ke:"minExclusive",kf:"//",l:"2005-10-19Z",la:"abcdefg",lb:")",lc:"Contacting JSON Service at '",ld:"mappings/record",le:"length",lf:"An alternate message exchange pattern was encountered for the mapping rule: one-way. The inbound mappings will not be run.",m:"time",ma:"token",mb:"svc.json",mc:"jsxservicecallback_",md:"DOM",me:"maxLength",mf:"doInboundMap",n:"22:33:12Z",na:"language",nb:"json",nc:"callback",nd:"Map to DOM",ne:"minLength",nf:"//*[@xmlns:",o:"short",oa:"en-cockney",ob:"null",oc:"?",od:'jsx3.GO("',oe:"pattern",of:"]/@xmlns:",p:"1",pa:"normalizedString",pb:"number",pc:"-1",pd:',"',pe:"validate",pf:"jsx3.net.Service.getURLForNS",q:"unsignedLong",qa:"ID",qb:"val",qc:"&",qd:").getValue();",qe:"Invalidate",qf:"Could not finde the URI for the given namespace prefix.",r:"26216842",ra:"IDREFS",rb:"enum",rc:"=",rd:"OUTBOUND",re:" != ",rf:"3.0.00",s:"unsignedInt",sa:"ENTITY",sb:/^\W/g,sc:"jsxservicecall_",sd:"Could not map the JSX object named, '",se:"INBOUND",sf:'<?xml version="1.0" ?>',t:"10",ta:"ENTITIES",tb:"x",tc:"script",td:"', because it is null.",te:"jsx3.gui.Form",tf:'<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" ',u:"unsignedShort",ua:"QName",ub:/^xml/i,uc:"Using static request document located at '",ud:"NODE",ue:"jsx3.gui.RadioButton",uf:'<xsl:output method="xml" omit-xml-declaration="no"/>',v:"unsignedByte",va:"qname",vb:"xxx",vc:"The static request URL does not reference a valid document. The transaction has been cancelled.  Please make sure that the URL is correct (",vd:"CACHE",ve:"jsx3.gui.CheckBox",vf:"</xsl:stylesheet>",w:"byte",wa:"hexBinary",wb:/^\d/,wc:"The request message could not be generated. The transaction has been cancelled",wd:"::",we:"false",wf:'="',x:"long",xa:"\\u255\\u254",xb:"d",xc:"Sending request to remote service located at '",xd:"Map to Cache Node",xe:"jsx3.gui.Block",xf:" ",y:"48216842",ya:"notation",yb:/\W/g,yc:"Setting HTTP Request Header, ",yd:'jsx3.getApp("',ye:"Locate Node",yf:' exclude-result-prefixes="',z:"decimal",za:"here is a note",zb:".",zc:" ==> ",zd:'")',ze:').setValue("',zf:'" >'};c.simpletypes={};c.simpletypestext=ub.a;c.simpletypes[ub.b]=function(){var
zb=parseInt(Math.random()*(c.simpletypestext.length-15));return jsx3.util.strTrim(c.simpletypestext.substring(zb,zb+15));};c.simpletypes[ub.c]=ub.d;c.simpletypes[ub.e]=ub.f;c.simpletypes[ub.g]=ub.h;c.simpletypes[ub.i]=ub.j;c.simpletypes[ub.k]=ub.l;c.simpletypes[ub.m]=ub.n;c.simpletypes[ub.o]=ub.p;c.simpletypes[ub.q]=ub.r;c.simpletypes[ub.s]=ub.t;c.simpletypes[ub.u]=ub.p;c.simpletypes[ub.v]=ub.t;c.simpletypes[ub.w]=ub.t;c.simpletypes[ub.x]=ub.y;c.simpletypes[ub.z]=ub.A;c.simpletypes[ub.B]=ub.C;c.simpletypes[ub.D]=ub.E;c.simpletypes[ub.F]=ub.G;c.simpletypes[ub.H]=ub.t;c.simpletypes[ub.F]=ub.I;c.simpletypes[ub.J]=ub.K;c.simpletypes[ub.L]=ub.M;c.simpletypes[ub.N]=ub.O;c.simpletypes[ub.k]=ub.P;c.simpletypes[ub.Q]=ub.R;c.simpletypes[ub.S]=ub.T;c.simpletypes[ub.U]=ub.V;c.simpletypes[ub.W]=ub.X;c.simpletypes[ub.Y]=ub.Z;c.simpletypes[ub._]=ub.aa;c.simpletypes[ub.z]=ub.ba;c.simpletypes[ub.ca]=ub.da;c.simpletypes[ub.ea]=ub.fa;c.simpletypes[ub.ga]=ub.ha;c.simpletypes[ub.ia]=ub.ja;c.simpletypes[ub.ka]=ub.la;c.simpletypes[ub.ma]=ub.fa;c.simpletypes[ub.na]=ub.oa;c.simpletypes[ub.pa]=c.simpletypes[ub.b];c.simpletypes[ub.qa]=ub.qa;c.simpletypes[ub.ra]=ub.ra;c.simpletypes[ub.sa]=ub.sa;c.simpletypes[ub.ta]=ub.ta;c.simpletypes[ub.ua]=ub.va;c.simpletypes[ub.wa]=ub.xa;c.simpletypes[ub.ya]=ub.za;c.inc_inc=0;c.IE={};c.IE[ub.Aa]=ub.Ba;c.IE[ub.Ca]=ub.Da;c.IE[ub.Ea]=ub.Fa;c.IE[ub.Ga]=ub.Ha;c.IE[ub.Ia]=ub.Ja;c.json_namespace=ub.Ka;c.ON_SUCCESS=ub.La;c.ON_ERROR=ub.Ma;c.ON_TIMEOUT=ub.Na;c.ON_INVALID=ub.Oa;c.ON_PROCESS_RULE=ub.Pa;g.init=function(i,d,s,p){this.setRulesURL(i);this.setOperationName(d);if(s!=null)this.setOutboundURL(s);if(p!=null)this.setInboundURL(p);var
za=new
jsx3.net.Request();za.subscribe(jsx3.HttpRequest.EVENT_ON_RESPONSE,this,ub.Qa);this.setRequest(za);};g.getSupportedNamespaces=function(){var
hb=ub.Ra;for(var cb in c.IE)hb=hb+(cb+ub.Sa+c.IE[cb]+ub.Ta);return hb;};c.XML2JSON=function(b){var
Hb=b.getRootNode();if(Hb&&Hb.getNamespaceURI()==ub.Ka){var
O=[];for(var
sa=Hb.getChildIterator();sa.hasNext();)O.push(c._convertXML(sa.next()));return ub.Ua+O.join(ub.Va)+ub.Wa;}else c.m9(2,ub.Xa+ub.Ka);};c._convertXML=function(b){var
lb=b.getNamespaceURI();var
M=b.getAttribute(ub.Ya)||b.getBaseName();var
Fb,Eb,S;if(lb==ub.Ka+ub.Za||lb==ub.Ka+ub._a){Fb=lb==ub.Ka+ub.Za?ub.ab+M+ub.bb:ub.cb;var
wb=[];for(var
sb=b.getChildIterator();sb.hasNext();){var
cb=sb.next();for(var
ha=cb.getChildIterator();ha.hasNext();){var
V=ha.next();var
U=V.getNamespaceURI();wb.push(U.indexOf(ub.db)>-1?c._convertXML(V):ub.Ua+c._convertXML(V)+ub.Wa);}}Eb=wb.join(ub.Va);S=ub.eb;}else if(lb.indexOf(ub.Ka+ub.fb)==0){Fb=lb.indexOf(ub.gb)==-1?ub.ab+M+ub.hb:ub.Ra;if(c._jsonstringreg.exec(b.getValue())){Eb=b.getValue();}else Eb=jsx3.util.strEscapeJSON(b.getValue());S=ub.Ra;}else{var
pa=(b.getChildNodes()).size()>=1;Fb=ub.ab+M+ub.hb+(pa?ub.Ua:ub.Ra);var
wb=[];for(var
sb=b.getChildIterator();sb.hasNext();)wb.push(c._convertXML(sb.next()));Eb=wb.join(ub.Va);S=pa?ub.Wa:ub.Ra;}return Fb+Eb+S;};c._jsonstringreg=ub.ib;c._saferegname=ub.jb;c.JSON2XML=function(k){if(typeof k==ub.b)try{k=jsx3.eval(ub.kb+k+ub.lb);}catch(Kb){var
ab=jsx3.lang.NativeError.wrap(Kb);var
Va=jsx3._msg(ub.mb,k,ab.getMessage());throw new
jsx3.Exception(Va);}var
xa=new
jsx3.xml.Document();xa.createDocumentElement(ub.nb,ub.Ka);c._convertObject(k,xa);return xa;};c._convertObject=function(m,n){var
Jb=typeof m;if(m==null){Jb=ub.ob;m=ub.ob;}if(Jb==ub.b||Jb==ub.pb||Jb==ub.i||Jb==ub.ob){var
Ua=n.createNode(1,ub.qb,ub.Ka+ub.gb);n.appendChild(Ua);Ua.setValue(m);}else if(jsx3.$A.is(m)){var
_a=n.createNode(1,ub.qb,ub.Ka+ub._a);n.appendChild(_a);for(var
Kb=0;Kb<m.length;Kb++){var
Ua=_a.createNode(1,ub.rb,ub.Ka+ub.rb);_a.appendChild(Ua);c._convertObject(m[Kb],Ua);}}else for(var la in m){var
S=c._saferegname.exec(la)?((((la.replace(ub.sb,ub.tb)).replace(ub.ub,ub.vb)).replace(ub.ub,ub.vb)).replace(ub.wb,ub.xb)).replace(ub.yb,ub.zb):null;var
pa=m[la];Jb=typeof pa;if(pa==null){Jb=ub.ob;pa=ub.ob;}if(Jb==ub.b||Jb==ub.pb||Jb==ub.i||Jb==ub.ob){var
Ua=n.createNode(1,S||la,ub.Ka+ub.fb);n.appendChild(Ua);if(S)Ua.setAttribute(ub.Ya,la,c.IE[ub.Ia]);Ua.setValue(pa);}else if(jsx3.$A.is(pa)){var
_a=n.createNode(1,S||la,ub.Ka+ub.Za);n.appendChild(_a);if(S)_a.setAttribute(ub.Ya,la,c.IE[ub.Ia]);for(var
Kb=0;Kb<pa.length;Kb++){var
Ua=_a.createNode(1,ub.rb,ub.Ka+ub.rb);_a.appendChild(Ua);c._convertObject(pa[Kb],Ua);}}else{var
Ua=n.createNode(1,S||la,ub.Ka);n.appendChild(Ua);if(S)Ua.setAttribute(ub.Ya,la,c.IE[ub.Ia]);c._convertObject(pa,Ua);}}};g.getRulesURL=function(){return this.jsxrulesurl;};g.setRulesURL=function(b){this.jsxrulesurl=b;this.resetRulesTree();return this;};g._getOutboundStubDocument=function(){if(this.jsxstubdocument instanceof jsx3.xml.Document)return this.jsxstubdocument;};g.setOutboundStubDocument=function(a){this.jsxstubdocument=a;return this;};g.getOutboundStubURL=function(){if(this.jsxstuburl==null){var
yb=this.getMEPNode(ub.Ab);if(yb){var
Pa=yb.getAttribute(ub.Bb);return Pa!=null&&jsx3.util.strTrim(Pa)!=ub.Ra?Pa:null;}}else return this.jsxstuburl;};g.setOutboundStubURL=function(m){this.jsxstuburl=m;return this;};g.getNamespace=function(){var
Jb=this.getServer();return Jb!=null?Jb.getEnv(ub.Cb):null;};g.getServer=function(){if(this._jsxCm){return this._jsxCm;}else if(this.jsxserverns){var
J=jsx3.lang.System.getApp(this.jsxserverns);if(J instanceof jsx3.app.Server){return J;}else c.m9(2,ub.Db+this.jsxserverns);}else{var
ra=jsx3.System.getAllApps();for(var
ba=0;ba<ra.length;ba++)if(ra[ba].getEnv(ub.Cb)!=ub.Eb)return ra[ba];}if(jsx3.IDE){c.m9(2,ub.Fb);return jsx3.IDE;}};g.setNamespace=function(h){if(h instanceof jsx3.app.Server){this._jsxCm=h;this.jsxserverns=h.getEnv(ub.Cb);}else{this._jsxCm=null;this.jsxserverns=h;}return this;};g.getOutboundStubPath=function(){if(this.jsxstubpath==null){var
Ba=this.getMEPNode(ub.Ab);if(Ba){var
T=Ba.getAttribute(ub.Gb);return T!=null&&jsx3.util.strTrim(T)!=ub.Ra?T:null;}}else return this.jsxstubpath;};g.setOutboundStubPath=function(o){this.jsxstubpath=o;return this;};g.getInboundURL=function(){if(this.jsxinboundurl==null){var
v=this.getMEPNode(ub.Hb);if(v){var
_=v.getAttribute(ub.Bb);return _!=null&&jsx3.util.strTrim(_)!=ub.Ra?_:null;}}else return this.jsxinboundurl;};g.setInboundURL=function(o){this.jsxinboundurl=o;return this;};g.getOutboundURL=function(){return this.jsxoutboundurl;};g.setOutboundURL=function(l){this.jsxoutboundurl=l;return this;};g.getOperationName=function(){return this.operation;};g.setOperationName=function(k){this.operation=k;return this;};g.getRulesXML=function(){if(!this.jsxrulesxml){var
Aa=this.getRulesURL();var
Lb=new
jsx3.xml.Document();Lb.load(Aa);if(Lb.hasError()){c.m9(2,ub.Ib+Aa+ub.Jb+Lb.getError());}else this.jsxrulesxml=Lb;}return this.jsxrulesxml;};g.setRulesXML=function(b){this.jsxrulesxml=b;};g.resetRulesTree=function(){delete this[ub.Kb];return this;};g.getOperationNode=function(){var
F=this.getRulesXML();if(F){var
Gb=F.selectSingleNode(ub.Lb+this.getOperationName()+ub.Mb);return Gb?Gb:(this.getRulesXML()).selectSingleNode(ub.Nb);}};g.getMEPNode=function(n){var
T=this.getOperationNode();return T?T.selectSingleNode(ub.Ob+n+ub.Mb):null;};g.getUserName=function(){return this.jsxusername;};g.setUserName=function(j){this.jsxusername=j;return this;};g.getUserPass=function(){return this.jsxuserpass;};g.setUserPass=function(j){this.jsxuserpass=j;return this;};g.setOnSuccess=function(q){this.jsxonsuccess=q;return this;};g.setOnError=function(q){this.jsxonerror=q;return this;};g.onSuccess=function(){this.publish({subject:ub.La});var
_a=typeof this.jsxonsuccess;if(_a==ub.Pb||_a==ub.Qb){this.jsxonsuccess(this);}else if(_a==ub.b)this.eval(this.jsxonsuccess);};g.onError=function(){this.publish({subject:ub.Ma});var
S=typeof this.jsxonerror;if(S==ub.Pb||S==ub.Qb){this.jsxonerror(this);}else if(S==ub.b)this.eval(this.jsxonerror);};g.setRequest=function(e){if(e!=null){this.jsxhttprequest=e;}else delete this[ub.Rb];};g.getRequest=function(){return this.jsxhttprequest;};g.getInboundDocument=function(){return this.jsxinbounddocument==null?null:this.jsxinbounddocument;};g.setInboundDocument=function(i){this.jsxinbounddocument=i;};g.getOutboundDocument=function(){return this.jsxoutbounddocument==null?null:this.jsxoutbounddocument;};g.setOutboundDocument=function(j){this.jsxoutbounddocument=j;};g.getWSDL=function(){if(this.wsdl==null){var
Gb=(this.getRulesXML()).selectSingleNode(ub.Sb);if(Gb){var
Fa=Gb.getAttribute(ub.Tb);}else return;}return this.wsdl==null?this.wsdl=jsx3.CACHE.openDocument(Fa):this.wsdl;};g.getEndpointURL=function(){return this.jsxserviceurl==null?(this.getOperationNode()).getAttribute(ub.Ub):this.jsxserviceurl;};g.setEndpointURL=function(m){this.jsxserviceurl=m;return this;};g.doOutboundFilter=function(n){c.m9(5,ub.Vb);if(n==null)n=(this.getMEPNode(ub.Ab)).getAttribute(ub.Wb);this.eval(n);};g.doInboundFilter=function(q){c.m9(5,ub.Xb);if(q==null){var
Mb=this.getMEPNode(ub.Hb);if(Mb){q=Mb.getAttribute(ub.Yb);}else{c.m9(5,ub.Zb);return;}}this.eval(q);};g.getMethod=function(){if(this.jsxmethod==null){var
vb=(this.getOperationNode()).getAttribute(ub._b);if(jsx3.util.strEmpty(vb))vb=ub.ac;this.jsxmethod=vb;}return this.jsxmethod;};g.setMethod=function(o){this.jsxmethod=o;};g.getJSONP=function(){if(this.jsxjsonp==null)this.jsxjsonp=(this.getOperationNode()).getAttribute(ub.bc)==ub.p;return this.jsxjsonp;};g.setJSONP=function(k){this.jsxjsonp=k;};g._setValid=function(e){this.S6=e;};g._isValid=function(){return this.S6;};g._isJSON=function(n){var
E=this.getMEPNode(n);var
ga=E.selectSingleNode(ub.cc);return ga&&ga.getAttribute(ub.dc)==ub.Ka;};g.doCall=function(q){var
Na=this.getRulesXML();if(Na!=null)if(!this.getMode()){var
kb=(this.getServer()).resolveURI(this.getInboundURL());c.m9(5,ub.ec+kb+ub.fc);if(this._isJSON(ub.Hb)){var
Qa=jsx3.net.Request.open(ub.gc,kb,false);Qa.send();var
y=Qa.getResponseText();if(!jsx3.util.strEmpty(y)){jsx3.sleep(function(){this.onResponse({target:{getResponseText:function(){return y;}}});},null,this);}else c.m9(2,ub.hc+kb+ub.ic+w.getError());}else{var
w=((this.getServer()).getCache()).getOrOpenDocument(kb,kb);if(w.hasError()){c.m9(2,ub.jc+kb+ub.Jb+w.getError());}else{w=w.cloneDocument();jsx3.sleep(function(){this.onResponse({target:{getResponseXML:function(){return w;}}});},null,this);}}}else if((this.getMethod()).search(ub.kc)==0){var
lb=((this.getServer()).resolveURI(this.getEndpointURL())).toString();c.m9(5,ub.lc+lb+ub.fc);var
Lb=this.getUniqueId();if(this.getJSONP()){var
N=ub.mc+Lb;var
u=this;window[N]=function(k){u.doRespond(k);};var
tb=typeof this.getJSONP()==ub.b?this.getJSONP():ub.nc;lb=lb+(lb.indexOf(ub.oc)==ub.pc?ub.oc:ub.qc)+tb+ub.rc+N;}(this.getServer()).loadInclude(lb,ub.sc+Lb,ub.tc,false);}else{var
ba=this.getOutboundURL();var
I;if(ba){ba=(this.getServer()).resolveURI(ba);c.m9(5,ub.uc+ba+ub.fc);I=((this.getServer()).getCache()).getOrOpenDocument(ba,ba);if(I.hasError()){c.m9(2,ub.vc+ba+ub.Jb+I.getError());return;}else I=I.cloneDocument();}else{I=this.getServiceMessage();if((this.getMethod()).toUpperCase()==ub.ac&&!I){c.m9(4,ub.wc);return;}}if(!this._isValid()&&q){return false;}else{this.setOutboundDocument(I);this.doOutboundFilter();c.m9(5,ub.xc+this.getEndpointURL()+ub.fc);var
fb=this.getRequest();fb.open(this.getMethod(),this.getEndpointURL(),true,this.getUserName(),this.getUserPass());var
t=this.getHeaders();var
vb;for(vb in t)if(!(typeof t[vb]==ub.Pb||typeof t[vb]==ub.Qb)){fb.setRequestHeader(vb.toString(),t[vb]);c.m9(5,ub.yc+vb+ub.zc+t[vb]+ub.fc);}var
Db;if(this._isJSON(ub.Ab)){Db=c.XML2JSON(I);}else Db=I!=null&&I instanceof jsx3.xml.Document&&!I.hasError()?I.serialize(ub.Ac):null;fb.send(Db,this.getTimeout());return true;}}};g.setRequestHeader=function(f,i){var
Ea=this.getHeaders();Ea[f]=i;};g.getHeaders=function(){if(this.jsxheaders==null){this.jsxheaders={};var
da=(this.getOperationNode()).selectNodes(ub.Bc);for(var
Y=da.iterator();Y.hasNext();){var
qa=Y.next();this.jsxheaders[qa.getAttribute(ub.Cc)+ub.Ra]=qa.getAttribute(ub.Dc)+ub.Ra;}}return this.jsxheaders;};g.setTimeouts=function(s,n,i,q){c.m9(4,ub.Ec);return this;};g.onTimeout=function(){this.publish({subject:ub.Na});};g.setTimeout=function(s,q,d){(this.getRequest()).subscribe(ub.Fc,this,ub.Na);this.subscribe(ub.Na,q,d);this.jsxtimeout=s;return this;};g.getTimeout=function(){return this.jsxtimeout;};g.resetRules=function(){var
x=(this.getRulesXML()).selectNodes(ub.Gc);for(var
Ya=x.iterator();Ya.hasNext();)(Ya.next()).removeAttribute(ub.Hc);return this;};g._resetNamespaceRegistry=function(){this.nshash={};this.nsinc=0;};c.m9=function(h,l){if(c.KD==null)if(jsx3.util.Logger){c.KD=jsx3.util.Logger.getLogger(c.jsxclass.getName());if(c.KD==null)return;}else return;c.KD.log(h,l);};g._reset=function(){this.resetRules();this._setValid(true);this._resetNamespaceRegistry();};g.getServiceMessage=function(d,k){var
Aa=new
jsx3.util.Timer(c.jsxclass,this.getEndpointURL());var
Ka,Hb;this._reset();var
xa=this.getOperationNode();c.m9(5,ub.Ic+this.getOperationName()+ub.Jc+this.getRulesURL()+ub.fc);if(!k){Ka=this._getOutboundStubDocument();k=this.getOutboundStubURL();}if(k||Ka instanceof jsx3.xml.Document){var
ea=this.getServer();if(!(Ka instanceof jsx3.xml.Document)){k=ea.resolveURI(k);Ka=((this.getServer()).getCache()).getOrOpenDocument(k,k);}if(!Ka.hasError()){var
Lb=this.getOutboundStubPath();var
Ca=Lb.split(ub.Kc);var
Sa={};for(var
y=0;y<Ca.length;y++)if(Ca[y].search(ub.Lc)>-1)Sa[RegExp.$1]=1;Ka=Ka.cloneDocument();Ka.setSelectionLanguage(ub.Mc);Hb=Ka.selectSingleNode(Lb,Ka.getDeclaredNamespaces(Sa));if(!Hb){c.m9(2,ub.Nc+Lb+ub.Oc);return;}}else{c.m9(2,ub.Pc+k+ub.Jb+Ka.getError());return;}}var
rb=xa.selectSingleNode(ub.Ob+(d==null?ub.Ab:(d.substring(0,1)).toUpperCase())+ub.Mb);var
jb=rb.selectNodes(ub.cc);var
S;for(var
y=jb.iterator();y.hasNext();)S=this.doAddAndRecurse(Ka,Hb,y.next(),d,true);Aa.log(ub.Qc);return Ka?Ka:S;};g.registerNamespace=function(a,r,e){var
ea=ub.Ra;var
mb=null;if(a==c.IE[ub.Ia]){ea=ub.Ia;mb=a;}else if(a!=ub.Ra&&this.nshash[a]!=null){mb=a;ea=this.nshash[a];}else if(a!=ub.Ra){this.nsinc++;this.nshash[a]=ub.Rc+this.nsinc;mb=a;ea=ub.Rc+this.nsinc;if(e!=true){var
bb=r.getRootNode();bb.setAttribute(ub.Sc+ea,mb);}}return {prefix:ea,uri:mb};};g.doAddAndRecurse=function(_jsxd,_jsxm,i,q,e){if(i.getAttribute(ub.Hc))return;var
G=false;var
Mb=this;var
Hb=function(s){s.setAttribute(ub.Hc,ub.p);};var
oa=function(m){m.removeAttribute(ub.Hc);};var
la=function(n){(n.getParent()).removeChild(n);};var
Ba=function(r){Mb.setNodeValue(lb,r);};var
I=function(n){return Mb.getNamedNodeChild(n,i);};var
Gb=function(f){(Mb.getNamedRuleChild(f,i)).setAttribute(ub.Hc,ub.p);};var
Ya=function(h){(Mb.getNamedRuleChild(h,i)).setAttribute(ub.Hc,ub.p);};var
wb=function(a){(Mb.getNamedRuleChild(a,i)).removeAttribute(ub.Hc);};var
fa=function(s){Mb.CDFCONTEXT.context=Mb.CDFCONTEXT.context.selectSingleNode(s);};var
gb=function(k){Mb.CDFCONTEXT.records=Mb.CDFCONTEXT.context.selectNodes(k);};var
_=i.selectSingleNode(ub.Tc);if(_){var
w=i.selectSingleNode(ub.Uc+_.getValue()+ub.Mb);if(w!=null){if(this.CDFCONTEXT&&this.CDFCONTEXT.records&&this.CDFCONTEXT.records.hasNext())i=w;}else c.m9(2,ub.Vc+_.getValue()+ub.Wc);}var
Sa=i.getAttribute(ub.dc);var
ba=Sa?this.registerNamespace(Sa,_jsxd,e||i.getAttribute(ub.Xc)==ub.Yc):{prefix:ub.Ra,uri:null};var
bb=i.getAttribute(ub.Zc);if(i.getAttribute(ub.Xc)==ub.Yc){var
C=true;var
lb=_jsxd.createNode(2,ba.prefix+(ba.prefix!=ub.Ra?ub._c:ub.Ra)+bb,ba.uri);_jsxm.setAttributeNode(lb);}else if(i.getAttribute(ub.Xc)==ub.ad){var
C=false;var
lb=_jsxd.createNode(4);_jsxm.appendChild(lb);}else{var
C=false;if(_jsxd){var
lb=_jsxd.createNode(1,ba.prefix+(ba.prefix!=ub.Ra?ub._c:ub.Ra)+bb,ba.uri);_jsxm.appendChild(lb);}else{_jsxd=new
jsx3.xml.Document();var
lb=_jsxd.createDocumentElement(ba.prefix+(ba.prefix!=ub.Ra?ub._c:ub.Ra)+i.getAttribute(ub.Zc),ba.uri);}var
ob=i.selectSingleNode(ub.bd+c.IE[ub.Ca]+ub.Mb);if(ob!=null&&ob!=ub.Ra){var
y;if((y=i.getAttribute(ub.cd))!=null&&y!=ub.Ra){var
v=i.getAttribute(ub.dd);if(v!=null&&v!=ub.Ra){if(y.indexOf(ub._c)>0)y=y.replace(ub.ed,ub.Ra);y=ub.fd+y;}else{if(y.indexOf(ub._c)>0)y=y.replace(ub.ed,ub.Ra);Sa=i.getAttribute(ub.gd);ba=this.registerNamespace(Sa,_jsxd,e);y=ba.prefix==ub.Ra?y:ba.prefix+ub._c+y;}var
ua=_jsxd.createNode(2,ub.hd,ub.Fa);ua.setValue(y);lb.setAttributeNode(ua);}}}this.publish({subject:ub.Pa,rule:i,action:ub.id,description:ub.jd+lb.getNodeName()+ub.kd,level:6});var
ka=i.selectNodes(ub.ld);var
qb=false;var
db;var
va,D;for(var
za=ka.iterator();za.hasNext();){var
H=this.CDFCONTEXT?this.CDFCONTEXT.context:null;var
F=this.CDFCONTEXT?this.CDFCONTEXT.records:null;var
ma=this.CDFCONTEXT&&this.CDFCONTEXT.parentContext?this.CDFCONTEXT.parentcontext:null;var
O=za.next();var
fb=O.getAttribute(ub.Cc);var
Bb=O.getAttribute(ub.Dc);var
Kb=this.getNamespace();if(Kb==null||jsx3.util.strTrim(Kb)==ub.Ra)Kb=null;if(fb==ub.md){var
Z=jsx3.GO(Bb,Kb);if(Z!=null){this.publish({subject:ub.Pa,rule:i,action:ub.nd,description:ub.od+Bb+ub.ab+(Kb?ub.pd+Kb+ub.ab:ub.Ra)+ub.qd,level:6});this.doMapAndUpdate(lb,Z,ub.rd,i);}else c.m9(2,ub.sd+Bb+ub.td);}else if(fb==ub.ud||fb==ub.vd){var
ya=Bb.split(ub.wd);var
Ib=ya[0];var
da=this.getServer();if(da!=null){var
u=(da.getCache()).getDocument(Ib);}else var
u=jsx3.CACHE.getDocument(Ib);if(u!=null){var
Ra=u.selectSingleNode(ya[1]);if(Ra!=null){this.publish({subject:ub.Pa,rule:i,action:ub.xd,description:(Kb?ub.yd+Kb+ub.zd:ub.Ad)+ub.Bd+ya[0]+ub.Cd+ya[1]+ub.Dd,level:6});this.updateNode(lb,Ra,ub.rd);}else c.m9(2,ub.Ed+ya[0]+ub.Fd+ya[1]+ub.zb);}else c.m9(2,ub.Gd+ya[0]+ub.zb);}else if(fb==ub.Hd){this.publish({subject:ub.Pa,rule:i,action:ub.Id,description:(Kb?ub.yd+Kb+ub.zd:ub.Ad)+ub.Bd+Bb+ub.Jd,level:6});this.getCDFDocument(Bb,ub.rd,Kb);}else if(fb==ub.Kd){var
W;if(W=this.CDFCONTEXT.records.next()){this.publish({subject:ub.Pa,rule:i,action:ub.Ld,description:ub.Md,level:6});va=W;D=W.selectNodes(ub.cc);this.CDFCONTEXT=new
c.CdfContext(va,this.CDFCONTEXT,D);db=true;qb=true;}else{la(lb);G=true;db=false;}}else if(fb==ub.Nd){var
Ia=this.CDFCONTEXT.context.getAttribute(Bb);if(Ia){this.publish({subject:ub.Pa,rule:i,action:ub.Od,description:ub.Pd+Bb+ub.Jd,level:6});Ba(Ia);}}else if(fb==ub.Qd){this.publish({subject:ub.Pa,rule:i,action:ub.Rd,description:ub.Sd+Bb+ub.Td,level:6});var
Ka={RULENODE:i,MESSAGENODE:lb,my:Mb,OBJECTNAME:Bb,OBJECTTYPE:fb,CDFCONTEXTPARENT:ma,CDFCONTEXT:H,CDFRECORDS:F,setCDFRecords:gb,setCDFContext:fa,enableNamedRule:wb,disableNamedRule:Ya,enableReferencedRule:Hb,disableReferencedRule:oa,skipNamedRule:Gb,getNamedChild:I,setValue:Ba,removeChild:la};var
Nb=this.eval(Bb,Ka);}}if(lb.getValue()==ub.Ra&&q!=null&&i.selectSingleNode(ub.cc)==null){var
pb=i.getAttribute(ub.cd);if(pb!=null&&pb!=ub.Ra){var
xb=c.simpletypes[pb.substring(pb.indexOf(ub._c)+1)];var
Qa=xb!=null?typeof xb==ub.Pb?xb():xb:ub.Ud;lb.setValue(Qa);}}else if(!G&&lb.getValue()==ub.Ra&&i.selectSingleNode(ub.cc)==null&&i.getAttribute(ub.Xc)!=ub.Yc&&!e&&i.selectSingleNode(ub.Vd)==null){la(lb);G=true;}if(G!=true)this.validate(lb,i);if(db==null){var
La=(La=i.getAttribute(ub.Wd))!=null?La:false;db=this.eval(La);}if(!G&&i.getAttribute(ub.Xd)!=ub.p&&(i.getParent()).getAttribute(ub.Xd)==ub.p){var
K=false;var
U=_jsxm;var
ha=i.getParent();while(ha.getAttribute(ub.Xd)==ub.p){ha=ha.getParent();var
x=U;U=U.getParent();}if(C){_jsxm.removeAttributeNode(lb);U.setAttributeNode(lb);}else U.insertBefore(lb,x);}else if(i.getAttribute(ub.Xd)==ub.p){var
K=true;}else var
K=false;var
Da=i.selectNodes(ub.cc);for(var
za=Da.iterator();za.hasNext();)this.doAddAndRecurse(_jsxd,lb,za.next(),q,null);if(qb&&this.CDFCONTEXT)this.CDFCONTEXT=this.CDFCONTEXT.parentcontext;var
Sa=i.getAttribute(ub.Yd);if(Sa!=null&&Sa!=ub.Ra){ba=this.registerNamespace(Sa,_jsxd,e);lb.setValue(ba.prefix+ub._c+i.getAttribute(ub.Zd));}if(i.getAttribute(ub.cd)==ub._d&&i.getAttribute(ub.gd)==ub.Da){var
sb=lb.getAttributes();for(var
za=sb.iterator();za.hasNext();){var
Xa=za.next();if(Xa.getBaseName()==ub.ae){var
Q=(i.selectSingleNode(ub.be)).getValue();var
eb=this.nshash[Q];var
t=eb+ub._c+(i.selectSingleNode(ub.ce)).getValue()+ub.cb+(lb.selectNodes(ub.de)).size()+ub.eb;Xa.setValue(t);}}}if(db&&!K){this.doAddAndRecurse(_jsxd,_jsxm,i,q,null);}else if(K&&!C)(lb.getParent()).removeChild(lb);return _jsxd;};g.findNameByValue=function(o,q){for(var fa in o)if(o[fa]==q)return fa.toString();};g.validate=function(b,h){var
D=new
jsx3.util.Timer(c.jsxclass,this.getEndpointURL());var
_a=h.selectNodes(ub.ee);var
K=true;if(_a.size()>0){var
Pa=b.getValue()+ub.Ra;if(!h.selectSingleNode(ub.fe+Pa+ub.Mb))for(var
ab=_a.iterator();K&&ab.hasNext();){var
eb=ab.next();var
va=eb.getAttribute(ub.Cc);var
Ja=eb.getAttribute(ub.Dc);if(va==ub.ge){this.invalidate(b,h,Pa,va,Ja);K=false;}else if(va==ub.he&&!(Pa<Ja)){this.invalidate(b,h,Pa,va,Ja);K=false;}else if(va==ub.ie&&!(Pa<=Ja)){this.invalidate(b,h,Pa,va,Ja);K=false;}else if(va==ub.je&&!(Pa>=Ja)){this.invalidate(b,h,Pa,va,Ja);K=false;}else if(va==ub.ke&&!(Pa>Ja)){this.invalidate(b,h,Pa,va,Ja);K=false;}else if(va==ub.le&&Pa.length!=Number(Ja)){this.invalidate(b,h,Pa,va,Ja);K=false;}else if(va==ub.me&&Pa.length>Number(Ja)){this.invalidate(b,h,Pa,va,Ja);K=false;}else if(va==ub.ne&&Pa.length<Number(Ja)){this.invalidate(b,h,Pa,va,Ja);K=false;}else if(va==ub.oe){var
ib=new
RegExp(Ja);if(Pa.search(ib)!=0){this.invalidate(b,h,Pa,va,Ja);K=false;}}}}D.log(ub.pe);return K;};g.invalidate=function(k,f,r,n,h){this._setValid(false);this.publish({subject:ub.Oa,rule:f,message:k,type:n,value:h});this.publish({subject:ub.Pa,rule:f,action:ub.qe,description:r+ub.re+n+ub._c+h,level:3});};g.updateNode=function(o,q,i){if(i==ub.se){var
Ha=o;var
K=q;}else{var
Ha=q;var
K=o;}var
xa=this.getNodeValue(Ha);this.setNodeValue(K,xa);};g.setNodeValue=function(j,q){j.setValue(q+ub.Ra);};g.getNodeValue=function(q){return q.getValue();};g.doMapAndUpdate=function(j,m,a,f){if(jsx3.gui.Form&&m.instanceOf(ub.te)){if(jsx3.gui.RadioButton&&m.instanceOf(ub.ue)){if(a==ub.se){m.setGroupValue(this.getNodeValue(j));}else{var
ba=m.getGroupValue();this.setNodeValue(j,ba==null?ub.Ra:ba);}}else if(jsx3.gui.CheckBox&&m.instanceOf(ub.ve)){if(a==ub.se){var
na=this.getNodeValue(j);m.setChecked(this.eval(na)?1:0);}else this.setNodeValue(j,m.getChecked()?ub.j:ub.we);}else if(a==ub.se){m.setValue(this.getNodeValue(j));}else if(a==ub.rd)this.setNodeValue(j,m.getValue()+ub.Ra);}else if(jsx3.gui.Block&&m.instanceOf(ub.xe))if(a==ub.se){m.setText(this.getNodeValue(j),true);}else this.setNodeValue(j,m.getText());};g.doReadAndRecurse=function(m,d){var
lb=this;var
mb=function(a){return lb.getNamedNodeChild(a,m);};var
J=d.selectSingleNode(ub.Tc);if(J){var
O=d.selectSingleNode(ub.Uc+J.getValue()+ub.Mb);if(O!=null){d=O;}else c.m9(2,ub.Vc+J.getValue()+ub.Wc);}this.publish({subject:ub.Pa,rule:d,action:ub.ye,description:ub.jd+m.getNodeName()+ub.kd,level:6});var
Db=d.selectNodes(ub.ld);var
w=true;var
Wa=false;for(var
ib=Db.iterator();ib.hasNext();){var
Ja=this.CDFCONTEXT?this.CDFCONTEXT.context:null;var
t=ib.next();var
_=t.getAttribute(ub.Cc);var
Mb=t.getAttribute(ub.Dc);var
A=this.getNamespace();if(_==ub.md){var
ea=jsx3.GO(Mb,A);if(ea!=null){this.publish({subject:ub.Pa,rule:d,action:ub.nd,description:ub.od+Mb+ub.ab+(A?ub.pd+A+ub.ab:ub.Ra)+ub.ze+m.getValue()+ub.Jd,level:6});this.doMapAndUpdate(m,ea,ub.se,d);}else c.m9(2,ub.sd+Mb+ub.td);}else if(_==ub.ud||_==ub.vd){var
Da=Mb.split(ub.wd);var
Gb=Da[0];var
u=this.getServer();if(u!=null){var
yb=(u.getCache()).getDocument(Gb);}else var
yb=jsx3.CACHE.getDocument(Gb);if(yb!=null){var
nb=yb.selectSingleNode(Da[1]);if(nb!=null){this.publish({subject:ub.Pa,rule:d,action:ub.xd,level:6,description:(A?ub.yd+A+ub.zd:ub.Ad)+ub.Bd+Da[0]+ub.Cd+Da[1]+ub.Ae+jsx3.util.strTruncate(m.getValue(),30,null,0.6666666666666666)+ub.Jd});this.updateNode(m,nb,ub.se);}else c.m9(2,ub.Ed+Da[0]+ub.Fd+Da[1]+ub.zb);}else c.m9(2,ub.Gd+Da[0]+ub.zb);}else if(_==ub.Hd){this.publish({subject:ub.Pa,rule:d,action:ub.Id,description:(A?ub.yd+A+ub.zd:ub.Ad)+ub.Be+Mb+ub.Ce,level:6});this.getCDFDocument(Mb,ub.se,A);}else if(_==ub.Kd){this.publish({subject:ub.Pa,rule:d,action:ub.Ld,description:ub.De,level:6});var
xa=this.CDFCONTEXT.context.createNode(1,ub.cc);xa.setAttribute(ub.Ee,this.getUniqueId());this.CDFCONTEXT.context.appendChild(xa);this.CDFCONTEXT=new
c.CdfContext(xa,this.CDFCONTEXT);Wa=true;}else if(_==ub.Nd){this.publish({subject:ub.Pa,rule:d,action:ub.Od,description:ub.Fe+Mb+ub.Ge+jsx3.util.strTruncate(m.getValue(),30,null,0.6666666666666666)+ub.Jd,level:6});this.CDFCONTEXT.context.setAttribute(Mb,m.getValue());w=false;}else if(_==ub.Qd){this.publish({subject:ub.Pa,rule:d,action:ub.Rd,description:ub.Sd+Mb+ub.Td,level:6});var
Ra={my:lb,OBJECTNAME:Mb,OBJECTTYPE:_,CDFCONTEXT:Ja,MESSAGENODE:m,RULENODE:d,RECURSE:w,getNamedChild:mb};this.eval(Mb,Ra);}}if(w)this._doReadAndRecurse(d,m);if(Wa)this.CDFCONTEXT=this.CDFCONTEXT.parentcontext;};g._doReadAndRecurse=function(i,r){var
ka=i.selectNodes(ub.He);for(var
hb=ka.iterator();hb.hasNext();){var
K=hb.next();var
Da=K.getAttribute(ub.Zc);if(K.getAttribute(ub.Xc)==ub.Yc){var
ea=r.getAttributes();L3:for(var
la=ea.iterator();la.hasNext();){var
Aa=la.next();if(Aa.getBaseName()==Da){this.doReadAndRecurse(Aa,K);break L3;}}}else if(K.getAttribute(ub.Xd)==ub.p){this._doReadAndRecurse(K,r);}else{var
ea=r.selectNodes(ub.Ie+Da+ub.Mb);for(var
la=ea.iterator();la.hasNext();)this.doReadAndRecurse(la.next(),K);}}};c.CdfContext=function(l,m,a){this.context=l;this.parentcontext=m;this.records=a;};g.getNamedNodeChild=function(r,m){var
T=m.getChildNodes();for(var
Ab=T.iterator();Ab.hasNext();){var
ma=Ab.next();var
O=ma.getBaseName();if(O==r)return ma;}};g.doval=function(o){this.eval(o);};g.getNamedRuleChild=function(f,h){return h.selectSingleNode(ub.Je+f+ub.Mb);};g.getUniqueId=function(){return jsx3.xml.CDF.getKey();};g.doRespond=function(e){if(this._isJSON(ub.Hb)&&!(e.target&&e.target.getResonseText instanceof Function)){this.onResponse({target:{getResponseText:function(){return e;}}});}else this.onResponse(e);};g.onResponse=function(n){var
O=n.target;if(O instanceof jsx3.net.Request){this.responseheaders=O.getAllResponseHeaders();this.status=O.getStatus();this.statusText=O.getStatusText();c.m9(5,ub.Ke+this.getOperationName()+ub.Le+this.getEndpointURL()+ub.Me+this.status);if(this.status!=200&&this.status!=202){var
u=true;c.m9(2,ub.Ke+this.getOperationName()+ub.Le+O.getURL()+ub.Ne+this.status+ub.Oe+this.statusText);}else var
u=false;var
Ab;if(this._isJSON(ub.Hb)){var
ra=O.getResponseText();try{Ab=c.JSON2XML(ra);if(!Ab){c.m9(2,ub.Pe);return;}}catch(Kb){var
K=jsx3.lang.NativeError.wrap(Kb);c.m9(2,ub.Qe+K.getMessage());return;}}else Ab=O.getResponseXML();if(Ab&&!Ab.hasError()){this.setInboundDocument(Ab);}else if(this.getMEPNode(ub.Hb)){c.m9(2,ub.Ke+this.getOperationName()+ub.Le+this.getEndpointURL()+ub.Re+this.statusText);this.onError();return;}}else{var
Ab;if(this._isJSON(ub.Hb)){var
ra=O.getResponseText();try{Ab=c.JSON2XML(ra);if(!Ab){c.m9(2,ub.Pe);return;}}catch(Kb){var
K=jsx3.lang.NativeError.wrap(Kb);c.m9(2,ub.Qe+K.getMessage());return;}}else Ab=O.getResponseXML();this.setInboundDocument(Ab);this.status=200;this.statusText=ub.Se+this.getInboundURL()+ub.Te;var
u=this.getStatus()!=200&&this.getStatus!=202;}var
oa=this.getMEPNode(ub.Hb);if(oa){this.doInboundFilter();this.doInboundMap();}else c.m9(5,ub.Ue);if(u){this.onError();}else this.onSuccess();};g.getCDFDocument=function(p,b,r){var
Ya=this.getServer();var
Hb=Ya!=null?Ya.getCache():jsx3.CACHE;if(b==ub.rd){var
wa=Hb.getDocument(p);if(wa){this.CDFCONTEXT=new
c.CdfContext(wa.getRootNode(),null,(wa.getRootNode()).selectNodes(ub.cc));}else c.m9(2,ub.Ve+p+ub.We+this.getOperationName()+ub.Xe);}else{var
wa=jsx3.xml.CDF.Document.newDocument();Hb.setDocument(p,wa);this.CDFCONTEXT=new
c.CdfContext(wa.getRootNode(),null);this._jsxallcdfs[p]=Hb;}};g.getStatus=function(){var
xa=this._status||this.status;return !xa?200:xa;};g.setStatus=function(b){this._status=b;};g.getMode=function(){return this._jsxmode!=null?this._jsxmode:(this.getServer()).getEnv(ub.Ye);};g.setMode=function(p){this._jsxmode=p;};g.doInboundMap=function(){var
t=new
jsx3.util.Timer(c.jsxclass,this.getEndpointURL());c.m9(5,ub.Ze);var
hb=this.getOperationNode();if(hb){var
ja=this.getInboundDocument();var
ka=this.getStatus();var
Ma=ka!=200&&ka!=202&&ka!=0?ub._e:ub.Hb;if(Ma==ub.Hb&&this.dh instanceof jsx3.xml.Document){c.m9(5,ub.af);jsx3.require(ub.bf);var
La=new
jsx3.xml.Template(this.dh);var
Ha=jsx3.xml.CDF.Document.wrap(La.transformToObject(ja));if(!Ha.hasError()){c.m9(5,ub.cf);var
Ia=this.getMEPNode(ub.Hb);var
A=Ia.selectSingleNode(ub.df);if(A){var
oa=A.getAttribute(ub.Dc);if(oa&&(oa=jsx3.util.strTrim(String(oa)))!=ub.Ra){var
E=this.getServer();var
za=E!=null?E.getCache():jsx3.CACHE;za.setDocument(oa,Ha);}else c.m9(2,ub.ef);}else c.m9(2,ub.ff);}else c.m9(2,ub.gf+Ha.getError());}else{var
yb=this.getMEPNode(Ma);if(yb==null&&Ma==ub._e)yb=this.getMEPNode(ub.Hb);if(yb){var
ca=yb.selectNodes(ub.cc);ja.setSelectionLanguage(ub.Mc);(this.getRulesXML()).setSelectionLanguage(ub.Mc);for(var
xa=ca.iterator();xa.hasNext();){var
Lb=xa.next();var
vb=Lb.getAttribute(ub.Zc);var
cb=Lb.getAttribute(ub.dc);var
G=ub.Ra;if(cb!=null&&jsx3.util.strTrim(cb)!=ub.Ra){G=ub.hf;ja.setSelectionNamespaces(ub.jf+cb+ub.fc);}var
K=ub.kf+G+vb;var
fa=ja.selectSingleNode(K);if(fa!=null){this._jsxallcdfs={};if(!fa.equals(ja.getRootNode())){var
v=fa.getParent();var
P=v.selectNodes(G+vb);for(var
Q=P.iterator();Q.hasNext();)this.doReadAndRecurse(Q.next(),Lb);}else this.doReadAndRecurse(fa,Lb);for(var Pa in this._jsxallcdfs){var
Ga=this._jsxallcdfs[Pa];Ga.setDocument(Pa,Ga.getDocument(Pa));}}}}else c.m9(5,ub.lf);}}t.log(ub.mf);};c.getNSForURL=function(o,k){var
X=(o.getRootNode()).getAttributes();for(var
pb=X.size()-1;pb>=0;pb--)if((X.get(pb)).getValue()==k)return (X.get(pb)).getBaseName();};c.getURLForNS=function(o,h){if(jsx3.util.strEmpty(h))return null;try{var
ka=o.selectSingleNode(ub.nf+h+ub.of+h);}catch(Kb){var
aa={};aa.FUNCTION=ub.pf;aa.PREFIX=h+ub.Ra;aa.DESCRIPTION=ub.qf;jsx3.util.Logger.logError(aa);return null;}return ka?ka.getValue():null;};c.getVersion=function(){return ub.rf;};g.compile=function(){var
E=new
jsx3.util.Timer(c.jsxclass,this.getEndpointURL());this._resetCompiler();var
rb=this.getMEPNode(ub.Hb);var
Q=[];Q.push(ub.sf);Q.push(ub.tf);Q.push(ub.uf);this._compile(rb,Q,true);Q.push(ub.vf);var
V=[],Ib=[];for(var ja in this.fg){V.push(this.fg[ja]);Ib.push(ub.Sc+this.fg[ja]+ub.wf+ja+ub.ab);}Q[1]+=(Ib.join(ub.xf)+ub.yf+V.join(ub.xf)+ub.zf);var
B=Q.join(ub.Af);var
ka=new
jsx3.xml.Document();ka.loadXML(B);if(ka.hasError()){c.m9(2,ub.Bf+ka.getError());return;}else this.dh=ka;E.log(ub.Cf);return ka;};g._compile=function(b,d,s){var
Ba=this.MO(b);if(s){d.push(ub.Df);}else{var
Wa=Ba?Ba.prefix+ub._c:ub.Ra;var
oa=b.getAttribute(ub.Zc);if(b.getAttribute(ub.Xc)==ub.Yc)oa=ub.Ef+oa;var
xb=b.getAttribute(ub.Ee);d.push(ub.Ff+xb+ub.Gf);}var
Pa=b.selectNodes(ub.Hf);var
Ca=[];for(var
Ka=Pa.iterator();Ka.hasNext();){var
mb=Ka.next();var
t=mb.getAttribute(ub.Cc);var
V=mb.getAttribute(ub.Dc);if(t==ub.Hd){d.push(ub.If);Ca.push(ub.Jf);}else if(t==ub.Kd){d.push(ub.Kf);Ca.push(ub.Lf);}else d.push(ub.Mf+V+ub.Nf);}var
ea=b.selectNodes(ub.cc);for(var
Ka=ea.iterator();Ka.hasNext();){var
Qa=Ka.next();var
za;var
C=Qa.selectSingleNode(ub.Tc);if(C){var
lb=Qa.selectSingleNode(ub.Uc+C.getValue()+ub.Mb);if(lb!=null){za=Qa.getAttribute(ub.Zc);Qa=lb;}}var
_a=this.MO(Qa);var
Wa=_a?_a.prefix+ub._c:ub.Ra;if(s)Wa=ub.kf+Wa;var
oa=za||Qa.getAttribute(ub.Zc);if(Qa.getAttribute(ub.Xc)==ub.Yc)oa=ub.Ef+oa;var
xb=Qa.getAttribute(ub.Ee);d.push(ub.Of+Wa+oa+ub.Pf+xb+ub.Qf);}for(var
Ka=Ca.length-1;Ka>=0;Ka--)d.push(Ca[Ka]);d.push(ub.Rf);ea=b.selectNodes(ub.Sf);for(var
Ka=ea.iterator();Ka.hasNext();){var
Qa=Ka.next();this._compile(Qa,d);}};g._resetCompiler=function(){this.dh=null;this.fg={};this.fl=0;};g.MO=function(k){var
xa=k.getAttribute(ub.dc);if(xa==c.IE[ub.Ia]){return;this.fg[xa]=ub.Ia;return {prefix:ub.Ia,namespace:xa};}else if(xa&&(xa=jsx3.util.strTrim(String(xa)))!=ub.Ra){if(!this.fg[xa]){this.fl+=1;this.fg[xa]=ub.Rc+this.fl;}return {prefix:ub.Rc+this.fl,namespace:xa};}};});jsx3.net.Service.prototype.getOperation=jsx3.net.Service.prototype.getOperationName;jsx3.net.Service.prototype.setOperation=jsx3.net.Service.prototype.setOperationName;jsx3.net.Service.prototype.getStubURL=jsx3.net.Service.prototype.getOutboundStubURL;jsx3.net.Service.prototype.setStubURL=jsx3.net.Service.prototype.setOutboundStubURL;jsx3.net.Service.prototype.addHeader=jsx3.net.Service.prototype.setRequestHeader;jsx3.net.Service.prototype.setServiceURL=jsx3.net.Service.prototype.setEndpointURL;jsx3.Service=jsx3.net.Service;
