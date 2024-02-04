import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_field_setWhereInput } from "../inputs/Custom_field_setWhereInput";

@TypeGraphQL.InputType("Custom_field_setListRelationFilter", {})
export class Custom_field_setListRelationFilter {
  @TypeGraphQL.Field(_type => Custom_field_setWhereInput, {
    nullable: true
  })
  every?: Custom_field_setWhereInput | undefined;

  @TypeGraphQL.Field(_type => Custom_field_setWhereInput, {
    nullable: true
  })
  some?: Custom_field_setWhereInput | undefined;

  @TypeGraphQL.Field(_type => Custom_field_setWhereInput, {
    nullable: true
  })
  none?: Custom_field_setWhereInput | undefined;
}
