import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_blockUpdateWithoutCms_sectionInput } from "../inputs/Cms_blockUpdateWithoutCms_sectionInput";
import { Cms_blockWhereUniqueInput } from "../inputs/Cms_blockWhereUniqueInput";

@TypeGraphQL.InputType("Cms_blockUpdateWithWhereUniqueWithoutCms_sectionInput", {})
export class Cms_blockUpdateWithWhereUniqueWithoutCms_sectionInput {
  @TypeGraphQL.Field(_type => Cms_blockWhereUniqueInput, {
    nullable: false
  })
  where!: Cms_blockWhereUniqueInput;

  @TypeGraphQL.Field(_type => Cms_blockUpdateWithoutCms_sectionInput, {
    nullable: false
  })
  data!: Cms_blockUpdateWithoutCms_sectionInput;
}
