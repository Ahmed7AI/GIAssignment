const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skills = document.getElementById('skills') as HTMLElement;

toggleButton.addEventListener('click', () => {
    // Toggling between 'block' and 'none' for the skills section
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
    } else {
        skills.style.display = 'none';
    }
});


