const canvas = document.getElementById('oscilloscope') as HTMLCanvasElement;

const canvasContext = canvas.getContext('2d');
const audioContext = new AudioContext();
const analyser = new AnalyserNode(audioContext);

const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);
analyser.getByteTimeDomainData(dataArray);

let mediaStream = await navigator.mediaDevices.getUserMedia({audio: true});
const devices = await navigator.mediaDevices.enumerateDevices();
const selectElement = document.getElementById('audio-devices') as HTMLSelectElement;
let sourceNode = new MediaStreamAudioSourceNode(audioContext, {mediaStream});

devices.forEach(device => {
    if (device.kind === 'audioinput') {
        const option = document.createElement('option');
        option.text = device.label;
        option.value = device.deviceId;
        selectElement.add(option);
    }
});

selectElement.addEventListener("change", async (event) => {
    if (event.target && "value" in event.target && typeof event.target.value === "string") {
        mediaStream.getAudioTracks().forEach(track => track.stop());
        mediaStream = await navigator.mediaDevices.getUserMedia({ audio: {deviceId: {exact: event.target.value}} });
        sourceNode = new MediaStreamAudioSourceNode(audioContext, {mediaStream});
    }
});


export const drawOscilloscope = () => {
    requestAnimationFrame(drawOscilloscope);
};