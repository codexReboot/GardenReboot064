// Function to update the copyright year
export function updateCopyrightYear() {
      const copyrightYear = document.getElementById("copyrightYear");
      const currentYear = new Date().getFullYear();
      copyrightYear.textContent = currentYear;
    }

