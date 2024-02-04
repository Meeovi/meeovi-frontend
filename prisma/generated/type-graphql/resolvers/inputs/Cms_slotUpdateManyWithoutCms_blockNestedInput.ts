import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_slotCreateManyCms_blockInputEnvelope } from "../inputs/Cms_slotCreateManyCms_blockInputEnvelope";
import { Cms_slotCreateOrConnectWithoutCms_blockInput } from "../inputs/Cms_slotCreateOrConnectWithoutCms_blockInput";
import { Cms_slotCreateWithoutCms_blockInput } from "../inputs/Cms_slotCreateWithoutCms_blockInput";
import { Cms_slotScalarWhereInput } from "../inputs/Cms_slotScalarWhereInput";
import { Cms_slotUpdateManyWithWhereWithoutCms_blockInput } from "../inputs/Cms_slotUpdateManyWithWhereWithoutCms_blockInput";
import { Cms_slotUpdateWithWhereUniqueWithoutCms_blockInput } from "../inputs/Cms_slotUpdateWithWhereUniqueWithoutCms_blockInput";
import { Cms_slotUpsertWithWhereUniqueWithoutCms_blockInput } from "../inputs/Cms_slotUpsertWithWhereUniqueWithoutCms_blockInput";
import { Cms_slotWhereUniqueInput } from "../inputs/Cms_slotWhereUniqueInput";

@TypeGraphQL.InputType("Cms_slotUpdateManyWithoutCms_blockNestedInput", {})
export class Cms_slotUpdateManyWithoutCms_blockNestedInput {
  @TypeGraphQL.Field(_type => [Cms_slotCreateWithoutCms_blockInput], {
    nullable: true
  })
  create?: Cms_slotCreateWithoutCms_blockInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_slotCreateOrConnectWithoutCms_blockInput], {
    nullable: true
  })
  connectOrCreate?: Cms_slotCreateOrConnectWithoutCms_blockInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_slotUpsertWithWhereUniqueWithoutCms_blockInput], {
    nullable: true
  })
  upsert?: Cms_slotUpsertWithWhereUniqueWithoutCms_blockInput[] | undefined;

  @TypeGraphQL.Field(_type => Cms_slotCreateManyCms_blockInputEnvelope, {
    nullable: true
  })
  createMany?: Cms_slotCreateManyCms_blockInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Cms_slotWhereUniqueInput], {
    nullable: true
  })
  set?: Cms_slotWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_slotWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Cms_slotWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_slotWhereUniqueInput], {
    nullable: true
  })
  delete?: Cms_slotWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_slotWhereUniqueInput], {
    nullable: true
  })
  connect?: Cms_slotWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_slotUpdateWithWhereUniqueWithoutCms_blockInput], {
    nullable: true
  })
  update?: Cms_slotUpdateWithWhereUniqueWithoutCms_blockInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_slotUpdateManyWithWhereWithoutCms_blockInput], {
    nullable: true
  })
  updateMany?: Cms_slotUpdateManyWithWhereWithoutCms_blockInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_slotScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Cms_slotScalarWhereInput[] | undefined;
}
