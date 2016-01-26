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
	var gdogTestRunner = "jsxplugin://tibco.gdog/classes/tibco/gdog/app/TestRunner.js";

	GDOG.HeadLogo = "jsxplugin://tibco.gdog/images/header_logo.jpg";
	GDOG.HeadBar = "jsxplugin://tibco.gdog/images/headerBar.jpg";
	GDOG.ContentBackgroundImage = "jsxplugin://tibco.gdog/images/fadeUpBkgrdTile_v2.jpg";
	GDOG.ContentDashLine = "jsxplugin://tibco.gdog/images/dot.png";
	GDOG.ContentBtnRun = "jsxplugin://tibco.gdog/images/run.png";

    gDog.init = function(strName) {
	  this.jsxsuper(strName);
	};

    gDog.resolveURI = function(strURI) {
		//var myresolver = (this.getPluginResolver()) ? this.getPluginResolver() : plugIn
        //return myresolver.resolveURI(strURI)
		//jsx3.log(plugIn.resolveURI(strURI));
		return plugIn.resolveURI(strURI);
    };

    gDog.getLogoImage = function() {
       //return (this.desktoplogo) ? this.desktoplogo : DESKTOP.HeadLogo;
	   return GDOG.HeadLogo;
    };

	gDog.onclick = function(objEvent, objGUI) {
		var src = plugIn.resolveURI(gdogTestRunner);
		var scriptNode = document.createElement("script");
		scriptNode.setAttribute("src", src);
		scriptNode.setAttribute("type", "text/javascript");
		document.documentElement.firstChild.appendChild(scriptNode);
	};


	GDOG.templateXML = server.loadInclude("jsxplugin://tibco.gdog/templates/gdog.xml","gdog","xml").toString();

	if(jsx3.CLASS_LOADER.getType() == 'fx2'){
	  GDOG.templateXML = GDOG.templateXML.replace(/inlinebox/g, 'div');
	}

	jsx3.gui.Template.compile(GDOG.templateXML, GDOG.jsxclass);

});