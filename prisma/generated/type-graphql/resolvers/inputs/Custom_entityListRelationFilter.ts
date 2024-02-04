import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_entityWhereInput } from "../inputs/Custom_entityWhereInput";

@TypeGraphQL.InputType("Custom_entityListRelationFilter", {})
export class Custom_entityListRelationFilter {
  @TypeGraphQL.Field(_type => Custom_entityWhereInput, {
    nullable: true
  })
  every?: Custom_entityWhereInput | undefined;

  @TypeGraphQL.Field(_type => Custom_entityWhereInput, {
    nullable: true
  })
  some?: Custom_entityWhereInput | undefined;

  @TypeGraphQL.Field(_type => Custom_entityWhereInput, {
    nullable: true
  })
  none?: Custom_entityWhereInput | undefined;
}
