define(function () {
    return function (formats) {
        return {
            sync: ['three.min'],
            async: ['VRControls', 'VREffect', 'stats.min', 'OBJLoader', 'MTLLoader', 'PLYLoader', 'DRACOLoader', 'GLTFLoader', 'Detector', 'WebVR', 'virtex', 'MetadataComponent']
        };
    };
});
