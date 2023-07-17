<script lang="ts">
  import Avatar from "../ui/Avatar.svelte";
  import Logo from "../ui/Logo.svelte";
  import ProfileDropdown from "./ProfileDropdown.svelte";
  import { page } from "$app/stores";
  const links = [
    { href: "/interviews", label: "Interviews" },
    { href: "/personas", label: "Personas" },
    { href: "/extension", label: "Chrome extension" },
  ];

  let showProfile = false;
</script>

<nav class="bg-slate-100 border-b border-slate-200">
  <div class="flex items-center py-2 mx-auto justify-between max-w-6xl md:px-0">
    <div class="flex items-center gap-5">
      <a href="/">
        <Logo width={120} height={40} />
      </a>
      <ul class="flex items-center gap-3">
        {#each links as link, i}
          <li>
            <a
              href={link.href}
              class={`text-slate-700 hover:bg-opacity-60 hover:bg-blue-200 hover:text-blue-500 px-3 py-2 rounded-[3px] text-[13.5px] font-medium ${
                link.href === $page.url.pathname ||
                $page.url.pathname.split("/")[1] === link.href.split("/")[1]
                  ? "bg-blue-200 bg-opacity-50 text-blue-500"
                  : ""
              }`}
            >
              {link.label}
            </a>
          </li>
        {/each}
      </ul>
    </div>
    <div class="flex items-center gap-5">
      <!-- svelte-ignore a11y-click-events-have-key-events -->

      <div class="relative">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-missing-attribute -->
        <a
          on:click={(e) => {
            e.stopPropagation();
            showProfile = !showProfile;
          }}
          class="text-gray-200 cursor-pointer"
        >
          <div class="bg-slate-300 p-[3px] rounded-full">
            <Avatar size="md" name="Ntwali edson" rounded="full" />
          </div>
        </a>
        {#if showProfile}
          <ProfileDropdown
            close={() => {
              showProfile = false;
            }}
          />
        {/if}
      </div>
    </div>
  </div>
</nav>
