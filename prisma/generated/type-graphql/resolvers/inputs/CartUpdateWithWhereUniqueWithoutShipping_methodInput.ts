import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartUpdateWithoutShipping_methodInput } from "../inputs/CartUpdateWithoutShipping_methodInput";
import { CartWhereUniqueInput } from "../inputs/CartWhereUniqueInput";

@TypeGraphQL.InputType("CartUpdateWithWhereUniqueWithoutShipping_methodInput", {})
export class CartUpdateWithWhereUniqueWithoutShipping_methodInput {
  @TypeGraphQL.Field(_type => CartWhereUniqueInput, {
    nullable: false
  })
  where!: CartWhereUniqueInput;

  @TypeGraphQL.Field(_type => CartUpdateWithoutShipping_methodInput, {
    nullable: false
  })
  data!: CartUpdateWithoutShipping_methodInput;
}
