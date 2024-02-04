import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_pageCreateOrConnectWithoutCms_sectionInput } from "../inputs/Cms_pageCreateOrConnectWithoutCms_sectionInput";
import { Cms_pageCreateWithoutCms_sectionInput } from "../inputs/Cms_pageCreateWithoutCms_sectionInput";
import { Cms_pageUpdateToOneWithWhereWithoutCms_sectionInput } from "../inputs/Cms_pageUpdateToOneWithWhereWithoutCms_sectionInput";
import { Cms_pageUpsertWithoutCms_sectionInput } from "../inputs/Cms_pageUpsertWithoutCms_sectionInput";
import { Cms_pageWhereUniqueInput } from "../inputs/Cms_pageWhereUniqueInput";

@TypeGraphQL.InputType("Cms_pageUpdateOneRequiredWithoutCms_sectionNestedInput", {})
export class Cms_pageUpdateOneRequiredWithoutCms_sectionNestedInput {
  @TypeGraphQL.Field(_type => Cms_pageCreateWithoutCms_sectionInput, {
    nullable: true
  })
  create?: Cms_pageCreateWithoutCms_sectionInput | undefined;

  @TypeGraphQL.Field(_type => Cms_pageCreateOrConnectWithoutCms_sectionInput, {
    nullable: true
  })
  connectOrCreate?: Cms_pageCreateOrConnectWithoutCms_sectionInput | undefined;

  @TypeGraphQL.Field(_type => Cms_pageUpsertWithoutCms_sectionInput, {
    nullable: true
  })
  upsert?: Cms_pageUpsertWithoutCms_sectionInput | undefined;

  @TypeGraphQL.Field(_type => Cms_pageWhereUniqueInput, {
    nullable: true
  })
  connect?: Cms_pageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Cms_pageUpdateToOneWithWhereWithoutCms_sectionInput, {
    nullable: true
  })
  update?: Cms_pageUpdateToOneWithWhereWithoutCms_sectionInput | undefined;
}
