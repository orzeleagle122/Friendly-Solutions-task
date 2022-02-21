export interface IWorkOrders {
    assigned_to: {
        person_name: string;
        status: string;
    }[];
    description: string;
    work_order_id: number;
    received_date: string;
    status: string;
    priority: string;

}