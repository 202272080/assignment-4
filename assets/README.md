# Personal Portfolio Web Application
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

A modern, responsive personal portfolio website showcasing web development projects and skills. Built with vanilla HTML, CSS, and JavaScript, this portfolio demonstrates clean code practices, responsive design, and interactive user experiences.

![Portfolio Preview](assets/images/preview.png)

## 🚀 Live Demo

**[View Live Portfolio →](https://yourusername.github.io/assignment-4)**

## ✨ Features

### Core Functionality
- **Responsive Design** - Fully responsive across all devices (mobile, tablet, desktop)
- **Dark/Light Theme Toggle** - Persistent theme preference using localStorage
- **Smooth Animations** - Intersection Observer API for scroll-triggered animations
- **Interactive Navigation** - Smooth scrolling with active section highlighting
- **Project Filtering** - Dynamic project categorization and filtering
- **Contact Form** - Client-side validation with user feedback
- **Typing Effect** - Animated hero subtitle with multiple roles

### Performance & Accessibility
- **Optimized Performance** - Efficient CSS and JavaScript
- **Semantic HTML** - Proper HTML5 semantic elements
- **ARIA Labels** - Accessibility attributes for screen readers
- **Keyboard Navigation** - Full keyboard support (Tab, Enter, Escape, 'T' for theme)
- **Mobile-First Approach** - Progressive enhancement strategy
- **Cross-Browser Compatible** - Tested on Chrome, Firefox, Safari, Edge

### Interactive Elements
- **Skill Progress Bars** - Animated skill level indicators
- **Animated Statistics** - Counter animation on scroll
- **Project Cards** - Hover effects with overlay links
- **Scroll to Top Button** - Appears after scrolling down
- **Form Validation** - Real-time input validation

## 📁 Project Structure

```
assignment-4/
│
├── index.html                 # Main HTML file
├── README.md                  # Project documentation
├── .gitignore                 # Git ignore file
│
├── css/
│   └── styles.css            # All CSS styles and animations
│
├── js/
│   └── script.js             # JavaScript functionality
│
├── assets/
│   ├── images/               # Image assets (add your images here)
│   │   └── preview.png       # Portfolio preview image
│   └── resume.pdf            # Downloadable resume (optional)
│
├── docs/
│   ├── ai-usage-report.md    # Detailed AI usage documentation
│   └── technical-documentation.md  # Technical details
│
└── presentation/
    ├── slides.pdf            # Presentation slides
    └── demo-video.mp4        # Demo video (optional)
```

## 🛠️ Technologies Used

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Variables, Grid, Flexbox
- **JavaScript (ES6+)** - Vanilla JavaScript for interactivity

### Libraries & APIs
- **Font Awesome 6.4.0** - Icon library
- **Intersection Observer API** - Scroll animations
- **LocalStorage API** - Theme persistence

### Development Tools
- **Git & GitHub** - Version control
- **VS Code** - Code editor
- **GitHub Pages** - Deployment (or Netlify/Vercel)

## 📥 Installation & Setup

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- A code editor (VS Code recommended)
- Git installed on your computer

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/assignment-4.git
   cd assignment-4
   ```

2. **Open in your browser**
   
   Simply open `index.html` in your web browser:
   ```bash
   # On Windows
   start index.html
   
   # On macOS
   open index.html
   
   # On Linux
   xdg-open index.html
   ```

3. **Or use a local server (recommended)**
   
   Using Python:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Then open http://localhost:8000 in your browser
   ```
   
   Using Node.js (npx):
   ```bash
   npx http-server -p 8000
   
   # Then open http://localhost:8000 in your browser
   ```
   
   Using VS Code Live Server extension:
   - Install "Live Server" extension in VS Code
   - Right-click on `index.html` and select "Open with Live Server"

## 🚀 Deployment

### GitHub Pages

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/assignment-4.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Source", select "main" branch
   - Click "Save"
   - Your site will be available at `https://yourusername.github.io/assignment-4`

### Netlify

1. **Create a Netlify account** at [netlify.com](https://www.netlify.com)

2. **Deploy via Git**
   - Click "New site from Git"
   - Connect your GitHub repository
   - Build settings: Leave blank (static site)
   - Click "Deploy site"

3. **Or drag and drop**
   - Simply drag your project folder to Netlify's deploy zone

### Vercel

1. **Create a Vercel account** at [vercel.com](https://vercel.com)

2. **Deploy**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Deploy
   vercel
   ```

## 🎨 Customization Guide

### Personal Information

1. **Update HTML content** in `index.html`:
   - Replace "Your Name" with your actual name
   - Update social media links
   - Add your email and contact information
   - Modify project descriptions

2. **Add your projects**:
   - Update project cards with your actual projects
   - Add project images to `assets/images/`
   - Link to live demos and GitHub repositories

3. **Update skills**:
   - Modify skill percentages in the Skills section
   - Add or remove skills as needed

### Styling

1. **Colors**: Edit CSS variables in `css/styles.css`:
   ```css
   :root {
       --primary-color: #2563eb;  /* Change to your preferred color */
       --secondary-color: #7c3aed;
       /* ... other variables ... */
   }
   ```

2. **Fonts**: Add custom fonts in the `<head>` of `index.html`:
   ```html
   <link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
   ```

3. **Images**: Replace placeholder icons with actual images:
   - Add images to `assets/images/`
   - Update `<div class="image-placeholder">` with `<img>` tags

### Functionality

Edit `js/script.js` to customize:
- Typing effect text array
- Animation timing
- Form submission endpoint (currently simulated)

## 🤖 AI Integration

This project was developed with assistance from various AI tools to enhance productivity and code quality. For detailed information about AI usage, see [`docs/ai-usage-report.md`](docs/ai-usage-report.md).

### AI Tools Used
- **GitHub Copilot** - Code completion and suggestions
- **ChatGPT/Claude** - Problem-solving and code review
- **AI-powered debugging** - Error detection and fixes

### Key Benefits
- Faster development workflow
- Improved code quality and best practices
- Enhanced problem-solving capabilities
- Better documentation generation

## 📚 Documentation

- **[AI Usage Report](docs/ai-usage-report.md)** - Comprehensive documentation of AI tool usage
- **[Technical Documentation](docs/technical-documentation.md)** - Detailed technical specifications

## 🧪 Testing

### Browser Compatibility
Tested and working on:
- ✅ Chrome 100+
- ✅ Firefox 100+
- ✅ Safari 15+
- ✅ Edge 100+

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 968px
- Desktop: > 968px

### Testing Checklist
- [ ] Navigation works on all pages
- [ ] Theme toggle persists on refresh
- [ ] Forms validate correctly
- [ ] All links work properly
- [ ] Images load correctly
- [ ] Mobile menu functions properly
- [ ] Animations perform smoothly
- [ ] Page loads in under 3 seconds

## 🐛 Known Issues

- Form submission is currently simulated (needs backend integration)
- Image placeholders need to be replaced with actual images
- Resume download link needs to be updated with actual resume file

## 🔮 Future Enhancements

- [ ] Backend integration for contact form
- [ ] Blog section with CMS integration
- [ ] Project case studies with detailed pages
- [ ] Testimonials section
- [ ] Downloadable resume
- [ ] Service Worker for offline functionality
- [ ] Analytics integration
- [ ] Multi-language support
- [ ] Additional animations and micro-interactions

## 📖 Learning Outcomes

Through this project, I demonstrated proficiency in:

- ✅ **HTML5** - Semantic markup, accessibility, SEO best practices
- ✅ **CSS3** - Flexbox, Grid, animations, responsive design, CSS variables
- ✅ **JavaScript** - DOM manipulation, event handling, API usage, ES6+ features
- ✅ **Responsive Design** - Mobile-first approach, media queries
- ✅ **Git & GitHub** - Version control, branching, collaborative workflows
- ✅ **Web Performance** - Optimization techniques, lazy loading concepts
- ✅ **Accessibility** - ARIA labels, keyboard navigation, semantic HTML
- ✅ **AI Integration** - Using AI tools effectively in development workflow

## 🤝 Contributing

This is a personal portfolio project, but suggestions are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Your Name**

- Website: [yourwebsite.com](https://yourwebsite.com)
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [@yourusername](https://linkedin.com/in/yourusername)
- Email: your.email@example.com

## 🙏 Acknowledgments

- Course instructors and teaching assistants
- Open source community
- Font Awesome for icons
- AI tools (GitHub Copilot, ChatGPT, Claude) for development assistance
- All the online resources and tutorials that helped along the way

## 📧 Contact

For questions or feedback, please reach out:

- **Email**: your.email@example.com
- **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/yourusername)
- **GitHub Issues**: [Create an issue](https://github.com/yourusername/assignment-4/issues)

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ and lots of ☕

</div>
