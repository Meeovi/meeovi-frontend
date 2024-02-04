import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartCreateWithoutShipping_methodInput } from "../inputs/CartCreateWithoutShipping_methodInput";
import { CartUpdateWithoutShipping_methodInput } from "../inputs/CartUpdateWithoutShipping_methodInput";
import { CartWhereUniqueInput } from "../inputs/CartWhereUniqueInput";

@TypeGraphQL.InputType("CartUpsertWithWhereUniqueWithoutShipping_methodInput", {})
export class CartUpsertWithWhereUniqueWithoutShipping_methodInput {
  @TypeGraphQL.Field(_type => CartWhereUniqueInput, {
    nullable: false
  })
  where!: CartWhereUniqueInput;

  @TypeGraphQL.Field(_type => CartUpdateWithoutShipping_methodInput, {
    nullable: false
  })
  update!: CartUpdateWithoutShipping_methodInput;

  @TypeGraphQL.Field(_type => CartCreateWithoutShipping_methodInput, {
    nullable: false
  })
  create!: CartCreateWithoutShipping_methodInput;
}
