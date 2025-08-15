export class TaskScheduler {
    private queue: Array<() => void> = [];
    private running = 0;

    constructor(private maxConcurrent: number) {
    }

    add<T>(task: (abortSignal: AbortSignal) => Promise<T>, abortSignal: AbortSignal): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            const run = async () => {
                if (abortSignal.aborted) {
                    reject(new DOMException('Aborted', 'AbortError'));
                    this.next();
                } else {
                    this.running++;
                    try {
                        const result = await task(abortSignal);
                        resolve(result);
                    } catch (err) {
                        reject(err);
                    } finally {
                        this.running--;
                        this.next();
                    }
                }
            };
            this.queue.push(run);
            this.next();

        });
    }

    private next() {
        while (this.running < this.maxConcurrent && this.queue.length > 0) {
            const task = this.queue.shift()!;
            task();
        }
    }
}

