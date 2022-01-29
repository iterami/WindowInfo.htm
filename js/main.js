(function(){
    'use strict';

    let depth = Number.parseInt(
      globalThis.location.search.substring(1),
      10
    );

    if(globalThis.isNaN(depth)
      || depth < 0){
        depth = 0;
    }

    const display = [];

    Object.getOwnPropertyNames(globalThis).forEach(
      function(property){
          display.push(
            '<tr><td class=right>' + property
              + '<td><textarea readonly>' + globalThis[property] + '</textarea>'
          );
          fetchInfo(
            globalThis[property],
            property,
            0
          );
      }
    );

    function fetchInfo(object, name, depthcounter){
        if(depthcounter >= depth
          || object === globalThis){
            return;
        }

        for(const property in object){
            if(object.hasOwnProperty(property)){
                display.push(
                  '<tr><td class=right>' + name + '.' + property
                    + '<td><textarea readonly>' + object[property] + '</textarea>'
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
        const newdepth = globalThis.prompt(
          'Enter new depth:',
          depth
        );

        if(newdepth === null
          || newdepth.length === 0
          || isNaN(newdepth)){
            return;
        }

        globalThis.location.replace('?' + newdepth);
    };
    document.getElementById('result').innerHTML = display.sort().join('');
}());
