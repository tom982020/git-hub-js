function Mouse(name) {
    this.name = name;
}
Mouse.prototype.die = function() {
    this.isDead = true;
}
module.exports = Mouse;