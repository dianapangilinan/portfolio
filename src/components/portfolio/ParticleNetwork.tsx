import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseVx: number;
  baseVy: number;
}

interface ParticleNetworkProps {
  /** "full" = fixed fullscreen, "contained" = fills parent container */
  mode?: "full" | "contained";
  /** particle count override */
  count?: number;
  /** line color rgb string e.g. "230, 160, 50" */
  lineColor?: string;
  /** dot color rgb string */
  dotColor?: string;
  className?: string;
}

const ParticleNetwork = ({
  mode = "full",
  count,
  lineColor = "220, 180, 100",
  dotColor = "230, 220, 200",
  className = "",
}: ParticleNetworkProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const particlesRef = useRef<Particle[]>([]);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const parent = mode === "contained" ? canvas.parentElement : null;

    const getSize = () => {
      if (parent) {
        return { w: parent.clientWidth, h: parent.clientHeight };
      }
      return { w: window.innerWidth, h: window.innerHeight };
    };

    const resize = () => {
      const { w, h } = getSize();
      canvas.width = w;
      canvas.height = h;
    };
    resize();

    const resizeObserver =
      parent &&
      new ResizeObserver(() => {
        resize();
      });
    if (resizeObserver && parent) resizeObserver.observe(parent);
    if (!parent) window.addEventListener("resize", resize);

    const { w, h } = getSize();
    const area = w * h;
    const particleCount = count ?? Math.min(150, Math.max(40, Math.floor(area / 8000)));

    const speed = 0.8;
    particlesRef.current = Array.from({ length: particleCount }, () => {
      const vx = (Math.random() - 0.5) * speed * 2;
      const vy = (Math.random() - 0.5) * speed * 2;
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        vx,
        vy,
        baseVx: vx,
        baseVy: vy,
        radius: Math.random() * 2 + 2,
      };
    });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const handleMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    const target = mode === "contained" ? canvas : window;
    (target as EventTarget).addEventListener("mousemove", handleMouseMove as EventListener);
    (target as EventTarget).addEventListener("mouseleave", handleMouseLeave as EventListener);

    const connectionDistance = 200;
    const mouseDistance = 220;

    const animate = () => {
      const { w: cw, h: ch } = getSize();
      ctx.clearRect(0, 0, cw, ch);
      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      for (const p of particles) {
        p.vx += (p.baseVx - p.vx) * 0.01;
        p.vy += (p.baseVy - p.vy) * 0.01;

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouseDistance && dist > 10) {
          const force = ((mouseDistance - dist) / mouseDistance) * 0.008;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }

        const maxSpeed = 1.5;
        const currentSpeed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (currentSpeed > maxSpeed) {
          p.vx = (p.vx / currentSpeed) * maxSpeed;
          p.vy = (p.vy / currentSpeed) * maxSpeed;
        }

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) { p.x = 0; p.vx = Math.abs(p.vx); p.baseVx = Math.abs(p.baseVx); }
        if (p.x > cw) { p.x = cw; p.vx = -Math.abs(p.vx); p.baseVx = -Math.abs(p.baseVx); }
        if (p.y < 0) { p.y = 0; p.vy = Math.abs(p.vy); p.baseVy = Math.abs(p.baseVy); }
        if (p.y > ch) { p.y = ch; p.vy = -Math.abs(p.vy); p.baseVy = -Math.abs(p.baseVy); }
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDistance) {
            const opacity = (1 - dist / connectionDistance) * 0.4;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${lineColor}, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      if (mouse.x > -999) {
        for (const p of particles) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouseDistance) {
            const opacity = (1 - dist / mouseDistance) * 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(${lineColor}, ${opacity})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }
      }

      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${dotColor}, 0.85)`;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius + 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${dotColor}, 0.12)`;
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animRef.current);
      if (resizeObserver) resizeObserver.disconnect();
      if (!parent) window.removeEventListener("resize", resize);
      (target as EventTarget).removeEventListener("mousemove", handleMouseMove as EventListener);
      (target as EventTarget).removeEventListener("mouseleave", handleMouseLeave as EventListener);
    };
  }, [mode, count, lineColor, dotColor]);

  return (
    <canvas
      ref={canvasRef}
      className={`${mode === "full" ? "fixed" : "absolute"} inset-0 z-[1] pointer-events-none ${className}`}
    />
  );
};

export default ParticleNetwork;