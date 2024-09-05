document.addEventListener('DOMContentLoaded', function() {
    const routes = {
        '#home': `
            <section id="home" class="route">
                <h1>Welcome to Our Hospital</h1>
                <p>We provide the best healthcare services to all our patients.</p>
            </section>
        `,
        '#about': `
            <section id="about" class="route">
                <h1>About Us</h1>
                <p>Learn more about our hospital, our history, and our mission to serve.</p>
            </section>
        `,
        '#services': `
            <section id="services" class="route">
                <h1>Our Services</h1>
                <p>We offer a wide range of medical services to cater to all your needs.</p>
            </section>
        `,
        '#doctors': `
            <section id="doctors" class="route">
                <h1>Our Doctors</h1>
                <p>Meet our team of highly qualified and experienced doctors.</p>
            </section>
        `,
        '#consulting': `
            <section id="consulting" class="route">
                <h1>Consulting Reservation</h1>
                <form>
                    <label for="name">Your Name:</label>
                    <input type="text" id="name" name="name" required><br>
                    <label for="date">Consultation Date:</label>
                    <input type="date" id="date" name="date" required><br>
                    <label for="doctor">Choose a Doctor:</label>
                    <select id="doctor" name="doctor">
                        <option value="drsmith">Dr. Smith</option>
                        <option value="drjohnson">Dr. Johnson</option>
                    </select><br>
                    <input type="submit" value="Reserve">
                </form>
            </section>
        `,
        '#pharmacy': `
            <section id="pharmacy" class="route">
                <h1>Pharmacy</h1>
                <form>
                    <label for="medicine">Select Medicine:</label>
                    <select id="medicine" name="medicine">
                        <option value="aspirin">Aspirin</option>
                        <option value="antibiotic">Antibiotic</option>
                    </select><br>
                    <input type="submit" value="Buy Now">
                </form>
            </section>
        `
    };

    function navigateTo(hash) {
        const content = document.getElementById('content');
        content.innerHTML = routes[hash] || routes['#home'];
    }

    function handleHashChange() {
        const hash = window.location.hash || '#home';
        navigateTo(hash);
    }

    window.addEventListener('hashchange', handleHashChange);

    // Initial call to load the default or current route
    handleHashChange();
});
