import { RustyAudioAnalyzer } from "./audio";

const canvas = document.getElementById('oscilloscope') as HTMLCanvasElement;
canvas.width = window.innerWidth - 50;
canvas.height = 100;
const canvasContext = canvas.getContext('2d');
const audioEngine = new RustyAudioAnalyzer()
const NO_OPTION_VALUE = "";

const selectElement = document.getElementById('audio-devices') as HTMLSelectElement | null;

void (async () => {
    const permissionGranted = await audioEngine.requestAudioPermission(); 
    if (!permissionGranted) {
        return;
    }
    const devices = await audioEngine.getAudioDevices();
    const defaultOption = document.createElement('option');
    defaultOption.text = "No audio input";
    defaultOption.value = NO_OPTION_VALUE;
    selectElement?.add(defaultOption);

    devices.forEach(device => {
        if (device.kind === 'audioinput') {
            const option = document.createElement('option');
            option.text = device.label;
            option.value = device.deviceId;
            selectElement?.add(option);
        }
    });
})();

selectElement?.addEventListener("change", async (event) => {
    if (event.target && "value" in event.target && typeof event.target.value === "string") {
        if (event.target.value === NO_OPTION_VALUE) {
            audioEngine.removeInputDevice();
            return;
        };
        audioEngine.setInputDevice(event.target.value);
    }
});


const fast_tanh = (x: number) =>
{
    if( x < -3 )
        return -1;
    else if( x > 3 )
        return 1;
    else
        return x * ( 27 + x * x ) / ( 27 + 9 * x * x );
}

export const drawOscilloscope = () => {
    requestAnimationFrame(drawOscilloscope);

    const audioBuffer = audioEngine.getAudioBufferSnapshot();
    if (!canvasContext || !audioBuffer) {
        canvasContext?.clearRect(0, 0, canvas.width, canvas.height);
        return;
    }
    
    if (audioBuffer.every(value => value <= 128 && value >= 127)) {
        canvasContext?.clearRect(0, 0, canvas.width, canvas.height);
        return;
    }

    canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    canvasContext.strokeStyle = "#79FE9D";
    canvasContext.beginPath();
    canvasContext.lineWidth = 3;

    const sliceWidth = (canvas.width * 1.0) / audioBuffer.length
    let x = 0;

    for (let i = 0; i < audioBuffer.length; i++) {
        const bufferValue = audioBuffer?.[i] ?? 0;
        const yNorm = bufferValue / 128 - 1;
        const y = (fast_tanh(3*yNorm) + 1 ) * canvas.height / 2;

        if (i === 0) {
            canvasContext.moveTo(x, y);
        } else {
            canvasContext.lineTo(x, y);
        }

        x += sliceWidth;
    }

    canvasContext.lineTo(canvas.width, canvas.height / 2);
    canvasContext.stroke();
};