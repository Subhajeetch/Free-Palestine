const headerHTML = document.querySelector('.header');

headerHTML.innerHTML = `<nav>
     <a class="logo_a" href="#"><img class="logo" src="Images/logo2.png" alt="free-palestine-logo"></a>
     
     <div class="strech-div"></div>
     
     
     <a class="nav_links" href="#">About</a>
     <a class="nav_links2" href="https://data.techforpalestine.org">Docs/API</a>
     <button class="nav_btn" 
     
     onclick="window.location.href = 'https://islamic-relief.org/appeals/palestine-emergency-appeal';"
     
     >Donate</button>
   </nav>`;