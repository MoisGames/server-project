import template from './serversViewGroup.template';

const serversViewGroup = {
  template: template(),
  controller: [
    'Server',
    '$stateParams',
    function(Server, $stateParams,$uibModal) {
      this.server = Server.get({groupId: $stateParams.groupId});
    }],
};

export {serversViewGroup};