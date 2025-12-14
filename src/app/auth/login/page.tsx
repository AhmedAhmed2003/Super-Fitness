
import IconInput from "@components/shared/icon-input";
import PasswordInput from "@components/shared/password-input";
import { Mail } from "lucide-react";
import { useState } from "react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("Invalid email");

    return (
        <div className="">
            <h3 className="text-2xl font-bold mb-6">Login Page</h3>

            <div className="mt-6 border border-white w-[400px] h-[467px] rounded-2xl p-10 flex flex-col items-center justify-center">
                <div className="space-y-4">
                    <div>
                        <IconInput
                            icon={Mail}
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            hasError={error}
                        />
                        {error && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}
                    </div>
                    <PasswordInput placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
            </div>
        </div>
    );
}
