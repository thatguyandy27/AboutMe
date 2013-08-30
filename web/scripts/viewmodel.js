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
                var selectedItem = vm.selectedItem();
                selectedItem.id = selectedId;
                vm.selectedItem( selectedItem)
            }

            function retrieveData(){
                 vm.dataSource.retrieveBooks(function booksCallback(results){
                        var selectedItem = vm.selectedItem();
                        selectedItem.books = results;
                    });

                 vm.dataSource.retrieveLinks(function linksCallback(results){
                        var selectedItem = vm.selectedItem();
                        selectedItem.links = results;
                        vm.selectedItem( selectedItem)
                    });
            }


            vm.selectedItem = ko.observable(vm.dataSource.getItemById(initialSelection));

            retrieveData();
        }

        return new vm();
    })(dataSource, initalSelection);

    window.viewmodel = vm;

})(this, this.jQuery, new dataSource(), 'objective');

