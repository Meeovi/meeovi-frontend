import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_addressCreateWithoutCustomerInput } from "../inputs/Customer_addressCreateWithoutCustomerInput";
import { Customer_addressWhereUniqueInput } from "../inputs/Customer_addressWhereUniqueInput";

@TypeGraphQL.InputType("Customer_addressCreateOrConnectWithoutCustomerInput", {})
export class Customer_addressCreateOrConnectWithoutCustomerInput {
  @TypeGraphQL.Field(_type => Customer_addressWhereUniqueInput, {
    nullable: false
  })
  where!: Customer_addressWhereUniqueInput;

  @TypeGraphQL.Field(_type => Customer_addressCreateWithoutCustomerInput, {
    nullable: false
  })
  create!: Customer_addressCreateWithoutCustomerInput;
}
