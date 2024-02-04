import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateNestedOneWithoutCustomer_tagInput } from "../inputs/CustomerCreateNestedOneWithoutCustomer_tagInput";
import { TagCreateNestedOneWithoutCustomer_tagInput } from "../inputs/TagCreateNestedOneWithoutCustomer_tagInput";

@TypeGraphQL.InputType("Customer_tagCreateInput", {})
export class Customer_tagCreateInput {
  @TypeGraphQL.Field(_type => CustomerCreateNestedOneWithoutCustomer_tagInput, {
    nullable: false
  })
  customer!: CustomerCreateNestedOneWithoutCustomer_tagInput;

  @TypeGraphQL.Field(_type => TagCreateNestedOneWithoutCustomer_tagInput, {
    nullable: false
  })
  tag!: TagCreateNestedOneWithoutCustomer_tagInput;
}
