<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import Button from '../lib/button.svelte';

  let y: number = 0;

  $: {
    console.log(y);
  }
</script>

<svelte:window bind:scrollY={y} />

<div class="py-4 sticky top-0">
  <h1>대세는 스벨트일까?</h1>
  <p>scrollY: {y}</p>
</div>

<section>
  <h2 class="my-4 font-bold text-2xl">Button</h2>

  <div>
    <Button>버튼 태그</Button>
    <Button type="submit">Submit 버튼</Button>
  </div>

  <h3 class="my-4 font-bold text-xl">a</h3>
  <div>
    <Button tag="a">href 속성 없는 그냥 a 태그</Button>
  </div>

  <h3 class="my-4 font-bold text-xl">span</h3>
  <div>
    <Button tag="span">span 태그</Button>
  </div>

  <h3 class="my-4 font-bold text-xl">anchor</h3>
  <div>
    <Button href="https://naver.com">외부 링크</Button>
    <Button href="https://naver.com" target="_blank">외부 링크 (새창)</Button>
    <Button href="/b">내부 링크</Button>
    <Button href="?key=value">쿼리스트링 링크</Button>
    <Button href="#hash">해시 링크</Button>
  </div>

  <h3 class="my-4 font-bold text-xl">icon + button</h3>
  <div>
    <Button>
      <svg
        slot="left"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        style="width: 20px; height: 20px;"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
      </svg>
      <svg
        slot="right"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        style="width: 20px; height: 20px;"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
      버튼
    </Button>
  </div>
</section>

<div class="mt-10">
  {#each Array(100) as _, i}
    {i}<br />
  {/each}
</div>
