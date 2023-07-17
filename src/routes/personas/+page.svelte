<script>
  import Button from "@/components/ui/Button.svelte";
  import { PlusCircleIcon } from "svelte-feather-icons";
</script>

<div class="max-w-6xl border border-slate-300 rounded-[3px] my-4 mx-auto">
  <div class="flex items-center px-3 py-2 w-full justify-between gap-4">
    <div class="flex items-start gap-1 flex-col">
      <h4 class="text-[14px] font-semibold">Personas</h4>
      <p class="text-[13px] font-medium text-slate-500">
        View and manage your personas
      </p>
    </div>
    <div class="flex items-center gap-3">
      <Button leftIcon={PlusCircleIcon}>Add persona</Button>
    </div>
  </div>
  <div class="border-t border-slate-200 py-8">
    <div class="flex justify-center py-10 items-center flex-col gap-4">
      <img src="images/persona.svg" class="h-36 w-36" alt="" />
      <h4 class="font-semibold text-sm">You have no personas yet.</h4>
      <p class="text-[13.5px] font-medium text-center leading-7 text-slate-500">
        Once you have some personas they will be added here.<br /> or click the button
        below to create an interview.
      </p>
      <div>
        <Button variant="default" leftIcon={PlusCircleIcon}
          >Create personas</Button
        >
      </div>
    </div>
  </div>
</div>
