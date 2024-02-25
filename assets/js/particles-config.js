particlesJS('particles-js',
  {
    "particles": {
      "number": {
        "value": 40,
        "density": {
          "enable": true,
          "value_area": 1000
        }
      },
      "color": {
        "value": ["#ffffff","#ffffff",  "#25c6f7", 
                  "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#0796f5",
                  "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#42c5f5"]   // Array of colors for the particle
      },
      "size": {
        "value": 3,  // This value determines the size of the particles
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 170, // Distance at which particles are linked
        "color": "#ffffff", // Color of the links
        "opacity": 0.4, // Opacity of the links
        "width": 1 // Width of the links
      },
      // rest of config here
    }
  }
);