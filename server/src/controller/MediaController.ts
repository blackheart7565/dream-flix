import type {
	Request as Req,
	Response as Res,
	NextFunction as Next,
} from "express";

interface IMediaController { }

class MediaController implements IMediaController {

	async mediaList(req: Req, res: Res, next: Next) {

	}

	async mediaDetails(req: Req, res: Res, next: Next) {

	}

	async mediaGenre(req: Req, res: Res, next: Next) {

	}

	async mediaSearch(req: Req, res: Res, next: Next) {

	}
}

export default new MediaController();