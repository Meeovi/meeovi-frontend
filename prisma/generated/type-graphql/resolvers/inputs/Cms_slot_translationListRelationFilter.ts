import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_slot_translationWhereInput } from "../inputs/Cms_slot_translationWhereInput";

@TypeGraphQL.InputType("Cms_slot_translationListRelationFilter", {})
export class Cms_slot_translationListRelationFilter {
  @TypeGraphQL.Field(_type => Cms_slot_translationWhereInput, {
    nullable: true
  })
  every?: Cms_slot_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => Cms_slot_translationWhereInput, {
    nullable: true
  })
  some?: Cms_slot_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => Cms_slot_translationWhereInput, {
    nullable: true
  })
  none?: Cms_slot_translationWhereInput | undefined;
}
