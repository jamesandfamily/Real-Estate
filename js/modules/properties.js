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

  const details = document.createElement('div');
  details.className = 'property-card-details';
  details.innerHTML = `
    <span>${property.bedrooms} Beds</span> • 
    <span>${property.bathrooms} Baths</span> • 
    <span>${property.sqft.toLocaleString()} sqft</span>
  `;

  if (property.features && property.features.length > 0) {
    const featuresContainer = document.createElement('div');
    featuresContainer.className = 'property-card-features';
    property.features.forEach((feature) => {
      const featureTag = document.createElement('span');
      featureTag.className = 'property-card-feature';
      featureTag.textContent = feature;
      featuresContainer.appendChild(featureTag);
    });
    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(details);
    content.appendChild(featuresContainer);
  } else {
    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(details);
  }

  const price = document.createElement('div');
  price.className = 'property-card-price';
  price.textContent = property.price;
  content.appendChild(price);

  card.appendChild(img);
  card.appendChild(content);

  return card;
};
