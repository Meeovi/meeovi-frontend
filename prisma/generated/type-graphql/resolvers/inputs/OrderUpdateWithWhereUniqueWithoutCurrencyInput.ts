import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderUpdateWithoutCurrencyInput } from "../inputs/OrderUpdateWithoutCurrencyInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderUpdateWithWhereUniqueWithoutCurrencyInput", {})
export class OrderUpdateWithWhereUniqueWithoutCurrencyInput {
  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: false
  })
  where!: OrderWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrderUpdateWithoutCurrencyInput, {
    nullable: false
  })
  data!: OrderUpdateWithoutCurrencyInput;
}
