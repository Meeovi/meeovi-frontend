import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesWithAggregatesFilter } from "../inputs/BytesWithAggregatesFilter";

@TypeGraphQL.InputType("Media_tagScalarWhereWithAggregatesInput", {})
export class Media_tagScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Media_tagScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Media_tagScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_tagScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Media_tagScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_tagScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Media_tagScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  media_id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  tag_id?: BytesWithAggregatesFilter | undefined;
}
