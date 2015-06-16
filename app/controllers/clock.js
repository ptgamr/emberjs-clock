import Ember from 'ember';

export default Ember.Controller.extend({
    init: function() {
        // Update the time.
        this.updateTime();
    },

    updateTime: function() {
        var _this = this;

        // Update the time every second.
        Ember.run.later(function() {
            _this.set('localTime', moment().format('h:mm:ss a'));
            _this.updateTime();
        }, 1000);
    },


    timeByTimezone: function() {
        if (this.get('selectedTimezone')) {
            return moment().tz(this.get('selectedTimezone.name')).format('h:mm:ss a')
        } else {
            return this.get('localTime');
        }
    }.property('localTime', 'selectedTimezone.name'),

    selectedTimezone: null,
    localTime: moment().format('h:mm:ss a')
});