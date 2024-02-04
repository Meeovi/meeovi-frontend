import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_addressUpdateWithoutCustomerInput } from "../inputs/Customer_addressUpdateWithoutCustomerInput";
import { Customer_addressWhereUniqueInput } from "../inputs/Customer_addressWhereUniqueInput";

@TypeGraphQL.InputType("Customer_addressUpdateWithWhereUniqueWithoutCustomerInput", {})
export class Customer_addressUpdateWithWhereUniqueWithoutCustomerInput {
  @TypeGraphQL.Field(_type => Customer_addressWhereUniqueInput, {
    nullable: false
  })
  where!: Customer_addressWhereUniqueInput;

  @TypeGraphQL.Field(_type => Customer_addressUpdateWithoutCustomerInput, {
    nullable: false
  })
  data!: Customer_addressUpdateWithoutCustomerInput;
}
