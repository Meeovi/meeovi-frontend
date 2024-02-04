import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_slotCreateManyCms_blockInputEnvelope } from "../inputs/Cms_slotCreateManyCms_blockInputEnvelope";
import { Cms_slotCreateOrConnectWithoutCms_blockInput } from "../inputs/Cms_slotCreateOrConnectWithoutCms_blockInput";
import { Cms_slotCreateWithoutCms_blockInput } from "../inputs/Cms_slotCreateWithoutCms_blockInput";
import { Cms_slotWhereUniqueInput } from "../inputs/Cms_slotWhereUniqueInput";

@TypeGraphQL.InputType("Cms_slotCreateNestedManyWithoutCms_blockInput", {})
export class Cms_slotCreateNestedManyWithoutCms_blockInput {
  @TypeGraphQL.Field(_type => [Cms_slotCreateWithoutCms_blockInput], {
    nullable: true
  })
  create?: Cms_slotCreateWithoutCms_blockInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_slotCreateOrConnectWithoutCms_blockInput], {
    nullable: true
  })
  connectOrCreate?: Cms_slotCreateOrConnectWithoutCms_blockInput[] | undefined;

  @TypeGraphQL.Field(_type => Cms_slotCreateManyCms_blockInputEnvelope, {
    nullable: true
  })
  createMany?: Cms_slotCreateManyCms_blockInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Cms_slotWhereUniqueInput], {
    nullable: true
  })
  connect?: Cms_slotWhereUniqueInput[] | undefined;
}
