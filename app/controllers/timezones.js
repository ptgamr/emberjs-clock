import Ember from 'ember';

export default Ember.Controller.extend({
  /* create array of timezones with name & offset */
  init: function() {
    var timezones = [];
    for (var i in moment.tz._names) {
      timezones.push({
        name: moment.tz._names[i],
      });
    }
    this.set('timezones', timezones);
    this._super();
  },
  selectedTimezone: null,
  actions: {
    /* save a timezone record to our offline datastore */
    add: function() {
      var timezone = this.store.createRecord('timezone', {
        name: this.get('selectedTimezone').name
      });
      timezone.save();
    },        
    /* delete a timezone record from our offline datastore */
    remove: function(timezone) {
      timezone.destroyRecord();
    }
  }
});