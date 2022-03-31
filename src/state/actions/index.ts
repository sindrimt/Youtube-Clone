import { ActionType } from "../action-types/index";

interface DepositAction {
  type: ActionType.DEPOSIT;
  payload: string;
}
interface SaveUserAction {
  type: ActionType.SAVE_USER;
  payload: string;
}

export type Action = DepositAction | SaveUserAction /*| BankruptAction */;
