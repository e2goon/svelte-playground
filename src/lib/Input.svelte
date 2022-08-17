<script lang="ts">
  type PartialPick<T, K extends keyof T> = {
    [P in K]?: T[K];
  };

  export let id: string | undefined = undefined;
  export let name: string | undefined = undefined;
  export let type = 'text';
  export let placeholder: string | undefined = undefined;

  const slots = $$props.$$slots;

  let attrs: PartialPick<HTMLInputElement, 'id' | 'name' | 'type' | 'placeholder'> = {
    id,
    name,
    type,
    placeholder
  };

  const outer = `
    p-0
    inline-flex
    flex-row
    items-center
    align-middle
    no-underline
    whitespace-nowrap
    outline-none
    
    border-2
    border-black
    rounded-md

    focus-within:ring-2
    focus-within:ring-yellow-400/75
    hover:ring-yellow-400/75
  `;

  const control = `
    w-full
    py-0.5
    px-2
    rounded-md
    outline-none
    bg-transparent
  `;
</script>

<span class={outer}>
  {#if slots && slots.left}
    <span class="first:pl-2">
      <slot name="left" />
    </span>
  {/if}

  <input {...attrs} class={control} />

  {#if slots && slots.right}
    <span class="last:pr-2">
      <slot name="right" />
    </span>
  {/if}
</span>
