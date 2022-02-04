import { SalesService } from "../../services";

const deleteSale = async (_id: string) => await SalesService.remove(_id)

export default deleteSale;