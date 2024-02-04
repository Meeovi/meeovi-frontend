import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_sectionCreateOrConnectWithoutCms_blockInput } from "../inputs/Cms_sectionCreateOrConnectWithoutCms_blockInput";
import { Cms_sectionCreateWithoutCms_blockInput } from "../inputs/Cms_sectionCreateWithoutCms_blockInput";
import { Cms_sectionWhereUniqueInput } from "../inputs/Cms_sectionWhereUniqueInput";

@TypeGraphQL.InputType("Cms_sectionCreateNestedOneWithoutCms_blockInput", {})
export class Cms_sectionCreateNestedOneWithoutCms_blockInput {
  @TypeGraphQL.Field(_type => Cms_sectionCreateWithoutCms_blockInput, {
    nullable: true
  })
  create?: Cms_sectionCreateWithoutCms_blockInput | undefined;

  @TypeGraphQL.Field(_type => Cms_sectionCreateOrConnectWithoutCms_blockInput, {
    nullable: true
  })
  connectOrCreate?: Cms_sectionCreateOrConnectWithoutCms_blockInput | undefined;

  @TypeGraphQL.Field(_type => Cms_sectionWhereUniqueInput, {
    nullable: true
  })
  connect?: Cms_sectionWhereUniqueInput | undefined;
}
