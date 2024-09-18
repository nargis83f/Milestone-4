var form = document.getElementById('resume-form');
var resumeDisplay = document.getElementById('resume-display');
var resumeContent = document.getElementById('resume-content');
form.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    var formData = (_a = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            education: document.getElementById('education').value,
            workExperience: document.getElementById('workExperience').value,
            skills: document.getElementById('skills').value,
            append: function (name, value) {
                throw new Error("Function not implemented.");
            },
            delete: function (name) {
                throw new Error("Function not implemented.");
            },
            get: function (name) {
                throw new Error("Function not implemented.");
            },
            getAll: function (name) {
                throw new Error("Function not implemented.");
            },
            has: function (name) {
                throw new Error("Function not implemented.");
            },
            set: function (name, value) {
                throw new Error("Function not implemented.");
            },
            forEach: function (callbackfn, thisArg) {
                throw new Error("Function not implemented.");
            },
            entries: function () {
                throw new Error("Function not implemented.");
            },
            keys: function () {
                throw new Error("Function not implemented.");
            },
            values: function () {
                throw new Error("Function not implemented.");
            }
        },
        _a[Symbol.iterator] = function () {
            throw new Error("Function not implemented.");
        },
        _a);
    displayResume(formData);
});
function displayResume(data) {
    resumeContent.innerHTML = "\n      <h3>Name: ".concat(data.name, "</h3>\n      <p>Email: ").concat(data.email, "</p>\n      <p><strong>Education:</strong> ").concat(data.education, "</p>\n      <p><strong>Work Experience:</strong> ").concat(data.workExperience, "</p>\n      <p><strong>Skills:</strong> ").concat(data.skills, "</p>\n    ");
    resumeDisplay.classList.remove('hidden');
}
// Editable feature
resumeContent.addEventListener('click', function (event) {
    var target = event.target;
    if (target.tagName === 'P' || target.tagName === 'H3') {
        var currentText = target.innerText;
        var input_1 = document.createElement('textarea');
        input_1.value = currentText;
        target.innerHTML = '';
        target.appendChild(input_1);
        input_1.addEventListener('blur', function () {
            target.innerHTML = input_1.value;
        });
    }
});
