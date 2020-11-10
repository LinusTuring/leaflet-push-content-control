L.Control.LeafletPushContentControl = L.Control.extend({

    // css-class that will (always) be set on the control container
    baseCssClass: 'leaflet-push-content-control',

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

        // clicks on the container wont trigger events on the underlying map
        L.DomEvent.disableClickPropagation(container);

        // remember control container (=> content needs to be updated)
        this.container = container;

        return container;
    },

    // control is removed from the map
    onRemove: function (map) {},

    // update control content
    updateControl(text) {
        this.container.innerText = text;
    }
});
