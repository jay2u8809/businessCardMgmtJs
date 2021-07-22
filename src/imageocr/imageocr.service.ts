import { Injectable } from '@nestjs/common';
import { createWorker } from "tesseract.js";
import { isEmpty } from "../common/common.utils";

@Injectable()
export class ImageocrService {

    async getOcrProcessResult(file: Express.Multer.File): Promise<string> {

        let result = await this.ocrImageProcess(file.buffer);
        return result;
    }

    /**
     *
     * @private
     */
    private async ocrImageProcess(file: Buffer): Promise<string> {

        let result = null;

        const worker = createWorker({
            logger: (m) => console.log(m),
        });

        await (async () => {
            await worker.load();
            await worker.loadLanguage('eng');
            await worker.initialize('eng');
            const { data: { text } } = await worker.recognize(file);
            result = text;
            await worker.terminate();
        })();

        return isEmpty(result) ? null : result;
    }
}
