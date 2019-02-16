var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var game;
(function (game) {
    /** New System */
    var BlockMovement = /** @class */ (function (_super) {
        __extends(BlockMovement, _super);
        function BlockMovement() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BlockMovement.prototype.OnUpdate = function () {
            var _this = this;
            this.world.forEach([ut.Core2D.Sprite2DRenderer, ut.Core2D.TransformLocalPosition, game.MoveBlock], function (sprite, transform, block) {
                if (block.setup && block.move) {
                    var y_change = void 0;
                    var speed_change_1;
                    _this.world.forEach([ut.Entity, game.Spawner], function (entity, objSpawner) {
                        speed_change_1 = objSpawner.plusSpeed;
                    });
                    var n_speed = block.blockSpeed + getRandom(0.75, speed_change_1);
                    var color = new ut.Core2D.Color(1, getRandom(1, 255) / 255, getRandom(1, 255) / getRandom(1, 255), 1);
                    block.blockSpeed = n_speed;
                    sprite.color = color;
                    var randomX = getRandom(-1, 1);
                    var n_pos = new Vector3((randomX > 0) ? 6 : -6, 1 + 0.05, 0);
                    transform.position = n_pos;
                    block.setup = false;
                }
                if (!block.move)
                    return;
                var localPosition = transform.position;
                if (Math.abs(localPosition.x) > 0.05) {
                    if (localPosition.x > 0) {
                        localPosition.x -= block.blockSpeed * _this.scheduler.deltaTime();
                    }
                    else {
                        localPosition.x += block.blockSpeed * _this.scheduler.deltaTime();
                    }
                    transform.position = localPosition;
                }
                else {
                    if (block.move)
                        console.log("End");
                    block.move = false;
                }
            });
        };
        return BlockMovement;
    }(ut.ComponentSystem));
    game.BlockMovement = BlockMovement;
    function getRandom(min, max) {
        return Math.random() * (max - min + 1) + min;
    }
})(game || (game = {}));
var game;
(function (game) {
    /** New System */
    var PlayerCollisionSystem = /** @class */ (function (_super) {
        __extends(PlayerCollisionSystem, _super);
        function PlayerCollisionSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PlayerCollisionSystem.prototype.OnUpdate = function () {
            var _this = this;
            this.world.forEach([ut.Entity, ut.Physics2D.ColliderContacts, ut.Core2D.Sprite2DRenderer, game.InputSystem], function (entity, contact, sprite, player) {
                var contacts = contact.contacts;
                if (contacts.length > 0) {
                    if (_this.world.hasComponent(contacts[0], game.MoveBlock)) {
                        var comp = _this.world.getComponentData(contacts[0], game.MoveBlock);
                        if (comp.move) {
                            console.log("Good");
                            comp.move = false;
                            _this.world.setComponentData(contacts[0], comp);
                            _this.world.forEach([ut.Entity, game.Spawner], function (entity, spawner) {
                                spawner.isPaused = false;
                                if (spawner.plusSpeed < 2.5)
                                    spawner.plusSpeed += 0.25;
                                _this.world.setComponentData(entity, spawner);
                            });
                            _this.world.forEach([ut.Core2D.TransformLocalPosition, game.Scroller], function (transform, scroller) {
                                var currentPosition = transform.position;
                                currentPosition.y--;
                                transform.position = currentPosition;
                            });
                            game.ScoreSystem.AddScore(_this.world);
                        }
                    }
                    if (_this.world.hasComponent(contacts[0], game.Ground) && !player.grounded) {
                        console.log("On block!");
                        player.grounded = true;
                    }
                    if (_this.world.hasComponent(contacts[0], game.Block) && !player.hit) {
                        player.hit = true;
                    }
                    if (contacts.length > 1) {
                        if (_this.world.hasComponent(contacts[1], game.Block) && !player.hit) {
                            player.hit = true;
                        }
                    }
                }
                else {
                    player.grounded = false;
                }
                if (player.hit) {
                    var color = new ut.Core2D.Color(175, 0, 0, 1);
                    sprite.color = color;
                    _this.world.setComponentData(entity, sprite);
                    _this.world.forEach([ut.Entity, game.Spawner], function (entity, spawner) {
                        spawner.isPaused = true;
                        _this.world.setComponentData(entity, spawner);
                    });
                    _this.world.forEach([game.MoveBlock], function (blocks) {
                        blocks.move = false;
                    });
                }
            });
        };
        return PlayerCollisionSystem;
    }(ut.ComponentSystem));
    game.PlayerCollisionSystem = PlayerCollisionSystem;
})(game || (game = {}));
var game;
(function (game) {
    /** New System */
    var PlayerInput = /** @class */ (function (_super) {
        __extends(PlayerInput, _super);
        function PlayerInput() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PlayerInput.prototype.OnUpdate = function () {
            var _this = this;
            this.world.forEach([ut.Entity, ut.Physics2D.RigidBody2D, game.InputSystem], function (entity, rb, player) {
                if ((ut.Core2D.Input.getMouseButtonDown(0) || ut.Core2D.Input.touchCount.length > 0) && player.grounded && !player.hit) {
                    var impuls = new ut.Physics2D.AddImpulse2D();
                    impuls.impulse = new Vector2(0, player.jumpForce);
                    _this.world.addComponentData(entity, impuls);
                    console.log("jump!");
                }
                if (player.hit) {
                    console.log("HIIIIT");
                    rb.bodyType = ut.Physics2D.BodyType.Kinematic;
                    _this.world.setComponentData(entity, rb);
                }
            });
        };
        return PlayerInput;
    }(ut.ComponentSystem));
    game.PlayerInput = PlayerInput;
})(game || (game = {}));
var game;
(function (game) {
    /** New System */
    var ScoreSystem = /** @class */ (function (_super) {
        __extends(ScoreSystem, _super);
        function ScoreSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ScoreSystem.prototype.OnUpdate = function () {
            if (game.ScoreSystem.scoreEntity == null) {
                this.world.forEach([ut.Entity, game.Score], function (entity, score) {
                    game.ScoreSystem.scoreEntity = new ut.Entity(entity.index, entity.version);
                });
            }
        };
        ScoreSystem.AddScore = function (world) {
            world.usingComponentData(this.scoreEntity, [ut.Text.Text2DRenderer, game.Score], function (text, score) {
                score.Scores++;
                text.text = score.Scores.toString();
            });
        };
        ScoreSystem.scoreEntity = null;
        return ScoreSystem;
    }(ut.ComponentSystem));
    game.ScoreSystem = ScoreSystem;
})(game || (game = {}));
var game;
(function (game) {
    /** New System */
    var SpawnerSystems = /** @class */ (function (_super) {
        __extends(SpawnerSystems, _super);
        function SpawnerSystems() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SpawnerSystems.prototype.OnUpdate = function () {
            var _this = this;
            this.world.forEach([game.Spawner], function (spawner) {
                if (spawner.isPaused)
                    return;
                console.log("Spawn!");
                ut.EntityGroup.instantiate(_this.world, 'game.BlocksGroup')[0];
                spawner.isPaused = true;
            });
        };
        return SpawnerSystems;
    }(ut.ComponentSystem));
    game.SpawnerSystems = SpawnerSystems;
})(game || (game = {}));
var ut;
(function (ut) {
    var EntityGroup = /** @class */ (function () {
        function EntityGroup() {
        }
        /**
         * @method
         * @desc Creates a new instance of the given entity group by name and returns all entities
         * @param {ut.World} world - The world to add to
         * @param {string} name - The fully qualified name of the entity group
         * @returns Flat list of all created entities
         */
        EntityGroup.instantiate = function (world, name) {
            var data = this.getEntityGroupData(name);
            if (data == undefined)
                throw "ut.EntityGroup.instantiate: No 'EntityGroup' was found with the name '" + name + "'";
            return data.load(world);
        };
        ;
        /**
         * @method
         * @desc Destroys all entities that were instantated with the given group name
         * @param {ut.World} world - The world to destroy from
         * @param {string} name - The fully qualified name of the entity group
         */
        EntityGroup.destroyAll = function (world, name) {
            var type = this.getEntityGroupData(name).Component;
            world.forEach([ut.Entity, type], function (entity, instance) {
                // @TODO This should REALLY not be necessary
                // We are protecting against duplicate calls to `destroyAllEntityGroups` within an iteration
                if (world.exists(entity)) {
                    world.destroyEntity(entity);
                }
            });
        };
        /**
         * @method
         * @desc Returns an entity group object by name
         * @param {string} name - Fully qualified group name
         */
        EntityGroup.getEntityGroupData = function (name) {
            var parts = name.split('.');
            if (parts.length < 2)
                throw "ut.Streaming.StreamingService.getEntityGroupData: name entry is invalid";
            var shiftedParts = parts.shift();
            var initialData = entities[shiftedParts];
            if (initialData == undefined)
                throw "ut.Streaming.StreamingService.getEntityGroupData: name entry is invalid";
            return parts.reduce(function (v, p) {
                return v[p];
            }, initialData);
        };
        return EntityGroup;
    }());
    ut.EntityGroup = EntityGroup;
})(ut || (ut = {}));
var ut;
(function (ut) {
    var EntityLookupCache = /** @class */ (function () {
        function EntityLookupCache() {
        }
        EntityLookupCache.getByName = function (world, name) {
            var entity;
            if (name in this._cache) {
                entity = this._cache[name];
                if (world.exists(entity))
                    return entity;
            }
            entity = world.getEntityByName(name);
            this._cache[name] = entity;
            return entity;
        };
        EntityLookupCache._cache = {};
        return EntityLookupCache;
    }());
    ut.EntityLookupCache = EntityLookupCache;
})(ut || (ut = {}));
//# sourceMappingURL=tsc-emit.js.map