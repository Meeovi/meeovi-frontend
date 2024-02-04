import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_slot_translationCreateManyCms_slotInputEnvelope } from "../inputs/Cms_slot_translationCreateManyCms_slotInputEnvelope";
import { Cms_slot_translationCreateOrConnectWithoutCms_slotInput } from "../inputs/Cms_slot_translationCreateOrConnectWithoutCms_slotInput";
import { Cms_slot_translationCreateWithoutCms_slotInput } from "../inputs/Cms_slot_translationCreateWithoutCms_slotInput";
import { Cms_slot_translationWhereUniqueInput } from "../inputs/Cms_slot_translationWhereUniqueInput";

@TypeGraphQL.InputType("Cms_slot_translationCreateNestedManyWithoutCms_slotInput", {})
export class Cms_slot_translationCreateNestedManyWithoutCms_slotInput {
  @TypeGraphQL.Field(_type => [Cms_slot_translationCreateWithoutCms_slotInput], {
    nullable: true
  })
  create?: Cms_slot_translationCreateWithoutCms_slotInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_slot_translationCreateOrConnectWithoutCms_slotInput], {
    nullable: true
  })
  connectOrCreate?: Cms_slot_translationCreateOrConnectWithoutCms_slotInput[] | undefined;

  @TypeGraphQL.Field(_type => Cms_slot_translationCreateManyCms_slotInputEnvelope, {
    nullable: true
  })
  createMany?: Cms_slot_translationCreateManyCms_slotInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Cms_slot_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Cms_slot_translationWhereUniqueInput[] | undefined;
}
