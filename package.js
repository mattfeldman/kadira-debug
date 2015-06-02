Package.describe({
  summary: 'End to End debugging for Meteor apps',
  version: '0.0.1',
  git: 'https://github.com/meteorhacks/kadira-debug',
  name: "meteorhacks:kadira-debug",
  debugOnly: true
});

Package.onUse(function (api) {
  configure(api);
});

Package.onTest(function(api) {
  configure(api);
  api.use('tinytest');
});

function configure(api) {
  api.versionsFrom('1.0');
  api.use('blaze');
  api.use('templating');
  api.use('underscore');
  api.use('meteorhacks:flow-router@1.9.0', {weak:true});
  api.use('iron:router@1.0.0', {weak:true});

  api.addFiles('lib/client/store.js', 'client');
  api.addFiles('lib/client/routing.js', 'client');
  api.addFiles('lib/client/blaze.js', 'client');

  api.addFiles('lib/server/methods.js', 'server');
}