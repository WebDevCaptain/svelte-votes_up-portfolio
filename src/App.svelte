<script>
  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';
  import PollList from './components/PollList.svelte';
  import CreatePollForm from './components/CreatePollForm.svelte';
  import Tabs from './shared/Tabs.svelte';

  let items = ['Current Polls', 'Add New Poll'];
  let activeItem = items[0];

  const tabChangeHandler = (e) => {
    activeItem = e.detail;
  };

  const handleAddPoll = () => {
    activeItem = items[0];
  };
</script>

<style>
  main {
    max-width: 960px;
    margin: 40px auto;
  }
</style>

<Header />
<main>
  <Tabs {items} {activeItem} on:tabChange={tabChangeHandler} />
  {#if activeItem === items[0]}
    <PollList />
  {:else if activeItem === items[1]}
    <CreatePollForm on:addPoll={handleAddPoll} />
  {/if}
</main>
<Footer />
