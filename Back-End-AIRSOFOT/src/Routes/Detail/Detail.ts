import { Router } from "express";
//- Controllers:
import GetDetailControllerDetail from "../../Controllers/Detail/Detail";

const Detail = Router();

//- Detail:
Detail.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const response = await GetDetailControllerDetail(id);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(500).json(error.message);
  }
});

export default Detail;
