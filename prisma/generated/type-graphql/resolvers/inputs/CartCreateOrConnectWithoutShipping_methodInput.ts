import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartCreateWithoutShipping_methodInput } from "../inputs/CartCreateWithoutShipping_methodInput";
import { CartWhereUniqueInput } from "../inputs/CartWhereUniqueInput";

@TypeGraphQL.InputType("CartCreateOrConnectWithoutShipping_methodInput", {})
export class CartCreateOrConnectWithoutShipping_methodInput {
  @TypeGraphQL.Field(_type => CartWhereUniqueInput, {
    nullable: false
  })
  where!: CartWhereUniqueInput;

  @TypeGraphQL.Field(_type => CartCreateWithoutShipping_methodInput, {
    nullable: false
  })
  create!: CartCreateWithoutShipping_methodInput;
}
