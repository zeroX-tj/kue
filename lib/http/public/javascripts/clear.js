o(function () {
  var clear = o('#clear');
  clear.click(function () {
    var conf = confirm('Are you sure you want to clear ' + active)
    if (conf == true) {
      var url = './clear/' + active
      request('DELETE', url, function(){refreshJobs(active, function(){})})
    }
  })
})