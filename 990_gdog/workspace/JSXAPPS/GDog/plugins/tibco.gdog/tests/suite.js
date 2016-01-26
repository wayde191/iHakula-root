/**
  *@author: Wayde Sun
  *@Time: 2009.9.21
  *@Version: 1.0
  *  GI Dog test suite file, set tests
  */
  
  gi.gdog.gunit = gi.gdog.gunit || {};
  if(!gi.gdog.gunit.suite){
	gi.gdog.gunit.suite = {
		suite : function(){
			return gi.gdog.gunit.gdogUnit.newGDogSuite(
      /*test suite*/
      ["project/test.js", "project/test1.js"],["project/test.js", "project/test1.js"]
      );
		},
		
		isLoaded : function(){
			return true;
		}
	};	
  }