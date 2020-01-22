$(document).ready(function() {
  $("#list").submit(function(event) {
    var listItems = ["item1", "item2", "item3", "item4", "item5"]
    
    listItems.map(function(listItem) {
      var displayedItems = $("input#" + listItem).val();
      $("." + listItem).text(displayedItems);
    });

    $(".result").show();

    // var listedItems = listItems.map(function(listItem){
    //    $("input#" + listItem).val();
    //    $("." + listItem).text(listedItems);
  
    // });
    

    event.preventDefault();
  });


});