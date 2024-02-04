import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_tagCreateWithoutCustomerInput } from "../inputs/Customer_tagCreateWithoutCustomerInput";
import { Customer_tagUpdateWithoutCustomerInput } from "../inputs/Customer_tagUpdateWithoutCustomerInput";
import { Customer_tagWhereUniqueInput } from "../inputs/Customer_tagWhereUniqueInput";

@TypeGraphQL.InputType("Customer_tagUpsertWithWhereUniqueWithoutCustomerInput", {})
export class Customer_tagUpsertWithWhereUniqueWithoutCustomerInput {
  @TypeGraphQL.Field(_type => Customer_tagWhereUniqueInput, {
    nullable: false
  })
  where!: Customer_tagWhereUniqueInput;

  @TypeGraphQL.Field(_type => Customer_tagUpdateWithoutCustomerInput, {
    nullable: false
  })
  update!: Customer_tagUpdateWithoutCustomerInput;

  @TypeGraphQL.Field(_type => Customer_tagCreateWithoutCustomerInput, {
    nullable: false
  })
  create!: Customer_tagCreateWithoutCustomerInput;
}
