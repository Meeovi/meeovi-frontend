import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_wishlistCreateWithoutCustomerInput } from "../inputs/Customer_wishlistCreateWithoutCustomerInput";
import { Customer_wishlistWhereUniqueInput } from "../inputs/Customer_wishlistWhereUniqueInput";

@TypeGraphQL.InputType("Customer_wishlistCreateOrConnectWithoutCustomerInput", {})
export class Customer_wishlistCreateOrConnectWithoutCustomerInput {
  @TypeGraphQL.Field(_type => Customer_wishlistWhereUniqueInput, {
    nullable: false
  })
  where!: Customer_wishlistWhereUniqueInput;

  @TypeGraphQL.Field(_type => Customer_wishlistCreateWithoutCustomerInput, {
    nullable: false
  })
  create!: Customer_wishlistCreateWithoutCustomerInput;
}
