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
                       addBookToList(results[i].title, results[i].link,
                           results[i].order, results[i].rating,
                           results[i].review, results[i].id);
                    }
                });

                vm.dataSource.retrieveAbout(function retrieveAboutCallback(result){
                    vm.about({
                           description: ko.observable(result.description),
                           aboutSite: ko.observable(result.aboutSite),
                           otherInterests: ko.observable(result.otherInterests)
                        });
                });

                vm.dataSource.retrieveLinks(function retrieveLinksCallback(results){
                    var len = (results ? results.length : 0);

                    for (var i = 0; i < len; i++)
                    {
                        addLinkToList(results[i].title,
                            results[i].url,
                            results[i].description,
                            results[i].id);
                    }
                })
            }

            function addLinkToList(title, url, description,id){
                var newLink = {
                    title : ko.observable(title),
                    url : ko.observable(url),
                    description : ko.observable(description),
                    id: ko.observable(id)
                };
                vm.links.push(newLink);
            }
            function addBookToList(title,link, order, rating, review, id){
                vm.books.push({
                    title : ko.observable(title),
                    link : ko.observable(link),
                    order : ko.observable(order),
                    rating : ko.observable(rating),
                    review : ko.observable(review),
                    id: ko.observable(id)});
            }

            // Save button click event handlers
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
                  vm.dataSource.saveLink({
                    title:item.title(),
                    url: item.url(),
                    description: item.description(),
                    id: item.id()
                    },  function saveLinkCallback(result){
                        item.id(result);
                });
            };
            vm.saveAbout = function(){
                vm.dataSource.saveAbout({
                    description: vm.about().description(),
                    aboutSite: vm.about().aboutSite(),
                    otherInterests: vm.about().otherInterests()
                    }, function saveAboutCallback(result){});
            }

            // Add new to list events
            vm.addNewBook = function(){
                addBookToList();
            }
            vm.addNewLink = function(){
                addLinkToList();
            }

            retrieveData();
        }

        return new vm();
    })(dataSource);

    window.viewmodel = vm;

})(this, this.jQuery, new dataSource());

