import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_groupCreateWithoutCustomerInput } from "../inputs/Customer_groupCreateWithoutCustomerInput";
import { Customer_groupWhereUniqueInput } from "../inputs/Customer_groupWhereUniqueInput";

@TypeGraphQL.InputType("Customer_groupCreateOrConnectWithoutCustomerInput", {})
export class Customer_groupCreateOrConnectWithoutCustomerInput {
  @TypeGraphQL.Field(_type => Customer_groupWhereUniqueInput, {
    nullable: false
  })
  where!: Customer_groupWhereUniqueInput;

  @TypeGraphQL.Field(_type => Customer_groupCreateWithoutCustomerInput, {
    nullable: false
  })
  create!: Customer_groupCreateWithoutCustomerInput;
}
