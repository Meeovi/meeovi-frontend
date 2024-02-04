import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartCreateWithoutPayment_methodInput } from "../inputs/CartCreateWithoutPayment_methodInput";
import { CartWhereUniqueInput } from "../inputs/CartWhereUniqueInput";

@TypeGraphQL.InputType("CartCreateOrConnectWithoutPayment_methodInput", {})
export class CartCreateOrConnectWithoutPayment_methodInput {
  @TypeGraphQL.Field(_type => CartWhereUniqueInput, {
    nullable: false
  })
  where!: CartWhereUniqueInput;

  @TypeGraphQL.Field(_type => CartCreateWithoutPayment_methodInput, {
    nullable: false
  })
  create!: CartCreateWithoutPayment_methodInput;
}
