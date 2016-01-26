/**
  *@author: Wayde Sun
  *@Time: 2009.9.5
  *@Version: 1.0
  *  GI Dog Runner file, load all resource needed
  *  Singleton Model
  */

(function(){
  if(!window.gi) {window.gi = {};}
  if(!gi.gdog){
	  window.gi.gdog = (function(){

	  var uniqueInstance = null;
		var gdogJSIndexPath = "jsxplugin://tibco.gdog/classes/tibco/gdog/app/";
		//test cases
		var gdogTestCasesIndexPath = "jsxplugin://tibco.gdog/tests/";
		
		function constructor(){
			return {
				plugin : tibco.gdog.System.plugIn,
				server : tibco.gdog.System.server,
				loadResources : function(indexPath, jsFileArray){
					for(var i = 0; i < jsFileArray.length; i++){
						var src = this.plugin.resolveURI(indexPath + jsFileArray[i]);
						var scriptNode = document.createElement("script");
						scriptNode.setAttribute("src", src);
						scriptNode.setAttribute("type", "text/javascript");
						document.documentElement.firstChild.appendChild(scriptNode);
						}
					}
			}
		}
		
		return {
		  getInstance: function(){
		    if(!uniqueInstance){
			  uniqueInstance = constructor();
        uniqueInstance.loadResources(gdogTestCasesIndexPath,["suite.js"]);
			  uniqueInstance.loadResources(gdogJSIndexPath,["TestContainerController.js", "gdogDebugger.js", "gdogTestManager.js", "gdogMainData.js", "gdogTestSuite.js", "gunit/gSuite.js", "gunit/gUnitCore.js", "gunit/gdogUnit.js"]);
			}
			return uniqueInstance;
		  }
		};
	  })();
  }
  
  window.__gdog = window.gi.gdog.getInstance();

  function _init(){
	  if(gi.gdog.loaded){
		  __gdog.testManager = new gi.gdog.gdogTestManager();
		  __gdog.mainData = new gi.gdog.gdogMainData();
		  __gdog.mainData.kickOffTests();
		 }else{
			 setTimeout(_init, 0);
		}
  }

  _init();
})();