let aboutBoxes = ""

aboutInfo.forEach((aboutBlock, index) => {
 aboutBoxes += `
  <div class="box" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
    <div class="image-holder ${colors[index % colors.length]} ">
    <i class=" ${aboutBlock.icon} box-icon"></i>
    </div>
    <div class="about-header box-sub">${aboutBlock.header}</div>
    <div class="box-information">${aboutBlock.info}</div>
  </div>`
})

const aboutBox = document.querySelector('.about-box');
if (aboutBox) {
  aboutBox.innerHTML = aboutBoxes;
}


let joinUs = ""

joinUsInfo.forEach((joinUsBlock, index) => {
  joinUs += `
  <div class="wrapper">
    <div class="join-box" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="2000">
     <div class="join-image-holder ${colors[index % colors.length]} ">
       <i class=" ${joinUsBlock.icon} join-box-icon"></i>
     </div>
      <div class="join-box-header">${joinUsBlock.header}</div>
      <div class="join-box-information">${joinUsBlock.info}</div>
      <button class="join-cta-button ${colors[index % colors.length]}"><a href="#">${joinUsBlock.cta}</a></button>
    </div>
  </div>`
})


const joinUsContainer = document.querySelector('.join-us-container');

if (joinUsContainer) {
  joinUsContainer.innerHTML = joinUs;
}


AOS.refreshHard();
