let aboutBoxes = ""

aboutInfo.forEach((aboutBlock, index) => {
 aboutBoxes += `
  <div class="box" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="2000">
    <div class="image-holder ${colors[index % colors.length]} ">
    <i class=" ${aboutBlock.icon} box-icon"></i>
    </div>
    <div class="about-header box-sub">${aboutBlock.header}</div>
    <div class="box-information">${aboutBlock.info}</div>
  </div>`
})

document.querySelector('.about-box').innerHTML = aboutBoxes;


// AOS.refreshHard();
