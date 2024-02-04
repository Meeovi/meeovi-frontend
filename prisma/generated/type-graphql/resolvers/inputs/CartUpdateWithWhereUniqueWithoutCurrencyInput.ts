import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartUpdateWithoutCurrencyInput } from "../inputs/CartUpdateWithoutCurrencyInput";
import { CartWhereUniqueInput } from "../inputs/CartWhereUniqueInput";

@TypeGraphQL.InputType("CartUpdateWithWhereUniqueWithoutCurrencyInput", {})
export class CartUpdateWithWhereUniqueWithoutCurrencyInput {
  @TypeGraphQL.Field(_type => CartWhereUniqueInput, {
    nullable: false
  })
  where!: CartWhereUniqueInput;

  @TypeGraphQL.Field(_type => CartUpdateWithoutCurrencyInput, {
    nullable: false
  })
  data!: CartUpdateWithoutCurrencyInput;
}
