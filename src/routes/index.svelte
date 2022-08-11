<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  let y: number = 0;

  $: {
    console.log(y);
  }
</script>

<svelte:window bind:scrollY={y} />

<div class="wrap">
  <div class="sticky">
    <h1>대세는 스벨트일까?</h1>
    <p>scrollY: {y}</p>
  </div>

  {#each Array(100) as _, i}
    {i}<br />
  {/each}
</div>

<style>
  .wrap {
    padding: 0 16px;
  }
  .sticky {
    padding: 16px 0;
    position: sticky;
    top: 0;
  }
  .sticky h1 {
    margin: 0;
  }
</style>
