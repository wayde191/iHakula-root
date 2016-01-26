/**
  *@author: Wayde Sun
  *@Time: 2009.9.5
  *@Version: 1.0
  *  GI Dog Test Manager
  */

  if(!gi.gdog.gdogTestManager) {
    gi.gdog.gdogTestManager = function() {
		this.containerTestObj = {};
		this.containerController = new gi.gdog.TestContainerController();
	
		this.gdogStatus       = tibco.gdog.System.pluginInstance.getRenderedBox('gdogStatus');
		this.gdogRunButton    = tibco.gdog.System.pluginInstance.getRenderedBox('gdogRunButton');
    this.gdogDebugBtn     = tibco.gdog.System.pluginInstance.getRenderedBox('gdogDebugBtn');
    this.gdogProblemsList = tibco.gdog.System.pluginInstance.getRenderedBox('gdogProblemsList');
		this.gdogTotalCount   = tibco.gdog.System.pluginInstance.getRenderedBox('totalCount');
		this.gdogErrorCount   = tibco.gdog.System.pluginInstance.getRenderedBox('errorCount');
		this.gdogFailureCount = tibco.gdog.System.pluginInstance.getRenderedBox('failureCount');
		this.gdogProgress     = tibco.gdog.System.pluginInstance.getRenderedBox('gdogProgress');
		this.blueImage        = tibco.gdog.System.plugIn.resolveURI("jsxplugin://tibco.gdog/images/blue.png");
		this.redImage         = tibco.gdog.System.plugIn.resolveURI("jsxplugin://tibco.gdog/images/red.png");
	};
	
	gi.gdog.gdogTestManager.TIMEOUT_LENGTH    = 20;
	gi.gdog.gdogTestManager.TESTPAGE_WAIT_SEC = 20;
  gi.gdog.gdogTestManager.SETUPPAGE_INTERVAL = 100;
  gi.gdog.gdogTestManager.ASYNC_TIMEOUT = 5000;
	
	function push(anArray, anObject){
		anArray[anArray.length] = anObject;
	}
	
	function pop(anArray){
		if(anArray.length >= 1){
			delete anArray[anArray.length - 1];
			anArray.length--;
		}
	}
	
	gi.gdog.gdogTestManager.prototype = {
	
		setup : function(){
			this.totalCount   = 0;
			this.errorCount   = 0;
			this.failureCount = 0;
			this._suiteStack  = Array();
			
			var mainData = __gdog.mainData;
			var initialSuite = new gi.gdog.gdogTestSuite();
			push(this._suiteStack, initialSuite);
		},
		
		_currentSuite : function(){
			var suite = null;
			if(this._suiteStack && this._suiteStack.length > 0){
				suite = this._suiteStack[this._suiteStack.length - 1];
			}
			return suite;
		},
		
		start : function(){
			this._baseURL = tibco.gdog.System.gsuitePath;
			this._timeRunStarted = new Date();
			this.initialize();
			setTimeout('top.__gdog.testManager._nextPage()', gi.gdog.gdogTestManager.TIMEOUT_LENGTH);
		},
		
		initialize : function(){
			this.setStatus("Initializing...");
			this._setRunButtonEnabled(false);
			this.updateProgressIndicators();
			this.setStatus("Done initializing.");
		},
		
		setStatus : function(strMsg){
			this.gdogStatus.innerHTML = strMsg;
		},
		
		_setRunButtonEnabled : function(b){
			b == false ? this.gdogRunButton.disabled = "disabled" : this.gdogRunButton.removeAttribute("disabled");
		},
		
		_setTestsCount : function(){
			this.gdogTotalCount.innerHTML   = this.totalCount;
			this.gdogErrorCount.innerHTML   = this.errorCount;
			this.gdogFailureCount.innerHTML = this.failureCount;
		},
		
		calculateProgressBarProportion : function(){
			if(this.totalCount == 0) {
				return 0;
			}
			//当前除数，公约数
			var currentDivisor = 1;
			var result         = 0;
			for(var i = 0; i<this._suiteStack.length; i++){
				var aSuite = this._suiteStack[i];
				currentDivisor *= aSuite.testPages.length;
				result += (aSuite.pageIndex - 1)/currentDivisor;
			}
			//_testIndex, _numberOfTestsInPage
			result += (this._testIndex + 1)/(this._numberOfTestsInPage * currentDivisor);
			return result;
		},
		
		_setProgressBarWidth : function(width){
			this.gdogProgress.width = width;
		},
		
		_setProgressBarImage : function(img){
			this.gdogProgress.src = img;
		},
		
		updateProgressIndicators : function(){
			this._setTestsCount();
			this._setProgressBarWidth(283 * this.calculateProgressBarProportion());
			if(this.errorCount > 0 || this.failureCount > 0){
				this._setProgressBarImage(this.redImage);
			}else{
				this._setProgressBarImage(this.blueImage);
			}
		},
		
		_nextPage : function(){
			if(this._currentSuite().hasMorePage()){
				this.loadPage(this._currentSuite().nextPage());
			}else{
				pop(this._suiteStack);
				if(this._currentSuite() == null){
					this._done();//waitting for imp
				}else{
					this._nextPage();
				}
			}
		},
    
    _done : function(){
      var secondsSinceRunBegan = (new Date() - this._timeRunStarted) / 1000;
      this.setStatus('Done (' + secondsSinceRunBegan + ' seconds)');
      //this._cleanUp();
    },
		
		loadPage : function(testFileName){
			this._testFileName = testFileName;
			this._loadAttemptStartTime = new Date();
			this.setStatus('Opening Test Page: ' + this._testFileName);
			this.containerController.setTestPage(this._testFileName);
			this._callBackWhenPageIsLoaded();
		},
		
		_callBackWhenPageIsLoaded :function(){
			if((new Date() - this._loadAttemptStartTime) / 1000 > gi.gdog.gdogTestManager.TESTPAGE_WAIT_SEC){
				alert('Reading Test Page ' + this._testFileName + 'timed out.\nMake sure that the file exist.')
			}
			if(!this._isTestFrameLoaded()){
				setTimeout('top.__gdog.testManager._callBackWhenPageIsLoaded();', gi.gdog.gdogTestManager.TIMEOUT_LENGTH);
			}else{
        this.doneLoadingPage(this._testFileName);
      }
			//this.doneLoadingPage(this._testFileName);
		},
		
		_isTestFrameLoaded : function(){
			try{
				return this.containerController.isPageLoaded();
			}catch(e){
				console.log(this._testFileName + 'can not be loaded');
			}
			return false;
		},
		
		isTestPageSuite : function(){
			var result = false;
			if(typeof(this.containerTestObj.suite) == 'function'){
				result = true;
			}
			return result;
		},
		
		_handleNewSuite : function(){
			var allegedSuite = this.containerTestObj.suite();
			if(allegedSuite.isgdogTestSuite){
				var newSuite = allegedSuite.clone();
				if(newSuite.containsTestPages()){
					push(this._suiteStack, newSuite);
				}
				this._nextPage();
			}else{
				console.log('Invalid test suite in file ' + this._testFileName);
			}
		},
		
		doneLoadingPage : function(pageName){
			this._testFileName = pageName;
			if(this.isTestPageSuite()){
				this._handleNewSuite();
			}else{
				this._testIndex = 0;
				this._testsInPage = this.getTestFunctionNames();
				this._numberOfTestsInPage = this._testsInPage.length;
        //alert(this._numberOfTestsInPage);
				this._runTest();
			}
		},
    
    getTestFunctionNames : function(){
      var testFrame         = this.containerTestObj;
      var testFunctionNames = [];
      var i;
      //alert(testFrame.isUserTestsLoaded);
      //alert(testFrame.isTestPageLoaded);
      if(testFrame && typeof(testFrame.exposeTestFunctionNames) == 'function'){
        return testFrame.exposeTestFunctionNames();
      }
      
      if(testFrame && testFrame.document &&  typeof(testFrame.document.scripts) != 'undefined'){
        var scriptsInTestFrame = testFrame.document.scripts;
        for(i = 0; i < scriptsInTestFrame.length; i++){
          var someNames = this._extractTestFunctionNamesFromScript(scriptsInTestFrame[i]);
          if(someNames){
            testFunctionNames = testFunctionNames.concat(someNames);
          }
        }
      }else{
        for(i in testFrame){
          if(i.substring(0, 4) == 'test' && typeof(testFrame[i]) == 'function'){
            push(testFunctionNames, i);
          }
        }
      }
      return testFunctionNames;
    },
    
    _runTest : function(){
      if(this._testIndex + 1 > this._numberOfTestsInPage){
        this._nextPage();
        return;
      }
      
      if(this._testIndex == 0 && typeof(this.containerTestObj.setUpPage) == 'function'){
        if(typeof(this.containerTestObj.setUpPageStatus) == 'undefined'){
          this.containerTestObj.setUpPageStatus = false;
          this.containerTestObj.startTime = new Date();
          this.containerTestObj.setUpPage();
          setTimeout('top.__gdog.testManager._runTest();', gi.gdog.gdogTestManager.SETUPPAGE_INTERVAL);
          return;
        }
        if(this.containerTestObj.setUpPageStatus != 'complete'){
          this.containerTestObj.status = 'SetUpPage not complete...' + this.containerTestObj.setUpPageStatus + ' ' + (new Date());
          setTimeout('top.__gdog.testManager._runTest();', gi.gdog.gdogTestManager.SETUPPAGE_INTERVAL);
          return;
        }
      }
      
      this.containerTestObj.status = '';
      this.executeTestFunction(this._testsInPage[this._testIndex]);
      if(!this.asyncWaiting){
        this.totalCount++;
        this.updateProgressIndicators();
        this._testIndex++;
        setTimeout('top.__gdog.testManager._runTest();', gi.gdog.gdogTestManager.TIMEOUT_LENGTH);
      }
    },
    
    executeTestFunction : function(functionName){
      this._testFunctionName = functionName;
      this.setStatus('Runing test "' + this._testFunctionName + '"');
      var excep = null;
      var timeBefore = new Date();
      try{
        //preapare for itself
        this.containerTestObj.setUp();
        eval("top.__gdog.testManager.containerTestObj." + this._testFunctionName + "()");
      }catch(e1){
        excep = e1;
      }finally{
        try{
          this.containerTestObj.tearDown();
        }catch(e2){
          excep = e2;
        }
      }
      if(this.containerTestObj.asyncTestWaiting){
        if(excep){
          this._finishTestFunction(excep, timeBefore);
          this.containerTestObj.asyncTestWainting = false;
        }else{
          this.asyncWaiting = true;
          this.asyncTestStart = timeBefore;
          var me = this;
          this.asyncTimeout = window.setInterval(function(){me._pollAsync();}, 50);
        }
      }else{
        this._finishTestFunction(excep, timeBefore);
      }
    },
    
    _fullyQualifiedCurrentTestFunctionName : function(){
      var index = this._testFunctionName.indexOf('__');
      if(index >= 0){
        return this._testFunctionName.substring(index+2);
        //return this._testFunctionName.substring(0, index).replace(/_/g, ".") + ":" + this._testFunctionName.substring(index+2);
      }else{
        return null;
      }
    },
    
    _problemDetailMessageFor : function(excep){
      var result = " ";
      if(typeof(excep.isGUnitException) != "undefined" && excep.isGUnitException){
        result += "";
        if(excep.comment != null){
          result += ('"' + excep.comment + '"\n');
        }
        result += excep.gUnitMessage;
        if(excep.stackTrace){
          result += '\n\nStack trace follows:\n' + excep.stackTrace;
        }
      }else{
        result += (typeof(excep.description) == "undefined") ? excep : excep.description;
        result += '"';
        if(typeof(excep.stack) != "undefined"){
          result += '\n\nStack trace follows : \n' + excep.stackTrace;
        }
      }
      return result;
    },
    
    _finishTestFunction : function(excep, timeBefore){
      var timeTaken = (new Date() - timeBefore) / 1000;
      
      var serializedTestCaseString = this._fullyQualifiedCurrentTestFunctionName() + "|" + timeTaken + "|";
      if(excep == null){
        serializedTestCaseString += "S||";
      }else{
        if(typeof(excep.isGUnitException) != "undefined" && excep.isGUnitException){
          serializedTestCaseString += "F||";
        }else{
          serializedTestCaseString += "E||";
        }
        serializedTestCaseString += this._problemDetailMessageFor(excep);
      }
      if(excep != null){
        this._handleTestException(excep, serializedTestCaseString);
      }
    },
    
    _handleTestException : function(excep, serializedTestCaseString){
      var problemMessage = this._fullyQualifiedCurrentTestFunctionName() + ' ';
      var errorOption;
      if(typeof(excep.isGUnitException) == "undefined" && !excep.isGUnitException){
        problemMessage += "had an error";
        this.errorCount++;
      }else{
        problemMessage += "failed";
        this.failureCount++;
      }
      var problemList = this.gdogProblemsList;
      var errorOption = document.createElement('option');
      errorOption.setAttribute('value', serializedTestCaseString);//The value of this option
      errorOption.appendChild(document.createTextNode(problemMessage));//Shown on the select list
      problemList.appendChild(errorOption);
    },
    
    showMessageForSelectedProblemTest : function(){
      alert(this.gdogProblemsList[this.gdogProblemsList.selectedIndex].value);
    },
    
    _resumeAfterAsync : function(){
      this.totalCount++;
      this.updateProgressIndicators();
      this._testIndex++;
      this.containerTestObj.asyncTestWaiting = false;
      setTimeout('top.__gdog.testManager._runTest();', gi.gdog.gdogTestManager.TIMEOUT_LENGTH);
    },
    
    _pollAsync : function(){
      this.timeBefore = this.asyncTestStart;
      var excep = null;
      
      if(!this.containerTestObj.asyncTestWaiting){
        excep = this.containerTestObj.asyncTestException;
        this.containerTestObj.asyncTestException = null;
      }else if(new Date() - timeBefore > gi.gdog.gdogTestManager.ASYNC_TIMEOUT){
        excep = new this.gUnitException("Asynchronous test timed out before finishing.");
      }else{
        return;
      }
      
      window.clearInterval(this.asyncTimeout);
      delete this.asyncTestStart;
      delete this.asyncTimeout;
      this._finishTestFunction(excep, timeBefore);
      this._resumeAfterAsync();
    }
  }
}