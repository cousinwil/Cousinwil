/* Style + Ease = ST.EEZE.us Front End Starter-Kit v 0.11
   Author: Wil Everts - http://cousinwil.com - @cousinwil
  
   File: javascripts/buddy.js - A simple object oriented template to
                                tweak as you see fit.
  
  
                                (80 chars, the suggested maximum line length)-->
  --------------------------------------------------------------------------- */


var st = {

    /* Modal window function
      ----------------------------------------------------------------------- */
    modal: {
    
      container: '#modal-box', // end st.modal.container
      state: 0, // // end st.modal.state
      
      open: function(url, id, track){
        // -url- tells us where to get the HTML to insert into the modal
        // -id- what should we call the modal (good for multiple modal styles)
        
        // if there's a modal up kill it
        if (st.modal.state == 1) { 
          st.modal.close(600);
        } 
            
        // TODO: clone element
        
        // TODO: load url into cloned modal
        
        // open the modal area
        $(st.modal.container).fadeIn('fast', function(){
          st.modal.state = 1;
        });
        
        st.google.track(track);          

      },
      
      close: function(time){
        // -time- tells us how long to animate the fade
        $(st.modal.container).fadeOut(time).empty();
        st.modal.state = 0;
      }
          
    }, // end st.modal
  
    /* Google Analytics - allows us to connect st.eeze.track to your GA acct
      ----------------------------------------------------------------------- */
    google: {    
      track: function(tracked){
        console.log('Tracked: ' + tracked);
        pageTracker._trackPageview(tracked);
      }, // end st.google.track
    }, // end st.google


  /* Eeze - data objects which make common functions look cleaner
    ------------------------------------------------------------------------- */
  
  eeze: {
    
    /* AJAX objects for cleaner .ajax() - see init for sample usage
      ----------------------------------------------------------------------- */
    ajax: {
      
    }, // end st.eeze.ajax
  
    /* Validation objects for cleaner .validate() - see init for sample usage
      ----------------------------------------------------------------------- */
    valid: {
          
    }, // end st.eeze.valid
      
    us: 'http://cousinwil.com' // steeze was compiled & developed by @cousinwil

  }, // end st.eeze
    
  /* INITs for each controller or view or just as needed...
       These allow you to load up event handlers and functions specific to
       a template or view. 
       
       Each unique init, like my 'home' init, has a three init functions:
           Main (on ready), load (on load), and resize (redraw absolute elem.)
       
  --------------------------------------------------------------------------- */
  
  init: {
  
    home: {
    
      main: function(){
      
        //console.log('inside home init');
      
        $('header').click(function(){
          //track this click event
          //st.racker('js/header');
          //move to the url indicated at st.eeze.us
          setTimeout('window.location = "'+ st.eeze.us +'"', 90);
        });
        
        $('ul#acknowledgements li').hover( function(){
          temp = $(this).attr('id');
          $('#'+temp+' div.more-info').stop().animate({ height: '76px'}, 500 );
        }, function(){
          temp = $(this).attr('id');
          $('#'+temp+' div.more-info').stop().animate({ height: '0px'}, 500 );
        });
          
      }, // end st.init.sample 
      
      load: function(){
        //console.log('inside home load init');
          
      }, // end st.init.load     
      
      resize: function(){
        //console.log('inside home resize init');
          
      } // end st.init.resize
    }
    
  } // end st.init

};

var wil = st; // rename the steeze object to suit your domain or branding