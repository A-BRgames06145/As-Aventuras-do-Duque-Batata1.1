class Form {
    constructor() {
      this.playButton = createButton("Começar");
      this.instructionButton = createButton("Instruções")
    }
  
    setElementsPosition() {
      this.playButton.position(575, 265);
      this.instructionButton.position(575, 365);
    }
  
    setElementsStyle() {
      this.playButton.class("customButton");
      this.instructionButton.class("customButton");
    }
  
    hide() {
      this.playButton.hide();
      this.instructionButton.hide();
    }
  
    handleMousePressed() {
        this.playButton.mousePressed(() => {
        this.playButton.hide();
        this.instructionButton.hide();
        gamestate = 1;
      });

      this.instructionButton.mousePressed(()=>{
        swal({
          title: "Como Jogar:",
          text: "Clique nas setas < e > para se mover | Clique na seta ^ para pular | Segure as teclas A, W, S e D para atirar",
          confirmButtonText: "Ok"
        })
      });
    }
  
    display() {
      this.setElementsPosition();
      this.setElementsStyle();
      this.handleMousePressed();
    }
  }