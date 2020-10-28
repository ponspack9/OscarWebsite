(function($){
  $(function(){

    $('.sidenav').sidenav();
    M.AutoInit();
      $('.dropdown-trigger').dropdown(
        {
          'hover':true,
          'constrainWidth':false,
          'coverTrigger':false,
          'alignment': 'right',
        });

  }); // end of document ready
})(jQuery); // end of jQuery name space
