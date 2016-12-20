(function(){
    'use strict';

    var depth = parseInt(
      window.location.search.substring(1),
      10
    );

    if(isNaN(depth)
      || depth < 0){
        depth = 1;
        window.location.replace('?1');
    }

    var display = [];

    Object.getOwnPropertyNames(window).forEach(
      function(property){
          display.push(
            '<tr><td class=right>'
            + property
            + '<td><textarea>'
            + window[property]
            + '</textarea>'
          );
          fetchInfo(
            window[property],
            property,
            0
          );
      }
    );

    function fetchInfo(object, name, depthcounter){
        if(depthcounter >= depth
          || object === window){
            return;
        }

        for(var property in object){
            if(object.hasOwnProperty(property)){
                display.push(
                  '<tr><td>'
                  + name
                  + '.'
                  + property
                  + '<td><textarea>'
                  + object[property]
                  + '</textarea>'
                );
                fetchInfo(
                  object[property],
                  name + '.' + property,
                  depthcounter + 1
                );
            }
        }
    }

    document.getElementById('windowinfo').innerHTML =
      '<tr class=header><td>window.<td>Depth: '
      + depth
      + display.sort().join('');
}());
