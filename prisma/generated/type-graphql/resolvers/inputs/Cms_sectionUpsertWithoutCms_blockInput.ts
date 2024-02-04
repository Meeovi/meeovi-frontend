import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_sectionCreateWithoutCms_blockInput } from "../inputs/Cms_sectionCreateWithoutCms_blockInput";
import { Cms_sectionUpdateWithoutCms_blockInput } from "../inputs/Cms_sectionUpdateWithoutCms_blockInput";
import { Cms_sectionWhereInput } from "../inputs/Cms_sectionWhereInput";

@TypeGraphQL.InputType("Cms_sectionUpsertWithoutCms_blockInput", {})
export class Cms_sectionUpsertWithoutCms_blockInput {
  @TypeGraphQL.Field(_type => Cms_sectionUpdateWithoutCms_blockInput, {
    nullable: false
  })
  update!: Cms_sectionUpdateWithoutCms_blockInput;

  @TypeGraphQL.Field(_type => Cms_sectionCreateWithoutCms_blockInput, {
    nullable: false
  })
  create!: Cms_sectionCreateWithoutCms_blockInput;

  @TypeGraphQL.Field(_type => Cms_sectionWhereInput, {
    nullable: true
  })
  where?: Cms_sectionWhereInput | undefined;
}
