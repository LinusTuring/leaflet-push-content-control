This is a mininmal starter project for controls to be displayed within a leaflet map.

### HowTo: Load CSS
```
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
<link rel="stylesheet" href="dist/leaflet-control-starter.css" />
```

### HowTo: Load Scripts

```
<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
<script src="dist/leaflet-control-starter.js"></script>
```

### HowTo: Add To Map

```
<script>

	var map = L.map('map').setView([51.505, -0.09], 13);

	// Add Leaflet-Control-Starter to map
	(new L.Control.LeafletControlStarter({
		position: 'bottomright',
		cssClassName: 'my-control-class'
	})).addTo(map);
  
</script>
```

### Demo
https://steven-coding.github.io/leaflet-control-starter/
