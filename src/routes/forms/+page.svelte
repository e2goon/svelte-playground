<script lang="ts">
  import Button from '$lib/Button.svelte';
  import Input from '$lib/Input.svelte';
</script>

<article class="prose">
  <h1>Forms</h1>

  <form class="flex flex-col space-y-2">
    <Input id="email" name="email" placeholder="example@email.com">
      <svelte:fragment slot="left">
        <svg
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </svelte:fragment>
    </Input>

    <Input name="password" type="password" placeholder={Array(10).join('•')}>
      <svg
        slot="right"
        class="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </Input>

    <Button type="submit">회원가입</Button>
  </form>
</article>
