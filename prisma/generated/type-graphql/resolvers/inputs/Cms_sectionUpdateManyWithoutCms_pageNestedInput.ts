import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_sectionCreateManyCms_pageInputEnvelope } from "../inputs/Cms_sectionCreateManyCms_pageInputEnvelope";
import { Cms_sectionCreateOrConnectWithoutCms_pageInput } from "../inputs/Cms_sectionCreateOrConnectWithoutCms_pageInput";
import { Cms_sectionCreateWithoutCms_pageInput } from "../inputs/Cms_sectionCreateWithoutCms_pageInput";
import { Cms_sectionScalarWhereInput } from "../inputs/Cms_sectionScalarWhereInput";
import { Cms_sectionUpdateManyWithWhereWithoutCms_pageInput } from "../inputs/Cms_sectionUpdateManyWithWhereWithoutCms_pageInput";
import { Cms_sectionUpdateWithWhereUniqueWithoutCms_pageInput } from "../inputs/Cms_sectionUpdateWithWhereUniqueWithoutCms_pageInput";
import { Cms_sectionUpsertWithWhereUniqueWithoutCms_pageInput } from "../inputs/Cms_sectionUpsertWithWhereUniqueWithoutCms_pageInput";
import { Cms_sectionWhereUniqueInput } from "../inputs/Cms_sectionWhereUniqueInput";

@TypeGraphQL.InputType("Cms_sectionUpdateManyWithoutCms_pageNestedInput", {})
export class Cms_sectionUpdateManyWithoutCms_pageNestedInput {
  @TypeGraphQL.Field(_type => [Cms_sectionCreateWithoutCms_pageInput], {
    nullable: true
  })
  create?: Cms_sectionCreateWithoutCms_pageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_sectionCreateOrConnectWithoutCms_pageInput], {
    nullable: true
  })
  connectOrCreate?: Cms_sectionCreateOrConnectWithoutCms_pageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_sectionUpsertWithWhereUniqueWithoutCms_pageInput], {
    nullable: true
  })
  upsert?: Cms_sectionUpsertWithWhereUniqueWithoutCms_pageInput[] | undefined;

  @TypeGraphQL.Field(_type => Cms_sectionCreateManyCms_pageInputEnvelope, {
    nullable: true
  })
  createMany?: Cms_sectionCreateManyCms_pageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Cms_sectionWhereUniqueInput], {
    nullable: true
  })
  set?: Cms_sectionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_sectionWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Cms_sectionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_sectionWhereUniqueInput], {
    nullable: true
  })
  delete?: Cms_sectionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_sectionWhereUniqueInput], {
    nullable: true
  })
  connect?: Cms_sectionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_sectionUpdateWithWhereUniqueWithoutCms_pageInput], {
    nullable: true
  })
  update?: Cms_sectionUpdateWithWhereUniqueWithoutCms_pageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_sectionUpdateManyWithWhereWithoutCms_pageInput], {
    nullable: true
  })
  updateMany?: Cms_sectionUpdateManyWithWhereWithoutCms_pageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_sectionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Cms_sectionScalarWhereInput[] | undefined;
}
