document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const experienceItems = document.querySelectorAll('.experience-item');
    const projectItems = document.querySelectorAll('.project-item');
    const skillTags = document.querySelectorAll('.skill-tag');
    const proficiencyFills = document.querySelectorAll('.proficiency-fill');
    const linkItems = document.querySelectorAll('.link-item');

    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(12px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 70);
    });

    experienceItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-8px)';
        item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';

        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, 250 + index * 90);
    });

    projectItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(10px)';
        item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';

        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 350 + index * 70);
    });

    skillTags.forEach((tag, index) => {
        tag.style.opacity = '0';
        tag.style.transform = 'scale(0.85)';
        tag.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

        setTimeout(() => {
            tag.style.opacity = '1';
            tag.style.transform = 'scale(1)';
        }, 500 + index * 25);
    });

    proficiencyFills.forEach((fill, index) => {
        const width = fill.style.width;
        fill.style.width = '0%';
        fill.style.transition = 'width 1s cubic-bezier(0.4, 0, 0.2, 1)';

        setTimeout(() => {
            fill.style.width = width;
        }, 600 + index * 150);
    });

    linkItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-5px)';
        item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, 800 + index * 80);
    });

    const printBtn = document.querySelector('.print-btn');
    if (printBtn) {
        printBtn.addEventListener('mouseenter', () => {
            printBtn.style.transform = 'translateY(-2px) scale(1.03)';
            printBtn.style.boxShadow = '0 8px 20px rgba(59,130,246,0.4)';
        });
        printBtn.addEventListener('mouseleave', () => {
            printBtn.style.transform = 'translateY(0) scale(1)';
            printBtn.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
        });
    }

    const downloadBtn = document.getElementById('downloadBtn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            const element = document.querySelector('.resume-container');
            const opt = {
                margin: 0,
                filename: 'Rishu_Kushwaha_Resume.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2, useCORS: true, backgroundColor: '#ffffff' },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
                pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
            };
            html2pdf().set(opt).from(element).save();
        });
    }
});