var AlGraphEntryType;
(function (AlGraphEntryType) {
    AlGraphEntryType["NODE"] = "node";
    AlGraphEntryType["EDGE"] = "edge";
    AlGraphEntryType["ANGLE"] = "angle";
})(AlGraphEntryType || (AlGraphEntryType = {}));

var ControlsType;
(function (ControlsType) {
    ControlsType["ORBIT"] = "orbit";
    ControlsType["TRACKBALL"] = "trackball";
})(ControlsType || (ControlsType = {}));

var DisplayMode;
(function (DisplayMode) {
    DisplayMode["SLICES"] = "slices";
    DisplayMode["VOLUME"] = "volume";
    DisplayMode["MESH"] = "mesh";
})(DisplayMode || (DisplayMode = {}));

var Material;
(function (Material) {
    Material["DEFAULT"] = "default";
    Material["CLAY"] = "clay";
    Material["XRAY"] = "xray";
    Material["NORMALS"] = "normals";
    Material["WIREFRAME"] = "wireframe";
})(Material || (Material = {}));

var MeshFileType;
(function (MeshFileType) {
    MeshFileType["GLTF"] = "gltf";
    MeshFileType["GLB"] = "glb";
})(MeshFileType || (MeshFileType = {}));

var Orientation;
(function (Orientation) {
    Orientation["CORONAL"] = "coronal";
    Orientation["SAGGITAL"] = "saggital";
    Orientation["AXIAL"] = "axial";
})(Orientation || (Orientation = {}));

var RayType;
(function (RayType) {
    RayType["LOCK"] = "LOCK";
    RayType["MESH"] = "MESH";
})(RayType || (RayType = {}));

var Units;
(function (Units) {
    Units["MILLIMETERS"] = "mm";
    Units["METERS"] = "m";
})(Units || (Units = {}));

var VolumeFileType;
(function (VolumeFileType) {
    VolumeFileType["DCM"] = "dcm";
    VolumeFileType["DICOM"] = "dicom";
})(VolumeFileType || (VolumeFileType = {}));

export { AlGraphEntryType as A, ControlsType as C, DisplayMode as D, Material as M, Orientation as O, Units as U, VolumeFileType as V, MeshFileType as a };
