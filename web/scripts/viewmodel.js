(function (window, $, dataSource, initalSelection){

	var vm = (function(dataSource, initialSelection){
		function vm(){
			var vm = this;
			vm.dataSource = dataSource;
			vm.leftNavItems = ko.observableArray(dataSource.getLeftNavItems());
			
			vm.getTemplate = function(){
				return vm.selectedItem().id;
			}
		
			
			vm.updateSelected = function(selectedId){
	   			vm.selectedItem(vm.dataSource.getItemById(selectedId));
				
			}
			vm.selectedItem = ko.observable(vm.dataSource.getItemById(initialSelection));
			
		}
		
		return new vm();
	})(dataSource, initalSelection);
	
	window.viewmodel = vm;

})(this, this.jQuery, new dataSource(), 'objective');

