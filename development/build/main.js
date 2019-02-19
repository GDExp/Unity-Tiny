/**
 * TINY GENERATED CODE, DO NOT EDIT BY HAND
 * @project Unity Tiny - Stack Jump
 */

console.log('runtime version: internal');

ut.importModule(ut.Core2D);
ut.importModule(ut.Math);
ut.importModule(ut);
ut.importModule(ut.Shared);
ut.importModule(ut.Core2D);
ut.importModule(ut.HTML);
ut.importModule(ut.Rendering);
ut.importModule(ut.Rendering);
ut.importModule(ut.HTML);
ut.importModule(ut.Core2D);
ut.importModule(ut.Rendering);
ut.importModule(ut.Rendering);
ut.importModule(ut.Core2D);
ut.importModule(ut.Physics2D);
ut.importModule(ut.HitBox2D);
ut.importModule(ut.UILayout);
ut.importModule(ut.Text);
ut.importModule(ut.HTML);
ut.importModule(ut.UIControls);
ut.importModule(ut.Animation);
ut.main = function() {
    // Singleton world
    var world = new ut.World();

    // Schedule all systems
    var scheduler = world.scheduler();
    game.BlockMovementJS.update = new game.BlockMovement()._MakeSystemFn();
    game.CanvasInputSystemJS.update = new game.CanvasInputSystem()._MakeSystemFn();
    game.PlayerCollisionSystemJS.update = new game.PlayerCollisionSystem()._MakeSystemFn();
    game.PlayerInputJS.update = new game.PlayerInput()._MakeSystemFn();
    game.ScoreSystemJS.update = new game.ScoreSystem()._MakeSystemFn();
    game.SpawnerSystemsJS.update = new game.SpawnerSystems()._MakeSystemFn();
    scheduler.schedule(game.BlockMovementJS);
    scheduler.schedule(game.CanvasInputSystemJS);
    scheduler.schedule(game.PlayerCollisionSystemJS);
    scheduler.schedule(game.PlayerInputJS);
    scheduler.schedule(game.ScoreSystemJS);
    scheduler.schedule(game.SpawnerSystemsJS);
    scheduler.schedule(ut.HTML.InputHandler);
    scheduler.schedule(ut.HTML.AssetLoader);
    scheduler.schedule(ut.Core2D.SequencePlayerSystem);
    scheduler.schedule(ut.HitBox2D.HitBox2DSystem);
    scheduler.schedule(ut.Shared.InputFence);
    scheduler.schedule(ut.UIControls.MouseInteractionSystem);
    scheduler.schedule(ut.UIControls.ToggleCheckedSystem);
    scheduler.schedule(ut.Shared.UserCodeStart);
    scheduler.schedule(ut.Shared.UserCodeEnd);
    scheduler.schedule(ut.UILayout.UICanvasSystem);
    scheduler.schedule(ut.UILayout.UILayoutSystem);
    scheduler.schedule(ut.UILayout.SetSprite2DSizeSystem);
    scheduler.schedule(ut.UILayout.SetRectTransformSizeSystem);
    scheduler.schedule(ut.HTML.TextMeasurement);
    scheduler.schedule(ut.UIControls.UIControlsSystem);
    scheduler.schedule(ut.UIControls.ButtonSystem);
    scheduler.schedule(ut.UIControls.ToggleSystem);
    scheduler.schedule(ut.Animation.AnimationClipSourceSystem);
    scheduler.schedule(ut.Animation.AnimationClipPlayerSystem);
    scheduler.schedule(ut.Animation.AnimationBlenderSystem);
    scheduler.schedule(ut.Animation.AnimationResultApplierSystem);
    scheduler.schedule(ut.Shared.RenderingFence);
    scheduler.schedule(ut.Core2D.UpdateLocalTransformSystem);
    scheduler.schedule(ut.Core2D.UpdateWorldTransformSystem);
    scheduler.schedule(ut.Core2D.Sprite2DInitSystem);
    scheduler.schedule(ut.Text.Text2DInitSystem);
    scheduler.schedule(ut.Core2D.DisplayList);
    scheduler.schedule(ut.Shared.PlatformRenderingFence);
    scheduler.schedule(ut.Rendering.RendererCanvas);
    scheduler.schedule(ut.Rendering.RendererGLWebGL);
    scheduler.schedule(ut.Physics2D.Physics2DSystem);

    // Initialize all configuration data
    var c0 = world.getConfigData(ut.Core2D.DisplayInfo);
    c0.width = 300;
    c0.height = 400;
    c0.autoSizeToFrame = true;
    c0.renderMode = 0;
    world.setConfigData(c0);
    var c1 = world.getConfigData(ut.Physics2D.Physics2DConfig);
    var s0 = new ut.Math.Vector2();
    s0.x = 0;
    s0.y = -10;
    c1.gravity = s0;
    world.setConfigData(c1);

    // Create and initialize all resource entities
    UT_ASSETS_SETUP(world);

    // Create and initialize all startup entities
    ut.EntityGroup.instantiate(world, "game.MainMenu");

    // Set up the WebSocket client
    ut._wsclient = ut._wsclient || {};
    ut._wsclient.world = world;

    // Start the player loop
    try { ut.Runtime.Service.run(world); } catch (e) { if (e !== 'SimulateInfiniteLoop') throw e; }
}
