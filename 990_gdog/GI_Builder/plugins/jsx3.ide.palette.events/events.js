(jsx3.$O(this)).extend({onModelEventEdit:function(l,h,s){var
aa=jsx3.ide.getSelected();for(var
Lb=0;Lb<aa.length;Lb++){var
Ab=aa[Lb];var
Ma=Ab.hasEvent(h);Ab.setEvent(s,h);if(Ma!=Ab.hasEvent(h))Ab.repaint();}this.publish({subject:"eventChanged",o:aa,key:h,value:s});for(var
Lb=0;Lb<aa.length;Lb++)if(aa[Lb].getPersistence()!=jsx3.app.Model.PERSISTNONE){(jsx3.ide.getEditorForJSX(aa[Lb])).setDirty(true);break;}},onModelEventMenuExecute:function(r){var
Ma=jsx3.ide.getSelected();for(var
U=0;U<Ma.length;U++){Ma[U].removeEvent(r);Ma[U].repaint();}this.publish({subject:"eventChanged",o:Ma,key:r,value:null});this.onModelEventChange();},onModelEventChangeSleep:function(){jsx3.sleep(this.onModelEventChange,"jsx3.ide.onModelEventChange",this);},onModelEventChange:function(){var
Ha=jsx3.IDE.getJSXByName("jsxmodelevents");if(Ha==null)return;var
M=true;var
Ka=jsx3.ide.getSelected();var
A=new
jsx3.util.List();for(var
Hb=0;Hb<Ka.length&&M;Hb++){if(!Ka[Hb].instanceOf(jsx3.gui.Interactive)){M=false;break;}var
Cb=jsx3.ide.getTemplateForObject("event",Ka[Hb]);if(!Cb){M=false;(this.getLog()).error("Error loading events file for class "+objJSX.getClass()+".");}else if(A.indexOf(Cb)<0)A.add(Cb);}if(M)if(A.size()==1){var
Cb=A.get(0);var
db=Cb.selectNodes("/data/record");var
Ib={},Ta={};for(var
Hb=0;Hb<Ka.length;Hb++)for(var
sa=db.iterator();sa.hasNext();){var
O=sa.next();var
tb=O.getAttribute("jsxid");var
Db=Ka[Hb].getEvent(tb);if(Hb==0)Ib[tb]=Db;else if(Ib[tb]!==Db){Ta[tb]=true;delete Ib[tb];}}for(var
sa=db.iterator();sa.hasNext();){var
O=sa.next();var
tb=O.getAttribute("jsxid");O.setAttribute("value",Ib[tb]);O.setAttribute("jsxmulti",Ta[tb]?"1":null);}(jsx3.IDE.getCache()).setDocument(Ha.getXMLId(),Cb);Ha.repaintData();}else M=false;return M;}});
