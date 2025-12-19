// import OtpForm from "../verify-otp/_components/otp-form";
// import { useState } from "react";

// export default function ForgotPasswordLayout() {
//     // Manage  email state
//     const [email, setEmail] = useState<string>("");
//     // Manage current step state
//     // const [step, setStep] = useState<Step>(FORGOT_PASSWORD_STEPS.EMAIL);

//     // Define components for each step
//     const steps = {
//         [FORGOT_PASSWORD_STEPS.EMAIL]: <EmailStep setEmail={setEmail} setStep={setStep} />,
//         [FORGOT_PASSWORD_STEPS.OTP]: <OtpStep email={email} setStep={setStep} />,
//         [FORGOT_PASSWORD_STEPS.PASSWORD]: <ResetPassword email={email} />,
//         [FORGOT_PASSWORD_STEPS.PASSWORD]: <OtpForm email={email} />,
//     };
//     return <>{steps[step]}</>;
// }
