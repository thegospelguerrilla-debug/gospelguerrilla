import { Metadata } from 'next';
import CTAButton from '../../components/CTAButton';

export const metadata: Metadata = {
  title: 'Welcome — You Are Born Again',
  description: 'If you prayed the prayer in faith, you have been born again. Here’s what comes next.',
};

export default function WelcomePage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src="/images/welcome-hero.jpg"
          alt="Gritty rainy urban alley at night with wooden cross and dramatic light beam, welcoming new beginning atmosphere"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />

        <div className="relative z-10 text-center px-5">
          <div className="text-[#FF5A6D] text-sm font-black tracking-[3px] mb-4">WELCOME TO THE FAMILY</div>
          <h1 className="headline text-6xl md:text-7xl tracking-[-3px] mb-6">YOU ARE BORN AGAIN.</h1>
          <p className="text-2xl md:text-3xl font-semibold text-[#d1d1d1] max-w-2xl mx-auto">
            These aren’t magic words. God looks at the heart.<br />If this is real for you, you have just been born again.
          </p>
        </div>
      </section>

      <section className="section max-w-3xl mx-auto px-5">
        <div className="gritty-card">
          <h2 className="text-2xl font-bold mb-6 text-center">What just happened?</h2>
          <div className="space-y-4 text-[17px] leading-relaxed text-[#d1d1d1]">
            <p>You turned from your old life and put your full trust in Jesus. The Bible says you are a new creation. The old has passed away, and the new has come.</p>
            <p>Heaven is celebrating right now. You are no longer under judgment — you are a child of God.</p>
          </div>
        </div>
      </section>

      <section className="section bg-[#111111] border-y border-[#2a2a2a]">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="text-3xl font-black tracking-tight mb-8 text-center">What now?</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="gritty-card">
              <h3 className="font-bold text-xl mb-3 text-[#FF5A6D]">1. Tell someone</h3>
              <p className="text-[#c1c1c1] mb-4">Don’t keep this to yourself. Share what happened with a friend or family member you trust.</p>
              <div className="flex gap-3">
                <CTAButton href="/prayer" variant="primary" className="text-sm">I NEED PEOPLE PRAYING FOR ME</CTAButton>
              </div>
            </div>

            <div className="gritty-card">
              <h3 className="font-bold text-xl mb-3 text-[#FF5A6D]">2. Get in the Word</h3>
              <p className="text-[#c1c1c1] mb-4">Start reading the Bible every day. Begin with the Gospel of John. Ask God to speak to you.</p>
              <p className="text-sm text-[#a3a3a3]">The same Spirit that raised Jesus from the dead now lives in you.</p>
            </div>

            <div className="gritty-card">
              <h3 className="font-bold text-xl mb-3 text-[#FF5A6D]">3. Walk with others</h3>
              <p className="text-[#c1c1c1] mb-4">You weren’t meant to do this alone. Connect with people who are following Jesus on the same raw, real path.</p>
              <CTAButton href="/reach" variant="secondary" className="text-sm">I WANT TO TALK TO SOMEONE</CTAButton>
            </div>

            <div className="gritty-card">
              <h3 className="font-bold text-xl mb-3 text-[#FF5A6D]">4. If you have questions or doubts</h3>
              <p className="text-[#c1c1c1] mb-4">Jesus isn’t scared of your questions. Honest doubts are part of real faith.</p>
              <CTAButton href="/questions" variant="secondary" className="text-sm">I HAVE QUESTIONS</CTAButton>
            </div>
          </div>
        </div>
      </section>

      <section className="section text-center">
        <div className="max-w-xl mx-auto px-5">
          <p className="text-2xl font-semibold mb-6">
            This is the most important decision you will ever make.
          </p>
          <p className="text-[#a3a3a3] mb-8">
            The road ahead won’t always be easy, but you are not alone. Jesus is with you, and so are we.
          </p>
          <CTAButton href="/found" variant="primary" className="text-lg px-10">
            DON’T WASTE THIS
          </CTAButton>
        </div>
      </section>
    </>
  );
}
