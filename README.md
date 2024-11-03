# Copy Icon Web Component

A lightweight, customizable copy-to-clipboard icon button implemented as a Web Component. Perfect for adding copy functionality to your web applications with minimal setup.

![Copy Icon Demo](example.gif)

## Features

- 🎨 Customizable size and colors
- ✨ Smooth animations and visual feedback
- 🔒 Shadow DOM encapsulation
- 📱 Mobile-friendly
- 🎯 Zero dependencies
- 🌐 Works with any framework or vanilla JS

## Installation

Import via CDN.

```html
<script src="https://unpkg.com/copy-icon@1.0.3/index.js"></script>
```

Or using NPM

```bash
npm install copy-icon
```

## Usage

### Basic Usage

```html
<copy-icon 
    onclick="navigator.clipboard.writeText('some text')"
    class="size-4 absolute top-2 right-2"></copy-icon>
```

### Dynamic Content

```html
<copy-icon 
    onclick="navigator.clipboard.writeText(document.querySelector('target').innerText)" 
    class="size-4 absolute top-2 right-2"></copy-icon>
```

### Styling

The component can be customized using CSS variables:

```css
copy-icon {
  --size: 1.5rem;
  --accent-color: #f3f4f6;
}
```

## API

### CSS Custom Properties

- `--size`: Controls the size of the icon (default: 1rem)
- `--accent-color`: Controls the hover background color (default: #f3f4f6)

## Browser Support

Works in all modern browsers that support Web Components:
- Chrome
- Firefox
- Safari
- Edge

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this in your own projects!
