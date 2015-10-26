var demoApp = angular.module('demoApp',[]);

demoApp.controller('SimpleController',['$scope',function ($scope) {

	$scope.countries = [
	{ id:'FR', name:'France'},
	{ id:'PB', name: 'pays-Bas' },
	{ id:'GB', name: 'Grande-Bretagne' },
	{ id:'DE', name: 'Allemagne' }
	];
	
	$scope.addUser = function() {
		$scope.users.push({ name:'lolo', city: 'lyon' });
	}
	

	$scope.clients = [
	{ name:'Adagio Paris', brand:'Adagio', country:'France', wifi:1, webcorner:1 },		
	{ name:'Novotel La défense', brand:'Novotel', country:'France', wifi:1, webcorner:1 },		
	{ name:'Adagio Amsterdam', brand:'Adagio', country:'Pays-Bas', wifi:0, webcorner:1 },		
	{ name:'Adagio Tour Eiffel', brand:'Adagio', country:'France', wifi:1, webcorner:1 },		
	{ name:'Novotel London', brand:'Novotel', country:'France', wifi:0, webcorner:1 },		
	{ name:'Adagio Marseille', brand:'Adagio', country:'France', wifi:1, webcorner:1 }	
	];
		
	$scope.order = {
		name : true,
		brand: true,
		country: true,
		wifi: true,
		webcorner:true
	};

	$scope.sort = function(col) {
		$scope.sorted = col;
		$scope.order[col] = !$scope.order[col];
	}
	
}]);