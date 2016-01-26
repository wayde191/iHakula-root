/**
  *@author: Wayde Sun
  *@Time: 2009.10.24
  *@Version: 1.0
  *  GI Dog Test debugger
  */
  
  window.__gdogDebugWindow__ = window.__gdogDebugWindow__ || function(){
    this.on = false;
    this.stack = [];
    this.debugwindow = null;
  };
  
  window.__gdogDebugWindow__.prototype = {
  
    push : function(record){
      this.stack[this.stack.length] = record;
    },
    
    pop : function(){
      --this.stack.length;
    },
  
    close : function(){
      if(!this.debugwindow){
        return;
      }
      if(!this.debugwindow.closed){
        this.debugwindow.close();
      }
      this.debugwindow = null;
    },
    
    open : function(){
      if(this.debugwindow && !this.debugwindow.closed){
        this.close();
      }
      this.debugwindow = window.open('about:blank', 'GDOGDEBUGWINDOW', 'height=400, width=600, resizable=yes, scrollbars=yes');
      this.debugwindow.title = 'gdogDebug Window';
      this.debugwindow.document.write('<html><head><title>godgDebug Window</title></head><body><h3>GDog Debug Window for Javascript</h3></body></html>');
      this.debugwindow.focus();
    }
  };