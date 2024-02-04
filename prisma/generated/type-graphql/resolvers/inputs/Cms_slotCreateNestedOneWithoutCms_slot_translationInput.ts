import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_slotCreateOrConnectWithoutCms_slot_translationInput } from "../inputs/Cms_slotCreateOrConnectWithoutCms_slot_translationInput";
import { Cms_slotCreateWithoutCms_slot_translationInput } from "../inputs/Cms_slotCreateWithoutCms_slot_translationInput";
import { Cms_slotWhereUniqueInput } from "../inputs/Cms_slotWhereUniqueInput";

@TypeGraphQL.InputType("Cms_slotCreateNestedOneWithoutCms_slot_translationInput", {})
export class Cms_slotCreateNestedOneWithoutCms_slot_translationInput {
  @TypeGraphQL.Field(_type => Cms_slotCreateWithoutCms_slot_translationInput, {
    nullable: true
  })
  create?: Cms_slotCreateWithoutCms_slot_translationInput | undefined;

  @TypeGraphQL.Field(_type => Cms_slotCreateOrConnectWithoutCms_slot_translationInput, {
    nullable: true
  })
  connectOrCreate?: Cms_slotCreateOrConnectWithoutCms_slot_translationInput | undefined;

  @TypeGraphQL.Field(_type => Cms_slotWhereUniqueInput, {
    nullable: true
  })
  connect?: Cms_slotWhereUniqueInput | undefined;
}
