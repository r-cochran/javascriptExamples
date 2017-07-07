var PageTwo = {
	init: function(){
		PageTwo.actions.init();
	},
	view: {
		renderToThePage: function(data){
			$("#doIt").after("<div>Our callback was called! Look how I don't even care about the data that was passed back!</div>");
		}
	},
	actions: {
		init: function(){
			$("#doIt").click(function(){
				SharedModule.getTheData(PageTwo.view.renderToThePage);
			});
		}
	}
};