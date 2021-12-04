<script>
  // import { onMount, onDestroy } from 'svelte';
  import { fade, slide, scale } from 'svelte/transition';
  import { flip } from 'svelte/animate';
  import PollStore from '../stores/PollStore.js';
  import PollDetails from './PollDetails.svelte';
  // let polls = [];

  // const unsubscribe = PollStore.subscribe((data) => {
  //   polls = data;
  // });

  // onDestroy(() => {
  //   console.log('Destroyed');
  //   unsubscribe();
  // });
</script>

<style>
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }

  @media (max-width: 450px) {
    .poll-list {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="poll-list">
  {#each $PollStore as poll (poll.id)}
    <div in:fade out:scale|local animate:flip={{ duration: 500 }}>
      <PollDetails {poll} />
    </div>
  {/each}
</div>
