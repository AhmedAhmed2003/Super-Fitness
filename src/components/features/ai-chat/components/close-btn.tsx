import { Button } from "@components/ui/button";
import { motion } from "framer-motion";

type FloatingCloseButtonProps = {
    onClose: () => void;
    label?: string;
    imageSrc?: string;
    className?: string;
};

export function FloatingCloseButton({
    onClose,
    label = "tap to close",
    imageSrc = "/public/images/ai.png",
    className = "",
}: FloatingCloseButtonProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`absolute -top-30 left-1/2 -translate-x-1/2 z-999999 flex flex-col items-center pointer-events-auto ${className}`}
        >
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={onClose}>
                <img src={imageSrc} alt="Close" className="w-28" />
            </motion.button>

            <Button variant="default" size="sm" className="text-lg capitalize font-bold font-baloo rounded-3xl " onClick={onClose}>
                {label}
            </Button>
        </motion.div>
    );
}
