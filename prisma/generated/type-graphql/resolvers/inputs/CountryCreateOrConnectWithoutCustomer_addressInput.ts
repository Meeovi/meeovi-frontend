import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountryCreateWithoutCustomer_addressInput } from "../inputs/CountryCreateWithoutCustomer_addressInput";
import { CountryWhereUniqueInput } from "../inputs/CountryWhereUniqueInput";

@TypeGraphQL.InputType("CountryCreateOrConnectWithoutCustomer_addressInput", {})
export class CountryCreateOrConnectWithoutCustomer_addressInput {
  @TypeGraphQL.Field(_type => CountryWhereUniqueInput, {
    nullable: false
  })
  where!: CountryWhereUniqueInput;

  @TypeGraphQL.Field(_type => CountryCreateWithoutCustomer_addressInput, {
    nullable: false
  })
  create!: CountryCreateWithoutCustomer_addressInput;
}
