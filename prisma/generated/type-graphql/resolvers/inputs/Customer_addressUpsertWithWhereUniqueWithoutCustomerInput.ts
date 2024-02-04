import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_addressCreateWithoutCustomerInput } from "../inputs/Customer_addressCreateWithoutCustomerInput";
import { Customer_addressUpdateWithoutCustomerInput } from "../inputs/Customer_addressUpdateWithoutCustomerInput";
import { Customer_addressWhereUniqueInput } from "../inputs/Customer_addressWhereUniqueInput";

@TypeGraphQL.InputType("Customer_addressUpsertWithWhereUniqueWithoutCustomerInput", {})
export class Customer_addressUpsertWithWhereUniqueWithoutCustomerInput {
  @TypeGraphQL.Field(_type => Customer_addressWhereUniqueInput, {
    nullable: false
  })
  where!: Customer_addressWhereUniqueInput;

  @TypeGraphQL.Field(_type => Customer_addressUpdateWithoutCustomerInput, {
    nullable: false
  })
  update!: Customer_addressUpdateWithoutCustomerInput;

  @TypeGraphQL.Field(_type => Customer_addressCreateWithoutCustomerInput, {
    nullable: false
  })
  create!: Customer_addressCreateWithoutCustomerInput;
}
