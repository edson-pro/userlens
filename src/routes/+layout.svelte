<script>
  import "./styles.css";
  // @ts-ignore
  import NProgress from "nprogress";
  import { navigating } from "$app/stores";
  import "nprogress/nprogress.css";
  import Toasts from "@/components/ui/Toasts.svelte";
  import { QueryClientProvider } from "@sveltestack/svelte-query";
  import queryClient from "@/config/queryClient";
  import Navbar from "@/components/others/Navbar.svelte";
  import Footer from "@/components/others/Footer.svelte";

  NProgress.configure({
    minimum: 0.16,
  });

  $: {
    if ($navigating) {
      NProgress.start();
    }
    if (!$navigating) {
      NProgress.done();
    }
  }
</script>

<Toasts />

<QueryClientProvider client={queryClient}>
  <div class="app">
    <Navbar />
    <slot />
    <div class="h-[10vh]" />
    <Footer />
  </div>
</QueryClientProvider>
