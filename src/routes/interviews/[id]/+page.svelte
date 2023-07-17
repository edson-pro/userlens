<script>
  import Avatar from "@/components/ui/Avatar.svelte";
  import { ArrowLeftIcon, ChevronRightIcon } from "svelte-feather-icons";

  const conversations = [
    {
      from: "Interviewer",
      content:
        "Hello, thank you for joining us today. To begin, could you tell me a bit about your general usage of our food delivery app?",
    },
    {
      from: "User",
      content:
        "Sure, I've been using your app for about a year now. I usually order through it at least twice a week, sometimes more if I'm busy or don't feel like cooking.",
    },
    {
      from: "Interviewer",
      content:
        "Thank you for your loyalty. Can you tell me more about what you like about our app?",
    },
    {
      from: "User",
      content:
        "I appreciate how easy it is to use. The user interface is straightforward, and I like that I can customize my orders. Plus, there's a good variety of restaurants to choose from.",
    },
    {
      from: "Interviewer",
      content:
        'That\'s great feedback. Now, have you had the opportunity to try our new "Express Delivery" feature?',
    },
    {
      from: "User",
      content: "Yes, I have tried it a couple of times.",
    },
    {
      from: "Interviewer",
      content:
        "Wonderful! And I'm assuming you've found it to be faster than the standard delivery?",
    },
    {
      from: "User",
      content:
        "Well, not exactly. Sometimes it seems faster, but on other occasions, the delivery time was pretty much the same as the regular delivery. It was a bit inconsistent.",
    },
    {
      from: "Interviewer",
      content:
        "Oh, I see. That's not the experience we want for our customers. You were probably disappointed by the longer delivery times, weren't you?",
    },
    {
      from: "User",
      content:
        "Yes, that's accurate. If I'm paying extra for an \"Express\" service, I expect it to always be faster. It was especially frustrating when I was really hungry or in a hurry.",
    },
    {
      from: "Interviewer",
      content:
        'Absolutely, that makes total sense. Now, did you find the process of selecting "Express Delivery" to be clear and straightforward?',
    },
    {
      from: "User",
      content:
        'The process itself was fine, but what bothered me was that it wasn\'t always clear whether "Express Delivery" was available for certain restaurants. I think the app could do a better job of indicating this.',
    },
    {
      from: "Interviewer",
      content:
        'Thank you for that feedback. It\'s important for us to know where we can improve. Besides that, have you encountered any other issues or inconveniences with the "Express Delivery" feature?',
    },
    {
      from: "User",
      content:
        "Not really, it was mainly the inconsistent speed and the unclear availability of the service. But overall, I still find your app very useful and convenient for ordering food.",
    },
  ];
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
<div class="max-w-6xl py-6 mx-auto px-3">
  <div>
    <h4 class="text-[15px] font-semibold">Context</h4>
    <div class="mt-3">
      <p class="text-sm font-medium leading-9 text-slate-600">
        This user research campaign is focused on understanding user experiences
        with our food delivery app's new "Express Delivery" feature. We are
        especially interested in knowing how users perceive the speed and
        reliability of this new feature, their willingness to pay a premium for
        it, and any potential issues or inconveniences they have encountered.
      </p>
    </div>
  </div>

  <div class="mt-6">
    <h4 class="text-[14.5px] font-semibold">Keys insights</h4>
    <div class="mt-3">
      <ul class="list-disc pl-5">
        <li class="text-sm font-medium leading-9 text-slate-600">
          I've been using your app for about a year now.
        </li>
        <li class="text-sm font-medium leading-9 text-slate-600">
          The process itself was fine, but what bothered me was.
        </li>
        <li class="text-sm font-medium leading-9 text-slate-600">
          Wonderful! And I'm assuming you've found it to be faster
        </li>
      </ul>
    </div>
  </div>
  <div class="mt-8">
    <h4 class="text-[15px] font-semibold">Transcript</h4>
    <div class="my-5">
      {#each conversations as conv}
        <div class="grid grid-cols-10">
          <h4
            class="text-[13px] border p-4 border-r-0 border-slate-300 col-span-2 font-semibold"
          >
            {conv.from}
          </h4>
          <p
            class="text-[13.7px] border border-slate-300 p-4 col-span-8 font-medium leading-8 text-slate-600"
          >
            {conv.content}
          </p>
        </div>
      {/each}
    </div>
  </div>
</div>
