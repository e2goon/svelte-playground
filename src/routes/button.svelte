<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import Button from '$lib/Button.svelte';
</script>

<section>
  <h1 class="my-4 font-bold text-2xl">Button</h1>

  <div>
    <Button>일반 버튼</Button>
    <Button type="submit">Submit 버튼</Button>
  </div>

  <h3 class="my-4 font-bold text-xl">a</h3>
  <div>
    <Button tag="a">속성 없는 a 태그</Button>
  </div>

  <h3 class="my-4 font-bold text-xl">span</h3>
  <div>
    <Button tag="span">span 태그</Button>
  </div>

  <h3 class="my-4 font-bold text-xl">anchor</h3>
  <div>
    <Button href="https://naver.com">외부 링크</Button>
    <Button href="https://naver.com" target="_blank">
      <span>외부 링크</span>
      <svg
        class="w-4 h-4 text-zinc-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        />
      </svg>
    </Button>
    <Button href="/button">내부 링크</Button>
    <Button href="?key=value">? 쿼리스트링 링크</Button>
    <Button href="#hash"># 해시 링크</Button>
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
        class="w-4 h-4"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
      </svg>
      <svg
        slot="right"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        class="w-4 h-4"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
      <span>버튼</span>
    </Button>
  </div>
</section>
