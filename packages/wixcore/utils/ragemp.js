module.exports = {
    newBlip(position, sprite, color, scale, name) {
        return mp.blips.new(sprite, position, { name: name, scale: scale, color: color, shortRange: true });
    }
}