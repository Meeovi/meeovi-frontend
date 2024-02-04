import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transaction_captureUpdateWithoutState_machine_stateInput } from "../inputs/Order_transaction_captureUpdateWithoutState_machine_stateInput";
import { Order_transaction_captureWhereUniqueInput } from "../inputs/Order_transaction_captureWhereUniqueInput";

@TypeGraphQL.InputType("Order_transaction_captureUpdateWithWhereUniqueWithoutState_machine_stateInput", {})
export class Order_transaction_captureUpdateWithWhereUniqueWithoutState_machine_stateInput {
  @TypeGraphQL.Field(_type => Order_transaction_captureWhereUniqueInput, {
    nullable: false
  })
  where!: Order_transaction_captureWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_transaction_captureUpdateWithoutState_machine_stateInput, {
    nullable: false
  })
  data!: Order_transaction_captureUpdateWithoutState_machine_stateInput;
}
