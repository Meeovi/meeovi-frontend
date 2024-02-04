import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartCreateWithoutCountryInput } from "../inputs/CartCreateWithoutCountryInput";
import { CartWhereUniqueInput } from "../inputs/CartWhereUniqueInput";

@TypeGraphQL.InputType("CartCreateOrConnectWithoutCountryInput", {})
export class CartCreateOrConnectWithoutCountryInput {
  @TypeGraphQL.Field(_type => CartWhereUniqueInput, {
    nullable: false
  })
  where!: CartWhereUniqueInput;

  @TypeGraphQL.Field(_type => CartCreateWithoutCountryInput, {
    nullable: false
  })
  create!: CartCreateWithoutCountryInput;
}
