import ContactForm from '../../components/ContactForm';
import FAQ from '../../components/FAQ';
import GospelBlock from '../../components/GospelBlock';

export const metadata = {
  title: 'Reach Out — Got Questions?',
  description: 'No question is off limits. No judgment. Real answers from people who used to have the same doubts.',
};

export default function ReachPage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src="/images/reach-hero.jpg"
          alt='Gritty cinematic photorealistic urban night photography, dark open city road with wide sidewalk and breathing room (not a narrow alley), a young woman in a dark hoodie walking along the wet pavement beside the road at night, head slightly down in a searching way, a lit-up old phone booth on the side of the road glowing with warm interior light, "GOSPEL GUERRILLA" spray-painted in raw gritty dripping graffiti style on the side of the phone booth, heavy rain, wet reflective road and puddles catching the phone booth light and streetlights, open road feel with space and distant city buildings in the background, raw honest reaching-out atmosphere, same visual style and mood as the questions page bench hero, no cross, no bible, no other text or logos.'
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />

        <div className="relative z-10 text-center px-5">
          <div className="text-[#FF5A6D] text-xs font-black tracking-[3px] mb-4">NO QUESTION IS TOO DARK</div>
          <h1 className="headline text-6xl md:text-7xl tracking-[-3px] mb-6">REACH OUT.<br />GOT QUESTIONS?</h1>
          <p className="text-2xl md:text-3xl font-semibold text-[#d1d1d1]">
            No judgment. No performance. Just honest conversation with people who used to have the same doubts.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-5 pb-16">
        <ContactForm />
      </section>

      <section className="section bg-[#111111] border-y border-[#2a2a2a]">
        <div className="max-w-5xl mx-auto px-5">
          <div className="text-center mb-10">
            <div className="text-[#FF5A6D] text-sm font-black tracking-[2px] mb-2">REAL ANSWERS FOR REAL DOUBTS</div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">Common Questions</h2>
          </div>
          <FAQ />
        </div>
      </section>

      <section className="section">
        <GospelBlock compact />
      </section>
    </>
  );
}
