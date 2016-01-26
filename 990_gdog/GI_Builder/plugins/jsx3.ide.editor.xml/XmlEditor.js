jsx3.Class.defineClass("jsx3.ide.XmlEditor",jsx3.ide.TextEditor,null,function(d,h){var
ub={a:"readwrite",b:"saved",c:"Cannot save text editor as XML because it is not valid XML: ",d:"Cannot save file to blank url.",e:"",f:/\S/,g:"Error parsing XML document: ",h:"Alert",i:"The XML source is not a valid XML document. The following XML parsing error occurred: <br/><br/><b>",j:"</b><br/><br/> Please fix the error before entering formatted markup view."};h.Cm=ub.a;h.save=function(){var
Ma=this.getOpenFile();if(Ma){var
Ua=this.getEditorText();var
Ab=new
jsx3.xml.Document();Ab.loadXML(Ua);if(!Ab.hasError()){if(jsx3.ide.writeUserXmlFile(Ma,Ab)){this.revert();this.setDirty(false);this.publish({subject:ub.b});return true;}else return false;}else ((this.getPlugIn()).getLog()).error(ub.c+Ab.getError());if(jsx3.ide.writeUserFile(Ma,Ua)){this.setDirty(false);this.publish({subject:ub.b});return true;}}else ((this.getPlugIn()).getLog()).error(ub.d);return false;};h.loadFromFile=function(){var
Ia=this.getOpenFile();var
sb=ub.e;if(Ia&&Ia.isFile()){var
V=new
jsx3.xml.Document();V.load(Ia.toURI());if(!V.hasError()){sb=V.toString();}else{sb=Ia.read();if(sb.match(ub.f))((this.getPlugIn()).getLog()).warn(ub.g+V.getError());}}this.setEditorText(sb);};h.onBeforeSetMode=function(c){var
x=this.getMode();if(x==ub.a){var
ca=new
jsx3.xml.Document();ca.loadXML(this.getEditorText());if(ca.hasError()){var
Wa=ca.getError();((this.getPlugIn()).getServer()).alert(ub.h,ub.i+Wa.description+ub.j,null,null,{width:400,height:225});return false;}}};h.onSetMode=function(c,o){var
rb=this.getMode();if(o==ub.a){var
wb=new
jsx3.xml.Document();wb.loadXML(this.getEditorText());c.setSourceDocument(wb);}c.doShow();};h.getPlugIn=function(){return jsx3.IDE.XmlEditorPlugin;};h.supportsReload=function(){return true;};});
