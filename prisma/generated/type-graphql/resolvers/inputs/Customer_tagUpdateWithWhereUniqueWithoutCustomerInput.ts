import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_tagUpdateWithoutCustomerInput } from "../inputs/Customer_tagUpdateWithoutCustomerInput";
import { Customer_tagWhereUniqueInput } from "../inputs/Customer_tagWhereUniqueInput";

@TypeGraphQL.InputType("Customer_tagUpdateWithWhereUniqueWithoutCustomerInput", {})
export class Customer_tagUpdateWithWhereUniqueWithoutCustomerInput {
  @TypeGraphQL.Field(_type => Customer_tagWhereUniqueInput, {
    nullable: false
  })
  where!: Customer_tagWhereUniqueInput;

  @TypeGraphQL.Field(_type => Customer_tagUpdateWithoutCustomerInput, {
    nullable: false
  })
  data!: Customer_tagUpdateWithoutCustomerInput;
}
