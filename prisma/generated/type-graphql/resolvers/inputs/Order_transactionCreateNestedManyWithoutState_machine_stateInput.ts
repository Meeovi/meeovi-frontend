import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transactionCreateManyState_machine_stateInputEnvelope } from "../inputs/Order_transactionCreateManyState_machine_stateInputEnvelope";
import { Order_transactionCreateOrConnectWithoutState_machine_stateInput } from "../inputs/Order_transactionCreateOrConnectWithoutState_machine_stateInput";
import { Order_transactionCreateWithoutState_machine_stateInput } from "../inputs/Order_transactionCreateWithoutState_machine_stateInput";
import { Order_transactionWhereUniqueInput } from "../inputs/Order_transactionWhereUniqueInput";

@TypeGraphQL.InputType("Order_transactionCreateNestedManyWithoutState_machine_stateInput", {})
export class Order_transactionCreateNestedManyWithoutState_machine_stateInput {
  @TypeGraphQL.Field(_type => [Order_transactionCreateWithoutState_machine_stateInput], {
    nullable: true
  })
  create?: Order_transactionCreateWithoutState_machine_stateInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transactionCreateOrConnectWithoutState_machine_stateInput], {
    nullable: true
  })
  connectOrCreate?: Order_transactionCreateOrConnectWithoutState_machine_stateInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_transactionCreateManyState_machine_stateInputEnvelope, {
    nullable: true
  })
  createMany?: Order_transactionCreateManyState_machine_stateInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Order_transactionWhereUniqueInput], {
    nullable: true
  })
  connect?: Order_transactionWhereUniqueInput[] | undefined;
}
