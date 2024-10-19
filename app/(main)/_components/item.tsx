import { Skeleton } from "@/components/ui/skeleton";
import { Id } from "@/convex/_generated/dataModel";
import { LucideIcon, ChevronDown, ChevronRight } from "lucide-react";

interface MenuItemProps {
  id?: Id<"documents">;
  label: string;
  onClick: () => void;
  icon: LucideIcon;
  active?: boolean;
  documentIcon?: string;
  isSearch?: boolean;
  level?: number;
  onExpand?: () => void;
  expanded?: boolean;
}

export const MenuItem = ({
    id,
  label,
  onClick,
  icon: Icon,
  active = false,
  documentIcon,
  isSearch = false,
  level = 0,
  onExpand,
  expanded = false,
}: MenuItemProps) => {

    const handleExpand = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
        ) => {
        event.preventDefault();
        onExpand?.();
    }


  const ChevronIcon = expanded ? ChevronDown : ChevronRight;

  return (
    <div
      role="button"
      style={{ paddingLeft: level ? `${(level * 12) + 12}px` : "12px" }}
      className={`group relative min-h-[27px] text-sm py-1 pr-3 w-full hover:bg-primary/5 flex items-center text-muted-foreground font-medium ${active ? 'bg-primary/5 text-primary' : ''}`}
    >
      {/* Render the expand/collapse icon */}
      {!!id &&  (
        <div
          role="button"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
          onClick={handleExpand}
          
        >
          <ChevronIcon className="h-4 w-4 shrink-0 text-muted-foreground/50" />
        </div>
      )}
      
      {/* Render document icon if available */}
      {documentIcon && (
        <div className="shrink-0 mr-2 text-[18px]">
          {documentIcon}
        </div>
      )}

      {/* Render the main icon */}
      <Icon className="shrink-0 h-[18px] mr-2 text-muted-foreground" />

      {/* Render the label */}
      <span className="truncate">{label}</span>

      {/* Optional CMD key hint for search */}
      {isSearch && (
        <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">CMD</span>
        </kbd>
      )}
      {
        
      }
    </div>
  );
};

MenuItem.Skeleton = function ItemSkeleton({ level }: { level?: number }) {
  return (
    <div
      style={{ paddingLeft: level ? `${(level * 12) + 12}px` : "12px" }}
      className="flex gap-x-2 py-[3px]"
    >
      <Skeleton className="h-4 w-4" />
      <Skeleton className="h-4 w-[30%]" />
    </div>
  );
};
