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
		}
		
		return returnValue;
	}
	
	return {
		getLeftNavItems: getLeftNavItems,
		getItemById: getItemById
	}
}
