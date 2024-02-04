import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_slotWhereInput } from "../inputs/Cms_slotWhereInput";

@TypeGraphQL.InputType("Cms_slotRelationFilter", {})
export class Cms_slotRelationFilter {
  @TypeGraphQL.Field(_type => Cms_slotWhereInput, {
    nullable: true
  })
  is?: Cms_slotWhereInput | undefined;

  @TypeGraphQL.Field(_type => Cms_slotWhereInput, {
    nullable: true
  })
  isNot?: Cms_slotWhereInput | undefined;
}
