import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutCountry_translationInput } from "../inputs/LanguageCreateOrConnectWithoutCountry_translationInput";
import { LanguageCreateWithoutCountry_translationInput } from "../inputs/LanguageCreateWithoutCountry_translationInput";
import { LanguageUpdateToOneWithWhereWithoutCountry_translationInput } from "../inputs/LanguageUpdateToOneWithWhereWithoutCountry_translationInput";
import { LanguageUpsertWithoutCountry_translationInput } from "../inputs/LanguageUpsertWithoutCountry_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageUpdateOneRequiredWithoutCountry_translationNestedInput", {})
export class LanguageUpdateOneRequiredWithoutCountry_translationNestedInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutCountry_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutCountry_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutCountry_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutCountry_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpsertWithoutCountry_translationInput, {
    nullable: true
  })
  upsert?: LanguageUpsertWithoutCountry_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateToOneWithWhereWithoutCountry_translationInput, {
    nullable: true
  })
  update?: LanguageUpdateToOneWithWhereWithoutCountry_translationInput | undefined;
}
