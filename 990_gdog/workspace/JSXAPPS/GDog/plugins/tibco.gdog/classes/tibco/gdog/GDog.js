/**
  *@author: Wayde Sun
  *@Time: 2009.8.23
  *@Version: 1.0
  *  GI Dog plug-in for AMP
  */

jsx3.require('jsx3.gui.Template');

jsx3.lang.Class.defineClass("tibco.gdog.GDog", jsx3.gui.Template.Block, null,
  function(GDOG, gDog){
	  
	var plugIn = tibco.gdog.System.plugIn;
	var server = tibco.gdog.System.server;
	var gdogTestRunner  = "jsxplugin://tibco.gdog/classes/tibco/gdog/app/TestRunner.js";
  var gdogDebugWindow = "jsxplugin://tibco.gdog/classes/tibco/gdog/app/gdogDebugger.js";

	GDOG.HeadLogo =               "jsxplugin://tibco.gdog/images/header_logo.jpg";
	GDOG.HeadBar =                "jsxplugin://tibco.gdog/images/headerBar.jpg";
	GDOG.ContentBackgroundImage = "jsxplugin://tibco.gdog/images/fadeUpBkgrdTile_v2.jpg";
	GDOG.ContentDashLine =        "jsxplugin://tibco.gdog/images/dot.png";
	GDOG.ContentBtnRun =          "jsxplugin://tibco.gdog/images/run.png";
  GDOG.DebuggerBtn =            "jsxplugin://tibco.gdog/images/debug.png";
	GDOG.ProgressBar =            "jsxplugin://tibco.gdog/images/blue.png";

    gDog.init = function(strName) {
	  this.jsxsuper(strName);
	};

    gDog.resolveURI = function(strURI) {
		return plugIn.resolveURI(strURI);
    };

    gDog.getLogoImage = function() {
	   return GDOG.HeadLogo;
    };

	gDog.onclick = function(objEvent, objGUI) {
		tibco.gdog.System.pluginInstance = this;
		var src = plugIn.resolveURI(gdogTestRunner);
		var scriptNode = document.createElement("script");
		scriptNode.setAttribute("src", src);
		scriptNode.setAttribute("type", "text/javascript");
		document.documentElement.firstChild.appendChild(scriptNode);
	};
  
  gDog.onDebugger = function(){
    if(!window.__gdogDebugWindow__){
      var src = plugIn.resolveURI(gdogDebugWindow);
      var scriptNode = document.createElement("script");
      scriptNode.setAttribute("src", src);
      scriptNode.setAttribute("type", "text/javascript");
      document.documentElement.firstChild.appendChild(scriptNode);
    }
    function _showDebugWindow(){
      if(window.__gdogDebugWindow__){
          window._gdogDebuggerWindow = new window.__gdogDebugWindow__();
          window._gdogDebuggerWindow.open();
      }else{
        setTimeout(_showDebugWindow, 0);
      }
    }
    _showDebugWindow();
  };
  
  gDog.showMessageForSelectedProblemTest = function(){
  this.gdogProblemsList     = this.getRenderedBox('gdogProblemsList');
    if(this.gdogProblemsList.selectedIndex != -1 && top.__gdog.testManager && top.__gdog.testManager.showMessageForSelectedProblemTest){
      top.__gdog.testManager.showMessageForSelectedProblemTest();
    }
  };


	GDOG.templateXML = server.loadInclude("jsxplugin://tibco.gdog/templates/gdog.xml","gdog","xml").toString();

	if(jsx3.CLASS_LOADER.getType() == 'fx2'){
	  GDOG.templateXML = GDOG.templateXML.replace(/inlinebox/g, 'div');
	}

	jsx3.gui.Template.compile(GDOG.templateXML, GDOG.jsxclass);

});