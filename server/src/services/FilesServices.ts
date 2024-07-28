import path from "path";
import { v4 as uuidV4 } from 'uuid';
import fs from "fs";
import fsPromise from "fs/promises";
import fileUpload from "express-fileupload";

import DateServices from "./DateServices";

import type { TError } from "../types/common";

interface IFilesServices { }

class FileServices implements IFilesServices {

	public async fileExists(pathFile: string): Promise<boolean> {
		if (!pathFile) return false;

		try {
			await fsPromise.access(pathFile, fs.constants.F_OK);
			return true;
		} catch {
			return false;
		}
	}

	public async deleteFile(pathFile: string): Promise<void> {
		if (!pathFile) return;

		try {
			await fsPromise.unlink(pathFile);
		} catch (error: TError) {
			return;
		}
	}

	public async checkAndDeleteFile(pathFile: string): Promise<void> {
		if (!pathFile) return;

		try {
			const fileExists: boolean = await this.fileExists(pathFile);
			if (!fileExists) return;

			await this.deleteFile(pathFile);
		} catch (error) {
			return;
		}
	}

	public async move(images: fileUpload.UploadedFile, userName?: string): Promise<string | void> {
		if (!images || Object.keys(images).length <= 0) return;

		const name: string[] = images.name.split(".");
		const fileExtension: string = name[1];

		const data: string = DateServices.getCurrentDate();
		const time: string = DateServices.getCurrentTime();

		const hash: string = uuidV4();

		const newNameFile: string = userName
			? `${userName}_${data}T${time}_${hash}.${fileExtension}`
			: `${data}T${time}_${hash}.${fileExtension}`;

		const pathFolder: string = path.resolve(__dirname, "..", "static");

		await this.checkFolderAndCreate(pathFolder);

		const pathFile: string = path.resolve(pathFolder, newNameFile);

		await images.mv(pathFile);

		return newNameFile;
	}

	public async folderExists(pathFolder: string): Promise<boolean> {
		if (!pathFolder) return false;

		try {
			const data: string[] = await fsPromise.readdir(pathFolder);
			return data.length > 0;
		} catch (error) {
			return false;
		}
	}

	public async createFolder(pathFolder: string): Promise<void> {
		if (!pathFolder) return;

		await fsPromise.mkdir(pathFolder);
	}

	public async checkFolderAndCreate(pathFolder: string): Promise<void> {
		if (!pathFolder) return;

		try {
			const folderExists: boolean = await this.folderExists(pathFolder);
			if (folderExists) return;

			await this.createFolder(pathFolder);
		} catch (error) {
			return;
		}
	}
}

export default new FileServices();