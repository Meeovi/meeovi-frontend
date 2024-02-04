import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutOther_languageInput } from "../inputs/LanguageCreateOrConnectWithoutOther_languageInput";
import { LanguageCreateWithoutOther_languageInput } from "../inputs/LanguageCreateWithoutOther_languageInput";
import { LanguageUpdateToOneWithWhereWithoutOther_languageInput } from "../inputs/LanguageUpdateToOneWithWhereWithoutOther_languageInput";
import { LanguageUpsertWithoutOther_languageInput } from "../inputs/LanguageUpsertWithoutOther_languageInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageUpdateOneWithoutOther_languageNestedInput", {})
export class LanguageUpdateOneWithoutOther_languageNestedInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutOther_languageInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutOther_languageInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutOther_languageInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutOther_languageInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpsertWithoutOther_languageInput, {
    nullable: true
  })
  upsert?: LanguageUpsertWithoutOther_languageInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  disconnect?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  delete?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateToOneWithWhereWithoutOther_languageInput, {
    nullable: true
  })
  update?: LanguageUpdateToOneWithWhereWithoutOther_languageInput | undefined;
}
