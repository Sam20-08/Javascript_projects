// Adventure Game

const question=require("prompt-sync")()

const name=question("What is your name? ")
console.log("Hello", name, "Welcome to the game!! ")


const game=question("Do you want to play the game? ").toLowerCase()

if(game==="yes"){
  const leftorright=question("Choose left or right? ").toLowerCase()
  if(leftorright==="left"){
    const cross=question("Do you want to cross the bridge? ").toLowerCase()
    if(cross==="yes"){
      const runmaze=question("choose cave or maze? ").toLowerCase()
      if(runmaze==="maze"){
        console.log("run through the maze and you win")
      }else if(runmaze==="cave"){
        const food=question("Water or fruits? ").toLowerCase()
        if(food==="Fruits"){
          console.log("You lose because you are staying")
        }
      }
      }
      else{
        console.log("If you don't cross you die and lose")
      }
    }
    else if(leftorright==="right"){
      console.log("you can't move ahead...")
    }
  }



