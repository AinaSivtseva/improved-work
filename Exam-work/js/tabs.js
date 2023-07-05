function tabsFromClasses(event, input_class) {

   
    var clickedTab = event.currentTarget;
    var clickedDataTabId = clickedTab.getAttribute('data-tab');
  
  
    var tabs_nav_elements = document.getElementsByClassName(input_class);

    for (var i = 0; i < tabs_nav_elements.length; i++) {
      
       
      
        if (tabs_nav_elements[i] === clickedTab) {
            
          
          tabs_nav_elements[i].classList.add('active'); 
          
        } else {
          
          
          tabs_nav_elements[i].classList.remove('active'); 
          
        }
    }


  
    var tabs_div_elements = document.getElementsByClassName(input_class + '-div');

    for (var i = 0; i < tabs_div_elements.length; i++) {

        var id = tabs_div_elements[i].getAttribute('id'); 

        
        if (id === clickedDataTabId) { 
          
            tabs_div_elements[i].classList.add('active'); 
          
        } else {
          
            tabs_div_elements[i].classList.remove('active'); 
          
        }

    }

}