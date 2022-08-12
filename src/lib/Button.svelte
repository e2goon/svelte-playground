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
  if (href || tag === 'a') {
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
    align-middle
    leading-none
    whitespace-nowrap
    space-x-1
  `;
</script>

<svelte:element
  this={tag}
  on:click
  {...attrs}
  class={`
    ${base}
    py-1
    px-2
    border-2
    border-zinc-600
    rounded-md
  `}
>
  <slot name="left" />
  <slot />
  <slot name="right" />
</svelte:element>
