/**
  *@author: Wayde Sun
  *@Time: 2009.9.24
  *@Version: 1.0
  *  User test cases example
  */
 
 gi.gdog.gunit.gdogUnit.defineTests("gdog.tests", function(t, gunit){
 
	t.testPrograme = function(){
    gunit.debug("Hello", "World");
		gunit.assertEquals("gi.test.App1", "gi.tesdt.App1");
	};
  
  t.testPrograme1 = function(){
		gunit.assert(true);
	};
  
  t.testPrograme2 = function(){
		gunit.assertTrue(true);
	};
  
  t.testPrograme3 = function(){
		gunit.assertFalse(false);
	};
  
  t.testAsync = function(){
    var r = new jsx3.gui.Block();
    r.subscribe('gdog.async', t.asyncCallback(function(objEvent) {alert(objEvent.content);}));
    r.publish({subject : 'gdog.async', content : 'hello gdog'});
  }
  t.testAsync._async = true;
  
 });