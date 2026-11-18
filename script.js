
function evaluateProject() {

    let name = document.getElementById("name").value.trim();
    let title = document.getElementById("title").value.trim();
    let description = document.getElementById("description").value.trim();
    let file = document.getElementById("file").files[0];

    if (name === "" || title === "") {
        alert("Please enter your name and project title");
        return;
    }

    if (description.length < 30 && !file) {
        alert("Please enter project details or upload a TXT file");
        return;
    }

    let content = description.toLowerCase();

    const categories = [
        {
            name: "Content",
            marks: 25,
            keywords: ["introduction", "abstract", "objective"]
        },
        {
            name: "Structure",
            marks: 20,
            keywords: ["methodology", "conclusion", "references"]
        },
        {
            name: "Technical Knowledge",
            marks: 25,
            keywords: ["technology", "algorithm", "implementation"]
        },
        {
            name: "Originality",
            marks: 15,
            keywords: ["innovation", "proposed", "design"]
        },
        {
            name: "Results",
            marks: 15,
            keywords: ["results", "output", "analysis"]
        }
    ];

    let total = 0;
    let report = "";

    categories.forEach(function(category) {

        let score = 0;

        category.keywords.forEach(function(word) {
            if (content.includes(word)) {
                score += category.marks / category.keywords.length;
            }
        });

        score = Math.round(score);
        total += score;

        report += "<p>" + category.name +
                  ": " + score + "/" +
                  category.marks + "</p>";
    });

    let grade = "";
    let feedback = "";

    if (total >= 85) {
        grade = "Excellent";
        feedback = "Great work! Your project covers many important areas.";
    }
    else if (total >= 70) {
        grade = "Good";
        feedback = "Good project. Improve technical details and explanations.";
    }
    else if (total >= 50) {
        grade = "Average";
        feedback = "Add more details, methodology and results.";
    }
    else {
        grade = "Needs Improvement";
        feedback = "Please improve your project content and structure.";
    }

    document.getElementById("marks").innerText = total + "/100";
    document.getElementById("grade").innerText = grade;
    document.getElementById("feedback").innerText =
        "Hello " + name + "! " + feedback;

    document.getElementById("breakdown").innerHTML = report;

    document.getElementById("result").style.display = "block";
}

