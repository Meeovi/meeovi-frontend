import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_sectionScalarWhereInput } from "../inputs/Cms_sectionScalarWhereInput";
import { Cms_sectionUpdateManyMutationInput } from "../inputs/Cms_sectionUpdateManyMutationInput";

@TypeGraphQL.InputType("Cms_sectionUpdateManyWithWhereWithoutCms_pageInput", {})
export class Cms_sectionUpdateManyWithWhereWithoutCms_pageInput {
  @TypeGraphQL.Field(_type => Cms_sectionScalarWhereInput, {
    nullable: false
  })
  where!: Cms_sectionScalarWhereInput;

  @TypeGraphQL.Field(_type => Cms_sectionUpdateManyMutationInput, {
    nullable: false
  })
  data!: Cms_sectionUpdateManyMutationInput;
}
