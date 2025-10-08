document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');

    const galleries = {
        Automotive: `
            <h2>Automotive Parts</h2>
            <div class="gallery">
                <img src="img/portfolio9.jpg" />
                <img src="img/portfolio8.jpg" />
                <!-- Add more images as needed -->
            </div>
            `,
        Electrial: `
            <h2>Electrical Parts</h2>
            <div class="gallery">
                <img src="img/portfolio7.jpg" />
                <img src="img/portfolio6.jpg" />
                <!-- Add more images as needed -->
            </div>
            `,
        Textile: `
            <h2>Textile Parts</h2>
            <div class="gallery">
                <img src="img/portfolio5.jpg" />
                <img src="img/portfolio4.jpg" />
                <!-- Add more images as needed -->
            </div>
            `,
        Defense: `
            <h2>Defense Parts</h2>
            <div class="gallery">
                <img src="img/portfolio3.jpg" />
                <img src="img/portfolio2.jpg" />
                <!-- Add more images as needed -->
            </div>
            `,
        CompanyVisits: `
            <h2>Company Visits and Audits</h2>
            <div class="gallery">
                <img src="img/portfolio3.jpg" />
                <img src="img/portfolio2.jpg" />
                <!-- Add more images as needed -->
            </div>
            `,
        Birthday: `
            <h2>Birthday's</h2>
            <div class="gallery">
                <img src="img/portfolio3.jpg" />
                <img src="img/portfolio2.jpg" />
                <!-- Add more images as needed -->
            </div>
            `,
        Trip: `
            <h2>Trip</h2>
            <div class="gallery">
                <img src="img/portfolio3.jpg" />
                <img src="img/portfolio2.jpg" />
                <!-- Add more images as needed -->
            </div>
            `
    };

    document.querySelectorAll('.gallery-nav a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const galleryId = event.target.getAttribute('href').substring(1);
            content.innerHTML = galleries[galleryId];
        });
    });

    // Load the first gallery by default
    content.innerHTML = galleries['Automotive'];
});
