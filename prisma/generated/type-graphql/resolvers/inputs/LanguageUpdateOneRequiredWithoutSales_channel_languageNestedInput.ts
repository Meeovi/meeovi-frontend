import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutSales_channel_languageInput } from "../inputs/LanguageCreateOrConnectWithoutSales_channel_languageInput";
import { LanguageCreateWithoutSales_channel_languageInput } from "../inputs/LanguageCreateWithoutSales_channel_languageInput";
import { LanguageUpdateToOneWithWhereWithoutSales_channel_languageInput } from "../inputs/LanguageUpdateToOneWithWhereWithoutSales_channel_languageInput";
import { LanguageUpsertWithoutSales_channel_languageInput } from "../inputs/LanguageUpsertWithoutSales_channel_languageInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageUpdateOneRequiredWithoutSales_channel_languageNestedInput", {})
export class LanguageUpdateOneRequiredWithoutSales_channel_languageNestedInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutSales_channel_languageInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutSales_channel_languageInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutSales_channel_languageInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutSales_channel_languageInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpsertWithoutSales_channel_languageInput, {
    nullable: true
  })
  upsert?: LanguageUpsertWithoutSales_channel_languageInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateToOneWithWhereWithoutSales_channel_languageInput, {
    nullable: true
  })
  update?: LanguageUpdateToOneWithWhereWithoutSales_channel_languageInput | undefined;
}
