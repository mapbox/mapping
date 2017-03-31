var moment = require('moment');

module.exports = function (tileLayers, tile, writeData, done) {
    // Using only features touched in 2017 for analysis.
    // Months in moment begin with 0, :-(
    var startDate = moment([2017, 0, 1]);

    var osm = tileLayers.osm.osm;
    var counts = {};
    for (var i = 0; i < osm.features.length; i++) {
        var feature = osm.features[i];

        // Multiplying by 1000 to convert to milliseconds.
        var timestamp = moment(feature.properties['@timestamp'] * 1000);

        // Check if feature was last touched in 2017.
        if (timestamp < startDate) continue;

        var user = feature.properties['@user'];
        if (counts.hasOwnProperty(user)) counts[user] += 1;  // Increment feature count for user.
        else counts[user] = 1;  // Initialize feature count for user.
    }
    var userCount = 0, featureCount = 0;
    for(var user in counts) {
        userCount += 1;
        featureCount += counts[user];
    }

    done(null, {
        'users': userCount,
        'features': featureCount
    });
}
