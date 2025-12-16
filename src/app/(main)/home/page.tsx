import HealthySection from "./_components/healthy-section";
import WorkoutSection from "./_components/workout-section";
import { ButtonModeToggle } from "@components/shared/button-mode-toggle.shared";

export default function HomePage() {
    return (
        <>
            {/*Workout Section*/}
            <WorkoutSection />

            {/*Healthy Section*/}
            <HealthySection />
            <ButtonModeToggle />
        </>
    );
}
