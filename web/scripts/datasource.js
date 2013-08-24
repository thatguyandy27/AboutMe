function dataSource(){

    function getLeftNavItems(){
        return [new leftNavItem('About Me', 'objective'),
            new leftNavItem('Engineering Skillz', 'engineering'),
            new leftNavItem('Leadership Skillz', 'leadership'),
 //           new leftNavItem('Work Experience', 'workexperience'),
            new leftNavItem("Books I've read", 'books'),
 //           new leftNavItem('Personal Projects', 'personal'),
 //           new leftNavItem('Interests and Hobbies', 'interests'),
            new leftNavItem('Additional Resources', 'moreinfo'),
        ];
    }

    function getItemById(navId){

        var returnValue = {id:navId, isLoading: true};

        switch(navId){
            case 'moreinfo':
                returnValue.links = [{'label':'Linked-In', 'link': 'http://www.linkedin.com/pub/andy-meyers/2/161/890'},
                    {'label': 'Blog', 'link':'http://andyjmeyers.blogspot.com/'},
                    {'label': 'GitHub', 'link':'https://github.com/thatguyandy27'},
                    {'label': 'JSFiddle', 'link':'http://jsfiddle.net/user/andyjmeyers/fiddles/'},
                    {'label': 'StackExchange', 'link': 'http://stackexchange.com/users/200646/andy-meyers'}
					//,{'label': 'AfterHoursProgramming', 'link': 'http://www.afterhoursprogramming.com/user/profile/551/'}
                ];
	            break;
            case 'leadership':
            	returnValue.peopleManagement = ['Manages Direct Reports', 'Performs weekly one on ones',
            		'Helps defines goals for direct reports', 'Performs bi-yearly reviews',
            		'Approves time/PTO/etc.', 'Provides feedback for employees', 'Leads changes in company'];
            	returnValue.softwareManagement =['Onsite discovery and requirement gathering',
            		'Architects and designs implementations',
            		'Set up project, automated builds and other tasks.',
            		'Creates and maintains developer items',
            		'Manages engineering teams', 'Leads project stand-ups',
            		'Maintains project technical documentition',
            		'Manages deploys and post-support requests'  ];
                break;
            case 'books':
//                retrieveBooks(returnValue);
                break;

            case 'engineering':
                returnValue.langauges = ['c#', 'VB', 'JavaScript', 'Python',  'SQL', 'Java', 'C++'];
                returnValue.applications = ['N-Tier Web Sites', 'Console Applications', 'Migration Applications', '3rd Party Intgrations',
                    'Web-API only applications', 'Desktop Applications', 'Mobile Applications'];
                returnValue.tools = ['Visual Studio', 'Eclipse', 'GIT', 'SVN', 'Fiddler', 'Web debugging'];
                returnValue.netFrameworks = ['Windows-8 (Metro) Apps', 'MVC', 'WPF', 'XAML', 'WCF', 'SQL Management Studio'];
                returnValue.javascriptFrameworks = ['HTML5', 'jQuery', 'Knockout', 'Backbone', 'Ember', 'mustache', 'underscore'];
                returnValue.softwareEngineering = [ 'Agile', 'SCRUM', 'Full-Stack development', 'Hands-On Requirements Gathering',
                    'Client Facing', 'Project Leadership'];
              //  returnValue.other = ['Strong knowledege web debugging tools', 'Fiddler',
              //      'IIS', 'NTLM, Claims, and other MS authentication'];
            break;
            case 'workexperience':
                retunValue.projects = [{'name': 'McCarthy', 'description': 'Lead a team on designing, developing and deploying a CRM 2011 solution.  Included a data driven configurable data export that allowed for selection of specific records and images to then be imported directly into a Microsoft Word Mail Merge template or Adobe InDesign template to generate project and employee resumes.  Also included development and desgining of ASP portal solution for non-CRM users to update their data, and then a seperate portal for a CRM user to approve that data and sync it back into CRM.'},
                {'name': 'Permuta', 'description': 'Developer on a team that designed a windows 8 JS application for Permuta.  Included using a SQLite database for offline storage.  Used the Windows 8 JS tools, as well as Knockout.js'},
                {'name': 'SanDisk', 'description': ''}];

            break;
        }

        return returnValue;
    }

    function retrieveBooks(callBack){
        $.ajax({
          url: "/services/books",
          type: "get",
          dataType: "json"
        }).done(function retrieveBooksComplete(results){
            callBack(results);

            });
    }
    function saveBook(book, callBack){
        $.ajax({
          url: "/services/books",
          type: "POST",
          data: book,
          //dataType: "json"
        }).done(function saveBooksComplete(results){
            callBack(results);

            }).fail(function(status){
                alert('Error: ' + status.toString());
            });
    }

    return {
        getLeftNavItems: getLeftNavItems,
        getItemById: getItemById,
        retrieveBooks: retrieveBooks,
        saveBook: saveBook
    }
}
