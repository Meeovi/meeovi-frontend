import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transactionCreateManyPayment_methodInputEnvelope } from "../inputs/Order_transactionCreateManyPayment_methodInputEnvelope";
import { Order_transactionCreateOrConnectWithoutPayment_methodInput } from "../inputs/Order_transactionCreateOrConnectWithoutPayment_methodInput";
import { Order_transactionCreateWithoutPayment_methodInput } from "../inputs/Order_transactionCreateWithoutPayment_methodInput";
import { Order_transactionScalarWhereInput } from "../inputs/Order_transactionScalarWhereInput";
import { Order_transactionUpdateManyWithWhereWithoutPayment_methodInput } from "../inputs/Order_transactionUpdateManyWithWhereWithoutPayment_methodInput";
import { Order_transactionUpdateWithWhereUniqueWithoutPayment_methodInput } from "../inputs/Order_transactionUpdateWithWhereUniqueWithoutPayment_methodInput";
import { Order_transactionUpsertWithWhereUniqueWithoutPayment_methodInput } from "../inputs/Order_transactionUpsertWithWhereUniqueWithoutPayment_methodInput";
import { Order_transactionWhereUniqueInput } from "../inputs/Order_transactionWhereUniqueInput";

@TypeGraphQL.InputType("Order_transactionUpdateManyWithoutPayment_methodNestedInput", {})
export class Order_transactionUpdateManyWithoutPayment_methodNestedInput {
  @TypeGraphQL.Field(_type => [Order_transactionCreateWithoutPayment_methodInput], {
    nullable: true
  })
  create?: Order_transactionCreateWithoutPayment_methodInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transactionCreateOrConnectWithoutPayment_methodInput], {
    nullable: true
  })
  connectOrCreate?: Order_transactionCreateOrConnectWithoutPayment_methodInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transactionUpsertWithWhereUniqueWithoutPayment_methodInput], {
    nullable: true
  })
  upsert?: Order_transactionUpsertWithWhereUniqueWithoutPayment_methodInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_transactionCreateManyPayment_methodInputEnvelope, {
    nullable: true
  })
  createMany?: Order_transactionCreateManyPayment_methodInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [Order_transactionUpdateWithWhereUniqueWithoutPayment_methodInput], {
    nullable: true
  })
  update?: Order_transactionUpdateWithWhereUniqueWithoutPayment_methodInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transactionUpdateManyWithWhereWithoutPayment_methodInput], {
    nullable: true
  })
  updateMany?: Order_transactionUpdateManyWithWhereWithoutPayment_methodInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transactionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Order_transactionScalarWhereInput[] | undefined;
}
