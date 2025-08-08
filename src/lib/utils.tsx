import data from '../../data/data.json';
import type {JobApplication} from "../../types/job";

export function loadData() {
    return data as JobApplication[];
}