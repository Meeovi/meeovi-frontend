import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_sectionCreateWithoutCms_pageInput } from "../inputs/Cms_sectionCreateWithoutCms_pageInput";
import { Cms_sectionWhereUniqueInput } from "../inputs/Cms_sectionWhereUniqueInput";

@TypeGraphQL.InputType("Cms_sectionCreateOrConnectWithoutCms_pageInput", {})
export class Cms_sectionCreateOrConnectWithoutCms_pageInput {
  @TypeGraphQL.Field(_type => Cms_sectionWhereUniqueInput, {
    nullable: false
  })
  where!: Cms_sectionWhereUniqueInput;

  @TypeGraphQL.Field(_type => Cms_sectionCreateWithoutCms_pageInput, {
    nullable: false
  })
  create!: Cms_sectionCreateWithoutCms_pageInput;
}
