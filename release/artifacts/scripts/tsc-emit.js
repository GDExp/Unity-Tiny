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
                    var speed_change_1;
                    _this.world.forEach([game.Spawner], function (objSpawner) {
                        speed_change_1 = objSpawner.plusSpeed;
                    });
                    var n_speed = block.blockSpeed + getRandom(speed_change_1 * 0.75, speed_change_1);
                    var color = new ut.Core2D.Color(getRandom(0.1, 1), getRandom(0.1, 1), getRandom(0.1, 1), 1);
                    block.blockSpeed = n_speed;
                    sprite.color = color;
                    var randomX = getRandom(-1, 1);
                    var n_pos = new Vector3((randomX > 0) ? 8 : -8, -7, 0);
                    transform.position = n_pos;
                    block.setup = false;
                }
                if (block.blockSpeed == 0 || !block.move)
                    return;
                var localPosition = transform.position;
                if (Math.abs(localPosition.x) > 0.1) {
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
                        block.blockSpeed = 0;
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
    var CanvasInputSystem = /** @class */ (function (_super) {
        __extends(CanvasInputSystem, _super);
        function CanvasInputSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CanvasInputSystem.prototype.OnUpdate = function () {
            var _this = this;
            this.world.forEach([game.ButtonInfo, ut.UIControls.MouseInteraction], function (button, mInteraction) {
                if (mInteraction.clicked) {
                    newGame(_this.world, button.menuState);
                }
            });
        };
        CanvasInputSystem.mainScene = "game.MainScene";
        CanvasInputSystem.scores = "game.GameUI";
        CanvasInputSystem.blocks = "game.BlocksGroup";
        CanvasInputSystem.share = false;
        return CanvasInputSystem;
    }(ut.ComponentSystem));
    game.CanvasInputSystem = CanvasInputSystem;
    function newGame(world, state) {
        switch (state) {
            case (1): //close main menu
                ut.EntityGroup.destroyAll(world, 'game.MainMenu');
                newGame(world, 0);
                break;
            case (2): // restart
                ut.EntityGroup.destroyAll(world, 'game.BlocksGroup');
                ut.EntityGroup.destroyAll(world, 'game.GameUI');
                ut.EntityGroup.destroyAll(world, 'game.GameOver');
                ut.EntityGroup.destroyAll(world, 'game.MainScene');
                game.SpawnerSystems.spawner = null;
                game.ScoreSystem.scoreEntity = null;
                newGame(world, 0);
                break;
            case (3): //share
                if (!this.share) {
                    this.share = true;
                    ut.EntityGroup.destroyAll(world, 'game.GameOver');
                    ut.EntityGroup.instantiate(world, 'game.Share');
                }
                else {
                    this.share = false;
                    ut.EntityGroup.destroyAll(world, 'game.Share');
                    ut.EntityGroup.instantiate(world, 'game.GameOver');
                }
                break;
            default: //new game
                ut.EntityGroup.instantiate(world, 'game.MainScene');
                ut.EntityGroup.instantiate(world, 'game.GameUI');
                break;
        }
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
            this.world.forEach([ut.Physics2D.ColliderContacts, game.InputSystem, game.Player], function (contact, player, anim) {
                var contacts = contact.contacts;
                if (contacts.length > 0) {
                    player.jump = false;
                    if (_this.world.hasComponent(contacts[0], game.MoveBlock)) {
                        var comp = _this.world.getComponentData(contacts[0], game.MoveBlock);
                        if (comp.move) {
                            comp.move = false;
                            _this.world.setComponentData(contacts[0], comp);
                            _this.world.forEach([ut.Core2D.TransformLocalPosition, game.Scroller], function (transform) {
                                var currentPosition = transform.position;
                                currentPosition.y -= 1.05;
                                transform.position = currentPosition;
                            });
                            game.ScoreSystem.AddScore(_this.world, 1);
                            game.SpawnerSystems.BlockSpawn(_this.world);
                            game.PlayerInput.ChangeCurrentAnimation(_this.world, anim, 0);
                        }
                    }
                    if (_this.world.hasComponent(contacts[0], game.Ground) && !player.grounded) {
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
                    player.jump = true;
                }
                if (player.hit) {
                    ;
                    game.PlayerInput.ChangeCurrentAnimation(_this.world, anim, 3);
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
            this.world.forEach([ut.Entity, ut.Physics2D.Velocity2D, game.InputSystem, game.Player], function (entity, currentVelocity, player, animator) {
                if ((ut.Core2D.Input.getMouseButtonDown(0) || ut.Core2D.Input.touchCount.length > 0) && player.grounded && !player.hit) {
                    player.jump = true;
                    _this.world.usingComponentData(entity, [ut.Physics2D.SetVelocity2D], function (velocity) {
                        ChangeVelocity(velocity, player.jumpForce, 0);
                    });
                    PlayerInput.ChangeCurrentAnimation(_this.world, animator, 1);
                }
                if (player.hit && !player.gameOver) {
                    player.hit = false;
                    player.gameOver = true;
                    //экран проигрыша игрока = рестар
                    PlayerInput.ChangeCurrentAnimation(_this.world, animator, 0);
                    ut.EntityGroup.instantiate(_this.world, 'game.GameOver');
                }
                if (player.jump && currentVelocity.velocity.y < 0) {
                    _this.world.usingComponentData(entity, [ut.Physics2D.SetVelocity2D], function (velocity) {
                        ChangeVelocity(velocity, player.jumpForce, 1);
                    });
                    player.jump = false;
                    PlayerInput.ChangeCurrentAnimation(_this.world, animator, 2);
                }
            });
        };
        PlayerInput.ChangeCurrentAnimation = function (world, anim, state) {
            switch (state) {
                case (1): //jump
                    setEntityEnabled(world, anim.Idle, false);
                    setEntityEnabled(world, anim.Jump, true);
                    break;
                case (2): //fall
                    setEntityEnabled(world, anim.Fall, true);
                    setEntityEnabled(world, anim.Jump, false);
                    break;
                case (3): //hit
                    setEntityEnabled(world, anim.Hit, true);
                    this.ChangeCurrentAnimation(world, anim, 0);
                default: //def
                    setEntityEnabled(world, anim.Idle, true);
                    setEntityEnabled(world, anim.Jump, false);
                    setEntityEnabled(world, anim.Fall, false);
                    break;
            }
        };
        return PlayerInput;
    }(ut.ComponentSystem));
    game.PlayerInput = PlayerInput;
    function ChangeVelocity(velocity, force, c) {
        var vector;
        switch (c) {
            case (1):
                vector = new Vector2(0, -1.5 * force);
                break;
            default:
                vector = new Vector2(0, force);
                break;
        }
        velocity.velocity = vector;
    }
    function setEntityEnabled(world, entity, enabled) {
        var hasDisabledComponent = world.hasComponent(entity, ut.Disabled);
        if (enabled && hasDisabledComponent) {
            world.removeComponent(entity, ut.Disabled);
        }
        else if (!enabled && !hasDisabledComponent) {
            world.addComponent(entity, ut.Disabled);
        }
        world.usingComponentData(entity, [ut.Core2D.Sprite2DSequencePlayer], function (sPlayer) { return sPlayer.time = 0; });
    }
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
            var _this = this;
            if (game.ScoreSystem.scoreEntity == null) {
                this.world.forEach([ut.Entity, game.Score], function (entity, score) {
                    game.ScoreSystem.scoreEntity = new ut.Entity(entity.index, entity.version);
                    ScoreSystem.AddScore(_this.world, 0);
                });
            }
        };
        ScoreSystem.AddScore = function (world, state) {
            world.usingComponentData(this.scoreEntity, [ut.Text.Text2DRenderer, game.Score], function (text, score) {
                switch (state) {
                    case (1): //add
                        score.Scores++;
                        break;
                    default: //start setup
                        score.Scores = 0;
                        break;
                }
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
            if (game.SpawnerSystems.spawner == null) {
                this.world.forEach([ut.Entity, game.Spawner], function (entity) {
                    game.SpawnerSystems.spawner = new ut.Entity(entity.index, entity.version);
                    SpawnerSystems.BlockSpawn(_this.world);
                });
            }
        };
        SpawnerSystems.BlockSpawn = function (world) {
            world.usingComponentData(this.spawner, [game.Spawner], function (spw) {
                ut.EntityGroup.instantiate(world, 'game.BlocksGroup')[0];
                if (spw.plusSpeed < 3)
                    spw.plusSpeed += 0.25;
                spw.isPaused = true;
            });
        };
        SpawnerSystems.spawner = null;
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