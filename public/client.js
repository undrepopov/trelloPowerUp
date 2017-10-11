/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;

var BLACK_ROCKET_ICON = 'https://undrepopov.github.io/trelloPowerUp/assets/upgrd-checklist-logo.png';

TrelloPowerUp.initialize({
	'card-buttons': function(t, options) {
		return [{
			icon: BLACK_ROCKET_ICON,
			text: 'Custom Checklist Plus',
      callback: function(t) {
        return t.popup({
          title: "New Custom Checklist Plus Element",
          url: 'checklistplus.html',
        });
      }
		}];
	},
});
