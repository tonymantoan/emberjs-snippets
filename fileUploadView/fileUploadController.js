/**
 * If you want multiple files you could have an array of objects.  Each object would have the fileId and the fileData.
 * If the users presses a button indicating they want to upload another file, this action will be triggered, and new input will be inserted in the page
 */
App.FileUploadController = Ember.ObjectController.extend({
  files: [],
  actions: {
    addFile: function(){
      // add a new object with a fileId property, and a blank fileData property
      this.get('files').pushObject({fileData: '', fileId: this.files.length});
    }
  }
});

