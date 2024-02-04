import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_addressUpdateWithoutCountry_stateInput } from "../inputs/Customer_addressUpdateWithoutCountry_stateInput";
import { Customer_addressWhereUniqueInput } from "../inputs/Customer_addressWhereUniqueInput";

@TypeGraphQL.InputType("Customer_addressUpdateWithWhereUniqueWithoutCountry_stateInput", {})
export class Customer_addressUpdateWithWhereUniqueWithoutCountry_stateInput {
  @TypeGraphQL.Field(_type => Customer_addressWhereUniqueInput, {
    nullable: false
  })
  where!: Customer_addressWhereUniqueInput;

  @TypeGraphQL.Field(_type => Customer_addressUpdateWithoutCountry_stateInput, {
    nullable: false
  })
  data!: Customer_addressUpdateWithoutCountry_stateInput;
}
