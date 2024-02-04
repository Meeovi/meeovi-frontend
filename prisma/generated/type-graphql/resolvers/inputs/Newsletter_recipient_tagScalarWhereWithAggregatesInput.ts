import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesWithAggregatesFilter } from "../inputs/BytesWithAggregatesFilter";

@TypeGraphQL.InputType("Newsletter_recipient_tagScalarWhereWithAggregatesInput", {})
export class Newsletter_recipient_tagScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Newsletter_recipient_tagScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Newsletter_recipient_tagScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_recipient_tagScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Newsletter_recipient_tagScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_recipient_tagScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Newsletter_recipient_tagScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  newsletter_recipient_id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  tag_id?: BytesWithAggregatesFilter | undefined;
}
