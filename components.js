/**
 * COMPONENTS.JS
 * Single source of truth for every part shown on the site.
 *
 * To add a new component later:
 *   1. Drop the .glb file into /3d-files/
 *   2. Add one object to this array (copy an existing one as a template)
 *   3. Nothing else needs to change — script.js builds the page from this file.
 */

const COMPONENTS = [
  {
    id: "arduino-uno",
    partNumber: "PT-01",
    name: "Arduino Uno",
    file: "3d-files/arduino_uno_q.glb",
    tagline: "The board most projects start with.",
    description:
      "A microcontroller board built around the ATmega328P chip. It has digital and analog pins for reading sensors and driving outputs, a USB port for programming and power, and a large ecosystem of shields and libraries.",
    uses: [
      "Learning electronics and programming fundamentals",
      "Prototyping sensor and robotics projects",
      "Controlling motors, lights, and displays",
      "Standalone embedded projects once the code is finished",
    ],
    specs: {
      "Microcontroller": "ATmega328P",
      "Operating voltage": "5V",
      "Digital I/O pins": "14 (6 PWM)",
      "Analog inputs": "6",
      "Clock speed": "16 MHz",
    },
  },
  {
    id: "oled-display",
    partNumber: "PT-02",
    name: "0.96\" OLED Display",
    file: "3d-files/display_oled_128x64.glb",
    tagline: "Crisp monochrome output in a fingernail-sized panel.",
    description:
      "A 128x64 pixel monochrome OLED module, usually driven by an SSD1306 controller over I2C or SPI. Each pixel lights itself, so there's no backlight — text and graphics appear sharp with true blacks.",
    uses: [
      "Showing sensor readings and menus",
      "Small status or diagnostic screens",
      "Simple graphics, icons, and scrolling text",
      "Low-power wearable or handheld displays",
    ],
    specs: {
      "Resolution": "128 x 64 px",
      "Driver IC": "SSD1306 (typical)",
      "Interface": "I2C / SPI",
      "Operating voltage": "3.3V–5V",
    },
  },
  {
    id: "l298n-driver",
    partNumber: "PT-03",
    name: "L298N Motor Driver",
    file: "3d-files/driver_ponte_h_l298n.glb",
    tagline: "Lets a small microcontroller command big motors.",
    description:
      "A dual H-bridge module that lets a low-power microcontroller switch the direction and speed of DC motors, or step a stepper motor, without passing motor current through the controller's own pins.",
    uses: [
      "Driving two DC motors forward, backward, and at variable speed",
      "Controlling a single bipolar stepper motor",
      "Robot drivetrains and wheeled platforms",
      "Any project where logic and motor power need to stay isolated",
    ],
    specs: {
      "Driver IC": "L298N dual H-bridge",
      "Logic voltage": "5V",
      "Motor voltage": "5V–35V",
      "Max current per channel": "2A",
    },
  },
  {
    id: "joystick-module",
    partNumber: "PT-04",
    name: "Analog Joystick Module",
    file: "3d-files/joystick_shied.glb",
    tagline: "Two potentiometers and a button, arranged for a thumb.",
    description:
      "A two-axis analog joystick built from a pair of potentiometers plus a push-button switch triggered by pressing straight down. It reports X and Y position as continuous voltages, not just on/off directions.",
    uses: [
      "Manual robot or RC vehicle control",
      "Menu navigation on embedded devices",
      "Camera pan-tilt control",
      "Simple game controllers",
    ],
    specs: {
      "Output": "2x analog (X, Y) + 1 digital button",
      "Resistance": "10 kΩ per axis (typical)",
      "Operating voltage": "5V",
    },
  },
  {
    id: "led-red",
    partNumber: "PT-05",
    name: "Red LED",
    file: "3d-files/led_vermelho.glb",
    tagline: "The simplest way to make a circuit say something back.",
    description:
      "A light-emitting diode that turns electrical current directly into light. It only conducts one direction, so polarity matters, and it always needs a current-limiting resistor in series to avoid burning out.",
    uses: [
      "Status and power indicators",
      "Learning polarity, forward voltage, and Ohm's law in practice",
      "Basic output signaling on any circuit",
      "Blinking and fading demos for beginners",
    ],
    specs: {
      "Forward voltage": "~2.0V (typical red)",
      "Forward current": "~20mA (typical)",
      "Polarity": "Anode (+) / Cathode (−)",
    },
  },
  {
    id: "led-matrix",
    partNumber: "PT-06",
    name: "8x8 LED Matrix",
    file: "3d-files/matriz_de_leds_8x8.glb",
    tagline: "64 LEDs, wired in rows and columns, driven as one grid.",
    description:
      "An 8x8 grid of LEDs arranged so rows and columns share wiring, usually paired with a MAX7219 driver chip that handles multiplexing so a microcontroller only needs a few pins to control all 64 lights.",
    uses: [
      "Scrolling text and simple animations",
      "Basic pixel-art displays and icons",
      "Level meters and visualizers",
      "Learning multiplexing and driver ICs",
    ],
    specs: {
      "Grid": "8 x 8 (64 LEDs)",
      "Driver IC": "MAX7219 (typical)",
      "Interface": "SPI-like (3 pins)",
    },
  },
  {
    id: "seven-segment",
    partNumber: "PT-07",
    name: "4-Digit 7-Segment Display",
    file: "3d-files/modulo_display_7_segmentos_4_digitos.glb",
    tagline: "Four digits, seven segments each, one driver chip.",
    description:
      "A module with four 7-segment digits behind a single driver (commonly TM1637), which multiplexes the digits and handles brightness control so only a couple of pins are needed to show numbers.",
    uses: [
      "Clocks, timers, and countdowns",
      "Counters and score displays",
      "Numeric sensor readouts (temperature, distance, etc.)",
      "Any project that needs a bright numeric display",
    ],
    specs: {
      "Digits": "4",
      "Driver IC": "TM1637 (typical)",
      "Interface": "2-wire (CLK, DIO)",
    },
  },
  {
    id: "relay-module",
    partNumber: "PT-08",
    name: "1-Channel Relay Module",
    file: "3d-files/modulo_rele_1_canal.glb",
    tagline: "A logic signal flipping a mechanical switch.",
    description:
      "An electromechanical switch controlled by a low-voltage logic signal. A small coil pulls a physical contact closed, letting a microcontroller switch mains-voltage or high-current loads it could never touch directly.",
    uses: [
      "Switching lamps, fans, and small appliances",
      "Controlling higher-voltage or higher-current loads from a microcontroller",
      "Automated irrigation, lighting, or heating systems",
      "Isolating sensitive logic circuits from noisy loads",
    ],
    specs: {
      "Control signal": "3.3V–5V logic",
      "Switching capacity": "10A @ 250VAC (typical)",
      "Isolation": "Optocoupler-isolated (typical)",
    },
  },
  {
    id: "potentiometer",
    partNumber: "PT-09",
    name: "10kΩ Linear Potentiometer",
    file: "3d-files/potenciometro_linear_10k.glb",
    tagline: "A resistor you can turn.",
    description:
      "A three-terminal variable resistor. Turning the shaft slides a wiper across a resistive track, dividing voltage between the outer terminals so the middle pin reports a position as a changing voltage.",
    uses: [
      "Volume, brightness, and speed controls",
      "Reading a manual position as analog input",
      "Calibration trimmers inside finished circuits",
      "Teaching voltage dividers hands-on",
    ],
    specs: {
      "Resistance": "10 kΩ",
      "Taper": "Linear",
      "Terminals": "3 (two ends + wiper)",
    },
  },
  {
    id: "resistor-10k",
    partNumber: "PT-10",
    name: "10kΩ Resistor",
    file: "3d-files/resistor_10kohms.glb",
    tagline: "The component that makes every other component safe.",
    description:
      "A passive component that resists the flow of current by a fixed amount, dropping voltage across itself in the process. Color bands on the body encode its resistance value and tolerance.",
    uses: [
      "Current-limiting for LEDs and other components",
      "Pull-up and pull-down resistors on digital pins",
      "Voltage dividers for sensor circuits",
      "Setting bias points in analog circuits",
    ],
    specs: {
      "Resistance": "10,000 Ω (10 kΩ)",
      "Color code": "Brown-Black-Orange",
      "Typical tolerance": "±5%",
    },
  },
  {
    id: "ultrasonic-sensor",
    partNumber: "PT-11",
    name: "Ultrasonic Distance Sensor",
    file: "3d-files/sensor_de_distancia_ultrassonico.glb",
    tagline: "Measures distance by timing an echo.",
    description:
      "A sensor with two 'eyes': one transmits a burst of ultrasonic sound, the other listens for it to bounce back. Timing that round trip, and knowing the speed of sound, gives an accurate distance reading.",
    uses: [
      "Obstacle detection and avoidance for robots",
      "Parking and proximity sensors",
      "Non-contact liquid level measurement",
      "Automatic soap dispensers and similar triggers",
    ],
    specs: {
      "Range": "2cm–400cm (typical)",
      "Interface": "Trigger / Echo digital pins",
      "Operating voltage": "5V",
    },
  },
  {
    id: "dht11-sensor",
    partNumber: "PT-12",
    name: "DHT11 Temperature & Humidity Sensor",
    file: "3d-files/sensor_de_temperatura_e_umidade_dht11.glb",
    tagline: "One sensor, two readings, one wire.",
    description:
      "A digital sensor combining a humidity sensor and a thermistor, calibrated at the factory and read over a single-wire digital protocol — no analog-to-digital conversion needed on the microcontroller side.",
    uses: [
      "Home weather stations",
      "Greenhouse and terrarium monitoring",
      "Basic home-automation climate triggers",
      "Data-logging projects for learning sensors",
    ],
    specs: {
      "Humidity range": "20–90% RH",
      "Temperature range": "0–50°C",
      "Interface": "Single-wire digital",
    },
  },
];
