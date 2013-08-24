(function (window, $, dataSource){

    var vm = (function(dataSource){
        function vm(){
            var vm = this;
            vm.dataSource = dataSource;
            vm.books = ko.observableArray();
            vm.links = ko.observableArray();
            vm.projects = ko.observableArray();
            vm.skils = ko.observableArray();
            vm.about = ko.observable();

            function retrieveData(){

                vm.dataSource.retrieveBooks(function retrieveBooksCallback(results){

                    var len = (results ? results.length : 0);

                    for (var i = 0; i < len; i++)
                    {
                        var newBook = {
                            title : ko.observable(results[i].title),
                            link : ko.observable(results[i].link),
                            order : ko.observable(results[i].order),
                            rating : ko.observable(results[i].rating),
                            review : ko.observable(results[i].review),
                            id: ko.observable(results[i].id)
                        };
                        vm.books.push(newBook);
                    }
                });

                vm.dataSource.retrieveAbout(function retrieveAboutCallback(result){
                    vm.about({
                           description: ko.observable(result.description),
                           aboutSite: ko.observable(result.aboutSite),
                           otherInterests: ko.observable(result.otherInterests)
                        });
                });
            }

            vm.saveBook = function(item){
                vm.dataSource.saveBook({
                    title:item.title(),
                    link: item.link(),
                    order: item.order(),
                    rating: item.rating(),
                    review: item.review(),
                    id: item.id()
                    },  function saveBookCallback(result){
                        item.id(result);
                });
            };
            vm.saveLink = function(item){
                alert(item);
            };
            vm.saveAbout = function(){
                vm.dataSource.saveAbout({
                    description: vm.about().description(),
                    aboutSite: vm.about().aboutSite(),
                    otherInterests: vm.about().otherInterests()
                    }, function saveAboutCallback(result){});
            }

            retrieveData();
        }

        return new vm();
    })(dataSource);

    window.viewmodel = vm;

})(this, this.jQuery, new dataSource());

