import React from "react";
import BotCard from "./BotCard"
import BotSpecs from "./BotSpecs";

function BotCollection({bot, onBotClick, onDeleteBot}) {
  // Your code here
console.log(bot)

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
    <div className="ui four column grid">
      <div className="row">
        {/* Collection of all bots */}
        {addBotsPage}
        {addBotSpecs}
      </div>
    </div>
  );
}

export default BotCollection;
