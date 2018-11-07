'use strict';

module.exports = function(blueprint) {
  blueprint.supportsAddon = function() {
    return false;
  };

  return blueprint;
};
