var loadJs = {
	loadeJsCb: {},
	loaded: {},
	runCb(id, res) {
		if (!loadeJsCb[id]) {
			return;
		}
		var curcb = loadeJsCb[id].splice(0, 1);
		while (curcb) {
			curcb(res);
			curcb = loadeJsCb[id].splice(0, 1);
		}
	},
	load: function(url, id, callback) {
		var self = this;
		if (!loadeJsCb[id]) {
			loadeJsCb[id] = [];
		}
		if (typeof callback == "function") {
			loadeJsCb[id].push(callback);
		}
		var script = document.getElementById(id);
		if (!script) {
			script = document.createElement("script");
			script.type = "text/javascript";
			script.id = id;
			if (script.readyState) {
				script.onreadystatechange = function() {
					if (script.readyState == "loaded" || script.readyState == "complete") {
						self.loaded[id] == true;
						self.checkScript(id);
					}
				};
			} else {
				script.onload = function() {
					self.loaded[id] == true;
					self.checkScript(id);
				};
				script.onerror = function() {
					self.loaded[id] == false;
					self.checkScript(id);
				};
			}
			script.src = url;
		} else {
			this.checkScript();
		}
	},
	checkScript(id) {
		if (typeof self.loaded[id] != "undefined") {
			this.runCb(id, self.loaded[id]);
		}
	}
};
module.exports = loadJs;
