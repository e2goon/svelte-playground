<script lang="ts">
  let attrs: {
    href?: string;
    type?: string;
    target?: string;
    rel?: string | undefined;
  } = {};

  export let tag: 'button' | 'a' | 'span' = 'button';
  export let type: string = 'button';

  // anchor
  export let href: string | undefined = undefined;
  export let target: string | undefined = undefined;

  if (href || tag === 'a') {
    tag = 'a';

    attrs = {
      href,
      target,
      rel: target === '_blank' ? 'noreferrer' : undefined
    };
  }

  if (tag === 'button') attrs.type = type;
</script>

<svelte:element this={tag} {...attrs} class="btn">
  <slot name="left" />
  <slot />
  <slot name="right" />
</svelte:element>

<style>
  .btn {
    padding: 0;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    font-family: inherit;
    font-size: 1rem;
    line-height: 1;
    background-color: transparent;
    vertical-align: middle;
    white-space: nowrap;

    /* custom */
    padding: 0.4rem;
    border: 2px dotted gray;
    border-radius: 0.35rem;
  }
</style>
