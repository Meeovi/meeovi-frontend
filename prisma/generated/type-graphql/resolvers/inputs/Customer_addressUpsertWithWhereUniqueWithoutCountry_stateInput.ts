import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_addressCreateWithoutCountry_stateInput } from "../inputs/Customer_addressCreateWithoutCountry_stateInput";
import { Customer_addressUpdateWithoutCountry_stateInput } from "../inputs/Customer_addressUpdateWithoutCountry_stateInput";
import { Customer_addressWhereUniqueInput } from "../inputs/Customer_addressWhereUniqueInput";

@TypeGraphQL.InputType("Customer_addressUpsertWithWhereUniqueWithoutCountry_stateInput", {})
export class Customer_addressUpsertWithWhereUniqueWithoutCountry_stateInput {
  @TypeGraphQL.Field(_type => Customer_addressWhereUniqueInput, {
    nullable: false
  })
  where!: Customer_addressWhereUniqueInput;

  @TypeGraphQL.Field(_type => Customer_addressUpdateWithoutCountry_stateInput, {
    nullable: false
  })
  update!: Customer_addressUpdateWithoutCountry_stateInput;

  @TypeGraphQL.Field(_type => Customer_addressCreateWithoutCountry_stateInput, {
    nullable: false
  })
  create!: Customer_addressCreateWithoutCountry_stateInput;
}
