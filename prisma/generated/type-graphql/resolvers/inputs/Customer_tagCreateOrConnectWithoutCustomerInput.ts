import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_tagCreateWithoutCustomerInput } from "../inputs/Customer_tagCreateWithoutCustomerInput";
import { Customer_tagWhereUniqueInput } from "../inputs/Customer_tagWhereUniqueInput";

@TypeGraphQL.InputType("Customer_tagCreateOrConnectWithoutCustomerInput", {})
export class Customer_tagCreateOrConnectWithoutCustomerInput {
  @TypeGraphQL.Field(_type => Customer_tagWhereUniqueInput, {
    nullable: false
  })
  where!: Customer_tagWhereUniqueInput;

  @TypeGraphQL.Field(_type => Customer_tagCreateWithoutCustomerInput, {
    nullable: false
  })
  create!: Customer_tagCreateWithoutCustomerInput;
}
