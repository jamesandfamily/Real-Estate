# 3D Models Guide

This guide explains where to find placeholder 3D models for your real estate portfolio and how to integrate them.

## 📦 Current Model Configuration

The project is configured to load 3D models from `/assets/models/` directory. Model data is defined in `js/data/models.js`.

### Configured Models

1. **Modern Luxury Home** (`modern-house.glb`)
   - Contemporary architectural design
   - Recommended for: Modern properties, urban developments

2. **Mediterranean Villa** (`villa.glb`)
   - Traditional Mediterranean architecture
   - Recommended for: Waterfront properties, estates

3. **Luxury Penthouse Interior** (`penthouse-interior.glb`)
   - High-end interior spaces
   - Recommended for: Interior showcases, apartment tours

## 🌐 Free 3D Model Resources

### 1. Sketchfab (Free Models)
**URL**: https://sketchfab.com/

- **Search terms**: "house", "villa", "modern home", "building", "real estate"
- **Filters**: 
  - License: Creative Commons
  - Format: glTF 2.0 (.glb)
  - Downloadable: Yes
- **Advantages**: High-quality models, wide variety, proper licensing

**Example searches**:
- https://sketchfab.com/search?q=modern+house&type=models&license=322a749bcfa841b29dff1e8a1bb74b0b
- https://sketchfab.com/search?q=villa+architecture&type=models

### 2. Poly Pizza
**URL**: https://poly.pizza/

- Free library of 3D models
- Simple, clean designs
- Good for placeholder content
- All models are CC0 (public domain)

### 3. Quaternius
**URL**: https://quaternius.com/

- Free architectural and building models
- Consistent art style
- Easy to download
- No attribution required

### 4. TurboSquid Free Models
**URL**: https://www.turbosquid.com/Search/3D-Models/free/house

- Filter by "Free" models
- Check license restrictions
- Good quality architectural models

### 5. Free3D
**URL**: https://free3d.com/

- Search for "house", "building", "architecture"
- Various quality levels
- Check individual licenses

### 6. CGTrader Free Section
**URL**: https://www.cgtrader.com/free-3d-models

- Professional quality models
- Filter by "Free" and "Royalty Free"
- Good for architectural visualizations

## 🎨 AI-Generated 3D Models

### 1. Spline (3D Design Tool)
**URL**: https://spline.design/

- Create custom 3D models
- Export as .glb format
- Free tier available
- Good for simple architectural shapes

### 2. Meshy.ai
**URL**: https://www.meshy.ai/

- Text-to-3D generation
- Image-to-3D conversion
- Free tier with limitations
- Quick placeholder generation

### 3. Luma AI
**URL**: https://lumalabs.ai/

- AI-powered 3D generation
- Create from text descriptions
- Free tier available

## 📥 How to Download and Use

### Step 1: Download Model

1. Choose a model from one of the resources above
2. Download in `.glb` or `.gltf` format (glTF 2.0 preferred)
3. If only `.gltf` available with separate files, use a converter

### Step 2: Optimize Model (Optional)

Use glTF-Transform or similar tools to optimize:

```bash
npm install -g @gltf-transform/cli

# Optimize model
gltf-transform optimize input.glb output.glb

# Further compress
gltf-transform dedup output.glb output.glb
gltf-transform quantize output.glb output.glb
```

### Step 3: Add to Project

1. Place the `.glb` file in `/assets/models/` directory:
   ```
   /assets/models/
     ├── modern-house.glb
     ├── villa.glb
     └── penthouse-interior.glb
   ```

2. Update `js/data/models.js`:
   ```javascript
   {
     id: 1,
     name: 'your_model_name',
     path: '/assets/models/your-model.glb',
     title: 'Model Display Title',
     description: 'Brief description of the model',
     scale: 1,  // Adjust as needed
     position: { x: 0, y: 0, z: 0 },
     rotation: { x: 0, y: 0, z: 0 },
   }
   ```

3. Load in `js/modules/three-scene.js` using GLTFLoader

## 🔄 Creating Simple Placeholder Models

If you want to quickly create basic placeholder models without downloading:

### Option 1: Use Three.js Primitives

The current setup already shows a rotating cube. You can create simple buildings using Three.js geometries:

```javascript
// Simple house shape
const wallGeometry = new THREE.BoxGeometry(2, 2, 2);
const roofGeometry = new THREE.ConeGeometry(1.5, 1, 4);
roofGeometry.rotateY(Math.PI / 4);

const material = new THREE.MeshStandardMaterial({ color: 0xcccccc });
const walls = new THREE.Mesh(wallGeometry, material);
const roof = new THREE.Mesh(roofGeometry, material);
roof.position.y = 1.5;

const house = new THREE.Group();
house.add(walls);
house.add(roof);
scene.add(house);
```

### Option 2: Blender Free Models

1. Download Blender (free): https://www.blender.org/
2. Use built-in "Extra Objects" addon to generate buildings
3. Export as glTF 2.0 (.glb)

### Option 3: Procedural Generation

Use procedural generation libraries:
- **three-mesh-bvh**: For complex building generation
- **three-stdlib**: Additional geometry utilities

## 📐 Model Specifications

### Recommended Specs

- **Format**: glTF 2.0 (.glb)
- **File Size**: < 5MB (optimized for web)
- **Polygons**: < 100k triangles
- **Textures**: Embedded or PBR materials
- **Scale**: Meter scale (1 unit = 1 meter)

### Optimization Tips

1. **Reduce polygon count**: Use decimation/retopology
2. **Compress textures**: Resize to reasonable dimensions (max 2048x2048)
3. **Remove unnecessary data**: Hidden geometry, unused materials
4. **Use Draco compression**: Reduces file size significantly
5. **Embed textures**: Keep everything in single .glb file

## 🎯 Model Types for Real Estate

### Exteriors
- Modern homes
- Traditional houses
- Apartment buildings
- Villas and estates
- Commercial properties

### Interiors
- Living rooms
- Kitchens
- Bedrooms
- Bathrooms
- Office spaces

### Environments
- Landscapes
- Gardens
- Pools and outdoor areas
- Driveways and paths

## ⚖️ Licensing

Always check the license before using any 3D model:

- **CC0 (Public Domain)**: Use freely, no attribution needed
- **CC-BY**: Use freely, attribution required
- **CC-BY-SA**: Use freely, attribution required, share-alike
- **Royalty-Free**: Check specific terms
- **Commercial License**: May require purchase

## 🔗 Additional Resources

### Converters
- **glTF Viewer**: https://gltf-viewer.donmccurdy.com/
- **Online Converter**: https://products.aspose.app/3d/conversion

### Learning
- **Three.js Documentation**: https://threejs.org/docs/
- **glTF Tutorial**: https://www.khronos.org/gltf/

### Communities
- **Three.js Discord**: https://discord.gg/threejs
- **Sketchfab Forum**: https://forum.sketchfab.com/

## 📝 Notes

- The current `three-scene.js` displays a simple rotating cube as a placeholder
- Replace the cube code with GLTFLoader to load actual models
- Consider lazy loading models to improve initial page load
- Add loading indicators for better UX
- Test models on different devices for performance

## 🚀 Next Steps

1. Download 2-3 architectural models from the resources above
2. Place them in `/assets/models/` directory
3. Update `js/data/models.js` with correct paths
4. Implement GLTFLoader in `js/modules/three-scene.js`
5. Test loading and rendering
6. Optimize as needed for performance
