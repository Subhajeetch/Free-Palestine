fetch('https://data.techforpalestine.org/api/v3/summary.min.json')
  .then(response => {
    // Ensure the response is successful
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json(); // Parse the JSON data
  })
  .then(data => {
    console.log(data)
    
    
    
    // main 4 data box
    
    let totalKill;
    let totalInjured;
    let totalChildrenKilled;
    let totalPressKilled;
    let lastUpdate;
    
    
    lastUpdate = data.gaza.last_update;
  
    totalInjured = data.gaza.injured.total.toLocaleString();
    totalPressKilled = data.known_press_killed_in_gaza.records.toLocaleString();
    
    const totalGazaKilled = data.gaza.killed.total;
    const totalWestBankKilled = data.west_bank.killed.total;
    const getTotalKills = totalGazaKilled + totalWestBankKilled;
    totalKill = getTotalKills.toLocaleString();
    
    
    const totalChildrenKilledInGaza = data.gaza.killed.children;
    const totalChildrenKilledInWB = data.west_bank.killed.children;
    const getTotalChildrenKilled = totalChildrenKilledInGaza + totalChildrenKilledInWB;
    totalChildrenKilled = getTotalChildrenKilled.toLocaleString();
    
    
    const date = new Date(lastUpdate);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateValue = new Intl.DateTimeFormat('en-US', options).format(date);
    
    
    updateDataBox(dateValue, totalKill, totalInjured, totalChildrenKilled, totalPressKilled);
   // main 4 data box end
   
   
   
   
   // gaza databox start
   
   const getGazaChildsKilled = data.gaza.killed.children;
   const gazaChildrenKilled = getGazaChildsKilled.toLocaleString(); //get childrens killed in gaza
   
   
   const getCivilDifenceKilledInGaza = data.gaza.killed.civil_defence;
   const civilDifenceKilledInGaza = getCivilDifenceKilledInGaza.toLocaleString(); // get civil defence killed in gaza
   
   
   const getMedicalKilledInGaza = data.gaza.killed.medical;
   const medicalKilledInGaza = getMedicalKilledInGaza.toLocaleString(); // get medical killed in gaza
   
   
   const getWomenKilledInGaza = data.gaza.killed.women;
   const womenKilledInGaza = getWomenKilledInGaza.toLocaleString(); //get women killed in gaza
   
   
   const getPressKilledInGaza = data.gaza.killed.press;
   const pressKilledInGaza = getPressKilledInGaza.toLocaleString(); //get press killed in gaza
   
   
   const getTotalKilledInGaza = data.gaza.killed.total;
   const totalkilledInGaza = getTotalKilledInGaza.toLocaleString(); //get total killed in gaza
   
   
   const getMassacresInGaza = data.gaza.massacres;
   const massacresInGaza = getMassacresInGaza.toLocaleString(); //get massacres in gaza
   
   
   const getLastUpdateInGaza = data.gaza.last_update;
   const gazaDate = new Date(getLastUpdateInGaza);
    const gazaOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const lastUpdateInGaza = new Intl.DateTimeFormat('en-US', gazaOptions).format(gazaDate);
   
   
   
   detailedGazaData(gazaChildrenKilled, civilDifenceKilledInGaza, medicalKilledInGaza, womenKilledInGaza, pressKilledInGaza, totalkilledInGaza, massacresInGaza, lastUpdateInGaza);
   //gaza data box end
   
   
   //west bank data box start
   
   const getTotalkilledInWestBank = data.west_bank.killed.total;
   const totalkilledInWestBank = getTotalkilledInWestBank.toLocaleString(); //get total killed in west bank
   
   
   
   const getChildrenKilledInWestBank = data.west_bank.killed.children;
   const childrenKilledInWestBank = getChildrenKilledInWestBank.toLocaleString(); //get children killed in west bank 
   
   
   
   const getSettlerAttacksInWestBank = data.west_bank.settler_attacks;
   const settlerAttacksInWestBank = getSettlerAttacksInWestBank.toLocaleString(); //get Settler Attacks in west bank
   
   
   const getLastUpdatedInWestBank = data.west_bank.last_update;
   const westBankDate = new Date(getLastUpdatedInWestBank);
    const westBankOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const lastUpdatedInWestBank = new Intl.DateTimeFormat('en-US', westBankOptions).format(westBankDate); //get updated date in west bank
   
   
   
   
   
   detailedWestBankData(totalkilledInWestBank, childrenKilledInWestBank, settlerAttacksInWestBank, lastUpdatedInWestBank);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
  
  
  

  function updateDataBox(lUpdate, tKills, tInjured, tChildrenKilled, pKilled) {
    
    const renderLastUpdated = document.querySelector('.js-last-update');
   renderLastUpdated.innerHTML = `${lUpdate}.`;   //show updated time on discription 
    
   const renderTotalKilled = document.querySelector('.js-totalkill');
   renderTotalKilled.innerHTML = `<span class="data_value">${tKills}+</span>`; // show total killed (gaza + wb)
   
   const renderTotalInjured = document.querySelector('.js-injured');
   renderTotalInjured.innerHTML = `<span class="data_value">${tInjured}+</span>`; // show total injured 
   
   const renderTotalChildrenKilled = document.querySelector('.js-children-killed');
   renderTotalChildrenKilled.innerHTML = `<span class="data_value">${tChildrenKilled}+</span>`; // show children killed 
   
   const renderPressKilled = document.querySelector('.js-press-killed');
   renderPressKilled.innerHTML = `<span class="data_value">${pKilled}+</span>`; // show press killed 
  };
  
  
  
  //gaza databox
  
  function detailedGazaData(gazaChildrenKilled, civilDifenceKilledInGaza, medicalKilledInGaza, womenKilledInGaza, pressKilledInGaza, totalkilledInGaza, massacresInGaza, lastUpdateInGaza) {
    
    const renderChildsKilledInGaza = document.querySelector('.js-gaza-children-killed');
    renderChildsKilledInGaza.innerHTML = `${gazaChildrenKilled}`; //shows gaza childrens killed
    
    
    const renderCivilDefenceKilledInGaza = document.querySelector('.js-gaza-civil_difence-killed');
    renderCivilDefenceKilledInGaza.innerHTML = `${civilDifenceKilledInGaza}`; // shows civil defence killed in gaza
    
    
    const renderMedicalKilledInGaza = document.querySelector('.js-gaza-medical-killed');
    renderMedicalKilledInGaza.innerHTML = `${medicalKilledInGaza}`; //shows medical killed in gaza
    
    
    const renderWomenKilledInGaza = document.querySelector('.js-gaza-women-killed');
    renderWomenKilledInGaza.innerHTML = `${womenKilledInGaza}`; // shows women killed in gaza
    
    
    const renderPressKilledInGaza = document.querySelector('.js-gaza-press-killed');
    renderPressKilledInGaza.innerHTML = `${pressKilledInGaza}+`; //shows press killed in gaza
    
    
    const renderTotalKilledInGaza = document.querySelector('.js-gaza-total-killed');
    renderTotalKilledInGaza.innerHTML = `${totalkilledInGaza}`; //shows total killed in gaza
    
    
    const renderMassacresInGaza = document.querySelector('.js-gaza-massacres');
    renderMassacresInGaza.innerHTML = `${massacresInGaza}`; //shows massacres in gaza
    
    
    const renderLastUpdatedInGaza = document.querySelector('.js-gaza-last-update');
    renderLastUpdatedInGaza.innerHTML = `${lastUpdateInGaza}`; // shows gaza last updated time
  };
  
  
  //WEST BANK DATA BOX
  
  
  function detailedWestBankData(totalkilledInWestBank, childrenKilledInWestBank, settlerAttacksInWestBank, lastUpdatedInWestBank) {
    
    const renderTotalKilledInWestBank = document.querySelector('.js-wb-killed');
    renderTotalKilledInWestBank.innerHTML = `${totalkilledInWestBank}`; //shows total killed in west bank
    
    
    const renderChildrenKilledInWestBank = document.querySelector('.js-wb-children-killed');
    renderChildrenKilledInWestBank.innerHTML = `${childrenKilledInWestBank}`; //shows children killed in west bank
    
    
    const renderSettlerAttacksInWestBank = document.querySelector('.js-wb-settler_attacks');
    renderSettlerAttacksInWestBank.innerHTML = `${settlerAttacksInWestBank}`; //shows Settler Attacks in west bank
    
    
    
    const renderLastUpdatedInWestBank = document.querySelector('.js-wb-last-update');
    renderLastUpdatedInWestBank.innerHTML = `${lastUpdatedInWestBank}`; // shows updated time in west bank
  };
  
  
  
  
  
  
  
  
  //Layout 1 fade images transition & content transition
  
  
  const images = document.querySelectorAll('.fade-img');
  let currentIndex = 0;
  const changeInterval = 5000; // 5 seconds
  const fadeDuration = 1000; // 1 second
  
  function changeImage() {
      images[currentIndex].classList.remove('active');
  
      // Move to the next image index
      currentIndex = (currentIndex + 1) % images.length;
  
      // Add active class to the next image
      images[currentIndex].classList.add('active');
  }
  
  // Start the image rotation
  setInterval(changeImage, changeInterval);
  
  // Initially, show the first image
  images[currentIndex].classList.add('active');
  
  
  
  
  
  
  //changes the background colour of the header nav links to match the photos 
  
      const header = document.querySelector('.nav_links');
        const colors = ["#24FF32", "#FAFAFA", "#0E0E0E", "#FF4747"];
        let index = 0;

        function changeColor() {
            header.style.color = colors[index];
            index = (index + 1) % colors.length;
        }
        setInterval(changeColor, 5000); // Change every 5 seconds


//changes the color of the 2nd link (i dont want to loop through it i just copy pasted it)
        
        
        const header2 = document.querySelector('.nav_links2');
        const colors2 = ["#24FF32", "#FAFAFA", "#0E0E0E", "#FF4747"];
        let linkIndex = 0;

        function changeColorlinks2() {
            header2.style.color = colors2[linkIndex];
            linkIndex = (linkIndex + 1) % colors2.length;
        }

        setInterval(changeColorlinks2, 5000); // Change every 5 seconds
        
        
        
        //change btn background color
        
        const headerbtn = document.querySelector('.nav_btn');
        const headerColors = ["#24FF32", "#FAFAFA", "#0E0E0E", "#FF4747"];
        let btnIndex = 0;

        function changeBackgroundColorbtn() {
            headerbtn.style.backgroundColor = headerColors[btnIndex];
            btnIndex = (btnIndex + 1) % headerColors.length;
        }

        setInterval(changeBackgroundColorbtn, 5000); // Change every 5 seconds
        
        
        //change btn text color
        const headerbtncolor = document.querySelector('.nav_btn');
        const headertextColors = ["#272727", "#272727", "#EDEDED", "#272727"];
        let btnColorIndex = 0;

        function changeColorbtn() {
            headerbtncolor.style.color = headertextColors[btnColorIndex];
            btnColorIndex = (btnColorIndex + 1) % headertextColors.length;
        }

        setInterval(changeColorbtn, 5000); // Change every 5 seconds
        
        
        
        
        //main title animation through type js library in layout 1
        
        
        var typed = new Typed (".animeted_title", {
          strings: [
            "RED ^1000 DEPICTS:",
            "GREEN REPRESENTS:",
            "WHITE SYMBOLISES:",
            "BLACK REPRESENTS:"
          ],
          
          typeSpeed: 75,
          backDelay: 2200,
          backSpeed: 40,
          showCursor: true,
          cursorChar: '|',
          loop: true
        });
        
        
        const animatedTitle = document.querySelector('.animeted_title');
        const animatedTitleColors = ["#24FF32", "#FAFAFA", "#0E0E0E", "#FF4747"];
        let animatedTitleIndex = 0;

        function changeAnimatedTitleColor() {
            animatedTitle.style.color = animatedTitleColors[animatedTitleIndex];
            animatedTitleIndex = (animatedTitleIndex + 1) % animatedTitleColors.length;
        }

        setInterval(changeAnimatedTitleColor, 5000); // Change every 5 seconds
        
        
        
        
        
        
        
        
        
        // shows animated discription below the main title in fade effect 
        
        
   const mainDiscription = [
    '• The struggle for independence, sacrifice, and the blood of martyrs.',
    '• The land, prosperity, and the Islamic faith.',
    '• Peace, hope, and purity.',
    '• The oppression and suffering of the Palestinian people.'
    ];

    let cIndex = 0;
    const sentenceElement = document.querySelector('.animeted_disc');
    
    function updateSentence() {
        sentenceElement.classList.remove('active');
        setTimeout(() => {
            sentenceElement.textContent = mainDiscription[cIndex];
            sentenceElement.classList.add('active');
        }, 700); // Time to wait before updating text
    }
    
    function cycleSentences() {
        setInterval(() => {
            cIndex = (cIndex + 1) % mainDiscription.length;
            updateSentence();
        }, 5000); // Time to wait before changing sentence
    }
    
    // Initialize
    sentenceElement.textContent = mainDiscription[cIndex];
    sentenceElement.classList.add('active');
    cycleSentences();
    
    
    
    /** // discription color change
    const discColorChange = document.querySelector('.animeted_disc');
        const discColors = ["#43FF35", "#FAFAFA", "#A0A0A0", "#FF3535"];
        let discColorIndex = 0;

        function discColorsChange() {
            discColorChange.style.color = discColors[discColorIndex];
            discColorIndex = (discColorIndex + 1) % discColors.length;
        }

        setInterval(discColorsChange, 5000); // Change every 5 seconds **/