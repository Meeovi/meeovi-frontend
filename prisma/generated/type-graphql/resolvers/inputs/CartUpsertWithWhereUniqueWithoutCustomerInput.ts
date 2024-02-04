import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartCreateWithoutCustomerInput } from "../inputs/CartCreateWithoutCustomerInput";
import { CartUpdateWithoutCustomerInput } from "../inputs/CartUpdateWithoutCustomerInput";
import { CartWhereUniqueInput } from "../inputs/CartWhereUniqueInput";

@TypeGraphQL.InputType("CartUpsertWithWhereUniqueWithoutCustomerInput", {})
export class CartUpsertWithWhereUniqueWithoutCustomerInput {
  @TypeGraphQL.Field(_type => CartWhereUniqueInput, {
    nullable: false
  })
  where!: CartWhereUniqueInput;

  @TypeGraphQL.Field(_type => CartUpdateWithoutCustomerInput, {
    nullable: false
  })
  update!: CartUpdateWithoutCustomerInput;

  @TypeGraphQL.Field(_type => CartCreateWithoutCustomerInput, {
    nullable: false
  })
  create!: CartCreateWithoutCustomerInput;
}
