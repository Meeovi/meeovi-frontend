import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutProperty_group_translationInput } from "../inputs/LanguageCreateWithoutProperty_group_translationInput";
import { LanguageUpdateWithoutProperty_group_translationInput } from "../inputs/LanguageUpdateWithoutProperty_group_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpsertWithoutProperty_group_translationInput", {})
export class LanguageUpsertWithoutProperty_group_translationInput {
  @TypeGraphQL.Field(_type => LanguageUpdateWithoutProperty_group_translationInput, {
    nullable: false
  })
  update!: LanguageUpdateWithoutProperty_group_translationInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutProperty_group_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutProperty_group_translationInput;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;
}
