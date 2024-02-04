import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transactionScalarWhereInput } from "../inputs/Order_transactionScalarWhereInput";
import { Order_transactionUpdateManyMutationInput } from "../inputs/Order_transactionUpdateManyMutationInput";

@TypeGraphQL.InputType("Order_transactionUpdateManyWithWhereWithoutState_machine_stateInput", {})
export class Order_transactionUpdateManyWithWhereWithoutState_machine_stateInput {
  @TypeGraphQL.Field(_type => Order_transactionScalarWhereInput, {
    nullable: false
  })
  where!: Order_transactionScalarWhereInput;

  @TypeGraphQL.Field(_type => Order_transactionUpdateManyMutationInput, {
    nullable: false
  })
  data!: Order_transactionUpdateManyMutationInput;
}
