var World = {

    init: function initFn() {
        this.createModelAtLocation();
    },

    createModelAtLocation: function createModelAtLocationFn() {

        /*
            First a location where the model should be displayed will be defined. This location will be relativ to
            the user.
        */
        //var geoLoc = new AR.GeoLocation(48.192862,11.5857864, 505.);
        //var geoLoc = new AR.GeoLocation(48.192862,11.5857864, 505.);
        var location = new AR.RelativeLocation(null, 5, 5, 2);
        //var location = new AR.RelativeLocation(geoLoc, 1, 2, 1)

        /* Next the model object is loaded. */
        /* Next the model object is loaded. */
        var modelEarth = new AR.Model("assets/earth.wt3", {
            onError: World.onError,
            scale: {
                x: 1,
                y: 1,
                z: 1
            },
            rotate: {
                x: 180,
                y: 180
            }
        });
//create a new Model and pass some setup parameters
//var modelEarth = new AR.Model("models/TV.wt3", {
//  // scales it to half of the original size
//  scale: {
//    x: 0.5,
//    y: 0.5,
//    z: 0.5
//  },
//  // rotates it 90 degrees around the z-axis and 180 degrees around the x-axis
//  rotate: {
//    x: 180.0,
//    y: 0.0,
//    z: 90.0
//  },
//  // moves the 0bject 5 SDUs along the x- and the y-axis
//  translate: {
//    x: 5,
//    y: 5,
//    z: 0
//  },
//  onClick : function() {
//    //something happens
//  }
//});



        var indicatorImage = new AR.ImageResource("assets/indi.png", {
            onError: World.onError
        });

        var indicatorDrawable = new AR.ImageDrawable(indicatorImage, 0.1, {
            verticalAnchor: AR.CONST.VERTICAL_ANCHOR.TOP
        });

        /* Putting it all together the location and 3D model is added to an AR.GeoObject. */
        this.geoObject = new AR.GeoObject(location, {
            drawables: {
                cam: [modelEarth],
                indicator: [indicatorDrawable]
            }
        });
    },

    onError: function onErrorFn(error) {
        alert(error);
    }
};

World.init();