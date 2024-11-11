import { cn } from "@/utils/utils";

interface MaxWidthWrapperProps {
    children: React.ReactNode
    className?: string
}

const MaxWidthWrapper = ({ className, children }: MaxWidthWrapperProps) => {
    return (
        <div className={cn("mx-auto max-w-screen-xl h-full px-2.5 sm:px-20", className)}>
            {children}
        </div>
    );
}

export default MaxWidthWrapper;