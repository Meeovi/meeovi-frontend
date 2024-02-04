import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountryCreateOrConnectWithoutCurrency_country_roundingInput } from "../inputs/CountryCreateOrConnectWithoutCurrency_country_roundingInput";
import { CountryCreateWithoutCurrency_country_roundingInput } from "../inputs/CountryCreateWithoutCurrency_country_roundingInput";
import { CountryUpdateToOneWithWhereWithoutCurrency_country_roundingInput } from "../inputs/CountryUpdateToOneWithWhereWithoutCurrency_country_roundingInput";
import { CountryUpsertWithoutCurrency_country_roundingInput } from "../inputs/CountryUpsertWithoutCurrency_country_roundingInput";
import { CountryWhereUniqueInput } from "../inputs/CountryWhereUniqueInput";

@TypeGraphQL.InputType("CountryUpdateOneRequiredWithoutCurrency_country_roundingNestedInput", {})
export class CountryUpdateOneRequiredWithoutCurrency_country_roundingNestedInput {
  @TypeGraphQL.Field(_type => CountryCreateWithoutCurrency_country_roundingInput, {
    nullable: true
  })
  create?: CountryCreateWithoutCurrency_country_roundingInput | undefined;

  @TypeGraphQL.Field(_type => CountryCreateOrConnectWithoutCurrency_country_roundingInput, {
    nullable: true
  })
  connectOrCreate?: CountryCreateOrConnectWithoutCurrency_country_roundingInput | undefined;

  @TypeGraphQL.Field(_type => CountryUpsertWithoutCurrency_country_roundingInput, {
    nullable: true
  })
  upsert?: CountryUpsertWithoutCurrency_country_roundingInput | undefined;

  @TypeGraphQL.Field(_type => CountryWhereUniqueInput, {
    nullable: true
  })
  connect?: CountryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CountryUpdateToOneWithWhereWithoutCurrency_country_roundingInput, {
    nullable: true
  })
  update?: CountryUpdateToOneWithWhereWithoutCurrency_country_roundingInput | undefined;
}
