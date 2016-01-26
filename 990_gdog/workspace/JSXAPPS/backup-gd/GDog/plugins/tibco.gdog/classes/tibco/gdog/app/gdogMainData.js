/**
  *@author: Wayde Sun
  *@Time: 2009.9.5
  *@Version: 1.0
  *  GI Dog Main data file
  *  Interact with gdog UI
  */

    if(!gi.gdog.gdogMainData) {
		gi.gdog.gdogMainData = function() {
		}
	}
  /*This statement can only be used seperated */
  (function(mainData){
	  mainData.prototype.kickOffTests = function() {
	    console.log("mainData");
	  };
	})(gi.gdog.gdogMainData);