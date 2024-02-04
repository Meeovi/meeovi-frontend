import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerUpdateOneRequiredWithoutCustomer_tagNestedInput } from "../inputs/CustomerUpdateOneRequiredWithoutCustomer_tagNestedInput";

@TypeGraphQL.InputType("Customer_tagUpdateWithoutTagInput", {})
export class Customer_tagUpdateWithoutTagInput {
  @TypeGraphQL.Field(_type => CustomerUpdateOneRequiredWithoutCustomer_tagNestedInput, {
    nullable: true
  })
  customer?: CustomerUpdateOneRequiredWithoutCustomer_tagNestedInput | undefined;
}
