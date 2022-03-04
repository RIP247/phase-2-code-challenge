import React from "react";
import BotCard from "./BotCard";
import BotSpecs from "./BotSpecs";

function YourBotArmy({bot, onBotClick, onDeleteBot}) {
  //your bot army code here...
  const addBotsPage = bot.map(bot => {
    return <BotCard 
    bot={bot}
    onBotClick={onBotClick}
    onDeleteBot={onDeleteBot}
    />
  })

  const addBotSpecs = bot.map(bot => {
    return <BotSpecs 
    bot={bot}
    />
  })

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
         {addBotsPage}
         {addBotSpecs}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
