import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_slotWhereInput } from "../inputs/Cms_slotWhereInput";

@TypeGraphQL.InputType("Cms_slotListRelationFilter", {})
export class Cms_slotListRelationFilter {
  @TypeGraphQL.Field(_type => Cms_slotWhereInput, {
    nullable: true
  })
  every?: Cms_slotWhereInput | undefined;

  @TypeGraphQL.Field(_type => Cms_slotWhereInput, {
    nullable: true
  })
  some?: Cms_slotWhereInput | undefined;

  @TypeGraphQL.Field(_type => Cms_slotWhereInput, {
    nullable: true
  })
  none?: Cms_slotWhereInput | undefined;
}
