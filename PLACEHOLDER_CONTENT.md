# Placeholder Content & Images

This document describes all the temporary AI-generated content and placeholder images used in the project. All content and images are meant to be replaced with actual property data and professional photography.

## 📝 Content Files

### Properties Data (`js/data/properties.js`)

Contains **8 featured properties** with:

- **Detailed Descriptions**: AI-generated comprehensive property descriptions highlighting key features
- **Property Details**: Bedrooms, bathrooms, square footage, year built
- **Features**: Curated list of property highlights
- **Locations**: Various locations (Downtown, Waterfront, Suburbs, etc.)
- **Pricing**: Sample pricing from $450k to $3.2M

**Image Sources**: Unsplash real estate photos
- Format: `https://images.unsplash.com/photo-{id}?w=800&h=600&fit=crop`
- All images are real estate-themed and contextually appropriate

### Gallery Data (`js/data/gallery.js`)

Contains **12 gallery images** featuring:

- Interior spaces (living rooms, kitchens, bedrooms, bathrooms)
- Exterior architecture
- Outdoor spaces (pools, terraces, backyards)
- Views and special features

**Image Sources**: Unsplash professional interior/exterior photography
- Format: `https://images.unsplash.com/photo-{id}?w=1200&h=800&fit=crop`
- High-quality, professionally styled images

### About Data (`js/data/about.js`)

Comprehensive company information including:

- **Company Overview**: Mission, description, and statistics
- **Team Members** (4 profiles):
  - Profile images from pravatar.cc (avatar generator)
  - Professional roles and bios
  - Specialties for each team member
- **Services** (6 offerings):
  - Property Sales
  - 3D Virtual Tours
  - Investment Consulting
  - Property Management
  - Market Analysis
  - Concierge Service
- **Testimonials** (3 reviews):
  - Client avatars from pravatar.cc
  - 5-star ratings with detailed feedback
- **Contact Information**:
  - Sample phone, email, address
  - Business hours
  - Social media handles (placeholder)

## 🖼️ Image Sources

### Unsplash Images

All property and gallery images use Unsplash's free API with proper attribution:

- **Advantages**:
  - High-quality professional photography
  - No copyright issues
  - Real estate-themed content
  - Consistent resolution and quality

**Usage Format**:
```
https://images.unsplash.com/photo-{photo-id}?w={width}&h={height}&fit=crop
```

### Pravatar.cc Avatars

Team member and testimonial avatars use Pravatar for consistent placeholder portraits:

- **Advantages**:
  - Professional-looking avatars
  - Diverse representation
  - Consistent sizing (150px or 300px)
  - Deterministic (same ID = same avatar)

**Usage Format**:
```
https://i.pravatar.cc/{size}?img={id}
```

## 🔄 How to Replace

### 1. Property Data

Edit `js/data/properties.js`:

```javascript
{
  id: 1,
  title: 'Your Property Title',
  description: 'Your detailed description...',
  price: '$XXX,XXX',
  image: '/assets/images/property-1.jpg', // Your local image
  location: 'Your Location',
  bedrooms: X,
  bathrooms: X,
  sqft: XXXX,
  features: ['Feature 1', 'Feature 2'],
  yearBuilt: YYYY,
}
```

### 2. Gallery Images

Edit `js/data/gallery.js`:

```javascript
{
  id: 1,
  title: 'Your Image Title',
  description: 'Your description...',
  image: '/assets/images/gallery-1.jpg', // Your local image
  category: 'Interior|Exterior|View|Outdoor',
}
```

### 3. About Content

Edit `js/data/about.js`:

- Replace company name, description, and mission
- Update team member information with actual staff
- Add real profile photos to `/assets/images/team/`
- Update services to match your offerings
- Replace testimonials with real client reviews
- Update contact information with actual details

### 4. Local Images

To use local images instead of external URLs:

1. Place images in appropriate directories:
   ```
   /assets/images/properties/
   /assets/images/gallery/
   /assets/images/team/
   ```

2. Update file references:
   ```javascript
   image: '/assets/images/properties/property-1.jpg'
   ```

## 📋 Content Checklist

Before going live, replace:

- [ ] All 8 property listings (title, description, details, images)
- [ ] All 12 gallery images and captions
- [ ] Company name and branding ("Elite Properties Group")
- [ ] About us description and mission
- [ ] Team member profiles (4 members)
- [ ] Service descriptions (6 services)
- [ ] Client testimonials (3 testimonials)
- [ ] Contact information (phone, email, address)
- [ ] Social media handles
- [ ] Hero section content
- [ ] Page title and meta description

## 🎨 Image Specifications

### Property Images
- **Recommended size**: 800x600px or higher
- **Aspect ratio**: 4:3
- **Format**: JPG or WebP
- **Quality**: High (80-90%)

### Gallery Images
- **Recommended size**: 1200x800px or higher
- **Aspect ratio**: 3:2
- **Format**: JPG or WebP
- **Quality**: High (85-95%)

### Team/Avatar Images
- **Recommended size**: 300x300px or higher
- **Aspect ratio**: 1:1 (square)
- **Format**: JPG, PNG, or WebP
- **Quality**: Medium-High (75-85%)

## 💡 Tips

1. **Consistency**: Maintain consistent image quality and styling across all properties
2. **Optimization**: Compress images to reduce load times while maintaining quality
3. **Alt Text**: Update image alt attributes for accessibility and SEO
4. **Real Data**: Use actual property data, including accurate square footage and pricing
5. **Legal**: Ensure you have rights to all images and content you use
6. **Testing**: Test all images load correctly after replacement
7. **Backup**: Keep the original placeholder data as reference

## 🔗 External Services Used

- **Unsplash**: https://unsplash.com - Free high-quality images
- **Pravatar**: https://pravatar.cc - Avatar placeholder service

Both services are free to use and require no API keys for basic usage.
