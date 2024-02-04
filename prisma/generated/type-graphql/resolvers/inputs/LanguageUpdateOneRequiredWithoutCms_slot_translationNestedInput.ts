import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutCms_slot_translationInput } from "../inputs/LanguageCreateOrConnectWithoutCms_slot_translationInput";
import { LanguageCreateWithoutCms_slot_translationInput } from "../inputs/LanguageCreateWithoutCms_slot_translationInput";
import { LanguageUpdateToOneWithWhereWithoutCms_slot_translationInput } from "../inputs/LanguageUpdateToOneWithWhereWithoutCms_slot_translationInput";
import { LanguageUpsertWithoutCms_slot_translationInput } from "../inputs/LanguageUpsertWithoutCms_slot_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageUpdateOneRequiredWithoutCms_slot_translationNestedInput", {})
export class LanguageUpdateOneRequiredWithoutCms_slot_translationNestedInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutCms_slot_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutCms_slot_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutCms_slot_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutCms_slot_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpsertWithoutCms_slot_translationInput, {
    nullable: true
  })
  upsert?: LanguageUpsertWithoutCms_slot_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateToOneWithWhereWithoutCms_slot_translationInput, {
    nullable: true
  })
  update?: LanguageUpdateToOneWithWhereWithoutCms_slot_translationInput | undefined;
}
