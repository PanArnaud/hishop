export interface Product {
  id: string;
  category: string;
  name: string;
  price: string;
  isFeatured: boolean;
  images: { url: string }[];
  options: {
    switchType?: string[];
    backlight?: string[];
    frameMaterial?: string[];
    dpi?: number[];
    buttons?: number[];
    sensor?: string[];
    light?: string[];
    shape?: string[];
    connectivity?: string[];
    noiseReduction?: string[];
    pad?: string[];
    microphone?: string[];
    material?: string[];
  };
}
