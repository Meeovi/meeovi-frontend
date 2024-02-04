import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartCreateWithoutCountryInput } from "../inputs/CartCreateWithoutCountryInput";
import { CartUpdateWithoutCountryInput } from "../inputs/CartUpdateWithoutCountryInput";
import { CartWhereUniqueInput } from "../inputs/CartWhereUniqueInput";

@TypeGraphQL.InputType("CartUpsertWithWhereUniqueWithoutCountryInput", {})
export class CartUpsertWithWhereUniqueWithoutCountryInput {
  @TypeGraphQL.Field(_type => CartWhereUniqueInput, {
    nullable: false
  })
  where!: CartWhereUniqueInput;

  @TypeGraphQL.Field(_type => CartUpdateWithoutCountryInput, {
    nullable: false
  })
  update!: CartUpdateWithoutCountryInput;

  @TypeGraphQL.Field(_type => CartCreateWithoutCountryInput, {
    nullable: false
  })
  create!: CartCreateWithoutCountryInput;
}
