import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_wishlistUpdateWithoutCustomerInput } from "../inputs/Customer_wishlistUpdateWithoutCustomerInput";
import { Customer_wishlistWhereUniqueInput } from "../inputs/Customer_wishlistWhereUniqueInput";

@TypeGraphQL.InputType("Customer_wishlistUpdateWithWhereUniqueWithoutCustomerInput", {})
export class Customer_wishlistUpdateWithWhereUniqueWithoutCustomerInput {
  @TypeGraphQL.Field(_type => Customer_wishlistWhereUniqueInput, {
    nullable: false
  })
  where!: Customer_wishlistWhereUniqueInput;

  @TypeGraphQL.Field(_type => Customer_wishlistUpdateWithoutCustomerInput, {
    nullable: false
  })
  data!: Customer_wishlistUpdateWithoutCustomerInput;
}
