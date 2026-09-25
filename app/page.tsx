const paths = [
  {
    numeral: 'I',
    title: 'The Shape of Thought',
    subject: 'Philosophy',
    description: 'Learn to inspect an argument, find its hidden premises, and ask what would change your mind.',
    tone: 'gold',
    progress: '6 inquiries',
  },
  {
    numeral: 'II',
    title: 'Patterns in the World',
    subject: 'Mathematics',
    description: 'Meet probability, inference, and modelling as tools for seeing—not merely calculating.',
    tone: 'blue',
    progress: '8 inquiries',
  },
  {
    numeral: 'III',
    title: 'Machines That Learn',
    subject: 'Computing',
    description: 'Build an understanding of intelligence from first principles, one abstraction at a time.',
    tone: 'terracotta',
    progress: '7 inquiries',
  },
];

const principles = [
  ['01', 'Begin with wonder', 'Every path starts with a question worth caring about.'],
  ['02', 'Build from first principles', 'Ideas arrive through intuition, demonstration, and practice.'],
  ['03', 'Leave with better questions', 'Understanding is not an ending. It is a sharper beginning.'],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Good Question home">
          <span className="brand-mark" aria-hidden="true">?</span>
          <span>Good Question</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#paths">Paths</a>
          <a href="#inquiry">Today&apos;s inquiry</a>
          <a href="#method">Our method</a>
        </nav>
        <a className="small-cta" href="#paths">Enter the academy <span aria-hidden="true">→</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-art" aria-hidden="true" />
        <div className="hero-wash" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span>Vol. I</span> An academy for the curious</p>
          <h1>Every understanding begins with a <em>good question.</em></h1>
          <p className="hero-intro">
            Follow beautiful paths through philosophy, mathematics, and computing—guided by curiosity rather than certainty.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#paths">Choose a path <span aria-hidden="true">→</span></a>
            <a className="text-link" href="#inquiry">Explore today&apos;s question</a>
          </div>
        </div>
        <div className="hero-caption" aria-hidden="true">
          <span>38° 43&apos; N</span><i /> <span>The Academy of Inquiry</span>
        </div>
      </section>

      <section className="manifesto" aria-label="Introduction">
        <span className="ornament" aria-hidden="true">✦</span>
        <p>
          Not a library of answers, but a place to practice the art of asking—slowly, rigorously, and with wonder.
        </p>
        <span className="ornament" aria-hidden="true">✦</span>
      </section>

      <section className="paths section-shell" id="paths">
        <div className="section-heading">
          <div>
            <p className="eyebrow">The curriculum</p>
            <h2>Choose your path</h2>
          </div>
          <p>Each path is a sequence of short inquiries. Wander freely, or begin at the beginning.</p>
        </div>

        <div className="path-grid">
          {paths.map((path) => (
            <article className={`path-card ${path.tone}`} key={path.title}>
              <div className="path-topline">
                <span className="numeral">{path.numeral}</span>
                <span className="subject">{path.subject}</span>
              </div>
              <div className="pixel-emblem" aria-hidden="true"><span>?</span></div>
              <h3>{path.title}</h3>
              <p>{path.description}</p>
              <a href="#inquiry" aria-label={`Explore ${path.title}`}>
                Explore the path <span>{path.progress}</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="inquiry section-shell" id="inquiry">
        <div className="inquiry-frame">
          <div className="inquiry-index" aria-hidden="true">
            <span>Today&apos;s</span>
            <strong>?</strong>
            <span>Inquiry</span>
          </div>
          <div className="inquiry-copy">
            <p className="eyebrow">A question for Thursday · Philosophy of mind</p>
            <h2>If every part of you changed, what would remain <em>you?</em></h2>
            <p>
              The Ship of Theseus is usually told as a puzzle about an object. Turn it inward, and it becomes something stranger: a question about memory, identity, and continuity.
            </p>
            <a className="primary-button dark" href="#method">Begin the inquiry <span aria-hidden="true">→</span></a>
          </div>
          <div className="inquiry-note">
            <span>A fragment to carry</span>
            <blockquote>“The unexamined life is not worth living.”</blockquote>
            <cite>— Socrates, via Plato</cite>
          </div>
        </div>
      </section>

      <section className="method section-shell" id="method">
        <div className="section-heading centered">
          <p className="eyebrow">The method</p>
          <h2>How we learn here</h2>
        </div>
        <div className="principle-grid">
          {principles.map(([number, title, description]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="closing">
        <div className="closing-seal" aria-hidden="true">?</div>
        <p className="eyebrow">Your first path awaits</p>
        <h2>What do you want to understand?</h2>
        <a className="primary-button" href="#paths">Enter Good Question <span aria-hidden="true">→</span></a>
      </section>

      <footer>
        <a className="brand" href="#top"><span className="brand-mark" aria-hidden="true">?</span><span>Good Question</span></a>
        <p>A sunlit academy for lifelong inquiry.</p>
        <p>Made for the incurably curious · MMXXVI</p>
      </footer>
    </main>
  );
}
