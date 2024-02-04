import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateManyCurrencyInputEnvelope } from "../inputs/OrderCreateManyCurrencyInputEnvelope";
import { OrderCreateOrConnectWithoutCurrencyInput } from "../inputs/OrderCreateOrConnectWithoutCurrencyInput";
import { OrderCreateWithoutCurrencyInput } from "../inputs/OrderCreateWithoutCurrencyInput";
import { OrderScalarWhereInput } from "../inputs/OrderScalarWhereInput";
import { OrderUpdateManyWithWhereWithoutCurrencyInput } from "../inputs/OrderUpdateManyWithWhereWithoutCurrencyInput";
import { OrderUpdateWithWhereUniqueWithoutCurrencyInput } from "../inputs/OrderUpdateWithWhereUniqueWithoutCurrencyInput";
import { OrderUpsertWithWhereUniqueWithoutCurrencyInput } from "../inputs/OrderUpsertWithWhereUniqueWithoutCurrencyInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderUpdateManyWithoutCurrencyNestedInput", {})
export class OrderUpdateManyWithoutCurrencyNestedInput {
  @TypeGraphQL.Field(_type => [OrderCreateWithoutCurrencyInput], {
    nullable: true
  })
  create?: OrderCreateWithoutCurrencyInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderCreateOrConnectWithoutCurrencyInput], {
    nullable: true
  })
  connectOrCreate?: OrderCreateOrConnectWithoutCurrencyInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderUpsertWithWhereUniqueWithoutCurrencyInput], {
    nullable: true
  })
  upsert?: OrderUpsertWithWhereUniqueWithoutCurrencyInput[] | undefined;

  @TypeGraphQL.Field(_type => OrderCreateManyCurrencyInputEnvelope, {
    nullable: true
  })
  createMany?: OrderCreateManyCurrencyInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OrderWhereUniqueInput], {
    nullable: true
  })
  set?: OrderWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderWhereUniqueInput], {
    nullable: true
  })
  disconnect?: OrderWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderWhereUniqueInput], {
    nullable: true
  })
  delete?: OrderWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderWhereUniqueInput], {
    nullable: true
  })
  connect?: OrderWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderUpdateWithWhereUniqueWithoutCurrencyInput], {
    nullable: true
  })
  update?: OrderUpdateWithWhereUniqueWithoutCurrencyInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderUpdateManyWithWhereWithoutCurrencyInput], {
    nullable: true
  })
  updateMany?: OrderUpdateManyWithWhereWithoutCurrencyInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderScalarWhereInput], {
    nullable: true
  })
  deleteMany?: OrderScalarWhereInput[] | undefined;
}
