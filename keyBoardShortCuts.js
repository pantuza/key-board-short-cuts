/*
* A simple example of key boards shortcuts implementation with javaScript
* 
* @author : Gustavo Pantuza
* @since  : 04.08.2011
* 
* http://github.com/pantuza/
* 
*/
var keyBoardShortCuts = (function(){

/*Possibles commands to bind*/
    var keys = {
       'ctrl' : false,
       'left' : false,
       'right': false
    }

    /*
    * That is the main function of the nameSpace. It is the 'remote control' 
    * that controls and verify which keys are pressed. Based on these keys, 
    * could trigger any other action.
    */
    function remoteControl(){

          if( keys.ctrl && keys.left ){
          
              // get the string keys of the object 'keys'
              strCtrl = Object.keys( keys )[0];
              strLeft = Object.keys( keys )[1];
              
              // show a console message 
              console.log( '<<<< - ' + strCtrl + '+' + strLeft );
          
          }else if( keys.ctrl && keys.right ){          
              // get the string keys of the object 'keys'
              strCtrl  = Object.keys( keys )[0];
              strRight = Object.keys( keys )[2];
    
              // show a console message 
              console.log( '>>>> - ' + strCtrl + '+' + strRight );
              
          } else{
              return false;
          }
    }

    /* 
    * Bind on the 'keydown' event. Each key pressed will trigger these event
    * that verify the key code pressed. If the key code matchs one of the
    * codes below, it will set true for the key defined on the keys object.
    * Then call the 'remoteControl' function that verify the bind keys for
    * execute something.
    */
    window.addEventListener('keydown',function(e){
       
       // console.log("down : " + e.keyCode);
       
       if(e.keyCode == 17)
            keys.ctrl=true;
       
       else if( e.keyCode == 37 )
            keys.left=true;
       
       else if( e.keyCode == 39 )
            keys.right=true;
       
       else
            return false;
       
       // Verify bind keys for some execution
       remoteControl();
       return false;

    });

    /*
    * These listener event is similar to the defined above. The difference is
    * that these one verify when the key is up (not pressed more). For the same
    * reasons, it changes the keys values on the 'keys' object. Then, call the
    * 'remoteControl' function again.
    */
    window.addEventListener('keyup',function(e){
       
       // console.log("up   : " + e.keyCode);

       if(e.keyCode == 17 )
           keys.ctrl=false;
       
       else if( e.keyCode == 37 )
            keys.left=false;
       
       else if( e.keyCode == 39 )
            keys.right=false;
       
       else
            return false;
       // Verify bind keys for some execution
       remoteControl();
       return false;
    });

})();
