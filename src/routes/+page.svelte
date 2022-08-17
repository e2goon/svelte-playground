<script lang="ts">
  let y: number = 0;
</script>

<svelte:window bind:scrollY={y} />

<div class="py-4 sticky top-0">
  <h1>대세는 스벨트일까?</h1>
  <p>scrollY: {y}</p>
</div>

<div class="mt-10">
  {#each Array(100) as _, i}
    {i}
    <br />
  {/each}
</div>
