<script>
  import { goto } from "$app/navigation";
  import Button from "@/components/ui/Button.svelte";
  import { PlusCircleIcon } from "svelte-feather-icons";
</script>

<div class="max-w-6xl border border-slate-300 rounded-[3px] my-4 mx-auto">
  <div class="flex items-center px-3 py-2 w-full justify-between gap-4">
    <div class="flex items-start gap-1 flex-col">
      <h4 class="text-[14px] font-semibold">Interviews</h4>
      <p class="text-[13px] font-medium text-slate-500">
        View and manage your interviews
      </p>
    </div>
    <div class="flex items-center gap-3">
      <Button leftIcon={PlusCircleIcon}>Add interview</Button>
    </div>
  </div>
  <div class="border-t border-slate-300">
    {#each [1, 2, 3] as interview}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        on:click={() => {
          goto("/interviews/1");
        }}
        class="flex gap-4 cursor-pointer hover:bg-slate-100 border-b last:border-b-0 border-slate-300 px-3 py-2 items-center justify-between"
      >
        <div class="flex items-center gap-6">
          <img
            class="h-5 w-6"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Google_Meet_icon_%282020%29.svg/2491px-Google_Meet_icon_%282020%29.svg.png"
            alt=""
          />
          <div>
            <h4 class="text-[12.5px] font-semibold leading-7 text-slate-700">
              Mbuke prience x <br /> Chrysotome kickoff
            </h4>
          </div>
        </div>
        <div>
          <h4 class="text-[13px] font-semibold text-slate-800">Host</h4>
          <span class="text-[13px] font-medium text-slate-500">
            Mbuke prince
          </span>
        </div>
        <div>
          <div>
            <h4 class="text-[13px] font-semibold text-slate-700">
              Interviewee
            </h4>
            <span class="text-[13px] font-medium text-slate-500">
              Mbuke prince
            </span>
          </div>
        </div>
        <div>
          <div>
            <h4 class="text-[13px] font-semibold text-slate-800">Time</h4>
            <span class="text-[13px] font-medium text-slate-500">
              12 mars 2022, 3:00 PM - 3:30 PM
            </span>
          </div>
        </div>
      </div>
    {/each}
  </div>
  <!-- <div class="border-t border-slate-200 py-8">
    <div class="flex justify-center py-10 items-center flex-col gap-4">
      <img src="images/interview.svg" class="h-36 w-36" alt="" />
      <h4 class="font-semibold text-sm">You have no interviews yet.</h4>
      <p class="text-[13px] font-medium text-center leading-7 text-slate-500">
        Once you have some interviews they will be added here.<br /> or click the
        button below to create an interview.
      </p>
      <div>
        <Button variant="default" leftIcon={PlusCircleIcon}
          >Create interview</Button
        >
      </div>
    </div>
  </div> -->
</div>
<div class="h-[30vh]" />
