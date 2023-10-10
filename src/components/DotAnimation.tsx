import { useEffect, useState } from "react";

function getColor(tw: string) { return tw.split('-')[1]; }
function getNum(tw: string) { return tw.split('-')[2]; }

const Dot = ({ color, position }: { color: string, position: string }) => (
    <div className={`absolute rounded-full animate-slide-left w-[50px] h-[50px] ${color} ${position}`} />
)

const DotAnimation = () => {
    const [colors, setColors] = useState<[string, string, string]>(['bg-red-200', 'bg-red-500', 'bg-red-800']);
    const [positions, setPositions] = useState<[string, string, string]>(['top-16 left-[50px]', 'top-16 left-[125px]', 'top-16 left-[200px]']);

    useEffect(() => {
        const interval = setInterval(() => {
            const options = ['red', 'purple', 'blue', 'violet', 'indigo'];
            const whichNext = Math.floor(Math.random() * options.length);

            setColors((prev) => {
                const first = prev[0];
                const last = prev[2];

                let next: string;

                const color = getColor(first);
                const num = getNum(first);
                if (!num || !color) throw new Error("this shouldn't happen");

                if (num === '200') {
                    next = `bg-${options[whichNext]}-200`;
                } else {
                    next = `bg-${getColor(last)}-${num}`;
                }

                return [prev[1], prev[2], next];
            });
        }, 2000);

        return () => {
            clearInterval(interval);
        };
    }, [])

    return (
        <div>
            <Dot color={colors[0]} position={positions[0]} />
            <Dot color={colors[1]} position={positions[1]} />
            <Dot color={colors[2]} position={positions[2]} />
        </div>
    )
}

export default DotAnimation;
