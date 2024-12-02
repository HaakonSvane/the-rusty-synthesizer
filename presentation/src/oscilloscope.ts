const canvas = document.getElementById('oscilloscope') as HTMLCanvasElement;

const canvasContext = canvas.getContext('2d');
const audioContext = new AudioContext();

let mediaStream = await navigator.mediaDevices.getUserMedia({audio: true});
const devices = await navigator.mediaDevices.enumerateDevices();
const selectElement = document.getElementById('audio-devices') as HTMLSelectElement | null;
let sourceNode = new MediaStreamAudioSourceNode(audioContext, {mediaStream});

devices.forEach(device => {
    if (device.kind === 'audioinput') {
        const option = document.createElement('option');
        option.text = device.label;
        option.value = device.deviceId;
        selectElement?.add(option);
    }
});

selectElement?.addEventListener("change", async (event) => {
    if (event.target && "value" in event.target && typeof event.target.value === "string") {
        mediaStream.getAudioTracks().forEach(track => track.stop());
        mediaStream = await navigator.mediaDevices.getUserMedia({ audio: {deviceId: {exact: event.target.value}} });
        sourceNode = new MediaStreamAudioSourceNode(audioContext, {mediaStream});
    }
});

const analyser = new AnalyserNode(audioContext);
analyser.fftSize = 2048;
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);
analyser.getByteTimeDomainData(dataArray);

sourceNode.connect(analyser);


export const drawOscilloscope = () => {
    requestAnimationFrame(drawOscilloscope);
    analyser.getByteTimeDomainData(dataArray);
    if (!canvasContext) {
        return;
    }
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    canvasContext.lineWidth = 2;
    canvasContext.strokeStyle = "#79FE9D";

    canvasContext.beginPath();

    const sliceWidth = (canvas.width * 1.0) / bufferLength;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
        const v = dataArray[i] / 128.0;
        const y = (v * canvas.height) / 2;

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