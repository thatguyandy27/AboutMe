function dataSource(){
    
    function getLeftNavItems(){
        return [new leftNavItem('About Me', 'objective'),
            new leftNavItem('Engineering Skillz', 'engineering'),
            new leftNavItem('Leadership Skillz', 'leadership'),
            new leftNavItem('Work Experience', 'workexperience'),
            new leftNavItem("Books I've read", 'books'), 
 //           new leftNavItem('Personal Projects', 'personal'),
 //           new leftNavItem('Interests and Hobbies', 'interests'),
            new leftNavItem('Additional Resources', 'moreinfo'),
        ];
    }
    
    
    function getItemById(navId){
        
        var returnValue = {id:navId};
        
        switch(navId){
            case 'moreinfo':
                returnValue.links = [{'label':'Linked-In', 'link': 'http://www.linkedin.com/pub/andy-meyers/2/161/890'},
                    {'label': 'Blog', 'link':'http://andyjmeyers.blogspot.com/'},
                    {'label': 'GitHub', 'link':'https://github.com/thatguyandy27'},
                    {'label': 'JSFiddle', 'link':'http://jsfiddle.net/user/andyjmeyers/fiddles/'}
                ];
            break;
            case 'books':
                returnValue.books = [{'title': "First, Break All the Rules: What the world's Greatest Managers Do Differently"},
                    {'title': "Drive: The Surprising Truth About What Motivates Us"},
                    {'title': "The Trusted Advisor"},
                    {'title': "How to Win Friends and Influence People"},
                    {'title': "Head First Design Patterns"}];
                break;
            
            case 'engineering':
                returnValue.langauges = ['c#', 'VB', 'JavaScript', 'Python', 'HTML 5', 'SQL'];
                returnValue.applications = ['N-Tier Web Sites', 'Console Applications', 'Migration Applications', '3rd Party Intgrations',
                    'Web-API only applications', 'Desktop Applications', 'Mobile Applications'];
                returnValue.tools = ['Visual Studio', 'Eclipse', 'GIT', 'SVN', 'Fiddler', 'Web debugging'];
                returnValue.netFrameworks = ['Windows-8 (Metro) Apps', 'MVC', 'WPF', 'XAML', 'WCF', 'SQL Management Studio'];
                returnValue.javascriptFrameworks = ['jQuery', 'Knockout', 'Backbone', 'Ember', 'mustache', 'underscore'];
                returnValue.softwareEngineering = [ 'Agile', 'SCRUM', 'Full-Stack development', 'Hands-On Requirements Gathering',
                    'Client Facing', 'Project Leadership'];
              //  returnValue.other = ['Strong knowledege web debugging tools', 'Fiddler',
              //      'IIS', 'NTLM, Claims, and other MS authentication'];
            break;
            case 'books':
            
            break;
        }
        
        return returnValue;
    }
    
    return {
        getLeftNavItems: getLeftNavItems,
        getItemById: getItemById
    }
}
