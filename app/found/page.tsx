import { Metadata } from 'next';
import CTAButton from '../../components/CTAButton';

export const metadata: Metadata = {
  title: 'Someone Prayed You Would Find This Page',
  description: 'Don’t waste it.',
};

export default function FoundPage() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background image - gritty, atmospheric cross in darkness */}
      <img
        src="/images/found.jpg"
        alt="Dramatic beam of light illuminating a cross in a gritty rainy urban alley at night"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark overlay for text readability while keeping the gritty mood */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/65 to-black/80" />

      <div className="relative z-10 max-w-2xl mx-auto px-5 text-center">
        <p className="text-3xl md:text-5xl font-black tracking-tight mb-8 leading-tight text-white drop-shadow-lg">
          Someone prayed you would find this page.<br />Don’t waste it.
        </p>

        <div className="mb-10 text-[#d1d1d1] text-lg drop-shadow-md">
          If you prayed the prayer in faith, heaven is celebrating.<br />
          If you’re still wrestling, that’s okay too. Jesus meets you right where you are.
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton href="/prayer" variant="primary" className="text-lg">
            I’M READY TO PRAY OR BE PRAYED FOR
          </CTAButton>
          <CTAButton href="/welcome" variant="secondary" className="text-lg">
            GO BACK TO WELCOME
          </CTAButton>
        </div>

        <p className="mt-10 text-sm text-[#a3a3a3] drop-shadow-md">
          This moment matters more than you know.
        </p>
      </div>
    </section>
  );
}
