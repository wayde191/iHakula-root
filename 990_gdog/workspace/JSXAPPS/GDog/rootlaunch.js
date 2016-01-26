/**
  *@author: Wayde Sun
  *@Time: 2009.8.23
  *@Version: 1.0
  *  GI Dog launch file
  */
jsx3.lang.Package.definePackage("tibco", function(tibco) {
});

if(!tibco.gdog) {
/**
 * The root package for all GDog UI classes.
 */

jsx3.Package.definePackage("tibco.gdog", function(gdog){

  //1: register plug-in; 2: load prototype; 3: load plug-in.
  gdog.registerApp = function(objServer, strPath){
	  var engine = jsx3.amp.Engine.getEngine(objServer);
	  var ids = jsx3.$A();
	  var allRegistered = null;

	  if(engine){
	    var pluginDirPath = objServer.resolveURI(strPath + '/plugins');
		var pluginsXML = new jsx3.xml.Document().load(objServer.resolveURI(strPath + '/plugins.xml'));

		//Register each plug-in referenced in plugins.xml
		//Support plug-ins in the plugins directory as well as those inlined into plugins.xml
		for(var i = pluginsXML.getChildIterator(); i.hasNext();) {
		  var pluginNode = i.next();
		  var id = pluginNode.getAttribute('id');
		  jsx3.log('Registering plug-in: ' + id);
		  var c = engine.register(id, pluginDirPath, pluginNode.getFirstChild()? pluginNode:null);
		  ids.push(id);
		  allRegistered = allRegistered ? allRegistered.and(c) : c;
		}

		if(jsx3.ide) {
		  if(allRegistered) {
		    allRegistered.when(function() {
			  //Register the prototypes/directory of all plug-ins
			  var plugIn = jsx3.ide.getPlugIn('jsx3.ide.palette.prototypes');
			  if(plugIn) {
				  ids.each(function(e) {
				    var p = engine.getPlugIn(e);
					var protoPath = strPath + '/plugins/' + e + '/prototypes';
					var dir = jsx3.ide.PROJECT.getDirectory().resolve(protoPath);
					if(dir.isDirectory()) {
						jsx3.log('Found prototypes directory ' + dir);
						plugIn.addFolder(protoPath, objServer, p.getName());
					}else {
					  jsx3.log('No prototype directory ' + dir);
					}
				  });
			  }
			  //Load all the plug-ins if in the IDE so that all prototypes are available.
			  ids.each(function(e) {
			    jsx3.log('Loading plug-in ' + e);
				engine.getPlugIn(e).load();
			  });
			});
		  }
		}
	  }
  };
});
}