import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageUpdateWithoutCms_slot_translationInput } from "../inputs/LanguageUpdateWithoutCms_slot_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpdateToOneWithWhereWithoutCms_slot_translationInput", {})
export class LanguageUpdateToOneWithWhereWithoutCms_slot_translationInput {
  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateWithoutCms_slot_translationInput, {
    nullable: false
  })
  data!: LanguageUpdateWithoutCms_slot_translationInput;
}
