import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_sectionUpdateWithoutCms_pageInput } from "../inputs/Cms_sectionUpdateWithoutCms_pageInput";
import { Cms_sectionWhereUniqueInput } from "../inputs/Cms_sectionWhereUniqueInput";

@TypeGraphQL.InputType("Cms_sectionUpdateWithWhereUniqueWithoutCms_pageInput", {})
export class Cms_sectionUpdateWithWhereUniqueWithoutCms_pageInput {
  @TypeGraphQL.Field(_type => Cms_sectionWhereUniqueInput, {
    nullable: false
  })
  where!: Cms_sectionWhereUniqueInput;

  @TypeGraphQL.Field(_type => Cms_sectionUpdateWithoutCms_pageInput, {
    nullable: false
  })
  data!: Cms_sectionUpdateWithoutCms_pageInput;
}
