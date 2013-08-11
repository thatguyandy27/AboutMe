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
                if (selectedId == 'books')
                    vm.retrieveBooks(selectedId);
                else
                    vm.selectedItem(vm.dataSource.getItemById(selectedId));
            }

            vm.retrieveBooks = function retrieveBooks(navId){
                vm.dataSource.retrieveBooks(function booksCallback(results){
                    vm.selectedItem( {id:navId, isLoading: false,
                         books: results})
                });
            }

            vm.selectedItem = ko.observable(vm.dataSource.getItemById(initialSelection));

        }

        return new vm();
    })(dataSource, initalSelection);

    window.viewmodel = vm;

})(this, this.jQuery, new dataSource(), 'objective');

