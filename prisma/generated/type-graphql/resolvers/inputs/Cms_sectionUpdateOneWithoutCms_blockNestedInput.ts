import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_sectionCreateOrConnectWithoutCms_blockInput } from "../inputs/Cms_sectionCreateOrConnectWithoutCms_blockInput";
import { Cms_sectionCreateWithoutCms_blockInput } from "../inputs/Cms_sectionCreateWithoutCms_blockInput";
import { Cms_sectionUpdateToOneWithWhereWithoutCms_blockInput } from "../inputs/Cms_sectionUpdateToOneWithWhereWithoutCms_blockInput";
import { Cms_sectionUpsertWithoutCms_blockInput } from "../inputs/Cms_sectionUpsertWithoutCms_blockInput";
import { Cms_sectionWhereInput } from "../inputs/Cms_sectionWhereInput";
import { Cms_sectionWhereUniqueInput } from "../inputs/Cms_sectionWhereUniqueInput";

@TypeGraphQL.InputType("Cms_sectionUpdateOneWithoutCms_blockNestedInput", {})
export class Cms_sectionUpdateOneWithoutCms_blockNestedInput {
  @TypeGraphQL.Field(_type => Cms_sectionCreateWithoutCms_blockInput, {
    nullable: true
  })
  create?: Cms_sectionCreateWithoutCms_blockInput | undefined;

  @TypeGraphQL.Field(_type => Cms_sectionCreateOrConnectWithoutCms_blockInput, {
    nullable: true
  })
  connectOrCreate?: Cms_sectionCreateOrConnectWithoutCms_blockInput | undefined;

  @TypeGraphQL.Field(_type => Cms_sectionUpsertWithoutCms_blockInput, {
    nullable: true
  })
  upsert?: Cms_sectionUpsertWithoutCms_blockInput | undefined;

  @TypeGraphQL.Field(_type => Cms_sectionWhereInput, {
    nullable: true
  })
  disconnect?: Cms_sectionWhereInput | undefined;

  @TypeGraphQL.Field(_type => Cms_sectionWhereInput, {
    nullable: true
  })
  delete?: Cms_sectionWhereInput | undefined;

  @TypeGraphQL.Field(_type => Cms_sectionWhereUniqueInput, {
    nullable: true
  })
  connect?: Cms_sectionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Cms_sectionUpdateToOneWithWhereWithoutCms_blockInput, {
    nullable: true
  })
  update?: Cms_sectionUpdateToOneWithWhereWithoutCms_blockInput | undefined;
}
