import { Vehicle } from "@/Entities/Vehicle";
import { api } from "@/utils/api";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export interface InstallmentsResponse {
    first_installment: string;
    second_installment: string;
    third_installment: string;
}


export function useHome(){

    const [inputValue, setInputValue] = useState(0);
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | undefined>(undefined);
    const [installments, setInstallments] = useState<InstallmentsResponse | undefined>(undefined);

    function handleSimulateVehicle(){

        if(!selectedVehicle){
            toast.error("Selecione um veículo");
            return;
        }

        if(inputValue >= selectedVehicle.price){
            toast.error("O valor informado deve ser menor que o valor do veículo");
            return;
        }

        api.post(`/vehicles/${selectedVehicle.id}`, {
            input_value: inputValue
        }).then(({ data }) => {
            setInstallments(data);
        }).catch((error) => {
            toast.error(error.response.data.message);
        });


    }

    useEffect(() => {

        api.get("/vehicles").then(({ data }) => {
            setVehicles(data.data);
            setSelectedVehicle(data.data[0]);

        })
    }, []);





    return {
        inputValue,
        setInputValue,
        vehicles,
        setSelectedVehicle,
        handleSimulateVehicle,
        selectedVehicle,
        installments
    }

}
