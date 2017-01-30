Package.describe({
  name: 'compstak:edit-in-place',
  version: '0.0.9',
  // Brief, one-line summary of the package.
  summary: 'A simple edit in place package for Meteor.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/robincwillis/meteor-edit-in-place',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');

  api.use([
    'underscore',
    'templating',
    'fourseven:scss@3.13.0',
    'jquery',
    ], 'client');

  api.mainModule('lib/client/eip-client.js', 'client');

  api.addFiles([
    'lib/client/eip-list.html',
    'lib/client/eip-list-item.html',
    'lib/client/eip-input.html',
    'lib/client/eip-select.html',
    'lib/client/eip-group.html',
    'lib/client/eip-group-item.html',
    'lib/client/eip.scss',
    'lib/client/icons/_pencil.html',
    'lib/client/icons/_check.html',
    'lib/client/icons/_delete.html',
  ], 'client');

});

Package.onTest(function(api) {
  api.use('tinytest');
});
