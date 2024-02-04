import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountryCreateWithoutSales_channelInput } from "../inputs/CountryCreateWithoutSales_channelInput";
import { CountryUpdateWithoutSales_channelInput } from "../inputs/CountryUpdateWithoutSales_channelInput";
import { CountryWhereInput } from "../inputs/CountryWhereInput";

@TypeGraphQL.InputType("CountryUpsertWithoutSales_channelInput", {})
export class CountryUpsertWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => CountryUpdateWithoutSales_channelInput, {
    nullable: false
  })
  update!: CountryUpdateWithoutSales_channelInput;

  @TypeGraphQL.Field(_type => CountryCreateWithoutSales_channelInput, {
    nullable: false
  })
  create!: CountryCreateWithoutSales_channelInput;

  @TypeGraphQL.Field(_type => CountryWhereInput, {
    nullable: true
  })
  where?: CountryWhereInput | undefined;
}
