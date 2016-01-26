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
     * {jsx3.app.Server} The current server object.  This allows individual plugin projects to set the server object when not being run
     * from the administrator project.
     * @private
     * @jsxobf-clobber
     */
    system.server = plugIn.getServer();
	system.plugIn = plugIn;
  });
  jsx3.log("************ System loaded");

  })(this);
  }catch(ex) {
    jsx3.log("ERROR: " + ex);
  }