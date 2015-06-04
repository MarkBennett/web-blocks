function Api(workerInterface, viewPoint) {
  var help = [
    'Here you can type JavaScript commands!',
    'Not sure what do type? Try this:',
    '  setBlock(100,10,100,1)',
    'To see more awesome commands, click the "Script" tab and load a sample program! :-)'
  ].join('\n');

  var hi = 'Hi there!';

  function setBlock(x, y, z, type) {
    workerInterface.setBlocks(new THREE.Vector3(x | 0, y | 0, z | 0), new THREE.Vector3(x | 0, y | 0, z | 0), type, true);
  }

  function setBlocks(x1, y1, z1, x2, y2, z2, type) {
    workerInterface.setBlocks(new THREE.Vector3(x1 | 0, y1 | 0, z1 | 0), new THREE.Vector3(x2 | 0, y2 | 0, z2 | 0), type, true);
  }

  function getBlock(x, y, z) {
    return workerInterface.getBlock(new THREE.Vector3(x | 0, y | 0, z | 0))
    .then(function(result) {
      return result.type;
    });
  }

  function getPosition() {
    return viewPoint.getPosition();
  }

  function setPosition(x, y, z) {
    viewPoint.setPosition(new THREE.Vector3(x, y, z));
  }

  function getTarget() {
    return viewPoint.getTarget();
  }

  function setTarget(lon, lat) {
    viewPoint.setTarget({ lon: lon, lat: lat });
  }

  return {
    help: help,
    hi: hi,
    setBlock: setBlock,
    setBlocks: setBlocks,
    getBlock: getBlock,
    getPosition: getPosition,
    setPosition: setPosition,
    getTarget: getTarget,
    setTarget: setTarget
  };
}

module.exports = Api;
