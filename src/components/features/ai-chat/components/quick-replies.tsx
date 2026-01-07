import { Button } from "@/components/ui/button";

export function QuickReplies() {
    return (
        <div className="flex gap-2 px-4 py-2 overflow-x-auto">
            <Button variant="outline" size="sm">
                workout at home
            </Button>
            <Button variant="outline" size="sm">
                Diet Plan
            </Button>
            <Button variant="outline" size="sm">
                20 minutes workout
            </Button>
        </div>
    );
}
