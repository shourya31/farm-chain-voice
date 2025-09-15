import { Sprout, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Platform",
      links: [
        { name: "How It Works", href: "#how-it-works" },
        { name: "Features", href: "#features" },
        { name: "Technology", href: "#technology" },
        { name: "Benefits", href: "#benefits" }
      ]
    },
    {
      title: "Solutions",
      links: [
        { name: "For Farmers", href: "#farmers" },
        { name: "For Transporters", href: "#transporters" },
        { name: "For Retailers", href: "#retailers" },
        { name: "For Consumers", href: "#consumers" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#docs" },
        { name: "API Reference", href: "#api" },
        { name: "Case Studies", href: "#cases" },
        { name: "Support", href: "#support" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Partnerships", href: "#partnerships" },
        { name: "Careers", href: "#careers" },
        { name: "Contact", href: "#contact" }
      ]
    }
  ];

  return (
    <footer className="bg-earth text-earth-foreground">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="bg-primary-soft rounded-lg p-2 mr-3">
                <Sprout className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold">AgriChain</h3>
                <p className="text-sm text-earth-foreground/70">Transparent Agriculture</p>
              </div>
            </div>
            <p className="text-earth-foreground/80 leading-relaxed mb-6">
              Empowering sustainable agriculture through blockchain technology and AI innovation. 
              Building trust from farm to table.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-primary" />
                <span>hello@agrichain.platform</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-primary" />
                <span>Global Agricultural Network</span>
              </div>
            </div>
          </div>

          {/* Navigation Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4 text-earth-foreground">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className="text-earth-foreground/70 hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-earth-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-earth-foreground/70">
              © 2024 AgriChain Platform. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-earth-foreground/70 hover:text-primary transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#terms" className="text-earth-foreground/70 hover:text-primary transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#cookies" className="text-earth-foreground/70 hover:text-primary transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;