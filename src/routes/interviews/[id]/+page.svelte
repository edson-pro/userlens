<script>
  import Avatar from "@/components/ui/Avatar.svelte";
  import {
    ArrowLeftIcon,
    ArrowRightIcon,
    ChevronRightIcon,
  } from "svelte-feather-icons";
</script>

<div class="w-full border-b border-s-slate-200">
  <div
    class="max-w-6xl w-full justify-between flex items-center gap-3 mx-auto px-3 pr-0"
  >
    <div class="flex py-3 items-center gap-6">
      <div class="flex items-center gap-3">
        <a href="/interviews" class="flex items-center gap-3">
          <ArrowLeftIcon size={"16"} class="text-slate-600" />
          <span class="text-sm font-medium text-slate-600"> Interviews </span>
        </a>
        <ChevronRightIcon size={"16"} class="text-slate-600" />
      </div>
      <div class="flex items-center gap-4">
        <div class="flex items-center gap-3">
          <img
            class="h-5 w-6"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Google_Meet_icon_%282020%29.svg/2491px-Google_Meet_icon_%282020%29.svg.png"
            alt=""
          />
          <span class="text-[13.7px] font-medium text-slate-700"
            >Mbuke prience x Chrysotome kickoff.</span
          >
        </div>
        <div>
          <span class="text-[13.5px] font-medium text-slate-500">
            12 mars 2022, 3:00 PM - 3:30 PM
          </span>
        </div>
      </div>
    </div>
    <div>
      <div class="flex items-center gap-3">
        <span class="text-sm font-medium text-slate-500">Participants</span>
        <div class="flex items-center">
          <div class="border-white border-2 rounded-full">
            <Avatar rounded="full" size="sm" name="Mbuke prince" />
          </div>
          <div class="-ml-4 border-white border-2 rounded-full">
            <Avatar rounded="full" size="sm" name="Jean chris" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
