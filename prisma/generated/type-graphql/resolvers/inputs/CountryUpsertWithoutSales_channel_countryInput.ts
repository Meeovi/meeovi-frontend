import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountryCreateWithoutSales_channel_countryInput } from "../inputs/CountryCreateWithoutSales_channel_countryInput";
import { CountryUpdateWithoutSales_channel_countryInput } from "../inputs/CountryUpdateWithoutSales_channel_countryInput";
import { CountryWhereInput } from "../inputs/CountryWhereInput";

@TypeGraphQL.InputType("CountryUpsertWithoutSales_channel_countryInput", {})
export class CountryUpsertWithoutSales_channel_countryInput {
  @TypeGraphQL.Field(_type => CountryUpdateWithoutSales_channel_countryInput, {
    nullable: false
  })
  update!: CountryUpdateWithoutSales_channel_countryInput;

  @TypeGraphQL.Field(_type => CountryCreateWithoutSales_channel_countryInput, {
    nullable: false
  })
  create!: CountryCreateWithoutSales_channel_countryInput;

  @TypeGraphQL.Field(_type => CountryWhereInput, {
    nullable: true
  })
  where?: CountryWhereInput | undefined;
}
