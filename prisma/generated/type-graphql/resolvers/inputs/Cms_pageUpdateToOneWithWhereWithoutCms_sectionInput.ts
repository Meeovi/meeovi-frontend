import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_pageUpdateWithoutCms_sectionInput } from "../inputs/Cms_pageUpdateWithoutCms_sectionInput";
import { Cms_pageWhereInput } from "../inputs/Cms_pageWhereInput";

@TypeGraphQL.InputType("Cms_pageUpdateToOneWithWhereWithoutCms_sectionInput", {})
export class Cms_pageUpdateToOneWithWhereWithoutCms_sectionInput {
  @TypeGraphQL.Field(_type => Cms_pageWhereInput, {
    nullable: true
  })
  where?: Cms_pageWhereInput | undefined;

  @TypeGraphQL.Field(_type => Cms_pageUpdateWithoutCms_sectionInput, {
    nullable: false
  })
  data!: Cms_pageUpdateWithoutCms_sectionInput;
}
