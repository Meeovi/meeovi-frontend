import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_page_translationCreateWithoutCms_pageInput } from "../inputs/Cms_page_translationCreateWithoutCms_pageInput";
import { Cms_page_translationUpdateWithoutCms_pageInput } from "../inputs/Cms_page_translationUpdateWithoutCms_pageInput";
import { Cms_page_translationWhereUniqueInput } from "../inputs/Cms_page_translationWhereUniqueInput";

@TypeGraphQL.InputType("Cms_page_translationUpsertWithWhereUniqueWithoutCms_pageInput", {})
export class Cms_page_translationUpsertWithWhereUniqueWithoutCms_pageInput {
  @TypeGraphQL.Field(_type => Cms_page_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Cms_page_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Cms_page_translationUpdateWithoutCms_pageInput, {
    nullable: false
  })
  update!: Cms_page_translationUpdateWithoutCms_pageInput;

  @TypeGraphQL.Field(_type => Cms_page_translationCreateWithoutCms_pageInput, {
    nullable: false
  })
  create!: Cms_page_translationCreateWithoutCms_pageInput;
}
