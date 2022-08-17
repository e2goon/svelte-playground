<script lang="ts">
  import { page } from '$app/stores';
  import Button from '$lib/Button.svelte';
</script>

<main class="space-y-4">
  <h1 class="text-6xl font-extrabold">{$page.status}</h1>
  <Button>뒤로 가기</Button>

  <details>
    <summary class="cursor-pointer">{$page.error?.message}</summary>
    <pre><code>{JSON.stringify($page.error?.stack, null, 2).replace(/\\n/g, '\n')}</code></pre>
  </details>
</main>
