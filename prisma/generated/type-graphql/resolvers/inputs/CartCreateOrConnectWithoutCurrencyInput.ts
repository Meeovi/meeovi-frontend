import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartCreateWithoutCurrencyInput } from "../inputs/CartCreateWithoutCurrencyInput";
import { CartWhereUniqueInput } from "../inputs/CartWhereUniqueInput";

@TypeGraphQL.InputType("CartCreateOrConnectWithoutCurrencyInput", {})
export class CartCreateOrConnectWithoutCurrencyInput {
  @TypeGraphQL.Field(_type => CartWhereUniqueInput, {
    nullable: false
  })
  where!: CartWhereUniqueInput;

  @TypeGraphQL.Field(_type => CartCreateWithoutCurrencyInput, {
    nullable: false
  })
  create!: CartCreateWithoutCurrencyInput;
}
