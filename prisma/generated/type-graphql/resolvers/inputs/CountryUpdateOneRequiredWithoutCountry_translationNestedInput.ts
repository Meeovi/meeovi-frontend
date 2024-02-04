import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountryCreateOrConnectWithoutCountry_translationInput } from "../inputs/CountryCreateOrConnectWithoutCountry_translationInput";
import { CountryCreateWithoutCountry_translationInput } from "../inputs/CountryCreateWithoutCountry_translationInput";
import { CountryUpdateToOneWithWhereWithoutCountry_translationInput } from "../inputs/CountryUpdateToOneWithWhereWithoutCountry_translationInput";
import { CountryUpsertWithoutCountry_translationInput } from "../inputs/CountryUpsertWithoutCountry_translationInput";
import { CountryWhereUniqueInput } from "../inputs/CountryWhereUniqueInput";

@TypeGraphQL.InputType("CountryUpdateOneRequiredWithoutCountry_translationNestedInput", {})
export class CountryUpdateOneRequiredWithoutCountry_translationNestedInput {
  @TypeGraphQL.Field(_type => CountryCreateWithoutCountry_translationInput, {
    nullable: true
  })
  create?: CountryCreateWithoutCountry_translationInput | undefined;

  @TypeGraphQL.Field(_type => CountryCreateOrConnectWithoutCountry_translationInput, {
    nullable: true
  })
  connectOrCreate?: CountryCreateOrConnectWithoutCountry_translationInput | undefined;

  @TypeGraphQL.Field(_type => CountryUpsertWithoutCountry_translationInput, {
    nullable: true
  })
  upsert?: CountryUpsertWithoutCountry_translationInput | undefined;

  @TypeGraphQL.Field(_type => CountryWhereUniqueInput, {
    nullable: true
  })
  connect?: CountryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CountryUpdateToOneWithWhereWithoutCountry_translationInput, {
    nullable: true
  })
  update?: CountryUpdateToOneWithWhereWithoutCountry_translationInput | undefined;
}
