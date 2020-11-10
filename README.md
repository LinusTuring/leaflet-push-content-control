This is leaflet control to push content to be displayed within a leaflet map.

### HowTo: Load CSS
```
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
<link rel="stylesheet" href="dist/leaflet-push-content-control.css" />
```

### HowTo: Load Scripts

```
<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
<script src="dist/leaflet-push-content-control.js"></script>
```

### HowTo: Add To Map

```
<script>

    var map = L.map('map').setView([51.505, -0.09], 13);

    // Add leaflet-push-content to map
    var leafletPushContentControl = (new L.Control.LeafletPushContentControl({
        position: 'bottomright',
        cssClassName: 'my-control-class'
    }));

    leafletPushContentControl.addTo(map);
  
</script>
```

### HowTo: Update control content
```
leafletPushContentControl.updateControl('Hello World!');
```


### Demo
https://linusturing.github.io/leaflet-push-content-control/
