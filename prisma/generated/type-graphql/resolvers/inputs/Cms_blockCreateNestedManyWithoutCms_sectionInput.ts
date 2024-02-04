import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_blockCreateManyCms_sectionInputEnvelope } from "../inputs/Cms_blockCreateManyCms_sectionInputEnvelope";
import { Cms_blockCreateOrConnectWithoutCms_sectionInput } from "../inputs/Cms_blockCreateOrConnectWithoutCms_sectionInput";
import { Cms_blockCreateWithoutCms_sectionInput } from "../inputs/Cms_blockCreateWithoutCms_sectionInput";
import { Cms_blockWhereUniqueInput } from "../inputs/Cms_blockWhereUniqueInput";

@TypeGraphQL.InputType("Cms_blockCreateNestedManyWithoutCms_sectionInput", {})
export class Cms_blockCreateNestedManyWithoutCms_sectionInput {
  @TypeGraphQL.Field(_type => [Cms_blockCreateWithoutCms_sectionInput], {
    nullable: true
  })
  create?: Cms_blockCreateWithoutCms_sectionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_blockCreateOrConnectWithoutCms_sectionInput], {
    nullable: true
  })
  connectOrCreate?: Cms_blockCreateOrConnectWithoutCms_sectionInput[] | undefined;

  @TypeGraphQL.Field(_type => Cms_blockCreateManyCms_sectionInputEnvelope, {
    nullable: true
  })
  createMany?: Cms_blockCreateManyCms_sectionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Cms_blockWhereUniqueInput], {
    nullable: true
  })
  connect?: Cms_blockWhereUniqueInput[] | undefined;
}
