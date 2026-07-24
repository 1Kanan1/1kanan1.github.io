<script lang="ts">
    import DarkModeToggle from "./DarkModeToggle.svelte";

    let headers = [
        { name: "About", url: "#about" },
        { name: "Stack", url: "#stack" },
        { name: "Experience", url: "#experience" },
        // { name: "Projects", url: "#projects" },
    ];
</script>

<header
    class="sticky top-0 z-50 bg-background -mt-10 pt-10 pb-4 mb-8 flex justify-between items-center"
>
    <div>
        <div
            class="flex gap-2 sm:gap-4 text-xs sm:text-sm items-center font-medium text-slate-500 dark:text-slate-400"
        >
            {#each headers as header}
                <a
                    href={header.url}
                    class="hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
                >
                    {header.name}
                </a>
            {/each}
            <span class="text-slate-300 dark:text-slate-700">|</span>
            <a
                href="https://github.com/1Kanan1"
                class="hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
                target="_blank"
                aria-label="github"
            >
                <i class="devicon-github-original"></i>
            </a>
        </div>
    </div>
    <DarkModeToggle />
    <!-- Seamless Gradient Fade -->
    <div
        class="absolute top-full left-0 right-0 h-10 bg-linear-to-b from-background to-transparent pointer-events-none -mx-4 px-4"
    ></div>
</header>
