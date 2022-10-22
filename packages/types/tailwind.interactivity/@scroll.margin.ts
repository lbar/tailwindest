import { PluginVariantsWithDirection } from "../plugin"

export type TailwindScrollMarginType<ScrollMargin extends string> = {
    /**
     *@note Utilities for controlling the scroll offset around items in a snap container.
     *@unit Gap `1` = `4px` = `0.25rem`
     *@docs [scroll-margin](https://tailwindcss.com/docs/scroll-margin)
     */
    scrollMargin: PluginVariantsWithDirection<"scroll-m", ScrollMargin>
    /**
     *@note Utilities for controlling the scroll offset around items in a snap container left direction.
     *@unit Gap `1` = `4px` = `0.25rem`
     *@docs [scroll-margin](https://tailwindcss.com/docs/scroll-margin)
     */
    scrollMarginLeft: PluginVariantsWithDirection<"scroll-ml", ScrollMargin>
    /**
     *@note Utilities for controlling the scroll offset around items in a snap container right direction.
     *@unit Gap `1` = `4px` = `0.25rem`
     *@docs [scroll-margin](https://tailwindcss.com/docs/scroll-margin)
     */
    scrollMarginRight: PluginVariantsWithDirection<"scroll-my", ScrollMargin>
    /**
     *@note Utilities for controlling the scroll offset around items in a snap container top direction.
     *@unit Gap `1` = `4px` = `0.25rem`
     *@docs [scroll-margin](https://tailwindcss.com/docs/scroll-margin)
     */
    scrollMarginTop: PluginVariantsWithDirection<"scroll-mt", ScrollMargin>
    /**
     *@note Utilities for controlling the scroll offset around items in a snap container bottom direction.
     *@unit Gap `1` = `4px` = `0.25rem`
     *@docs [scroll-margin](https://tailwindcss.com/docs/scroll-margin)
     */
    scrollMarginBottom: PluginVariantsWithDirection<"scroll-mb", ScrollMargin>
    /**
     *@note Utilities for controlling the scroll offset around items in a snap container x direction.
     *@unit Gap `1` = `4px` = `0.25rem`
     *@docs [scroll-margin](https://tailwindcss.com/docs/scroll-margin)
     */
    scrollMarginX: PluginVariantsWithDirection<"scroll-mx", ScrollMargin>
    /**
     *@note Utilities for controlling the scroll offset around items in a snap container y direction.
     *@unit Gap `1` = `4px` = `0.25rem`
     *@docs [scroll-margin](https://tailwindcss.com/docs/scroll-margin)
     */
    scrollMarginY: PluginVariantsWithDirection<"scroll-my", ScrollMargin>
}
