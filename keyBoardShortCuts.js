/*
* A simple example of key boards shortcuts implementation with javaScript
* using a State Machine
* 
* @author : Gustavo Pantuza
* @since  : 04.08.2011
* 
* http://github.com/pantuza/
* 
*/


var keyBoardShortCuts = (function() {


    /* Possibles commands to bind */
    var keys = {
       'ctrl' : false,
       'left' : false,
       'right': false
    },
    
    /* Key Codes */
    CTRL 	= 17,
    LEFT 	= 37,
    RIGHT	= 39,
    
    element,

    
    /*
    * That is the main function of the nameSpace. It is the 'remote control' 
    * that controls and verify which keys are pressed. Based on these keys, 
    * could trigger any action. In this case, changes the element style.
    */
    remoteControl = function(window) {

          if (keys.ctrl && keys.left)
              element.style.left = "-10%";
          
          else if (keys.ctrl && keys.right)
              element.style.left = "+10%";
    },
    
    
    /* 
    * Each key pressed will trigger these event that verify the key code 
    * pressed. If the key code matchs one of the codes below, it will set 
    * true for the key defined on the keys object.
    * Then call the 'remoteControl' function that verify the bind keys for
    * execute something.
    */    
    keyDownEventFunction = function(event) {
       
       if (event.keyCode == CTRL)
            keys.ctrl = true;
       
       else if (event.keyCode == LEFT)
            keys.left = true;
       
       else if (event.keyCode == RIGHT)
            keys.right = true;
       
       else
            return false;
          
       remoteControl();
       
       event.preventDefault();
       event.stopPropagation();
    },
    
    
    /*
    * Verify when the key is up (not pressed more). For the same
    * reasons, it changes the keys values on the 'keys' object. Then, 
    * call the 'remoteControl' function again.
    */
    keyUpEventFunction = function(event) {
       
       if (event.keyCode == CTRL)
           keys.ctrl=false;
       
       else if (event.keyCode == LEFT)
            keys.left=false;
       
       else if (event.keyCode == RIGHT)
            keys.right=false;
       
       else
            return false;
       
       remoteControl();
       
       event.preventDefault();
       event.stopPropagation();
    };
    
    
    /**
     * Waits the 'on ready' of the documento to set variables
     */
	window.onload = function() {
		element = document.getElementById('square');
	}

	
    /**
	 * Key board event binds
	 */
    window.addEventListener('keydown', keyDownEventFunction);
    window.addEventListener('keyup', keyUpEventFunction);

})(window);
