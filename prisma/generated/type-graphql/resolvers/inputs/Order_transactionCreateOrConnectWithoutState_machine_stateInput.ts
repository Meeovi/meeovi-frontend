import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transactionCreateWithoutState_machine_stateInput } from "../inputs/Order_transactionCreateWithoutState_machine_stateInput";
import { Order_transactionWhereUniqueInput } from "../inputs/Order_transactionWhereUniqueInput";

@TypeGraphQL.InputType("Order_transactionCreateOrConnectWithoutState_machine_stateInput", {})
export class Order_transactionCreateOrConnectWithoutState_machine_stateInput {
  @TypeGraphQL.Field(_type => Order_transactionWhereUniqueInput, {
    nullable: false
  })
  where!: Order_transactionWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_transactionCreateWithoutState_machine_stateInput, {
    nullable: false
  })
  create!: Order_transactionCreateWithoutState_machine_stateInput;
}
