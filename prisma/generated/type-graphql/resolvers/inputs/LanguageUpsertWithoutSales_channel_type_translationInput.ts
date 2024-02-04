import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutSales_channel_type_translationInput } from "../inputs/LanguageCreateWithoutSales_channel_type_translationInput";
import { LanguageUpdateWithoutSales_channel_type_translationInput } from "../inputs/LanguageUpdateWithoutSales_channel_type_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpsertWithoutSales_channel_type_translationInput", {})
export class LanguageUpsertWithoutSales_channel_type_translationInput {
  @TypeGraphQL.Field(_type => LanguageUpdateWithoutSales_channel_type_translationInput, {
    nullable: false
  })
  update!: LanguageUpdateWithoutSales_channel_type_translationInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutSales_channel_type_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutSales_channel_type_translationInput;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;
}
