import { useEffect, useRef } from 'react';
import backarrow from '../image/images-home/back-arrow.svg';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const tocLinks = useRef([]);
    let lastActiveLink = null;

    useEffect(() => {

        
        const headings = document.querySelectorAll('.sfc h4');
        const tocList = document.querySelector('.tocc');

        headings.forEach(function (heading, index) {
            const link = document.createElement('a');
            link.textContent = heading.textContent;
            link.href = '#heading-' + index;
            link.className = 'sidebarlink'; // Adding the classes
            heading.id = 'heading-' + index;
            const listItem = document.createElement('li');
            listItem.appendChild(link);
            tocList.appendChild(listItem);
        });

        const handleClick = (e) => {
            e.preventDefault();
            const target = document.querySelector(e.currentTarget.hash);

            if (lastActiveLink) {
                lastActiveLink.classList.remove('active');
            }

            e.currentTarget.classList.add('temp-active');
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });

            target.addEventListener('scrollIntoView', function scrollHandler(event) {
                updateActiveLink(e.currentTarget);
                e.currentTarget.classList.remove('temp-active');
                target.removeEventListener('scrollIntoView', scrollHandler);
            }, { once: true });
        };

        const tocLinksElements = document.querySelectorAll('.tocc a');
        tocLinksElements.forEach((link) => {
            link.addEventListener('click', handleClick);
            tocLinks.current.push(link);
        });

        const handleScroll = () => {
            const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            tocLinksElements.forEach((link) => {
                const target = document.querySelector(link.hash);
                if (target.offsetTop <= scrollPosition + 100 && (target.offsetTop + target.offsetHeight) > scrollPosition) {
                    updateActiveLink(link);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup functions for event listeners
        const cleanupFunctions = [
            () => {
                window.removeEventListener('scroll', handleScroll);
                tocLinks.current.forEach((link) => {
                    link.removeEventListener('click', handleClick);
                });
            }
        ];

        return () => {
            cleanupFunctions.forEach((cleanupFn) => cleanupFn());
        };
    }, []);

    function updateActiveLink(link) {
        if (lastActiveLink) {
            lastActiveLink.classList.remove('active');
        }
        link.classList.add('active');
        lastActiveLink = link;
    }


    
    return (
        <aside>
            <ul id='toc-container' className="tocc">
                <p className="sm primary w400">Contents</p>
            </ul>
        </aside>
    );
};

export default Sidebar;