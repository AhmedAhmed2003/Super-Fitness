import { FloatingCloseButton } from "./close-btn";
import { useChat } from "@lib/context/ai.context";
import { motion, AnimatePresence } from "framer-motion";

export function ChatToggleButton() {
    const { isOpen, toggleChat } = useChat();

    return (
        <motion.div
            className="fixed bottom-5 right-20 z-50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <AnimatePresence>
                {!isOpen && (
                    <motion.span
                        key="chat-toggle"
                        initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                        animate={{ rotate: 0, opacity: 1, scale: 1 }}
                        exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                        <FloatingCloseButton
                            label="Hey Ask Me"
                            onClose={toggleChat}
                        />
                    </motion.span>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
