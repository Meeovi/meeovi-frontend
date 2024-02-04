import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_blockCreateOrConnectWithoutCms_slotInput } from "../inputs/Cms_blockCreateOrConnectWithoutCms_slotInput";
import { Cms_blockCreateWithoutCms_slotInput } from "../inputs/Cms_blockCreateWithoutCms_slotInput";
import { Cms_blockWhereUniqueInput } from "../inputs/Cms_blockWhereUniqueInput";

@TypeGraphQL.InputType("Cms_blockCreateNestedOneWithoutCms_slotInput", {})
export class Cms_blockCreateNestedOneWithoutCms_slotInput {
  @TypeGraphQL.Field(_type => Cms_blockCreateWithoutCms_slotInput, {
    nullable: true
  })
  create?: Cms_blockCreateWithoutCms_slotInput | undefined;

  @TypeGraphQL.Field(_type => Cms_blockCreateOrConnectWithoutCms_slotInput, {
    nullable: true
  })
  connectOrCreate?: Cms_blockCreateOrConnectWithoutCms_slotInput | undefined;

  @TypeGraphQL.Field(_type => Cms_blockWhereUniqueInput, {
    nullable: true
  })
  connect?: Cms_blockWhereUniqueInput | undefined;
}
