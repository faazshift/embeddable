var _ = require('lodash');
var when = require('when');
var Provider = require('../provider');

module.exports = [

  Provider.extend({
    name: "kickstarter",
    type: "rich",
    uri: "//[-\\w]+\\.kickstarter\\.com/projects/.+$",
    fetch: function(uri) {
      return this.fetchEmbed(uri, {
        api: "http://www.kickstarter.com/services/oembed"
      });
    }
  }),

  Provider.extend({
    name: 'Kinomap',
    type: "video",
    uri: "kinomap\\.com/.+$",
    fetch: function(uri) {
      return this.fetchEmbed(uri, {
        api: "http://www.kinomap.com/oembed"
      });
    }
  })

];
