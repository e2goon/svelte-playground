<script lang="ts">
  import '../app.css';
</script>

<svelte:head>
  <title>스벨트 스터-디</title>
  <link
    rel="stylesheet"
    as="style"
    href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard.css"
    crossorigin="true"
  />
</svelte:head>

<div class="px-4">
  <header class="py-4">
    <h1 class="text-3xl font-bold">Svelte Playground!</h1>
    <nav>
      <a href="/" class="text-blue-600 hover:underline focus:underline">Home</a>
      <a href="/b" class="text-blue-600 hover:underline focus:underline">B Site</a>
    </nav>
  </header>
  <slot />
</div>
