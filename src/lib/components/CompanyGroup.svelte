<script lang="ts">
    import andersen from "$lib/assets/andersen.svg";
    import nurbank from "$lib/assets/nurbank.svg";
    import favicon from "$lib/assets/favicon.svg";

    const icons: Record<string, string> = {
        andersen,
        nurbank,
        favicon,
    };

    let {
        icon,
        company,
        children,
    } = $props<{
        icon?: string;
        company: string;
        children: any;
    }>();

    const logoSrc = $derived(
        icons[icon || ""] || icons[company.toLowerCase().split(" ")[0]] || favicon
    );
</script>

<div class="mb-12">
    <div class="flex items-center gap-4 mb-6">
        <img src={logoSrc} alt="{company} logo" class="w-8 h-8 object-contain" />
        <h2 class="text-xl font-bold">{company}</h2>
    </div>
    <div class="relative ml-4 pl-8">
        {@render children()}
    </div>
</div>
