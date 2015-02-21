var app = angular.module("app", ['ngTable', 'CenterViewModule'])

.constant("EVENTS", {
		"FILE":{
			"LOADED" : "file.loaded",
			"UPLOADED" : "file.uploaded",
            "CHANGE" : "file.changed",
			"SELECTION" : "file.selection"
		},
		"FILES" : {
			"REPLACE" : "files.replace",
            "UPDATED" : "files.updated"
		},
		"MENU" : {
			"CHANGED" : "menu.changed"
		}
})

.constant("FILES", {
    "FILE" : "FILE",
    "DIRECTORY" : "DIRECTORY"
})

.constant("MENUS", {
	"HOME" : "HOME",
	"SERVER" : "SERVER",
	"LIST" : [
		{"name": "Home", "event" : "HOME"},
		{"name" :"Server", "event" : "SERVER"}
	]
});