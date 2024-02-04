import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Newsletter_recipient_tagWhereInput } from "../inputs/Newsletter_recipient_tagWhereInput";

@TypeGraphQL.InputType("Newsletter_recipient_tagListRelationFilter", {})
export class Newsletter_recipient_tagListRelationFilter {
  @TypeGraphQL.Field(_type => Newsletter_recipient_tagWhereInput, {
    nullable: true
  })
  every?: Newsletter_recipient_tagWhereInput | undefined;

  @TypeGraphQL.Field(_type => Newsletter_recipient_tagWhereInput, {
    nullable: true
  })
  some?: Newsletter_recipient_tagWhereInput | undefined;

  @TypeGraphQL.Field(_type => Newsletter_recipient_tagWhereInput, {
    nullable: true
  })
  none?: Newsletter_recipient_tagWhereInput | undefined;
}
