import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_slotCreateOrConnectWithoutCms_slot_translationInput } from "../inputs/Cms_slotCreateOrConnectWithoutCms_slot_translationInput";
import { Cms_slotCreateWithoutCms_slot_translationInput } from "../inputs/Cms_slotCreateWithoutCms_slot_translationInput";
import { Cms_slotUpdateToOneWithWhereWithoutCms_slot_translationInput } from "../inputs/Cms_slotUpdateToOneWithWhereWithoutCms_slot_translationInput";
import { Cms_slotUpsertWithoutCms_slot_translationInput } from "../inputs/Cms_slotUpsertWithoutCms_slot_translationInput";
import { Cms_slotWhereUniqueInput } from "../inputs/Cms_slotWhereUniqueInput";

@TypeGraphQL.InputType("Cms_slotUpdateOneRequiredWithoutCms_slot_translationNestedInput", {})
export class Cms_slotUpdateOneRequiredWithoutCms_slot_translationNestedInput {
  @TypeGraphQL.Field(_type => Cms_slotCreateWithoutCms_slot_translationInput, {
    nullable: true
  })
  create?: Cms_slotCreateWithoutCms_slot_translationInput | undefined;

  @TypeGraphQL.Field(_type => Cms_slotCreateOrConnectWithoutCms_slot_translationInput, {
    nullable: true
  })
  connectOrCreate?: Cms_slotCreateOrConnectWithoutCms_slot_translationInput | undefined;

  @TypeGraphQL.Field(_type => Cms_slotUpsertWithoutCms_slot_translationInput, {
    nullable: true
  })
  upsert?: Cms_slotUpsertWithoutCms_slot_translationInput | undefined;

  @TypeGraphQL.Field(_type => Cms_slotWhereUniqueInput, {
    nullable: true
  })
  connect?: Cms_slotWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Cms_slotUpdateToOneWithWhereWithoutCms_slot_translationInput, {
    nullable: true
  })
  update?: Cms_slotUpdateToOneWithWhereWithoutCms_slot_translationInput | undefined;
}
