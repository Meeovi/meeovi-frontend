import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_slotUpdateWithoutCms_blockInput } from "../inputs/Cms_slotUpdateWithoutCms_blockInput";
import { Cms_slotWhereUniqueInput } from "../inputs/Cms_slotWhereUniqueInput";

@TypeGraphQL.InputType("Cms_slotUpdateWithWhereUniqueWithoutCms_blockInput", {})
export class Cms_slotUpdateWithWhereUniqueWithoutCms_blockInput {
  @TypeGraphQL.Field(_type => Cms_slotWhereUniqueInput, {
    nullable: false
  })
  where!: Cms_slotWhereUniqueInput;

  @TypeGraphQL.Field(_type => Cms_slotUpdateWithoutCms_blockInput, {
    nullable: false
  })
  data!: Cms_slotUpdateWithoutCms_blockInput;
}
