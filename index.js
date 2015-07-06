'use strict';

var remote = require('remote');
var fileUtil = remote.require('./lib/fileUtil');

fileUtil.fetchReadList(function(err, matches){
  if(!err) document.write(matches.join('\n'));
});
