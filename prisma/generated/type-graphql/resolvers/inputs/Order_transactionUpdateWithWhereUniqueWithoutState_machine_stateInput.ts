import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transactionUpdateWithoutState_machine_stateInput } from "../inputs/Order_transactionUpdateWithoutState_machine_stateInput";
import { Order_transactionWhereUniqueInput } from "../inputs/Order_transactionWhereUniqueInput";

@TypeGraphQL.InputType("Order_transactionUpdateWithWhereUniqueWithoutState_machine_stateInput", {})
export class Order_transactionUpdateWithWhereUniqueWithoutState_machine_stateInput {
  @TypeGraphQL.Field(_type => Order_transactionWhereUniqueInput, {
    nullable: false
  })
  where!: Order_transactionWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_transactionUpdateWithoutState_machine_stateInput, {
    nullable: false
  })
  data!: Order_transactionUpdateWithoutState_machine_stateInput;
}
