angular.module('app').controller('ProductsController', ['$scope', 'products', function($scope, products) { 
  products.success(function(data){
  	$scope.products =[
  		{
	  		name: data.bidding.name,
		  	total: data.bidding.total_raised,
		  	bidding: data.bidding.bidding,
		  	tickets: data.bidding.tickets,
		  	cash_donations: data.bidding.cash_donations,
		  	quick_sales: data.bidding.quick_sales,
		  	total_cataloig: data.bidding.total_cataloig_value
  		},
  		{
	  		name: data.giving.name,
		  	total: data.giving.total_raised,
		  	donations: data.giving.donations,
		  	average_donation: data.giving.average_donation,
		  	registrations: data.giving.registrations,
	  	},
	  	{
	  		name: data.gift.name,
		  	total: data.gift.total_raised,
		  	constituents: data.gift.constituents,
		  	pledges_ytd: data.gift.pledges_ytd,
		  	average_pledge: data.gift.average_pledge,
		  	volunteers: data.gift.volunteers
	  	},
	  	{
	  		name: data.artez.name,
		  	total: data.artez.total_raised,
		  	donations: data.artez.donations,
		  	average_donation: data.artez.average_donation,
		  	registrations: data.artez.registrations,
	  	},
	  	{
  		name: data.truist.name,
	  	total: data.truist.total_raised,
	  	donations: data.truist.donations,
	  	average_donation: data.truist.average_donation,
	  	registrations: data.truist.registrations,
  	}
  	];
  });
}]);