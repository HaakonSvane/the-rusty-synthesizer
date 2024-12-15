export class RustyAudioAnalyzer {

    private context: AudioContext;
    private analyser: AnalyserNode | null = null;
    private sourceNode: MediaStreamAudioSourceNode | null = null;
    private timeDataBuffer: Uint8Array | null = null;
    private frequencyDataBuffer: Uint8Array | null = null;
    
    constructor() {
        this.context = new AudioContext();
    }

    private resetAudioPipeline(withStream: MediaStream) {
        this.sourceNode = new MediaStreamAudioSourceNode(this.context, {mediaStream: withStream});
        this.analyser = new AnalyserNode(this.context);
        const gainNode = new GainNode(this.context);

        this.analyser.fftSize = 2048;
        const bufferLength = this.analyser.frequencyBinCount;
        this.timeDataBuffer = new Uint8Array(bufferLength);
        this.frequencyDataBuffer = new Uint8Array(bufferLength);
        this.analyser.getByteTimeDomainData(this.timeDataBuffer);

        this.sourceNode
            .connect(this.analyser)
            .connect(gainNode)
            .connect(this.context.destination);
    };

    public requestAudioPermission = async () => {
        try {
            await navigator.mediaDevices.getUserMedia({audio: true});
            return true;
        }
        catch (e) {
            console.error("Failed to get audio stream", e);
            return false;
        }
    };
    
    public getAudioDevices = async () => {
        const devices = await navigator.mediaDevices.enumerateDevices();
        return devices.filter(device => device.kind === "audioinput");
    };

    public setInputDevice = async (deviceId: string) => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({audio: {deviceId: {exact: deviceId}}});
            this.resetAudioPipeline(stream);
        }
        catch (ex) {
            if (!(ex instanceof DOMException)) return;
            console.error(`Failed to get audio input with device id ${deviceId}.\nError:\n${ex.message}`)
        }
    };

    public getAudioBufferSnapshot = () => {
        if (!this.analyser || !this.timeDataBuffer) return null;
        this.analyser.getByteTimeDomainData(this.timeDataBuffer);
        return this.timeDataBuffer;
    };

    private getNumberOfSamplesForRootFrequency = () => {
        if (!this.analyser || !this.frequencyDataBuffer) return null;
        this.analyser.getByteFrequencyData(this.frequencyDataBuffer);
        const dominantFrequency = Math.max(...this.frequencyDataBuffer);
        const period = 1 / dominantFrequency;
        return Math.round(this.context.sampleRate * period);
    };

    public getFrequencyLockedBufferSnapshot = () => {
        if (!this.analyser || !this.frequencyDataBuffer) return null;
        this.analyser.getByteFrequencyData(this.frequencyDataBuffer);
        const dominantFrequency = this.frequencyDataBuffer.indexOf(Math.max(...this.frequencyDataBuffer));
        if (dominantFrequency === -1) return null;
    };

    public removeInputDevice = () => {
        if (this.sourceNode) {
            this.sourceNode.mediaStream.getTracks().forEach(track => track.stop());
            this.sourceNode.disconnect();
            this.sourceNode = null;
            this.analyser = null;
            this.timeDataBuffer = null;
        }
    };
}