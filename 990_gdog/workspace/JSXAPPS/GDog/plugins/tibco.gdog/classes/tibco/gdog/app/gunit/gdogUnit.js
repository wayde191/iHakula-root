/**
  *@author: Wayde Sun
  *@Time: 2009.9.17
  *@Version: 1.0
  *  GI Dog Unite file, for each test unit
  *  Singleton Model
  */
  
  gi.gdog.gunit = gi.gdog.gunit || {};
  gi.gdog.gunit.gdogUnit = gi.gdog.gunit.gdogUnit || {};
  gi.gdog.gunit.gdogUnit._init = function(gunit){
  
    gunit._PENDING_SUITES = [];
	
	gunit.newGDogSuite = function(file){
		var s = new gi.gdog.gdogTestSuite();
		var a = [s];
		for(var i = 0; i < arguments.length; i++){
			a.push(arguments[i]);
		}
		gunit._addJsTests.apply(gunit, a);
		return s;
	};
	
	gunit._addJsTests = function(objSuite, strTest1){
    for(var i=1; i<arguments.length; i++){
      var arg = arguments[i];
      if(!(arg instanceof Array)){
        arg = [arg];
      }
      objSuite.addTestPage(arg.join(','));
    }
	};
	
	gunit.loadScript = function(strSrc, fctDone){
		//Instance a new DOM element
		var element = document.createElement('script');
		element.src = tibco.gdog.System.userTestsPath + '/' + strSrc;
		element.type = 'text/javascript';
		
		if(fctDone){
			element.onreadystatechange = function(){
				var state = this.readyState;
				if(state == 'loaded' || state == 'interactive' || state == 'complete'){
					this.onreadystatechange = null;
					this.onload = null;
					fctDone(strSrc);
				}
			};
			element.onload = function(){
				element.onreadystatechange = null;
				element.onload = null;
				fctDone(strSrc);
			};
		}
		document.getElementsByTagName('head')[0].appendChild(element);
	};
	
	gunit.defineTests = function(strPrefix, objFunct){
		gunit._PENDING_SUITES.push([strPrefix, objFunct]);
		var t = new gunit.TestSuite(strPrefix);
		objFunct(t, gunit);
		gunit._exposeTests(t);
	};
	
	gunit.TestSuite = function(strPrefix){
		var tokens = strPrefix.split(/\W/);
		this._prefix = tokens.join('_');
		tokens.pop();
		this._path = tokens.join("/") + "/";
	};
  
  gunit.TestSuite.prototype.getPrefix = function(){
    return this._prefix;
  };
  
  gunit.TestSuite.prototype.asyncCallback = function(fctTest){
    return function(){
      if(eval("top.__gdog.testManager.containerTestObj.asyncTestWaiting != true")){
        window.alert("Excuting async callback before async waiting:" + fctTest);
      }
      try{
        fctTest.apply(this, arguments);
      }catch(e){
        eval("top.__gdog.testManager.containerTestObj.asyncTestException = e;");
      }
      eval("top.__gdog.testManager.containerTestObj.asyncTestWaiting = false;")
    };
  };
  
  gunit.TestSuite.prototype._prefix = null;
  gunit.TestSuite.prototype._path = null;
  gunit.TestSuite.prototype._setUp = null;
  gunit.TestSuite.prototype._tearDown = null;
  gunit.TestSuite.prototype._if = null;
  gunit.TestSuite.prototype._unless = null;
  gunit.TestSuite.prototype._async = null;
  gunit.TestSuite.prototype._skip = null;
  gunit.TestSuite.prototype._skip_unless = null;
  
  gunit._tests = [];
  
  gunit._exposeTests = function(objTests){
    for(var f in objTests){
      if(typeof(gunit.TestSuite.prototype[f]) != "undefined"){
        continue;
      }
      if(typeof(objTests[f]) != "function"){
        continue;
      }
      var name = objTests.getPrefix() + "__" + f;
      if(gunit._tests[name]){
        window.alert("Redefinition of test " + name);
      }else{
        var skipCond = gunit._getMeta("_skip", objTests[f], objTests);
        var skipUnlessCond = gunit._getMeta("_skip_unless", objTests[f], objTests);
        
        if((skipCond && gunit._machIf(skipCond)) || (skipUnlessCond && gunit._machIf(skipUnlessCond))){
          gunit.inform("Skipping " + name);
          continue;
        }
        
        gunit._tests.push(name);
        var fctTest = gunit._makeTestFunct(name, objTests[f], objTests);
        eval("top.__gdog.testManager.containerTestObj." + name + "=fctTest" );
      }
    }
	
	if(top.__gdog.testManager.containerTestObj.exposeTestFunctionNames == null){
		top.__gdog.testManager.containerTestObj.exposeTestFunctionNames = function(){
			return gunit._tests;
		};
	}
  };
  
  gunit._makeTestFunct = function(strName, fctTest, objMeta){
	var fctSetUp = gunit._getMeta('_setUp', fctTest, objMeta);
	var fctTearDown = gunit._getMeta('_tearDown', fctTest, objMeta);
	var ifCond = gunit._getMeta('_if', fctTest, objMeta);
	var unlessCond = gunit._getMeta('_unless', fctTest, objMeta);
	var async = gunit._getMeta('_async', fctTest, objMeta);
	
	if(fctSetUp || fctTearDown){
		fctTest = gunit._makeSetupFunct(fctTest, fctSetUp, fctTearDown);
	}
	if(ifCond || unlessCond){
		if(async){
			gunit.warn("Test" + strName + "cannot be async and have if or unless condition");
		}else{
			fctTest = gunit._makeIfFunct(fctTest, strName, ifCond ? "if" : "unless", ifCond || unlessCond);
		}
	}
	if(async){
		fctTest = gunit._makeAsyncFunct(fctTest);
	}
	return fctTest;
  };
  
  gunit._makeAsyncFunct = function(fctTest){
	return function(){
		eval("top.__gdog.testManager.containerTestObj.asyncTestWaiting = true");
		fctTest();
	};
  };
  
  gunit._makeSetupFunct = function(fctTest, fctSetUp, fctTearDown){
	if(fctTearDown){
		return function(){
			if(fctSetUp) {
				fctSetUp();
			}
			try{
				fctTest();
			}finally{
				fctTearDown();
			}
		};
	}else{
		return function(){
			fctSetUp();
			fctTest();
		};
	}
  };
  
  gunit._makeIfFunct = function(fct, strName, strType, strCond){
	return function(){
		if(strType == "if" ? !gunit._machIf(strCond) : gunit._machIf(strCond)){
			try{
				fct();
				gunit.warn("Test " + strName + "passed even though it passed " + strType + "condition(" + strCond + ").");
			}catch(e){
				if(e instanceof gunitException){
					gunit.inform("Test " + strName + " failed but did't pass " + strType + "condition(" + strCond + "):" + e.gunitMessage);
				}else{
					gunit.inform("Test " + strName + " failed but did't pass " + strType + "condition(" + strCond + "):" + e.message);
				}
			}
		}else{
			fct();
		}
	};
  };
  
  gunit._getMeta = function(field, fct, meta){
    return typeof(fct[field]) == "undefined" ? meta[field] : fct[field];
  };
  
  gunit._machIf = function(strCond){
    var tokens = strCond.split(/[\s,;]+/g);
    for(var i = 0; i < tokens.length; i++){
      return true;
    }
    return false;
  };
  
  gunit.inform = function(){
    if(window.inform){
      inform.apply(null, arguments);
    }
  };
  
  gunit.warn = function(){
	if(window.warn){
		warn.apply(null, arguments);
	}
  };
  
  /**
    *This part for test instance
    */
  gunit.assert = function(){
    return top.__gdog.testManager.containerTestObj.assertCore.apply(top.__gdog.testManager.containerTestObj, arguments);
  };
  
  gunit.assertTrue = function(){
    return top.__gdog.testManager.containerTestObj.assertTrueCore.apply(top.__gdog.testManager.containerTestObj, arguments);
  };
  
  gunit.assertFalse = function(){
    return top.__gdog.testManager.containerTestObj.assertFalseCore.apply(top.__gdog.testManager.containerTestObj, arguments);
  };
  
  gunit.assertEquals = function(){
    var testObj = top.__gdog.testManager.containerTestObj;
    testObj._validateArguments(2, arguments);
    var var1 = testObj.nonCommentArg(1, 2, arguments);
    var var2 = testObj.nonCommentArg(2, 2, arguments);
    
    if(var1 != null && typeof(var1) == 'object' && typeof(var1.equals) == 'function'){
      if(!var1.equals(var2)){
        alert("var1 var2 var1.equals");
        //throw new gunitException(testObj.commentArg(2, arguments), "Expected " + var1 + "but was" + var2 + ".");
        }
      }else{
        return testObj.assertEqualsCore.apply(testObj, arguments);
    }
  };
  
  gunit.assertNotEquals = function(){
    var testObj = top.__gdog.testManager.containerTestObj;
    testObj._validateArguments(2, arguments);
    var var1 = testObj.nonCommentArg(1, 2, arguments);
    var var2 = testObj.nonCommentArg(2, 2, arguments);
    
    if(var1 != null && typeof(var1) == 'object' && typeof(var1.equals) == 'function'){
      if(var1.equals(var2)){
        alert('assert not equal');
        //throw new gunitException(testObj.commentArg(2, arguments), "Expected not equal to " + var1 + "but was" + var2 + ".");
      }
    }else{
      return testObj.assertNotEqualsCore.apply(testObj, arguments);
    }
  };
  
  gunit.debug = function(){
    if(window._gdogDebuggerWindow){
      top.__gdog.testManager.containerTestObj.debug.apply(top.__gdog.testManager.containerTestObj, arguments);
    }
  };
  
  };
  gi.gdog.gunit.gdogUnit._init(gi.gdog.gunit.gdogUnit);
  delete gi.gdog.gunit.gdogUnit._init;
  
  //Load figure
  window.gi.gdog.loaded = true;