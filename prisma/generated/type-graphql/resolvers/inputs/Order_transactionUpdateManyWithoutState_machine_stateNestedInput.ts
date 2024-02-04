import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transactionCreateManyState_machine_stateInputEnvelope } from "../inputs/Order_transactionCreateManyState_machine_stateInputEnvelope";
import { Order_transactionCreateOrConnectWithoutState_machine_stateInput } from "../inputs/Order_transactionCreateOrConnectWithoutState_machine_stateInput";
import { Order_transactionCreateWithoutState_machine_stateInput } from "../inputs/Order_transactionCreateWithoutState_machine_stateInput";
import { Order_transactionScalarWhereInput } from "../inputs/Order_transactionScalarWhereInput";
import { Order_transactionUpdateManyWithWhereWithoutState_machine_stateInput } from "../inputs/Order_transactionUpdateManyWithWhereWithoutState_machine_stateInput";
import { Order_transactionUpdateWithWhereUniqueWithoutState_machine_stateInput } from "../inputs/Order_transactionUpdateWithWhereUniqueWithoutState_machine_stateInput";
import { Order_transactionUpsertWithWhereUniqueWithoutState_machine_stateInput } from "../inputs/Order_transactionUpsertWithWhereUniqueWithoutState_machine_stateInput";
import { Order_transactionWhereUniqueInput } from "../inputs/Order_transactionWhereUniqueInput";

@TypeGraphQL.InputType("Order_transactionUpdateManyWithoutState_machine_stateNestedInput", {})
export class Order_transactionUpdateManyWithoutState_machine_stateNestedInput {
  @TypeGraphQL.Field(_type => [Order_transactionCreateWithoutState_machine_stateInput], {
    nullable: true
  })
  create?: Order_transactionCreateWithoutState_machine_stateInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transactionCreateOrConnectWithoutState_machine_stateInput], {
    nullable: true
  })
  connectOrCreate?: Order_transactionCreateOrConnectWithoutState_machine_stateInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transactionUpsertWithWhereUniqueWithoutState_machine_stateInput], {
    nullable: true
  })
  upsert?: Order_transactionUpsertWithWhereUniqueWithoutState_machine_stateInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_transactionCreateManyState_machine_stateInputEnvelope, {
    nullable: true
  })
  createMany?: Order_transactionCreateManyState_machine_stateInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Order_transactionWhereUniqueInput], {
    nullable: true
  })
  set?: Order_transactionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transactionWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Order_transactionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transactionWhereUniqueInput], {
    nullable: true
  })
  delete?: Order_transactionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transactionWhereUniqueInput], {
    nullable: true
  })
  connect?: Order_transactionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transactionUpdateWithWhereUniqueWithoutState_machine_stateInput], {
    nullable: true
  })
  update?: Order_transactionUpdateWithWhereUniqueWithoutState_machine_stateInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transactionUpdateManyWithWhereWithoutState_machine_stateInput], {
    nullable: true
  })
  updateMany?: Order_transactionUpdateManyWithWhereWithoutState_machine_stateInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transactionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Order_transactionScalarWhereInput[] | undefined;
}
