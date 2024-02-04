import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateNestedOneWithoutCustomer_tagInput } from "../inputs/TagCreateNestedOneWithoutCustomer_tagInput";

@TypeGraphQL.InputType("Customer_tagCreateWithoutCustomerInput", {})
export class Customer_tagCreateWithoutCustomerInput {
  @TypeGraphQL.Field(_type => TagCreateNestedOneWithoutCustomer_tagInput, {
    nullable: false
  })
  tag!: TagCreateNestedOneWithoutCustomer_tagInput;
}
