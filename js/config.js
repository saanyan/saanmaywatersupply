    var config = { //TODO: Change to your username, insert function on Carto, and Carto tablename
            cartoUsername: "anditabinas",
            cartoInsertFunction : "insert_crowd_mapping_data",
            cartoTablename: "watersupply_odetteph",
            mapcenter: [12.536, 122.551],
            drawOptions: {
                draw: {
                    polygon: false,
                    polyline: false,
                    rectangle: false,
                    circle: false,
                                circlemarker: false,
                    marker: true                                    
                },
                edit: false,
                remove: false,
                position: "topleft"
            },
            zoomControl: true
};   
