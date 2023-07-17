<script>
  import Seo from "@/components/others/Seo.svelte";
  import SvelteMarkdown from "svelte-markdown";

  export let data;
</script>

<Seo title={`Privacy & policy`} />

<div class="max-w-6xl md:px-3 md:pt-[70px] mx-auto pt-24">
  <div
    class="prose-sm prose-a:text-primary prose-a:underline prose-a:text-slate-800 prose-a:font-medium prose-p:leading-8 prose-p:text-slate-600 prose-headings:font-semibold prose-headings:text-base prose-slate"
  >
    <SvelteMarkdown source={data.terms} />
  </div>
</div>
