import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_pageCreateWithoutCms_sectionInput } from "../inputs/Cms_pageCreateWithoutCms_sectionInput";
import { Cms_pageUpdateWithoutCms_sectionInput } from "../inputs/Cms_pageUpdateWithoutCms_sectionInput";
import { Cms_pageWhereInput } from "../inputs/Cms_pageWhereInput";

@TypeGraphQL.InputType("Cms_pageUpsertWithoutCms_sectionInput", {})
export class Cms_pageUpsertWithoutCms_sectionInput {
  @TypeGraphQL.Field(_type => Cms_pageUpdateWithoutCms_sectionInput, {
    nullable: false
  })
  update!: Cms_pageUpdateWithoutCms_sectionInput;

  @TypeGraphQL.Field(_type => Cms_pageCreateWithoutCms_sectionInput, {
    nullable: false
  })
  create!: Cms_pageCreateWithoutCms_sectionInput;

  @TypeGraphQL.Field(_type => Cms_pageWhereInput, {
    nullable: true
  })
  where?: Cms_pageWhereInput | undefined;
}
