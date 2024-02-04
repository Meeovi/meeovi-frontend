import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_sectionCreateWithoutCms_blockInput } from "../inputs/Cms_sectionCreateWithoutCms_blockInput";
import { Cms_sectionWhereUniqueInput } from "../inputs/Cms_sectionWhereUniqueInput";

@TypeGraphQL.InputType("Cms_sectionCreateOrConnectWithoutCms_blockInput", {})
export class Cms_sectionCreateOrConnectWithoutCms_blockInput {
  @TypeGraphQL.Field(_type => Cms_sectionWhereUniqueInput, {
    nullable: false
  })
  where!: Cms_sectionWhereUniqueInput;

  @TypeGraphQL.Field(_type => Cms_sectionCreateWithoutCms_blockInput, {
    nullable: false
  })
  create!: Cms_sectionCreateWithoutCms_blockInput;
}
