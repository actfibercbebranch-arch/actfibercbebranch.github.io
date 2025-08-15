// ACT Fibernet Coimbatore Branch Website JavaScript

// Plans data from the provided JSON
const plansData = [
    {
        "plan_name": "ACT Starter",
        "speed_mbps": 50,
        "price_monthly": 549,
        "features": ["Unlimited Data", "Free Router", "Free Installation"],
        "description": "Best value for money"
    },
    {
        "plan_name": "ACT Basic", 
        "speed_mbps": 100,
        "price_monthly": 675,
        "features": ["Unlimited Data", "Free Router", "Free Installation"],
        "description": "Perfect for working professionals"
    },
    {
        "plan_name": "ACT Rush",
        "speed_mbps": 200,
        "price_monthly": 825,
        "features": ["Unlimited Data", "Free Router", "Free Installation", "Entertainment Pack"],
        "description": "Recommended for gaming"
    },
    {
        "plan_name": "ACT Sprint",
        "speed_mbps": 300,
        "price_monthly": 1025,
        "features": ["Unlimited Data", "Free Router", "Free Installation", "Premium Features"],
        "description": "Recommended for streaming"
    },
    {
        "plan_name": "ACT Race",
        "speed_mbps": 350,
        "price_monthly": 1125,
        "features": ["Unlimited Data", "Free Router", "Free Installation", "Premium Features"],
        "description": "Best WiFi experience"
    },
    {
        "plan_name": "ACT Bolt",
        "speed_mbps": 500,
        "price_monthly": 1499,
        "features": ["Unlimited Data", "Free Router", "Free Installation", "Ultra Premium"],
        "description": "Fast speeds for multiple devices"
    }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing app...');
    initializeApp();
    setupContactHandlers();
});

function initializeApp() {
    renderPlans();
    console.log('App initialized');
}

// Render Plans
function renderPlans() {
    const plansGrid = document.getElementById('plansGrid');
    if (!plansGrid) {
        console.error('Plans grid element not found');
        return;
    }
    
    plansGrid.innerHTML = '';
    
    plansData.forEach(plan => {
        const planCard = createPlanCard(plan);
        plansGrid.appendChild(planCard);
    });
    
    console.log('Plans rendered successfully');
}

// Create Plan Card
function createPlanCard(plan) {
    const card = document.createElement('div');
    card.className = 'plan-card';
    
    // Create features list HTML
    const featuresHTML = plan.features.map(feature => 
        `<li>${feature}</li>`
    ).join('');
    
    card.innerHTML = `
        <div class="plan-card__name">${plan.plan_name}</div>
        <div class="plan-card__speed">${plan.speed_mbps} <span style="font-size: 1rem; color: #6c757d;">Mbps</span></div>
        <div class="plan-card__price">₹${plan.price_monthly}<span style="font-size: 1rem; font-weight: normal; color: #6c757d;">/month</span></div>
        <div class="plan-card__description">${plan.description}</div>
        <ul class="plan-card__features">
            ${featuresHTML}
        </ul>
        <button class="plan-card__button" data-plan="${plan.plan_name}" data-speed="${plan.speed_mbps}" data-price="${plan.price_monthly}">Choose Plan</button>
    `;
    
    // Add event listener to the button
    const button = card.querySelector('.plan-card__button');
    button.addEventListener('click', function() {
        const planName = this.getAttribute('data-plan');
        const planSpeed = this.getAttribute('data-speed');
        const planPrice = this.getAttribute('data-price');
        choosePlan(planName, planSpeed, planPrice);
    });
    
    return card;
}

// Handle plan selection
function choosePlan(planName, speed, price) {
    console.log(`Plan selected: ${planName} - ${speed} Mbps - ₹${price}/month`);
    
    // Show contact modal
    showContactModal(planName, speed, price);
    
    // Optional: Track analytics or send data to server
    // trackPlanSelection(planName, speed, price);
}

// Show contact modal
function showContactModal(planName, speed, price) {
    const modal = document.getElementById('contactModal');
    if (!modal) {
        console.error('Contact modal not found');
        return;
    }
    
    // Update modal content with selected plan info
    const modalBody = modal.querySelector('.modal__body');
    if (modalBody) {
        modalBody.innerHTML = `
            <div class="contact-options">
                <div style="text-align: center; margin-bottom: 1.5rem; padding: 1rem; background: #f8f9fa; border-radius: 10px;">
                    <h4 style="color: #FF6B35; margin-bottom: 0.5rem;">Selected Plan</h4>
                    <p style="font-size: 1.1rem; font-weight: 600; color: #495057;">${planName} - ${speed} Mbps - ₹${price}/month</p>
                </div>
                <div class="contact-option">
                    <h4>Call Us Now to Book</h4>
                    <a href="tel:9962405322" class="btn btn--primary">📞 9962405322</a>
                    <a href="tel:9962415322" class="btn btn--primary">📞 9962415322</a>
                </div>
                <div class="contact-option">
                    <h4>Email Us Your Details</h4>
                    <a href="mailto:actfibercbebranch@gmail.com?subject=Interested in ${planName} - ${speed} Mbps Plan&body=Hi, I am interested in the ${planName} plan (${speed} Mbps at ₹${price}/month). Please contact me for booking." class="btn btn--secondary">✉️ Send Email</a>
                </div>
                <div class="contact-option">
                    <h4>Visit Our Website</h4>
                    <p><strong>actfibercbebranch.in</strong></p>
                    <p style="font-size: 0.9rem; color: #6c757d; margin-top: 0.5rem;">We'll get back to you within 24 hours!</p>
                </div>
            </div>
        `;
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

// Hide contact modal
function hideContactModal() {
    const modal = document.getElementById('contactModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
}

// Setup contact handlers
function setupContactHandlers() {
    // Contact Us button in hero section
    const contactUsBtn = document.getElementById('contactUsBtn');
    if (contactUsBtn) {
        contactUsBtn.addEventListener('click', function() {
            showContactModal('General Inquiry', 'Various', 'Contact for pricing');
        });
    }
    
    // Close modal button
    const closeModalBtn = document.getElementById('closeModal');
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', hideContactModal);
    }
    
    // Close modal when clicking outside
    const modal = document.getElementById('contactModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                hideContactModal();
            }
        });
    }
    
    // Close modal on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            hideContactModal();
        }
    });
    
    console.log('Contact handlers setup complete');
}

// Smooth scrolling for anchor links (if any)
function smoothScrollTo(targetId) {
    const target = document.getElementById(targetId);
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Phone number click handlers
document.addEventListener('click', function(e) {
    // Handle phone number clicks
    if (e.target.classList.contains('contact-number')) {
        const phoneNumber = e.target.textContent.replace(/[^\d]/g, '');
        if (phoneNumber) {
            window.location.href = `tel:${phoneNumber}`;
        }
    }
});

// Optional: Add loading animation
function showLoading() {
    const plansGrid = document.getElementById('plansGrid');
    if (plansGrid) {
        plansGrid.innerHTML = `
            <div style="text-align: center; grid-column: 1 / -1; padding: 2rem;">
                <div style="font-size: 1.2rem; color: #6c757d;">Loading plans...</div>
            </div>
        `;
    }
}

// Optional: Error handling for plan loading
function showError(message = 'Failed to load plans. Please refresh the page.') {
    const plansGrid = document.getElementById('plansGrid');
    if (plansGrid) {
        plansGrid.innerHTML = `
            <div style="text-align: center; grid-column: 1 / -1; padding: 2rem; color: #dc3545;">
                <div style="font-size: 1.2rem; margin-bottom: 1rem;">⚠️ ${message}</div>
                <button onclick="location.reload()" class="btn btn--primary">Refresh Page</button>
            </div>
        `;
    }
}

// Optional: Track plan selections (for analytics)
function trackPlanSelection(planName, speed, price) {
    // You can integrate with Google Analytics or other tracking services here
    console.log('Plan selection tracked:', {
        plan: planName,
        speed: speed,
        price: price,
        timestamp: new Date().toISOString()
    });
    
    // Example: Send to Google Analytics (if implemented)
    // gtag('event', 'plan_selection', {
    //     'plan_name': planName,
    //     'plan_speed': speed,
    //     'plan_price': price
    // });
}

// Performance optimization: Lazy load if needed
function observeElements() {
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        });

        // Observe plan cards for animation
        document.querySelectorAll('.plan-card').forEach(card => {
            observer.observe(card);
        });
    }
}

// Initialize animations after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add a small delay to ensure all elements are rendered
    setTimeout(observeElements, 100);
});

// Console log for debugging
console.log('ACT Fibernet Coimbatore Branch website loaded successfully!');
console.log('Available plans:', plansData.length);
console.log('Contact: 9962405322, 9962415322');
console.log('Email: actfibercbebranch@gmail.com');
