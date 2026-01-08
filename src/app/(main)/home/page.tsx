import HealthySection from "./_components/healthy-section";
import WorkoutSection from "./_components/workout-section";
import HeroSection from "@components/features/home";
import AboutSection from "@components/features/home/components/about-section/about-section";

export default function HomePage() {
    return (
        <>
            <HeroSection />
             {/*About Section*/}
            <AboutSection />
            {/*Workout Section*/}
            <WorkoutSection />
            {/*Healthy Section*/}
            <HealthySection />
        </>
    );
}
