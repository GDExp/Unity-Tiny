/*
 * AUTO-GENERATED, DO NOT EDIT BY HAND
 */
// In order to process bindings, we first need type registry from compiled code to be available.
ut.meta.registerTypes();
var entities = entities || {};
entities.game = entities.game || {};
entities.game.BlocksGroup = entities.game.BlocksGroup || {};
entities.game.BlocksGroup.Component = function() {
};
entities.game.BlocksGroup.Component.prototype = Object.create(null);
entities.game.BlocksGroup.Component.prototype.constructor = entities.game.BlocksGroup.Component;
Object.defineProperties(entities.game.BlocksGroup.Component.prototype, {
});
entities.game.BlocksGroup.Component._size = 1;
entities.game.BlocksGroup.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.BlocksGroup.Component.prototype);
  return v;
};
entities.game.BlocksGroup.Component._toPtr = function(ptr, v) {
};
entities.game.BlocksGroup.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.BlocksGroup.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.BlocksGroup.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.BlocksGroup.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.BlocksGroup.Component.StorageView.prototype = Object.create(null);
entities.game.BlocksGroup.Component.StorageView.prototype.constructor = entities.game.BlocksGroup.Component.StorageView;
entities.game.BlocksGroup.Component._view = entities.game.BlocksGroup.Component.StorageView;
entities.game.BlocksGroup.Component.StorageView._isSharedComp = entities.game.BlocksGroup.Component._isSharedComp = false;
entities.game.BlocksGroup.Component.StorageView._fromPtr = entities.game.BlocksGroup.Component._fromPtr;
entities.game.BlocksGroup.Component.StorageView._toPtr = entities.game.BlocksGroup.Component._toPtr;
entities.game.BlocksGroup.Component.StorageView._tempHeapPtr = entities.game.BlocksGroup.Component._tempHeapPtr;
entities.game.BlocksGroup.Component.StorageView._size = entities.game.BlocksGroup.Component._size;
entities.game.BlocksGroup.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.BlocksGroup.Component.StorageView.prototype, {
});
entities.game.BlocksGroup.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.BlocksGroup.Component is a POD type, so a JavaScript side copy constructor entities.game.BlocksGroup.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.BlocksGroup.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.BlocksGroup.Component', 1, []);
})();
Object.defineProperties(entities.game.BlocksGroup.Component, { cid: { configurable: true, get: function() { delete entities.game.BlocksGroup.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.BlocksGroup.Component.cid = Module._ut_component_register_cid_with_type(entities.game.BlocksGroup.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.BlocksGroup.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.BlocksGroup.Component.cid; } } });
entities.game.GameOver = entities.game.GameOver || {};
entities.game.GameOver.Component = function() {
};
entities.game.GameOver.Component.prototype = Object.create(null);
entities.game.GameOver.Component.prototype.constructor = entities.game.GameOver.Component;
Object.defineProperties(entities.game.GameOver.Component.prototype, {
});
entities.game.GameOver.Component._size = 1;
entities.game.GameOver.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.GameOver.Component.prototype);
  return v;
};
entities.game.GameOver.Component._toPtr = function(ptr, v) {
};
entities.game.GameOver.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.GameOver.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.GameOver.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.GameOver.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.GameOver.Component.StorageView.prototype = Object.create(null);
entities.game.GameOver.Component.StorageView.prototype.constructor = entities.game.GameOver.Component.StorageView;
entities.game.GameOver.Component._view = entities.game.GameOver.Component.StorageView;
entities.game.GameOver.Component.StorageView._isSharedComp = entities.game.GameOver.Component._isSharedComp = false;
entities.game.GameOver.Component.StorageView._fromPtr = entities.game.GameOver.Component._fromPtr;
entities.game.GameOver.Component.StorageView._toPtr = entities.game.GameOver.Component._toPtr;
entities.game.GameOver.Component.StorageView._tempHeapPtr = entities.game.GameOver.Component._tempHeapPtr;
entities.game.GameOver.Component.StorageView._size = entities.game.GameOver.Component._size;
entities.game.GameOver.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.GameOver.Component.StorageView.prototype, {
});
entities.game.GameOver.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.GameOver.Component is a POD type, so a JavaScript side copy constructor entities.game.GameOver.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.GameOver.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.GameOver.Component', 1, []);
})();
Object.defineProperties(entities.game.GameOver.Component, { cid: { configurable: true, get: function() { delete entities.game.GameOver.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.GameOver.Component.cid = Module._ut_component_register_cid_with_type(entities.game.GameOver.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.GameOver.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.GameOver.Component.cid; } } });
entities.game.GameUI = entities.game.GameUI || {};
entities.game.GameUI.Component = function() {
};
entities.game.GameUI.Component.prototype = Object.create(null);
entities.game.GameUI.Component.prototype.constructor = entities.game.GameUI.Component;
Object.defineProperties(entities.game.GameUI.Component.prototype, {
});
entities.game.GameUI.Component._size = 1;
entities.game.GameUI.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.GameUI.Component.prototype);
  return v;
};
entities.game.GameUI.Component._toPtr = function(ptr, v) {
};
entities.game.GameUI.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.GameUI.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.GameUI.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.GameUI.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.GameUI.Component.StorageView.prototype = Object.create(null);
entities.game.GameUI.Component.StorageView.prototype.constructor = entities.game.GameUI.Component.StorageView;
entities.game.GameUI.Component._view = entities.game.GameUI.Component.StorageView;
entities.game.GameUI.Component.StorageView._isSharedComp = entities.game.GameUI.Component._isSharedComp = false;
entities.game.GameUI.Component.StorageView._fromPtr = entities.game.GameUI.Component._fromPtr;
entities.game.GameUI.Component.StorageView._toPtr = entities.game.GameUI.Component._toPtr;
entities.game.GameUI.Component.StorageView._tempHeapPtr = entities.game.GameUI.Component._tempHeapPtr;
entities.game.GameUI.Component.StorageView._size = entities.game.GameUI.Component._size;
entities.game.GameUI.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.GameUI.Component.StorageView.prototype, {
});
entities.game.GameUI.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.GameUI.Component is a POD type, so a JavaScript side copy constructor entities.game.GameUI.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.GameUI.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.GameUI.Component', 1, []);
})();
Object.defineProperties(entities.game.GameUI.Component, { cid: { configurable: true, get: function() { delete entities.game.GameUI.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.GameUI.Component.cid = Module._ut_component_register_cid_with_type(entities.game.GameUI.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.GameUI.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.GameUI.Component.cid; } } });
entities.game.MainMenu = entities.game.MainMenu || {};
entities.game.MainMenu.Component = function() {
};
entities.game.MainMenu.Component.prototype = Object.create(null);
entities.game.MainMenu.Component.prototype.constructor = entities.game.MainMenu.Component;
Object.defineProperties(entities.game.MainMenu.Component.prototype, {
});
entities.game.MainMenu.Component._size = 1;
entities.game.MainMenu.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.MainMenu.Component.prototype);
  return v;
};
entities.game.MainMenu.Component._toPtr = function(ptr, v) {
};
entities.game.MainMenu.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.MainMenu.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.MainMenu.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.MainMenu.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.MainMenu.Component.StorageView.prototype = Object.create(null);
entities.game.MainMenu.Component.StorageView.prototype.constructor = entities.game.MainMenu.Component.StorageView;
entities.game.MainMenu.Component._view = entities.game.MainMenu.Component.StorageView;
entities.game.MainMenu.Component.StorageView._isSharedComp = entities.game.MainMenu.Component._isSharedComp = false;
entities.game.MainMenu.Component.StorageView._fromPtr = entities.game.MainMenu.Component._fromPtr;
entities.game.MainMenu.Component.StorageView._toPtr = entities.game.MainMenu.Component._toPtr;
entities.game.MainMenu.Component.StorageView._tempHeapPtr = entities.game.MainMenu.Component._tempHeapPtr;
entities.game.MainMenu.Component.StorageView._size = entities.game.MainMenu.Component._size;
entities.game.MainMenu.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.MainMenu.Component.StorageView.prototype, {
});
entities.game.MainMenu.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.MainMenu.Component is a POD type, so a JavaScript side copy constructor entities.game.MainMenu.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.MainMenu.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.MainMenu.Component', 1, []);
})();
Object.defineProperties(entities.game.MainMenu.Component, { cid: { configurable: true, get: function() { delete entities.game.MainMenu.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.MainMenu.Component.cid = Module._ut_component_register_cid_with_type(entities.game.MainMenu.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.MainMenu.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.MainMenu.Component.cid; } } });
entities.game.MainScene = entities.game.MainScene || {};
entities.game.MainScene.Component = function() {
};
entities.game.MainScene.Component.prototype = Object.create(null);
entities.game.MainScene.Component.prototype.constructor = entities.game.MainScene.Component;
Object.defineProperties(entities.game.MainScene.Component.prototype, {
});
entities.game.MainScene.Component._size = 1;
entities.game.MainScene.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.MainScene.Component.prototype);
  return v;
};
entities.game.MainScene.Component._toPtr = function(ptr, v) {
};
entities.game.MainScene.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.MainScene.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.MainScene.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.MainScene.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.MainScene.Component.StorageView.prototype = Object.create(null);
entities.game.MainScene.Component.StorageView.prototype.constructor = entities.game.MainScene.Component.StorageView;
entities.game.MainScene.Component._view = entities.game.MainScene.Component.StorageView;
entities.game.MainScene.Component.StorageView._isSharedComp = entities.game.MainScene.Component._isSharedComp = false;
entities.game.MainScene.Component.StorageView._fromPtr = entities.game.MainScene.Component._fromPtr;
entities.game.MainScene.Component.StorageView._toPtr = entities.game.MainScene.Component._toPtr;
entities.game.MainScene.Component.StorageView._tempHeapPtr = entities.game.MainScene.Component._tempHeapPtr;
entities.game.MainScene.Component.StorageView._size = entities.game.MainScene.Component._size;
entities.game.MainScene.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.MainScene.Component.StorageView.prototype, {
});
entities.game.MainScene.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.MainScene.Component is a POD type, so a JavaScript side copy constructor entities.game.MainScene.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.MainScene.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.MainScene.Component', 1, []);
})();
Object.defineProperties(entities.game.MainScene.Component, { cid: { configurable: true, get: function() { delete entities.game.MainScene.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.MainScene.Component.cid = Module._ut_component_register_cid_with_type(entities.game.MainScene.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.MainScene.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.MainScene.Component.cid; } } });
entities.game.Share = entities.game.Share || {};
entities.game.Share.Component = function() {
};
entities.game.Share.Component.prototype = Object.create(null);
entities.game.Share.Component.prototype.constructor = entities.game.Share.Component;
Object.defineProperties(entities.game.Share.Component.prototype, {
});
entities.game.Share.Component._size = 1;
entities.game.Share.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.Share.Component.prototype);
  return v;
};
entities.game.Share.Component._toPtr = function(ptr, v) {
};
entities.game.Share.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.Share.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.Share.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.Share.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.Share.Component.StorageView.prototype = Object.create(null);
entities.game.Share.Component.StorageView.prototype.constructor = entities.game.Share.Component.StorageView;
entities.game.Share.Component._view = entities.game.Share.Component.StorageView;
entities.game.Share.Component.StorageView._isSharedComp = entities.game.Share.Component._isSharedComp = false;
entities.game.Share.Component.StorageView._fromPtr = entities.game.Share.Component._fromPtr;
entities.game.Share.Component.StorageView._toPtr = entities.game.Share.Component._toPtr;
entities.game.Share.Component.StorageView._tempHeapPtr = entities.game.Share.Component._tempHeapPtr;
entities.game.Share.Component.StorageView._size = entities.game.Share.Component._size;
entities.game.Share.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.Share.Component.StorageView.prototype, {
});
entities.game.Share.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.Share.Component is a POD type, so a JavaScript side copy constructor entities.game.Share.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.Share.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.Share.Component', 1, []);
})();
Object.defineProperties(entities.game.Share.Component, { cid: { configurable: true, get: function() { delete entities.game.Share.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.Share.Component.cid = Module._ut_component_register_cid_with_type(entities.game.Share.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.Share.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.Share.Component.cid; } } });
var game = game || {};
game.Block = function() {
};
game.Block.prototype = Object.create(null);
game.Block.prototype.constructor = game.Block;
Object.defineProperties(game.Block.prototype, {
});
game.Block._size = 1;
game.Block._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Block.prototype);
  return v;
};
game.Block._toPtr = function(ptr, v) {
};
game.Block._toTempHeapPtr = function(ptr, v) {
};
game.Block._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) game.Block._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Block.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Block.StorageView.prototype = Object.create(null);
game.Block.StorageView.prototype.constructor = game.Block.StorageView;
game.Block._view = game.Block.StorageView;
game.Block.StorageView._isSharedComp = game.Block._isSharedComp = false;
game.Block.StorageView._fromPtr = game.Block._fromPtr;
game.Block.StorageView._toPtr = game.Block._toPtr;
game.Block.StorageView._tempHeapPtr = game.Block._tempHeapPtr;
game.Block.StorageView._size = game.Block._size;
game.Block.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(game.Block.StorageView.prototype, {
});
game.Block._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Block is a POD type, so a JavaScript side copy constructor game.Block._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.Block._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.Block', 1, []);
})();
Object.defineProperties(game.Block, { cid: { configurable: true, get: function() { delete game.Block.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Block.cid = Module._ut_component_register_cid_with_type(game.Block._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.Block.StorageView, { cid: { configurable: true, get: function() { return game.Block.cid; } } });
game.ButtonInfo = function(arg0) {
  this._menuState = (arg0|0);
};
game.ButtonInfo.prototype = Object.create(null);
game.ButtonInfo.prototype.constructor = game.ButtonInfo;
Object.defineProperties(game.ButtonInfo.prototype, {
  menuState: {
    get: function() { return this._menuState; },
    set: function(v) { this._menuState = (v|0); },
  },
});
game.ButtonInfo._size = 1;
game.ButtonInfo._fromPtr = function(ptr, v) {
  v = v || Object.create(game.ButtonInfo.prototype);
  v._menuState = HEAP8[ptr+0];
  return v;
};
game.ButtonInfo._toPtr = function(ptr, v) {
  HEAP8[ptr+0] = v.menuState;
};
game.ButtonInfo._toTempHeapPtr = function(ptr, v) {
  HEAP8[ptr+0] = v.menuState;
};
game.ButtonInfo._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) game.ButtonInfo._toTempHeapPtr(ptr, v);
  return ptr;
};
game.ButtonInfo.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.ButtonInfo.StorageView.prototype = Object.create(null);
game.ButtonInfo.StorageView.prototype.constructor = game.ButtonInfo.StorageView;
game.ButtonInfo._view = game.ButtonInfo.StorageView;
game.ButtonInfo.StorageView._isSharedComp = game.ButtonInfo._isSharedComp = false;
game.ButtonInfo.StorageView._fromPtr = game.ButtonInfo._fromPtr;
game.ButtonInfo.StorageView._toPtr = game.ButtonInfo._toPtr;
game.ButtonInfo.StorageView._tempHeapPtr = game.ButtonInfo._tempHeapPtr;
game.ButtonInfo.StorageView._size = game.ButtonInfo._size;
game.ButtonInfo.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(game.ButtonInfo.StorageView.prototype, {
  menuState: {
    get: function() { return HEAP8[this._ptr+0]; },
    set: function(v) { HEAP8[this._ptr+0] = v; },
  },
});
game.ButtonInfo._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.ButtonInfo is a POD type, so a JavaScript side copy constructor game.ButtonInfo._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.ButtonInfo._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.ButtonInfo', 1, [
    {name: 'menuState', offset: 0, type: ut.meta.getType('int8')}
  ]);
})();
Object.defineProperties(game.ButtonInfo, { cid: { configurable: true, get: function() { delete game.ButtonInfo.cid; var offsetsPtr = 0, offsetsCount = 0; return game.ButtonInfo.cid = Module._ut_component_register_cid_with_type(game.ButtonInfo._typeDesc, 1, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.ButtonInfo.StorageView, { cid: { configurable: true, get: function() { return game.ButtonInfo.cid; } } });
game.ButtonInfo.menuState = { $ofs:0, $t:"int8_t", $c:game.ButtonInfo };
game.Ground = function() {
};
game.Ground.prototype = Object.create(null);
game.Ground.prototype.constructor = game.Ground;
Object.defineProperties(game.Ground.prototype, {
});
game.Ground._size = 1;
game.Ground._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Ground.prototype);
  return v;
};
game.Ground._toPtr = function(ptr, v) {
};
game.Ground._toTempHeapPtr = function(ptr, v) {
};
game.Ground._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) game.Ground._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Ground.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Ground.StorageView.prototype = Object.create(null);
game.Ground.StorageView.prototype.constructor = game.Ground.StorageView;
game.Ground._view = game.Ground.StorageView;
game.Ground.StorageView._isSharedComp = game.Ground._isSharedComp = false;
game.Ground.StorageView._fromPtr = game.Ground._fromPtr;
game.Ground.StorageView._toPtr = game.Ground._toPtr;
game.Ground.StorageView._tempHeapPtr = game.Ground._tempHeapPtr;
game.Ground.StorageView._size = game.Ground._size;
game.Ground.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(game.Ground.StorageView.prototype, {
});
game.Ground._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Ground is a POD type, so a JavaScript side copy constructor game.Ground._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.Ground._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.Ground', 1, []);
})();
Object.defineProperties(game.Ground, { cid: { configurable: true, get: function() { delete game.Ground.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Ground.cid = Module._ut_component_register_cid_with_type(game.Ground._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.Ground.StorageView, { cid: { configurable: true, get: function() { return game.Ground.cid; } } });
game.InputSystem = function(arg0, arg1, arg2, arg3, arg4, arg5) {
  this._jumpForce = (+(arg0===undefined ? 0 : arg0));
  this._grounded = (arg1 ? true : false);
  this._hit = (arg2 ? true : false);
  this._jump = (arg3 ? true : false);
  this._fall = (arg4 ? true : false);
  this._gameOver = (arg5 ? true : false);
};
game.InputSystem.prototype = Object.create(null);
game.InputSystem.prototype.constructor = game.InputSystem;
Object.defineProperties(game.InputSystem.prototype, {
  jumpForce: {
    get: function() { return this._jumpForce; },
    set: function(v) { this._jumpForce = (+(v===undefined ? 0 : v)); },
  },
  grounded: {
    get: function() { return this._grounded; },
    set: function(v) { this._grounded = (v ? true : false); },
  },
  hit: {
    get: function() { return this._hit; },
    set: function(v) { this._hit = (v ? true : false); },
  },
  jump: {
    get: function() { return this._jump; },
    set: function(v) { this._jump = (v ? true : false); },
  },
  fall: {
    get: function() { return this._fall; },
    set: function(v) { this._fall = (v ? true : false); },
  },
  gameOver: {
    get: function() { return this._gameOver; },
    set: function(v) { this._gameOver = (v ? true : false); },
  },
});
game.InputSystem._size = 12;
game.InputSystem._fromPtr = function(ptr, v) {
  v = v || Object.create(game.InputSystem.prototype);
  v._jumpForce = HEAPF32[(ptr+0)>>2];
  v._grounded = (HEAP8[ptr+4]?true:false);
  v._hit = (HEAP8[ptr+5]?true:false);
  v._jump = (HEAP8[ptr+6]?true:false);
  v._fall = (HEAP8[ptr+7]?true:false);
  v._gameOver = (HEAP8[ptr+8]?true:false);
  return v;
};
game.InputSystem._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.jumpForce;
  HEAP8[ptr+4] = (v.grounded)?1:0;
  HEAP8[ptr+5] = (v.hit)?1:0;
  HEAP8[ptr+6] = (v.jump)?1:0;
  HEAP8[ptr+7] = (v.fall)?1:0;
  HEAP8[ptr+8] = (v.gameOver)?1:0;
};
game.InputSystem._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.jumpForce;
  HEAP8[ptr+4] = (v.grounded)?1:0;
  HEAP8[ptr+5] = (v.hit)?1:0;
  HEAP8[ptr+6] = (v.jump)?1:0;
  HEAP8[ptr+7] = (v.fall)?1:0;
  HEAP8[ptr+8] = (v.gameOver)?1:0;
};
game.InputSystem._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(12);
  if (v) game.InputSystem._toTempHeapPtr(ptr, v);
  return ptr;
};
game.InputSystem.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.InputSystem.StorageView.prototype = Object.create(null);
game.InputSystem.StorageView.prototype.constructor = game.InputSystem.StorageView;
game.InputSystem._view = game.InputSystem.StorageView;
game.InputSystem.StorageView._isSharedComp = game.InputSystem._isSharedComp = false;
game.InputSystem.StorageView._fromPtr = game.InputSystem._fromPtr;
game.InputSystem.StorageView._toPtr = game.InputSystem._toPtr;
game.InputSystem.StorageView._tempHeapPtr = game.InputSystem._tempHeapPtr;
game.InputSystem.StorageView._size = game.InputSystem._size;
game.InputSystem.StorageView.prototype.$advance = function() {
  this._ptr += 12;
};
Object.defineProperties(game.InputSystem.StorageView.prototype, {
  jumpForce: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
  grounded: {
    get: function() { return (HEAP8[this._ptr+4]?true:false); },
    set: function(v) { HEAP8[this._ptr+4] = (v)?1:0; },
  },
  hit: {
    get: function() { return (HEAP8[this._ptr+5]?true:false); },
    set: function(v) { HEAP8[this._ptr+5] = (v)?1:0; },
  },
  jump: {
    get: function() { return (HEAP8[this._ptr+6]?true:false); },
    set: function(v) { HEAP8[this._ptr+6] = (v)?1:0; },
  },
  fall: {
    get: function() { return (HEAP8[this._ptr+7]?true:false); },
    set: function(v) { HEAP8[this._ptr+7] = (v)?1:0; },
  },
  gameOver: {
    get: function() { return (HEAP8[this._ptr+8]?true:false); },
    set: function(v) { HEAP8[this._ptr+8] = (v)?1:0; },
  },
});
game.InputSystem._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.InputSystem is a POD type, so a JavaScript side copy constructor game.InputSystem._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.InputSystem._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.InputSystem', 12, [
    {name: 'jumpForce', offset: 0, type: ut.meta.getType('float')},
    {name: 'grounded', offset: 4, type: ut.meta.getType('bool')},
    {name: 'hit', offset: 5, type: ut.meta.getType('bool')},
    {name: 'jump', offset: 6, type: ut.meta.getType('bool')},
    {name: 'fall', offset: 7, type: ut.meta.getType('bool')},
    {name: 'gameOver', offset: 8, type: ut.meta.getType('bool')}
  ]);
})();
Object.defineProperties(game.InputSystem, { cid: { configurable: true, get: function() { delete game.InputSystem.cid; var offsetsPtr = 0, offsetsCount = 0; return game.InputSystem.cid = Module._ut_component_register_cid_with_type(game.InputSystem._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.InputSystem.StorageView, { cid: { configurable: true, get: function() { return game.InputSystem.cid; } } });
game.InputSystem.jumpForce = { $ofs:0, $t:"float", $c:game.InputSystem };
game.InputSystem.grounded = { $ofs:4, $t:"bool", $c:game.InputSystem };
game.InputSystem.hit = { $ofs:5, $t:"bool", $c:game.InputSystem };
game.InputSystem.jump = { $ofs:6, $t:"bool", $c:game.InputSystem };
game.InputSystem.fall = { $ofs:7, $t:"bool", $c:game.InputSystem };
game.InputSystem.gameOver = { $ofs:8, $t:"bool", $c:game.InputSystem };
game.MoveBlock = function(arg0, arg1, arg2) {
  this._blockSpeed = (+(arg0===undefined ? 0 : arg0));
  this._move = (arg1 ? true : false);
  this._setup = (arg2 ? true : false);
};
game.MoveBlock.prototype = Object.create(null);
game.MoveBlock.prototype.constructor = game.MoveBlock;
Object.defineProperties(game.MoveBlock.prototype, {
  blockSpeed: {
    get: function() { return this._blockSpeed; },
    set: function(v) { this._blockSpeed = (+(v===undefined ? 0 : v)); },
  },
  move: {
    get: function() { return this._move; },
    set: function(v) { this._move = (v ? true : false); },
  },
  setup: {
    get: function() { return this._setup; },
    set: function(v) { this._setup = (v ? true : false); },
  },
});
game.MoveBlock._size = 8;
game.MoveBlock._fromPtr = function(ptr, v) {
  v = v || Object.create(game.MoveBlock.prototype);
  v._blockSpeed = HEAPF32[(ptr+0)>>2];
  v._move = (HEAP8[ptr+4]?true:false);
  v._setup = (HEAP8[ptr+5]?true:false);
  return v;
};
game.MoveBlock._toPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.blockSpeed;
  HEAP8[ptr+4] = (v.move)?1:0;
  HEAP8[ptr+5] = (v.setup)?1:0;
};
game.MoveBlock._toTempHeapPtr = function(ptr, v) {
  HEAPF32[(ptr+0)>>2] = v.blockSpeed;
  HEAP8[ptr+4] = (v.move)?1:0;
  HEAP8[ptr+5] = (v.setup)?1:0;
};
game.MoveBlock._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(8);
  if (v) game.MoveBlock._toTempHeapPtr(ptr, v);
  return ptr;
};
game.MoveBlock.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.MoveBlock.StorageView.prototype = Object.create(null);
game.MoveBlock.StorageView.prototype.constructor = game.MoveBlock.StorageView;
game.MoveBlock._view = game.MoveBlock.StorageView;
game.MoveBlock.StorageView._isSharedComp = game.MoveBlock._isSharedComp = false;
game.MoveBlock.StorageView._fromPtr = game.MoveBlock._fromPtr;
game.MoveBlock.StorageView._toPtr = game.MoveBlock._toPtr;
game.MoveBlock.StorageView._tempHeapPtr = game.MoveBlock._tempHeapPtr;
game.MoveBlock.StorageView._size = game.MoveBlock._size;
game.MoveBlock.StorageView.prototype.$advance = function() {
  this._ptr += 8;
};
Object.defineProperties(game.MoveBlock.StorageView.prototype, {
  blockSpeed: {
    get: function() { return HEAPF32[(this._ptr+0)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+0)>>2] = v; },
  },
  move: {
    get: function() { return (HEAP8[this._ptr+4]?true:false); },
    set: function(v) { HEAP8[this._ptr+4] = (v)?1:0; },
  },
  setup: {
    get: function() { return (HEAP8[this._ptr+5]?true:false); },
    set: function(v) { HEAP8[this._ptr+5] = (v)?1:0; },
  },
});
game.MoveBlock._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.MoveBlock is a POD type, so a JavaScript side copy constructor game.MoveBlock._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.MoveBlock._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.MoveBlock', 8, [
    {name: 'blockSpeed', offset: 0, type: ut.meta.getType('float')},
    {name: 'move', offset: 4, type: ut.meta.getType('bool')},
    {name: 'setup', offset: 5, type: ut.meta.getType('bool')}
  ]);
})();
Object.defineProperties(game.MoveBlock, { cid: { configurable: true, get: function() { delete game.MoveBlock.cid; var offsetsPtr = 0, offsetsCount = 0; return game.MoveBlock.cid = Module._ut_component_register_cid_with_type(game.MoveBlock._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.MoveBlock.StorageView, { cid: { configurable: true, get: function() { return game.MoveBlock.cid; } } });
game.MoveBlock.blockSpeed = { $ofs:0, $t:"float", $c:game.MoveBlock };
game.MoveBlock.move = { $ofs:4, $t:"bool", $c:game.MoveBlock };
game.MoveBlock.setup = { $ofs:5, $t:"bool", $c:game.MoveBlock };
game.Player = function(arg0, arg1, arg2, arg3) {
  this._Idle = (arg0 === undefined ? new ut.Entity : arg0);
  this._Jump = (arg1 === undefined ? new ut.Entity : arg1);
  this._Fall = (arg2 === undefined ? new ut.Entity : arg2);
  this._Hit = (arg3 === undefined ? new ut.Entity : arg3);
};
game.Player.prototype = Object.create(null);
game.Player.prototype.constructor = game.Player;
Object.defineProperties(game.Player.prototype, {
  Idle: {
    get: function() { return this._Idle; },
    set: function(v) { this._Idle = (v === undefined ? new ut.Entity : v); },
  },
  Jump: {
    get: function() { return this._Jump; },
    set: function(v) { this._Jump = (v === undefined ? new ut.Entity : v); },
  },
  Fall: {
    get: function() { return this._Fall; },
    set: function(v) { this._Fall = (v === undefined ? new ut.Entity : v); },
  },
  Hit: {
    get: function() { return this._Hit; },
    set: function(v) { this._Hit = (v === undefined ? new ut.Entity : v); },
  },
});
game.Player._size = 32;
game.Player._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Player.prototype);
  v._Idle = ut.Entity._fromPtr(ptr+0);
  v._Jump = ut.Entity._fromPtr(ptr+8);
  v._Fall = ut.Entity._fromPtr(ptr+16);
  v._Hit = ut.Entity._fromPtr(ptr+24);
  return v;
};
game.Player._toPtr = function(ptr, v) {
  ut.Entity._toPtr(ptr+0, v.Idle);
  ut.Entity._toPtr(ptr+8, v.Jump);
  ut.Entity._toPtr(ptr+16, v.Fall);
  ut.Entity._toPtr(ptr+24, v.Hit);
};
game.Player._toTempHeapPtr = function(ptr, v) {
  ut.Entity._toPtr(ptr+0, v.Idle);
  ut.Entity._toPtr(ptr+8, v.Jump);
  ut.Entity._toPtr(ptr+16, v.Fall);
  ut.Entity._toPtr(ptr+24, v.Hit);
};
game.Player._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(32);
  if (v) game.Player._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Player.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Player.StorageView.prototype = Object.create(null);
game.Player.StorageView.prototype.constructor = game.Player.StorageView;
game.Player._view = game.Player.StorageView;
game.Player.StorageView._isSharedComp = game.Player._isSharedComp = false;
game.Player.StorageView._fromPtr = game.Player._fromPtr;
game.Player.StorageView._toPtr = game.Player._toPtr;
game.Player.StorageView._tempHeapPtr = game.Player._tempHeapPtr;
game.Player.StorageView._size = game.Player._size;
game.Player.StorageView.prototype.$advance = function() {
  this._ptr += 32;
};
Object.defineProperties(game.Player.StorageView.prototype, {
  Idle: {
    get: function() { return ut.Entity._fromPtr(this._ptr+0); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+0, v); },
  },
  Jump: {
    get: function() { return ut.Entity._fromPtr(this._ptr+8); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+8, v); },
  },
  Fall: {
    get: function() { return ut.Entity._fromPtr(this._ptr+16); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+16, v); },
  },
  Hit: {
    get: function() { return ut.Entity._fromPtr(this._ptr+24); },
    set: function(v) { if (typeof(v) !== 'object') { throw new Error('expected an object'); } ut.Entity._toPtr(this._ptr+24, v); },
  },
});
game.Player._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Player is a POD type, so a JavaScript side copy constructor game.Player._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.Player._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.Player', 32, [
    {name: 'Idle', offset: 0, type: ut.meta.getType('ut.Entity')},
    {name: 'Jump', offset: 8, type: ut.meta.getType('ut.Entity')},
    {name: 'Fall', offset: 16, type: ut.meta.getType('ut.Entity')},
    {name: 'Hit', offset: 24, type: ut.meta.getType('ut.Entity')}
  ]);
})();
Object.defineProperties(game.Player, { cid: { configurable: true, get: function() { delete game.Player.cid; var offsetsPtr = ut.tempHeapPtrI32([0,8,16,24]); var offsetsCount = 4; return game.Player.cid = Module._ut_component_register_cid_with_type(game.Player._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.Player.StorageView, { cid: { configurable: true, get: function() { return game.Player.cid; } } });
game.Player.Idle = { $ofs:0, $t:"ut.Entity", $c:game.Player };
game.Player.Idle.index = { $ofs:0, $t:"int32_t", $c:game.Player };
game.Player.Idle.version = { $ofs:4, $t:"int32_t", $c:game.Player };
game.Player.Jump = { $ofs:8, $t:"ut.Entity", $c:game.Player };
game.Player.Jump.index = { $ofs:8, $t:"int32_t", $c:game.Player };
game.Player.Jump.version = { $ofs:12, $t:"int32_t", $c:game.Player };
game.Player.Fall = { $ofs:16, $t:"ut.Entity", $c:game.Player };
game.Player.Fall.index = { $ofs:16, $t:"int32_t", $c:game.Player };
game.Player.Fall.version = { $ofs:20, $t:"int32_t", $c:game.Player };
game.Player.Hit = { $ofs:24, $t:"ut.Entity", $c:game.Player };
game.Player.Hit.index = { $ofs:24, $t:"int32_t", $c:game.Player };
game.Player.Hit.version = { $ofs:28, $t:"int32_t", $c:game.Player };
game.Score = function(arg0) {
  this._Scores = (arg0|0);
};
game.Score.prototype = Object.create(null);
game.Score.prototype.constructor = game.Score;
Object.defineProperties(game.Score.prototype, {
  Scores: {
    get: function() { return this._Scores; },
    set: function(v) { this._Scores = (v|0); },
  },
});
game.Score._size = 4;
game.Score._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Score.prototype);
  v._Scores = HEAP32[(ptr+0)>>2];
  return v;
};
game.Score._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.Scores;
};
game.Score._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.Scores;
};
game.Score._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(4);
  if (v) game.Score._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Score.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Score.StorageView.prototype = Object.create(null);
game.Score.StorageView.prototype.constructor = game.Score.StorageView;
game.Score._view = game.Score.StorageView;
game.Score.StorageView._isSharedComp = game.Score._isSharedComp = false;
game.Score.StorageView._fromPtr = game.Score._fromPtr;
game.Score.StorageView._toPtr = game.Score._toPtr;
game.Score.StorageView._tempHeapPtr = game.Score._tempHeapPtr;
game.Score.StorageView._size = game.Score._size;
game.Score.StorageView.prototype.$advance = function() {
  this._ptr += 4;
};
Object.defineProperties(game.Score.StorageView.prototype, {
  Scores: {
    get: function() { return HEAP32[(this._ptr+0)>>2]; },
    set: function(v) { HEAP32[(this._ptr+0)>>2] = v; },
  },
});
game.Score._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Score is a POD type, so a JavaScript side copy constructor game.Score._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.Score._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.Score', 4, [
    {name: 'Scores', offset: 0, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(game.Score, { cid: { configurable: true, get: function() { delete game.Score.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Score.cid = Module._ut_component_register_cid_with_type(game.Score._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.Score.StorageView, { cid: { configurable: true, get: function() { return game.Score.cid; } } });
game.Score.Scores = { $ofs:0, $t:"int32_t", $c:game.Score };
game.Scroller = function() {
};
game.Scroller.prototype = Object.create(null);
game.Scroller.prototype.constructor = game.Scroller;
Object.defineProperties(game.Scroller.prototype, {
});
game.Scroller._size = 1;
game.Scroller._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Scroller.prototype);
  return v;
};
game.Scroller._toPtr = function(ptr, v) {
};
game.Scroller._toTempHeapPtr = function(ptr, v) {
};
game.Scroller._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) game.Scroller._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Scroller.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Scroller.StorageView.prototype = Object.create(null);
game.Scroller.StorageView.prototype.constructor = game.Scroller.StorageView;
game.Scroller._view = game.Scroller.StorageView;
game.Scroller.StorageView._isSharedComp = game.Scroller._isSharedComp = false;
game.Scroller.StorageView._fromPtr = game.Scroller._fromPtr;
game.Scroller.StorageView._toPtr = game.Scroller._toPtr;
game.Scroller.StorageView._tempHeapPtr = game.Scroller._tempHeapPtr;
game.Scroller.StorageView._size = game.Scroller._size;
game.Scroller.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(game.Scroller.StorageView.prototype, {
});
game.Scroller._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Scroller is a POD type, so a JavaScript side copy constructor game.Scroller._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.Scroller._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.Scroller', 1, []);
})();
Object.defineProperties(game.Scroller, { cid: { configurable: true, get: function() { delete game.Scroller.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Scroller.cid = Module._ut_component_register_cid_with_type(game.Scroller._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.Scroller.StorageView, { cid: { configurable: true, get: function() { return game.Scroller.cid; } } });
game.Spawner = function(arg0, arg1) {
  this._isPaused = (arg0 ? true : false);
  this._plusSpeed = (+(arg1===undefined ? 0 : arg1));
};
game.Spawner.prototype = Object.create(null);
game.Spawner.prototype.constructor = game.Spawner;
Object.defineProperties(game.Spawner.prototype, {
  isPaused: {
    get: function() { return this._isPaused; },
    set: function(v) { this._isPaused = (v ? true : false); },
  },
  plusSpeed: {
    get: function() { return this._plusSpeed; },
    set: function(v) { this._plusSpeed = (+(v===undefined ? 0 : v)); },
  },
});
game.Spawner._size = 8;
game.Spawner._fromPtr = function(ptr, v) {
  v = v || Object.create(game.Spawner.prototype);
  v._isPaused = (HEAP8[ptr+0]?true:false);
  v._plusSpeed = HEAPF32[(ptr+4)>>2];
  return v;
};
game.Spawner._toPtr = function(ptr, v) {
  HEAP8[ptr+0] = (v.isPaused)?1:0;
  HEAPF32[(ptr+4)>>2] = v.plusSpeed;
};
game.Spawner._toTempHeapPtr = function(ptr, v) {
  HEAP8[ptr+0] = (v.isPaused)?1:0;
  HEAPF32[(ptr+4)>>2] = v.plusSpeed;
};
game.Spawner._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(8);
  if (v) game.Spawner._toTempHeapPtr(ptr, v);
  return ptr;
};
game.Spawner.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.Spawner.StorageView.prototype = Object.create(null);
game.Spawner.StorageView.prototype.constructor = game.Spawner.StorageView;
game.Spawner._view = game.Spawner.StorageView;
game.Spawner.StorageView._isSharedComp = game.Spawner._isSharedComp = false;
game.Spawner.StorageView._fromPtr = game.Spawner._fromPtr;
game.Spawner.StorageView._toPtr = game.Spawner._toPtr;
game.Spawner.StorageView._tempHeapPtr = game.Spawner._tempHeapPtr;
game.Spawner.StorageView._size = game.Spawner._size;
game.Spawner.StorageView.prototype.$advance = function() {
  this._ptr += 8;
};
Object.defineProperties(game.Spawner.StorageView.prototype, {
  isPaused: {
    get: function() { return (HEAP8[this._ptr+0]?true:false); },
    set: function(v) { HEAP8[this._ptr+0] = (v)?1:0; },
  },
  plusSpeed: {
    get: function() { return HEAPF32[(this._ptr+4)>>2]; },
    set: function(v) { HEAPF32[(this._ptr+4)>>2] = v; },
  },
});
game.Spawner._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.Spawner is a POD type, so a JavaScript side copy constructor game.Spawner._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.Spawner._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.Spawner', 8, [
    {name: 'isPaused', offset: 0, type: ut.meta.getType('bool')},
    {name: 'plusSpeed', offset: 4, type: ut.meta.getType('float')}
  ]);
})();
Object.defineProperties(game.Spawner, { cid: { configurable: true, get: function() { delete game.Spawner.cid; var offsetsPtr = 0, offsetsCount = 0; return game.Spawner.cid = Module._ut_component_register_cid_with_type(game.Spawner._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.Spawner.StorageView, { cid: { configurable: true, get: function() { return game.Spawner.cid; } } });
game.Spawner.isPaused = { $ofs:0, $t:"bool", $c:game.Spawner };
game.Spawner.plusSpeed = { $ofs:4, $t:"float", $c:game.Spawner };
var ut = ut || {};
ut.Core2D = ut.Core2D || {};
ut.Core2D.layers = ut.Core2D.layers || {};
ut.Core2D.layers.Default = function() {
};
ut.Core2D.layers.Default.prototype = Object.create(null);
ut.Core2D.layers.Default.prototype.constructor = ut.Core2D.layers.Default;
Object.defineProperties(ut.Core2D.layers.Default.prototype, {
});
ut.Core2D.layers.Default._size = 1;
ut.Core2D.layers.Default._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.Default.prototype);
  return v;
};
ut.Core2D.layers.Default._toPtr = function(ptr, v) {
};
ut.Core2D.layers.Default._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.Default._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.Default._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.Default.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.Default.StorageView.prototype = Object.create(null);
ut.Core2D.layers.Default.StorageView.prototype.constructor = ut.Core2D.layers.Default.StorageView;
ut.Core2D.layers.Default._view = ut.Core2D.layers.Default.StorageView;
ut.Core2D.layers.Default.StorageView._isSharedComp = ut.Core2D.layers.Default._isSharedComp = false;
ut.Core2D.layers.Default.StorageView._fromPtr = ut.Core2D.layers.Default._fromPtr;
ut.Core2D.layers.Default.StorageView._toPtr = ut.Core2D.layers.Default._toPtr;
ut.Core2D.layers.Default.StorageView._tempHeapPtr = ut.Core2D.layers.Default._tempHeapPtr;
ut.Core2D.layers.Default.StorageView._size = ut.Core2D.layers.Default._size;
ut.Core2D.layers.Default.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.Default.StorageView.prototype, {
});
ut.Core2D.layers.Default._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.Default is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.Default._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.Core2D.layers.Default._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.Default', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.Default, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.Default.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.Default.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.Default._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.Default.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.Default.cid; } } });
ut.Core2D.layers.TransparentFX = function() {
};
ut.Core2D.layers.TransparentFX.prototype = Object.create(null);
ut.Core2D.layers.TransparentFX.prototype.constructor = ut.Core2D.layers.TransparentFX;
Object.defineProperties(ut.Core2D.layers.TransparentFX.prototype, {
});
ut.Core2D.layers.TransparentFX._size = 1;
ut.Core2D.layers.TransparentFX._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.TransparentFX.prototype);
  return v;
};
ut.Core2D.layers.TransparentFX._toPtr = function(ptr, v) {
};
ut.Core2D.layers.TransparentFX._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.TransparentFX._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.TransparentFX._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.TransparentFX.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.TransparentFX.StorageView.prototype = Object.create(null);
ut.Core2D.layers.TransparentFX.StorageView.prototype.constructor = ut.Core2D.layers.TransparentFX.StorageView;
ut.Core2D.layers.TransparentFX._view = ut.Core2D.layers.TransparentFX.StorageView;
ut.Core2D.layers.TransparentFX.StorageView._isSharedComp = ut.Core2D.layers.TransparentFX._isSharedComp = false;
ut.Core2D.layers.TransparentFX.StorageView._fromPtr = ut.Core2D.layers.TransparentFX._fromPtr;
ut.Core2D.layers.TransparentFX.StorageView._toPtr = ut.Core2D.layers.TransparentFX._toPtr;
ut.Core2D.layers.TransparentFX.StorageView._tempHeapPtr = ut.Core2D.layers.TransparentFX._tempHeapPtr;
ut.Core2D.layers.TransparentFX.StorageView._size = ut.Core2D.layers.TransparentFX._size;
ut.Core2D.layers.TransparentFX.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.TransparentFX.StorageView.prototype, {
});
ut.Core2D.layers.TransparentFX._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.TransparentFX is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.TransparentFX._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.Core2D.layers.TransparentFX._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.TransparentFX', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.TransparentFX, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.TransparentFX.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.TransparentFX.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.TransparentFX._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.TransparentFX.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.TransparentFX.cid; } } });
ut.Core2D.layers.IgnoreRaycast = function() {
};
ut.Core2D.layers.IgnoreRaycast.prototype = Object.create(null);
ut.Core2D.layers.IgnoreRaycast.prototype.constructor = ut.Core2D.layers.IgnoreRaycast;
Object.defineProperties(ut.Core2D.layers.IgnoreRaycast.prototype, {
});
ut.Core2D.layers.IgnoreRaycast._size = 1;
ut.Core2D.layers.IgnoreRaycast._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.IgnoreRaycast.prototype);
  return v;
};
ut.Core2D.layers.IgnoreRaycast._toPtr = function(ptr, v) {
};
ut.Core2D.layers.IgnoreRaycast._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.IgnoreRaycast._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.IgnoreRaycast._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.IgnoreRaycast.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.IgnoreRaycast.StorageView.prototype = Object.create(null);
ut.Core2D.layers.IgnoreRaycast.StorageView.prototype.constructor = ut.Core2D.layers.IgnoreRaycast.StorageView;
ut.Core2D.layers.IgnoreRaycast._view = ut.Core2D.layers.IgnoreRaycast.StorageView;
ut.Core2D.layers.IgnoreRaycast.StorageView._isSharedComp = ut.Core2D.layers.IgnoreRaycast._isSharedComp = false;
ut.Core2D.layers.IgnoreRaycast.StorageView._fromPtr = ut.Core2D.layers.IgnoreRaycast._fromPtr;
ut.Core2D.layers.IgnoreRaycast.StorageView._toPtr = ut.Core2D.layers.IgnoreRaycast._toPtr;
ut.Core2D.layers.IgnoreRaycast.StorageView._tempHeapPtr = ut.Core2D.layers.IgnoreRaycast._tempHeapPtr;
ut.Core2D.layers.IgnoreRaycast.StorageView._size = ut.Core2D.layers.IgnoreRaycast._size;
ut.Core2D.layers.IgnoreRaycast.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.IgnoreRaycast.StorageView.prototype, {
});
ut.Core2D.layers.IgnoreRaycast._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.IgnoreRaycast is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.IgnoreRaycast._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.Core2D.layers.IgnoreRaycast._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.IgnoreRaycast', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.IgnoreRaycast, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.IgnoreRaycast.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.IgnoreRaycast.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.IgnoreRaycast._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.IgnoreRaycast.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.IgnoreRaycast.cid; } } });
ut.Core2D.layers.Water = function() {
};
ut.Core2D.layers.Water.prototype = Object.create(null);
ut.Core2D.layers.Water.prototype.constructor = ut.Core2D.layers.Water;
Object.defineProperties(ut.Core2D.layers.Water.prototype, {
});
ut.Core2D.layers.Water._size = 1;
ut.Core2D.layers.Water._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.Water.prototype);
  return v;
};
ut.Core2D.layers.Water._toPtr = function(ptr, v) {
};
ut.Core2D.layers.Water._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.Water._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.Water._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.Water.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.Water.StorageView.prototype = Object.create(null);
ut.Core2D.layers.Water.StorageView.prototype.constructor = ut.Core2D.layers.Water.StorageView;
ut.Core2D.layers.Water._view = ut.Core2D.layers.Water.StorageView;
ut.Core2D.layers.Water.StorageView._isSharedComp = ut.Core2D.layers.Water._isSharedComp = false;
ut.Core2D.layers.Water.StorageView._fromPtr = ut.Core2D.layers.Water._fromPtr;
ut.Core2D.layers.Water.StorageView._toPtr = ut.Core2D.layers.Water._toPtr;
ut.Core2D.layers.Water.StorageView._tempHeapPtr = ut.Core2D.layers.Water._tempHeapPtr;
ut.Core2D.layers.Water.StorageView._size = ut.Core2D.layers.Water._size;
ut.Core2D.layers.Water.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.Water.StorageView.prototype, {
});
ut.Core2D.layers.Water._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.Water is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.Water._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.Core2D.layers.Water._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.Water', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.Water, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.Water.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.Water.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.Water._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.Water.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.Water.cid; } } });
ut.Core2D.layers.UI = function() {
};
ut.Core2D.layers.UI.prototype = Object.create(null);
ut.Core2D.layers.UI.prototype.constructor = ut.Core2D.layers.UI;
Object.defineProperties(ut.Core2D.layers.UI.prototype, {
});
ut.Core2D.layers.UI._size = 1;
ut.Core2D.layers.UI._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.UI.prototype);
  return v;
};
ut.Core2D.layers.UI._toPtr = function(ptr, v) {
};
ut.Core2D.layers.UI._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.UI._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.UI._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.UI.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.UI.StorageView.prototype = Object.create(null);
ut.Core2D.layers.UI.StorageView.prototype.constructor = ut.Core2D.layers.UI.StorageView;
ut.Core2D.layers.UI._view = ut.Core2D.layers.UI.StorageView;
ut.Core2D.layers.UI.StorageView._isSharedComp = ut.Core2D.layers.UI._isSharedComp = false;
ut.Core2D.layers.UI.StorageView._fromPtr = ut.Core2D.layers.UI._fromPtr;
ut.Core2D.layers.UI.StorageView._toPtr = ut.Core2D.layers.UI._toPtr;
ut.Core2D.layers.UI.StorageView._tempHeapPtr = ut.Core2D.layers.UI._tempHeapPtr;
ut.Core2D.layers.UI.StorageView._size = ut.Core2D.layers.UI._size;
ut.Core2D.layers.UI.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.UI.StorageView.prototype, {
});
ut.Core2D.layers.UI._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.UI is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.UI._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.Core2D.layers.UI._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.UI', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.UI, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.UI.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.UI.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.UI._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.UI.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.UI.cid; } } });
ut.Core2D.layers.PostProcessing = function() {
};
ut.Core2D.layers.PostProcessing.prototype = Object.create(null);
ut.Core2D.layers.PostProcessing.prototype.constructor = ut.Core2D.layers.PostProcessing;
Object.defineProperties(ut.Core2D.layers.PostProcessing.prototype, {
});
ut.Core2D.layers.PostProcessing._size = 1;
ut.Core2D.layers.PostProcessing._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.PostProcessing.prototype);
  return v;
};
ut.Core2D.layers.PostProcessing._toPtr = function(ptr, v) {
};
ut.Core2D.layers.PostProcessing._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.PostProcessing._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.PostProcessing._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.PostProcessing.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.PostProcessing.StorageView.prototype = Object.create(null);
ut.Core2D.layers.PostProcessing.StorageView.prototype.constructor = ut.Core2D.layers.PostProcessing.StorageView;
ut.Core2D.layers.PostProcessing._view = ut.Core2D.layers.PostProcessing.StorageView;
ut.Core2D.layers.PostProcessing.StorageView._isSharedComp = ut.Core2D.layers.PostProcessing._isSharedComp = false;
ut.Core2D.layers.PostProcessing.StorageView._fromPtr = ut.Core2D.layers.PostProcessing._fromPtr;
ut.Core2D.layers.PostProcessing.StorageView._toPtr = ut.Core2D.layers.PostProcessing._toPtr;
ut.Core2D.layers.PostProcessing.StorageView._tempHeapPtr = ut.Core2D.layers.PostProcessing._tempHeapPtr;
ut.Core2D.layers.PostProcessing.StorageView._size = ut.Core2D.layers.PostProcessing._size;
ut.Core2D.layers.PostProcessing.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.PostProcessing.StorageView.prototype, {
});
ut.Core2D.layers.PostProcessing._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.PostProcessing is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.PostProcessing._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.Core2D.layers.PostProcessing._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.PostProcessing', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.PostProcessing, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.PostProcessing.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.PostProcessing.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.PostProcessing._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.PostProcessing.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.PostProcessing.cid; } } });
ut.Core2D.layers.Cutscene = function() {
};
ut.Core2D.layers.Cutscene.prototype = Object.create(null);
ut.Core2D.layers.Cutscene.prototype.constructor = ut.Core2D.layers.Cutscene;
Object.defineProperties(ut.Core2D.layers.Cutscene.prototype, {
});
ut.Core2D.layers.Cutscene._size = 1;
ut.Core2D.layers.Cutscene._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.Cutscene.prototype);
  return v;
};
ut.Core2D.layers.Cutscene._toPtr = function(ptr, v) {
};
ut.Core2D.layers.Cutscene._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.Cutscene._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.Cutscene._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.Cutscene.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.Cutscene.StorageView.prototype = Object.create(null);
ut.Core2D.layers.Cutscene.StorageView.prototype.constructor = ut.Core2D.layers.Cutscene.StorageView;
ut.Core2D.layers.Cutscene._view = ut.Core2D.layers.Cutscene.StorageView;
ut.Core2D.layers.Cutscene.StorageView._isSharedComp = ut.Core2D.layers.Cutscene._isSharedComp = false;
ut.Core2D.layers.Cutscene.StorageView._fromPtr = ut.Core2D.layers.Cutscene._fromPtr;
ut.Core2D.layers.Cutscene.StorageView._toPtr = ut.Core2D.layers.Cutscene._toPtr;
ut.Core2D.layers.Cutscene.StorageView._tempHeapPtr = ut.Core2D.layers.Cutscene._tempHeapPtr;
ut.Core2D.layers.Cutscene.StorageView._size = ut.Core2D.layers.Cutscene._size;
ut.Core2D.layers.Cutscene.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.Cutscene.StorageView.prototype, {
});
ut.Core2D.layers.Cutscene._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.Cutscene is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.Cutscene._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.Core2D.layers.Cutscene._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.Cutscene', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.Cutscene, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.Cutscene.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.Cutscene.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.Cutscene._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.Cutscene.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.Cutscene.cid; } } });
ut.Core2D.layers.Share = function() {
};
ut.Core2D.layers.Share.prototype = Object.create(null);
ut.Core2D.layers.Share.prototype.constructor = ut.Core2D.layers.Share;
Object.defineProperties(ut.Core2D.layers.Share.prototype, {
});
ut.Core2D.layers.Share._size = 1;
ut.Core2D.layers.Share._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.Share.prototype);
  return v;
};
ut.Core2D.layers.Share._toPtr = function(ptr, v) {
};
ut.Core2D.layers.Share._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.Share._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.Share._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.Share.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.Share.StorageView.prototype = Object.create(null);
ut.Core2D.layers.Share.StorageView.prototype.constructor = ut.Core2D.layers.Share.StorageView;
ut.Core2D.layers.Share._view = ut.Core2D.layers.Share.StorageView;
ut.Core2D.layers.Share.StorageView._isSharedComp = ut.Core2D.layers.Share._isSharedComp = false;
ut.Core2D.layers.Share.StorageView._fromPtr = ut.Core2D.layers.Share._fromPtr;
ut.Core2D.layers.Share.StorageView._toPtr = ut.Core2D.layers.Share._toPtr;
ut.Core2D.layers.Share.StorageView._tempHeapPtr = ut.Core2D.layers.Share._tempHeapPtr;
ut.Core2D.layers.Share.StorageView._size = ut.Core2D.layers.Share._size;
ut.Core2D.layers.Share.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.Share.StorageView.prototype, {
});
ut.Core2D.layers.Share._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.Share is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.Share._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.Core2D.layers.Share._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.Share', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.Share, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.Share.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.Share.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.Share._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.Share.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.Share.cid; } } });
ut.EditorExtensions = ut.EditorExtensions || {};
ut.EditorExtensions.AssetReferenceAnimationClip = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceAnimationClip.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceAnimationClip.prototype.constructor = ut.EditorExtensions.AssetReferenceAnimationClip;
Object.defineProperties(ut.EditorExtensions.AssetReferenceAnimationClip.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceAnimationClip._size = 24;
ut.EditorExtensions.AssetReferenceAnimationClip._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceAnimationClip.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceAnimationClip._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceAnimationClip._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceAnimationClip._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceAnimationClip._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceAnimationClip.StorageView;
ut.EditorExtensions.AssetReferenceAnimationClip._view = ut.EditorExtensions.AssetReferenceAnimationClip.StorageView;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceAnimationClip._isSharedComp = false;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceAnimationClip._fromPtr;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView._toPtr = ut.EditorExtensions.AssetReferenceAnimationClip._toPtr;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceAnimationClip._tempHeapPtr;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView._size = ut.EditorExtensions.AssetReferenceAnimationClip._size;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceAnimationClip.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceAnimationClip._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceAnimationClip._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceAnimationClip._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceAnimationClip', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceAnimationClip, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceAnimationClip.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceAnimationClip.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceAnimationClip._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceAnimationClip._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceAnimationClip._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceAnimationClip.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceAnimationClip.cid; } } });
ut.EditorExtensions.AssetReferenceAnimationClip.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceAnimationClip };
ut.EditorExtensions.AssetReferenceAnimationClip.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceAnimationClip };
ut.EditorExtensions.AssetReferenceAnimationClip.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceAnimationClip };
ut.EditorExtensions.AssetReferenceAudioClip = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceAudioClip.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceAudioClip.prototype.constructor = ut.EditorExtensions.AssetReferenceAudioClip;
Object.defineProperties(ut.EditorExtensions.AssetReferenceAudioClip.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceAudioClip._size = 24;
ut.EditorExtensions.AssetReferenceAudioClip._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceAudioClip.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceAudioClip._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceAudioClip._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceAudioClip._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceAudioClip._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceAudioClip.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceAudioClip.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceAudioClip.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceAudioClip.StorageView;
ut.EditorExtensions.AssetReferenceAudioClip._view = ut.EditorExtensions.AssetReferenceAudioClip.StorageView;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceAudioClip._isSharedComp = false;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceAudioClip._fromPtr;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView._toPtr = ut.EditorExtensions.AssetReferenceAudioClip._toPtr;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceAudioClip._tempHeapPtr;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView._size = ut.EditorExtensions.AssetReferenceAudioClip._size;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceAudioClip.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceAudioClip._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceAudioClip._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceAudioClip._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceAudioClip', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceAudioClip, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceAudioClip.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceAudioClip.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceAudioClip._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceAudioClip._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceAudioClip._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceAudioClip.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceAudioClip.cid; } } });
ut.EditorExtensions.AssetReferenceAudioClip.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceAudioClip };
ut.EditorExtensions.AssetReferenceAudioClip.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceAudioClip };
ut.EditorExtensions.AssetReferenceAudioClip.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceAudioClip };
ut.EditorExtensions.AssetReferenceSprite = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceSprite.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceSprite.prototype.constructor = ut.EditorExtensions.AssetReferenceSprite;
Object.defineProperties(ut.EditorExtensions.AssetReferenceSprite.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceSprite._size = 24;
ut.EditorExtensions.AssetReferenceSprite._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceSprite.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceSprite._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceSprite._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceSprite._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceSprite._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceSprite.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceSprite.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceSprite.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceSprite.StorageView;
ut.EditorExtensions.AssetReferenceSprite._view = ut.EditorExtensions.AssetReferenceSprite.StorageView;
ut.EditorExtensions.AssetReferenceSprite.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceSprite._isSharedComp = false;
ut.EditorExtensions.AssetReferenceSprite.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceSprite._fromPtr;
ut.EditorExtensions.AssetReferenceSprite.StorageView._toPtr = ut.EditorExtensions.AssetReferenceSprite._toPtr;
ut.EditorExtensions.AssetReferenceSprite.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceSprite._tempHeapPtr;
ut.EditorExtensions.AssetReferenceSprite.StorageView._size = ut.EditorExtensions.AssetReferenceSprite._size;
ut.EditorExtensions.AssetReferenceSprite.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceSprite.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceSprite._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceSprite._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceSprite._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceSprite', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceSprite, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceSprite.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceSprite.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceSprite._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceSprite._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceSprite._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceSprite.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceSprite.cid; } } });
ut.EditorExtensions.AssetReferenceSprite.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceSprite };
ut.EditorExtensions.AssetReferenceSprite.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceSprite };
ut.EditorExtensions.AssetReferenceSprite.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceSprite };
ut.EditorExtensions.AssetReferenceSpriteAtlas = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceSpriteAtlas.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceSpriteAtlas.prototype.constructor = ut.EditorExtensions.AssetReferenceSpriteAtlas;
Object.defineProperties(ut.EditorExtensions.AssetReferenceSpriteAtlas.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceSpriteAtlas._size = 24;
ut.EditorExtensions.AssetReferenceSpriteAtlas._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceSpriteAtlas.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceSpriteAtlas._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceSpriteAtlas._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceSpriteAtlas._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceSpriteAtlas._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView;
ut.EditorExtensions.AssetReferenceSpriteAtlas._view = ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceSpriteAtlas._isSharedComp = false;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceSpriteAtlas._fromPtr;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView._toPtr = ut.EditorExtensions.AssetReferenceSpriteAtlas._toPtr;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceSpriteAtlas._tempHeapPtr;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView._size = ut.EditorExtensions.AssetReferenceSpriteAtlas._size;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceSpriteAtlas._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceSpriteAtlas._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceSpriteAtlas._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceSpriteAtlas', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceSpriteAtlas, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceSpriteAtlas.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceSpriteAtlas.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceSpriteAtlas._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceSpriteAtlas._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceSpriteAtlas._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceSpriteAtlas.cid; } } });
ut.EditorExtensions.AssetReferenceSpriteAtlas.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceSpriteAtlas };
ut.EditorExtensions.AssetReferenceSpriteAtlas.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceSpriteAtlas };
ut.EditorExtensions.AssetReferenceSpriteAtlas.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceSpriteAtlas };
ut.EditorExtensions.AssetReferenceTexture2D = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceTexture2D.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTexture2D.prototype.constructor = ut.EditorExtensions.AssetReferenceTexture2D;
Object.defineProperties(ut.EditorExtensions.AssetReferenceTexture2D.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceTexture2D._size = 24;
ut.EditorExtensions.AssetReferenceTexture2D._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceTexture2D.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceTexture2D._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTexture2D._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTexture2D._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceTexture2D._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceTexture2D.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceTexture2D.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTexture2D.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceTexture2D.StorageView;
ut.EditorExtensions.AssetReferenceTexture2D._view = ut.EditorExtensions.AssetReferenceTexture2D.StorageView;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceTexture2D._isSharedComp = false;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceTexture2D._fromPtr;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView._toPtr = ut.EditorExtensions.AssetReferenceTexture2D._toPtr;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceTexture2D._tempHeapPtr;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView._size = ut.EditorExtensions.AssetReferenceTexture2D._size;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceTexture2D.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceTexture2D._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceTexture2D._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceTexture2D._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceTexture2D', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceTexture2D, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceTexture2D.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceTexture2D.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceTexture2D._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceTexture2D._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceTexture2D._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceTexture2D.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceTexture2D.cid; } } });
ut.EditorExtensions.AssetReferenceTexture2D.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceTexture2D };
ut.EditorExtensions.AssetReferenceTexture2D.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceTexture2D };
ut.EditorExtensions.AssetReferenceTexture2D.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceTexture2D };
ut.EditorExtensions.AssetReferenceTileBase = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceTileBase.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTileBase.prototype.constructor = ut.EditorExtensions.AssetReferenceTileBase;
Object.defineProperties(ut.EditorExtensions.AssetReferenceTileBase.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceTileBase._size = 24;
ut.EditorExtensions.AssetReferenceTileBase._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceTileBase.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceTileBase._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTileBase._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTileBase._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceTileBase._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceTileBase.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceTileBase.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTileBase.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceTileBase.StorageView;
ut.EditorExtensions.AssetReferenceTileBase._view = ut.EditorExtensions.AssetReferenceTileBase.StorageView;
ut.EditorExtensions.AssetReferenceTileBase.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceTileBase._isSharedComp = false;
ut.EditorExtensions.AssetReferenceTileBase.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceTileBase._fromPtr;
ut.EditorExtensions.AssetReferenceTileBase.StorageView._toPtr = ut.EditorExtensions.AssetReferenceTileBase._toPtr;
ut.EditorExtensions.AssetReferenceTileBase.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceTileBase._tempHeapPtr;
ut.EditorExtensions.AssetReferenceTileBase.StorageView._size = ut.EditorExtensions.AssetReferenceTileBase._size;
ut.EditorExtensions.AssetReferenceTileBase.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceTileBase.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceTileBase._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceTileBase._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceTileBase._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceTileBase', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceTileBase, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceTileBase.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceTileBase.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceTileBase._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceTileBase._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceTileBase._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceTileBase.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceTileBase.cid; } } });
ut.EditorExtensions.AssetReferenceTileBase.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceTileBase };
ut.EditorExtensions.AssetReferenceTileBase.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceTileBase };
ut.EditorExtensions.AssetReferenceTileBase.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceTileBase };
ut.EditorExtensions.AssetReferenceTMP_FontAsset = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTMP_FontAsset.prototype.constructor = ut.EditorExtensions.AssetReferenceTMP_FontAsset;
Object.defineProperties(ut.EditorExtensions.AssetReferenceTMP_FontAsset.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceTMP_FontAsset._size = 24;
ut.EditorExtensions.AssetReferenceTMP_FontAsset._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceTMP_FontAsset.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceTMP_FontAsset._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView;
ut.EditorExtensions.AssetReferenceTMP_FontAsset._view = ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceTMP_FontAsset._isSharedComp = false;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceTMP_FontAsset._fromPtr;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView._toPtr = ut.EditorExtensions.AssetReferenceTMP_FontAsset._toPtr;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceTMP_FontAsset._tempHeapPtr;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView._size = ut.EditorExtensions.AssetReferenceTMP_FontAsset._size;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceTMP_FontAsset._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceTMP_FontAsset', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceTMP_FontAsset, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceTMP_FontAsset.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceTMP_FontAsset.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceTMP_FontAsset._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceTMP_FontAsset._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceTMP_FontAsset._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceTMP_FontAsset.cid; } } });
ut.EditorExtensions.AssetReferenceTMP_FontAsset.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceTMP_FontAsset };
ut.EditorExtensions.AssetReferenceTMP_FontAsset.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceTMP_FontAsset };
ut.EditorExtensions.AssetReferenceTMP_FontAsset.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceTMP_FontAsset };
ut.EditorExtensions.CameraCullingMask = function(arg0) {
  this._mask = (arg0|0);
};
ut.EditorExtensions.CameraCullingMask.prototype = Object.create(null);
ut.EditorExtensions.CameraCullingMask.prototype.constructor = ut.EditorExtensions.CameraCullingMask;
Object.defineProperties(ut.EditorExtensions.CameraCullingMask.prototype, {
  mask: {
    get: function() { return this._mask; },
    set: function(v) { this._mask = (v|0); },
  },
});
ut.EditorExtensions.CameraCullingMask._size = 4;
ut.EditorExtensions.CameraCullingMask._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.CameraCullingMask.prototype);
  v._mask = HEAP32[(ptr+0)>>2];
  return v;
};
ut.EditorExtensions.CameraCullingMask._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.mask;
};
ut.EditorExtensions.CameraCullingMask._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.mask;
};
ut.EditorExtensions.CameraCullingMask._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(4);
  if (v) ut.EditorExtensions.CameraCullingMask._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.CameraCullingMask.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.CameraCullingMask.StorageView.prototype = Object.create(null);
ut.EditorExtensions.CameraCullingMask.StorageView.prototype.constructor = ut.EditorExtensions.CameraCullingMask.StorageView;
ut.EditorExtensions.CameraCullingMask._view = ut.EditorExtensions.CameraCullingMask.StorageView;
ut.EditorExtensions.CameraCullingMask.StorageView._isSharedComp = ut.EditorExtensions.CameraCullingMask._isSharedComp = false;
ut.EditorExtensions.CameraCullingMask.StorageView._fromPtr = ut.EditorExtensions.CameraCullingMask._fromPtr;
ut.EditorExtensions.CameraCullingMask.StorageView._toPtr = ut.EditorExtensions.CameraCullingMask._toPtr;
ut.EditorExtensions.CameraCullingMask.StorageView._tempHeapPtr = ut.EditorExtensions.CameraCullingMask._tempHeapPtr;
ut.EditorExtensions.CameraCullingMask.StorageView._size = ut.EditorExtensions.CameraCullingMask._size;
ut.EditorExtensions.CameraCullingMask.StorageView.prototype.$advance = function() {
  this._ptr += 4;
};
Object.defineProperties(ut.EditorExtensions.CameraCullingMask.StorageView.prototype, {
  mask: {
    get: function() { return HEAP32[(this._ptr+0)>>2]; },
    set: function(v) { HEAP32[(this._ptr+0)>>2] = v; },
  },
});
ut.EditorExtensions.CameraCullingMask._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.EditorExtensions.CameraCullingMask is a POD type, so a JavaScript side copy constructor ut.EditorExtensions.CameraCullingMask._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.EditorExtensions.CameraCullingMask._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.CameraCullingMask', 4, [
    {name: 'mask', offset: 0, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.CameraCullingMask, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.CameraCullingMask.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.CameraCullingMask.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.CameraCullingMask._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.EditorExtensions.CameraCullingMask.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.CameraCullingMask.cid; } } });
ut.EditorExtensions.CameraCullingMask.mask = { $ofs:0, $t:"int32_t", $c:ut.EditorExtensions.CameraCullingMask };
ut.EditorExtensions.EntityLayer = function(arg0) {
  this._layer = (arg0|0);
};
ut.EditorExtensions.EntityLayer.prototype = Object.create(null);
ut.EditorExtensions.EntityLayer.prototype.constructor = ut.EditorExtensions.EntityLayer;
Object.defineProperties(ut.EditorExtensions.EntityLayer.prototype, {
  layer: {
    get: function() { return this._layer; },
    set: function(v) { this._layer = (v|0); },
  },
});
ut.EditorExtensions.EntityLayer._size = 4;
ut.EditorExtensions.EntityLayer._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.EntityLayer.prototype);
  v._layer = HEAP32[(ptr+0)>>2];
  return v;
};
ut.EditorExtensions.EntityLayer._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.layer;
};
ut.EditorExtensions.EntityLayer._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.layer;
};
ut.EditorExtensions.EntityLayer._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(4);
  if (v) ut.EditorExtensions.EntityLayer._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.EntityLayer.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.EntityLayer.StorageView.prototype = Object.create(null);
ut.EditorExtensions.EntityLayer.StorageView.prototype.constructor = ut.EditorExtensions.EntityLayer.StorageView;
ut.EditorExtensions.EntityLayer._view = ut.EditorExtensions.EntityLayer.StorageView;
ut.EditorExtensions.EntityLayer.StorageView._isSharedComp = ut.EditorExtensions.EntityLayer._isSharedComp = false;
ut.EditorExtensions.EntityLayer.StorageView._fromPtr = ut.EditorExtensions.EntityLayer._fromPtr;
ut.EditorExtensions.EntityLayer.StorageView._toPtr = ut.EditorExtensions.EntityLayer._toPtr;
ut.EditorExtensions.EntityLayer.StorageView._tempHeapPtr = ut.EditorExtensions.EntityLayer._tempHeapPtr;
ut.EditorExtensions.EntityLayer.StorageView._size = ut.EditorExtensions.EntityLayer._size;
ut.EditorExtensions.EntityLayer.StorageView.prototype.$advance = function() {
  this._ptr += 4;
};
Object.defineProperties(ut.EditorExtensions.EntityLayer.StorageView.prototype, {
  layer: {
    get: function() { return HEAP32[(this._ptr+0)>>2]; },
    set: function(v) { HEAP32[(this._ptr+0)>>2] = v; },
  },
});
ut.EditorExtensions.EntityLayer._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.EditorExtensions.EntityLayer is a POD type, so a JavaScript side copy constructor ut.EditorExtensions.EntityLayer._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.EditorExtensions.EntityLayer._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.EntityLayer', 4, [
    {name: 'layer', offset: 0, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.EntityLayer, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.EntityLayer.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.EntityLayer.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.EntityLayer._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.EditorExtensions.EntityLayer.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.EntityLayer.cid; } } });
ut.EditorExtensions.EntityLayer.layer = { $ofs:0, $t:"int32_t", $c:ut.EditorExtensions.EntityLayer };
game.BlockMovementJS = ut.System.define({
  name: "game.BlockMovementJS"
});
game.CanvasInputSystemJS = ut.System.define({
  name: "game.CanvasInputSystemJS"
});
game.PlayerCollisionSystemJS = ut.System.define({
  name: "game.PlayerCollisionSystemJS"
});
game.PlayerInputJS = ut.System.define({
  name: "game.PlayerInputJS"
});
game.ScoreSystemJS = ut.System.define({
  name: "game.ScoreSystemJS"
});
game.SpawnerSystemsJS = ut.System.define({
  name: "game.SpawnerSystemsJS"
});




((function (ut) {

    var ComponentSystem = /** @class */ (function () {
        
        function ComponentSystem() {}

        ComponentSystem.prototype._MakeSystemFn = function () {
            var _this = this;
            return function (scheduler, world) {
                _this.scheduler = scheduler;
                _this.world = world;
                _this.OnUpdate();
            };
        };
        return ComponentSystem;
    }());
    ut.ComponentSystem = ComponentSystem;

    function executeAfter() { }
    ut.executeAfter = executeAfter;

    function executeBefore() { }
    ut.executeBefore = executeBefore;

    function requiredComponents() { }
    ut.requiredComponents = requiredComponents;

    function optionalComponents() { }
    ut.optionalComponents = optionalComponents;

    var EntityFilter = /** @class */ (function () {
        function EntityFilter() {}
        EntityFilter.prototype.Read = function (world, entity) {};
        EntityFilter.prototype.Reset = function () {};
        EntityFilter.prototype.ForEach = function (world, callback) {
            var _this = this;
            world.forEach(this.constructor._Components, function(entity) {
                _this.Read(world, entity);
                callback(entity);
                if (world.exists(entity)) {
                    _this.Write(world, entity);
                }
            });
        };
        return EntityFilter;
    }());
    ut.EntityFilter = EntityFilter;

    function usingFilters() { }
    ut.usingFilters = usingFilters;

    var ComponentBehaviour = /** @class */ (function () {
        function ComponentBehaviour() { }
        ComponentBehaviour.prototype.IsEnabled = function (world, entity) {
            var stateType = this.constructor._StateType;
            return world.hasComponent(entity, stateType) && world.getComponentData(entity, stateType).enabled;
        };
        ComponentBehaviour.prototype.Enable = function (world, entity) {
            var stateType = this.constructor._StateType;
            var hasState = world.hasComponent(entity, stateType);
            var state = hasState ? world.getComponentData(entity, stateType) : new stateType;
            if (!state.enabled) {
                state.enabled = true;
                state.onEnableCalled = false;
                state.onDisableCalled = false;
                if (hasState) {
                    world.setComponentData(entity, state);
                } else {
                    world.addComponentData(entity, state);
                }
            }
        };
        ComponentBehaviour.prototype.Disable = function (world, entity) {
            var stateType = this.constructor._StateType;
            var hasState = world.hasComponent(entity, stateType);
            var state = hasState ? world.getComponentData(entity, stateType) : new stateType;
            if (state.enabled) {
                state.enabled = false;
                state.onEnableCalled = false;
                state.onDisableCalled = false;
                if (hasState) {
                    world.setComponentData(entity, state);
                } else {
                    world.addComponentData(entity, state);
                }
            }
        };
        ComponentBehaviour.prototype._MakeOnEntityEnable = function () {
            var _this = this;
            var _stateType = this.constructor._StateType;
            return function (scheduler, world) {
                var _filter = _this._GetFilter();
                _this.scheduler = scheduler;
                _this.world = world;
                _filter.ForEach(_this.world, function(entity) {
                    var hasState = _this.world.hasComponent(entity, _stateType);
                    var state = hasState ? _this.world.getComponentData(entity, _stateType) : new _stateType;
                    if (!hasState || !state.initialized) {
                        state.enabled = true;
                        state.initialized = true;
                    }
                    try {
                        if (!state.onEnableCalled && state.enabled) {
                            state.onEnableCalled = true;
                            _this.entity = entity;
                            _this.OnEntityEnable();
                        }
                    } finally {
                        if (_this.world.exists(entity)) {
                            if (hasState) {
                                _this.world.setComponentData(entity, state);
                            } else {
                                _this.world.addComponentData(entity, state);
                            }
                        }
                    }
                });
                _filter.Reset();
            };
        };
        ComponentBehaviour.prototype._MakeOnEntityUpdate = function () {
            var _this = this;
            var _stateType = this.constructor._StateType;
            return function (scheduler, world) {
                var _filter = _this._GetFilter();
                _this.scheduler = scheduler;
                _this.world = world;
                _filter.ForEach(_this.world, function(entity) {
                    var hasState = _this.world.hasComponent(entity, _stateType);
                    var state = hasState ? _this.world.getComponentData(entity, _stateType) : new _stateType;
                    if (!hasState || !state.initialized) {
                        state.enabled = true;
                        state.initialized = true;
                        if (hasState) {
                            _this.world.setComponentData(entity, state);
                        } else {
                            _this.world.addComponentData(entity, state);
                        }
                    }
                    if (state.enabled) {
                        _this.entity = entity;
                        _this.OnEntityUpdate();
                    }
                });
                _filter.Reset();
            };
        };
        ComponentBehaviour.prototype._MakeOnEntityDisable = function () {
            var _this = this;
            var _stateType = this.constructor._StateType;
            return function (scheduler, world) {
                var _filter = _this._GetFilter();
                _this.scheduler = scheduler;
                _this.world = world;
                _filter.ForEach(_this.world, function(entity) {
                    var hasState = _this.world.hasComponent(entity, _stateType);
                    var state = hasState ? _this.world.getComponentData(entity, _stateType) : new _stateType;
                    if (!hasState || !state.initialized) {
                        state.enabled = true;
                        state.initialized = true;
                    }
                    try {
                        if (!state.onDisableCalled && !state.enabled) {
                            state.onDisableCalled = true;
                            _this.entity = entity;
                            _this.OnEntityDisable();
                        }
                    } finally {
                        if (_this.world.exists(entity)) {
                            if (hasState) {
                                _this.world.setComponentData(entity, state);
                            } else {
                                _this.world.addComponentData(entity, state);
                            }
                        }
                    }
                });
                _filter.Reset();
            };
        };
        return ComponentBehaviour;
    }());
    ut.ComponentBehaviour = ComponentBehaviour;


})(ut || (ut = {})));
