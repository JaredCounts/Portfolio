/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/*! exports provided: ACESFilmicToneMapping, AddEquation, AddOperation, AdditiveAnimationBlendMode, AdditiveBlending, AlphaFormat, AlwaysDepth, AlwaysStencilFunc, AmbientLight, AmbientLightProbe, AnimationClip, AnimationLoader, AnimationMixer, AnimationObjectGroup, AnimationUtils, ArcCurve, ArrayCamera, ArrowHelper, Audio, AudioAnalyser, AudioContext, AudioListener, AudioLoader, AxesHelper, AxisHelper, BackSide, BasicDepthPacking, BasicShadowMap, BinaryTextureLoader, Bone, BooleanKeyframeTrack, BoundingBoxHelper, Box2, Box3, Box3Helper, BoxBufferGeometry, BoxGeometry, BoxHelper, BufferAttribute, BufferGeometry, BufferGeometryLoader, ByteType, Cache, Camera, CameraHelper, CanvasRenderer, CanvasTexture, CatmullRomCurve3, CineonToneMapping, CircleBufferGeometry, CircleGeometry, ClampToEdgeWrapping, Clock, ClosedSplineCurve3, Color, ColorKeyframeTrack, CompressedTexture, CompressedTextureLoader, ConeBufferGeometry, ConeGeometry, CubeCamera, CubeGeometry, CubeReflectionMapping, CubeRefractionMapping, CubeTexture, CubeTextureLoader, CubeUVReflectionMapping, CubeUVRefractionMapping, CubicBezierCurve, CubicBezierCurve3, CubicInterpolant, CullFaceBack, CullFaceFront, CullFaceFrontBack, CullFaceNone, Curve, CurvePath, CustomBlending, CylinderBufferGeometry, CylinderGeometry, Cylindrical, DataTexture, DataTexture2DArray, DataTexture3D, DataTextureLoader, DecrementStencilOp, DecrementWrapStencilOp, DefaultLoadingManager, DepthFormat, DepthStencilFormat, DepthTexture, DirectionalLight, DirectionalLightHelper, DirectionalLightShadow, DiscreteInterpolant, DodecahedronBufferGeometry, DodecahedronGeometry, DoubleSide, DstAlphaFactor, DstColorFactor, DynamicBufferAttribute, DynamicCopyUsage, DynamicDrawUsage, DynamicReadUsage, EdgesGeometry, EdgesHelper, EllipseCurve, EqualDepth, EqualStencilFunc, EquirectangularReflectionMapping, EquirectangularRefractionMapping, Euler, EventDispatcher, ExtrudeBufferGeometry, ExtrudeGeometry, Face3, Face4, FaceColors, FileLoader, FlatShading, Float32Attribute, Float32BufferAttribute, Float64Attribute, Float64BufferAttribute, FloatType, Fog, FogExp2, Font, FontLoader, FrontFaceDirectionCCW, FrontFaceDirectionCW, FrontSide, Frustum, GammaEncoding, Geometry, GeometryUtils, GreaterDepth, GreaterEqualDepth, GreaterEqualStencilFunc, GreaterStencilFunc, GridHelper, Group, HalfFloatType, HemisphereLight, HemisphereLightHelper, HemisphereLightProbe, IcosahedronBufferGeometry, IcosahedronGeometry, ImageBitmapLoader, ImageLoader, ImageUtils, ImmediateRenderObject, IncrementStencilOp, IncrementWrapStencilOp, InstancedBufferAttribute, InstancedBufferGeometry, InstancedInterleavedBuffer, InstancedMesh, Int16Attribute, Int16BufferAttribute, Int32Attribute, Int32BufferAttribute, Int8Attribute, Int8BufferAttribute, IntType, InterleavedBuffer, InterleavedBufferAttribute, Interpolant, InterpolateDiscrete, InterpolateLinear, InterpolateSmooth, InvertStencilOp, JSONLoader, KeepStencilOp, KeyframeTrack, LOD, LatheBufferGeometry, LatheGeometry, Layers, LensFlare, LessDepth, LessEqualDepth, LessEqualStencilFunc, LessStencilFunc, Light, LightProbe, LightShadow, Line, Line3, LineBasicMaterial, LineCurve, LineCurve3, LineDashedMaterial, LineLoop, LinePieces, LineSegments, LineStrip, LinearEncoding, LinearFilter, LinearInterpolant, LinearMipMapLinearFilter, LinearMipMapNearestFilter, LinearMipmapLinearFilter, LinearMipmapNearestFilter, LinearToneMapping, Loader, LoaderUtils, LoadingManager, LogLuvEncoding, LoopOnce, LoopPingPong, LoopRepeat, LuminanceAlphaFormat, LuminanceFormat, MOUSE, Material, MaterialLoader, Math, MathUtils, Matrix3, Matrix4, MaxEquation, Mesh, MeshBasicMaterial, MeshDepthMaterial, MeshDistanceMaterial, MeshFaceMaterial, MeshLambertMaterial, MeshMatcapMaterial, MeshNormalMaterial, MeshPhongMaterial, MeshPhysicalMaterial, MeshStandardMaterial, MeshToonMaterial, MinEquation, MirroredRepeatWrapping, MixOperation, MultiMaterial, MultiplyBlending, MultiplyOperation, NearestFilter, NearestMipMapLinearFilter, NearestMipMapNearestFilter, NearestMipmapLinearFilter, NearestMipmapNearestFilter, NeverDepth, NeverStencilFunc, NoBlending, NoColors, NoToneMapping, NormalAnimationBlendMode, NormalBlending, NotEqualDepth, NotEqualStencilFunc, NumberKeyframeTrack, Object3D, ObjectLoader, ObjectSpaceNormalMap, OctahedronBufferGeometry, OctahedronGeometry, OneFactor, OneMinusDstAlphaFactor, OneMinusDstColorFactor, OneMinusSrcAlphaFactor, OneMinusSrcColorFactor, OrthographicCamera, PCFShadowMap, PCFSoftShadowMap, PMREMGenerator, ParametricBufferGeometry, ParametricGeometry, Particle, ParticleBasicMaterial, ParticleSystem, ParticleSystemMaterial, Path, PerspectiveCamera, Plane, PlaneBufferGeometry, PlaneGeometry, PlaneHelper, PointCloud, PointCloudMaterial, PointLight, PointLightHelper, Points, PointsMaterial, PolarGridHelper, PolyhedronBufferGeometry, PolyhedronGeometry, PositionalAudio, PropertyBinding, PropertyMixer, QuadraticBezierCurve, QuadraticBezierCurve3, Quaternion, QuaternionKeyframeTrack, QuaternionLinearInterpolant, REVISION, RGBADepthPacking, RGBAFormat, RGBAIntegerFormat, RGBA_ASTC_10x10_Format, RGBA_ASTC_10x5_Format, RGBA_ASTC_10x6_Format, RGBA_ASTC_10x8_Format, RGBA_ASTC_12x10_Format, RGBA_ASTC_12x12_Format, RGBA_ASTC_4x4_Format, RGBA_ASTC_5x4_Format, RGBA_ASTC_5x5_Format, RGBA_ASTC_6x5_Format, RGBA_ASTC_6x6_Format, RGBA_ASTC_8x5_Format, RGBA_ASTC_8x6_Format, RGBA_ASTC_8x8_Format, RGBA_BPTC_Format, RGBA_ETC2_EAC_Format, RGBA_PVRTC_2BPPV1_Format, RGBA_PVRTC_4BPPV1_Format, RGBA_S3TC_DXT1_Format, RGBA_S3TC_DXT3_Format, RGBA_S3TC_DXT5_Format, RGBDEncoding, RGBEEncoding, RGBEFormat, RGBFormat, RGBIntegerFormat, RGBM16Encoding, RGBM7Encoding, RGB_ETC1_Format, RGB_ETC2_Format, RGB_PVRTC_2BPPV1_Format, RGB_PVRTC_4BPPV1_Format, RGB_S3TC_DXT1_Format, RGFormat, RGIntegerFormat, RawShaderMaterial, Ray, Raycaster, RectAreaLight, RedFormat, RedIntegerFormat, ReinhardToneMapping, RepeatWrapping, ReplaceStencilOp, ReverseSubtractEquation, RingBufferGeometry, RingGeometry, SRGB8_ALPHA8_ASTC_10x10_Format, SRGB8_ALPHA8_ASTC_10x5_Format, SRGB8_ALPHA8_ASTC_10x6_Format, SRGB8_ALPHA8_ASTC_10x8_Format, SRGB8_ALPHA8_ASTC_12x10_Format, SRGB8_ALPHA8_ASTC_12x12_Format, SRGB8_ALPHA8_ASTC_4x4_Format, SRGB8_ALPHA8_ASTC_5x4_Format, SRGB8_ALPHA8_ASTC_5x5_Format, SRGB8_ALPHA8_ASTC_6x5_Format, SRGB8_ALPHA8_ASTC_6x6_Format, SRGB8_ALPHA8_ASTC_8x5_Format, SRGB8_ALPHA8_ASTC_8x6_Format, SRGB8_ALPHA8_ASTC_8x8_Format, Scene, SceneUtils, ShaderChunk, ShaderLib, ShaderMaterial, ShadowMaterial, Shape, ShapeBufferGeometry, ShapeGeometry, ShapePath, ShapeUtils, ShortType, Skeleton, SkeletonHelper, SkinnedMesh, SmoothShading, Sphere, SphereBufferGeometry, SphereGeometry, Spherical, SphericalHarmonics3, SphericalReflectionMapping, Spline, SplineCurve, SplineCurve3, SpotLight, SpotLightHelper, SpotLightShadow, Sprite, SpriteMaterial, SrcAlphaFactor, SrcAlphaSaturateFactor, SrcColorFactor, StaticCopyUsage, StaticDrawUsage, StaticReadUsage, StereoCamera, StreamCopyUsage, StreamDrawUsage, StreamReadUsage, StringKeyframeTrack, SubtractEquation, SubtractiveBlending, TOUCH, TangentSpaceNormalMap, TetrahedronBufferGeometry, TetrahedronGeometry, TextBufferGeometry, TextGeometry, Texture, TextureLoader, TorusBufferGeometry, TorusGeometry, TorusKnotBufferGeometry, TorusKnotGeometry, Triangle, TriangleFanDrawMode, TriangleStripDrawMode, TrianglesDrawMode, TubeBufferGeometry, TubeGeometry, UVMapping, Uint16Attribute, Uint16BufferAttribute, Uint32Attribute, Uint32BufferAttribute, Uint8Attribute, Uint8BufferAttribute, Uint8ClampedAttribute, Uint8ClampedBufferAttribute, Uncharted2ToneMapping, Uniform, UniformsLib, UniformsUtils, UnsignedByteType, UnsignedInt248Type, UnsignedIntType, UnsignedShort4444Type, UnsignedShort5551Type, UnsignedShort565Type, UnsignedShortType, VSMShadowMap, Vector2, Vector3, Vector4, VectorKeyframeTrack, Vertex, VertexColors, VideoTexture, WebGLCubeRenderTarget, WebGLMultisampleRenderTarget, WebGLRenderTarget, WebGLRenderTargetCube, WebGLRenderer, WebGLUtils, WireframeGeometry, WireframeHelper, WrapAroundEnding, XHRLoader, ZeroCurvatureEnding, ZeroFactor, ZeroSlopeEnding, ZeroStencilOp, sRGBEncoding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n// add styles\r\n// import './style.css';\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst waveSolver_1 = __webpack_require__(/*! ./waveSolver */ \"./src/waveSolver.ts\");\r\nconst view_1 = __webpack_require__(/*! ./view */ \"./src/view.ts\");\r\nconst controller_1 = __webpack_require__(/*! ./controller */ \"./src/controller.ts\");\r\nconst timeManager_1 = __webpack_require__(/*! ./timeManager */ \"./src/timeManager.ts\");\r\nconst cellWidth = 3;\r\n// To keep each cell roughly uniform, determine the number of cells can fit \r\n// in the window along their respective axes.\r\nlet cellCountX = Math.floor(window.innerWidth / cellWidth);\r\nlet cellCountY = Math.floor(window.innerHeight / cellWidth);\r\nlet waveSolver = new waveSolver_1.WaveSolver(cellCountX, cellCountY);\r\n// Defer setting up the view. We do this because we expect a dom element with \r\n// the \"app\" ID, but it won't exist since js in the header gets loaded before\r\n// the dom elements.\r\nlet view;\r\nfunction ResetView() {\r\n    let appElement = document.getElementById('app');\r\n    // When updating the view, we need to be sure to replace the old dom element \r\n    // instead of just adding a new one.\r\n    let oldDomElement = view == null ? null : view.GetDomElement();\r\n    view = new view_1.View(appElement, waveSolver);\r\n    if (oldDomElement == null) {\r\n        appElement.appendChild(view.GetDomElement());\r\n    }\r\n    else {\r\n        appElement.replaceChild(view.GetDomElement(), oldDomElement);\r\n    }\r\n}\r\n// Defer setting up the controller for the same reason as the view.\r\nlet controller;\r\nfunction ResetController() {\r\n    let appElement = document.getElementById('app');\r\n    controller = new controller_1.Controller(window, appElement, waveSolver);\r\n}\r\nconst timestepManager = new timeManager_1.TimeManager(\r\n/* timestep_ms */ 10.0, \r\n/* timestepLimitPerUpdate */ 10);\r\n/**\r\n * The main update loop of the app.\r\n */\r\nfunction Animate() {\r\n    requestAnimationFrame(Animate);\r\n    timestepManager.Update(waveSolver.Solve.bind(waveSolver));\r\n    if (view != null) {\r\n        view.Render();\r\n    }\r\n}\r\n// When the dom content loads, instantiate the view and controller\r\nfunction OnDOMContentLoaded(event) {\r\n    ResetView();\r\n    ResetController();\r\n}\r\ndocument.addEventListener('DOMContentLoaded', OnDOMContentLoaded);\r\n// When window resizes, reset everything.\r\nfunction OnWindowResize() {\r\n    cellCountX = Math.floor(window.innerWidth / cellWidth);\r\n    cellCountY = Math.floor(window.innerHeight / cellWidth);\r\n    waveSolver = new waveSolver_1.WaveSolver(cellCountX, cellCountY);\r\n    ResetView();\r\n    ResetController();\r\n}\r\nwindow.addEventListener('resize', OnWindowResize);\r\nAnimate();\r\n\n\n//# sourceURL=webpack:///./src/app.ts?");

/***/ }),

/***/ "./src/bresenham.ts":
/*!**************************!*\
  !*** ./src/bresenham.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Bresenham = void 0;\r\n/**\r\n * Run bresenham's line algorithm from the start position to the end position,\r\n * and perform the given callback function on each integer point between those\r\n * two positions.\r\n * Based on http://en.wikipedia.org/wiki/Bresenham's_line_algorithm\r\n */\r\nfunction Bresenham(startX, startY, endX, endY, callback) {\r\n    let dx = Math.abs(endX - startX);\r\n    let dy = Math.abs(endY - startY);\r\n    let sx = startX < endX ? 1 : -1;\r\n    let sy = startY < endY ? 1 : -1;\r\n    let err = dx - dy;\r\n    let x = startX;\r\n    let y = startY;\r\n    while (x != endX || y != endY) {\r\n        callback(x, y);\r\n        let e2 = 2 * err;\r\n        if (e2 > -dy) {\r\n            err -= dy;\r\n            x = x + sx;\r\n        }\r\n        if (e2 < dx) {\r\n            err = err + dx;\r\n            y = y + sy;\r\n        }\r\n    }\r\n}\r\nexports.Bresenham = Bresenham;\r\n\n\n//# sourceURL=webpack:///./src/bresenham.ts?");

/***/ }),

/***/ "./src/controller.ts":
/*!***************************!*\
  !*** ./src/controller.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Controller = void 0;\r\nconst THREE = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\r\nconst touchPos_1 = __webpack_require__(/*! ./touchPos */ \"./src/touchPos.ts\");\r\nconst bresenham_1 = __webpack_require__(/*! ./bresenham */ \"./src/bresenham.ts\");\r\n/**\r\n * Handle user interactions.\r\n */\r\nclass Controller {\r\n    constructor(window, parentElement, waveSolver) {\r\n        this._waveSolver = waveSolver;\r\n        this._identifierToTouchPos = new Map();\r\n        this._mousePos = new THREE.Vector2();\r\n        this._prevMousePos = new THREE.Vector2();\r\n        this._mouseDown = false;\r\n        this._parentElement = parentElement;\r\n        this._RegisterForEvents(window);\r\n    }\r\n    HandleTouchStart(event) {\r\n        // Find new touches and add a little force at that spot.\r\n        let force = 250000;\r\n        let knownIdentifiers = new Set();\r\n        // Populate knownIdentifiers with all the touches we have first\r\n        for (let identifier of this._identifierToTouchPos.keys()) {\r\n            knownIdentifiers.add(identifier);\r\n        }\r\n        // For any new identifier, add some velocity at that spot.\r\n        for (let touch of event.touches) {\r\n            if (!knownIdentifiers.has(touch.identifier)) {\r\n                let screenPosition = this._PageToScreen(touch.pageX, touch.pageY);\r\n                let cellCoord = this._ScreenToCellCoords(screenPosition);\r\n                this._waveSolver.AddVelocity(force, cellCoord.x, cellCoord.y);\r\n            }\r\n        }\r\n    }\r\n    HandleTouchMove(event) {\r\n        event.preventDefault();\r\n        // Update our mappings and their positions given the event positions.\r\n        for (let touch of event.touches) {\r\n            let screenPosition = this._PageToScreen(touch.pageX, touch.pageY);\r\n            if (this._identifierToTouchPos.has(touch.identifier)) {\r\n                this._identifierToTouchPos.get(touch.identifier).SetPos(screenPosition.x, screenPosition.y);\r\n            }\r\n            else {\r\n                this._identifierToTouchPos.set(touch.identifier, new touchPos_1.TouchPos(screenPosition.x, screenPosition.y));\r\n            }\r\n        }\r\n        // Apply force along the segment between each touch's prior and current\r\n        // positions.\r\n        let force = 10000;\r\n        for (let TouchPos of this._identifierToTouchPos.values()) {\r\n            let prevCellCoord = this._ScreenToCellCoords(new THREE.Vector2(TouchPos.GetPrevPosX(), TouchPos.GetPrevPosY()));\r\n            let cellCoord = this._ScreenToCellCoords(new THREE.Vector2(TouchPos.GetPosX(), TouchPos.GetPosY()));\r\n            bresenham_1.Bresenham(prevCellCoord.x, prevCellCoord.y, cellCoord.x, cellCoord.y, this._ClampedAddVelocity.bind(this, force));\r\n        }\r\n    }\r\n    HandleTouchEnd(event) {\r\n        // On touch end events, remove any identifier from the _identifierToTouchPos \r\n        // map so it doesn't grow indefinitely.\r\n        // This is kind of a roundabout way of doing it. First we create a set,\r\n        // populate it with every touch identifier we know about, then remove \r\n        // from that every identifier that's still around, and then we remove \r\n        // whatever is remaining from the map.\r\n        let identifiersToRemove = new Set();\r\n        // Populate identifiersToRemove with all the touches we have first\r\n        for (let identifier of this._identifierToTouchPos.keys()) {\r\n            identifiersToRemove.add(identifier);\r\n        }\r\n        // Remove any identifiers from the list that are still around\r\n        for (let touch of event.touches) {\r\n            identifiersToRemove.delete(touch.identifier);\r\n        }\r\n        // Now remove the remaining touches from the master map\r\n        for (let identifier of identifiersToRemove.keys()) {\r\n            if (this._identifierToTouchPos.has(identifier)) {\r\n                this._identifierToTouchPos.delete(identifier);\r\n            }\r\n        }\r\n    }\r\n    HandleMouseDown(event) {\r\n        this._mouseDown = true;\r\n        this._UpdateMousePos(this._PageToScreen(event.pageX, event.pageY));\r\n    }\r\n    HandleMouseUp(event) {\r\n        this._mouseDown = false;\r\n        this._UpdateMousePos(this._PageToScreen(event.pageX, event.pageY));\r\n    }\r\n    HandleMouseMove(event) {\r\n        this._UpdateMousePos(this._PageToScreen(event.pageX, event.pageY));\r\n        // If the mouse is down, add some force along the segment between\r\n        // the previous and current mouse positions.\r\n        if (this._mouseDown) {\r\n            let force = 10000;\r\n            let prevCellCoord = this._ScreenToCellCoords(this._mousePos);\r\n            let cellCoord = this._ScreenToCellCoords(this._prevMousePos);\r\n            bresenham_1.Bresenham(prevCellCoord.x, prevCellCoord.y, cellCoord.x, cellCoord.y, this._ClampedAddVelocity.bind(this, force));\r\n        }\r\n    }\r\n    HandleMouseClick(event) {\r\n        this._UpdateMousePos(this._PageToScreen(event.pageX, event.pageY));\r\n        let force = 250000;\r\n        let cellCoord = this._ScreenToCellCoords(this._mousePos);\r\n        this._waveSolver.AddVelocity(force, cellCoord.x, cellCoord.y);\r\n    }\r\n    /**\r\n     * Given the window, this adds the controller's handlers to their\r\n     * respective events.\r\n     */\r\n    _RegisterForEvents(window) {\r\n        window.addEventListener('touchmove', this.HandleTouchMove.bind(this));\r\n        window.addEventListener('touchstart', this.HandleTouchStart.bind(this));\r\n        window.addEventListener('touchend', this.HandleTouchEnd.bind(this));\r\n        window.addEventListener('touchleave', this.HandleTouchEnd.bind(this));\r\n        window.addEventListener('mousemove', this.HandleMouseMove.bind(this));\r\n        window.addEventListener('mousedown', this.HandleMouseDown.bind(this));\r\n        window.addEventListener('mouseup', this.HandleMouseUp.bind(this));\r\n        window.addEventListener('click', this.HandleMouseClick.bind(this));\r\n    }\r\n    /**\r\n     * Given a force, adds that amount to the velocity at the x y coordinates\r\n     * given. This first clamps the x and y coords.\r\n     */\r\n    _ClampedAddVelocity(force, x, y) {\r\n        let cellI = THREE.MathUtils.clamp(x, \r\n        /* min */ 0, \r\n        /* max */ this._waveSolver.GetCellCountX() - 1);\r\n        let cellJ = THREE.MathUtils.clamp(y, \r\n        /* min */ 0, \r\n        /* max */ this._waveSolver.GetCellCountY() - 1);\r\n        this._waveSolver.AddVelocity(force, cellI, cellJ);\r\n    }\r\n    _UpdateMousePos(pos) {\r\n        this._prevMousePos.copy(this._mousePos);\r\n        this._mousePos = pos;\r\n    }\r\n    /**\r\n     * Convert coordinates from page space to screen space.\r\n     */\r\n    _PageToScreen(pageX, pageY) {\r\n        let elementX = pageX - this._parentElement.offsetLeft;\r\n        let elementY = pageY - this._parentElement.offsetTop;\r\n        return new THREE.Vector2(((elementX / this._parentElement.offsetWidth) * 2 - 1) * 50, (-(elementY / this._parentElement.offsetHeight) * 2 + 1) * -50);\r\n    }\r\n    /**\r\n     * Convert coordinates from screen space to wave solver integer coordinates.\r\n     */\r\n    _ScreenToCellCoords(vec) {\r\n        let result = new THREE.Vector2();\r\n        result.addVectors(vec, new THREE.Vector2(50, 50));\r\n        result.divideScalar(100.0);\r\n        result.x =\r\n            THREE.MathUtils.clamp(Math.floor(result.x * (this._waveSolver.GetCellCountX() - 1)), \r\n            /* min */ 0, \r\n            /* max */ this._waveSolver.GetCellCountX() - 1);\r\n        result.y =\r\n            THREE.MathUtils.clamp(Math.floor(result.y * (this._waveSolver.GetCellCountY() - 1)), \r\n            /* min */ 0, \r\n            /* max */ this._waveSolver.GetCellCountY() - 1);\r\n        return result;\r\n    }\r\n}\r\nexports.Controller = Controller;\r\n\n\n//# sourceURL=webpack:///./src/controller.ts?");

/***/ }),

/***/ "./src/timeManager.ts":
/*!****************************!*\
  !*** ./src/timeManager.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.TimeManager = void 0;\r\nclass TimeManager {\r\n    constructor(timestep_ms, timestepLimitPerUpdate) {\r\n        this._timestep_ms = timestep_ms;\r\n        this._timestep_sec = this._timestep_ms / 1000.0;\r\n        this._timestepLimitPerUpdate = timestepLimitPerUpdate;\r\n        this._lastUpdateTime = Date.now();\r\n        this._leftoverTime_ms = 0;\r\n    }\r\n    /**\r\n     * Based on the time since the last update, calls the given callback\r\n     * function with fixed sized timesteps to catch up with the current time.\r\n     */\r\n    Update(callback) {\r\n        let time = Date.now();\r\n        let elapsed_ms = time - this._lastUpdateTime;\r\n        // The timestepCount is the number of times we can fit a single timestep\r\n        // in the total elapsed time plus any \"leftover\" fractional time from \r\n        // the last update.\r\n        let timestepCount = Math.floor((elapsed_ms + this._leftoverTime_ms) / this._timestep_ms);\r\n        // The leftover time is any amount of time in the total elapsed time \r\n        // that can't fit int a single timestep.\r\n        this._leftoverTime_ms =\r\n            (elapsed_ms + this._leftoverTime_ms)\r\n                - timestepCount * this._timestep_ms;\r\n        // Clamp the timestep count to prevent any lag spikes from carrying over\r\n        // too much.\r\n        timestepCount = Math.min(timestepCount, this._timestepLimitPerUpdate);\r\n        for (let i = 0; i < timestepCount; i++) {\r\n            callback(this._timestep_sec);\r\n        }\r\n        // Remember this time as the last update time.\r\n        this._lastUpdateTime = time;\r\n    }\r\n}\r\nexports.TimeManager = TimeManager;\r\n\n\n//# sourceURL=webpack:///./src/timeManager.ts?");

/***/ }),

/***/ "./src/touchPos.ts":
/*!*************************!*\
  !*** ./src/touchPos.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.TouchPos = void 0;\r\n/**\r\n * Standard JS touch events don't provide a previous position for each given touch.\r\n * This class is used for that.\r\n */\r\nclass TouchPos {\r\n    constructor(posX, posY) {\r\n        this.posX = posX;\r\n        this.posY = posY;\r\n        this.prevPosX = posX;\r\n        this.prevPosY = posY;\r\n    }\r\n    SetPos(posX, posY) {\r\n        this.prevPosX = this.posX;\r\n        this.prevPosY = this.posY;\r\n        this.posX = posX;\r\n        this.posY = posY;\r\n    }\r\n    GetPosX() {\r\n        return this.posX;\r\n    }\r\n    GetPosY() {\r\n        return this.posY;\r\n    }\r\n    GetPrevPosX() {\r\n        return this.prevPosX;\r\n    }\r\n    GetPrevPosY() {\r\n        return this.prevPosY;\r\n    }\r\n}\r\nexports.TouchPos = TouchPos;\r\n\n\n//# sourceURL=webpack:///./src/touchPos.ts?");

/***/ }),

/***/ "./src/view.ts":
/*!*********************!*\
  !*** ./src/view.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.View = void 0;\r\nconst THREE = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\r\n/**\r\n * The \"view\" of our application. Given the wave solver, this will render to\r\n * match the wave solver's current state.\r\n */\r\nclass View {\r\n    constructor(parentElement, waveSolver) {\r\n        this._waveSolver = waveSolver;\r\n        this._scene = new THREE.Scene();\r\n        this._renderer = new THREE.WebGLRenderer();\r\n        this._renderer.setSize(parentElement.offsetWidth, parentElement.offsetHeight);\r\n        // I somewhat arbitrarily chose a screen that goes [-50,50] along each\r\n        // axis.\r\n        this._camera = new THREE.OrthographicCamera(\r\n        /* left */ -50, \r\n        /* right */ 50, \r\n        /* top */ -50, \r\n        /* bottom */ 50, \r\n        /* near */ 0.1, \r\n        /* far */ 7000);\r\n        this._textureWidth = this._waveSolver.GetCellCountX();\r\n        this._textureHeight = this._waveSolver.GetCellCountY();\r\n        let textureSize = this._textureWidth * this._textureHeight;\r\n        this._textureData = new Uint8Array(3 * textureSize);\r\n        let texture = new THREE.DataTexture(this._textureData, this._textureWidth, this._textureHeight, THREE.RGBFormat);\r\n        this._material = new THREE.MeshBasicMaterial({\r\n            side: THREE.DoubleSide,\r\n            map: texture\r\n        });\r\n        // Size the geometry to match the arbitrary screen coordinates I chose\r\n        // above.\r\n        let geometry = new THREE.PlaneGeometry(100, 100);\r\n        let plane = new THREE.Mesh(geometry, this._material);\r\n        this._scene.add(plane);\r\n        this._camera.position.x = 0;\r\n        this._camera.position.y = 0;\r\n        // The camera is orthographic, so things don't scale with distance. \r\n        // That means the z-coordinate we choose here doesn't matter, as long as\r\n        // it's positive.\r\n        this._camera.position.z = 100;\r\n    }\r\n    /**\r\n     * Update the scene to match the current wave solver and render.\r\n     */\r\n    Render() {\r\n        this._Update();\r\n        this._renderer.render(this._scene, this._camera);\r\n    }\r\n    GetDomElement() {\r\n        return this._renderer.domElement;\r\n    }\r\n    _Update() {\r\n        // Update the data texture to reflect the wave solver state.\r\n        let countX = this._waveSolver.GetCellCountX();\r\n        let countY = this._waveSolver.GetCellCountY();\r\n        let cellSizeX = this._textureWidth / countX;\r\n        let cellSizeY = this._textureHeight / countY;\r\n        for (let j = 0; j < this._textureHeight; j++) {\r\n            for (let i = 0; i < this._textureWidth; i++) {\r\n                let index = i + j * this._textureWidth;\r\n                // Calculate the data texture pixel position\r\n                let x = i / this._textureWidth * 2 - 1;\r\n                let y = j / this._textureHeight * 2 - 1;\r\n                let pixel = new THREE.Vector2(x, y);\r\n                // Calculate the wave solver cell position\r\n                let cellI = i / cellSizeX;\r\n                let cellJ = j / cellSizeY;\r\n                let density = this._waveSolver.GetDensity(cellI, cellJ);\r\n                let velocity = this._waveSolver.GetVelocity(cellI, cellJ);\r\n                // Compute the color from HSV space\r\n                let hsl = this._HsvToHsl(0.5 + 0.5 * Math.sin(density * 0.0004), 1.0, 0.5 + 0.5 * Math.sin(velocity * 0.01));\r\n                let color = new THREE.Color();\r\n                color.setHSL(hsl[0], hsl[1], hsl[2]);\r\n                let stride = index * 3;\r\n                this._textureData[stride] = Math.floor(color.r * 255);\r\n                this._textureData[stride + 1] = Math.floor(color.g * 255);\r\n                this._textureData[stride + 2] = Math.floor(color.b * 255);\r\n            }\r\n        }\r\n        // Signal the material to update its texture\r\n        this._material.map.needsUpdate = true;\r\n    }\r\n    /**\r\n     * Convert hue/saturation/variance to hue/saturation/luminance.\r\n     * Borrowed from https://stackoverflow.com/a/31851617/456460\r\n     */\r\n    _HsvToHsl(h, s, v) {\r\n        // both hsv and hsl values are in [0, 1]\r\n        let l = (2 - s) * v / 2;\r\n        if (l != 0) {\r\n            if (l == 1) {\r\n                s = 0;\r\n            }\r\n            else if (l < 0.5) {\r\n                s = s * v / (l * 2);\r\n            }\r\n            else {\r\n                s = s * v / (2 - l * 2);\r\n            }\r\n        }\r\n        return [h, s, l];\r\n    }\r\n}\r\nexports.View = View;\r\n\n\n//# sourceURL=webpack:///./src/view.ts?");

/***/ }),

/***/ "./src/waveSolver.ts":
/*!***************************!*\
  !*** ./src/waveSolver.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.WaveSolver = void 0;\r\nclass WaveSolver {\r\n    constructor(cellCountX, cellCountY) {\r\n        this._velocity = [];\r\n        this._density = [];\r\n        this._friction = 0.58;\r\n        this._speed = 20.0;\r\n        // Fill the 2D arrays with all zeroes.\r\n        for (let i = 0; i < cellCountX; i++) {\r\n            this._velocity[i] = [];\r\n            this._density[i] = [];\r\n            for (let j = 0; j < cellCountY; j++) {\r\n                this._velocity[i][j] = 0.0;\r\n                this._density[i][j] = 0.0;\r\n            }\r\n        }\r\n    }\r\n    Solve(timeStep) {\r\n        // xxx: My old code had some logic errors that ended up giving pretty\r\n        // neat results. Using the proper wave equations here gives something\r\n        // more physically accurate, but I've not been able to tune the \r\n        // parameters to get them to match what I had before.\r\n        for (let i = 0; i < this._velocity.length; i++) {\r\n            for (let j = 0; j < this._velocity[i].length; j++) {\r\n                let densDiff = this._GetAdjacentSum(this._density, i, j)\r\n                    - 4.0 * this._density[i][j];\r\n                this._velocity[i][j] =\r\n                    this._friction * this._velocity[i][j]\r\n                        + densDiff * timeStep * this._speed;\r\n                this._density[i][j] += this._velocity[i][j];\r\n            }\r\n        }\r\n    }\r\n    AddVelocity(amount, i, j) {\r\n        this._velocity[Math.floor(i)][Math.floor(j)] += amount;\r\n    }\r\n    GetCellCountX() {\r\n        return this._velocity.length;\r\n    }\r\n    GetCellCountY() {\r\n        return this._velocity[0].length;\r\n    }\r\n    GetDensity(i, j) {\r\n        return this._density[Math.floor(i)][Math.floor(j)];\r\n    }\r\n    GetVelocity(i, j) {\r\n        return this._velocity[Math.floor(i)][Math.floor(j)];\r\n    }\r\n    _GetAdjacentSum(arr, i, j) {\r\n        let sum = 0;\r\n        sum += arr[Math.max(i - 1, 0)][j];\r\n        sum += arr[i][Math.max(j - 1, 0)];\r\n        sum += arr[Math.min(i + 1, arr.length - 1)][j];\r\n        sum += arr[i][Math.min(j + 1, arr[i].length - 1)];\r\n        return sum;\r\n    }\r\n}\r\nexports.WaveSolver = WaveSolver;\r\n\n\n//# sourceURL=webpack:///./src/waveSolver.ts?");

/***/ })

/******/ });