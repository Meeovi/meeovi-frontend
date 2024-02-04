import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_pageCreateWithoutCms_page_translationInput } from "../inputs/Cms_pageCreateWithoutCms_page_translationInput";
import { Cms_pageUpdateWithoutCms_page_translationInput } from "../inputs/Cms_pageUpdateWithoutCms_page_translationInput";
import { Cms_pageWhereInput } from "../inputs/Cms_pageWhereInput";

@TypeGraphQL.InputType("Cms_pageUpsertWithoutCms_page_translationInput", {})
export class Cms_pageUpsertWithoutCms_page_translationInput {
  @TypeGraphQL.Field(_type => Cms_pageUpdateWithoutCms_page_translationInput, {
    nullable: false
  })
  update!: Cms_pageUpdateWithoutCms_page_translationInput;

  @TypeGraphQL.Field(_type => Cms_pageCreateWithoutCms_page_translationInput, {
    nullable: false
  })
  create!: Cms_pageCreateWithoutCms_page_translationInput;

  @TypeGraphQL.Field(_type => Cms_pageWhereInput, {
    nullable: true
  })
  where?: Cms_pageWhereInput | undefined;
}
