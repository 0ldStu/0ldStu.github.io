function randombg(){

    var bigSize = ["url('https://bettysgraphics.neocities.org/images/backgrounds/010C.jpg')",
                   "url('https://bettysgraphics.neocities.org/images/backgrounds/pattern%20325.gif')",
                   "url('https://bettysgraphics.neocities.org/images/backgrounds/046.GIF')",
                   "url('https://bettysgraphics.neocities.org/images/backgrounds/pattern%20592.gif')",
                   "url('https://bettysgraphics.neocities.org/images/backgrounds/pattern%20600.gif')",
                   "url('https://bettysgraphics.neocities.org/images/backgrounds/pattern%20534.gif')",
                   "url('https://bettysgraphics.neocities.org/images/backgrounds/pattern%20444.jpg')",
                   "url('https://bettysgraphics.neocities.org/images/backgrounds/pattern%20442.jpg')",
                   "url('https://bettysgraphics.neocities.org/images/backgrounds/water%202.jpg')",
                   "url('https://bettysgraphics.neocities.org/images/backgrounds/water.gif')",
                   "url('https://bettysgraphics.neocities.org/images/backgrounds/stars%202.gif')",
                   "url('https://bettysgraphics.neocities.org/images/backgrounds/stars%201.gif')",
                   "url('https://bettysgraphics.neocities.org/images/backgrounds/stars%203.gif')",
                   "url('https://bettysgraphics.neocities.org/images/backgrounds/skulls.jpg')",
                   "url('https://bettysgraphics.neocities.org/images/backgrounds/skulls%202.jpg')",
                   "url('https://bettysgraphics.neocities.org/images/backgrounds/skulls%204.jpg')",
                   "url('https://bettysgraphics.neocities.org/images/backgrounds/082.GIF')",
                   "url('https://bettysgraphics.neocities.org/images/backgrounds/206.GIF')",
                   "url('https://bettysgraphics.neocities.org/images/backgrounds/256.GIF')",
                   "url('https://bettysgraphics.neocities.org/images/backgrounds/275.GIF')",
                   "url('https://bettysgraphics.neocities.org/images/backgrounds/529.GIF')",
                   "url('https://bettysgraphics.neocities.org/images/backgrounds/582.GIF')",
                   "url('https://bettysgraphics.neocities.org/images/backgrounds/247.GIF')"];
    var random=  getRandomInt(1,24);
    
    document.getElementById("random").style.backgroundImage=bigSize[random];
  }
  function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }