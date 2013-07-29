var dpApp = angular.module('dpApp', ['ngSanitize']);
dpApp.config(['$locationProvider', function (l) {
	l.html5Mode(true);
}]);
dpApp.controller('dpController', ['$scope', '$http', '$routeParams', '$location', function(s,h,rp,l) {
	s.$on("$locationChangeStart", function() {
		h.get('../js/uidevtest-data.js').success(function(data) {
			s.stories = data.objects;
			s.storyParam = l.search().story;
			if (s.storyParam) {
				s.dpView = 'story';
				s.urlParam = s.storyParam;
				s.index = s.urlParam.slice(3) - 1;
				s.current = data.objects[s.index];
			}
			else {
				s.dpView = 'list';
			}
		});
	});
}]);