import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_fieldWhereInput } from "../inputs/Custom_fieldWhereInput";

@TypeGraphQL.InputType("Custom_fieldListRelationFilter", {})
export class Custom_fieldListRelationFilter {
  @TypeGraphQL.Field(_type => Custom_fieldWhereInput, {
    nullable: true
  })
  every?: Custom_fieldWhereInput | undefined;

  @TypeGraphQL.Field(_type => Custom_fieldWhereInput, {
    nullable: true
  })
  some?: Custom_fieldWhereInput | undefined;

  @TypeGraphQL.Field(_type => Custom_fieldWhereInput, {
    nullable: true
  })
  none?: Custom_fieldWhereInput | undefined;
}
