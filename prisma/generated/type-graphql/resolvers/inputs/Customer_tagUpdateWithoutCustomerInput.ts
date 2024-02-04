import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagUpdateOneRequiredWithoutCustomer_tagNestedInput } from "../inputs/TagUpdateOneRequiredWithoutCustomer_tagNestedInput";

@TypeGraphQL.InputType("Customer_tagUpdateWithoutCustomerInput", {})
export class Customer_tagUpdateWithoutCustomerInput {
  @TypeGraphQL.Field(_type => TagUpdateOneRequiredWithoutCustomer_tagNestedInput, {
    nullable: true
  })
  tag?: TagUpdateOneRequiredWithoutCustomer_tagNestedInput | undefined;
}
