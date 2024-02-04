import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_pageCreateOrConnectWithoutCms_page_translationInput } from "../inputs/Cms_pageCreateOrConnectWithoutCms_page_translationInput";
import { Cms_pageCreateWithoutCms_page_translationInput } from "../inputs/Cms_pageCreateWithoutCms_page_translationInput";
import { Cms_pageUpdateToOneWithWhereWithoutCms_page_translationInput } from "../inputs/Cms_pageUpdateToOneWithWhereWithoutCms_page_translationInput";
import { Cms_pageUpsertWithoutCms_page_translationInput } from "../inputs/Cms_pageUpsertWithoutCms_page_translationInput";
import { Cms_pageWhereUniqueInput } from "../inputs/Cms_pageWhereUniqueInput";

@TypeGraphQL.InputType("Cms_pageUpdateOneRequiredWithoutCms_page_translationNestedInput", {})
export class Cms_pageUpdateOneRequiredWithoutCms_page_translationNestedInput {
  @TypeGraphQL.Field(_type => Cms_pageCreateWithoutCms_page_translationInput, {
    nullable: true
  })
  create?: Cms_pageCreateWithoutCms_page_translationInput | undefined;

  @TypeGraphQL.Field(_type => Cms_pageCreateOrConnectWithoutCms_page_translationInput, {
    nullable: true
  })
  connectOrCreate?: Cms_pageCreateOrConnectWithoutCms_page_translationInput | undefined;

  @TypeGraphQL.Field(_type => Cms_pageUpsertWithoutCms_page_translationInput, {
    nullable: true
  })
  upsert?: Cms_pageUpsertWithoutCms_page_translationInput | undefined;

  @TypeGraphQL.Field(_type => Cms_pageWhereUniqueInput, {
    nullable: true
  })
  connect?: Cms_pageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Cms_pageUpdateToOneWithWhereWithoutCms_page_translationInput, {
    nullable: true
  })
  update?: Cms_pageUpdateToOneWithWhereWithoutCms_page_translationInput | undefined;
}
