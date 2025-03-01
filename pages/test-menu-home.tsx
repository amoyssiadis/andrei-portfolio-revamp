import React, { useState, useEffect, useRef } from 'react'
import MenuModal from '../components/MenuModal'
import { Bounded } from '../components/Bounded'
import useWindowDimensions from '../lib/useWindowDimensions'
import { useRouter } from 'next/router'

export default function TestMenuHome() {
  const [modalOpen, setModalOpen] = useState(false)
  const { width, height } = useWindowDimensions()
  const router = useRouter()
  const [isDesktop, setIsDesktop] = useState(false)
  const [fps, setFps] = useState(0)
  const [renderTime, setRenderTime] = useState(0)
  const [deviceSimulation, setDeviceSimulation] = useState('desktop')
  const frameRef = useRef(0)
  const lastTimeRef = useRef(performance.now())

  // Simulando os dados exatos que vêm do Prismic na home
  const mockSlice = {
    variation: 'gallery',
    primary: {
      work_menu_bg: {
        url: '/bgworkmenu.gif'
      },
      logo: {
        url: '/logo.png',
        dimensions: {
          width: 300,
          height: 300
        }
      },
      bgImg: {
        url: '/logobg.webp'
      }
    }
  }

  // FPS Counter
  useEffect(() => {
    let frameCount = 0
    const measureFPS = (timestamp) => {
      frameCount++
      const elapsed = timestamp - lastTimeRef.current
      
      if (elapsed >= 1000) {
        setFps(Math.round((frameCount * 1000) / elapsed))
        frameCount = 0
        lastTimeRef.current = timestamp
      }
      
      frameRef.current = requestAnimationFrame(measureFPS)
    }
    
    frameRef.current = requestAnimationFrame(measureFPS)
    return () => cancelAnimationFrame(frameRef.current)
  }, [])

  // Render time measurement
  useEffect(() => {
    const start = performance.now()
    return () => {
      const end = performance.now()
      setRenderTime(end - start)
    }
  })

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof width !== 'undefined') {
      setIsDesktop(width > 1000)
    }
  }, [width])

  // Device simulation presets
  const devicePresets = {
    mobile: { width: 375, height: 667 },
    tablet: { width: 768, height: 1024 },
    desktop: { width: 1440, height: 900 }
  }

  // Breakpoints do projeto
  const breakpoints = {
    '321': width >= 321,
    '340': width >= 340,
    '375': width >= 375,
    '400': width >= 400,
    '426': width >= 426,
    '431': width >= 431,
    'sm': width >= 640,
    'md': width >= 768,
    'lg': width >= 1024
  }

  // Classes aplicadas na home
  const homeClasses = {
    container: 'overflow-hidden bg-black py-10',
    inner: 'h-screen -mt-24 flex flex-row items-center justify-center px-8',
    menu: 'portfoliomenu h-full w-full scale-[1.5] sm:scale-[2]'
  }

  return (
    <Bounded as="section" className={homeClasses.container}>
      <div className={homeClasses.inner}>
        {/* Painel de Controles */}
        <div className="fixed top-4 left-4 text-white text-sm space-y-2 bg-black/80 p-4 rounded-lg">
          <h2 className="font-bold">Controles</h2>
          <button 
            onClick={() => setModalOpen(true)}
            className="px-4 py-2 text-white bg-gray-800 rounded-md block w-full"
          >
            Abrir Menu (Home Version)
          </button>

          <div className="pt-4">
            <h3 className="font-bold mb-2">Simulação de Device:</h3>
            <select 
              value={deviceSimulation}
              onChange={(e) => setDeviceSimulation(e.target.value)}
              className="w-full bg-gray-800 text-white rounded-md p-2"
            >
              <option value="mobile">Mobile (375x667)</option>
              <option value="tablet">Tablet (768x1024)</option>
              <option value="desktop">Desktop (1440x900)</option>
            </select>
          </div>

          <div className="pt-4">
            <h3 className="font-bold">Dados do Prismic:</h3>
            <pre className="text-xs mt-2 overflow-auto max-h-40">
              {JSON.stringify(mockSlice, null, 2)}
            </pre>
          </div>
        </div>

        {/* Painel de Debug */}
        <div className="fixed bottom-4 right-4 text-white text-sm space-y-2 bg-black/80 p-4 rounded-lg max-w-sm">
          <h2 className="font-bold">Debug Info</h2>
          
          {/* Performance Metrics */}
          <div>
            <h3 className="font-bold">Performance:</h3>
            <p className={fps < 30 ? 'text-red-400' : fps < 50 ? 'text-yellow-400' : 'text-green-400'}>
              FPS: {fps}
            </p>
            <p>Render Time: {renderTime.toFixed(2)}ms</p>
          </div>

          <div>
            <h3 className="font-bold">Dimensões:</h3>
            <p>Width: {width}px</p>
            <p>Height: {height}px</p>
            <p>isDesktop: {isDesktop ? 'true' : 'false'}</p>
            <p>Device Simulation: {deviceSimulation}</p>
          </div>

          <div>
            <h3 className="font-bold">Breakpoints Ativos:</h3>
            {Object.entries(breakpoints).map(([name, active]) => (
              <p key={name} className={active ? 'text-green-400' : 'text-red-400'}>
                {name}: {active ? '✓' : '✗'}
              </p>
            ))}
          </div>

          <div>
            <h3 className="font-bold">Estado:</h3>
            <p>Modal: {modalOpen ? 'Aberto' : 'Fechado'}</p>
            <p>Path: {router.asPath}</p>
          </div>

          <div>
            <h3 className="font-bold">Classes Aplicadas:</h3>
            <pre className="text-xs mt-2 overflow-auto max-h-40">
              {JSON.stringify(homeClasses, null, 2)}
            </pre>
          </div>

          {/* Memory Usage */}
          <div>
            <h3 className="font-bold">Memória:</h3>
            <p>
              {(performance as any).memory ? 
                `${Math.round((performance as any).memory.usedJSHeapSize / 1024 / 1024)}MB / 
                 ${Math.round((performance as any).memory.jsHeapSizeLimit / 1024 / 1024)}MB` 
                : 'Não disponível'}
            </p>
          </div>
        </div>

        {/* MenuModal com a configuração exata da home */}
        <MenuModal 
          isOpen={modalOpen} 
          setIsOpen={setModalOpen} 
          menuBgImage={mockSlice.primary.work_menu_bg}
        />
      </div>
    </Bounded>
  )
} 