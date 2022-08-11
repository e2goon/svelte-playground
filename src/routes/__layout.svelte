<svelte:head>
  <title>스벨트 스터-디</title>
  <link
    rel="stylesheet"
    as="style"
    href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard.css"
    crossorigin="true"
  />
  <link
    rel="stylesheet"
    as="style"
    href="https://unpkg.com/tailwindcss@3.1.8/src/css/preflight.css"
    crossorigin="true"
  />
</svelte:head>

<div class="wrap">
  <nav>
    <a href="/">Home</a>
    <a href="/b">B Site</a>
  </nav>
  <slot />
</div>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    font-family: 'Pretendard';
  }

  .wrap {
    padding: 0 16px;
  }
</style>
