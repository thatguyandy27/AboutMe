function dataSource(){
    
    function getLeftNavItems(){
        return [new leftNavItem('About Me', 'objective'),
            new leftNavItem('Engineering Skillz', 'engineering'),
            new leftNavItem('Leadership Skillz', 'leadership'),
            new leftNavItem('Work Experience', 'workexperience'),
            new leftNavItem('Personal Projects', 'personal'),
            new leftNavItem('Interests and Hobbies', 'interests'),
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
            
            case 'engineering':
                returnValue.langauges = ['c#', 'VB', 'JavaScript', 'Python', 'HTML 5'];
                returnValue.applications = ['N-Tier Web Sites', 'Console Applications', 'Migration Applications', '3rd Party Intgrations',
                    'Web-API only applications', 'Desktop Applications', 'Mobile Applications'];
                returnValue.netFrameworks = ['Windows-8 (Metro) Apps', 'MVC', 'WPF', 'XAML', 'WCF'];
                returnValue.javascriptFrameworks = ['jQuery', 'Knockout', 'Backbone', 'Ember', 'mustache', 'underscore'];
                returnValue.softwareEngineering = [ 'Agile', 'SCRUM', 'Full-Stack development', 'Hands-On Requirements Gathering',
                    'Client Facing', 'Project Leadership'];
                returnValue.other = ['Strong knowledege web debugging tools', 'Fiddler',
                    'IIS', 'NTLM, Claims, and other MS authentication'];
        }
        
        return returnValue;
    }
    
    return {
        getLeftNavItems: getLeftNavItems,
        getItemById: getItemById
    }
}
