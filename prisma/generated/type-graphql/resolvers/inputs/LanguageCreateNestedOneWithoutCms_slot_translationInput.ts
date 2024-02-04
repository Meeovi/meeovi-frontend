import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutCms_slot_translationInput } from "../inputs/LanguageCreateOrConnectWithoutCms_slot_translationInput";
import { LanguageCreateWithoutCms_slot_translationInput } from "../inputs/LanguageCreateWithoutCms_slot_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateNestedOneWithoutCms_slot_translationInput", {})
export class LanguageCreateNestedOneWithoutCms_slot_translationInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutCms_slot_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutCms_slot_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutCms_slot_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutCms_slot_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;
}
