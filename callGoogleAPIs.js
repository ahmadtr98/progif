var request = gapi.client.drive.about.get({'fields': 'user'});

// Execute the API request.
request.execute(function(response) {
  console.log(response);
});
