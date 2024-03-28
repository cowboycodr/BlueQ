<script>
    import { fade } from 'svelte/transition';
    import { page } from '$app/stores';
    import { copy } from '$lib/utils.js';
    import { Link, Check } from 'lucide-svelte';
  
    let projectShortCode;
    export { projectShortCode as shortCode };
  
    let copied = false;
  </script>
  
  <div class="flex w-min items-center space-x-1 rounded-md bg-muted p-1 text-muted-foreground">
    <a href="/q/{projectShortCode}">
      {$page.url.origin}/q/{projectShortCode}
    </a>
    {#if !copied}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        class="cursor-pointer"
        in:fade
        use:copy={`${$page.url.origin}/q/${projectShortCode}`}
        on:click={() => {
          copied = true;
          setTimeout(() => {
            copied = false;
          }, 1000);
        }}
      >
        <Link size={12} />
      </div>
    {:else}
      <div in:fade>
        <Check size={12} />
      </div>
    {/if}
  </div>