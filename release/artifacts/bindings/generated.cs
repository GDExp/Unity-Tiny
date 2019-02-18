using UTiny;
using UTiny.Core2D;
using UTiny.Math;
using UTiny.Shared;
using ut;
using UTiny.HTML;
using UTiny.Rendering;
using ut.EditorExtensions;
using UTiny.Physics2D;
using UTiny.HitBox2D;
using UTiny.UILayout;
using UTiny.Text;
using UTiny.UIControls;
using UTiny.Animation;

/*
 * !!! TEMP UNITL PROPER SCENE FORMAT !!!
 */
namespace entities.game
{
    namespace BlocksGroup
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace GameOver
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace GameUI
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace MainMenu
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace MainScene
    {
        public struct Component : IComponentData
        {
        }
    }
}

namespace game
{
    public struct Block : IComponentData
    {
    }
    public struct ButtonInfo : IComponentData
    {
        public sbyte menuState;
    }
    public struct Ground : IComponentData
    {
    }
    public struct InputSystem : IComponentData
    {
        public float jumpForce;
        public bool grounded;
        public bool hit;
        public bool jump;
        public bool fall;
        public bool gameOver;
    }
    public struct MoveBlock : IComponentData
    {
        public float blockSpeed;
        public bool move;
        public bool setup;
    }
    public struct Player : IComponentData
    {
        public Entity Idle;
        public Entity Jump;
        public Entity Fall;
        public Entity Hit;
    }
    public struct Score : IComponentData
    {
        public int Scores;
    }
    public struct Scroller : IComponentData
    {
    }
    public struct Spawner : IComponentData
    {
        public bool isPaused;
        public float plusSpeed;
    }
}

namespace ut.Core2D
{
    namespace layers
    {
        public struct Default : IComponentData
        {
        }
        public struct TransparentFX : IComponentData
        {
        }
        public struct IgnoreRaycast : IComponentData
        {
        }
        public struct Water : IComponentData
        {
        }
        public struct UI : IComponentData
        {
        }
        public struct PostProcessing : IComponentData
        {
        }
        public struct Cutscene : IComponentData
        {
        }
    }
}

namespace ut.Math
{
}

namespace ut
{
}

namespace ut.Shared
{
}

namespace ut.Core2D
{
}

namespace ut
{
}

namespace ut.HTML
{
}

namespace ut.Rendering
{
}

namespace ut.Rendering
{
}

namespace ut.HTML
{
}

namespace ut.Core2D
{
}

namespace ut.Rendering
{
}

namespace ut.Rendering
{
}

namespace ut.Core2D
{
}

namespace ut.EditorExtensions
{
    public struct AssetReferenceAnimationClip : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceAudioClip : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceSprite : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceSpriteAtlas : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceTexture2D : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceTileBase : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceTMP_FontAsset : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct CameraCullingMask : IComponentData
    {
        public int mask;
    }
    public struct EntityLayer : IComponentData
    {
        public int layer;
    }
}

namespace ut.Physics2D
{
}

namespace ut.HitBox2D
{
}

namespace ut.UILayout
{
}

namespace ut.Text
{
}

namespace ut.HTML
{
}

namespace ut.UIControls
{
}

namespace ut.Animation
{
}
namespace game
{
    public class BlockMovementJS : IComponentSystem
    {
    }
}
namespace game
{
    public class CanvasInputSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class PlayerCollisionSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class PlayerInputJS : IComponentSystem
    {
    }
}
namespace game
{
    public class ScoreSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class SpawnerSystemsJS : IComponentSystem
    {
    }
}
