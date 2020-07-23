function Mouse(name) {
    this.name = name;
}
Mouse.prototype.die = function() {
    this.isDead = true;
}
Mouse.prototype.Run = function() {
    console.log("Run");
}
module.exports = Mouse;