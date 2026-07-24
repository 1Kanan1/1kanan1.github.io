<script lang="ts">
    import Section from "$lib/components/Section.svelte";
    import CompanyGroup from "$lib/components/CompanyGroup.svelte";
    import ExperienceItem from "$lib/components/ExperienceItem.svelte";
    // import ProjectItem from "$lib/components/ProjectItem.svelte";
    import StackItem from "$lib/components/StackItem.svelte";
    import * as Accordion from "$lib/components/ui/accordion/index.js";
    import {
        aboutData,
        stackData,
        experienceData,
        // projectsData,
    } from "$lib/data";
</script>

<Section id="about" title="About">
    <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
        {@html aboutData.summary}
    </p>
</Section>

<Section id="stack" title="Stack">
    <div class="mt-4">
        {#each stackData as stack}
            <StackItem
                number={stack.number}
                category={stack.category}
                items={stack.items}
            />
        {/each}
    </div>
</Section>

<Section id="experience" title="Experience">
    <Accordion.Root type="multiple" class="w-full">
        {#each experienceData as company}
            <CompanyGroup company={company.company} icon={company.icon}>
                {#each company.roles as role, i}
                    <ExperienceItem
                        value={role.id}
                        role={role.title}
                        dates={role.dates}
                        description={role.description}
                        stack={role.stack}
                        isLast={i === company.roles.length - 1}
                    />
                {/each}
            </CompanyGroup>
        {/each}
    </Accordion.Root>
</Section>

<!-- <Section id="projects" title="Projects">
    <div class="flex flex-col gap-4">
        {#each projectsData as project}
            <ProjectItem
                title={project.title}
                description={project.description}
                link={project.link}
                stack={project.stack}
            />
        {/each}
    </div>
</Section> -->
