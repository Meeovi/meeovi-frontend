import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_blockCreateManyCms_sectionInputEnvelope } from "../inputs/Cms_blockCreateManyCms_sectionInputEnvelope";
import { Cms_blockCreateOrConnectWithoutCms_sectionInput } from "../inputs/Cms_blockCreateOrConnectWithoutCms_sectionInput";
import { Cms_blockCreateWithoutCms_sectionInput } from "../inputs/Cms_blockCreateWithoutCms_sectionInput";
import { Cms_blockScalarWhereInput } from "../inputs/Cms_blockScalarWhereInput";
import { Cms_blockUpdateManyWithWhereWithoutCms_sectionInput } from "../inputs/Cms_blockUpdateManyWithWhereWithoutCms_sectionInput";
import { Cms_blockUpdateWithWhereUniqueWithoutCms_sectionInput } from "../inputs/Cms_blockUpdateWithWhereUniqueWithoutCms_sectionInput";
import { Cms_blockUpsertWithWhereUniqueWithoutCms_sectionInput } from "../inputs/Cms_blockUpsertWithWhereUniqueWithoutCms_sectionInput";
import { Cms_blockWhereUniqueInput } from "../inputs/Cms_blockWhereUniqueInput";

@TypeGraphQL.InputType("Cms_blockUpdateManyWithoutCms_sectionNestedInput", {})
export class Cms_blockUpdateManyWithoutCms_sectionNestedInput {
  @TypeGraphQL.Field(_type => [Cms_blockCreateWithoutCms_sectionInput], {
    nullable: true
  })
  create?: Cms_blockCreateWithoutCms_sectionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_blockCreateOrConnectWithoutCms_sectionInput], {
    nullable: true
  })
  connectOrCreate?: Cms_blockCreateOrConnectWithoutCms_sectionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_blockUpsertWithWhereUniqueWithoutCms_sectionInput], {
    nullable: true
  })
  upsert?: Cms_blockUpsertWithWhereUniqueWithoutCms_sectionInput[] | undefined;

  @TypeGraphQL.Field(_type => Cms_blockCreateManyCms_sectionInputEnvelope, {
    nullable: true
  })
  createMany?: Cms_blockCreateManyCms_sectionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Cms_blockWhereUniqueInput], {
    nullable: true
  })
  set?: Cms_blockWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_blockWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Cms_blockWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_blockWhereUniqueInput], {
    nullable: true
  })
  delete?: Cms_blockWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_blockWhereUniqueInput], {
    nullable: true
  })
  connect?: Cms_blockWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_blockUpdateWithWhereUniqueWithoutCms_sectionInput], {
    nullable: true
  })
  update?: Cms_blockUpdateWithWhereUniqueWithoutCms_sectionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_blockUpdateManyWithWhereWithoutCms_sectionInput], {
    nullable: true
  })
  updateMany?: Cms_blockUpdateManyWithWhereWithoutCms_sectionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_blockScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Cms_blockScalarWhereInput[] | undefined;
}
