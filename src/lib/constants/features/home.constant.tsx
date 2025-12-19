// File: src/components/features/home/analysis-section.home.tsx

// Contains the analysis items displayed in the hero section of the home page.
// Each item represents a core metric such as active members or years of experience.
// This array is intended to be immutable and used for display purposes only.
export const ANALYSIS_ITEMS = [
    {
        count: 1200,
        label: "active-members",
    },
    {
        count: 12,
        label: "certified-trainers",
    },
    {
        count: 20,
        label: "year-of-experience",
    },
] as const ;


// File: src/components/features/home/marquee-section.home.tsx

// This constant contains the feature list for the home page marquee section.
// It is an immutable array of strings, used to highlight core site features.
export const MARQUEE_LISTS = ["personal-training", "live-classes", "personal-trainers"] as const;
