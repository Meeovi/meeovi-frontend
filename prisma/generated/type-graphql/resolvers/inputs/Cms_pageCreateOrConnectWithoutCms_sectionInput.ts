import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_pageCreateWithoutCms_sectionInput } from "../inputs/Cms_pageCreateWithoutCms_sectionInput";
import { Cms_pageWhereUniqueInput } from "../inputs/Cms_pageWhereUniqueInput";

@TypeGraphQL.InputType("Cms_pageCreateOrConnectWithoutCms_sectionInput", {})
export class Cms_pageCreateOrConnectWithoutCms_sectionInput {
  @TypeGraphQL.Field(_type => Cms_pageWhereUniqueInput, {
    nullable: false
  })
  where!: Cms_pageWhereUniqueInput;

  @TypeGraphQL.Field(_type => Cms_pageCreateWithoutCms_sectionInput, {
    nullable: false
  })
  create!: Cms_pageCreateWithoutCms_sectionInput;
}
