<script lang="ts">
    import * as Accordion from "$lib/components/ui/accordion/index.js";
    import { Badge } from "$lib/components/ui/badge/index.js";
    import Code from "@lucide/svelte/icons/code";
    import { getTechIcon } from "$lib/data/tech";

    let {
        value,
        role,
        type = "Full-Time",
        dates,
        description,
        stack = [],
        isLast = false,
    } = $props<{
        value: string;
        role: string;
        type?: string;
        dates: string;
        description: string[];
        stack?: string[];
        isLast?: boolean;
    }>();
</script>

<Accordion.Item
    {value}
    class="relative not-last:border-b-0 border-b-0 not-last:pb-12"
>
    {#if !isLast}
        <div
            class="absolute -left-8 top-8 bottom-0 w-px bg-border -translate-x-1/2"
        ></div>
    {/if}
    <div
        class="absolute -left-8 top-0 h-8 w-8 rounded-full border border-border bg-background flex items-center justify-center overflow-hidden -translate-x-1/2"
    >
        <Code class="w-4 h-4 text-foreground" />
    </div>

    <Accordion.Trigger class="hover:no-underline py-0 mb-4 items-start">
        <div class="flex flex-col text-left gap-1">
            <h3 class="font-bold text-lg text-foreground leading-none">
                {role}
            </h3>
            <span class="text-sm font-medium text-muted-foreground"
                >{type} &nbsp;|&nbsp; {dates}</span
            >
        </div>
    </Accordion.Trigger>
    <Accordion.Content class="pt-2 pb-0">
        <ul
            class="list-disc list-outside ml-4 space-y-2 text-muted-foreground mb-6 font-mono text-sm"
        >
            {#each description as line}
                <li>{@html line}</li>
            {/each}
        </ul>
        {#if stack.length > 0}
            <div class="flex flex-wrap gap-2 mt-4">
                {#each stack as tech}
                    {@const iconClass = getTechIcon(tech)}
                    <Badge
                        variant="outline"
                        class="font-normal font-mono text-xs flex items-center gap-1.5"
                    >
                        {#if iconClass}
                            <i class="{iconClass} text-sm"></i>
                        {/if}
                        {tech.replace(/[.-]/g, "")}
                    </Badge>
                {/each}
            </div>
        {/if}
    </Accordion.Content>
</Accordion.Item>
