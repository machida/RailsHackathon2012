
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.renderPjax('about', { title: 'Rails Hackathon 2012 in Okinawa' })
};

exports.about_en = function(req, res){
  res.renderPjax('about_en', { title: 'Okinawa RailsHackathon2012' })
};

exports.information = function(req, res){
  res.renderPjax('information', { title: 'RailsHackathonについて' })
};

exports.schedule = function(req, res){
  res.renderPjax('schedule', { title: 'RailsHackathonスケジュール' })
};