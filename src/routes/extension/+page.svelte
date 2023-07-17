<script>
  import Button from "@/components/ui/Button.svelte";
  import { ChromeIcon } from "svelte-feather-icons";
</script>

<div class="max-w-6xl min-h-[75vh] mx-auto">
  <div
    class="flex max-w-2xl py-24 justify-center text-center items-center mx-auto gap-4 flex-col"
  >
    <h4 class="font-semibold text-lg">Download the Userlens for Chrome.</h4>
    <p class="text-[13.7px] font-medium leading-8 text-slate-600">
      Userlens for Chrome improves interaction, clarity, and more <br /> as you write
      on your favorite sites.
    </p>
    <div class="mt-3">
      <Button leftIcon={ChromeIcon}>Install Extension.</Button>
    </div>
  </div>
</div>
