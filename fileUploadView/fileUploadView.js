/**
* This creates a view for a file upload input.  The data-elmId can be used if you want to have multiple files, and need a way to reference each one.
*/
App.FileUploadView = Ember.TextField.extend({
  type: 'file',
  attributeBindings: ['data-elmId'],
  vController: '',
  change: function(evt){
    var input = evt.target;
    if( input.files && input.files[0]){
      var reader = new FileReader();
      var elmId = $(evt.target).attr("data-elmId");
      var view = this;
      // callback for when the readAs() call is complete:
      reader.onload = function(e){
        var data = e.target.result;
        // the controller will be set in template
        view.vController.send('fileLoaded', data, elmId);
      };
      // read the file as a base64 enconded string
      // see https://developer.mozilla.org/en-US/docs/Web/API/FileReader for other options
      reader.readAsDataURL(input.files[0]);
    }
  }
});
