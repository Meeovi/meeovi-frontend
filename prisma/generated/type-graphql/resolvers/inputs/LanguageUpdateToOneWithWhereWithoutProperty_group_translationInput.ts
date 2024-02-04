import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageUpdateWithoutProperty_group_translationInput } from "../inputs/LanguageUpdateWithoutProperty_group_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpdateToOneWithWhereWithoutProperty_group_translationInput", {})
export class LanguageUpdateToOneWithWhereWithoutProperty_group_translationInput {
  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateWithoutProperty_group_translationInput, {
    nullable: false
  })
  data!: LanguageUpdateWithoutProperty_group_translationInput;
}
