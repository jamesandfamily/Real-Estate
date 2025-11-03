import { propertiesData } from '../data/properties.js';

export const loadProperties = () => {
  const propertiesGrid = document.querySelector('.properties-grid');
  if (!propertiesGrid) {
    console.warn('Properties grid not found');
    return;
  }

  propertiesData.forEach((property) => {
    const card = createPropertyCard(property);
    propertiesGrid.appendChild(card);
  });
};

const createPropertyCard = (property) => {
  const card = document.createElement('div');
  card.className = 'property-card';

  const img = document.createElement('img');
  img.src = property.image || 'https://via.placeholder.com/400x300';
  img.alt = property.title;

  const content = document.createElement('div');
  content.className = 'property-card-content';

  const title = document.createElement('h3');
  title.textContent = property.title;

  const description = document.createElement('p');
  description.textContent = property.description;

  const price = document.createElement('div');
  price.className = 'property-card-price';
  price.textContent = property.price;

  content.appendChild(title);
  content.appendChild(description);
  content.appendChild(price);

  card.appendChild(img);
  card.appendChild(content);

  return card;
};
