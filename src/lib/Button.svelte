<script lang="ts">
  /**
   * button
   */
  export let tag: 'button' | 'a' | 'span' = 'button';
  export let type: string = 'button';

  /**
   * anchor
   */
  export let href: string | undefined = undefined;
  export let target: string | undefined = undefined;

  /**
   * attrs
   */
  let attrs: {
    href?: string;
    type?: string;
    target?: string;
    rel?: string | undefined;
  } = {};

  /**
   * conditionals
   */
  if (href) {
    tag = 'a';
    attrs = {
      href,
      target,
      rel: target === '_blank' ? 'noreferrer' : undefined
    };
  }

  if (tag === 'button') attrs.type = type;

  /**
   * classes
   */
  const base = `
    p-0
    inline-flex
    flex-row
    items-center
    justify-center
    align-middle
    no-underline
    whitespace-nowrap
    outline-none
    space-x-1
  `;
</script>

<svelte:element
  this={tag}
  on:click
  {...attrs}
  class={`
    ${base}
    py-0.5
    px-2
    border-2
    border-black
    rounded-md
    shadow-deep-md
    transition-shadow
    duration-75
    font-bold
    bg-amber-50
    focus:ring-2
    focus:ring-amber-400/75
    active:shadow-deep-sm
    active:translate-x-px
    active:translate-y-px
  `}
>
  <slot name="left" />
  <slot />
  <slot name="right" />
</svelte:element>
