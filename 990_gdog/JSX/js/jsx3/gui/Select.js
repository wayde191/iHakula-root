/*
 * Copyright (c) 2001-2009, TIBCO Software Inc.
 * Use, modification, and distribution subject to terms of license.
 */
jsx3.require("jsx3.xml.Cacheable","jsx3.gui.Form","jsx3.gui.Heavyweight","jsx3.gui.Block","jsx3.util.MessageFormat");jsx3.Class.defineClass("jsx3.gui.Select",jsx3.gui.Block,[jsx3.gui.Form,jsx3.xml.Cacheable,jsx3.xml.CDF],function(k,s){var
ub={A:"url(",Aa:"relativebox",B:")",Ba:"box",C:"'",Ca:"0 0 0 0",D:"//record[@jsxtext='",Da:"0 19 0 0",E:"' or (not(@jsxtext) and @jsxid='",Ea:"100%",F:"')]",Fa:"2 0 0 3",G:'//record[@jsxtext="',Ga:"inline",H:'" or (not(@jsxtext) and @jsxid="',Ha:"input[text]",I:'")]',Ia:"0 0 0 4",J:"_isfocusing",Ja:"solid 0px;solid 1px #c8c8d5;solid 0px;solid 0px",K:"x",Ka:"jsxkeyup",L:"body",La:"keyup",M:"JSX_GENERIC",Ma:"JF",N:"null",Na:"focus",O:"jsxabspath",Oa:"iU",P:"jsxhomepath",Pa:' id="',Q:"jsxtext",Qa:' class="',R:"combo",Ra:'" jsxtype="Select" ',S:/\<div/i,Sa:"background-image:url(",T:"jsx3.gui.Select.",Ta:");background-repeat:no-repeat;background-position:right 0px;",U:"dataUnavailable",Ua:' class="jsx30select_display" jsxtype="Display" ',V:"noMatch",Va:' jsxtype="Text" class="jsx30select_text"',W:"0px;1px;0px;1px",Wa:'class="jsx30combo"',X:'<div style="height:1px;width:',Xa:' class="jsx30combo_text" value="',Y:"px;position:relative;left:0px;top:0px;",Ya:'" jsxtype="Text" ',Z:'padding:0px;margin:0px 0px -1px 0px;overflow:hidden;">&#160;</div>',Za:"blur",_:'<div tabindex="0" jsxselid="',_a:"KW",a:"#ffffff",aa:'"',ab:"input",b:"- Select -",ba:"keydown",bb:"jsxbeforeselect",c:"jsx:///xsl/jsxselect.xsl",ca:"gu",cb:"jsxselect",d:"<?xml version=\"1.0\" encoding=\"UTF-8\"?><xsl:stylesheet xmlns:msxsl=\"urn:schemas-microsoft-com:xslt\" xmlns:xsl=\"http://www.w3.org/1999/XSL/Transform\" version=\"1.0\"><xsl:output method=\"xml\" omit-xml-declaration=\"yes\"/><xsl:variable name=\"upperCase\" select=\"'ABCDEFGHIJKLMNOPQRSTUVWXYZ'\"/><xsl:variable name=\"lowerCase\" select=\"'abcdefghijklmnopqrstuvwxyz'\"/><xsl:param name=\"jsxtabindex\">0</xsl:param><xsl:param name=\"jsxselectedimage\"/><xsl:param name=\"jsxtransparentimage\"/><xsl:param name=\"jsxdragtype\">JSX_GENERIC</xsl:param><xsl:param name=\"jsxselectedid\">null</xsl:param><xsl:param name=\"jsxsortpath\"/><xsl:param name=\"jsxsortdirection\">ascending</xsl:param><xsl:param name=\"jsxsorttype\">text</xsl:param><xsl:param name=\"jsxid\">_jsx</xsl:param><xsl:param name=\"jsxtext\"/><xsl:param name=\"jsxmode\">0</xsl:param><xsl:param name=\"jsxdisableescape\">no</xsl:param><xsl:param name=\"jsxshallowfrom\"/><xsl:param name=\"jsxcasesensitive\">0</xsl:param><xsl:param name=\"jsxnocheck\">0</xsl:param><xsl:param name=\"jsx_img_resolve\">1</xsl:param><xsl:param name=\"jsx_type\">select</xsl:param><xsl:param name=\"jsxtitle\"/><xsl:param name=\"jsxasyncmessage\"/><xsl:param name=\"jsxpath\"/><xsl:param name=\"jsxpathapps\"/><xsl:param name=\"jsxpathprefix\"/><xsl:param name=\"jsxappprefix\"/><xsl:template match=\"/\"><JSX_FF_WELLFORMED_WRAPPER><xsl:choose><xsl:when test=\"$jsxasyncmessage and $jsxasyncmessage!=''\"><xsl:value-of select=\"$jsxasyncmessage\"/></xsl:when><xsl:when test=\"$jsxshallowfrom\"><xsl:for-each select=\"//*[@jsxid=$jsxshallowfrom]/record\"><xsl:sort data-type=\"{$jsxsorttype}\" order=\"{$jsxsortdirection}\" select=\"@*[name()=$jsxsortpath]\"/><xsl:choose><xsl:when test=\"$jsx_type='select'\"><xsl:apply-templates mode=\"select\" select=\".\"/></xsl:when><xsl:otherwise><xsl:apply-templates mode=\"combo\" select=\".\"/></xsl:otherwise></xsl:choose></xsl:for-each></xsl:when><xsl:otherwise><xsl:for-each select=\"//record\"><xsl:sort data-type=\"{$jsxsorttype}\" order=\"{$jsxsortdirection}\" select=\"@*[name()=$jsxsortpath]\"/><xsl:choose><xsl:when test=\"$jsx_type='select'\"><xsl:apply-templates mode=\"select\" select=\".\"/></xsl:when><xsl:otherwise><xsl:apply-templates mode=\"combo\" select=\".\"/></xsl:otherwise></xsl:choose></xsl:for-each></xsl:otherwise></xsl:choose></JSX_FF_WELLFORMED_WRAPPER></xsl:template><xsl:template match=\"record\" mode=\"select\"><xsl:param name=\"myjsxid\" select=\"@jsxid\"/><div class=\"jsx30select_{$jsxmode}_option\" id=\"{$jsxid}_{$myjsxid}\" jsxid=\"{@jsxid}\" jsxtype=\"Option\" tabindex=\"{$jsxtabindex}\" title=\"{@jsxtip}\"><xsl:if test=\"@jsxstyle\"><xsl:attribute name=\"style\"><xsl:value-of select=\"@jsxstyle\"/></xsl:attribute></xsl:if><xsl:if test=\"$jsxnocheck != '1'\"><xsl:choose><xsl:when test=\"$jsxselectedid=@jsxid\"><img class=\"jsx30select_check\" src=\"{$jsxselectedimage}\" unselectable=\"on\"/></xsl:when><xsl:otherwise><img class=\"jsx30select_check\" src=\"{$jsxtransparentimage}\" unselectable=\"on\"/></xsl:otherwise></xsl:choose></xsl:if><xsl:if test=\"@jsximg and @jsximg != ''\"><xsl:variable name=\"src1\"><xsl:choose><xsl:when test=\"$jsx_img_resolve='1'\"><xsl:apply-templates mode=\"uri-resolver\" select=\"@jsximg\"/></xsl:when><xsl:otherwise><xsl:value-of select=\"@jsximg\"/></xsl:otherwise></xsl:choose></xsl:variable><img class=\"jsx30select_icon\" src=\"{$src1}\" unselectable=\"on\"/></xsl:if><span><xsl:apply-templates mode=\"jsxtext\" select=\".\"/></span></div></xsl:template><xsl:template match=\"record\" mode=\"combo\"><xsl:variable name=\"mytext\"><xsl:choose><xsl:when test=\"@jsxtext\"><xsl:value-of select=\"@jsxtext\"/></xsl:when><xsl:otherwise><xsl:value-of select=\"@jsxid\"/></xsl:otherwise></xsl:choose></xsl:variable><xsl:if test=\"(not($jsxcasesensitive = 1) and starts-with(translate($mytext, $lowerCase, $upperCase), translate($jsxtext, $lowerCase, $upperCase)))         or (starts-with($mytext, $jsxtext))\"><div class=\"jsx30select_{$jsxmode}_option\" id=\"{$jsxid}_{@jsxid}\" jsxid=\"{@jsxid}\" jsxtype=\"Option\" tabindex=\"{$jsxtabindex}\" title=\"{@jsxtip}\"><xsl:if test=\"@jsxstyle\"><xsl:attribute name=\"style\"><xsl:value-of select=\"@jsxstyle\"/></xsl:attribute></xsl:if><xsl:if test=\"$jsxnocheck != '1'\"><xsl:choose><xsl:when test=\"$jsxselectedid=@jsxid\"><img class=\"jsx30select_check\" src=\"{$jsxselectedimage}\" unselectable=\"on\"/></xsl:when><xsl:otherwise><img class=\"jsx30select_check\" src=\"{$jsxtransparentimage}\" unselectable=\"on\"/></xsl:otherwise></xsl:choose></xsl:if><xsl:if test=\"@jsximg and @jsximg != ''\"><xsl:variable name=\"src1\"><xsl:choose><xsl:when test=\"$jsx_img_resolve='1'\"><xsl:apply-templates mode=\"uri-resolver\" select=\"@jsximg\"/></xsl:when><xsl:otherwise><xsl:value-of select=\"@jsximg\"/></xsl:otherwise></xsl:choose></xsl:variable><img class=\"jsx30select_icon\" src=\"{$src1}\" unselectable=\"on\"/></xsl:if><span><xsl:apply-templates mode=\"jsxtext\" select=\".\"><xsl:with-param name=\"value\" select=\"$mytext\"/></xsl:apply-templates></span></div></xsl:if></xsl:template><xsl:template match=\"record\" mode=\"jsxtext\"><xsl:param name=\"value\" select=\"@jsxtext\"/><xsl:choose><xsl:when test=\"$jsxdisableescape='yes'\"><xsl:call-template name=\"disable-output-escp\"><xsl:with-param name=\"value\" select=\"$value\"/></xsl:call-template></xsl:when><xsl:otherwise><xsl:value-of select=\"$value\"/></xsl:otherwise></xsl:choose></xsl:template><xsl:template match=\"* | @*\" mode=\"uri-resolver\"><xsl:param name=\"uri\" select=\".\"/><xsl:choose><xsl:when test=\"starts-with($uri,'JSX/')\"><xsl:value-of select=\"concat($jsxpath, $uri)\"/></xsl:when><xsl:when test=\"starts-with($uri,'JSXAPPS/')\"><xsl:value-of select=\"concat($jsxpathapps, $uri)\"/></xsl:when><xsl:when test=\"starts-with($uri,'GI_Builder/')\"><xsl:value-of select=\"concat($jsxpath, $uri)\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsx:///')\"><xsl:value-of select=\"concat($jsxpath, 'JSX/', substring($uri,8))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsx:/')\"><xsl:value-of select=\"concat($jsxpath, 'JSX/', substring($uri,6))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsxapp:///')\"><xsl:value-of select=\"concat($jsxappprefix, substring($uri,11))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsxapp://')\"><xsl:value-of select=\"concat($jsxpathapps, substring($uri,10))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsxapp:/')\"><xsl:value-of select=\"concat($jsxappprefix, substring($uri,9))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsxuser:///')\"><xsl:value-of select=\"concat($jsxpathapps, substring($uri,11))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsxuser:/')\"><xsl:value-of select=\"concat($jsxpathapps, substring($uri,9))\"/></xsl:when><xsl:when test=\"starts-with($uri,'jsxaddin://')\"><xsl:value-of select=\"$uri\"/></xsl:when><xsl:when test=\"starts-with($uri,'/')\"><xsl:value-of select=\"$uri\"/></xsl:when><xsl:when test=\"contains($uri,'://')\"><xsl:value-of select=\"$uri\"/></xsl:when><xsl:when test=\"not($jsxpathprefix='') and not(starts-with($uri, $jsxpathprefix))\"><xsl:apply-templates mode=\"uri-resolver\" select=\".\"><xsl:with-param name=\"uri\" select=\"concat($jsxpathprefix, $uri)\"/></xsl:apply-templates></xsl:when><xsl:otherwise><xsl:value-of select=\"$uri\"/></xsl:otherwise></xsl:choose></xsl:template><xsl:template match=\"* | @*\" mode=\"disable-output-escp\"><xsl:call-template name=\"disable-output-escp\"><xsl:with-param name=\"value\" select=\".\"/></xsl:call-template></xsl:template><xsl:template name=\"disable-output-escp\"><xsl:param name=\"value\" select=\".\"/><xsl:choose><xsl:when test=\"function-available('msxsl:node-set')\"><xsl:value-of disable-output-escaping=\"yes\" select=\"$value\"/></xsl:when><xsl:otherwise><span class=\"disable-output-escp\"><xsl:value-of select=\"$value\"/></span></xsl:otherwise></xsl:choose></xsl:template></xsl:stylesheet>",da:"click",db:"3.0.00",e:"JSX_SELECT_XSL",ea:"hO",eb:' maxlength="',f:"JSX_COMBO_XSL",fa:"mousedown",fb:'" ',g:"jsx:///images/select/arrow.gif",ga:"UC",gb:" ",h:"jsx:///images/select/selectover.gif",ha:"mouseover",hb:/^(?:display|margin|left|top|position|backgroundColor|color|visibility|zIndex)$/,i:"jsx:///images/select/selected.gif",ia:"j8",ib:/^(?:backgroundColor|color)$/,j:"<div tabIndex='0' class='jsx30select_option' onmousedown='var e = jsx3.gui.Event.wrap(event); jsx3.gui.Event.publish(e); e.cancelBubble();'>- data unavailable -</div>",ja:' jsxtype="Options" class="jsx30select_optionlist" style="',jb:"C0",k:"<div tabIndex='0' class='jsx30select_option' onmousedown='var e = jsx3.gui.Event.wrap(event); jsx3.gui.Event.publish(e); e.cancelBubble();'>- no match found -</div>",ka:"min-width:",l:'<div tabIndex="0" class="jsx30select_option jsx30select_none" onmousedown="var e=jsx3.gui.Event.wrap(event); jsx3.gui.Event.publish(e); e.cancelBubble();"><span style="left:0px;">{0}</span></div>',la:"px;",m:"jsx30curvisibleoptions",ma:'">',n:"jsx30select_select",na:"</div>",o:"background-color:",oa:"W",p:";",pa:"E",q:"",qa:"S",r:"jsx3.gui.Select.defaultText",ra:"N",s:"jsxtype",sa:"px",t:"jsxid",ta:"div",u:"Display",ua:"_jsxopening",v:"Text",va:"_",w:"Select",wa:"Error focusing first object: ",x:"focusPrevious",xa:"uu",y:"focusNext",ya:"span",z:"jsxselid",za:"solid 1px #a6a6af;solid 1px #e6e6e6;solid 1px #e6e6e6;solid 1px #a6a6af"};var
Da=jsx3.util.Logger.getLogger(k.jsxclass.getName());var
Aa=jsx3.gui.Event;var
W=jsx3.html;k.DEFAULTBACKGROUNDCOLOR=ub.a;k.DEFAULTTEXT=ub.b;k.DEFAULTXSLURL=jsx3.resolveURI(ub.c);k.Sx=(new
jsx3.xml.XslDocument()).loadXML(ub.d);k.SELECTXSLURL=k.DEFAULTXSLURL;k.SELECTXSLID=ub.e;k.COMBOXSLURL=k.DEFAULTXSLURL;k.COMBOXSLID=ub.f;k.ARROWICON=jsx3.resolveURI(ub.g);k.OVERIMAGE=jsx3.resolveURI(ub.h);k.SELECTEDIMAGE=jsx3.resolveURI(ub.i);W.loadImages(k.ARROWICON,k.OVERIMAGE,k.SELECTEDIMAGE);k.NODATAMESSAGE=ub.j;k.NOMATCHMESSAGE=ub.k;k.hL=new
jsx3.util.MessageFormat(ub.l);k.TYPESELECT=0;k.TYPECOMBO=1;k.TYPEAHEADDELAY=250;k.SO=null;k._u=null;k.OR=ub.m;k.DEFAULTCLASSNAME=ub.n;s.init=function(n,r,f,l,i,b){this.jsxsuper(n,r,f,l,i);this.jsxvalue=b;};s.getXSL=function(){return this.qj(k.DEFAULTXSLURL,k.Sx);};s.doValidate=function(){var
B=jsx3.gui.Form;var
wa=this.getRequired()==0;if(!wa){var
Wa=this.getValue();if(this.getType()==0){wa=this.getRecordNode(Wa)!=null;}else wa=Wa!=null&&Wa.length>0;}this.setValidationState(wa?1:0);return this.getValidationState();};s.Uc=function(){var
_=this.getEnabled()!=0?this.getBackgroundColor():this.getDisabledBackgroundColor()||jsx3.gui.Form.DEFAULTDISABLEDBACKGROUNDCOLOR;return _?ub.o+_+ub.p:ub.q;};s.getType=function(){return this.jsxtype==null?0:this.jsxtype;};s.setType=function(g){this.jsxtype=g;this.ce();return this;};s.getDefaultText=function(){return this.jsxdefaulttext!=null&&this.jsxdefaulttext!=null?this.jsxdefaulttext:this._getLocaleProp(ub.r);};s.setDefaultText=function(j){this.jsxdefaulttext=j;return this;};s.iU=function(f,g){if(this._ebKeyDown(f,g))return;var
J=f.srcElement();var
Nb=J.getAttribute(ub.s);var
mb=J.getAttribute(ub.t);var
La=f.hasModifier();if((f.spaceKey()||f.enterKey())&&mb!=null){this.M0(f,J.getAttribute(ub.t));this.hide(true);}else if(Nb==ub.u||Nb==ub.v||Nb==ub.w){if(f.downArrow()&&!La){this.lO();}else return;}else if(f.leftArrow()||f.escapeKey()){this.hide(true);}else if(f.downArrow()){if(La)return;if(J==g.lastChild||mb==null){this.X0(g.firstChild.nextSibling);}else this.X0(J.nextSibling);}else if(f.upArrow()){if(La)return;if(J==g.firstChild.nextSibling||mb==null){this.X0(g.lastChild);}else this.X0(J.previousSibling);}else if(f.tabKey()){if(f.hasModifier(true))return;this.M0(f,J.getAttribute(ub.t));W[f.shiftKey()?ub.x:ub.y](this.getRendered(f),f);this.hide(false);return;}else return;f.cancelAll();};s.JF=function(m,h){if(this._ebKeyDown(m,h))return;this._isfocusing=false;var
ob=m.hasModifier();if(!ob&&(m.downArrow()||m.enterKey())){var
Ra=jsx3.gui.Heavyweight.GO(k.OR);var
R=Ra?(Ra.getRendered(m)).childNodes[0].childNodes[0]:null;if(R!=null&&R.getAttribute(ub.z)==this.getId()){if(!m.enterKey()){this._isfocusing=true;this.X0(R.childNodes[1]);}else{this.M0(m,R.childNodes[1].getAttribute(ub.t));this.hide(false);}}else{var
X=m.enterKey()?ub.q:this.getText();this.lO(X);}m.cancelAll();}else if(m.tabKey()&&m.shiftKey()&&!m.hasModifier(true)){W.focusPrevious(this.getRendered(m),m);}else if(!ob&&(m.rightArrow()||m.leftArrow())){var
A=m.leftArrow();var
ea=this.RQ();var
wa=ea.value;var
Mb=W.getSelection(ea);if(A&&(Mb.getStartIndex()>0||Mb.getEndIndex()>0)||!A&&(Mb.getStartIndex()<wa.length||Mb.getEndIndex()<wa.length))m.cancelBubble();}else{var
nb=this.RQ();var
T=nb.value;jsx3.sleep(function(){if(this.getParent()==null)return;var
va=nb.value;if(T!=va){this.jsxvalue=va;if(k._u)window.clearTimeout(k._u);var
vb=this;k._u=window.setTimeout(function(){if(vb.getParent()==null)return;k._u=null;vb.lO(va);},k.TYPEAHEADDELAY);}},null,this);}};s.gu=function(n,r){this.iU(n,r);};s.RQ=function(e){e=this.getRendered(e);return e?this.getType()==1?e.childNodes[0].childNodes[0].childNodes[0]:e.childNodes[0].childNodes[0]:null;};s.show=function(){var
V=this.getRendered();if(V)this.lO();};s.hO=function(l,a){var
ta=l.srcElement();while(ta!=null&&(!ta.getAttribute||ta.getAttribute(ub.t)==null)){ta=ta.parentNode;if(ta==a)ta=null;}if(ta!=null)this.M0(l,ta.getAttribute(ub.t));this.hide(true);};s.X0=function(q){if(this._jsxsW){try{this._jsxsW.style.backgroundImage=ub.A+jsx3.gui.Block.SPACE+ub.B;}catch(Kb){}this._jsxsW=null;}if(q){W.focus(q);q.style.backgroundImage=ub.A+k.OVERIMAGE+ub.B;this._jsxsW=q;var
Ea=jsx3.gui.Heavyweight.GO(k.OR);Ea.scrollTo(q);}};s.KW=function(i,d){var
G=d.value;var
db=G.indexOf(ub.C)==-1?[ub.D,G,ub.E,G,ub.F].join(ub.q):[ub.G,G,ub.H,G,ub.I].join(ub.q);var
cb=(this.getXML()).selectSingleNode(db);if(!this._isfocusing){if(cb!=null){this.M0(i,cb.getAttribute(ub.t));}else this.jsxvalue=G;delete this[ub.J];}};s.hide=function(i){if(k.SO==this){var
Ia=jsx3.gui.Heavyweight.GO(k.OR);if(Ia)Ia.destroy();if(i)try{this.focus();}catch(Kb){}Aa.unsubscribeLoseFocus(this);k.SO=null;}if(k._u){k._u=null;window.clearTimeout(k._u);}};k.hideOptions=function(){if(k.SO!=null)k.SO.hide();};k.n8=function(){var
Fa=W.getMode();if(Fa==2&&jsx3.CLASS_LOADER.IE7)Fa=Fa+ub.K;return Fa;};s.lO=function(r){if(this._jsxopening)return;var
ab=this.getRendered();if(ab!=null){var
pa=this.getType();var
Q=ab.ownerDocument;if(k.SO!=null)k.SO.hide(false);k.SO=this;var
S=this.getAbsolutePosition((Q.getElementsByTagName(ub.L))[0]);var
Ta=S.W;var
Cb=this.getType()==1;var
cb={};cb.jsxtabindex=this.getIndex()?this.getIndex():0;cb.jsxselectedimage=k.SELECTEDIMAGE;cb.jsxtransparentimage=jsx3.gui.Block.SPACE;cb.jsxdragtype=ub.M;cb.jsxid=this.getId();cb.jsxselectedid=this.getValue()==null?ub.N:this.getValue();cb.jsxpath=jsx3.getEnv(ub.O);cb.jsxpathapps=jsx3.getEnv(ub.P);cb.jsxpathprefix=(this.getUriResolver()).getUriPrefix();cb.jsxappprefix=(this.getServer()).getUriPrefix();cb.jsxmode=k.n8();if(Cb){cb.jsxsortpath=ub.Q;cb.jsx_type=ub.R;}if(r!=null)cb.jsxtext=r;var
bb=this.getXSLParams();for(var I in bb)cb[I]=bb[I];var
w=this.doTransform(cb);if(!jsx3.xml.Template.supports(1))w=W.removeOutputEscapingSpan(w);w=this.Nm(w);if(!w.match(ub.S))w=k.hL.format(this._getLocaleProp(ub.T+(pa==0?ub.U:ub.V)));var
ra=new
jsx3.gui.Painted.Box({width:Ta,height:1,border:ub.W});ra.calculate();var
jb=ra.Sh();var
Ka=ub.X+jb+ub.Y+ub.Z;var
Na=ub._+this.getId()+ub.aa+this.pi(ub.ba,ub.ca)+this.pi(ub.da,ub.ea)+this.pi(ub.fa,ub.ga)+this.pi(ub.ha,ub.ia)+ub.ja+this.Uc()+ub.ka+jb+ub.la+this.Gd()+this.Di()+this.We()+this.Ak()+ub.ma+Ka+w+ub.na;var
ib=new
jsx3.gui.Heavyweight(k.OR,this);ib.setHTML(Na);ib.setScrolling(true);ib.addXRule(ab,ub.oa,ub.oa,0);ib.addXRule(ab,ub.pa,ub.pa,0);ib.addYRule(ab,ub.qa,ub.ra,0);ib.addYRule(ab,ub.ra,ub.qa,0);ib.show();var
Qa=ib.getRendered();var
Ga=Qa.childNodes[0].childNodes[0];var
rb=Math.max(Ga.offsetWidth-2,Ga.clientWidth)+ub.sa;if(jsx3.CLASS_LOADER.IE)for(var
R=0;R<Ga.childNodes.length;R++){var
Kb=Ga.childNodes[R];if(Kb.nodeName&&Kb.nodeName.toLowerCase()==ub.ta&&Kb.getAttribute(ub.t))Ga.childNodes[R].style.width=rb;}if(pa==0||r==null){this._jsxopening=true;jsx3.sleep(function(){if(this.getParent()==null)return;delete this[ub.ua];var
ha=this.getRecordNode(this.getValue());var
wa=ha?(this.getDocument()).getElementById(this.getId()+ub.va+this.getValue()):null;try{if(wa)this.X0(wa);else W.focus(Ga);}catch(Nb){Da.info(ub.wa+jsx3.NativeError.wrap(Nb));}},null,this);}else W.focus(this.RQ());Aa.subscribeLoseFocus(this,ab,ub.xa);}};s.uu=function(c){var
Z=c.event.srcElement();if(!this.containsHtmlElement(Z))this.hide(false);};s.gi=function(d,a,n){var
Qa=this.Wl(true,d);if(a){var
Ja=Qa.recalculate(d,a,n);if(!Ja.w&&!Ja.h)return;var
O=Qa.lg(0);O.recalculate({parentwidth:Qa.Sh(),parentheight:Qa.Zg()},a?a.childNodes[0]:null,n);var
L=O.lg(0);if(this.getType()!=0){var
oa=L.lg(0);oa.recalculate({parentwidth:O.Sh()-1,parentheight:O.Zg()},a?W.selectSingleElm(a,0,0,0):null,n);}else L.recalculate({parentwidth:O.Sh(),parentheight:O.Zg()},a?a.childNodes[0].childNodes[0]:null,n);}};s.Jm=function(e){if(this.getParent()&&(e==null||isNaN(e.parentwidth)||isNaN(e.parentheight))){e=(this.getParent()).ng(this);}else if(e==null)e={};var
_=this.getRelativePosition()!=0&&(!this.getRelativePosition()||this.getRelativePosition()==1);var
Mb,Y,Ib,T,Va;e.tagname=ub.ya;e.border=(Mb=this.getBorder())!=null&&Mb!=ub.q?Mb:ub.za;e.margin=_&&(Y=this.getMargin())!=null&&Y!=ub.q?Y:null;if(!e.boxtype)e.boxtype=_?ub.Aa:ub.Ba;if(e.left==null)e.left=!_&&!jsx3.util.strEmpty(this.getLeft())?this.getLeft():0;if(e.top==null)e.top=!_&&!jsx3.util.strEmpty(this.getTop())?this.getTop():0;if(e.width==null)e.width=(T=this.getWidth())!=null?T:100;if(e.height==null)e.height=(Va=this.getHeight())!=null?Va:18;e.padding=ub.Ca;var
y=new
jsx3.gui.Painted.Box(e);var
qa={};qa.tagname=ub.ta;qa.boxtype=ub.Aa;if((Ib=this.getPadding())!=null&&Ib!=ub.q){qa.padding=Ib;}else qa.padding=ub.Da;qa.parentwidth=y.Sh();qa.parentheight=y.Zg();qa.left=0;qa.top=0;qa.width=ub.Ea;qa.height=ub.Ea;var
Na=new
jsx3.gui.Painted.Box(qa);y.Td(Na);if(this.getType()==0){qa={};qa.tagname=ub.ta;qa.boxtype=ub.Aa;qa.padding=ub.Fa;qa.parentwidth=Na.Sh();qa.parentheight=Na.Zg();qa.width=ub.Ea;qa.height=ub.Ea;var
A=new
jsx3.gui.Painted.Box(qa);Na.Td(A);}else{qa={};qa.tagname=ub.ta;qa.boxtype=ub.Ga;var
A=new
jsx3.gui.Painted.Box(qa);Na.Td(A);qa={};qa.tagname=ub.Ha;qa.boxtype=ub.Aa;qa.parentwidth=Na.Sh()-1;qa.parentheight=Na.Zg();qa.width=ub.Ea;qa.height=ub.Ea;qa.padding=ub.Ia;qa.empty=true;qa.border=ub.Ja;var
E=new
jsx3.gui.Painted.Box(qa);A.Td(E);}return y;};s.paint=function(){this.applyDynamicProperties();if(this.getXmlAsync()){var
t=this.getXML();this.ig(0,t);}var
ga=this.getId();var
Z=this.getEnabled()==1;var
Cb={};if(Z){Cb[ub.fa]=true;if(this.hasEvent(ub.Ka))Cb[ub.La]=true;if(this.getType()==1){Cb[ub.ba]=ub.Ma;Cb[ub.Na]=true;}else Cb[ub.ba]=ub.Oa;}var
gb=this.Bf(Cb,0);var
jb=this.renderAttributes(null,true);var
la=this.Wl(true);la.setAttributes(ub.Pa+ga+ub.aa+this.Wb()+ub.Qa+this.dd()+ub.Ra+jb+gb+this.md());la.setStyles(this.Kh()+this.Uc()+ub.Sa+this.getIcon(k.ARROWICON)+ub.Ta+this.Kk()+this.qg()+this.Ne()+this.Vg()+this.yg(1));var
qb=la.lg(0);qb.setAttributes(ub.Ua+this.Do());qb.setStyles(ub.q);if(this.getType()==0){var
Jb=qb.lg(0);Jb.setAttributes(ub.Va+W.pe);Jb.setStyles(this.Gd()+this.Di()+this.We()+this.Kh()+this.Ak());var
ca=(la.paint()).join((qb.paint()).join((Jb.paint()).join(jsx3.util.strEscapeHTML(this.ii()))));}else{var
Jb=qb.lg(0);Jb.setAttributes(ub.Wa);var
Wa=Jb.lg(0);Wa.setAttributes(this.md()+this.paintMaxLength()+this.Wn()+ub.Xa+jsx3.util.strEscapeHTML(this.ii())+ub.Ya+this.pi(ub.Za,ub._a,3));Wa.setStyles(this.Gd()+this.Di()+this.We()+this.Kh()+this.Ak()+this.Uc());var
ca=(la.paint()).join((qb.paint()).join((Jb.paint()).join((Wa.paint()).join(ub.q))));}return ca;};s.onXmlBinding=function(m){this.jsxsupermix(m);this.setText(this.ii());};s.Xg=function(b,q){if(!b.leftButton())return;if((b.srcElement()).tagName.toLowerCase()!=ub.ab){if(k.SO==this){this.hide(true);}else this.lO();}else this.X0();};s.Vl=function(h,e){W.focus(this.RQ(e));this.X0();};s.UC=function(a,l){a.cancelBubble();};s.j8=function(i,d){var
tb=k.rH(i,d);if(tb){if(i.isFakeOver(tb))return;this._isfocusing=true;this.X0(tb);}};k.rH=function(j,c){var
K=j.srcElement();while(K!=null&&K.getAttribute(ub.t)==null){K=K.parentNode;if(K==c||K==c.ownerDocument)K=null;}return K;};s.setText=function(b){this.i6(b);return this;};s.i6=function(e){var
va=this.RQ();if(va)if(this.getType()==1)va.value=e;else va.innerHTML=jsx3.util.strEscapeHTML(e);};s.focus=function(){var
rb=this.getType()==1?this.RQ():this.getRendered();if(rb)W.focus(rb);return rb;};s.setValue=function(r){this.M0(this.isOldEventProtocol(),r);return this;};s.M0=function(a,f){if(f!=this.getValue()){var
cb=true;if(a instanceof Aa)cb=this.doEvent(ub.bb,{objEVENT:a,strRECORDID:f});if(cb===false)return;this.jsxvalue=f;this.redrawRecord(f,2);if(a)this.doEvent(ub.cb,{objEVENT:a instanceof Aa?a:null,strRECORDID:f,_gipp:1});}};s.getIcon=function(p){return !jsx3.util.strEmpty(this.jsxicon)?(this.getServer()).resolveURI(this.jsxicon):p;};s.setIcon=function(a){this.jsxicon=a;};s.getValue=function(){return this.jsxvalue!=null?this.jsxvalue:null;};s.getText=function(){var
Za=this.getRecordNode(this.getValue());if(Za!=null){var
wa=Za.getAttribute(ub.Q);return wa!=null?wa:Za.getAttribute(ub.t);}else return this.getType()==1||this.getValue()!=null?this.getValue():this.getDefaultText();};s.redrawRecord=function(p,h){if(this.getValue()==p){var
Ca=this.getRecordNode(p);if(Ca!=null){var
bb=Ca.getAttribute(ub.Q);this.i6(bb!=null?bb:Ca.getAttribute(ub.t));}else this.i6(this.getType()==0?this.getDefaultText():p!=null?p:ub.q);}return this;};k.getVersion=function(){return ub.db;};s.containsHtmlElement=function(e){var
Na=jsx3.gui.Heavyweight.GO(k.OR);return this.jsxsuper(e)||Na!=null&&Na.containsHtmlElement(e);};s.getMaxLength=function(){return this.jsxmaxlength!=null?this.jsxmaxlength:null;};s.setMaxLength=function(a){a=parseInt(a);this.jsxmaxlength=a>0?a:null;return this;};s.paintMaxLength=function(l){return this.getMaxLength()!=null?ub.eb+this.getMaxLength()+ub.fb:ub.q;};s.dd=function(){var
db=this.getClassName();return k.DEFAULTCLASSNAME+(db?ub.gb+db:ub.q);};s.updateGUI=function(q,n){if(q.search(ub.hb)==0)this.jsxsuper(q,n);if(q.search(ub.ib)==0){var
qa=this.RQ();if(qa)try{qa.style[q]=n;}catch(Kb){}}};s.emInit=function(a){this.jsxsupermix(a);this.subscribe(ub.cb,this,ub.jb);};s.emCollapseEdit=function(c){this.hide(false);};s.C0=function(i){this.commitEditMask(i.context.objEVENT,true);};});jsx3.Select=jsx3.gui.Select;