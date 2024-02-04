import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_addressUpdateWithoutCountryInput } from "../inputs/Customer_addressUpdateWithoutCountryInput";
import { Customer_addressWhereUniqueInput } from "../inputs/Customer_addressWhereUniqueInput";

@TypeGraphQL.InputType("Customer_addressUpdateWithWhereUniqueWithoutCountryInput", {})
export class Customer_addressUpdateWithWhereUniqueWithoutCountryInput {
  @TypeGraphQL.Field(_type => Customer_addressWhereUniqueInput, {
    nullable: false
  })
  where!: Customer_addressWhereUniqueInput;

  @TypeGraphQL.Field(_type => Customer_addressUpdateWithoutCountryInput, {
    nullable: false
  })
  data!: Customer_addressUpdateWithoutCountryInput;
}
