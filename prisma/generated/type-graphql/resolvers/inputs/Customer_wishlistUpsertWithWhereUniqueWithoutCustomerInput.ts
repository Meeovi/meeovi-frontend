import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_wishlistCreateWithoutCustomerInput } from "../inputs/Customer_wishlistCreateWithoutCustomerInput";
import { Customer_wishlistUpdateWithoutCustomerInput } from "../inputs/Customer_wishlistUpdateWithoutCustomerInput";
import { Customer_wishlistWhereUniqueInput } from "../inputs/Customer_wishlistWhereUniqueInput";

@TypeGraphQL.InputType("Customer_wishlistUpsertWithWhereUniqueWithoutCustomerInput", {})
export class Customer_wishlistUpsertWithWhereUniqueWithoutCustomerInput {
  @TypeGraphQL.Field(_type => Customer_wishlistWhereUniqueInput, {
    nullable: false
  })
  where!: Customer_wishlistWhereUniqueInput;

  @TypeGraphQL.Field(_type => Customer_wishlistUpdateWithoutCustomerInput, {
    nullable: false
  })
  update!: Customer_wishlistUpdateWithoutCustomerInput;

  @TypeGraphQL.Field(_type => Customer_wishlistCreateWithoutCustomerInput, {
    nullable: false
  })
  create!: Customer_wishlistCreateWithoutCustomerInput;
}
