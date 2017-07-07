var SharedModule = {
	getTheData: function(callback){
		var data = {
			firstName: "Bob",
			lastName: "Bobert"
		}
		callback(data);
	}
}