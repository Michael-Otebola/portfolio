export function ContactSection() {
  return (
    <section id="contact" className="py-32 relative z-10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8" data-testid="contact-title">
            Let's Create Something <span className="text-primary">Amazing</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto" data-testid="contact-description">
            Ready to transform your digital presence with cutting-edge web solutions and immersive user experiences?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="https://wa.me/2349012919868" 
              target="_blank" 
              rel="noopener noreferrer"
              className="liquid-btn px-8 py-4 text-white font-semibold rounded-full inline-flex items-center justify-center"
              data-testid="contact-whatsapp"
            >
              <span className="relative z-10">
                <i className="fab fa-whatsapp mr-2"></i> WhatsApp
              </span>
            </a>
            <a 
              href="https://www.linkedin.com/in/michael-otegbola-269b8324a/" 
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-full px-8 py-4 border border-accent/20 hover:border-accent/50 transition-all inline-flex items-center justify-center"
              data-testid="contact-linkedin"
            >
              <i className="fab fa-linkedin mr-2"></i> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
