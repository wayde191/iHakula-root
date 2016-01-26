jsx3.Class.defineClass("jsx3.amp.util.Wizard",null,[jsx3.util.EventDispatcher],function(q,h){var
ub={a:"next",b:"previous",c:"cancel",d:"finish",e:"controller",f:"_wizard"};var
w=jsx3.amp;q.NEXT=ub.a;q.PREVIOUS=ub.b;q.CANCEL=ub.c;q.FINISH=ub.d;(jsx3.$O(h)).extend({init:function(){this.XX=jsx3.$A();this.dE=-1;this.WS={};},getSession:function(){return this.WS;},loadController:function(a){return q.PLUGIN.loadRsrcComponent(ub.e,a);},renderIn:function(r){this.VS=this.loadController(r);this.VS.getWizard=(jsx3.$F(function(){return this;})).bind(this);if(this.XX.length>0){this.dE=0;var
Ga=this.XX[0];this.pX(Ga);}},setButtonState:function(p,s,j,c){this.VS.setButtonState(p,s,j,c);},pX:(jsx3.$F(function(f){this.setButtonState(f.mayPrevious(),f.mayNext(),f.mayFinish(),f.mayCancel());var
bb=f.getUI();if(bb){this.rt(bb);this.VE(f);}else{this.rt();(f.tV(this.VS.getContentPane())).when((jsx3.$F(this.VE)).bind(this,[f]));}})).slept(),VE:function(p){this.VS.setTitle(p.getTitle());p.onEnter(this.WS);var
Ea=p.getFirstResponder();if(Ea)Ea.focus();},rt:function(d){(jsx3.$A((this.VS.getContentPane()).getChildren())).each(function(k){k.setDisplay(d==k?jsx3.gui.Block.DISPLAYBLOCK:jsx3.gui.Block.DISPLAYNONE,true);});},cancel:function(){var
eb=this.XX[this.dE];if(!eb||eb.mayCancel())this.publish({subject:q.CANCEL});},finish:function(){var
lb=this.XX[this.dE];if(lb&&lb.mayFinish()){var
Ib=lb.onNext();(this.g6(Ib)).when((jsx3.$F(function(){lb.onExit(this.WS);this.publish({subject:q.FINISH});})).bind(this));}},next:function(){var
Kb=this.XX[this.dE];if(Kb&&Kb.mayNext()){var
ua=Kb.onNext();(this.g6(ua)).when((jsx3.$F(function(){this.l4(Kb,ua,1);this.publish({subject:q.NEXT});})).bind(this));}},previous:function(){var
Ja=this.XX[this.dE];if(Ja&&Ja.mayPrevious()){var
Va=Ja.onPrevious();(this.g6(Va)).when((jsx3.$F(function(){this.l4(Ja,Va,-1);this.publish({subject:q.PREVIOUS});})).bind(this));}},g6:jsx3.$Y(function(a){var
Cb=(a.args())[0];if(Cb.alert){var
x=this.VS.getAncestorOfType(jsx3.gui.Dialog)||this.VS.getServer();x.alert(Cb.title,Cb.message,function(n){n.doClose();if(Cb.ok)a.done();});}else if(Cb.ok)a.done();}),l4:function(s,m,l){var
xa=this.dE+l;var
_=this.XX[xa];if(_){s.onExit(this.WS);this.dE=xa;this.pX(_);}},addPane:function(a){a._wizard=this;this.XX.push(a);},getPane:function(d){return this.XX[d];},getPaneCount:function(){return this.XX.length;},getPaneIndex:function(m){return this.XX.indexOf(m);},removePane:function(o){var
qb=this.XX.splice(o,1);if(qb[0])delete qb[0][ub.f];}});});jsx3.Class.defineClass("jsx3.amp.util.WizardPane",null,[jsx3.util.EventDispatcher],function(k,e){var
U=jsx3.amp;e.init=function(b,n){this.iG=b;this.sV=n;};e.tV=jsx3.$Y(function(f){var
H=(f.args())[0];if(this.iG instanceof U.Resource){(this.iG.load()).when((jsx3.$F(function(){if(this.sV instanceof U.PlugIn){this.VS=this.sV.loadRsrcComponent(this.iG,H);}else this.VS=H.loadXML(this.iG.getData(),null,this.sV);this.VS.getPane=(jsx3.$F(function(){return this;})).bind(this);f.done();})).bind(this));}else if(this.iG instanceof jsx3.xml.Entity){this.VS=H.loadXML(this.iG,null,this.sV);this.VS.getPane=(jsx3.$F(function(){return this;})).bind(this);if(this.sV instanceof U.PlugIn)this.VS.getPlugIn=(jsx3.$F(function(){return this;})).bind(this.sV);f.done();}else throw new
jsx3.Exception();});e.getTitle=function(){return this.VS.getTitle?this.VS.getTitle():null;};e.getUI=function(){return this.VS;};e.getFirstResponder=function(){return this.VS.getFirstResponder?this.VS.getFirstResponder():null;};e.getWizard=function(){return this._wizard;};e.onNext=function(){if(this.VS.onTryNext){var
zb=this.VS.onTryNext();if(zb)return zb;}return {ok:true};};e.onPrevious=function(){if(this.VS.onTryPrevious){var
B=this.VS.onTryPrevious();if(B)return B;}return {ok:true};};e.onEnter=function(a){if(this.VS.onReveal)this.VS.onReveal(a);};e.onExit=function(r){if(this.VS.onConceal)this.VS.onConceal(r);};e.mayPrevious=function(){var
K=(this.getWizard()).getPaneIndex(this);return K>0;};e.mayCancel=function(){return true;};e.mayNext=function(){var
Ca=(this.getWizard()).getPaneIndex(this);return Ca<(this.getWizard()).getPaneCount()-1;};e.mayFinish=function(){var
rb=(this.getWizard()).getPaneIndex(this);return rb==(this.getWizard()).getPaneCount()-1;};});
