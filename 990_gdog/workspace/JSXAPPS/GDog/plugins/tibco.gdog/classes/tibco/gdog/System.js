/**
  *@author: Wayde Sun
  *@Time: 2009.8.23
  *@Version: 1.0
  *  GI Dog System file
  */
try {
    (function(plugIn) {

  jsx3.lang.Class.defineClass("tibco.gdog.System", null, null, function(system) {

    /**
     * {tibco.gdog.System} The current server object.  
     * @private
     * @jsxobf-clobber
     */
	system.pluginInstance = null;
  system.server = plugIn.getServer();
	system.plugIn = plugIn;
	system.gSuitePath    = plugIn.resolveURI("jsxplugin://tibco.gdog/classes/tibco/gdog/app/gunit/gSuite.js");
	system.userTestsPath = plugIn.resolveURI("jsxplugin://tibco.gdog/tests");
	system.gdogTestPagesPath = plugIn.resolveURI("jsxplugin://tibco.gdog/tests/suite.js");
	
	system.extend = function(target, source){
	  for(var o in source){
	    target[o] = source[o];
	  }
	  return target;
	};
  });
  jsx3.log("************ tibco.gdog.System loaded");

  })(this);
  }catch(ex) {
    jsx3.log("ERROR: " + ex);
  }