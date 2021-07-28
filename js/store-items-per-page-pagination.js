 $(function() {
    $("div.holder").jPages({
      containerID : "itemContainer",
      perPage : 4
    });

    $("select").change(function(){
      var newPerPage = parseInt( $(this).val() );
      $("div.holder").jPages("destroy").jPages({
        containerID   : "itemContainer",
        perPage       : newPerPage
      });
    });
  });