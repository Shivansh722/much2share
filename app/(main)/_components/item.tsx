"use client";

import { LucideIcon, ChevronDown, ChevronRight} from "lucide-react";

interface MenuItemProps {
    label: string;
    onClick: () => void;
    icon: LucideIcon;
    active?: boolean;
    documentIcon?: JSX.Element;
    isSearch?: boolean;
    level?: number;
    onExpand?: () => void;
    expanded?: boolean;
}

export const MenuItem = ({
    label,
    onClick,
    icon: Icon,
    active = false,
    documentIcon,
    isSearch = false,
    level = 0,
    expanded = false
}: MenuItemProps) => {

    const ChevronIcon = expanded ? ChevronDown : ChevronRight;

    return (
        <div 
            onClick={onClick}
            role="button"
            style={{ paddingLeft: level ? `${(level * 12) + 12}px` : "12px" }}
            className={`group min-h-[27px] text-sm py-1 pr-3 w-full hover:bg-primary/5 flex items-center text-muted-foreground font-medium ${active ? 'bg-primary/5 text-primary' : ''}`}
        >
            {!!expanded && (
                <div
                    role="button"
                    className="h-full rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 absolute top-3 right-2 opacity-0 group-hover/sidebar:opacity-100 transition"
                    onClick={() => {}}
                >
                    <ChevronIcon className="h-4 w-4 shrink-0 text-muted-foreground/50" />
                </div>
            )}
            {documentIcon && (
                <div className="shrink-0 mr-2 text-[18px]">
                    {documentIcon}
                </div>
            )}
            <Icon className="shrink-0 h-[18px] mr-2 text-muted-foreground" />
            <span className="truncate">{label}</span>
            {isSearch && (
                <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                    <span className="text-xs">CMD</span>
                </kbd>
            )}
        </div>
    );
}
