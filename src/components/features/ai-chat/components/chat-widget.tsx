import AIFitnessChat from "../page";
import { FloatingCloseButton } from "./close-btn";
import { useChat } from "@lib/context/ai.context";
import { motion, AnimatePresence } from "framer-motion";

export function ChatWidget() {
    const { isOpen, toggleChat } = useChat();

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="fixed bottom-0 right-20 z-999"
                >
                    <div className="relative">
                        <FloatingCloseButton onClose={toggleChat} />

                        <AIFitnessChat />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
