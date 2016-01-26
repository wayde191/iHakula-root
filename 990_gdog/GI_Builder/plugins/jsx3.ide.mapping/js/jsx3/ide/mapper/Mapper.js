jsx3.Class.defineClass("jsx3.ide.mapper.LogHandler",jsx3.util.Logger.FormatHandler,null,function(b,c){var
ub={a:"0",b:"instance"};c.init=function(q){this._queue=[];this.jsxsuper(q);};c.handle=function(e){if(this.T4)window.clearTimeout(this.T4);var
Va=e.getParameters();if(Va){var
Jb;for(var Fa in Va)if(Fa==ub.a&&(Jb=Va[Fa][ub.b])!=null)break;if(Jb){var
yb=this;(this.getQueue()).push([jsx3.util.strEscapeHTML(this.format(e)),e.getLevel()]);this.T4=window.setTimeout(function(){Jb._out(yb.getQueue());yb.resetQueue();},100);}}};c.getQueue=function(){return this._queue;};c.resetQueue=function(){this._queue=[];};});jsx3.util.Logger.Handler.registerHandlerClass(jsx3.ide.mapper.LogHandler.jsxclass);jsx3.Class.defineClass("jsx3.ide.mapper.Mapper",jsx3.gui.Block,null,function(c,l){var
ub={A:"undefined",Aa:"Document Type: Schema (",Ab:"CDATA",Ac:"[@name='",Ad:"message",Ae:"/*[@name='",Af:"      //call the service\n",Ag:"components/Rules/inbound_node.xml",Ah:" | ",B:"_jsx_sn_hash",Ba:"Outdated Schema Version: '",Bb:"E",Bc:"ancestor-or-self::*",Bd:"Adding        -Message: ",Be:":group | .//",Bf:"      objService.doCall();\n",Bg:"components/Rules/outbound_node.xml",Bh:"Sample ",C:"jsx_schema_log",Ca:"'. Must update to version, '",Cb:"D",Cc:"@",Cd:"soapstyle",Ce:":attributeGroup | .//",Cf:"    };\n\n",Cg:"method",Ch:" Message",D:"beforeEnd",Da:"'. The parse will continue, but may fail.",Db:"A",Dc:"[",Dd:"Response",De:":element",Df:"    service.on#2Success = function(objEvent) {\n",Dg:"jsx_schema_mapnode_method",Dh:"jsx_schema_mapnode_mappings_XML",E:"<pre class='jsxide_sysout'>",Ea:"Document Type: XML",Eb:"mappings",Ec:"]",Ed:"soaprpcns",Ee:":restriction",Ef:"      //var responseXML = objEvent.target.getInboundDocument();\n",Eg:"jsonp",Eh:"jsx_schema_mapnode_restrictions_XML",F:"</pre>",Fa:"The URL, ",Fb:"Script",Fc:"/",Fd:"Adding         -RPC Name: ",Fe:" type=",Ff:'      objEvent.target.getServer().alert("Success","The service call was successful.");\n',Fg:"repeat",Fh:"jsx_schema_mapnode_headers_XML",G:"",Ga:", does not return a valid XML document.",Gb:'setValue("',Gc:"WSDL (",Gd:":message[@name='",Ge:"restrictions",Gf:"    service.on#2Error = function(objEvent) {\n",Gg:"stubsrc",Gh:"jsx_schema_mapnode_mappings_XSL",H:"<pre class='jsxide_sysout jsxide_",Ha:"xsl/schema_support.xsl",Hb:'");',Hc:"W",Hd:"The mapper failed to fully parse one or more of the the 'parts' for the ",He:"value",Hf:"      var myStatus = objEvent.target.getRequest().getStatus();\n",Hg:"stubpath",Hh:"jsx_schema_mapnode_restrictions_XSL",I:"'>",Ia:/<\/?transformiix:result[^>]*>/gi,Ib:"xmlns:",Ic:"Adding     -WSDL",Id:" message.",Ie:"simple",If:'      objEvent.target.getServer().alert("Error","The service call failed. The HTTP Status code is: " + myStatus);\n',Ig:"onbeforesend",Ih:"jsx_schema_mapnode_headers_XSL",J:"_showtimeout",Ja:"Input Schema Profile:",Jb:"xmlns",Jc:":definitions/",Jd:":part",Je:"Converting     -Simple: ",Jf:"    service.on#2Invalid = function(objEvent) {\n",Jg:"onafterreceive",K:"namespace",Ka:"location",Kb:"tns",Kc:":service/",Kd:/[\s,;]/,Ke:"wsdl:arrayType",Kf:'      objEvent.target.getServer().alert("Invalid","The following message node just failed validation:\\n\\n" + objEvent.message);\n',Kg:"jsx1",L:"jsx3.IDE",La:"Parsing    -WSDL Import: '",Lb:"type",Lc:":port/",Ld:"@name='",Le:"arrayType",Lf:"  }\n",Lg:"jsx3",M:"At least one component file must be open for edit in order to use the XML Mapping Utility. You must either create a new component or open an existing component to provide the mapper with the appropriate server context.",Ma:"' has already been added. The mapper will only import a file once and does not give priority to subsequent, duplicate imports or includes.",Mb:"C",Mc:":address",Md:" or ",Me:/[\[]]/,Mf:");\n\n",Mg:"jsx4",N:"properties/Mapper.xml",Na:"import",Nb:"Validating -Checking Rules File: '",Nc:"Service (",Nd:"Defining       -A parts element was encountered that specifies a more-specific part list: ",Ne:"restriction",Nf:/#1/g,Ng:/([^\[]*)/,O:"events/Mapper.xml",Oa:"Import Failure. Could not resolve:\n",Ob:"'.",Oc:"S",Od:"element",Oe:"item",Of:/#3/g,Og:/\[index\(\)\s*=\s*(\d*)\]/g,P:"\n",Pa:"Recursing  -WSDL Import: ",Pb:"//record[@src]",Pc:"binding",Pd:":element[@name='",Pe:"Array",Pf:/#2/g,Pg:"<wsdl/>",Q:"testerid",Qa:"The WSDL import located at '",Qb:"No inputs (patter master) could be found for the CTF document, '",Qc:":binding[@name='",Qd:"Adding         -Part (Element): ",Qe:"extension",Qf:"Code Generator",Qg:"components/Profiles/show_wsdl_button.xml",R:/^<\?xml[^\?^]*\?>/,Ra:"' could not be parsed and added to the WSDL. Please make sure the document exists and that it is a valid WSDL import document.",Rb:"record",Rc:"Adding      -Service: ",Rd:"The schema element, '",Re:"[@targetNamespace='",Rf:"The generated JavaScript code has been copied to the clipboard.",Rg:"R",S:'<?xml version="1.0"?>\n',Sa:"schemaLocation",Sb:"Document Type: JSON",Sc:"Defining     -SOAP Style: ",Sd:"', could not be located. This is most commonly due to a schema or wsdl import that failed to load.",Se:"group",Sf:"Error: Path Unavailable",Sg:"xml/profiles/",T:":",Ta:"Parsing    -Schema Import: '",Tb:"jsx3.xml.Document",Tc:"The WSDL located at '",Td:" Warning        -The message part, '",Te:"_jsx_null_jsx_",Tf:"The JavaScript code cannot be generated until the rules file has been saved.",Tg:"none",U:"jsx_schema_rulestree",Ua:"' xmlns:wsdl='http://schemas.xmlsoap.org/wsdl/'",Ub:"//record[@jsxid='jsxwsdlroot']",Uc:"' does not contain a concrete address (i.e., '/wsdl:definitions/wsdl:service/wsdl:port/soap:address'). Abstract WSDLs as well as protocols such as FTP and HTTP are not supported by the mapper.",Ud:"', is used in a document literal context, but does not specify a concrete 'element' (it uses a 'type'). Validate the 'Target Namespace' field for this node using the Rule Node Profile editor.",Ue:"Adding         -",Uf:"jsx3.ide.mapper.ServiceTest",Ug:"jsx3.gui.TextBox",V:"_jsxuri",Va:"The Schema import located at '",Vb:"jsxnamespace",Vc:"' does not contain a valid reference to a supported version of SOAP. At this time only the following namespace(s) are supported: '",Vd:"Adding         -Part (Simple):",Ve:"Complex",Vf:"components/ServiceTest/service_test_dialog.xml",Vg:"jsx3.gui.Select",W:"components/Inputs/wsdl.xml",Wa:"' could not be parsed and added. Please make sure the document exists and that it is a valid WSDL import document.",Wb:"jsxversion",Wc:".//",Wd:":complexType[@name='",We:"Simple",Wf:"jsxdom",Wg:"_",X:"jsx_schema_sourcexml",Xa:"jsx_schema_rules_container",Xb:"jsx3.xml.Mapper",Xc:":*[@style='document']",Xd:"'] | ",Xe:": ",Xf:"DOM",Xg:"String",Y:"<not_applicable/>",Ya:"<div>parsing inputs, please wait...</div>",Yb:"1.0",Yc:"document",Yd:":simpleType[@name='",Ye:"maxOccurs",Yf:"F",Yg:"/data/*",Z:"jsx_schema_profile",Za:"Invalid WSDL",Zb:"//record[@soaparray]",Zc:"rpc",Zd:"Adding         -Part (RPC): ",Ze:"maxoccur",Zf:"//record[@jsxid='",Zg:"jsx_schema_mapnode_",_:"------------------\nXML Mapping Utility about to be reset...",_a:"The document, <b>",_b:"Validating -The XML document located at '",_c:":operation",_d:"jsxtext",_e:"minOccurs",_f:"record[",_g:"jsx3.io.browser",a:"jsx3.ide.mapping",aa:"FK",ab:"</b>, is not in a supported WSDL format (the mapper has identified its format as <i>",ac:"' can not be updated from its 3.1.x format, because it contains SOAP Arary mappings. Mapping rules created prior to version 3.2 are missing critical information found only in the source WSDL, requiring that the WSDL be reparsed.",ad:"POST",ae:"datatype",af:"minoccur",ag:"@jsxid!='",ah:"jsxdialog",b:"LogHandler",ba:"jsx_schema_mapper_body",bb:"</i>). Refer to the mapper log for more information.",bc:" Validating -The Rules file located at '",bd:"P",be:"ttns",bf:"nillable",bg:" and ",bh:"Choose Mapping Rules File",c:"[%l] - %t - %M",ca:"components/default.xml",cb:"x",cc:"' is outdated (older than v3.2) and was updated when opened. Once saved, this file will no longer be compatible with previous versions of the mapper.",cd:"Adding       -Operation: ",ce:"simpleType",cf:"true",cg:"rule_node",ch:"OK",d:"rules/_new.xml",da:"src",db:"//*[@jsxid='",dc:"jsx3.ide.mapper.Mapper",dd:"soapAction",de:"The type attribute, '",df:"form",dg:"jsxopen",dh:"jsx_schema_source",e:"xml",ea:"jsx_schema_binding",eb:"Operation (Transaction)",ec:"' is outdated (v3.0) and was updated when opened. Once saved, this file will no longer be compatible with previous versions of the mapper.",ed:'""',ee:"', references a type that cannot be found in the WSDL or any of its imported schemas.",ef:"qualifed",eg:"descendant-or-self::record",eh:"components/Profiles/",f:"wsdl",fa:"sourcedoc",fb:"T",fc:"' is not a valid Rules File and cannot be opened.",fd:"SOAPAction",fe:"The message part, '",ff:"unqualified",fg:"jsxselected",fh:"sample",g:"schema",ga:"//record[@opname='",gb:"1",gc:"' is invalid cannot be opened.",gd:"Failed to parse messages for the operation, ",ge:"' does not have a 'type' attribute which is required for rpc style WSDLs.",gf:"elementFormDefault",gg:"Cannot clone the root rule.",gh:"quicktest",h:"json",ha:"']",hb:"jsxtransaction",hc:"Validating -An instance of the jsx3.xml.Document class was expected.",hd:"Desc: ",he:"ancestor-or-self::*[attribute::",hf:"0",hg:"CDF Record",hh:"reparse",i:"jsx://xml/stubs/soap.xml",ia:/^\/|^(http[s]?:\/\/)/i,ib:"SCRIPT",ic:" Converting -The Legacy Rules file from CDF to CXF",id:"opname",ie:"]/attribute::",ig:"record[@type='A' or @type='E']",ih:"11",j:"/SOAP-ENV:Envelope/SOAP-ENV:Body",ja:"jsx_shema_input_types",jb:"headers",jc:"xsl/cdf_to_cxf.xsl",jd:":portType/",je:"attribute::",jf:"attributeFormDefault",jg:"CDF Attribute",jh:"12",k:"_jsx_",ka:"components/Inputs/",kb:"Content-Type",kc:" Converting -The Legacy Rules file from CXF (3.1.1HF2) to CXF (3.2.0)",kd:":operation[@name='",ke:" or @targetNamespace='",kf:"attribute",kg:".//restrictions/record[@name='enumeration']",kh:"13",l:"http://schemas.xmlsoap.org/wsdl/",la:".xml",lb:"text/xml",lc:"//record/@path",ld:"input",le:":schema[",lf:"//record[@type='P' or @type='T']",lg:"label",lh:"21",m:"http://www.w3.org/1999/XMLSchema",ma:"components/main.xml",mb:"jsxid",mc:"//record[@type='W']",md:"output",me:":import[@namespace and @schemaLocation]",mf:"includes",mg:'descendant::record[attribute::type="A" or attribute::type="E"]',mh:"22",n:"http://www.w3.org/2001/XMLSchema",na:"Resolving URL: ",nb:"Input (request)",nc:"path",nd:"fault",ne:"@targetNamespace='",nf:"jsx3.lang.Package.definePackage(\n",ng:"restrictions/record[attribute::name='enumeration']",nh:"23",o:"http://www.w3.org/1999/XMLSchema-instance",oa:"Parsing Document: ",ob:"I",oc:"/jsx1:definitions",od:"Fault (response variant)",oe:":element | .//",of:'  "eg.service",                //the full name of the package to create\n',og:'<data jsxid="jsxroot">\n',oh:"Reparse Selected Branch",p:"http://www.w3.org/2001/XMLSchema-instance",pa:"XPath",pb:"Output (response)",pc:"//record/@stubsrc",pd:"jsxparts",pe:":attribute",pf:"  function(service) {          //name the argument of this function\n\n",pg:'<record jsxid="',ph:"Reparsing this branch of the tree will remove any existing descendant rules from the selected item. Do you wish to proceed?",q:"http://schemas.xmlsoap.org/wsdl/soap/",qa:"Document Type: WSDL (",qb:"O",qc:"JSX/addins/mapping/",qd:":binding/",qe:":simpleType",qf:"    //call this method to begin the service call (eg.service.call#2();)\n",qg:'" jsxtext="',qh:"Reparse",r:"http://schemas.xmlsoap.org/soap/encoding/",ra:")",rb:"endpoint",rc:"jsx://",rd:"']/",re:/^(A|D)$/,rf:"    service.call#2 = function() {\n",rg:'"/>\n',rh:"Cancel",s:"http://schemas.xmlsoap.org/soap/envelope/",sa:"Validating -Schema Namespace: '",sb:"JSON file could not be converted into a valid XML document: ",sc:"//@jsxid",sd:":body",se:"ref",sf:'      var objService = #3.loadResource("#1");\n',sg:"</data>",sh:/></g,t:"proto/TextBox.xml",ta:"'",tb:"Parsing JSON file: ",tc:"xcvt",td:"use",te:":complexType | .//",tf:'      objService.setOperation("#2");\n\n',tg:"Invalid Target",th:">\n<",u:"proto/Select.xml",ua:"xmlns:xsd='",ub:"get",uc:"//record",ud:"Defining       -SOAP Use: ",ue:":choice | .//",uf:"      //subscribe\n",ug:"You must first select a <b>jsx3.gui.Block</b> Element in the <b>DOM</b> palette before auto-mapping.",uh:"components/ServiceTest/simulated_message.xml",v:"proto/CDF.xml",va:"' xmlns:wsdl='http://schemas.xmlsoap.org/wsdl/' xmlns:soap='http://schemas.xmlsoap.org/wsdl/soap/' xmlns:soapenc='http://schemas.xmlsoap.org/soap/encoding/'",vb:"//",vc:"ancestor::",vd:"parts",ve:":sequence | .//",vf:"      objService.subscribe(jsx3.net.Service.ON_SUCCESS, service.on#2Success);\n",vg:" ",vh:"jsxpreviewmarkup",w:"jsx_schema_loglevel",wa:"/wsdl:definitions/wsdl:import[@location]",wb:":schema/",wc:":schema",wd:"Defining       -SOAP Body Parts:  ",we:":all",wf:"      objService.subscribe(jsx3.net.Service.ON_ERROR, service.on#2Error);\n",wg:"xml/context_fields.xml",wh:"jsxpreviewmarkup_raw",x:"jsx_schema_log_title",xa:"/wsdl:definitions/wsdl:types",xb:":element[@name]",xc:"targetNamespace",xd:"Defining       -SOAP Namespace: ",xe:"attributeGroup",xf:"      objService.subscribe(jsx3.net.Service.ON_INVALID, service.on#2Invalid);\n\n",xg:"xsl/context_fields.xsl",xh:"\t",y:"Mapper Log - (",ya:"wsdl:types",yb:"Adding         -Global: ",yc:":schema[@targetNamespace='",yd:"encodingStyle",ye:":extension",yf:"      //PERFORMANCE ENHANCEMENT: uncomment the following line of code to use XSLT to convert the server response to CDF (refer to the API docs for jsx3.net.Service.compile for implementation details)\n",yg:"components/Rules/rule_node.xml",yh:"  ",z:" Level)",za:"//xsd:schema/xsd:import[@schemaLocation] | //xsd:schema/xsd:include[@schemaLocation]",zb:"name",zc:"']//",zd:"Defining       -SOAP Encoding Style: ",ze:"base",zf:"      //objService.compile();\n\n",zg:"components/Rules/operation_node.xml",zh:"jsxcaptionbar"};var
Fa=jsx3.ide.getPlugIn(ub.a);var
Qa=jsx3.util.Logger;c.KD=Qa.getLogger(c.jsxclass.getName());c.KD.setLevel(Qa.INFO);c.KD.setUseParentHandlers(false);var
Ra=new
jsx3.ide.mapper.LogHandler(c.jsxclass.getName()+ub.b);Ra.setFormat(ub.c);c.KD.addHandler(Ra);c.NEW_FILE_PATH=Fa.resolveURI(ub.d);c.TYPE_XML=ub.e;c.TYPE_WSDL=ub.f;c.TYPE_SCHEMA=ub.g;c.TYPE_JSON=ub.h;c.EXPAND_TO_DEPTH=1;c.SOAP_STUB_SRC=ub.i;c.SOAP_STUB_PATH=ub.j;c.delimiter=ub.k;c.IE={};c.IE.wsdl=ub.l;c.IE.schema1999=ub.m;c.IE.schema2001=ub.n;c.IE.schemaInstance1999=ub.o;c.IE.schemaInstance2001=ub.p;c.IE.soap=ub.q;c.IE.soapencoding=ub.r;c.IE.soapenvelope=ub.s;c.TEXTBOX_PROJECTION=Fa.resolveURI(ub.t);c.SELECT_PROJECTION=Fa.resolveURI(ub.u);c.CDF_PROJECTION=Fa.resolveURI(ub.v);l.init=function(){this.jsxsuper();};l._setLogLevel=function(e){var
za=this.getDescendantOfName(ub.w);za.selectItem(e,true);var
F=this.getDescendantOfName(ub.x);var
y=(za.getRecord(e)).jsxtext;F.setText(ub.y+y+ub.z,true);c.KD.setLevel(e);};l.getNSMap=function(e){if(!e)e=this.getSourceDocumentURL();var
Sa=this.getNSMaps();if(!Sa[e]){var
za=this.getSourceDocument(e);if(za){za.createNamespaceAxis();Sa[e]=za.getDeclaredNamespaces();}else return;}return Sa[e];};l.getNSMaps=function(){if(typeof this._jsx_sn_hash==ub.A)this._jsx_sn_hash={};return this._jsx_sn_hash;};l.resetNSMap=function(){delete this[ub.B];};l.getOut=function(){return this.getDescendantOfName(ub.C);};l.out=function(r){var
la=(this.getOut()).getRendered();jsx3.html.insertAdjacentHTML(la,ub.D,ub.E+r+ub.F);this.showLast();};l._out=function(i){var
w=ub.G;var
Z=i.length;for(var
zb=0;zb<Z;zb++)w=w+(ub.H+jsx3.util.Logger.levelAsString(i[zb][1])+ub.I+i[zb][0]+ub.F);var
ma=(this.getOut()).getRendered();jsx3.html.insertAdjacentHTML(ma,ub.D,w);this.showLast();};l.showLast=function(){if(this._showtimeout==null){var
J=this;this._showtimeout=window.setTimeout(function(){delete J[ub.J];var
na=(J.getOut()).getRendered();if(na&&na.lastChild)na.scrollTop=na.lastChild.offsetTop;},0);}};l._getManagedServer=function(){var
rb=jsx3.System.getAllApps();for(var
bb=0;bb<rb.length;bb++)if(rb[bb].getEnv(ub.K)!=ub.L&&rb[bb])return rb[bb];c.KD.error(ub.M,{instance:this});};l.getPropertiesPath=function(){return Fa.resolveURI(ub.N);};l.getModelEventsPath=function(){return Fa.resolveURI(ub.O);};l.getSupportedNamespaces=function(){var
wa=ub.G;for(var S in c.IE)wa=wa+(c.IE[S]+ub.P);return wa;};l.getEditor=function(){if(typeof this._editor==ub.A){if((z=this.getAncestorOfType(jsx3.gui.Dialog))==null){var
z={};z.setDirty=function(b){};z.getDirty=function(){return true;};z.reset=function(){};}this._editor=z;}return this._editor;};l.getTester=function(s){var
eb=s!=null?s.getServer():this.getServer();return eb.getJSXById(this.testerid);};l.setTesterId=function(n){if(n!=null){this.testerid=n;}else delete this[ub.Q];};l.getContent=function(){var
oa=this.getRulesXML()+ub.G;var
ia=ub.R;var
A=oa.search(ia)==0?ub.G:ub.S;return A+oa;};l.isSimpleNode=function(i,f){if(f&&f!=ub.G){var
Ka=f.split(ub.T);if(Ka.length==2){return this._isSimpleNode(i,Ka[0]);}else return typeof jsx3.net.Service.simpletypes[f]!=ub.A;}return false;};l._isSimpleNode=function(i,f){for(var
mb=(i.getAttributes()).iterator();mb.hasNext();){var
E=mb.next();if(E.getBaseName()==f&&E.getValue()==c.IE.schema2001)return true;}var
ta=i.getParent();return ta!=null?this._isSimpleNode(ta,f):false;};l.getBaseName=function(d){var
C=d.split(ub.T);if(C.length>1)d=C[1];return d;};l.getPrefix=function(e){var
lb=e.split(ub.T);return lb.length>1?lb[0]:null;};l.getRulesTree=function(){return this.getDescendantOfName(ub.U);};l.resetRulesTree=function(){var
N=this.getRulesTree();if(N){((this.getServer()).getCache()).setDocument(N.getXMLId(),(new
jsx3.xml.Document()).load(Fa.resolveURI(N.getXMLURL())));N.setValue(ub.G);N.repaint();}};l.resetEditorPane=function(){var
db=this.getEditorPane();delete db[ub.V];db.removeChildren();db.load(ub.W);};l.resetSourcePane=function(){var
B,V;if((B=this.getDescendantOfName(ub.X))!=null){B.setDisplay(jsx3.gui.Block.DISPLAYNONE,true);var
G=new
jsx3.xml.Document();G.loadXML(ub.Y);((this.getServer()).getCache()).setDocument(B.getXMLId(),G);}else if((V=this.getDescendantOfName(ub.Z))!=null){((V.getServer()).getCache()).clearById(V.getXMLId());V.repaintData();}};l.reset=function(){c.KD.trace(ub._,{instance:this});delete this[ub.aa];this.resetCacheData();(this.getOut()).setText(ub.G,true);this.resetRulesTree();this.resetSourceDocument();var
Va=this.getDescendantOfName(ub.ba);Va.removeChildren();Va.load(ub.ca,true);if(this.getTester())(this.getTester()).close();(this.getEditor()).onParse(0);};l.getSourceDocumentURL=function(r){if(r){var
Y;while(r!=null&&(Y=r.getAttribute(ub.da))==null)r=r.getParent();return Y;}return this.sourcedocurl;};l.setSourceDocumentURL=function(p){this.sourcedocurl=p;};l.getEditorPane=function(){return this.getDescendantOfName(ub.ea);};l.addSourceDocument=function(m,e){if(this.sourcedoc==null)this.sourcedoc={};this.sourcedoc[e]=m;this.setSourceDocumentURL(e);};l.getSourceDocument=function(b){if(!b)b=this.getSourceDocumentURL();if(this.sourcedoc!=null)return this.sourcedoc[b];};l.resetSourceDocument=function(){delete this[ub.fa];};l.getSchemaNS=function(){return this._schemans;};l.setSchemaNS=function(o){this._schemans=o;};l.getRulesXML=function(){return (this.getRulesTree()).getXML();};l.getRulesOperation=function(p){return (this.getRulesXML()).selectSingleNode(ub.ga+p+ub.ha);};l.isDescendant=function(b,q){if(q!=null){var
u=b.getParent();var
Oa=u.getRootNode();while(!u.equals(Oa)){if(u.equals(q))return true;u=u.getParent();}}return false;};l.isDescendantArray=function(n,a){for(var
rb=0;rb<a.length;rb++)if(this.isDescendant(n,a[rb]))return true;return false;};l.isAbsoluteURL=function(o){var
Ua=ub.ia;return o.search(Ua)==0;};l.setInputType=function(k){this._inputtype=k;};l.getInputType=function(){return this._inputtype;};l.toggleInputType=function(a){var
Bb=this.getDescendantOfName(ub.ja);Bb.removeChildren();Bb.load(ub.ka+a+ub.la,true);};l.loadRulesPane=function(){var
Ha=this.getDescendantOfName(ub.ba);Ha.removeChildren();Ha.load(ub.ma,true);};l.resolveSchemaVersion=function(j){return c.IE.schema2001;};l.openSourceDocument=function(s){this.fx={};var
ea=this._getManagedServer();if(!ea)return;c.KD.trace(ub.na+s,{instance:this});s=ea.resolveURI(s);c.KD.trace(ub.oa+s,{instance:this});var
ba=new
jsx3.xml.Document();ba.setSelectionLanguage(ub.pa);ba.load(s);var
db=new
jsx3.net.URI(s);if(!ba.hasError()){var
sa=ba.getRootNode();var
S=sa.getNamespaceURI();if(S==c.IE.wsdl){c.KD.trace(ub.qa+c.IE.wsdl+ub.ra,{instance:this});var
bb=this.resolveSchemaVersion(ba);c.KD.trace(ub.sa+bb+ub.ta,{instance:this});this.setSchemaNS(bb);ba.setSelectionNamespaces(ub.ua+bb+ub.va);var
ca=ba.selectNodes(ub.wa);for(var
Ha=ca.iterator();Ha.hasNext();){var
Ba=Ha.next();this.loadWSDLImports(db,ba,Ba,Ba);}var
W=ba.selectSingleNode(ub.xa);if(!W){var
w=(ba.getRootNode()).createNode(jsx3.xml.Entity.TYPEELEMENT,ub.ya,c.IE.wsdl);(ba.getRootNode()).appendChild(w);}ca=ba.selectNodes(ub.za);var
_=ba.selectSingleNode(ub.xa);for(var
Ha=ca.iterator();Ha.hasNext();){var
Ba=Ha.next();this.loadSchemaImports(db,ba,Ba,_);}this.setInputType(c.TYPE_WSDL);}else if(S==c.IE.schema2001||S==c.IE.schema1999){c.KD.trace(ub.Aa+S+ub.ra,{instance:this});if(S==c.IE.schema1999)c.KD.error(ub.Ba+c.IE.schema1999+ub.Ca+c.IE.schema2001+ub.Da,{instance:this});this.setSchemaNS(S);this.setInputType(c.TYPE_SCHEMA);ba.setSelectionNamespaces(ub.ua+S+ub.ta);var
ca=ba.selectNodes(ub.za);for(var
Ha=ca.iterator();Ha.hasNext();){var
Ba=Ha.next();this.loadSchemaImports(db,ba,Ba);}}else{c.KD.trace(ub.Ea,{instance:this});this.setInputType(c.TYPE_XML);}}else c.KD.error(ub.Fa+s+ub.Ga,{instance:this});if(c.KD.getLevel()==Qa.TRACE&&(this.getInputType()==c.TYPE_WSDL||this.getInputType()==c.TYPE_SCHEMA)){var
Za=Fa.resolveURI(ub.Ha);var
N=(jsx3.IDE.getCache()).getOrOpenDocument(Za,null,jsx3.xml.XslDocument.jsxclass);var
U=N.transform(ba);if(jsx3.CLASS_LOADER.SAF||jsx3.CLASS_LOADER.FX)U=U.replace(ub.Ia,ub.G);c.KD.trace(ub.Ja+U,{instance:this});}return ba;};l.loadWSDLImports=function(f,n,m,d){var
za=m.getAttribute(ub.Ka);if(!this.isAbsoluteURL(za))za=(f.resolve(za)).toString();if(this.fx[za]==1){c.KD.trace(ub.La+za+ub.Ma,{instance:this});}else{this.fx[za]=1;c.KD.trace(ub.La+za+ub.ta,{instance:this});var
H=new
jsx3.xml.Document();H.setSelectionLanguage(ub.pa);H.load(za);var
Ma=H.getError();if(Ma.code==0){f=new
jsx3.net.URI(za);if((H.getRootNode()).getNodeName()==ub.g){n.insertBefore(H.getRootNode(),d);}else{var
ca=(H.getRootNode()).getChildIterator();while(ca.hasNext()){var
qb=ca.next();if(qb.getNodeType()==jsx3.xml.Entity.TYPEELEMENT)if(qb.getBaseName()!=ub.Na){var
Ia=qb.cloneNode(true);if(Ia!=null&&Ia instanceof jsx3.xml.Entity){n.insertBefore(Ia,d);}else c.KD.error(ub.Oa+qb,{instance:this});}else{c.KD.trace(ub.Pa+qb,{instance:this});this.loadWSDLImports(f,n,qb,d);}}}}else c.KD.error(ub.Qa+za+ub.Ra,{instance:this});}};l.loadSchemaImports=function(k,a,g,q){var
Lb=g.getAttribute(ub.Ka)||g.getAttribute(ub.Sa);if(!this.isAbsoluteURL(Lb))Lb=(k.resolve(Lb)).toString();if(this.fx[Lb]==1){c.KD.trace(ub.Ta+Lb+ub.Ma,{instance:this});}else{this.fx[Lb]=1;c.KD.trace(ub.Ta+Lb+ub.ta,{instance:this});var
sa=new
jsx3.xml.Document();sa.setSelectionLanguage(ub.pa);sa.load(Lb);var
Wa=sa.getError();if(Wa.code==0){var
jb=this.resolveSchemaVersion(sa);sa.setSelectionNamespaces(ub.ua+jb+ub.Ua);var
qb=sa.selectNodes(ub.za);k=new
jsx3.net.URI(Lb);for(var
T=qb.iterator();T.hasNext();){var
Va=T.next();this.loadSchemaImports(k,a,Va,q);}if(q)q.appendChild(sa.getRootNode());else a.insertBefore(sa.getRootNode(),g);}else c.KD.error(ub.Va+Lb+ub.Wa,{instance:this});}};l.parseWSDL=function(d,k){this.loadRulesPane();(this.getDescendantOfName(ub.Xa)).showMask(ub.Ya);var
pb=this;window.setTimeout(function(){pb.parseWSDLDelay(d,k);},250);};l.parseWSDLDelay=function(e,j){var
Mb=this.openSourceDocument(e);if(this.getInputType()==c.TYPE_WSDL){this.resetRulesTree();this.setSourceDocumentURL(e);this.addSourceDocument(Mb,e);this.parseServices();this.onParse();}else (this.getServer()).alert(ub.Za,ub._a+jsx3.util.strTruncate(e,40,null,0.6666666666666666)+ub.ab+this.getInputType()+ub.bb);};l.parseDocuments=function(e,m){this.loadRulesPane();(this.getDescendantOfName(ub.Xa)).showMask(ub.Ya);var
Aa=this;window.setTimeout(function(){Aa.parseDocumentsDelay(e,m);},250);};l.parseJSON=function(s){this.loadRulesPane();(this.getDescendantOfName(ub.Xa)).showMask(ub.Ya);var
Hb=this;window.setTimeout(function(){Hb.parseJSONDelay(s);},250);};l.getKey=function(){var
zb=this.getRulesXML();do{var
I=ub.cb+parseInt(Math.random()*100000);var
Lb=zb.selectSingleNode(ub.db+I+ub.ha);}while(Lb!=null);return I;};l._buildTransactionTree=function(d){this.resetRulesTree();var
Ua={};Ua.jsxid=this.getKey();var
la=Ua.jsxid;Ua.jsxtext=ub.eb;Ua.type=ub.fb;Ua.jsxopen=ub.gb;Ua.opname=ub.hb;if(this.getInputType()==c.TYPE_JSON){Ua.method=ub.ib;Ua.jsonp=ub.gb;}var
B=(this.getRulesTree()).insertRecord(Ua,null,false);var
La=[];if(d){var
x=this.getComplexRule(B,ub.jb);(this.getRulesTree()).insertRecord({jsxid:this.getKey(),name:ub.kb,value:ub.lb},x.getAttribute(ub.mb),false);var
Ua={};Ua.jsxid=this.getKey();Ua.jsxtext=ub.nb;Ua.type=ub.ob;Ua.jsxopen=ub.gb;La.push((this.getRulesTree()).insertRecord(Ua,la,false));}var
Ua={};Ua.jsxid=this.getKey();Ua.jsxtext=ub.pb;Ua.type=ub.qb;Ua.jsxopen=ub.gb;La.push((this.getRulesTree()).insertRecord(Ua,la,false));return La;};l.parseJSONDelay=function(a){this.setInputType(c.TYPE_JSON);var
ab=(this._buildTransactionTree())[0];if(a){var
fa=this._openJSON(a);if(fa){var
Ua;try{Ua=jsx3.net.Service.JSON2XML(fa);}catch(Kb){c.KD.error((jsx3.NativeError.wrap(Kb)).getMessage(),{instance:this});}if(Ua){this.addSourceDocument(Ua,a);ab.setAttribute(ub.da,a);(ab.getParent()).setAttribute(ub.rb,a);this.parseXML(Ua,ab,false,a);}else c.KD.error(ub.sb+arguments[i],{instance:this});}}this.onParse();};l._openJSON=function(r){var
_a=this._getManagedServer();if(!_a)return;c.KD.trace(ub.na+r,{instance:this});r=_a.resolveURI(r);c.KD.trace(ub.tb+r,{instance:this});var
S=jsx3.net.Request.open(ub.ub,r,false);S.send();var
ya=S.getResponseText();return jsx3.util.strEmpty(ya)?null:ya;};l.parseDocumentsDelay=function(j,r){var
C=this._buildTransactionTree(true);for(var
S=0;S<2;S++)if(arguments[S]){var
v=this.openSourceDocument(arguments[S]);if(this.getInputType()){this.addSourceDocument(v,arguments[S]);C[S].setAttribute(ub.da,arguments[S]);if(this.getInputType()==c.TYPE_SCHEMA){this.parseGlobals(v,C[S],arguments[S]);}else if(this.getInputType()==c.TYPE_XML)this.parseXML(v,C[S],S==0,arguments[S]);}}this.onParse();};l.parseGlobals=function(r,o,f){var
oa=this.getNSMap(f);var
T=r.selectNodes(ub.vb+oa[this.getSchemaNS()]+ub.wb+oa[this.getSchemaNS()]+ub.xb,oa);var
X=o.getAttribute(ub.mb);for(var
Lb=T.iterator();Lb.hasNext();){var
y=Lb.next();c.KD.trace(ub.yb+y.getAttribute(ub.zb),{instance:this});this.parseComplex(X,y,true);}};l.parseXML=function(f,h,r){this.parseXMLRecurse(f.getRootNode(),this.getRulesTree(),h.getAttribute(ub.mb),0,r);};l.parseXMLRecurse=function(f,k,b,r,g){var
Eb=f.getNodeType();var
Nb={};Nb.jsxtext=(Eb==jsx3.xml.Entity.TYPECDATA?ub.Ab:f.getNodeName())+ub.G;if(Nb.jsxtext.indexOf(ub.T)>0)Nb.jsxtext=this.getBaseName(Nb.jsxtext);Nb.tns=f.getNamespaceURI();Nb.jsxid=this.getKey();Nb.type=Eb==jsx3.xml.Entity.TYPEELEMENT?ub.Bb:Eb==jsx3.xml.Entity.TYPECDATA?ub.Cb:ub.Db;if(Eb==jsx3.xml.Entity.TYPEELEMENT)Nb.path=this.getMyPath(f);if(r<c.EXPAND_TO_DEPTH)Nb.jsxopen=1;var
La=k.insertRecord(Nb,b,false);if(g&&Eb!=jsx3.xml.Entity.TYPEELEMENT)this.bindComplexRule(k,La,ub.Eb,ub.Fb,ub.Gb+jsx3.util.strEscapeHTML(f.getValue())+ub.Hb);if(f.getNodeType()==jsx3.xml.Entity.TYPEELEMENT){for(var
pb=(f.getAttributes()).iterator();pb.hasNext();){var
Ha=pb.next();if((Ha.getNodeName()).indexOf(ub.Ib)==0||Ha.getNamespaceURI()==jsx3.xml.Document.SEARCHABLE_NAMESPACE){}else if((Ha.getNodeName()).indexOf(ub.Jb)==0){if(f.getPrefix()==ub.G)La.setAttribute(ub.Kb,Ha.getValue());}else this.parseXMLRecurse(Ha,k,Nb.jsxid,r+1,g);}var
da=false;for(var
pb=f.getChildIterator();pb.hasNext();){var
gb=pb.next();if(gb.getNodeType()==jsx3.xml.Entity.TYPEELEMENT){this.parseXMLRecurse(gb,k,Nb.jsxid,r+1,g);}else if(gb.getNodeType()==jsx3.xml.Entity.TYPETEXT){da=true;}else if(gb.getNodeType()==jsx3.xml.Entity.TYPECDATA)this.parseXMLRecurse(gb,k,Nb.jsxid,r+1,g);}if(!da||Eb==jsx3.xml.Entity.TYPECDATA)La.setAttribute(ub.Lb,ub.Mb);}};l.getComplexRule=function(r,m){var
na=r.selectSingleNode(m);if(!na){var
na=r.createNode(jsx3.xml.Entity.TYPEELEMENT,m);na.setAttribute(ub.mb,this.getKey());r.appendChild(na);}return na;};l.bindComplexRule=function(j,i,s,p,r,o){var
Sa=this.getComplexRule(i,s);return j.insertRecord({jsxid:o?o:this.getKey(),name:p,value:r},Sa.getAttribute(ub.mb),false);};l.onOpen=function(j){this.resetCacheData();this.loadRulesPane();(this.getDescendantOfName(ub.Xa)).showMask(ub.Ya);if(j!=c.NEW_FILE_PATH){var
G=this;window.setTimeout(function(){G.onOpenDelay(j);},250);}else this.reset();};l.onOpenDelay=function(a){var
na=(((this.getRulesTree()).getServer()).getCache()).openDocument(a);na.setSelectionLanguage(ub.pa);c.KD.trace(ub.Nb+a+ub.Ob,{instance:this});var
na=this.validateOnOpen(na);if(na)if(a!=c.NEW_FILE_PATH){var
Hb=na.selectNodes(ub.Pb);if(Hb.size()==0){c.KD.trace(ub.Qb+a+ub.Ob,{instance:this});}else for(var
Kb=Hb.iterator();Kb.hasNext();){var
ja=Kb.next();var
va=ja.getAttribute(ub.da);var
y=ja.selectSingleNode(ub.Rb);if(y&&y.getAttribute(ub.Kb)==jsx3.net.Service.json_namespace){var
cb=this._openJSON(va);if(cb){c.KD.trace(ub.Sb,{instance:this});try{var
ab=jsx3.net.Service.JSON2XML(cb);}catch(Nb){c.KD.error((jsx3.NativeError.wrap(Nb)).getMessage(),{instance:this});}if(ab){this.setInputType(c.TYPE_JSON);this.addSourceDocument(ab,va);}else c.KD.error(ub.sb+va,{instance:this});}}else this.addSourceDocument(this.openSourceDocument(va),va);}(((this.getRulesTree()).getServer()).getCache()).setDocument((this.getRulesTree()).getXMLId(),na);this.onParse();}};l.validateOnOpen=function(r){if(r&&r.getClass&&r.getClass()==ub.Tb){if(!r.hasError()){var
bb=r.selectSingleNode(ub.Ub);if(bb||(r.getRootNode()).getAttribute(ub.Vb)){var
rb=(r.getRootNode()).getAttribute(ub.Vb);var
Va=(r.getRootNode()).getAttribute(ub.Wb);if(rb==ub.Xb&&Va==ub.Yb){if(r.selectSingleNode(ub.Zb)){c.KD.error(ub._b+(this.getEditor()).getFilePath()+ub.ac,{instance:this});return false;}else{c.KD.warn(ub.bc+(this.getEditor()).getFilePath()+ub.cc,{instance:this});r=this.convert31Rule(r);(this.getEditor()).setDirty(true);}}else if(!(rb==ub.dc&&Va==ub.Yb)){c.KD.warn(ub.bc+(this.getEditor()).getFilePath()+ub.ec,{instance:this});r=this.convert30Rule(r);if(r&&!r.hasError()){if(r.selectSingleNode(ub.Zb)){c.KD.error(ub._b+(this.getEditor()).getFilePath()+ub.ac,{instance:this});return false;}else{r=this.convert31Rule(r);(this.getEditor()).setDirty(true);}}else return false;}return r;}else c.KD.error(ub._b+(this.getEditor()).getFilePath()+ub.fc,{instance:this});}else c.KD.error(ub._b+(this.getEditor()).getFilePath()+ub.gc,{instance:this});}else c.KD.error(ub.hc,{instance:this});(this.getEditor()).onParse(0);return false;};l.convert30Rule=function(s){c.KD.info(ub.ic,{instance:this});var
V=Fa.resolveURI(ub.jc);var
tb=(jsx3.IDE.getCache()).getOrOpenDocument(V,null,jsx3.xml.XslDocument.jsxclass);return tb.transformToObject(s);};l.convert31Rule=function(d){c.KD.info(ub.kc,{instance:this});var
Ka=d.selectNodes(ub.lc);for(var
Db=Ka.iterator();Db.hasNext();){var
Ua=Db.next();Ua.setValue(c.resolveElementPrefixes(Ua.getValue()));}var
Ea=d.selectSingleNode(ub.mc);if(Ea)Ea.setAttribute(ub.nc,ub.oc);(d.getRootNode()).setAttribute(ub.Vb,ub.dc);var
Ka=d.selectNodes(ub.pc);for(var
Db=Ka.iterator();Db.hasNext();){var
Ua=Db.next();var
xa=Ua.getValue();if(xa.indexOf(ub.qc)==0)Ua.setValue(xa.replace(ub.qc,ub.rc));}var
Ka=d.selectNodes(ub.sc);for(var
Db=Ka.iterator();Db.hasNext();)(Db.next()).setValue(ub.tc+Db);return d;};l.onParse=function(){(this.getDescendantOfName(ub.Xa)).hideMask();var
Wa=this.getRulesTree();Wa.repaint();Wa.setValue(((Wa.getXML()).selectSingleNode(ub.uc)).getAttribute(ub.mb));this.onRuleSelect();(this.getEditor()).onParse(1);if(this.getTester())(this.getTester()).close();};l.getMyPath=function(e){if(e){var
oa=this.getNSMap();var
Cb=e.getBaseName();if(Cb!=ub.g&&e.getNamespaceURI()==this.getSchemaNS()){var
ca=e.getAttribute(ub.zb);if(ca){var
gb=e.selectSingleNode(ub.vc+oa[this.getSchemaNS()]+ub.wc,oa);if(gb){var
vb=gb.getAttribute(ub.xc);if(!jsx3.util.strEmpty(vb)){var
J=ub.vb+oa[this.getSchemaNS()]+ub.yc+vb+ub.zc+oa[this.getSchemaNS()]+ub.T+Cb+ub.Ac+ca+ub.ha;var
Ca=this.getSourceDocument();var
Ya=Ca.selectNodes(J,oa);if(Ya.size()==1)return J;}}}}var
Ya=e.selectNodes(ub.Bc);var
fb=Ya.size();var
eb=ub.G;for(var
O=0;O<fb;O++){var
Gb=Ya.get(O);var
A=Gb.getNamespaceURI();var
Cb=Gb.getBaseName();if(Gb.getNodeType()==jsx3.xml.Entity.TYPEATTRIBUTE)Cb=ub.Cc+Cb;var
db=(A!=ub.G?oa[A]+ub.T:ub.G)+Cb;var
La=ub.G;if(O>0&&Gb.getNodeType()==jsx3.xml.Entity.TYPEELEMENT){var
mb=(Ya.get(O-1)).selectNodes(db,oa);var
Va=mb.size();for(var
Lb=1;Lb<Va;Lb++)if((mb.get(Lb)).equals(Gb))La=ub.Dc+(Lb+1)+ub.Ec;}eb=eb+ub.Fc+db+La;}return eb;}return ub.G;};l.parseServices=function(){var
E=this.getSourceDocumentURL();var
ob=this.getSourceDocument();var
Ea=this.getNSMap();var
_a={};var
H=this.getKey();_a.jsxid=H;_a.jsxtext=ub.Gc+E+ub.ra;_a.jsxopen=ub.gb;_a.src=E;_a.type=ub.Hc;_a.path=this.getMyPath(ob.getRootNode());c.KD.trace(ub.Ic,{instance:this});(this.getRulesTree()).insertRecord(_a,null,false);if(Ea[c.IE.soap]){var
ya=ub.Fc+Ea[c.IE.wsdl]+ub.Jc+Ea[c.IE.wsdl]+ub.Kc+Ea[c.IE.wsdl]+ub.Lc+Ea[c.IE.soap]+ub.Mc;var
Ja=ob.selectNodes(ya,Ea);if(Ja.size()>0){for(var
Jb=Ja.iterator();Jb.hasNext();){var
za=Jb.next();var
Ib=za.getAttribute(ub.Ka);var
_a={};_a.jsxid=this.getKey();_a.jsxtext=ub.Nc+jsx3.util.strTruncate(Ib,40,null,0.6666666666666666)+ub.ra;_a.jsxopen=ub.gb;_a.path=this.getMyPath(za);_a.type=ub.Oc;var
Za=this.getBaseName((za.getParent()).getAttribute(ub.Pc));var
ya=ub.Fc+Ea[c.IE.wsdl]+ub.Jc+Ea[c.IE.wsdl]+ub.Qc+Za+ub.ha;var
ta=ob.selectSingleNode(ya,Ea);_a.soapstyle=this.getBindingStyle(ta);c.KD.trace(ub.Rc+Ib,{instance:this});(this.getRulesTree()).insertRecord(_a,H,false);c.KD.trace(ub.Sc+_a.soapstyle,{instance:this});this.parseOperations(ta,_a.jsxid,Ib);}return true;}else c.KD.error(ub.Tc+E+ub.Uc,{instance:this});}else c.KD.error(ub.Tc+E+ub.Vc+c.IE.soap+ub.Ob,{instance:this});(this.getRulesTree()).setValue(H);(this.getRulesTree()).repaint();return false;};l.getBindingStyle=function(i){var
x=this.getNSMap();var
fa=ub.Wc+x[c.IE.soap]+ub.Xc;return i.selectSingleNode(fa,x)!=null?ub.Yc:ub.Zc;};l.parseOperations=function(j,q,k){var
L=this.getNSMap();var
Cb=j.selectNodes(L[c.IE.wsdl]+ub._c,L);for(var
qa=Cb.iterator();qa.hasNext();){var
mb=qa.next();var
I=mb.getAttribute(ub.zb);var
xa={};xa.jsxid=this.getKey();xa.jsxtext=I;xa.jsxopen=ub.gb;xa.opname=I;xa.endpoint=k;xa.method=ub.ad;xa.type=ub.bd;xa.path=this.getMyPath(mb);c.KD.trace(ub.cd+I,{instance:this});var
ta=(this.getRulesTree()).insertRecord(xa,q,false);var
t=this.getComplexRule(ta,ub.jb);var
nb=mb.selectSingleNode(L[c.IE.soap]+ub._c,L);var
ua=nb?nb.getAttribute(ub.dd):ub.G;if(ua==ub.G)ua=ub.ed;var
xa={};xa.jsxid=this.getKey();xa.name=ub.fd;xa.value=ua;(this.getRulesTree()).insertRecord(xa,t.getAttribute(ub.mb),false);(this.getRulesTree()).insertRecord({jsxid:this.getKey(),name:ub.kb,value:ub.lb},t.getAttribute(ub.mb),false);try{this.parseMessages(ta,L);}catch(Kb){c.KD.error(ub.gd+mb.getAttribute(ub.zb),{instance:this});var
Jb=jsx3.lang.NativeError.wrap(Kb);c.KD.error(ub.hd+Jb.getMessage(),{instance:this});}}};l.parseMessages=function(q,g){var
Wa=q.getAttribute(ub.id);var
Fb=q.getAttribute(ub.mb);var
Ja=ub.Fc+g[c.IE.wsdl]+ub.Jc+g[c.IE.wsdl]+ub.jd+g[c.IE.wsdl]+ub.kd+Wa+ub.ha;var
S=(this.getSourceDocument()).selectSingleNode(Ja,g);this.parseMessage(ub.ld,Wa,Fb,S,ub.nb,g);this.parseMessage(ub.md,Wa,Fb,S,ub.pb,g);this.parseMessage(ub.nd,Wa,Fb,S,ub.od,g);};l.setMessageEncoding=function(p,f,k,b){delete this[ub.pd];var
K=ub.Fc+b[c.IE.wsdl]+ub.Jc+b[c.IE.wsdl]+ub.qd+b[c.IE.wsdl]+ub.kd+k+ub.rd+b[c.IE.wsdl]+ub.T+f+ub.Fc+b[c.IE.soap]+ub.sd;var
ca,Nb,F,kb,va;if(ca=(this.getSourceDocument()).selectSingleNode(K,b)){if(Nb=ca.getAttribute(ub.td)){c.KD.trace(ub.ud+Nb,{instance:this});p.soapuse=Nb;}if(F=ca.getAttribute(ub.vd)){c.KD.trace(ub.wd+F,{instance:this});this.jsxparts=F;}if(kb=ca.getAttribute(ub.K)){c.KD.trace(ub.xd+kb,{instance:this});p.soaprpcns=kb;}if(va=ca.getAttribute(ub.yd)){c.KD.trace(ub.zd+va,{instance:this});p.soapencstyle=va;}}};l.getMEPElement=function(g,f,n){var
qa;if((qa=g.selectSingleNode(n[c.IE.wsdl]+ub.T+f,n))!=null)return this.getBaseName(qa.getAttribute(ub.Ad));};l.parseMessage=function(k,p,i,e,a,s){var
R=this.getSourceDocument();var
ca=this.getRulesTree();var
Pa;if((Pa=this.getMEPElement(e,k,s))!=null){c.KD.trace(ub.Bd+k,{instance:this});var
la={};la.jsxid=this.getKey();la.jsxtext=a;la.type=(k.substring(0,1)).toUpperCase();if(k==ub.ld){la.stubsrc=c.SOAP_STUB_SRC;la.stubpath=c.SOAP_STUB_PATH;}this.setMessageEncoding(la,k,p,s);var
Gb=ca.insertRecord(la,i,false);if(((this.getRulesOperation(p)).getParent()).getAttribute(ub.Cd)==ub.Zc){var
la={};la.jsxtext=p+(k==ub.md?ub.Dd:ub.G);la.jsxid=this.getKey();la.type=ub.Mb;la.tns=Gb.getAttribute(ub.Ed);c.KD.trace(ub.Fd+la.jsxtext,{instance:this});var
Gb=ca.insertRecord(la,Gb.getAttribute(ub.mb),false);var
Ua=true;}else var
Ua=false;var
C=ub.Fc+s[c.IE.wsdl]+ub.Jc+s[c.IE.wsdl]+ub.Gd+Pa+ub.ha;var
rb=R.selectSingleNode(C,s);if(rb)Gb.setAttribute(ub.nc,this.getMyPath(rb));try{this.parseParts(rb,la.jsxid,Ua,s);}catch(Kb){c.KD.error(ub.Hd+k+ub.Id,{instance:this});var
Na=jsx3.lang.NativeError.wrap(Kb);c.KD.error(ub.hd+Na.getMessage(),{instance:this});}}};l.parseParts=function(g,a,k,b){var
Va=this.getSourceDocument();var
La=this.getRulesTree();var
nb=b[c.IE.wsdl]+ub.Jd;if(this.jsxparts!=null&&typeof this.jsxparts!=ub.A){var
na=this.jsxparts.split(ub.Kd);nb=nb+ub.Dc;var
I=ub.G;for(var
va=0;va<na.length;va++){nb=nb+(I+ub.Ld+na[va]+ub.ta);I=ub.Md;}nb=nb+ub.Ec;c.KD.trace(ub.Nd+nb,{instance:this});}var
na=g.selectNodes(nb,b);for(var
va=na.iterator();va.hasNext();){var
R=va.next();var
gb=R.getAttribute(ub.Lb);var
Ib;if((Ib=R.getAttribute(ub.Od))!=null&&Ib!=ub.G&&!k||jsx3.util.strEmpty(gb)&&!jsx3.util.strEmpty(Ib)){var
_=this.getTargetedSchemaQuery(Ib,Va,b);var
B=ub.vb+b[this.getSchemaNS()]+ub.wc+_+ub.Fc+b[this.getSchemaNS()]+ub.Pd+this.getBaseName(Ib)+ub.ha;var
O=Va.selectSingleNode(B,b);if(O!=null){c.KD.trace(ub.Qd+Ib,{instance:this});var
ab=this.parseComplex(a,O,true);}else c.KD.error(ub.Rd+Ib+ub.Sd,{instance:this});}else if(!jsx3.util.strEmpty(gb)){if(this.isSimpleNode(R,gb)){var
Gb={};Gb.jsxtext=R.getAttribute(ub.zb);Gb.jsxid=this.getKey();Gb.type=ub.Bb;Gb.datatype=this.getBaseName(gb);Gb.simple=ub.gb;Gb.path=this.getMyPath(R);if(!k)c.KD.warn(ub.Td+Gb.jsxtext+ub.Ud,{instance:this});c.KD.trace(ub.Vd+Gb.jsxtext,{instance:this});La.insertRecord(Gb,a,false);}else{var
bb=this.getTargetedSchemaQuery(gb,Va,b);var
B=ub.vb+b[this.getSchemaNS()]+ub.wc+bb+ub.Fc+b[this.getSchemaNS()]+ub.Wd+this.getBaseName(gb)+ub.Xd+ub.vb+b[this.getSchemaNS()]+ub.wc+bb+ub.Fc+b[this.getSchemaNS()]+ub.Yd+this.getBaseName(gb)+ub.ha;var
O=Va.selectSingleNode(B,b);if(O!=null){c.KD.trace(ub.Zd+gb,{instance:this});var
ab=this.parseComplex(a,O,true);var
ka;if((ka=La.getRecordNode(ab))!=null){ka.setAttribute(ub._d,R.getAttribute(ub.zb));ka.setAttribute(ub.ae,this.getBaseName(gb));ka.setAttribute(ub.be,this.getTargetURI(gb,Va,b));if(O.getBaseName()==ub.ce)this.parseSimple(ab,O,false,false);}}else c.KD.error(ub.de+gb+ub.ee,{instance:this});}}else c.KD.error(ub.fe+R.getAttribute(ub.zb)+ub.ge,{instance:this});}};l.getTargetedSchemaQuery=function(b,s,o){var
Oa=b.split(ub.T);var
Lb=ub.G;if(Oa.length>1){var
Va=ub.he+o[jsx3.xml.Document.SEARCHABLE_NAMESPACE]+ub.T+Oa[0]+ub.ie+o[jsx3.xml.Document.SEARCHABLE_NAMESPACE]+ub.T+Oa[0];var
Ha=s.selectNodes(Va,o);if(Ha.size()>0){var
I=(Ha.get(Ha.size()-1)).getValue();Lb=ub.je+o[jsx3.xml.Document.SEARCHABLE_NAMESPACE]+ub.T+Oa[0]+ub.ke+I+ub.ta;var
Jb=ub.vb+o[this.getSchemaNS()]+ub.le+Lb+ub.Ec;var
K=s.selectSingleNode(Jb,o);if(K){var
Pa=K.selectNodes(o[this.getSchemaNS()]+ub.me,o);for(var
ca=Pa.iterator();ca.hasNext();)Lb=Lb+ub.Md+ub.ne+(ca.next()).getAttribute(ub.K)+ub.ta;}Lb=ub.Dc+Lb+ub.Ec;}}return Lb;};l.getTargetURI=function(g,k,e){var
rb=g.split(ub.T);if(rb.length>1){var
Pa=ub.he+e[jsx3.xml.Document.SEARCHABLE_NAMESPACE]+ub.T+rb[0]+ub.ie+e[jsx3.xml.Document.SEARCHABLE_NAMESPACE]+ub.T+rb[0];var
U=k.selectNodes(Pa,e);if(U.size()>0)return (U.get(U.size()-1)).getValue();}else{var
Pa=ub.vc+e[this.getSchemaNS()]+ub.wc;var
U=k.selectNodes(Pa,e);if(U.size()>0)return (U.get(U.size()-1)).getAttribute(ub.xc);}return ub.G;};l.findParsableObjects=function(p,k,h,m,n,q,e){var
ja=[];var
Sa=this.getNSMap();var
Db=h.selectNodes(m,Sa);var
wa=null;for(var
jb=Db.iterator();jb.hasNext();){var
Ia=jb.next();if(!q)ja.push(Ia);if(!this.isDescendant(Ia,wa)&&(e==null||e!=null&&!this.isDescendantArray(Ia,e))){var
Ja=this.parseComplex(n,Ia,null,true,q);if(Ia.getAttribute(ub.Lb)==null&&Ia.selectSingleNode(ub.Wc+Sa[this.getSchemaNS()]+ub.oe+Sa[this.getSchemaNS()]+ub.pe,Sa)==null)if(Ia.selectSingleNode(ub.Wc+Sa[this.getSchemaNS()]+ub.qe,Sa)!=null)this.parseSimple(Ja,Ia,q,false);wa=Ia;}}if(wa!=null)p.redrawRecord(n,jsx3.xml.CDF.UPDATE);if(ja.length>0)return ja;};l.doDrill=function(k,j,m,b,e){if(j)if(e||b&&(b.selectNodes(ub.Rb)).size()==0&&!ub.re.test(b.getAttribute(ub.Lb)+ub.G)){var
O=this.getSourceDocument(this.getSourceDocumentURL(b));var
Ta=this.getNSMap();var
wb=b.getAttribute(ub.nc);e=!e?O.selectSingleNode(wb,Ta):e;if(!e)return;var
jb=e.getAttribute(ub.Lb);(this.getEditor()).setDirty(true);if(jb!=null&&jb!=ub.G&&this.isSimpleNode(e,jb)){this.parseSimple(k,e);return;}else if(jb!=null&&jb!=ub.G){var
Ia=this.getTargetedSchemaQuery(jb,e,Ta);var
qb=ub.vb+Ta[this.getSchemaNS()]+ub.wc+Ia+ub.vb+Ta[this.getSchemaNS()]+ub.Wd+this.getBaseName(jb)+ub.ha;e=O.selectSingleNode(qb,Ta);if(e==null){e=O.selectSingleNode(ub.vb+Ta[this.getSchemaNS()]+ub.wc+Ia+ub.vb+Ta[this.getSchemaNS()]+ub.Yd+this.getBaseName(jb)+ub.ha,Ta);if(e)this.parseSimple(k,e);return;}}else if(b.getAttribute(ub.se)!=null){var
Ca=e.selectSingleNode(ub.Wc+Ta[this.getSchemaNS()]+ub.te+Ta[this.getSchemaNS()]+ub.ue+Ta[this.getSchemaNS()]+ub.ve+Ta[this.getSchemaNS()]+ub.we,Ta);if(Ca==null&&e.getBaseName()!=ub.xe){this.parseSimple(k,e);return;}}else if(e.getBaseName()==ub.ce){this.parseSimple(k,e);return;}var
N=e.selectSingleNode(ub.Wc+Ta[this.getSchemaNS()]+ub.ye,Ta);if(N!=null){jb=N.getAttribute(ub.ze);if(jb!=null&&jb!=ub.G&&!this.isSimpleNode(N,jb)){var
Ia=this.getTargetedSchemaQuery(jb,N,Ta);N=N.selectSingleNode(ub.vb+Ta[this.getSchemaNS()]+ub.wc+Ia+ub.Ae+this.getBaseName(jb)+ub.ha,Ta);if(N!=null)this.doDrill(k,true,m,b,N);}}var
Ba=ub.Wc+Ta[this.getSchemaNS()]+ub.Be+Ta[this.getSchemaNS()]+ub.Ce+Ta[this.getSchemaNS()]+ub.De;var
ca=this.findParsableObjects(m,O,e,Ba,k,false);Ba=ub.Wc+Ta[this.getSchemaNS()]+ub.pe;this.findParsableObjects(m,O,e,Ba,k,true,ca);}};l.parseSimple=function(r,d,n,b){var
Ka=(this.getRulesTree()).getRecordNode(r);var
w=this.getNSMap();if((ha=d.selectSingleNode(ub.Wc+w[this.getSchemaNS()]+ub.Ee,w))!=null)if((Ua=ha.getAttribute(ub.ze))!=null&&Ua!=ub.G){if(!this.isSimpleNode(d,Ua)){var
ba=this.getTargetedSchemaQuery(Ua,d,w);var
zb=d.selectSingleNode(ub.vb+w[this.getSchemaNS()]+ub.wc+ba+ub.vb+w[this.getSchemaNS()]+ub.Yd+this.getBaseName(Ua)+ub.ha,w);if(zb){var
ha=zb.selectSingleNode(ub.Wc+w[this.getSchemaNS()]+ub.Ee,w);if(ha){var
Ua=ha.getAttribute(ub.ze);if(Ua==null||Ua==ub.G)return;}else return;}else return;}if(this.isSimpleNode(d,Ua)){var
hb=Ka.getAttribute(ub._d);var
S=hb.indexOf(ub.Fe);if(S>-1)hb=hb.substring(0,S);var
Nb=this.getComplexRule(Ka,ub.Ge);var
Ja=Nb.getAttribute(ub.mb);var
Ib=this.getRulesTree();var
va=ha.getChildIterator();if(va.hasNext()>0){b=true;while(va.hasNext()){var
Ia=va.next();var
ab={};ab.jsxid=this.getKey();ab.name=Ia.getBaseName();ab.value=Ia.getAttribute(ub.He);Ib.insertRecord(ab,Ja,false);}}var
Z;if((Z=Ka.getAttribute(ub.ae))==null||Z==ub.G)Ka.setAttribute(ub.ae,Ua);Ka.setAttribute(ub._d,hb);}else return;}else return;Ka.setAttribute(ub.Lb,n?ub.Db:ub.Bb);var
t=Ka.getAttribute(ub.ae);if(t&&ha&&this.isSimpleNode(ha,t)){Ka.setAttribute(ub.Ie,ub.gb);Ka.setAttribute(ub.ae,this.getBaseName(t));}Ka.setAttribute(ub.nc,this.getMyPath(d));this.setFormDefaults(Ka,d);c.KD.trace(ub.Je+Ka.getAttribute(ub._d),{instance:this});this.readMappings(this.getRulesTree(),Ka,ub.Ge);if(b!==false)(this.getRulesTree()).redrawRecord(r,jsx3.xml.CDF.UPDATE);};l.getSoapArrayType=function(h){var
Bb=h.getAttribute(ub.Ke);for(var
Sa=(h.getAttributes()).iterator();Sa.hasNext();){var
Ab=Sa.next();if(Ab.getBaseName()==ub.Le)return Ab.getValue();}return Bb;};l.parseSoapArray=function(i,k,m){var
u=this.getNSMap();var
ha=this.getTargetedSchemaQuery(i,m,u);var
M=i;var
ca=i.split(ub.T);if(ca.length==2){var
Eb=ca[0];i=ca[1];}else var
Eb=ub.G;i=i.replace(ub.Me,ub.G);var
Ea={};Ea.jsxtext=ub.Le;Ea.jsxid=this.getKey();Ea.datatype=i;Ea.tns=c.IE.soapencoding;Ea.ttns=this.getTargetURI(M,m,u);Ea.type=ub.Db;Ea.path=this.getMyPath(m);(this.getRulesTree()).insertRecord(Ea,k,false);var
lb=m;while(lb&&lb.getBaseName()!=ub.Ne)lb=lb.getParent();if(lb){var
lb=lb.selectSingleNode(ub.Wc+u[this.getSchemaNS()]+ub.De,u);if(lb)return;}var
m=m.selectSingleNode(ub.vb+u[this.getSchemaNS()]+ub.wc+ha+ub.Ae+i+ub.ha,u);var
Ea={};Ea.jsxtext=ub.Oe;Ea.jsxid=this.getKey();Ea.jsxopen=ub.gb;if(this.isSimpleNode(m,i)){Ea.datatype=i;Ea.ttns=this.getSchemaNS();Ea.type=ub.Bb;}else if(Eb!=ub.G){Ea.datatype=i;Ea.ttns=this.getTargetURI(Eb+ub.T+i,m,u);Ea.type=ub.Mb;Ea.ref=ub.gb;Ea.path=this.getMyPath(m);}else{var
Ja=m.selectSingleNode(ub.vb+u[this.getSchemaNS()]+ub.wc+ha+ub.Fc+u[this.getSchemaNS()]+ub.Wd+i+ub.ha,u);if(Ja){var
Lb=Ja.getParent();Ea.ttns=Lb.getAttribute(ub.xc);Ea.type=ub.Mb;Ea.ref=ub.gb;Ea.path=this.getMyPath(m);Ea.datatype=i;}else return;}(this.getRulesTree()).insertRecord(Ea,k,false);(this.getRulesTree()).redrawRecord(k,jsx3.xml.CDF.UPDATE);};l.parseComplex=function(o,i,k,f,r){var
ea=i.getAttribute(ub.Lb);var
L=this.getRulesTree();var
qb=this.getNSMap();var
v=false;var
db=false;var
ja=false;var
da;if(!k&&!f&(ea==null||ea==ub.G)){if(i)this.parseSimple(o,i,r);return;}if(r){var
tb=ub.Db;}else if(i.getFirstChild()||!this.isSimpleNode(i,ea)){ja=true;var
tb=ub.Mb;}else var
tb=ub.Bb;var
V;if((V=i.getAttribute(ub.zb))==null||V==ub.G){var
Ha=i.getAttribute(ub.se);var
fb=this.getBaseName(Ha);var
Bb=this.getTargetURI(Ha,i,qb);var
Mb;if(fb==ub.Le&&Bb==c.IE.soapencoding){var
Cb=L.getRecordNode(o);Cb.setAttribute(ub.ae,ub.Pe);Cb.setAttribute(ub.be,c.IE.soapencoding);var
lb=this.getSoapArrayType(i);this.parseSoapArray(lb,o,i);return;}else if(i.getBaseName()==ub.Qe){V=i.getAttribute(ub.ze);}else{V=i.getAttribute(ub.se);da=i;Mb=!jsx3.util.strEmpty(Bb)?ub.Re+Bb+ub.ha:ub.G;}if(V!=null&&V!=ub.G&&!this.isSimpleNode(i,V)){Mb=Mb||this.getTargetedSchemaQuery(V,i,qb);var
i=i.selectSingleNode(ub.vb+qb[this.getSchemaNS()]+ub.wc+Mb+ub.Ae+this.getBaseName(V)+ub.ha,qb);if(i==null)return;if((ea=i.getAttribute(ub.Lb))==null||ea==ub.G){var
ja=true;tb=ub.Mb;var
v=true;var
db=i.getBaseName()==ub.Se||i.getBaseName()==ub.xe;}}else V=ub.Te;}var
rb=ub.G+V;var
Y=this.getKey();var
N={};N.jsxid=Y;N.jsxtext=this.getBaseName(rb);N.jsxopen=ub.gb;N.type=tb;N.path=this.getMyPath(i);N.datatype=ea==null||ea==ub.G?ub.G:ea;if(!ja){N.simple=ub.gb;N.datatype=this.getBaseName(N.datatype);}else if(ea==null||ea==ub.G){N.datatype=ub.G;}else{N.datatype=this.getBaseName(ea);N.ttns=this.getTargetURI(ea,i,qb);}if(v)N.ref=ub.gb;if(db)N.groupref=ub.gb;if(!k)c.KD.trace(ub.Ue+(ja?ub.Ve:ub.We)+ub.Xe+N.jsxtext,{instance:this});var
Lb=L.insertRecord(N,o,false);this.setFormDefaults(Lb,i);var
ta=(da||i).getAttribute(ub.Ye);if(ta!=null&&ta!=ub.G)this.bindComplexRule(L,Lb,ub.Ge,ub.Ze,ta);var
Wa=(da||i).getAttribute(ub._e);if(Wa!=null&&Wa!=ub.G&&Wa!=1)this.bindComplexRule(L,Lb,ub.Ge,ub.af,Wa);if((da||i).getAttribute(ub.bf)==ub.cf){this.bindComplexRule(L,Lb,ub.Ge,ub.af,0);this.bindComplexRule(L,Lb,ub.Ge,ub.bf,ub.cf);}return Y;};l.setFormDefaults=function(n,b){var
sb=b.getAttribute(ub.df);var
qb,Cb;if(sb==ub.ef){qb=1;}else if(sb!=ub.ff){var
Da=b;while(b.getBaseName()!=ub.g)b=b.getParent();var
u=b.getAttribute(ub.xc);if(u==null)u=ub.G;qb=b.getAttribute(ub.gf);qb=qb==null||qb==ub.ff||Da.getBaseName()!=ub.Od?ub.hf:ub.gb;if(qb==ub.hf&&Da.getBaseName()==ub.Od&&(Da.getParent()).equals(b))qb=ub.gb;var
Cb=b.getAttribute(ub.jf);Cb=Cb==null||Cb==ub.ff||Da.getBaseName()!=ub.kf?ub.hf:ub.gb;}if(qb==ub.gb||Cb==ub.gb)n.setAttribute(ub.Kb,u);};l.listOperations=function(j){j.clearXmlData();j.clearCachedContent();var
x;if((x=this.getRulesXML())!=null){var
cb=x.selectNodes(ub.lf);for(var
H=cb.iterator();H.hasNext();){var
sb=H.next();j.insertRecord({jsxid:sb.getAttribute(ub.id),jsxtext:sb.getAttribute(ub._d)},null,false);}}return true;};l.generateCode=function(b){var
G=(this.getEditor()).getFilePath();var
ha=jsx3.ide.getSystemRelativeFile(G);var
fa=(jsx3.ide.PROJECT.getDirectory()).relativePathTo(ha);var
zb=((jsx3.util.List.wrap((jsx3.ide.SERVER.getSettings()).get(ub.mf))).filter(function(g){return g.src==fa;})).toArray(true);if(zb.length){var
Y=zb[zb.length-1].id;var
za=b.getValue();var
Ia=ub.nf;Ia=Ia+ub.of;Ia=Ia+ub.pf;Ia=Ia+ub.qf;Ia=Ia+ub.rf;Ia=Ia+ub.sf;Ia=Ia+ub.tf;Ia=Ia+ub.uf;Ia=Ia+ub.vf;Ia=Ia+ub.wf;Ia=Ia+ub.xf;Ia=Ia+ub.yf;Ia=Ia+ub.zf;Ia=Ia+ub.Af;Ia=Ia+ub.Bf;Ia=Ia+ub.Cf;Ia=Ia+ub.Df;Ia=Ia+ub.Ef;Ia=Ia+ub.Ff;Ia=Ia+ub.Cf;Ia=Ia+ub.Gf;Ia=Ia+ub.Hf;Ia=Ia+ub.If;Ia=Ia+ub.Cf;Ia=Ia+ub.Jf;Ia=Ia+ub.Kf;Ia=Ia+ub.Cf;Ia=Ia+ub.Lf;Ia=Ia+ub.Mf;Ia=(Ia.replace(ub.Nf,Y)).replace(ub.Of,jsx3.ide.SERVER.getEnv(ub.K));Ia=za==ub.hb?Ia.replace(ub.Pf,ub.G):Ia.replace(ub.Pf,za);jsx3.html.copy(Ia);(this.getServer()).alert(ub.Qf,ub.Rf,null,null,{width:280,height:150});}else (this.getServer()).alert(ub.Sf,ub.Tf,null,null,{width:280,height:150});};l.openTester=function(){jsx3.require(ub.Uf);var
Ya=((this.getServer()).getRootBlock()).getDescendantsOfType(jsx3.ide.mapper.ServiceTest);if(Ya.length==0){var
Va=((this.getServer()).getRootBlock()).load(ub.Vf,true,Fa);var
ua=(Va.getDescendantsOfType(jsx3.ide.mapper.ServiceTest))[0];this.setTesterId(ua.getId());ua.initialize(this.getId());}else (Ya[0].getAncestorOfType(jsx3.gui.Dialog)).doToggleState(1,true);};l.onRuleDrop=function(s,g,f,q,b){var
Cb,Jb;var
A=f[0];if(g.getName()==ub.Wf&&(Cb=s.getRecordNode(q))!=null&&(Jb=jsx3.GO(A))!=null){if((s.getValue()).length==1)this.writeMappings(true);var
Ya=this.bindComplexRule(s,Cb,ub.Eb,ub.Xf,Jb.getName());s.redrawRecord(q,jsx3.xml.CDF.UPDATE);if((s.getValue()).length==1&&(s.getValue())[0]==q){this.readMappings(s,Cb,ub.Eb);}else{s.setValue(q);this.onRuleSelect();}var
R;if((R=this.getTester())!=null)R.listRules();}else if(g.getName()==ub.U){var
z=s.getRecordNode(q);if(b)z=z.getParent();var
Ba=z.getAttribute(ub.Lb);var
W;var
y;for(var
Za=0;Za<f.length;Za++){A=f[Za];if(A!=q){var
Y=s.getRecordNode(A);var
rb=Y.getParent();var
Ma=Y.getAttribute(ub.Lb);if(Ba==ub.ob||Ba==ub.qb||Ba==ub.Yf||Ba==ub.Mb||Ba==ub.Bb||Ba==ub.Db||Ba==ub.Cb)if(Ma==ub.Db||Ma==ub.Mb||Ma==ub.Bb||Ma==ub.Cb){if(b){bCurSucess=s.adoptRecordBefore(s,A,q,false);}else bCurSucess=s.adoptRecord(s,A,q,false);if(bCurSucess){W=true;if(rb.selectSingleNode(ub.Rb)==null&&rb.getAttribute(ub.Lb)==ub.Mb){rb.setAttribute(ub.Lb,ub.Bb);s.redrawRecord(rb.getAttribute(ub.mb));}}}}}if(W){if(Ba==ub.Bb||Ba==ub.Db||Ba==ub.Cb)z.setAttribute(ub.Lb,ub.Mb);s.redrawRecord(z.getAttribute(ub.mb));}}return false;};l.onDelete=function(p){(this.getRulesTree()).redrawRecord((this.getRulesTree()).getValue(),jsx3.xml.CDF.UPDATE);(this.getEditor()).setDirty(true);};l.doRemoveComplexStructure=function(a){(this.getEditor()).setDirty(true);var
aa=this.getRulesTree();var
eb=aa.getValue();for(var
Ua=0;Ua<eb.length;Ua++){var
Aa=eb[Ua];var
vb=(this.getRulesXML()).selectSingleNode(ub.Zf+Aa+ub.rd+a);if(vb){var
T=vb.getParent();T.removeChild(vb);(this.getRulesTree()).redrawRecord(Aa,jsx3.xml.CDF.UPDATE);this.readMappings(aa,T,a);}}var
xb;if((xb=this.getTester())!=null)xb.listRules();};l.doRemoveBranch=function(){(this.getEditor()).setDirty(true);var
Ab=this.getRulesTree();var
zb=Ab.getValue();var
_a;for(var
Bb=0;Bb<zb.length;Bb++){var
eb=Ab.getRecordNode(zb[Bb]);if(eb){var
_a=(eb.getParent()).getAttribute(ub.mb);Ab.deleteRecord(zb[Bb],zb.length==1);}}if(zb.length>1)Ab.repaint();if(Ab.getRecord(_a)){Ab.setValue(_a);this.onRuleSelect();}var
Pa;if((Pa=this.getTester())!=null)Pa.reset();};l.execute=function(j){var
t=this.getRulesTree();var
zb=t.getRecordNode(j);var
M=new
jsx3.net.Service();M.setRulesXML(this.getRulesXML());var
Da;if((Da=zb.getAttribute(ub.id))!=null)M.setOperationName(Da);M.setNamespace(jsx3.ide.SERVER.getEnv(ub.K));M.doCall();};l.doRemoveSiblingBranches=function(){var
Sa=this.getRulesTree();var
X=Sa.getValue();var
vb;for(var
Nb=0;Nb<X.length;Nb++)if(Nb==0){vb=(Sa.getRecordNode(X[Nb])).getParent();}else{var
v=(Sa.getRecordNode(X[Nb])).getParent();if(!v.equals(vb))return;}(this.getEditor()).setDirty(true);var
ab=ub.G;var
Ma=ub._f;for(var
Nb=0;Nb<X.length;Nb++){Ma=Ma+(ab+ub.ag+X[Nb]+ub.ta);var
ab=ub.bg;}Ma=Ma+ub.Ec;var
D=Sa.getRecordNode(X[0]);var
vb=D.getParent();var
zb=vb.selectNodes(Ma);for(var
Nb=zb.size()-1;Nb>=0;Nb--)vb.removeChild(zb.get(Nb));Sa.redrawRecord(vb.getAttribute(ub.mb),jsx3.xml.CDF.UPDATE);var
A;if((A=this.getTester())!=null)A.reset();};l.doAddChildNode=function(o,s){(this.getEditor()).setDirty(true);var
tb=(this.getRulesTree()).getRecordNode(o);var
Ya={};Ya.jsxid=this.getKey();Ya.jsxtext=ub.cg;Ya.type=s;(this.getRulesTree()).insertRecord(Ya,o,false);var
Cb;if((Cb=((this.getRulesTree()).getRecordNode(o)).getAttribute(ub.Lb))!=ub.qb&&Cb!=ub.ob&&Cb!=ub.Yf)(this.getRulesTree()).insertRecordProperty(o,ub.Lb,ub.Mb,false);(this.getRulesTree()).insertRecordProperty(o,ub.dg,ub.gb,true);};l.doCloneNode=function(r){(this.getEditor()).setDirty(true);var
Oa=(this.getRulesTree()).getRecordNode(r);var
Jb=Oa.getAttribute(ub.Lb);if(Jb!=ub.Hc&&Jb!=ub.fb){var
aa=Oa.cloneNode(true);(Oa.getParent()).appendChild(aa);var
Ib=aa.selectNodeIterator(ub.eg);while(Ib.hasNext())(Ib.next()).setAttribute(ub.mb,this.getKey());aa.removeAttribute(ub.fg);(this.getRulesTree()).redrawRecord(aa.getAttribute(ub.mb),jsx3.xml.CDF.INSERT);}else c.KD.error(ub.gg,{instance:this});};l.doAutoMap=function(k){var
y=this.getRulesTree();var
Jb=y.getValue();if(Jb.length==1)this.writeMappings(true);for(var
sb=0;sb<Jb.length;sb++){var
K=Jb[sb];var
Z=y.getRecordNode(K);var
H=Z.getAttribute(ub.Lb);if(H==ub.Db||H==ub.Bb||H==ub.Mb||H==ub.Cb){(this.getEditor()).setDirty(true);(jsx3.ide.getActiveEditor()).setDirty(true);if(k==ub.hg){this.bindComplexRule(y,Z,ub.Eb,k,ub.G);var
ib=Z.selectNodes(ub.ig);for(var
cb=ib.iterator();cb.hasNext();){var
ca=cb.next();this.bindComplexRule(y,ca,ub.Eb,ub.jg,ca.getAttribute(ub._d));}}else if(k==ub.jg){this.bindComplexRule(y,Z,ub.Eb,k,Z.getAttribute(ub._d));}else{var
v=(jsx3.ide.getSelected())[0];if(v&&(v.getClass()).equals(jsx3.gui.Block.jsxclass)){if(H!=ub.Mb&&(Z.selectNodes(ub.kg)).size()==0){var
bb=Z.getAttribute(ub._d);this.bindComplexRule(y,Z,ub.Eb,ub.Xf,bb);var
wa=v.load(c.TEXTBOX_PROJECTION,false);wa.setPersistence(jsx3.app.Model.PERSISTEMBED);var
zb=wa.findDescendants(function(q){return q.getName()==ub.lg;},true,true,false,false);if(zb.length)zb[0].setText(this.fromCamelCase(bb));(wa.getDescendantsOfType(jsx3.gui.TextBox))[0].setName(bb);}else{var
ib=Z.selectNodes(ub.mg);if(ib.size()==0)ib=Z.selectNodes(ub.Zf+K+ub.ha);for(var
cb=ib.iterator();cb.hasNext();){Z=cb.next();var
bb=Z.getAttribute(ub._d);var
oa=this.bindComplexRule(y,Z,ub.Eb,ub.Xf,bb);var
Xa=Z.selectNodes(ub.ng);if(Xa.size()>0){var
wa=v.load(c.SELECT_PROJECTION,false);wa.setPersistence(jsx3.app.Model.PERSISTEMBED);var
Ea=(wa.getDescendantsOfType(jsx3.gui.Select))[0];Ea.setName(bb);var
Ya=ub.og;for(var
jb=Xa.iterator();jb.hasNext();){var
L=(jb.next()).getAttribute(ub.He);Ya=Ya+(ub.pg+L+ub.qg+L+ub.rg);}Ya=Ya+ub.sg;Ea.setXMLString(Ya);}else{var
wa=v.load(c.TEXTBOX_PROJECTION,false);wa.setPersistence(jsx3.app.Model.PERSISTEMBED);(wa.getDescendantsOfType(jsx3.gui.TextBox))[0].setName(bb);}var
zb=wa.findDescendants(function(s){return s.getName()==ub.lg;},true,true,false,false);if(zb.length)zb[0].setText(this.fromCamelCase(bb));}}v.repaint();}else (this.getServer()).alert(ub.tg,ub.ug);}}y.redrawRecord(K,jsx3.xml.CDF.UPDATE);var
wb;if((wb=this.getTester())!=null)wb.reset();}if(Jb.length==1)this.readMappings(y,Z,ub.Eb);};l.fromCamelCase=function(b){if(b.toUpperCase()!=b){var
sa=b.length;var
La=b.substring(0,1);for(var
G=1;G<sa-1;G++){var
kb=b.substring(G,G+1);var
Mb=b.substring(G+1,G+2);if(kb.toUpperCase()==kb&&Mb.toUpperCase()!=Mb)La=La+ub.vg;La=La+kb;}return La+b.substring(sa-1);}return b;};l.doSpyContextFields=function(){var
nb=jsx3.IDE.getCache();var
hb=nb.getOrOpenDocument(Fa.resolveURI(ub.wg));var
Lb=nb.getOrOpenDocument(Fa.resolveURI(ub.xg),null,jsx3.xml.XslDocument.jsxclass);return Lb.transform(hb);};l.getEditorForType=function(s){if(((this.getRulesTree()).getValue()).length==1)if(s==ub.Db||s==ub.Mb||s==ub.Bb||s==ub.Cb){return ub.yg;}else if(s==ub.bd||s==ub.fb){return ub.zg;}else if(s==ub.qb){return ub.Ag;}else if(s==ub.ob)return ub.Bg;};l.onRuleSelect=function(){this.writeMappings(false);var
I=this.getRulesTree();var
ia=I.getValue();var
v=(I.getXML()).selectSingleNode(ub.Zf+ia+ub.ha);this.FK=ia;var
ha=this.getEditorPane();if(v){var
V=v.getAttribute(ub.Lb);var
Eb=this.getEditorForType(V);if(Eb!=ha._jsxuri&&(ha.getChildren()).length>0)for(var
gb=0;gb<(ha.getChildren()).length;gb++)(ha.getChild(gb)).setDisplay(jsx3.gui.Block.DISPLAYNONE,true);var
Ca;if(Eb&&Eb!=ha._jsxuri){if(Ca=this.getDescendantOfName(Eb)){Ca.setDisplay(jsx3.gui.Block.DISPLAYBLOCK,true);}else{var
Ca=ha.load(Eb);Ca.setName(Eb);}ha._jsxuri=Eb;}else if(!Eb)delete ha[ub.V];if(Eb!=null)if(V==ub.bd||V==ub.fb){this.readMappings(I,v,ub.jb);this.readMapping(v,ub.rb);this.readMapping(v,ub.Cg);this.onMethodChange(this.getDescendantOfName(ub.Dg),v.getAttribute(ub.Eg)==ub.gb);}else if(V==ub.Db||V==ub.Mb||V==ub.Bb||V==ub.Cb){this.readMappings(I,v,ub.Eb);this.readMappings(I,v,ub.Ge);this.readMapping(v,ub.Fg);}else if(V==ub.ob){this.readMapping(v,ub.Gg);this.readMapping(v,ub.Hg);this.readMapping(v,ub.Ig);}else if(V==ub.qb){this.readMapping(v,ub.Gg);this.readMapping(v,ub.Jg);}if(this.getProfileType()==ub.g){this.showSchema(v);}else this.showProfile(v);}else{for(var
gb=0;gb<(ha.getChildren()).length;gb++)(ha.getChild(gb)).setDisplay(jsx3.gui.Block.DISPLAYNONE,true);delete ha[ub.V];this.resetSourcePane();}};var
P={definitions:ub.Kg,types:ub.Kg,message:ub.Kg,part:ub.Kg,service:ub.Kg,port:ub.Kg,operation:ub.Kg,binding:ub.Kg,schema:ub.Lg,complexType:ub.Lg,complexContent:ub.Lg,simpleContent:ub.Lg,extension:ub.Lg,element:ub.Lg,group:ub.Lg,all:ub.Lg,choice:ub.Lg,sequence:ub.Lg,any:ub.Lg,anyAttribute:ub.Lg,attribute:ub.Lg,attributeGroup:ub.Lg,unique:ub.Lg,key:ub.Lg,keyref:ub.Lg,selector:ub.Lg,field:ub.Lg,include:ub.Lg,address:ub.Mg};var
pa=ub.Ng;var
ra=ub.Og;c.resolveElementPrefixes=function(f){var
aa=[];var
u=f.split(ub.Fc);var
Hb=u.length;for(var
X=0;X<Hb;X++)if(u[X]){var
Mb=u[X].split(ub.T);var
ga=Mb.length==2?Mb[1]:Mb[0];var
ga=ga.replace(pa,function(r,e){return P[e]+ub.T+e;});aa.push(ga);}var
M=ub.Fc+aa.join(ub.Fc);M=M.replace(ra,function(s,j){return j==0?ub.G:ub.Dc+(+j+1)+ub.Ec;});return M;};l.showSchema=function(n,k){if(!n){var
za=this.getRulesTree();n=(za.getXML()).selectSingleNode(ub.Zf+za.getValue()+ub.ha);}var
x=n.getAttribute(ub.nc);var
Na=n.getAttribute(ub.ae);if(!k&&x==ub.oc){var
U=new
jsx3.xml.Document();U.loadXML(ub.Pg);var
ja=this.getDescendantOfName(ub.X);((this.getServer()).getCache()).setDocument(ja.getXMLId(),U);ja.loadAndCache(ub.Qg,false);ja.setDisplay(jsx3.gui.Block.DISPLAYBLOCK,false);ja.repaint();}else if(x==null||x==ub.G){this.resetSourcePane();}else{(this.getDescendantOfName(ub.X)).removeChildren();var
ob=this.getDescendantOfName(ub.X);if(ob){ob.setDisplay(jsx3.gui.Block.DISPLAYBLOCK,true);var
Nb=this.getSourceDocument(this.getSourceDocumentURL(n));if(Nb!=null&&!Nb.hasError()){var
C=this.getNSMap(this.getSourceDocumentURL(n));var
F=Nb.selectSingleNode(x,C);if(F){var
ua;if((ua=n.getAttribute(ub.ae))!=null&&!this.isSimpleNode(n,ua)){var
sb=this.getTargetedSchemaQuery(ua,Nb,C);var
R=Nb.selectSingleNode(ub.vb+C[this.getSchemaNS()]+ub.wc+sb+ub.vb+C[this.getSchemaNS()]+ub.Wd+this.getBaseName(ua)+ub.ha,C);if(R==null)R=Nb.selectSingleNode(ub.vb+C[this.getSchemaNS()]+ub.wc+sb+ub.vb+C[this.getSchemaNS()]+ub.Yd+this.getBaseName(ua)+ub.ha,C);if(R!=null)F=R;}}if(F){var
zb=F.getXML();var
U=new
jsx3.xml.Document();U.loadXML(zb);var
ja=this.getDescendantOfName(ub.X);((this.getServer()).getCache()).setDocument(ja.getXMLId(),U);ja.repaint();}else this.resetSourcePane();}else this.resetSourcePane();}}};l.showProfile=function(k){var
mb=k.getAttribute(ub.Lb);if(mb==ub.Db||mb==ub.Mb||mb==ub.Bb||mb==ub.Cb)mb=ub.Rg;var
Kb=this.getDescendantOfName(ub.Z);if(Kb){var
Aa=((Kb.getServer()).getCache()).openDocument(Fa.resolveURI(ub.Sg+mb+ub.la),Kb.getXMLId());var
wb=Aa.selectNodes(ub.uc);for(var
bb=wb.iterator();bb.hasNext();){var
Va=bb.next();var
Wa=k.getAttribute(Va.getAttribute(ub.mb));if(Wa)Va.setAttribute(ub.He,Wa);}Kb.repaintData();}};l.onMethodChange=function(a,o){if(a.getValue()==ub.ib){(a.getNextSibling()).setDisplay(ub.G,true);(a.getNextSibling()).setChecked(o!==false?1:0);}else{(a.getNextSibling()).setDisplay(ub.Tg,true);(a.getNextSibling()).setChecked(0);}};l.writeMappings=function(m){if(this.FK){var
U=this.FK;if(!m)delete this[ub.aa];var
N=this.getRulesTree();var
E=(N.getXML()).selectSingleNode(ub.Zf+U+ub.ha);if(E){var
ta=false;var
ma=this.getDescendantOfName((this.getEditorPane())._jsxuri);if(ma)ma.findDescendants(function(b){if(jsx3.gui.TextBox&&b.instanceOf(ub.Ug)||jsx3.gui.Select&&b.instanceOf(ub.Vg)){if(b.getEnabled()!==0){var
C=b.getName();var
ob=C.substring(C.lastIndexOf(ub.Wg)+1);var
ab=b.getValue();if(typeof ab==ub.Xg)ab=jsx3.util.strTrim(ab);var
T;if((T=E.getAttribute(ob))!=null&&(ab==null||ab==ub.G)){ta=true;E.removeAttribute(ob);}else if(((T=E.getAttribute(ob))==null||T==ub.G||T!=ab)&&ab!=null&&ab!=ub.G){ta=true;E.setAttribute(ob,ab);}}}else if(b instanceof jsx3.gui.Matrix){var
X=(b.getXML()).selectSingleNode(ub.uc);var
Ya=(b.getXML()).selectSingleNode(ub.Yg);var
z=Ya.getAttribute(ub.mb);var
_=E.selectSingleNode(Ya.getNodeName());if(X){var
Wa=((b.getXML()).selectSingleNode(ub.Yg)).cloneNode(true);if(_){E.replaceNode(Wa,_);}else E.appendChild(Wa);}else if(_)(_.getParent()).removeChild(_);}else if(typeof jsx3.gui.CheckBox!=ub.A&&b instanceof jsx3.gui.CheckBox)if(b.getChecked()){if(jsx3.util.strEmpty(E.getAttribute(ub.Eg))){ta=true;E.setAttribute(ub.Eg,ub.gb);}}else if(!jsx3.util.strEmpty(E.getAttribute(ub.Eg))){ta=true;E.removeAttribute(ub.Eg);}},true,true,false,true);if(ta){(this.getEditor()).setDirty(ta);N.redrawRecord(U,jsx3.xml.CDF.UPDATE);}}}};l.readMapping=function(n,m){(this.getDescendantOfName(ub.Zg+m)).setValue(n.getAttribute(m));};l.readMappings=function(n,m,j){var
pb=this.getDescendantOfName(ub.Zg+j);var
S=m.selectSingleNode(j);var
rb=jsx3.xml.CDF.Document.newDocument();var
zb=rb.getRootNode();if(S){var
Ja=S.cloneNode(true);var
Da=S.getAttribute(ub.mb);}else{var
Da=this.getKey();var
Ja=zb.createNode(jsx3.xml.Entity.TYPEELEMENT,j);Ja.setAttribute(ub.mb,Da);}zb.appendChild(Ja);((pb.getServer()).getCache()).setDocument(pb.getXMLId(),rb);pb.setRenderingContext(Da,true);pb.repaintData();};l.browseURL=function(a){(jsx3.ide.getPlugIn(ub._g)).chooseFile(jsx3.IDE.getRootBlock(),{name:ub.ah,modal:true,title:ub.bh,okLabel:ub.ch,folder:jsx3.ide.getCurrentDirectory(),onChoose:(jsx3.$F(function(b){var
E=this.getDescendantOfName(a);E.setValue(jsx3.net.URI.decode((jsx3.ide.PROJECT.getDirectory()).relativePathTo(b)));jsx3.ide.setCurrentDirectory(b.getParentFile());})).bind(this)});};l.updateProfilePane=function(i){var
S=this.getDescendantOfName(ub.dh);var
gb=this.getRulesTree();var
Ab=(gb.getXML()).selectSingleNode(ub.Zf+gb.getValue()+ub.ha);var
ja=S.getChild(ub.X);var
V=S.getChild(ub.Z);if(i.getValue()==ub.g){if(V)V.setDisplay(ub.Tg,true);if(!ja)S.load(ub.eh+i.getValue()+ub.la,true);else ja.setDisplay(ub.G,true);this.showSchema(Ab);}else{if(ja)ja.setDisplay(ub.Tg,true);if(!V)S.load(ub.eh+i.getValue()+ub.la,true);else V.setDisplay(ub.G,true);this.showProfile(Ab);}};l.getProfileType=function(){return jsx3.gui.RadioButton.getValue(ub.Z);};l.onProfileEdit=function(b,a){(this.getRulesTree()).insertRecordProperty((this.getRulesTree()).getValue(),b,a.getValue(),true);(this.getEditor()).setDirty(true);};l.prioritizeRow=function(r,i,s){if(!i)return;var
F=jsx3.GO(r);var
ob=F.getRecordNode(i);if(ob){(this.getEditor()).setDirty(true);var
lb=ob.getParent();var
Pa=lb.getChildNodes();if(s){for(var
qa=1;qa<Pa.size();qa++)if((Pa.get(qa)).equals(ob)){lb.insertBefore(ob,Pa.get(qa-1));F.repaintData();return;}}else for(var
qa=Pa.size()-2;qa>=0;qa--)if((Pa.get(qa)).equals(ob)){lb.insertBefore(Pa.get(qa+1),ob);F.repaintData();return;}}};l.insertRow=function(i,p){return true;};l.onInsertRow=function(){(this.getEditor()).setDirty(true);if(this.getTester())(this.getTester()).listRules();this.writeMappings(true);(this.getRulesTree()).redrawRecord(((this.getRulesTree()).getValue())[0]);};l.formatMenu=function(m){var
S=this.getRulesTree();var
la=S.getValue();var
R;var
ja=0;var
Va=0;var
da=0;for(var
D=0;D<la.length;D++){var
z=(S.getRecordNode(la[D])).getAttribute(ub.Lb);if(z==ub.ob||z==ub.qb||z==ub.Yf){if(R!==false)R=true;}else R=false;if(z==ub.bd||z==ub.fb){if(ja!=-1)ja=ja+1;}else ja=-1;if(z==ub.Yf||z==ub.ob||z==ub.qb){if(Va!=-1)Va=Va+1;da=-1;}else if(z==ub.Mb||z==ub.Bb||z==ub.Db||z==ub.Cb){if(Va!=-1)Va=Va+1;if(da!=-1)da=da+1;}else{Va=-1;da=-1;}}if(R==true)m.enableItem(ub.fh);else m.disableItem(ub.fh);if(ja==1)m.enableItem(ub.gh);else m.disableItem(ub.gh);if(Va==1&&da<=0){m.disableItem(ub.hh);m.enableItem(ub.ih);m.disableItem(ub.jh);m.disableItem(ub.kh);}else if(da==1&&Va<=0){m.enableItem(ub.hh);m.disableItem(ub.ih);m.enableItem(ub.jh);m.enableItem(ub.kh);}else if(da==1&&Va==1){m.enableItem(ub.hh);m.enableItem(ub.ih);m.enableItem(ub.jh);m.enableItem(ub.kh);}else{m.disableItem(ub.hh);m.disableItem(ub.ih);m.disableItem(ub.jh);m.disableItem(ub.kh);}};l.formatToolbar=function(i){var
H=this.getRulesTree();var
Ab=H.getValue();var
Ga=0;for(var
da=0;da<Ab.length;da++){var
U=(H.getRecordNode(Ab[da])).getAttribute(ub.Lb);if(U==ub.Mb||U==ub.Bb||U==ub.Db){if(Ga!=-1)Ga=Ga+1;}else Ga=-1;}if(Ga>0){i.enableItem(ub.lh);i.enableItem(ub.mh);i.enableItem(ub.nh);}else{i.disableItem(ub.lh);i.disableItem(ub.mh);i.disableItem(ub.nh);}};l.reparseBranch=function(e){var
O=this.getRulesTree();var
oa=O.getRecordNode(e);if(oa){var
Ya=this;(this.getAncestorOfType(jsx3.gui.Dialog)).confirm(ub.oh,ub.ph,function(a){a.doClose();(Ya.getEditor()).setDirty(true);var
N=oa.selectNodeIterator(ub.Rb);while(N.hasNext())oa.removeChild(N.next());O.redrawRecord(oa.getAttribute(ub.mb),jsx3.xml.CDF.UPDATE);Ya.doDrill(e,true,O,oa);},null,ub.qh,ub.rh,1);}};l.generateSample=function(){var
gb=ub.G;var
rb=(this.getRulesTree()).getValue();var
Ya=200;var
fb=200;for(var
oa=0;oa<rb.length;oa++){var
Db=rb[oa];var
Ka=(this.getRulesTree()).getRecordNode(Db);var
u=Ka.getAttribute(ub.Lb);if(u==ub.ob||u==ub.qb||u==ub.Yf){var
Bb=Ka.getParent();var
Ba=Bb.getAttribute(ub.id);var
_=new
jsx3.net.Service();_.setRulesXML(this.getRulesXML());if(Ba)_.setOperationName(Ba);_.setNamespace(jsx3.ide.SERVER.getEnv(ub.K));var
bb;if(u==ub.ob)bb=ub.ld;if(u==ub.qb)bb=ub.md;if(u==ub.Yf)bb=ub.nd;gb=((_.getServiceMessage(bb)).getRootNode()).getXML();_.resetRulesTree();gb=gb.replace(ub.sh,ub.th);var
ta=(jsx3.IDE.getRootBlock()).load(ub.uh,null,Fa);ta.setLeft(Ya=Ya+20,true);ta.setTop(fb=fb+20,true);var
y=ta.getDescendantOfName(ub.vh);var
C=ta.getDescendantOfName(ub.wh);var
Db=y.getXMLId();var
K=new
jsx3.xml.Document();K.loadXML(gb);C.setValue((K.getXML()).replace(ub.xh,ub.yh));((y.getServer()).getCache()).setDocument(Db,K);y.repaint();var
ka=ta.getDescendantOfName(ub.zh);ka.setText((Ba?Ba+ub.Ah:ub.G)+ub.Bh+bb.toUpperCase()+ub.Ch,true);}}};l.resetCacheData=function(){var
Gb=jsx3.IDE.getCache();Gb.clearById(ub.Dh,true);Gb.clearById(ub.Eh,true);Gb.clearById(ub.Fh,true);Gb.clearById(ub.Gh,true);Gb.clearById(ub.Hh,true);Gb.clearById(ub.Ih,true);};l.onDestroy=function(q){this.jsxsuper(q);this.resetCacheData();c.KD.setLevel(Qa.INFO);var
bb;if((bb=this.getTester(q))!=null)bb.close();};});
