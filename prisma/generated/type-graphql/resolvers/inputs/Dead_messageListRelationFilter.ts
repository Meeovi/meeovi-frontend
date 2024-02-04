import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Dead_messageWhereInput } from "../inputs/Dead_messageWhereInput";

@TypeGraphQL.InputType("Dead_messageListRelationFilter", {})
export class Dead_messageListRelationFilter {
  @TypeGraphQL.Field(_type => Dead_messageWhereInput, {
    nullable: true
  })
  every?: Dead_messageWhereInput | undefined;

  @TypeGraphQL.Field(_type => Dead_messageWhereInput, {
    nullable: true
  })
  some?: Dead_messageWhereInput | undefined;

  @TypeGraphQL.Field(_type => Dead_messageWhereInput, {
    nullable: true
  })
  none?: Dead_messageWhereInput | undefined;
}
