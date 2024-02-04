import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transaction_captureCreateManyState_machine_stateInputEnvelope } from "../inputs/Order_transaction_captureCreateManyState_machine_stateInputEnvelope";
import { Order_transaction_captureCreateOrConnectWithoutState_machine_stateInput } from "../inputs/Order_transaction_captureCreateOrConnectWithoutState_machine_stateInput";
import { Order_transaction_captureCreateWithoutState_machine_stateInput } from "../inputs/Order_transaction_captureCreateWithoutState_machine_stateInput";
import { Order_transaction_captureWhereUniqueInput } from "../inputs/Order_transaction_captureWhereUniqueInput";

@TypeGraphQL.InputType("Order_transaction_captureCreateNestedManyWithoutState_machine_stateInput", {})
export class Order_transaction_captureCreateNestedManyWithoutState_machine_stateInput {
  @TypeGraphQL.Field(_type => [Order_transaction_captureCreateWithoutState_machine_stateInput], {
    nullable: true
  })
  create?: Order_transaction_captureCreateWithoutState_machine_stateInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_captureCreateOrConnectWithoutState_machine_stateInput], {
    nullable: true
  })
  connectOrCreate?: Order_transaction_captureCreateOrConnectWithoutState_machine_stateInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_transaction_captureCreateManyState_machine_stateInputEnvelope, {
    nullable: true
  })
  createMany?: Order_transaction_captureCreateManyState_machine_stateInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_captureWhereUniqueInput], {
    nullable: true
  })
  connect?: Order_transaction_captureWhereUniqueInput[] | undefined;
}
