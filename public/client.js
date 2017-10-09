/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;

var BLACK_CHECKLIST_ICON = 'https://undrepopov.github.io/trelloPowerUp/assets/upgrd-checklist-logo_color.png';

TrelloPowerUp.initialize({
	 'card-buttons': function(t, options) {
	 	return [{
	 		icon: BLACK_CHECKLIST_ICON,
	 		text: 'Custom Checklist Item',
	callback: function(t) {
	 return t.popup({
		 title: "Checklist Details",
		 url: 'checklist.html',
	 });
	}
		}];
	 },
});
