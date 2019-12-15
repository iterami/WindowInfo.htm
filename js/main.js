(function(){
    'use strict';

    let depth = Number.parseInt(
      window.location.search.substring(1),
      10
    );

    if(Number.isNaN(depth)
      || depth < 0){
        depth = 0;
    }

    let display = [];

    Object.getOwnPropertyNames(window).forEach(
      function(property){
          display.push(
            '<tr><td class=right>'
            + property
            + '<td><textarea readonly>'
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

        for(let property in object){
            if(object.hasOwnProperty(property)){
                display.push(
                  '<tr><td class=right>'
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

    document.getElementById('depth').value = 'Depth: ' + depth;
    document.getElementById('depth').onclick = function(){
        let newdepth = window.prompt(
          'Enter new depth:',
          depth
        );

        if(newdepth === null
          || newdepth.length === 0
          || isNaN(newdepth)){
            return;
        }

        window.location.replace('?' + newdepth);
    };
    document.getElementById('result').innerHTML = display.sort().join('');
}());
