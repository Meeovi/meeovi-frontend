import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Newsletter_recipientWhereInput } from "../inputs/Newsletter_recipientWhereInput";

@TypeGraphQL.InputType("Newsletter_recipientRelationFilter", {})
export class Newsletter_recipientRelationFilter {
  @TypeGraphQL.Field(_type => Newsletter_recipientWhereInput, {
    nullable: true
  })
  is?: Newsletter_recipientWhereInput | undefined;

  @TypeGraphQL.Field(_type => Newsletter_recipientWhereInput, {
    nullable: true
  })
  isNot?: Newsletter_recipientWhereInput | undefined;
}
