import {Controller, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import {ImageocrService} from "./imageocr.service";
import {FileInterceptor} from "@nestjs/platform-express";
import {isEmpty} from "../common/common.utils";

@Controller('imageocr')
export class ImageocrController {
    constructor(private readonly imageocrService:ImageocrService) {}

    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    async getOcrString(@UploadedFile() file: Express.Multer.File): Promise<string> {

        if (isEmpty(file) || isEmpty(file.buffer)) {
            return null;
        }

        return await this.imageocrService.getOcrProcessResult(file);
    }
}
