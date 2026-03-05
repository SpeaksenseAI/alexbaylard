import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Play, 
  Instagram, 
  Mail, 
  Download, 
  Phone, 
  MapPin, 
  Clapperboard, 
  Image as ImageIcon,
  FileText
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      {/* 
        NAVIGATION
        Sticky header for easy access to all sections. Casting directors want frictionless navigation.
      */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between mx-auto px-4 md:px-8">
          <div className="font-bold text-xl tracking-tight uppercase">Alex Baylard</div>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#news" className="transition-colors hover:text-foreground/80 text-foreground/60">News</a>
            <a href="#media" className="transition-colors hover:text-foreground/80 text-foreground/60">Reels & Media</a>
            <a href="#headshots" className="transition-colors hover:text-foreground/80 text-foreground/60">Headshots</a>
            <a href="#resume" className="transition-colors hover:text-foreground/80 text-foreground/60">Resume</a>
            <a href="#bio" className="transition-colors hover:text-foreground/80 text-foreground/60">Bio</a>
            <a href="#contact" className="transition-colors hover:text-foreground/80 text-foreground/60">Contact</a>
          </nav>
          <Button variant="default" className="hidden md:inline-flex rounded-full">
            <Download className="w-4 h-4 mr-2" /> Resume PDF
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* 
          HERO SECTION 
          High impact visual. Placeholder for a massive cinematic photo or video montage background.
        */}
        <section className="w-full py-32 md:py-48 lg:py-56 bg-black text-white relative overflow-hidden flex items-center justify-center min-h-[80vh]">
          {/* Background Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/60 to-transparent z-10" />
          
          {/* PLACEHOLDER: Main Hero Image or Video Background */}
          <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center text-zinc-600 border-2 border-dashed border-zinc-700 m-4">
            <div className="flex flex-col items-center">
              <ImageIcon className="w-12 h-12 mb-2 opacity-50" />
              <span>[PLACEHOLDER: Hero Image or Silent Background Video Loop]</span>
            </div>
          </div>
          
          <div className="container relative z-20 mx-auto px-4 md:px-8 flex flex-col items-center text-center space-y-6">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter drop-shadow-lg">
              ALEX BAYLARD
            </h1>
            <p className="text-xl md:text-3xl text-zinc-200 max-w-[800px] uppercase tracking-[0.3em] font-medium">
              Actor • Singer • Dancer
            </p>
            <p className="text-zinc-400 tracking-widest text-sm md:text-base">AEA / SAG-AFTRA ELIGIBLE</p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-8 w-full max-w-md justify-center">
              <Button size="lg" className="rounded-full bg-white text-black hover:bg-zinc-200 w-full sm:w-auto">
                Watch Sizzle Reel <Play className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-white text-white hover:bg-white/10 hover:text-white w-full sm:w-auto backdrop-blur-sm">
                View Resume <FileText className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* 
          NEWS / UPCOMING 
          Shows momentum. Casting directors like to see actors who are currently working.
        */}
        <section id="news" className="w-full py-16 bg-zinc-900 text-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-zinc-800/50 p-6 md:p-8 rounded-2xl border border-zinc-700/50">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <h3 className="text-xl md:text-2xl font-semibold">Currently Performing</h3>
              </div>
              <div className="text-zinc-300 md:text-lg text-center md:text-left flex-1">
                <span className="font-bold text-white">[Role Name]</span> in <span className="italic">[Show Title]</span> at <span className="font-semibold">[Theatre/Venue Name]</span>
              </div>
              <Button variant="outline" className="rounded-full whitespace-nowrap border-zinc-600 hover:bg-zinc-700 hover:text-white">
                Get Tickets
              </Button>
            </div>
          </div>
        </section>

        {/* 
          REELS & MEDIA
          Embedded videos so CDs don't have to leave the page.
        */}
        <section id="media" className="w-full py-24 bg-zinc-50 dark:bg-zinc-950">
          <div className="container mx-auto px-4 md:px-8 space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Reels & Media</h2>
              <p className="text-zinc-500 text-lg max-w-2xl mx-auto">Vocal selections, dance reels, and on-camera footage.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Primary Reel Placeholder */}
              <div className="lg:col-span-2 aspect-video bg-zinc-200 dark:bg-zinc-800 rounded-2xl flex flex-col items-center justify-center text-zinc-400 border-2 border-dashed border-zinc-300 dark:border-zinc-700">
                <Clapperboard className="w-12 h-12 mb-4 opacity-50" />
                <p className="font-medium text-lg">[PLACEHOLDER: Main Sizzle Reel / Theatrical Reel]</p>
                <p className="text-sm">Embed YouTube / Vimeo iframe here</p>
              </div>

              {/* Secondary Reels */}
              <div className="aspect-video bg-zinc-200 dark:bg-zinc-800 rounded-2xl flex flex-col items-center justify-center text-zinc-400 border-2 border-dashed border-zinc-300 dark:border-zinc-700">
                <Play className="w-8 h-8 mb-2 opacity-50" />
                <p className="font-medium">[PLACEHOLDER: Vocal Reel]</p>
              </div>
              <div className="aspect-video bg-zinc-200 dark:bg-zinc-800 rounded-2xl flex flex-col items-center justify-center text-zinc-400 border-2 border-dashed border-zinc-300 dark:border-zinc-700">
                <Play className="w-8 h-8 mb-2 opacity-50" />
                <p className="font-medium">[PLACEHOLDER: Dance / Movement Reel]</p>
              </div>
            </div>
          </div>
        </section>

        {/* 
          HEADSHOTS & GALLERY 
          Masonry or clean grid of professional shots and production stills.
        */}
        <section id="headshots" className="w-full py-24 bg-white dark:bg-zinc-900 border-y dark:border-zinc-800">
          <div className="container mx-auto px-4 md:px-8 space-y-12">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Headshots</h2>
                <p className="text-zinc-500 text-lg">Theatrical, Commercial, and Legit.</p>
              </div>
              <Button variant="outline" className="rounded-full">
                <Download className="w-4 h-4 mr-2" /> Download High-Res
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Headshot Placeholders */}
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-[4/5] bg-zinc-100 dark:bg-zinc-800 rounded-xl flex flex-col items-center justify-center text-zinc-400 border-2 border-dashed border-zinc-200 dark:border-zinc-700 overflow-hidden relative group">
                  <ImageIcon className="w-10 h-10 mb-2 opacity-50" />
                  <p className="text-sm font-medium">[PLACEHOLDER: Headshot {i}]</p>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button variant="secondary" size="sm" className="rounded-full">Enlarge</Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Production Stills Gallery Placeholder */}
            <div className="pt-12">
              <h3 className="text-2xl font-bold mb-6">Production Gallery</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div key={i} className="aspect-square bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-400 border border-dashed border-zinc-200 dark:border-zinc-700">
                    <span className="text-xs">[Still {i}]</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 
          RESUME 
          HTML text based for SEO and quick reading, plus a PDF download.
        */}
        <section id="resume" className="w-full py-24 bg-zinc-50 dark:bg-zinc-950">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl space-y-12">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-zinc-200 dark:border-zinc-800 pb-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">Resume</h2>
                <div className="flex gap-4 text-sm font-medium text-zinc-500">
                  <span>Height: [X'X"]</span>
                  <span>Hair: [Color]</span>
                  <span>Eyes: [Color]</span>
                  <span>Voice: [Range]</span>
                </div>
              </div>
              <Button className="rounded-full bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200">
                <Download className="w-4 h-4 mr-2" /> PDF Resume
              </Button>
            </div>

            {/* Resume Categories Placholders */}
            <div className="space-y-12">
              {/* Category */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold uppercase tracking-wider text-zinc-400">Broadway / National Tours</h3>
                <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
                  {[1, 2].map((i) => (
                    <div key={i} className="py-4 flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <div className="font-semibold text-lg w-1/3">[Show Title {i}]</div>
                      <div className="text-zinc-600 dark:text-zinc-400 w-1/3">[Role Name]</div>
                      <div className="text-sm text-zinc-500 text-right w-1/3">[Theatre/Company] / Dir. [Director]</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold uppercase tracking-wider text-zinc-400">Regional Theatre</h3>
                <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="py-4 flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <div className="font-semibold text-lg w-1/3">[Regional Show {i}]</div>
                      <div className="text-zinc-600 dark:text-zinc-400 w-1/3">[Role Name]</div>
                      <div className="text-sm text-zinc-500 text-right w-1/3">[Theatre] / Dir. [Director]</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Training */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold uppercase tracking-wider text-zinc-400">Training</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-100 dark:border-zinc-800">
                    <div className="font-semibold mb-1">[University/Conservatory Name]</div>
                    <div className="text-sm text-zinc-500">[Degree, e.g. BFA Musical Theatre]</div>
                  </div>
                  <div className="p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-100 dark:border-zinc-800">
                    <div className="font-semibold mb-1">Acting / Voice / Dance</div>
                    <div className="text-sm text-zinc-500">Instructors: [Names]</div>
                  </div>
                </div>
              </div>

              {/* Special Skills */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold uppercase tracking-wider text-zinc-400">Special Skills</h3>
                <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                  [Placeholder for skills: e.g., Sight-reading, Acrobatics, Dialects (RP, Cockney, Southern), Stage Combat, Juggling, Valid US Passport, etc.]
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 
          BIO SECTION
        */}
        <section id="bio" className="w-full py-24 bg-white dark:bg-zinc-900">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-5 aspect-[3/4] bg-zinc-200 dark:bg-zinc-800 rounded-2xl overflow-hidden relative border-2 border-dashed border-zinc-300 dark:border-zinc-700 flex flex-col items-center justify-center text-zinc-400">
                <ImageIcon className="w-12 h-12 mb-4 opacity-50" />
                <p className="font-medium text-center px-4">[PLACEHOLDER: Candid/Lifestyle or Secondary Headshot]</p>
              </div>
              <div className="md:col-span-7 space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">About Alex</h2>
                <div className="space-y-4 text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed font-serif">
                  <p>
                    [PLACEHOLDER BIO PARAGRAPH 1] Alex Baylard is a versatile performer based in New York City. With a strong foundation in musical theater, classical acting, and contemporary dance, he brings dynamic energy and emotional depth to every role.
                  </p>
                  <p>
                    [PLACEHOLDER BIO PARAGRAPH 2] Recent credits include regional productions, independent films, and contemporary dance showcases across the country. He has performed at [Notable Venues] and collaborated with directors such as [Names].
                  </p>
                  <p>
                    [PLACEHOLDER BIO PARAGRAPH 3] When not on stage or set, Alex continues to hone his craft through ongoing vocal and physical training, and enjoys [Hobbies/Interests].
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 
          CONTACT & REPRESENTATION 
          Crucial for booking. Direct clear contact info.
        */}
        <section id="contact" className="w-full py-24 bg-zinc-950 text-white">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center space-y-16">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Let's Connect</h2>
              <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto">
                Currently seeking representation / Available for theatrical bookings, commercial work, and creative collaborations.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              {/* Representation Card */}
              <Card className="bg-zinc-900 border-zinc-800 text-white">
                <CardContent className="p-8 space-y-6">
                  <h3 className="text-2xl font-bold uppercase tracking-wider text-zinc-500">Representation</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="font-semibold text-xl">[Agency Name]</div>
                      <div className="text-zinc-400">[Agent Name]</div>
                    </div>
                    <div className="flex items-center gap-3 text-zinc-300">
                      <Mail className="w-5 h-5 text-zinc-500" />
                      <a href="mailto:agent@agency.com" className="hover:text-white transition-colors">[agent@agency.com]</a>
                    </div>
                    <div className="flex items-center gap-3 text-zinc-300">
                      <Phone className="w-5 h-5 text-zinc-500" />
                      <span>[(555) 123-4567]</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Direct Contact Card */}
              <Card className="bg-zinc-900 border-zinc-800 text-white">
                <CardContent className="p-8 space-y-6">
                  <h3 className="text-2xl font-bold uppercase tracking-wider text-zinc-500">Direct Contact</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-zinc-300">
                      <Mail className="w-5 h-5 text-zinc-500" />
                      <a href="mailto:alex@example.com" className="hover:text-white transition-colors">[alex.baylard@email.com]</a>
                    </div>
                    <div className="flex items-center gap-3 text-zinc-300">
                      <MapPin className="w-5 h-5 text-zinc-500" />
                      <span>New York, NY (Local Hire)</span>
                    </div>
                    <div className="flex items-center gap-3 text-zinc-300 pt-4">
                      <Instagram className="w-5 h-5 text-zinc-500" />
                      <a href="#" className="hover:text-white transition-colors">@alexbaylard</a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 py-12 bg-white dark:bg-black">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="font-bold text-lg tracking-tight uppercase">Alex Baylard</div>
          <div className="flex gap-6 text-zinc-500">
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Actors Access</a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Backstage</a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">IMDb</a>
          </div>
          <div className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Alex Baylard. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}