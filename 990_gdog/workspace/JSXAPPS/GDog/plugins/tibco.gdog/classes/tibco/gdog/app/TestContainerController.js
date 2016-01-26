/**
  *@author: Wayde Sun
  *@Time: 2009.9.19
  *@Version: 1.0
  *  GI Dog Test Container Controller
  */
  
  if(!gi.gdog.TestContainerController){
	gi.gdog.TestContainerController = function(){
		this.init();
	}
  }
  
  gi.gdog.TestContainerController.prototype = {
	init : function(){
		this.containerReady = true;
	},
	
	setNotReady : function(){
		try{
			top.__gdog.testManager.containerTestObj.isTestPageLoaded = false;
		}catch(e){
			console.log("gi.gdog.TestContainerController : " + e);
		}
	},
	
	loadNext : function(fileArray){
		var gdogScript = fileArray.split(',');
		var loadTestFiles = function(){
			if(gdogScript.length > 0){
				//eval('isUserTestsLoaded = false;');
				top.__gdog.testManager.containerTestObj.isUserTestsLoaded = false;
				var next = gdogScript.shift();
				gi.gdog.gunit.gdogUnit.loadScript(next, loadTestFiles);
			}else{
				top.__gdog.testManager.containerTestObj.isUserTestsLoaded = true;
        top.__gdog.testManager.containerTestObj.setUpPage = function(){};
        top.__gdog.testManager.containerTestObj.setUpPageStatus = 'complete';
				//eval('isUserTestsLoaded = true;');
			}
		};
		loadTestFiles();
	},
  
  _initUnitAndCore : function(){
    window.gi.gdog.gunit.gdogUnit._tests = [];
  },
	
	loadTestPage : function(fileName){
		fileName = fileName.toString();
		if(fileName && fileName.indexOf('GDog') == -1){
			top.__gdog.testManager.containerTestObj = {};
      this._initUnitAndCore();
      tibco.gdog.System.extend(top.__gdog.testManager.containerTestObj, window.gi.gdog.gunit.gdogUnit);
      tibco.gdog.System.extend(top.__gdog.testManager.containerTestObj, window.gi.gdog.gunit.gUnitCore);
			this.loadNext(fileName);
		}else{
			var lastslash = fileName.lastIndexOf("/");
			var lastdot   = fileName.lastIndexOf(".");
			var page  = fileName.substring(lastslash+1, lastdot);
			
			top.__gdog.testManager.containerTestObj = {};
			tibco.gdog.System.extend(top.__gdog.testManager.containerTestObj, window.gi.gdog.gunit[page]);
		}
		//when GDog string is not exist in the file name; Load gdogUnit.js(gdogUnit) & gUnitCore.js(gUnitCore) 
	},
	
	setTestPage : function(fileName){
		this.setNotReady();
		this.loadTestPage(fileName);
	},
	
	isPageLoaded : function(){
		if(!this.containerReady){
			return false;
		}
		var isTestPageLoaded = false;
		try{
			if(typeof(top.__gdog.testManager.containerTestObj.isLoaded) == 'function'){
				isTestPageLoaded = top.__gdog.testManager.containerTestObj.isLoaded();
			}
		}catch(e){
			console.log(top.__gdog.testManager._testFileName + ': is not loaded');
			isTestPageLoaded = false;
		}
		top.__gdog.testManager.containerTestObj.isTestPageLoaded = isTestPageLoaded;
		return isTestPageLoaded;
	}
  };