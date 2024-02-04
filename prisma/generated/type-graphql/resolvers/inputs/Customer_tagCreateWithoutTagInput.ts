import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateNestedOneWithoutCustomer_tagInput } from "../inputs/CustomerCreateNestedOneWithoutCustomer_tagInput";

@TypeGraphQL.InputType("Customer_tagCreateWithoutTagInput", {})
export class Customer_tagCreateWithoutTagInput {
  @TypeGraphQL.Field(_type => CustomerCreateNestedOneWithoutCustomer_tagInput, {
    nullable: false
  })
  customer!: CustomerCreateNestedOneWithoutCustomer_tagInput;
}
