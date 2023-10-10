import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Card from "~/components/Card";
import Chip from "~/components/Chip";
import DotAnimation from "~/components/DotAnimation";

export default function Home() {
    return (
        <>
        <Head>
            <title>Subsequent Media</title>
            <meta name="description" content="Your all-in-one solution for creating, presenting, and consuming procedurally generated art" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-black to-zinc-800">
            <header className="py-12 px-8">
                <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">Subsequent Media</h1>

                {/* <DotAnimation /> */}
                {/* <Image src="/img/martin-engel-KLFB1AEPLwA-unsplash.jpg" alt="" width={400} height={200} /> */}

                <p className="text-2xl my-6 font-semibold text-white sm:text-[2.5rem]">Your all-in-one solution for creating, presenting, and consuming procedurally generated art</p>
            </header>

            {/* <div className="w-full min-h-[50vh]" /> */}

            <article className="flex flex-col items-center">
                <Card className="flex">
                    <div className="w-1/3 h-auto">
                        <Image
                            src="/img/reynier-carl-wf0c0d-h2fE-unsplash.jpg"
                            alt="man wearing headphones"
                            width={400}
                            height={400}
                            className="object-contain"
                            />
                    </div>
                    <div className="w-2/3 pl-8 h-auto flex flex-col items-end">
                        <h2 className="w-full font-bold text-3xl mb-5">Welcome artistic freedom into your everyday life</h2>

                        <p className="md:text-right text-emerald-100 text-lg w-full">With Subsequent, you are free to sculpt your own soundscape.</p>
                        <p className="md:text-right text-lg w-full">
                            We offer a library of presets to get you started -- pre-built sound environments that
                            sound great to start and allow you deep influence into the sound you hear.
                        </p>
                    </div>


                </Card>

                <Card className="flex flex-col">
                    <h2 className="font-bold text-3xl mb-5">Use our full solution in the cloud</h2>

                    <p className="w-full md:w-3/4 text-lg">Subsequent Cloud packages everything you need to get started with making generative music. This includes:</p>

                    <div className="flex flex-wrap">
                        <Chip label="A web app for interacting with your project" />
                        <Chip label="A hosting solution for storing, accessing, and sharing projects" />
                        <Chip label="A simple-to-use, proprietary editor for creating and modifying projects" />
                        <Chip label="Built-in playback and streaming, featuring live MIDI generation playing back with Web Audio" />
                        <Chip label="Browse community-made plugins and configurations for the Subsequent engine" />
                    </div>

                    {/* <ul className="list-disc text-lg">
                        <li className="ml-8">A web app for interacting with your project</li>
                        <li className="ml-8">A hosting solution for storing, accessing, and sharing projects</li>
                        <li className="ml-8">A simple-to-use, proprietary editor for creating and modifying projects</li>
                        <li className="ml-8">Built-in playback and streaming, featuring live MIDI generation playing back with Web Audio</li>
                        <li className="ml-8">Browse community-made plugins and configurations for the Subsequent engine</li>
                    </ul> */}
                </Card>

                <Card className="flex">
                    <div className="flex flex-col w-2/3 pr-8">
                        <h2 className="font-bold text-3xl mb-5">Use it where you need it most</h2>

                        <p className="w-full md:w-3/4 md:text-left text-lg">Subsequent is, at its heart, a MIDI framework. Tell our system what you want it to do, and the result will be a continuous, live stream of MIDI messages.</p>
                        <p className="w-full md:w-3/4 md:text-left text-lg">Because Subsequent uses this low-level data format, you can use Subsequent anywhere that supports MIDI, including:</p>

                        <div className="flex flex-wrap mb-8">
                            <Chip label="Virtual instruments" />
                            <Chip label="Hardware instruments" />
                            <Chip label="Web audio environments" />
                            <Chip label="Light installations" />
                            <Chip label="Notation software" />
                        </div>

                        <p className="w-full text-lg md:w-3/4 md:text-left">The core logic of Subsequent is written in TypeScript, which means it can run in the browser and anywhere else JavaScript or Node.js are supported. This allows us to support a rich variety of plug-ins, providers, and helpers for integrations with third-party services, including:</p>

                        <div className="flex flex-wrap">
                            <Chip label="Discord" />
                            <Chip label="OBS Studio" />
                            <Chip label="Unity" />
                            <Chip label="Your own web app" />
                        </div>
                    </div>

                    <div className="flex flex-col w-1/3 h-auto justify-center">
                        <Image
                            src="/img/martin-engel-KLFB1AEPLwA-unsplash.jpg"
                            alt="a modular synthesizer"
                            width={400}
                            height={400}
                            />
                    </div>
                </Card>

                <Card className="flex flex-col items-end text-lg">
                    <h2 className="font-bold text-3xl mb-5">Create ambience the easy way</h2>
                    <p className="text-emerald-100 w-full md:w-3/4 md:text-right">Music generated by Subsequent is ephemeral and ownerless, and is by nature royalty free.</p>
                    <p className="w-full md:w-3/4 md:text-right">This means that Subsequent has a strong use case among streamers and other content creators who may need to fill a soundscape without being beholden to royalty fees.</p>
                </Card>

                <Card className="flex flex-col text-lg">
                    <h2 className="font-bold text-3xl mb-5">Get into the nitty-gritty (if you want)</h2>

                    <div className="mb-5">
                        <p className="w-full md:w-3/4">Subsequent offers you the opportunity to get as picky and opinionated as you like.</p>
                        <p className="w-full md:w-3/4">Don&apos;t like that high-pitched twinkly noise in the background? Our intuitive user interface lets you give us tightly-focused feedback so that your listening experience caters to you.</p>
                    </div>

                    <p className="w-full md:w-3/4">Want to dive deeper? Dive deep into our editor and teach Subsequent everything it needs to know about how you want it to sound, including harmonic language, melodic character, rhythm profile, and phrase structure.</p>
                </Card>
            </article>

            <div className="w-full py-12 flex flex-col items-center bg-purple-700 text-white">
                <h2 className="text-4xl font-bold mb-4">Ready to learn more?</h2>
                <p>We will have a mailing list put together soon so you can keep track of our progress. In the meantime...</p>

                <div className="flex mt-8">
                    <Card className="flex flex-col items-center text-center mr-8">
                        <Link href="https://github.com/subsequent-media/hello-subsequent">
                            Keep track of us on Github
                        </Link>
                    </Card>
                </div>
            </div>
        </main>
        </>
    );
}
