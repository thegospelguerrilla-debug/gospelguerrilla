import CTAButton from '../../components/CTAButton';

export const metadata = {
  title: 'About GospelGuerrilla',
  description: 'Just some broken people who met Jesus and can’t shut up about it. No titles. No empire. Just the raw Gospel.',
};

export default function AboutPage() {
  return (
    <>
      <section className="section pt-20">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <div className="text-[#FF5A6D] text-sm font-black tracking-[3px] mb-4">NO BIG MINISTRY. NO BRANDING.</div>
          <h1 className="headline text-6xl md:text-7xl tracking-[-3px] mb-8">WHO WE ARE</h1>

          <div className="text-xl leading-relaxed text-[#d1d1d1] max-w-2xl mx-auto space-y-6">
            <p>We’re not a big organization. We’re just a handful of people who were dead in our sin, met Jesus, and can’t shut up about it.</p>
            <p>No fancy titles. No religious empire. No performance. Just the Truth of Jesus.</p>
          </div>
        </div>
      </section>

      {/* Hero type visual behind "Who We Are" using the wooden cross alley image */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src="/images/why-guerrilla.jpg"
          alt="Rainy gritty urban alley at night with a wooden cross leaning against a graffiti-covered brick wall, dramatic light beam shining down, wet pavement and street art"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
        <div className="relative z-10 text-center px-5">
          <p className="text-4xl md:text-6xl font-black tracking-[-2px] text-white drop-shadow-lg">
            THE STREETS.<br />THE ALLEYS.<br />THE MESS.
          </p>
        </div>
      </section>

      <section className="section bg-black border-y border-[#2a2a2a]">
        <div className="max-w-4xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-center bg-black">
          <div className="bg-black">
            <h2 className="text-4xl font-black tracking-tight mb-6">Why “Guerrilla”?</h2>
            <div className="space-y-4 text-lg text-[#c1c1c1]">
              <p>Because we go where religion often won&apos;t.</p>
              <p>Because we speak the truth that people avoid.</p>
              <p>Because the Gospel was never meant to be a secret only talked about behind stained-glass windows.</p>
              <p>The Gospel belongs in the dark places where hope is hard to find.</p>
            </div>
          </div>

          <div className="relative aspect-[16/10] bg-black overflow-hidden">
            <img 
              src="/images/guerrilla-tag.jpg"
              alt="Graffiti signature of GOSPEL GUERRILLA in black, white and red spray paint style on black background"
              className="absolute bottom-2 right-2 max-w-[90%] max-h-[90%] object-contain"
              style={{ transform: 'rotate(-5deg)' }}
            />
          </div>
        </div>
      </section>

      <section className="section max-w-3xl mx-auto px-5">
        <h2 className="text-3xl font-black mb-8 text-center tracking-tight">Our Only Message</h2>
        <div className="gritty-card text-xl leading-relaxed">
          <p className="mb-6">
            We have sinned against a Holy God. The penalty is death and eternal separation from Him.
          </p>
          <p className="mb-6">
            Jesus Christ, fully God and fully man, lived the perfect life we couldn&apos;t live, died the death we deserve, and rose from the dead on the third day.
          </p>
          <p className="font-semibold text-[#FF5A6D]">
            The only way to be saved is to turn from your sin and trust Jesus alone. Not religion. Not trying harder. Jesus.
          </p>
        </div>
      </section>

      <section className="section bg-[#111111] border-t border-[#2a2a2a]">
        <div className="max-w-3xl mx-auto px-5">
          <h3 className="text-[#FF5A6D] text-3xl font-black tracking-tight mb-8 text-center">WHAT WE ACTUALLY BELIEVE</h3>
          <div className="gritty-card text-base leading-relaxed text-[#c1c1c1]">
            <ul className="space-y-3 list-none">
              <li>• The Bible is God’s Word — true, authoritative, and sufficient. (2 Timothy 3:16-17)</li>
              <li>• There is one God in three persons: Father, Son, and Holy Spirit. (Matthew 28:19; 2 Corinthians 13:14)</li>
              <li>• All people are sinners and cannot save themselves. (Romans 3:23; Ephesians 2:1-3)</li>
              <li>• Salvation is by grace alone, through faith alone, in Christ alone. (Ephesians 2:8-9)</li>
              <li>• Jesus is the only way to the Father. No other religion or path saves. (John 14:6)</li>
              <li>• True faith produces real change — not perfection, but new desires and a new direction. (2 Corinthians 5:17; James 2:17)</li>
            </ul>
          </div>

          <div className="text-center mt-10">
            <p className="mb-5 text-lg">Got questions or want to talk?</p>
            <CTAButton href="/reach" variant="primary">REACH OUT</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
