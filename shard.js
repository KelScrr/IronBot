const {ShardingManager} = require("discord.js");

 
const shards = new ShardingManager("./index.js", {
    token:"Nzc3Njk2ODczNjc5MDI4MjQ0.X7HMpw.2oVjcpRyeq-jjICjyhE9_qaLVsM",
    totalShards: 1,
    respawn: true
});
 
shards.on("shardCreate", shard => {
    console.log(`[${new Date().toString().split(" ", 5).join(" ")}] Launched shard #${shard.id}`);
});
 
shards.spawn(shards.totalShards, 10000); // For safety reason, try to use 10 seconds to respawn the shard.