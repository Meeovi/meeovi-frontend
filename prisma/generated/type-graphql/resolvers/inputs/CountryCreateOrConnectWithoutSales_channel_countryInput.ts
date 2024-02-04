import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountryCreateWithoutSales_channel_countryInput } from "../inputs/CountryCreateWithoutSales_channel_countryInput";
import { CountryWhereUniqueInput } from "../inputs/CountryWhereUniqueInput";

@TypeGraphQL.InputType("CountryCreateOrConnectWithoutSales_channel_countryInput", {})
export class CountryCreateOrConnectWithoutSales_channel_countryInput {
  @TypeGraphQL.Field(_type => CountryWhereUniqueInput, {
    nullable: false
  })
  where!: CountryWhereUniqueInput;

  @TypeGraphQL.Field(_type => CountryCreateWithoutSales_channel_countryInput, {
    nullable: false
  })
  create!: CountryCreateWithoutSales_channel_countryInput;
}
