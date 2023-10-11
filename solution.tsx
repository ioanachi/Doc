

/**
 * Please, improve this component and fix all problems.
 *
 * What is important:
 * - design (extensibility, testability)
 * - code cleanliness, following best practices
 * - bugs
 * - consistency
 * - naming
 * - formatting
 *
 * Write your perfect code!
 */




import React, { useEffect, useState } from 'react';

const Card = ({
    title,
    text,
    target = '_self',
    linkTitle,
    href,
    rel = 'noopener noreferrer',
    onClick,
    linkClassName = ''
}) => (
    <div className="card">
        <div className="card__title">{title}</div>
        <div className="card__text">{text}</div>
        <a
            className={`default-link card__link ${linkClassName}`}
            target={target}
            rel={rel}
            href={href}
            onClick={onClick}
        >
            {linkTitle}
        </a>
    </div>
);

const fetchCardsData = async () => {
    const response = await fetch('https://my-json-server.typicode.com/savayer/demo/posts');
    const dataParsed = await response.json();
    return dataParsed.map((item) => ({
        id: item.id,
        title: item.title,
        linkTitle: item.link_title,
        href: item.link,
        text: item.body.en.substr(0, 50) + '...',
    }));
};

const CardsPage = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await fetchCardsData();
            setCards(data);
        })();
    }, []);

    const handleCardClick = (url) => {
        console.log(url);
    };

    return (
        <div>
            {cards.map(item => (
                <Card
                    key={item.id}
                    rel="nofollow"
                    title={item.title}
                    linkTitle={item.linkTitle}
                    href={item.href}
                    text={item.text}
                    linkClassName={item.id === 1 ? 'card__link--red' : ''}
                    target={item.id === 1 ? '_blank' : '_self'}
                    onClick={() => handleCardClick(item.href)}
                />
            ))}
        </div>
    );
}

export default CardsPage;
