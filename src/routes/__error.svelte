<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit';

  export const load: Load = ({ error, status }) => {
    return {
      props: {
        error,
        status
      }
    };
  };
</script>

<script lang="ts">
  import Button from '$lib/Button.svelte';

  export let error: Error;
  export let status: string;
</script>

<main class="space-y-4">
  <h1 class="text-6xl font-extrabold">{status}</h1>
  <Button>뒤로 가기</Button>

  <details>
    <summary class="cursor-pointer">{error.message}</summary>
    <pre><code>{JSON.stringify(error.stack, null, 2).replace(/\\n/g, '\n')}</code></pre>
  </details>
</main>
