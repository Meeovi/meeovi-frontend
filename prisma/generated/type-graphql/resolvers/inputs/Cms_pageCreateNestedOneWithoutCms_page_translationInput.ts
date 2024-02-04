import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_pageCreateOrConnectWithoutCms_page_translationInput } from "../inputs/Cms_pageCreateOrConnectWithoutCms_page_translationInput";
import { Cms_pageCreateWithoutCms_page_translationInput } from "../inputs/Cms_pageCreateWithoutCms_page_translationInput";
import { Cms_pageWhereUniqueInput } from "../inputs/Cms_pageWhereUniqueInput";

@TypeGraphQL.InputType("Cms_pageCreateNestedOneWithoutCms_page_translationInput", {})
export class Cms_pageCreateNestedOneWithoutCms_page_translationInput {
  @TypeGraphQL.Field(_type => Cms_pageCreateWithoutCms_page_translationInput, {
    nullable: true
  })
  create?: Cms_pageCreateWithoutCms_page_translationInput | undefined;

  @TypeGraphQL.Field(_type => Cms_pageCreateOrConnectWithoutCms_page_translationInput, {
    nullable: true
  })
  connectOrCreate?: Cms_pageCreateOrConnectWithoutCms_page_translationInput | undefined;

  @TypeGraphQL.Field(_type => Cms_pageWhereUniqueInput, {
    nullable: true
  })
  connect?: Cms_pageWhereUniqueInput | undefined;
}
