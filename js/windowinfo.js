window.onload = function(e){
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
        if(depthcounter < 3
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
      '<tr class=top><td>window.<td>WindowInfo (Depth: 4)'
      + display.sort().join('');
}
