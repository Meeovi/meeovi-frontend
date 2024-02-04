import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateWithoutCurrencyInput } from "../inputs/OrderCreateWithoutCurrencyInput";
import { OrderUpdateWithoutCurrencyInput } from "../inputs/OrderUpdateWithoutCurrencyInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderUpsertWithWhereUniqueWithoutCurrencyInput", {})
export class OrderUpsertWithWhereUniqueWithoutCurrencyInput {
  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: false
  })
  where!: OrderWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrderUpdateWithoutCurrencyInput, {
    nullable: false
  })
  update!: OrderUpdateWithoutCurrencyInput;

  @TypeGraphQL.Field(_type => OrderCreateWithoutCurrencyInput, {
    nullable: false
  })
  create!: OrderCreateWithoutCurrencyInput;
}
