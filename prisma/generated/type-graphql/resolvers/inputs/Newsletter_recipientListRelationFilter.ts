import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Newsletter_recipientWhereInput } from "../inputs/Newsletter_recipientWhereInput";

@TypeGraphQL.InputType("Newsletter_recipientListRelationFilter", {})
export class Newsletter_recipientListRelationFilter {
  @TypeGraphQL.Field(_type => Newsletter_recipientWhereInput, {
    nullable: true
  })
  every?: Newsletter_recipientWhereInput | undefined;

  @TypeGraphQL.Field(_type => Newsletter_recipientWhereInput, {
    nullable: true
  })
  some?: Newsletter_recipientWhereInput | undefined;

  @TypeGraphQL.Field(_type => Newsletter_recipientWhereInput, {
    nullable: true
  })
  none?: Newsletter_recipientWhereInput | undefined;
}
