import { motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useChat } from "@lib/context/ai.context";

export function ChatToggleButton() {
  const { isOpen, toggleChat } = useChat();

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-5 right-5 z-50"
    >
      <Button
        onClick={toggleChat}
        className="h-12 w-12 p-0 rounded-full shadow-lg"
      >
        <motion.span
          key={isOpen ? "close" : "open"}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? <X /> : <MessageCircle />}
        </motion.span>
      </Button>
    </motion.div>
  );
}
