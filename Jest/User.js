/**
 * Created by vincent on 13/11/15.
 */
// User.js
function User() {
    this.name = null;
}
User.prototype.setName = function(name) {
    this.name = name;
};
module.exports = User;