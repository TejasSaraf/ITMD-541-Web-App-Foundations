document.addEventListener("DOMContentLoaded", () => {
    const currentPage = document.body.id;

    if (currentPage === "resumePage") {
        renderResumePage(); // Handle the resume page rendering
    } else {
        handleFormPage(); // Handle the form page submission
    }
});

// Handles form.html
function handleFormPage() {
    const form = document.getElementById("detailsForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // Collect form data 
        const formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone_number: document.getElementById("phone_number").value,
            degree: document.getElementById("degree").value,
            institute: document.getElementById("institute").value,
            passingYear: document.getElementById("passing Year").value,
            job_title: document.getElementById("job_title").value,
            company: document.getElementById("company").value,
            duration: document.getElementById("duration").value,
            responsibility: document.getElementById("responsibility").value,
            languages: Array.from(
                document.querySelectorAll(".checkbox-group input:checked")
            ).map((input) => input.value),
            frameworks: Array.from(
                document.querySelectorAll(".check-grp input:checked")
            ).map((input) => input.value),
            version_control: document.getElementById("version").value,
            projectName: document.getElementById("ProjectName").value,
            projectDescription: document.getElementById("ProjectDescription").value,
        };

        // Check for missing data 
        if (
            Object.values(formData).includes("") ||
            formData.languages.length === 0 ||
            formData.frameworks.length === 0
        ) {
            alert("Please fill in all the required fields.");
            return;
        }

        // Store the form data in sessionStorage as a JSON string
        sessionStorage.setItem("formData", JSON.stringify(formData));

        // Redirect to resume.html
        window.location.href = "resume.html";
    });
}

// Handles resume.html
function renderResumePage() {
    const storedData = sessionStorage.getItem("formData");

    // If no form data is found in sessionStorage, redirect to form.html
    if (!storedData) {
        window.location.href = "form.html";
        return;
    }

    // Parse the stored data from sessionStorage
    const formData = JSON.parse(storedData);

    // Check if any required fields are missing, and alert the user
    if (
        !formData.name ||
        !formData.email ||
        !formData.phone_number ||
        !formData.degree ||
        !formData.institute ||
        !formData.passingYear ||
        !formData.job_title ||
        !formData.company ||
        !formData.duration ||
        !formData.responsibility ||
        formData.languages.length === 0 ||
        formData.frameworks.length === 0 ||
        !formData.version_control ||
        !formData.projectName ||
        !formData.projectDescription
    ) {
        alert("Please complete the form before Submit.");
        window.location.href = "form.html";
        return;
    }

    // Populate the resume page with the form data
    document.getElementById("displayName").textContent = formData.name;
    document.getElementById(
        "displayEmail"
    ).textContent = `Email: ${formData.email}`;
    document.getElementById(
        "displayPhone"
    ).textContent = `Phone: ${formData.phone_number}`;
    document.getElementById("displayEducation").innerHTML = `
        <strong>Degree:</strong> ${formData.degree}<br>
        <strong>Institution:</strong> ${formData.institute}<br>
        <strong>Year:</strong> ${formData.passingYear}
    `;
    document.getElementById("displayExperience").innerHTML = `
        <strong>Job Title:</strong> ${formData.job_title}<br>
        <strong>Company:</strong> ${formData.company}<br>
        <strong>Duration:</strong> ${formData.duration}<br>
        <strong>Responsibilities:</strong> ${formData.responsibility}
    `;
    document.getElementById("displaySkills").innerHTML = `
        <ul>
            <li><strong>Languages:</strong> ${formData.languages.join(
        ", "
    )}</li>
            <li><strong>Frameworks:</strong> ${formData.frameworks.join(
        ", "
    )}</li>
            <li><strong>Version Control:</strong> ${formData.version_control
        }</li>
        </ul>
    `;
    document.getElementById("displayProject").innerHTML = `
        <ul>
            <li><strong>Project Name:</strong> ${formData.projectName}</li>
            <li><strong>Description:</strong> ${formData.projectDescription}</li>
        </ul>
    `;
}
