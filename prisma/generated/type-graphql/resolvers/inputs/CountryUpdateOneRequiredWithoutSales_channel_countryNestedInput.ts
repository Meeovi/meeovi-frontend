import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountryCreateOrConnectWithoutSales_channel_countryInput } from "../inputs/CountryCreateOrConnectWithoutSales_channel_countryInput";
import { CountryCreateWithoutSales_channel_countryInput } from "../inputs/CountryCreateWithoutSales_channel_countryInput";
import { CountryUpdateToOneWithWhereWithoutSales_channel_countryInput } from "../inputs/CountryUpdateToOneWithWhereWithoutSales_channel_countryInput";
import { CountryUpsertWithoutSales_channel_countryInput } from "../inputs/CountryUpsertWithoutSales_channel_countryInput";
import { CountryWhereUniqueInput } from "../inputs/CountryWhereUniqueInput";

@TypeGraphQL.InputType("CountryUpdateOneRequiredWithoutSales_channel_countryNestedInput", {})
export class CountryUpdateOneRequiredWithoutSales_channel_countryNestedInput {
  @TypeGraphQL.Field(_type => CountryCreateWithoutSales_channel_countryInput, {
    nullable: true
  })
  create?: CountryCreateWithoutSales_channel_countryInput | undefined;

  @TypeGraphQL.Field(_type => CountryCreateOrConnectWithoutSales_channel_countryInput, {
    nullable: true
  })
  connectOrCreate?: CountryCreateOrConnectWithoutSales_channel_countryInput | undefined;

  @TypeGraphQL.Field(_type => CountryUpsertWithoutSales_channel_countryInput, {
    nullable: true
  })
  upsert?: CountryUpsertWithoutSales_channel_countryInput | undefined;

  @TypeGraphQL.Field(_type => CountryWhereUniqueInput, {
    nullable: true
  })
  connect?: CountryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CountryUpdateToOneWithWhereWithoutSales_channel_countryInput, {
    nullable: true
  })
  update?: CountryUpdateToOneWithWhereWithoutSales_channel_countryInput | undefined;
}
