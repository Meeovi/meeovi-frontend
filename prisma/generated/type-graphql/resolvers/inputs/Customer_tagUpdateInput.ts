import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerUpdateOneRequiredWithoutCustomer_tagNestedInput } from "../inputs/CustomerUpdateOneRequiredWithoutCustomer_tagNestedInput";
import { TagUpdateOneRequiredWithoutCustomer_tagNestedInput } from "../inputs/TagUpdateOneRequiredWithoutCustomer_tagNestedInput";

@TypeGraphQL.InputType("Customer_tagUpdateInput", {})
export class Customer_tagUpdateInput {
  @TypeGraphQL.Field(_type => CustomerUpdateOneRequiredWithoutCustomer_tagNestedInput, {
    nullable: true
  })
  customer?: CustomerUpdateOneRequiredWithoutCustomer_tagNestedInput | undefined;

  @TypeGraphQL.Field(_type => TagUpdateOneRequiredWithoutCustomer_tagNestedInput, {
    nullable: true
  })
  tag?: TagUpdateOneRequiredWithoutCustomer_tagNestedInput | undefined;
}
