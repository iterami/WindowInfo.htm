(function(){
    var depth = parseInt(window.location.search.substring(1));

    if(isNaN(depth)
      || depth < 0){
        depth = 1;
    }

    var display = [];

    Object.getOwnPropertyNames(window).forEach(
      function(property){
          display.push(
            '<tr><td>'
            + property
            + '<td>'
            + window[property]
          );
          fetchInfo(
            window[property],
            property,
            0
          );
      }
    );

    function fetchInfo(object, name, depthcounter){
        if(depthcounter < depth
          && object != window){
            for(property in object){
                if(object.hasOwnProperty(property)){
                    display.push(
                      '<tr><td>'
                      + name
                      + '.'
                      + property
                      + '<td>'
                      + object[property]
                    );
                    fetchInfo(
                      object[property],
                      name + '.' + property,
                      depthcounter + 1
                    );
                }
            }
        }
    }

    document.getElementById(0).innerHTML =
      '<tr class=top><td>window.<td>WindowInfo (Depth: '
      + depth
      + ')'
      + display.sort().join('');
}());
