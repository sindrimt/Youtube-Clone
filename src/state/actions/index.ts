import { ActionType } from "../action-types/index";

interface DepositAction {
  type: ActionType.DEPOSIT;
  payload: string;
}

export type Action = DepositAction /* | WithdrawAction | BankruptAction */;
