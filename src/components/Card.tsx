export default function Card({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={"bg-zinc-700 text-white shadow-lg rounded-lg overflow-hidden w-5/6 p-4 mb-8 " + (className ?? "")}>
            {children}
        </div>
    )
}
