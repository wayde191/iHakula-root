/**
  *@author: Wayde Sun
  *@Time: 2009.9.17
  *@Version: 1.0
  *  GI Dog TestSuite file, testSuite instance
  *  Singleton Model
  */
  
  gi.gdog.gdogTestSuite = gi.gdog.gdogTestSuite || function(){
	this.isgdogTestSuite = true;
	this.testPages       = Array();
	this.pageIndex       = 0;
  };
  
  gi.gdog.gdogTestSuite.prototype = {
	addTestPage : function(pageName){
		this.testPages[this.testPages.length] = pageName;
	},
	
	hasMorePage : function(){
		return this.pageIndex < this.testPages.length;
	},
	
	nextPage : function(){
		return this.testPages[this.pageIndex++];
	},
	
	clone : function(){
		var clone = new gi.gdog.gdogTestSuite();
		clone.testPages = this.testPages;
		return clone;
	},
	
	containsTestPages : function(){
		return this.testPages.length;
	}
  };
  
