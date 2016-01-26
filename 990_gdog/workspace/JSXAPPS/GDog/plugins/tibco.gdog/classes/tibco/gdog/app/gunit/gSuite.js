/**
  *@author: Wayde Sun
  *@Time: 2009.9.19
  *@Version: 1.0
  *  GI Dog gSuite file, set tests
  */
  
  gi.gdog.gunit = gi.gdog.gunit || {};
  if(!gi.gdog.gunit.gSuite){
	gi.gdog.gunit.gSuite = {
		suite : function(){
			return gi.gdog.gunit.gdogUnit.newGDogSuite(tibco.gdog.System.gdogTestPagesPath);
		},
		
		isLoaded : function(){
			return true;
		}
	};	
  }