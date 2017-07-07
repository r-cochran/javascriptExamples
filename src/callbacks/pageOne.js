var PageOne = {
	init: function(){
		PageOne.actions.init();
	},
	view: {
		alertTheInformation: function(data){
			$("#doTheOtherThing").val(data.lastName + ", " + data.firstName + ". Be amazed!");
		}
	},
	actions: {
		init: function(){
			$("#doTheOtherThing").on("mouseover", function(){
				SharedModule.getTheData(PageOne.view.alertTheInformation);
			});
		}
	}
};