/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;

var BLACK_CHECKLIST_ICON = './assets/upgrd-checklist-logo.png';

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
