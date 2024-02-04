import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Main_categoryWhereInput } from "../inputs/Main_categoryWhereInput";

@TypeGraphQL.InputType("Main_categoryListRelationFilter", {})
export class Main_categoryListRelationFilter {
  @TypeGraphQL.Field(_type => Main_categoryWhereInput, {
    nullable: true
  })
  every?: Main_categoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => Main_categoryWhereInput, {
    nullable: true
  })
  some?: Main_categoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => Main_categoryWhereInput, {
    nullable: true
  })
  none?: Main_categoryWhereInput | undefined;
}
