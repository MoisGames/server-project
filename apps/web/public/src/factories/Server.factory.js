const Server = [
  '$resource',
  function($resource) {
    return $resource('/servers/:id', {id: '@_id'}, {
      stop: {
        url: '/servers/:id/stop',
        method: 'get',
        isArray: false,
      },
      start: {
        url: '/servers/:id/start',
        method: 'get',
        isArray: false,
      },
      reload: {
        url: '/servers/:id/reload',
        method: 'get',
        isArray: false,
      }
    });
  },
];

export {Server};
