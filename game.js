const miniGame = {
    step: 0,
    keymap: { up: null, down: null, left: null, right: null, a:null, b:null },
    checkInterval: null,
    checkGamepad: () => {
      
      buttons = document.querySelectorAll(".button.active");
      for (x = 0; x < buttons.length; x++) {
        buttons[x].setAttribute("class", "button");
      }
      
      const gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
      for (let x = 0; x < gamepads.length; x++) {
        const gamepad = gamepads[x];
        if(gamepad) {
          if (gamepad.buttons) {
            for (let y = 0; y < gamepad.buttons.length; y++) {
              if (gamepad.buttons[y].pressed) {
                console.log(`button ${y} of controller ${x} is pressed.`);
                switch(y) {
                    case 0: document.querySelector("#button-x").classList.add("active"); break;
                    case 1: document.querySelector("#button-a").classList.add("active"); break;
                    case 2: document.querySelector("#button-b").classList.add("active"); break;
                    case 3: document.querySelector("#button-y").classList.add("active"); break;
                    case 4: document.querySelector("#button-l").classList.add("active"); break;
                    case 5: document.querySelector("#button-r").classList.add("active"); break;
                  case 8: document.querySelector("#button-select").classList.add("active"); break;
                  case 9: document.querySelector("#button-start").classList.add("active"); break;
                }
              }
            }
          }
          
          if (gamepad.axes) {
            for (let y = 0; y < gamepad.axes.length; y++) {
              const val = gamepad.axes[y].toFixed(4);
              if (val == 1.0 && y % 2 === 0) {
                console.info("Move right");
                document.querySelector("#button-right").classList.add("active");
              } else if (val == -1.0 && y % 2 === 0) {
                console.log("Move left")
                document.querySelector("#button-left").classList.add("active");
              } else if (val == 1.0 && y % 2 === 1) {
                console.log("Move down");
                document.querySelector("#button-down").classList.add("active");
              } else if (val == -1.0 && y % 2 === 1) {
                console.log("Move up");
                document.querySelector("#button-up").classList.add("active");
              }
            }
          }
        }
  
  
      }
      // console.log(window.gamepads);
      requestAnimationFrame(miniGame.checkGamepad)
    },
    init: function() {
      const self = this;
  
      window.addEventListener("gamepadconnected", function(e) {
        console.info("Gamepad detected");
        if (!window.gamepads) window.gamepads = {};
        if (!window.gamepads[e.gamepad.index]) {
          window.gamepads[e.gamepad.index] = e.gamepad;
        }
        // self.checkInterval = setInterval(self.checkGamepad, 1000);
        self.checkGamepad()
        self.goToStep(1);
      });
  
      window.addEventListener("gamepaddisconnected", function(e) {
        console.info("Gamepad disconnected");
        clearInterval(self.checkInterval);
        delete window.gamepads[e.gamepad.index];
      });
    },
    goToStep: function(step) {
      document.querySelector("#step-" + this.step).classList.remove("open");
      document.querySelector("#step-" + step).classList.add("open");
      this.step = step;
    }
  }
  
  miniGame.init();
  