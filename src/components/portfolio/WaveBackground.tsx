import { useEffect, useRef } from "react";

/**
 * Canvas-based fluid wave background inspired by macOS Sonoma.
 * Renders organic, flowing color blobs that drift and morph continuously.
 */
const WaveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    interface Blob {
      x: number;
      y: number;
      r: number;
      vx: number;
      vy: number;
      hue: number;
      hueSpeed: number;
      sat: number;
      light: number;
    }

    const blobs: Blob[] = [
      { x: 0.2, y: 0.3, r: 0.4, vx: 0.003, vy: 0.002, hue: 260, hueSpeed: 8, sat: 70, light: 55 },
      { x: 0.7, y: 0.6, r: 0.45, vx: -0.002, vy: 0.003, hue: 320, hueSpeed: -6, sat: 65, light: 50 },
      { x: 0.5, y: 0.2, r: 0.35, vx: 0.004, vy: -0.002, hue: 200, hueSpeed: 10, sat: 75, light: 48 },
      { x: 0.3, y: 0.8, r: 0.38, vx: -0.003, vy: -0.003, hue: 30, hueSpeed: -5, sat: 80, light: 55 },
      { x: 0.8, y: 0.3, r: 0.42, vx: 0.002, vy: 0.004, hue: 170, hueSpeed: 7, sat: 60, light: 45 },
    ];

    let time = 0;

    const animate = () => {
      const w = canvas.width;
      const h = canvas.height;
      time += 0.003;

      // Dark base
      ctx.fillStyle = "hsl(230, 20%, 8%)";
      ctx.fillRect(0, 0, w, h);

      // Draw blobs
      for (const blob of blobs) {
        // Update position with sinusoidal wobble
        blob.x += blob.vx * Math.sin(time * 2 + blob.hue);
        blob.y += blob.vy * Math.cos(time * 1.5 + blob.hue);

        // Bounce
        if (blob.x < -0.1 || blob.x > 1.1) blob.vx *= -1;
        if (blob.y < -0.1 || blob.y > 1.1) blob.vy *= -1;

        // Shift hue over time
        blob.hue += blob.hueSpeed * 0.01;

        const cx = blob.x * w;
        const cy = blob.y * h;
        const radius = blob.r * Math.max(w, h) * (0.9 + 0.1 * Math.sin(time * 3 + blob.hue));

        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
        grad.addColorStop(0, `hsla(${blob.hue}, ${blob.sat}%, ${blob.light}%, 0.8)`);
        grad.addColorStop(0.4, `hsla(${blob.hue + 20}, ${blob.sat - 10}%, ${blob.light - 5}%, 0.4)`);
        grad.addColorStop(1, `hsla(${blob.hue + 40}, ${blob.sat - 20}%, ${blob.light - 10}%, 0)`);

        ctx.globalCompositeOperation = "screen";
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);
      }

      ctx.globalCompositeOperation = "source-over";
      animRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0"
      style={{ pointerEvents: "none" }}
    />
  );
};

export default WaveBackground;
