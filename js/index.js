var notification_count=0;

$(document).on('pageinit', function() {

	$('#messageButton').on('click', function() {
		createMessage();
	});
	
	$('#dialogButton').on('click', function() {
		createDialog();
	});


	$('#notificationButton').on('click', function() {
		createNotification();
	});


});



function createMessage(){		
	//phoneGap and jQueryMobile do not support toast messages directly
    //so we can add this using toast.js
    new Toast({content: 'An example message.', duration: 1000}); 	
}
        	

function createDialog() {

	//phonegap supports native dialog boxes.
	//here's a simple example
      
	navigator.notification.confirm(
    	'Are you hungry?',  // message
        dialogDismissed,         // callback
        'Dialog!',            // title
        ['Yes', 'No']                  // buttons
    );

}
        	
        	
        	
function dialogDismissed(buttonIndex) {
	
	if(buttonIndex==1) {
        new Toast({content: "Eat some toast", duration: 3000});
        createNotification()              
    }
    
   	else if(buttonIndex==2) {
        new Toast({content: 'Carry on working', duration: 3000});
createNotification2()
}
}

   
   
function createNotification() {
        		
	//
    //generate a time to post notification
    //
    var currentTime = new Date().getTime(); //current time
    var notificationTime = new Date(currentTime + 1000); //delayed time  - add 1 second
    			
    //
    //setup notification
    //
    
    cordova.plugins.notification.local.schedule({ 
    	id: 		1,
        title: 		"Hey you",
        message: 	"After you have eaten, get back to work",
        date: 		notificationTime, 
        badge: 		notification_count++
        
   	});
}
function createNotification2() {
    cordova.plugins.notification.local.schedule({ 
    	id: 		2,
        title: 		"Hey You",
        message: 	"Not Hungry",
        date: 		notificationTime, 
        badge: 		notification_count++
        });
}