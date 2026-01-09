import {Metadata} from "next";
import Dashboard from "@/app/Dashboard";

export const metadata: Metadata = {
    title: 'Список активных целей',
    description: 'Список активных целей пользователя'
}

export default function Home() {

    return <Dashboard />
}
