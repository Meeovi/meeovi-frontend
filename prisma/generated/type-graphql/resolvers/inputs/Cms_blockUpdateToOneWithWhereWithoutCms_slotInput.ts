import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_blockUpdateWithoutCms_slotInput } from "../inputs/Cms_blockUpdateWithoutCms_slotInput";
import { Cms_blockWhereInput } from "../inputs/Cms_blockWhereInput";

@TypeGraphQL.InputType("Cms_blockUpdateToOneWithWhereWithoutCms_slotInput", {})
export class Cms_blockUpdateToOneWithWhereWithoutCms_slotInput {
  @TypeGraphQL.Field(_type => Cms_blockWhereInput, {
    nullable: true
  })
  where?: Cms_blockWhereInput | undefined;

  @TypeGraphQL.Field(_type => Cms_blockUpdateWithoutCms_slotInput, {
    nullable: false
  })
  data!: Cms_blockUpdateWithoutCms_slotInput;
}
