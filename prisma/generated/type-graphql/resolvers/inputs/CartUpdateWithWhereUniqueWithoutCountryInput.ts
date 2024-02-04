import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartUpdateWithoutCountryInput } from "../inputs/CartUpdateWithoutCountryInput";
import { CartWhereUniqueInput } from "../inputs/CartWhereUniqueInput";

@TypeGraphQL.InputType("CartUpdateWithWhereUniqueWithoutCountryInput", {})
export class CartUpdateWithWhereUniqueWithoutCountryInput {
  @TypeGraphQL.Field(_type => CartWhereUniqueInput, {
    nullable: false
  })
  where!: CartWhereUniqueInput;

  @TypeGraphQL.Field(_type => CartUpdateWithoutCountryInput, {
    nullable: false
  })
  data!: CartUpdateWithoutCountryInput;
}
