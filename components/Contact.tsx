'use client';

export function Contact() {
  return (
    <section className="my-12 text-center">
      <h2 className="text-3xl font-semibold mb-6">Contact</h2>
      <p className="text-muted-foreground mb-4">
        Email: <a href="mailto:yanezvega@gmail.com" className="underline">yanezvega@gmail.com</a>
      </p>
      <p className="text-muted-foreground">
        LinkedIn:{' '}
        <a href="https://www.linkedin.com/in/oscardyanezv" target="_blank" rel="noopener noreferrer" className="underline">
          oscardyanezv
        </a>
      </p>
    </section>
  );
}
