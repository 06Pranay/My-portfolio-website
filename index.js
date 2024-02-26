var tablinks=document.getElementsByClassName("tab-links");
        var tabcontents=document.getElementsByClassName("tab-contents");
        function opentab(tabname)
        {
        for( let tablink of tablinks)
        {
          tablink.classList.remove("active-link");
        }
       for( let tabcontent of tabcontents)
        {
           tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
         }

      //here we have added the event listener for the sidebar menu
      var sidemeu=document.getElementById("sidemenu");
      function openmenu()
      {
          sidemeu.style.right="0";
      }
      function closemenu()
      {
          sidemeu.style.right="-200px";
      }   