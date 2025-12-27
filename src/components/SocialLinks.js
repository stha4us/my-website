// Child Component: Social Links
const SocialLinks = () => {
  const socialLinks = [
    { icon: 'fab fa-instagram', url: 'https://instagram.com/utsab199', label: 'Instagram' },
    { icon: 'fab fa-x-twitter', url: 'https://x.com/stha4us', label: 'X' },
    { icon: 'fab fa-facebook', url: 'https://facebook.com/stha4us', label: 'Facebook' },
    { icon: 'fab fa-linkedin', url: 'https://linkedin.com/in/utsab-stha4us', label: 'LinkedIn' },
    { icon: 'fas fa-envelope', url: 'mailto:utsab199@gmail.com', label: 'Email' }
  ];

  return (
    <div className="social-links">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
        >
          <i className={link.icon}></i>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;