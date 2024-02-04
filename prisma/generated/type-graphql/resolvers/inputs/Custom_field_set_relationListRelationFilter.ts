import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_field_set_relationWhereInput } from "../inputs/Custom_field_set_relationWhereInput";

@TypeGraphQL.InputType("Custom_field_set_relationListRelationFilter", {})
export class Custom_field_set_relationListRelationFilter {
  @TypeGraphQL.Field(_type => Custom_field_set_relationWhereInput, {
    nullable: true
  })
  every?: Custom_field_set_relationWhereInput | undefined;

  @TypeGraphQL.Field(_type => Custom_field_set_relationWhereInput, {
    nullable: true
  })
  some?: Custom_field_set_relationWhereInput | undefined;

  @TypeGraphQL.Field(_type => Custom_field_set_relationWhereInput, {
    nullable: true
  })
  none?: Custom_field_set_relationWhereInput | undefined;
}
