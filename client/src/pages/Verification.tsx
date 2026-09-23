import { useState, useRef } from "react"

import emailIcon from "../assets/email-icon.png"

export default function Verification() {
  const codeLength = 5
  const [codeValue, setCodeValue] = useState("")
  const [isFocused, setIsFocused] = useState(false)
  const hiddenInputRef = useRef<HTMLInputElement>(null)

  const inputStyle = "w-5 bg-[#E6E6E6] text-[#605858] text-center flex items-center justify-center h-20 w-12 md:h-24 md:w-16 rounded-md font-bold text-2xl md:text-4xl"

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const rawInput = event.target.value
    const numericOnly = rawInput.replace(/\D/g, "")
    const cleanedCode = numericOnly.slice(0, codeLength)
    const codeValue = cleanedCode
    setCodeValue(codeValue)

    if (codeValue.length === codeLength) { submitVerification(codeValue) }
  }

  const handleContainerClick = () => { hiddenInputRef.current?.focus() }

  const handleFocus =() => setIsFocused(true)
  const handleBlur = () => setIsFocused(false)

  function submitVerification(code: string) { console.log(`[CLIENT]: Submitting Verification Code: ${code}`) }

  return (
    <>
      <main className="h-full">
        <article className="flex justify-center h-screen items-center py-10">
          <section className="w-9/10 md:w-7/10 lg:w-2/5 bg-washed-white p-5 md:p-10 lg:p-15 rounded-md flex flex-col items-center gap-y-5">
            <div className="flex justify-center">
              <img 
                src={ emailIcon } alt="Email Icon" 
                className="bg-[#53FFA3] rounded-full p-4 w-32"
              />
            </div>
            <div className="flex flex-col items-center gap-y-5">
              <h1 className="font-bold text-center">Enter Your Verification Code</h1>
              <p className="text-center">We have sent a verification code to <b>yourname@gmail.com</b></p>
              <p className="text-center">Check your email to complete your verification. <br /> You might need to check your <b>spam folder</b>.</p>
            </div>
            <div 
              className="relative flex justify-center items-center gap-x-3 md:gap-x-5 mb-5 cursor-pointer" 
              onClick={handleContainerClick}
            >
              <input 
                ref={hiddenInputRef}
                type="text" 
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={codeLength}
                value={codeValue}
                onChange={handleInputChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />

              {Array.from({ length: codeLength }).map((_, index) => {
                const digit = codeValue[index] || "";
                const isCurrentBox = 
                  (isFocused && index === codeValue.length) || 
                  (isFocused && index === codeLength - 1 && codeValue.length === codeLength);

                return (
                  <div 
                    key={index}
                    className={`${ inputStyle } ${
                      isCurrentBox ? "border-2 border-[#53FFA3] ring-2 ring-[#53FFA3]/30" : "border border-transparent"
                    }`}
                  >
                    {digit ? (
                      <span>{digit}</span>
                    ) : (
                      <span className="text-gray-400">X</span>
                    )}
                  </div>
                );
              })}
            </div>
            <div>
              <div className="flex flex-col md:flex-row gap-x-5 gap-y-3">
                <button className="bg-green rounded-lg font-bold text-white px-8 py-4">Resend Code</button>
                <button className="bg-white border border-green border-solid text-green px-8 py-4 rounded-lg">Return to Site</button>
              </div>
            </div>
          </section>
        </article>
      </main>
    </>
  )
}