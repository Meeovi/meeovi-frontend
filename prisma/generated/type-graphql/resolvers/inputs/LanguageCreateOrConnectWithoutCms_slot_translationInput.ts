import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutCms_slot_translationInput } from "../inputs/LanguageCreateWithoutCms_slot_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateOrConnectWithoutCms_slot_translationInput", {})
export class LanguageCreateOrConnectWithoutCms_slot_translationInput {
  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: false
  })
  where!: LanguageWhereUniqueInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutCms_slot_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutCms_slot_translationInput;
}
