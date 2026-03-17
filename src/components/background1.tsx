import { useRef, useEffect, useCallback } from 'react'

const Background1 = () => {
  //http://creativejs.com/2011/12/day-3-play-with-your-pixels/


  const canvasRef = useRef<HTMLCanvasElement>(null);
  const intervalRef = useRef<number>(150);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const stoppedRef = useRef<boolean>(false);
  const scheduleNextRef = useRef<(() => void) | null>(null);

  const restartAnimation = useCallback(() => {
    intervalRef.current = 150;
    if (stoppedRef.current && scheduleNextRef.current) {
      stoppedRef.current = false;
      scheduleNextRef.current();
    }
  }, []);

  // Restart animation on mouse move or scroll
  useEffect(() => {
    window.addEventListener('mousemove', restartAnimation);
    window.addEventListener('scroll', restartAnimation);

    return () => {
      window.removeEventListener('mousemove', restartAnimation);
      window.removeEventListener('scroll', restartAnimation);
    };
  }, [restartAnimation]);


  // CONTINUOUS VERSION - runs forever
  useEffect(() => {
    if (!canvasRef.current) {
      return
    }
    const context = canvasRef.current.getContext('2d', { willReadFrequently: true })

    if (!context) {
      return
    }

    // Track active flecks: { x, y, r, g, b, life }
    const flecks: { x: number; y: number; r: number; g: number; b: number; life: number }[] = [];
    const maxLife = 5; // Flecks last 5 frames

    const setPixel = (imagedata: ImageData, x: number, y: number, r: number, g: number, b: number, a: number) => {
      let i = (y * imagedata.width + x) * 4;
      imagedata.data[i++] = r;
      imagedata.data[i++] = g;
      imagedata.data[i++] = b;
      imagedata.data[i] = a;
    }

    const getFleckColor = (): [number, number, number] | null => {
      const fleck = Math.random();
      if (fleck < 0.00005) {
        // Lime green (varies)
        return [Math.floor(Math.random() * 40 + 30), Math.floor(Math.random() * 60 + 180), Math.floor(Math.random() * 50 + 30)];
      } else if (fleck < 0.0001) {
        // Bright red (varies)
        return [Math.floor(Math.random() * 55 + 200), Math.floor(Math.random() * 50 + 20), Math.floor(Math.random() * 50 + 20)];
      } else if (fleck < 0.00015) {
        // Purple (varies)
        return [Math.floor(Math.random() * 60 + 120), Math.floor(Math.random() * 50 + 30), Math.floor(Math.random() * 60 + 180)];
      } else if (fleck < 0.0002) {
        // Cyan (varies)
        return [Math.floor(Math.random() * 50 + 20), Math.floor(Math.random() * 60 + 180), Math.floor(Math.random() * 60 + 180)];
      } else if (fleck < 0.00025) {
        // Pink (varies)
        return [Math.floor(Math.random() * 55 + 200), Math.floor(Math.random() * 80 + 80), Math.floor(Math.random() * 60 + 140)];
      } else if (fleck < 0.0003) {
        // Orange (varies)
        return [Math.floor(Math.random() * 55 + 200), Math.floor(Math.random() * 70 + 100), Math.floor(Math.random() * 40 + 20)];
      }
      return null;
    }

    const randomate = () => {
      const imagedata = context.getImageData(0, 0, canvasRef.current!.width, canvasRef.current!.height);

      // Draw normal pixels and check for new flecks
      for (let y = 0; y < imagedata.height; y++) {
        for (let x = 0; x < imagedata.width; x++) {
          const fleckColor = getFleckColor();
          if (fleckColor) {
            // Add new fleck
            flecks.push({ x, y, r: fleckColor[0], g: fleckColor[1], b: fleckColor[2], life: maxLife });
          }
          // Normal color (with alpha for background to show through)
          setPixel(imagedata, x, y, Math.floor((Math.random() * 3) + 32), Math.floor((Math.random() * 10) + 55), Math.floor((Math.random() * 5) + 52), 250);
        }
      }

      // Draw active flecks with fading opacity
      for (let i = flecks.length - 1; i >= 0; i--) {
        const f = flecks[i];
        const opacity = Math.floor((f.life / maxLife) * 255);
        // Blend fleck color with background based on opacity
        const bgIdx = (f.y * imagedata.width + f.x) * 4;
        const bgR = imagedata.data[bgIdx];
        const bgG = imagedata.data[bgIdx + 1];
        const bgB = imagedata.data[bgIdx + 2];
        const alpha = opacity / 255;
        setPixel(imagedata, f.x, f.y,
          Math.floor(f.r * alpha + bgR * (1 - alpha)),
          Math.floor(f.g * alpha + bgG * (1 - alpha)),
          Math.floor(f.b * alpha + bgB * (1 - alpha)),
          255
        );
        f.life--;
        if (f.life <= 0) {
          flecks.splice(i, 1);
        }
      }

      context.putImageData(imagedata, 0, 0);
    }

    const scheduleNext = () => {
      // Stop completely when interval exceeds threshold
      if (intervalRef.current >= 3000) {
        stoppedRef.current = true;
        return;
      }

      timeoutRef.current = setTimeout(() => {
        randomate();
        // Slow down gradually
        intervalRef.current = intervalRef.current * 1.03;
        scheduleNext();
      }, intervalRef.current);
    };

    scheduleNextRef.current = scheduleNext;
    randomate(); // run once immediately
    scheduleNext();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [])

  // FADE-OUT VERSION - runs numIterations times then stops, restarts on scroll
  // useEffect(() => {
  //   const numIterations = 7
  //   if (iteration < 0) return
  //   if (iteration > numIterations) return
  //
  //   if (!canvasRef.current) throw new Error('no canvas')
  //   const context = canvasRef.current.getContext('2d', { willReadFrequently: true })
  //   if (!context) throw new Error('no context')
  //
  //   const imagedata = context.getImageData(0, 0, canvasRef.current.width, canvasRef.current.height);
  //   if (!imagedata) throw new Error('no imagedata')
  //
  //   const setPixel = (imagedata: ImageData, x: number, y: number, r: number, g: number, b: number, a: number) => {
  //     let i = (y * imagedata.width + x) * 4;
  //     imagedata.data[i++] = r;
  //     imagedata.data[i++] = g;
  //     imagedata.data[i++] = b;
  //     imagedata.data[i] = a;
  //   }
  //
  //   for (let y = 0; y < imagedata.height; y++) {
  //     for (let x = 0; x < imagedata.width; x++) {
  //       setPixel(imagedata, x, y, Math.floor((Math.random() * 5) + 30), Math.floor((Math.random() * 25) + 50), Math.floor((Math.random() * 10) + 50), Math.floor((Math.random() * 0) + 255));
  //     }
  //   }
  //   context.putImageData(imagedata, 0, 0);
  //   const nextInterval = (Math.tanh(iteration / numIterations) * 300)
  //   setTimeout(() => setIteration(iteration + 1), nextInterval)
  //   return () => {}
  // }, [iteration])





  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -1,
      overflow: 'hidden',
    }}>
      <img
        src="/cropped-bg.jpg"
        alt=""
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 1,
        }}
      />
      <canvas ref={canvasRef} id="canvas" width="800" height="3" style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        opacity: 0.7,
        backgroundColor: 'transparent',
      }} />
    </div>
  )

}

export default Background1