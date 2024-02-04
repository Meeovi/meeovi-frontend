import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateManyCurrencyInputEnvelope } from "../inputs/OrderCreateManyCurrencyInputEnvelope";
import { OrderCreateOrConnectWithoutCurrencyInput } from "../inputs/OrderCreateOrConnectWithoutCurrencyInput";
import { OrderCreateWithoutCurrencyInput } from "../inputs/OrderCreateWithoutCurrencyInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderCreateNestedManyWithoutCurrencyInput", {})
export class OrderCreateNestedManyWithoutCurrencyInput {
  @TypeGraphQL.Field(_type => [OrderCreateWithoutCurrencyInput], {
    nullable: true
  })
  create?: OrderCreateWithoutCurrencyInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderCreateOrConnectWithoutCurrencyInput], {
    nullable: true
  })
  connectOrCreate?: OrderCreateOrConnectWithoutCurrencyInput[] | undefined;

  @TypeGraphQL.Field(_type => OrderCreateManyCurrencyInputEnvelope, {
    nullable: true
  })
  createMany?: OrderCreateManyCurrencyInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OrderWhereUniqueInput], {
    nullable: true
  })
  connect?: OrderWhereUniqueInput[] | undefined;
}
