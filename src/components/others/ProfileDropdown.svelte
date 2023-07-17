<script lang="ts">
  import { clickOutside } from "@/directives/clickOutside";
  import { scale } from "svelte/transition";
  import { linear } from "svelte/easing";
  import {
    ActivityIcon,
    BriefcaseIcon,
    CheckIcon,
    CommandIcon,
    HelpCircleIcon,
    LogOutIcon,
    PlusCircleIcon,
    SettingsIcon,
    UserIcon,
  } from "svelte-feather-icons";
  import Avatar from "../ui/Avatar.svelte";
  import { goto } from "$app/navigation";
  export let close: any;

  const menus = [
    {
      title: "Account settings",
      href: "/account",
      icon: UserIcon,
    },
    {
      title: "Settings",
      href: "/settings",
      icon: SettingsIcon,
    },
    {
      title: "Help & support",
      icon: HelpCircleIcon,
    },
    {
      title: "Logout",
      icon: LogOutIcon,
      command: "L",
    },
  ];

  const organizations = [
    {
      name: "Catchzy",
      id: 1,
      category: "Business",
      icon: BriefcaseIcon,
      classes: "bg-red-500 text-red-500 border-red-300",
    },
    {
      name: "Ihaha pharmacy",
      id: 2,
      category: "Pharmacy",
      icon: ActivityIcon,
      classes: "bg-blue-500 text-blue-500 border-blue-300",
    },
  ];
</script>

<div
  use:clickOutside
  on:click_outside={() => {
    close();
  }}
  transition:scale={{
    duration: 100,
    delay: 0,
    opacity: 0,
    start: 0.95,
    easing: linear,
  }}
  class="bg-white z-40 absolute border shadow-lg border-slate-200 rounded-[3px] w-[280px] right-0 top-12"
>
  <div class="">
    <div
      class="flex px-3 py-2 border-b border-slate-200 items-center w-full justify-between"
    >
      <div class="flex items-center gap-3">
        <Avatar variant="light" size="md" name="Ntwali edson" rounded="full" />
        <div class="flex flex-col gap-[2px] items-start">
          <h4 class="text-[13px] font-semibold">Ntwali Edson</h4>
          <p class="text-[12.5px] font-medium text-slate-600">
            Managing director
          </p>
        </div>
      </div>
      <a href="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5 text-slate-600"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
          />
        </svg>
      </a>
    </div>
    <div class="flex flex-col py-2 gap-1 px-2">
      {#each menus as menu}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-missing-attribute -->
        <a
          on:click={() => {
            close();
            goto(menu.href);
          }}
          class="flex cursor-pointer justify-between items-center gap-3 px-3 py-2 hover:bg-slate-100 rounded-[3p]"
        >
          <div class="flex items-center gap-2">
            <svelte:component this={menu.icon} class="w-4 h-4 text-slate-600" />
            <h4 class="text-[13px] font-medium text-slate-600">{menu.title}</h4>
          </div>
          {#if menu.command}
            <div class="flex gap-1 items-center">
              <div
                class="w-5 h-5 bg-slate-100 rounded-sm flex items-center justify-center"
              >
                <CommandIcon size="14" class="text-slate-400" />
              </div>
              <span class="text-[12.5px] font-medium text-slate-400"
                >{menu.command}</span
              >
            </div>
          {/if}
        </a>
      {/each}
    </div>
  </div>
</div>
