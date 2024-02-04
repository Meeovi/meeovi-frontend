import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateWithoutLanguageInput } from "../inputs/OrderCreateWithoutLanguageInput";
import { OrderUpdateWithoutLanguageInput } from "../inputs/OrderUpdateWithoutLanguageInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderUpsertWithWhereUniqueWithoutLanguageInput", {})
export class OrderUpsertWithWhereUniqueWithoutLanguageInput {
  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: false
  })
  where!: OrderWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrderUpdateWithoutLanguageInput, {
    nullable: false
  })
  update!: OrderUpdateWithoutLanguageInput;

  @TypeGraphQL.Field(_type => OrderCreateWithoutLanguageInput, {
    nullable: false
  })
  create!: OrderCreateWithoutLanguageInput;
}
