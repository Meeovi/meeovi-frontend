import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_sectionCreateManyCms_pageInputEnvelope } from "../inputs/Cms_sectionCreateManyCms_pageInputEnvelope";
import { Cms_sectionCreateOrConnectWithoutCms_pageInput } from "../inputs/Cms_sectionCreateOrConnectWithoutCms_pageInput";
import { Cms_sectionCreateWithoutCms_pageInput } from "../inputs/Cms_sectionCreateWithoutCms_pageInput";
import { Cms_sectionWhereUniqueInput } from "../inputs/Cms_sectionWhereUniqueInput";

@TypeGraphQL.InputType("Cms_sectionCreateNestedManyWithoutCms_pageInput", {})
export class Cms_sectionCreateNestedManyWithoutCms_pageInput {
  @TypeGraphQL.Field(_type => [Cms_sectionCreateWithoutCms_pageInput], {
    nullable: true
  })
  create?: Cms_sectionCreateWithoutCms_pageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_sectionCreateOrConnectWithoutCms_pageInput], {
    nullable: true
  })
  connectOrCreate?: Cms_sectionCreateOrConnectWithoutCms_pageInput[] | undefined;

  @TypeGraphQL.Field(_type => Cms_sectionCreateManyCms_pageInputEnvelope, {
    nullable: true
  })
  createMany?: Cms_sectionCreateManyCms_pageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Cms_sectionWhereUniqueInput], {
    nullable: true
  })
  connect?: Cms_sectionWhereUniqueInput[] | undefined;
}
