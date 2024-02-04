import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_recoveryCreateWithoutCustomerInput } from "../inputs/Customer_recoveryCreateWithoutCustomerInput";
import { Customer_recoveryWhereUniqueInput } from "../inputs/Customer_recoveryWhereUniqueInput";

@TypeGraphQL.InputType("Customer_recoveryCreateOrConnectWithoutCustomerInput", {})
export class Customer_recoveryCreateOrConnectWithoutCustomerInput {
  @TypeGraphQL.Field(_type => Customer_recoveryWhereUniqueInput, {
    nullable: false
  })
  where!: Customer_recoveryWhereUniqueInput;

  @TypeGraphQL.Field(_type => Customer_recoveryCreateWithoutCustomerInput, {
    nullable: false
  })
  create!: Customer_recoveryCreateWithoutCustomerInput;
}
