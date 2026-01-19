let aboutBoxes = ""

aboutInfo.forEach((aboutBlock, index) => {
 aboutBoxes += `
 <div class="box">
          <div class="image-holder">${aboutBlock.image}</div>
          <div class="box-header">${aboutBlock.header}</div>
          <div class="bo-information">${aboutBlock.info}</div>
  </div>`
  console.log(index);
})

document.querySelector('.about-box').innerHTML = aboutBoxes