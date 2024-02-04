import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_wishlistScalarWhereInput } from "../inputs/Customer_wishlistScalarWhereInput";
import { Customer_wishlistUpdateManyMutationInput } from "../inputs/Customer_wishlistUpdateManyMutationInput";

@TypeGraphQL.InputType("Customer_wishlistUpdateManyWithWhereWithoutCustomerInput", {})
export class Customer_wishlistUpdateManyWithWhereWithoutCustomerInput {
  @TypeGraphQL.Field(_type => Customer_wishlistScalarWhereInput, {
    nullable: false
  })
  where!: Customer_wishlistScalarWhereInput;

  @TypeGraphQL.Field(_type => Customer_wishlistUpdateManyMutationInput, {
    nullable: false
  })
  data!: Customer_wishlistUpdateManyMutationInput;
}
