import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_page_translationCreateManyCms_pageInputEnvelope } from "../inputs/Cms_page_translationCreateManyCms_pageInputEnvelope";
import { Cms_page_translationCreateOrConnectWithoutCms_pageInput } from "../inputs/Cms_page_translationCreateOrConnectWithoutCms_pageInput";
import { Cms_page_translationCreateWithoutCms_pageInput } from "../inputs/Cms_page_translationCreateWithoutCms_pageInput";
import { Cms_page_translationWhereUniqueInput } from "../inputs/Cms_page_translationWhereUniqueInput";

@TypeGraphQL.InputType("Cms_page_translationCreateNestedManyWithoutCms_pageInput", {})
export class Cms_page_translationCreateNestedManyWithoutCms_pageInput {
  @TypeGraphQL.Field(_type => [Cms_page_translationCreateWithoutCms_pageInput], {
    nullable: true
  })
  create?: Cms_page_translationCreateWithoutCms_pageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_page_translationCreateOrConnectWithoutCms_pageInput], {
    nullable: true
  })
  connectOrCreate?: Cms_page_translationCreateOrConnectWithoutCms_pageInput[] | undefined;

  @TypeGraphQL.Field(_type => Cms_page_translationCreateManyCms_pageInputEnvelope, {
    nullable: true
  })
  createMany?: Cms_page_translationCreateManyCms_pageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Cms_page_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Cms_page_translationWhereUniqueInput[] | undefined;
}
