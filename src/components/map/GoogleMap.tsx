/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState, useEffect, useRef } from "react"

export default function MapWithInfoBox() {
  const [isMapInteracted, setIsMapInteracted] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [currentZoom, setCurrentZoom] = useState(15) // Mức zoom mặc định

  // Hàm để lấy thông tin từ iframe
  const getMapInfo = () => {
    try {
      if (iframeRef.current && iframeRef.current.contentWindow) {
        // Cố gắng lấy thông tin từ postMessage nếu có thể
        iframeRef.current.contentWindow.postMessage("getZoom", "*")
      }
    } catch (error) {
      console.log("Không thể lấy thông tin zoom:", error)
    }
  }

  // Lắng nghe thông điệp từ iframe (nếu Google Maps cho phép)
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data && event.data.zoom) {
        setCurrentZoom(event.data.zoom)
      }
    }

    window.addEventListener("message", handleMessage)
    return () => window.removeEventListener("message", handleMessage)
  }, [])

  // Xử lý sự kiện khi người dùng tương tác với iframe
  const handleIframeLoad = () => {
    if (iframeRef.current) {
      // Thêm sự kiện để phát hiện khi người dùng tương tác với bản đồ
      iframeRef.current.addEventListener("mouseenter", () => {
        setIsMapInteracted(true)
      })

      iframeRef.current.addEventListener("mousemove", () => {
        setIsMapInteracted(true)
      })
    }
  }

  // Không cần tải lại map khi người dùng tương tác nữa
  useEffect(() => {
    if (isMapInteracted) {
      // Chỉ cần lấy thông tin zoom
      getMapInfo()
    }
  }, [isMapInteracted])

  // Thay đổi phần return để thêm chấm đen trỏ vị trí
  return (
    <div className="relative w-full h-full">
      <iframe
        ref={iframeRef}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d931.0875420193845!2d105.82586662847315!3d21.018670450656938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab785690be19%3A0x9efffd4702af2106!2zNzQgTmcuIEdp4bq_bmcsIENo4bujIEThu6thLCDEkOG7kW5nIMSQYSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1757063586447!5m2!1svi!2s&style=feature:all|element:labels|visibility:off&style=feature:administrative|element:geometry|visibility:off&style=feature:administrative.land_parcel|visibility:off&style=feature:administrative.neighborhood|visibility:off&style=feature:landscape|element:geometry.fill|color:0x000000&style=feature:poi|visibility:off&style=feature:road|element:geometry|color:0xffffff&style=feature:road|element:geometry.stroke|color:0x000000|weight:1&style=feature:transit|visibility:off&style=feature:water|element:geometry.fill|color:0x222222"
        width="100%"
        height="100%"
        style={{ border: 0, filter: "grayscale(100%) contrast(150%) brightness(90%) invert(100%)" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="MQ Home location"
        className="w-full h-full"
        onLoad={handleIframeLoad}
      ></iframe>

      {/* Info Box ở góc phải trên */}
      <div className="absolute right-8 top-8 w-1/3 max-w-[300px] bg-black p-3 z-20 shadow-lg">
        {/* Mũi tên trỏ xuống dưới */}
        <div
          className="absolute top-[100%] right-8 transform w-0 h-0 
                      border-l-8 border-r-8 border-t-8 
                      border-transparent border-t-black"
        ></div>

        <h2 className="text-base mb-2">MQhome</h2>
        <ul className="space-y-2 text-xs">
          <li className="flex items-start leading-tight">
            <span className="mr-1.5">•</span>
            <div>
              <p>Hotline: 0354238871</p>
            </div>
          </li>
          <li className="flex items-start leading-tight">
            <span className="mr-1.5">•</span>
            <div>
              <p>
                Email: <br />
                mqhome.media@gmail.com
              </p>
            </div>
          </li>
          <li className="flex items-start leading-tight">
            <span className="mr-1.5">•</span>
            <div>
              <p>
                Address: <br />
                74 Ng. Giếng, Chợ Dừa, Đống Đa, Hà Nội, Việt Nam
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

