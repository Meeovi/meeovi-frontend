import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartCreateWithoutCustomerInput } from "../inputs/CartCreateWithoutCustomerInput";
import { CartWhereUniqueInput } from "../inputs/CartWhereUniqueInput";

@TypeGraphQL.InputType("CartCreateOrConnectWithoutCustomerInput", {})
export class CartCreateOrConnectWithoutCustomerInput {
  @TypeGraphQL.Field(_type => CartWhereUniqueInput, {
    nullable: false
  })
  where!: CartWhereUniqueInput;

  @TypeGraphQL.Field(_type => CartCreateWithoutCustomerInput, {
    nullable: false
  })
  create!: CartCreateWithoutCustomerInput;
}
