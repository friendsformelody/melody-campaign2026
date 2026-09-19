// script.js

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // 1. Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 2. Contact Form Submission (Basic client-side handling)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (name && email && message) {
                // Here you would normally send the data to your backend (e.g., Supabase, Formspree, EmailJS, etc.)
                // For now, just show a success message
                alert(`Thank you, ${name}! Your message has been sent. We will get back to you soon.`);
                
                // Clear the form
                contactForm.reset();
            } else {
                alert('Please fill out all fields.');
            }
        });
    }

    // 3. Donation Form Submission (Placeholder)
    const donateForm = document.getElementById('donate-form');
    if (donateForm) {
        donateForm.addEventListener('submit', function (e) {
            e.preventDefault();
            
            const amount = document.getElementById('amount').value;
            
            if (amount && parseFloat(amount) > 0) {
                // In a real campaign site, this would redirect to Stripe, PayPal, ActBlue, or similar
                alert(`Thank you for your generous donation of $${amount}! You will be redirected to the secure payment page shortly.`);
                
                // Example: Redirect to a payment processor (replace with your actual link)
                // window.location.href = `https://your-payment-processor.com/donate?amount=${amount}`;
                
                donateForm.reset();
            } else {
                alert('Please enter a valid donation amount greater than $0.');
            }
        });
    }

    // 4. Simple mobile menu toggle (for smaller screens)
    const nav = document.querySelector('nav ul');
    if (window.innerWidth <= 768) {
        // Create hamburger menu button if needed (you can add this to HTML if preferred)
        const hamburger = document.createElement('div');
        hamburger.className = 'hamburger';
        hamburger.innerHTML = '☰';
        document.querySelector('header .container').appendChild(hamburger);
        
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
        
        // Close menu when clicking a link
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
            });
        });
    }

    // Optional: Add a simple "back to top" button
    const backToTop = document.createElement('button');
    backToTop.innerText = '↑ Top';
    backToTop.className = 'back-to-top';
    document.body.appendChild(backToTop);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
// 5. Drug Trafficking Modal
const drugBtn = document.getElementById('drug-btn');
const issueModal = document.createElement('div');
issueModal.className = 'issue-info';
issueModal.innerHTML = `
    <h3>Drug Trafficking</h3>
    <div class="issue-info-content">
        <p>Utah has a serious drug-trafficking problem and we need to talk about what it means for our communities.</p>
        
        <p>The U.S. Drug Enforcement Administration (DEA) has specifically identified Utah—through Interstates 15 and 80—as a corridor for illegal drugs being trafficked north and east.</p>
        
        <p>In 2025, approximately 2 million fentanyl pills were seized in Utah, double the previous year's total.</p>
        
        <p>But statistics don't tell the whole story.</p>
        
        <p>I'm a hairdresser here in our community. I spend my days talking with people and, more importantly, listening to what is on their minds and what their families, children, and friends are going through. I've heard firsthand about struggles with addiction, financial pressures, and families trying desperately to help someone they love.</p>
        
        <button class="close-btn">✕</button>
    </div>
`;

document.body.appendChild(issueModal);

// Open modal
drugBtn.addEventListener('click', function() {
    issueModal.classList.add('active');
});

// Close modal
const closeBtn = issueModal.querySelector('.close-btn');
closeBtn.addEventListener('click', function() {
    issueModal.classList.remove('active');
});

// Close modal when clicking outside the content area
issueModal.addEventListener('click', function(e) {
    if (e.target === issueModal) {
        issueModal.classList.remove('active');
    }
});
