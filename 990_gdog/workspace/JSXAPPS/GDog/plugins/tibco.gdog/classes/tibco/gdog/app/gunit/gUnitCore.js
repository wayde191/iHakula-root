/**
  *@author: Wayde Sun
  *@Time: 2009.9.17
  *@Version: 1.0
  *  GI Dog Unite file, for each test unit
  *  Singleton Model
  */
  
  gi.gdog.gunit = gi.gdog.gunit || {};
  gi.gdog.gunit.gUnitCore = gi.gdog.gunit.gUnitCore || {};
  
  gi.gdog.gunit.gUnitCore.GUNIT_UNDEFINED_VALUE;
  
  gi.gdog.gunit.gUnitCore = {
    isLoaded : function() {
      return top.__gdog.testManager.containerTestObj.isUserTestsLoaded;
    },
    
    parseErrorStack : function(excp){
      var stack = [];
      var name;
      
      if(!excp || !excp.stack){
        return stack;
      }
      
      var stacklist = excp.stack.split('\n');
      
      for(var i = 0; i < stacklist.length - 1; i++){
        var framedata = stacklist[i];
        name = framedata.match(/^(\w*)/)[1];
        if(!name){
          name = 'anonymous';
        }
        stack[stack.length] = name;
      }
      //remove top level anonymous function to match IE
      while(stack.length && stack[stack.length - 1] == 'anonymous'){
        stack.length = stack.length - 1;
      }
      return stack;
    },
    
    getStackTrace : function(){
      var result = '';

      if(typeof(arguments.caller) != 'undefined'){//IE, not ECMA
        for(var a = arguments.caller; a != null; a = a.caller){
          result += '>' + getFunctionName(a.callee) + '\n';
          if(a.caller == a){
            result += '*';
            break;
          }
        }
      }else{//Mozilla, not ECMA
        //fake an exception so we can get Mozilla's error stack
        var testExcp;
        try{
          foo.bar;
        }catch(testExcp){
          var stack = this.parseErrorStack(testExcp);
          for(var i = 1; i < stack.length; i++){
            result += '>' + stack[i] + '\n';
          }
        }
      }
      return result;
    },
    
    error : function(errorMessage){
      var errrorObj = {};
      errorObj.description = errorMessage;
      errorObj.stackTrace  = getStackTrace();
      throw errorObj;
    },
    
    _validateArguments : function(expectedNumOfNonCommentArgs, args){
      if(!(args.length == expectedNumOfNonCommentArgs || 
          (args.length == expectedNumOfNonCommentArgs + 1 && typeof(args[0]) == 'string'))){
            error('Incorrect arguments passed to assert function');
          }
    },
    
    argumentsIncludeComments : function(expectedNumberOfNonCommentArgs, args){
      return args.length == expectedNumberOfNonCommentArgs + 1;
    },
    
    nonCommentArg : function(desiredNonCommentArgIndex, expectedNumberOfNonCommentArgs, args){
      return this.argumentsIncludeComments(expectedNumberOfNonCommentArgs, args) ?
          args[desiredNonCommentArgIndex] : 
          args[desiredNonCommentArgIndex - 1];
    },
    
    commentArg : function(expectedNumberOfNonCommentArgs, args){
      if(this.argumentsIncludeComments(expectedNumberOfNonCommentArgs, args)){
        return args[0];
      }
      return null;
    },
    
    _assert : function(comment, booleanValue, failureMessage){
      if(!booleanValue){
        throw new this.gUnitException(comment, failureMessage);
      }
    },
    
    gUnitException : function(comment, message){
      this.isGUnitException = true;
      this.comment          = comment;
      this.gUnitMessage     = message;
      this.stackTrace       = top.__gdog.testManager.containerTestObj.getStackTrace();
    },
    
    _displayStringForValue : function(aVar){
      if(aVar === null){
        return 'null';
      }
      if(aVar === this.GSUNIT_UNDEFINED_VALUE){
        return 'undefined';
      }
      return aVar;
    },
    
    ////////////////////////Assert////////////////////////
    assertCore: function(){
      this._validateArguments(1, arguments);
      var booleanValue = this.nonCommentArg(1, 1, arguments);
      if(typeof(booleanValue) != 'boolean'){
        this.error('Bad arguments to assert(boolean)');
      }
      
      this._assert(this.commentArg(1, arguments), booleanValue === true, "Call to assert(boolean) with false");
    },
    
    assertTrueCore: function(){
      this._validateArguments(1, arguments);
      var booleanValue = this.nonCommentArg(1, 1, arguments);
      if(typeof(booleanValue) != 'boolean'){
        this.error('Bad arguments to assertTrue(boolean)');
      }
      
      this._assert(this.commentArg(1, arguments), booleanValue === true, "Call to assertTrue(boolean) with false");
    },
    
    assertFalseCore: function(){
      this._validateArguments(1, arguments);
      var booleanValue = this.nonCommentArg(1, 1, arguments);
      if(typeof(booleanValue) != 'boolean'){
        this.error('Bad arguments to assertFalse(boolean)');
      }
      
      this._assert(this.commentArg(1, arguments), booleanValue === false, "Call to assertFalse(boolean) with false");
    },
    
    assertEqualsCore : function(){
      this._validateArguments(2, arguments);
      var var1 = this.nonCommentArg(1, 2, arguments);
      var var2 = this.nonCommentArg(2, 2, arguments);
      this._assert(this.commentArg(2, arguments), var1 === var2, 'Expected ' + var1 + ' (' + typeof(var1) + ') but was ' + this._displayStringForValue(var2) + ' (' + typeof(var2) + ')');
    },
    
    assertNotEqualsCore : function(){
      this._validateArguments(2, arguments);
      var var1 = this.nonCommentArg(1, 2, arguments);
      var var2 = this.nonCommentArg(2, 2, arguments);
      this._assert(this.commentArg(2, arguments), var1 != var2, "Expected not to be " + this._displayStringForValue(var2));
    },
    
    setUp : function(){
    },
    
    tearDown : function(){
    },
    
    debug : function(){
      var comment = arguments[0];
      var value   = arguments[1];
      var htmlToAppend = '<p style="">' + comment + ':' + '<span style="color:#8A2BE2;">' + value + '</span></p>\n';
      window._gdogDebuggerWindow.debugwindow.document.write(htmlToAppend);
      window._gdogDebuggerWindow.push(htmlToAppend);
    }
  };
