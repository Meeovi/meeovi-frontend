import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_sectionCreateWithoutCms_pageInput } from "../inputs/Cms_sectionCreateWithoutCms_pageInput";
import { Cms_sectionUpdateWithoutCms_pageInput } from "../inputs/Cms_sectionUpdateWithoutCms_pageInput";
import { Cms_sectionWhereUniqueInput } from "../inputs/Cms_sectionWhereUniqueInput";

@TypeGraphQL.InputType("Cms_sectionUpsertWithWhereUniqueWithoutCms_pageInput", {})
export class Cms_sectionUpsertWithWhereUniqueWithoutCms_pageInput {
  @TypeGraphQL.Field(_type => Cms_sectionWhereUniqueInput, {
    nullable: false
  })
  where!: Cms_sectionWhereUniqueInput;

  @TypeGraphQL.Field(_type => Cms_sectionUpdateWithoutCms_pageInput, {
    nullable: false
  })
  update!: Cms_sectionUpdateWithoutCms_pageInput;

  @TypeGraphQL.Field(_type => Cms_sectionCreateWithoutCms_pageInput, {
    nullable: false
  })
  create!: Cms_sectionCreateWithoutCms_pageInput;
}
