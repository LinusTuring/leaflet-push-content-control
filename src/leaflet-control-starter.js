L.Control.LeafletControlStarter = L.Control.extend({

    // css-class that will (always) be set on the control container
    baseCssClass: 'leaflet-control-starter',

    // leaflet map (available after onAdd was called)
    map: undefined,

    // control container
    container: undefined,

    options: {

        // control position (default: bottom-right)
        position: 'bottomright',

        // css-class that will be set on the control container (optional)
        cssClassName: undefined
    },

    // control is added to the map
    onAdd: function (map) {

        // remember map
        this.map = map;

        // string that will be added as 'class' (-> css-classes) to the result container
        let fullCssClassStringOnContainer = this.baseCssClass;

        // cssClassName was set within the options
        if(this.options.cssClassName) {
            // add cssClass to full class string
            fullCssClassStringOnContainer += ' '+this.options.cssClassName;
        }
        // create control container and add css-classes
        let container = L.DomUtil.create('div', fullCssClassStringOnContainer);

        // initialize event handlers
        this.addEventHandlersToMap(map);

        // clicks on the container wont trigger events on the underlying map
        L.DomEvent.disableClickPropagation(container);

        // remember control container (=> content needs to be updated)
        this.container = container;

        this.updateControl();

        return container;
    },

    // control is removed from the map
    onRemove: function (map) {
        // remove event handlers
        this.removeEventHandlersFromMap(map);
    },

    // map finished zooming in / out
    onMapZoomEnd: function () {

        // update control content
        this.updateControl();
    },

    // map finished moving
    onMapMoveEnd: function () {

        // update control content
        this.updateControl();
    },

    // add event handlers
    addEventHandlersToMap(map) {
        map.on('moveend', this.onMapMoveEnd, this);
        map.on('zoomend', this.onMapZoomEnd, this);
    },

    // remove event handlers
    removeEventHandlersFromMap(map) {
        map.off('moveend', this.onMapMoveEnd, this);
        map.off('zoomend', this.onMapZoomEnd, this);
    },

    // update control content
    updateControl() {
        this.container.innerText = this.map.getBounds().getCenter()+'(@Z'+this.map.getZoom()+')';
    }
});
