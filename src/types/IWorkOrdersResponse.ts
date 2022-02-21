import {IWorkOrders} from "./IWorkOrders";

export interface IWorkOrdersResponse {
    exec_time: number;
    response: {
        current_page: number;
        from: number;
        last_page: number;
        per_page: number;
        to: number;
        total: number;
        data: IWorkOrders[];
    }
}
