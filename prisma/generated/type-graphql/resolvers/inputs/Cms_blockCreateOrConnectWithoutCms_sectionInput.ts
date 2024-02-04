import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_blockCreateWithoutCms_sectionInput } from "../inputs/Cms_blockCreateWithoutCms_sectionInput";
import { Cms_blockWhereUniqueInput } from "../inputs/Cms_blockWhereUniqueInput";

@TypeGraphQL.InputType("Cms_blockCreateOrConnectWithoutCms_sectionInput", {})
export class Cms_blockCreateOrConnectWithoutCms_sectionInput {
  @TypeGraphQL.Field(_type => Cms_blockWhereUniqueInput, {
    nullable: false
  })
  where!: Cms_blockWhereUniqueInput;

  @TypeGraphQL.Field(_type => Cms_blockCreateWithoutCms_sectionInput, {
    nullable: false
  })
  create!: Cms_blockCreateWithoutCms_sectionInput;
}
