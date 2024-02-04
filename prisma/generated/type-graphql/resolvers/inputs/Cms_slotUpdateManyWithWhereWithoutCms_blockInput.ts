import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_slotScalarWhereInput } from "../inputs/Cms_slotScalarWhereInput";
import { Cms_slotUpdateManyMutationInput } from "../inputs/Cms_slotUpdateManyMutationInput";

@TypeGraphQL.InputType("Cms_slotUpdateManyWithWhereWithoutCms_blockInput", {})
export class Cms_slotUpdateManyWithWhereWithoutCms_blockInput {
  @TypeGraphQL.Field(_type => Cms_slotScalarWhereInput, {
    nullable: false
  })
  where!: Cms_slotScalarWhereInput;

  @TypeGraphQL.Field(_type => Cms_slotUpdateManyMutationInput, {
    nullable: false
  })
  data!: Cms_slotUpdateManyMutationInput;
}
