const { EmbedBuilder } = require("discord.js");
const config = require("../../config");
const fs = require("node:fs");

module.exports = {
    name: "playerStart",
    async execute(queue, track) {
        const embed = new EmbedBuilder();

        const data = fs.readFileSync("src/data.json");
        var parsed = JSON.parse(data);

        parsed["songs-played"] += 1;

        fs.writeFileSync("src/data.json", JSON.stringify(parsed));

        embed.setDescription(`Now playing **[${track.title}](${track.url})** by **${track.author}**.`);
        embed.setColor(config.embedColour);
        queue.metadata.channel.send({ embeds: [embed] });
    },
};
