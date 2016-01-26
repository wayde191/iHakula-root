jsx3.Class.defineClass("jsx3.amp.util.ToolbarManager",null,null,function(e,p){var
w=jsx3.amp;p.init=function(s){this._bar=s;this._items=jsx3.$A();this._sections=jsx3.$A();this._lastInSection={};};p.addSection=function(h,r){this._sections.push({name:h,div:r});};p.addItem=function(n){var
wa=n.getSection();var
G=-1;var
A=this._sections.find(function(h){G++;return h.name==wa;});var
Oa=false,F=null;if(A){var
H=this._lastInSection[wa];if(H){F=H.getNextSibling();}else{Oa=A.div;for(var
ea=G-1;ea>=0;ea--){var
Ta=this._sections[ea].name;if(this._lastInSection[Ta]){F=this._lastInSection[Ta].getNextSibling();break;}}}}var
Eb=n.paint(Oa);this._bar.insertBefore(Eb,F);this._lastInSection[wa]=Eb;};});jsx3.Class.defineClass("jsx3.amp.util.ToolbarItem",null,null,function(s,p){var
ub={a:".",b:"id",c:"img",d:"tip",e:"section",f:"button",g:"jsx3.gui.ToolbarButton",h:"false;",i:"enabled",j:"false",k:"true",l:"state",m:"native",n:"execute"};var
ha=jsx3.amp;var
ab=ha.Bindable;p.init=function(l,d){this._ext=l;this._xml=d;};p.getId=function(){return this._ext.getId()+ub.a+this._xml.attr(ub.b);};p.getType=function(){return this._xml.nname();};p.getImg=function(){var
Xa=this._xml.attr(ub.c);return Xa?jsx3.net.URIResolver.JSX.relativizeURI((this._ext.getPlugIn()).resolveURI(Xa)):null;};p.getTip=function(){return this._xml.attr(ub.d);};p.getSection=function(){return this._xml.attr(ub.e);};p.paint=function(e){var
Jb=null;var
B=this.getType();if(B==ub.f){jsx3.require(ub.g);Jb=new
jsx3.gui.ToolbarButton(this.getId());Jb.setImage((this.getImg()).toString());Jb.setTip(this.getTip());Jb.setDivider(e);Jb.setEvent(ub.h,jsx3.gui.Interactive.EXECUTE);Jb.subscribe(jsx3.gui.Interactive.EXECUTE,this,this._execute);var
F=this._xml.attr(ub.i);if(F)if(ha.PlugIn.isBindExpr(F)){(this._ext.getPlugIn()).regBindExpr(F,function(j){Jb.setEnabled(j,true);});}else if(F==ub.j)Jb.setEnabled(false);else if(F==ub.k)Jb.setEnabled(true);else Jb.setEnabled(this._ext.eval(F));var
t=this._xml.attr(ub.l);if(t){Jb.setType(jsx3.gui.ToolbarButton.TYPECHECK);if(ha.PlugIn.isBindExpr(t)){(this._ext.getPlugIn()).regBindExpr(t,function(k){Jb.setState(k,true);});}else Jb.setState(this._ext.eval(t));}}else if(B==ub.m){var
ra=(this._xml.toNative()).getFirstChild();Jb=(((this._ext.getPlugIn()).getServer()).getRootBlock()).loadXML(ra,false,this._ext.getPlugIn());if(Jb.setDivider)Jb.setDivider(e);}else throw new
jsx3.Exception();return Jb;};p._execute=function(o){this._ext.eval(this._xml.attr(ub.n),{item:o.target});};});
