import {React, useState, useEffect} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [bot, setBot] = useState([])
  const [myarmy , setmyarmy] = useState([])

  useEffect(()=> {
    fetch(`http://localhost:8002/bots`)
    .then(resp => resp.json())
    .then(data => setBot(data))
  }, [])

  function handleAddBot (addBot){
    if(myarmy.every(bot => bot.id !== addBot.id)){
      setmyarmy([...myarmy, addBot])
    }
  }

  function handleRemoveBot (removeBot){
    setmyarmy(myarmy.filter(bot => bot.id !== removeBot.id))
  }

  function handleDeleteBot (deleteBot) {
    fetch(`http://localhost:8002/bots/${deleteBot.id}`, {
      method: 'DELETE'
    })
    setBot(bot.filter(bot => bot.id !== deleteBot.id))
    setmyarmy(myarmy.filter(myarmy => myarmy.id !== deleteBot.id))
  }
  
  

  return (
    <div>
      <YourBotArmy  bot={myarmy} onBotClick={handleRemoveBot} onDeleteBot={handleDeleteBot}/>
      <BotCollection  bot={bot} onBotClick={handleAddBot} onDeleteBot={handleDeleteBot}/>
    </div>
  )
}

export default BotsPage;
