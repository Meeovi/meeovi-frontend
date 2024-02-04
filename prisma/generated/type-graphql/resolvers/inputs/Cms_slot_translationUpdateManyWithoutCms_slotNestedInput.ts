import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_slot_translationCreateManyCms_slotInputEnvelope } from "../inputs/Cms_slot_translationCreateManyCms_slotInputEnvelope";
import { Cms_slot_translationCreateOrConnectWithoutCms_slotInput } from "../inputs/Cms_slot_translationCreateOrConnectWithoutCms_slotInput";
import { Cms_slot_translationCreateWithoutCms_slotInput } from "../inputs/Cms_slot_translationCreateWithoutCms_slotInput";
import { Cms_slot_translationScalarWhereInput } from "../inputs/Cms_slot_translationScalarWhereInput";
import { Cms_slot_translationUpdateManyWithWhereWithoutCms_slotInput } from "../inputs/Cms_slot_translationUpdateManyWithWhereWithoutCms_slotInput";
import { Cms_slot_translationUpdateWithWhereUniqueWithoutCms_slotInput } from "../inputs/Cms_slot_translationUpdateWithWhereUniqueWithoutCms_slotInput";
import { Cms_slot_translationUpsertWithWhereUniqueWithoutCms_slotInput } from "../inputs/Cms_slot_translationUpsertWithWhereUniqueWithoutCms_slotInput";
import { Cms_slot_translationWhereUniqueInput } from "../inputs/Cms_slot_translationWhereUniqueInput";

@TypeGraphQL.InputType("Cms_slot_translationUpdateManyWithoutCms_slotNestedInput", {})
export class Cms_slot_translationUpdateManyWithoutCms_slotNestedInput {
  @TypeGraphQL.Field(_type => [Cms_slot_translationCreateWithoutCms_slotInput], {
    nullable: true
  })
  create?: Cms_slot_translationCreateWithoutCms_slotInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_slot_translationCreateOrConnectWithoutCms_slotInput], {
    nullable: true
  })
  connectOrCreate?: Cms_slot_translationCreateOrConnectWithoutCms_slotInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_slot_translationUpsertWithWhereUniqueWithoutCms_slotInput], {
    nullable: true
  })
  upsert?: Cms_slot_translationUpsertWithWhereUniqueWithoutCms_slotInput[] | undefined;

  @TypeGraphQL.Field(_type => Cms_slot_translationCreateManyCms_slotInputEnvelope, {
    nullable: true
  })
  createMany?: Cms_slot_translationCreateManyCms_slotInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Cms_slot_translationWhereUniqueInput], {
    nullable: true
  })
  set?: Cms_slot_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_slot_translationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Cms_slot_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_slot_translationWhereUniqueInput], {
    nullable: true
  })
  delete?: Cms_slot_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_slot_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Cms_slot_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_slot_translationUpdateWithWhereUniqueWithoutCms_slotInput], {
    nullable: true
  })
  update?: Cms_slot_translationUpdateWithWhereUniqueWithoutCms_slotInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_slot_translationUpdateManyWithWhereWithoutCms_slotInput], {
    nullable: true
  })
  updateMany?: Cms_slot_translationUpdateManyWithWhereWithoutCms_slotInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_slot_translationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Cms_slot_translationScalarWhereInput[] | undefined;
}
